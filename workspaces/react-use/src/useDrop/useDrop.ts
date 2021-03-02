/* eslint-disable no-lonely-if */
import React, { useEffect, useRef, useCallback } from 'react';
import { getScrollParent, getScrollParents, isElementInViewport } from '../getScrollParent';
import { useDebounce } from '../useDebounce';

interface Coords {
    x: number;
    y: number;
}

export interface UseDropCallbacks {
    onHide?: () => void;
}

export interface UseDropConfig {
    align: 'vertical' | 'horizontal';
    float: 'start' | 'end';
    margins: Coords;
    fixed?: boolean;
    coords?: Coords;
    container?: any;
    parentRef?: React.RefObject<any>;
    followParentWhenScroll?: boolean;
    callbacks?: UseDropCallbacks;
    fitListToParent?: boolean;
}

// В коде используются разные расчеты для двух случаев позицианирования
// 1 - fixed
// 2 - absolute
// разные расчеты требуются из-за того, что в случае с fixed и getBoundingClientRect все координаты считаются
// относительно левого верхнего угла, т.е. right = left + width .
// В случае с absolute left = 0 и right = 0 указывают отступ от левого и правого краев родительского (пближайшего relative) элемента.
// Если возникают ошибки в позиционировании - следует проверить методы расчетов и обратить внимание на тип позиционирования.

// Устанавливаем правильную начальную позицию относительно родителя
const setInitPositionByParent = (
    element,
    parentRect: DOMRect,
    float: 'start' | 'end',
    align: 'vertical' | 'horizontal',
    margins: Coords,
    fixed: boolean
) => {
    // Если элемент выпадает по горизонтали
    if (align === 'horizontal') {
        // Приоритет выпадания справа налево (элемент появится слева от родителя)
        const left = fixed ? parentRect.left - element.offsetWidth - margins.x : -element.offsetWidth - margins.x;
        element.style.left = `${left}px`;
        if (float === 'start') {
            // Элемент установится по нижнему краю с отступом
            const top = fixed ? parentRect.top + margins.y : margins.y;
            element.style.top = `${top}px`;
            element.style.bottom = ''; // сброс неопределенности, так как позиционные параметры более приоритетны, чем параметры размеров
        } else {
            // Элемент установится по верхнему краю с отступом
            if (fixed) {
                element.style.top = `${parentRect.bottom - element.offsetHeight - margins.y}px`;
                element.style.bottom = ''; // --
            } else {
                element.style.bottom = `${margins.y}px`;
                element.style.top = ''; // --
            }
        }
    }
    if (align === 'vertical') {
        // Приоритет выпадания сверху вниз (элемент появится снизу от родителя)
        const top = fixed ? parentRect.top + parentRect.height + margins.y : parentRect.height + margins.y;
        element.style.top = `${top}px`;
        if (float === 'start') {
            // Элемент установится по левому краю с отступом
            const left = fixed ? parentRect.left + margins.x : margins.x;
            element.style.left = `${left}px`;
            element.style.right = ''; // --
        } else {
            // Элемент установится по правому краю с отступом
            if (fixed) {
                element.style.left = `${parentRect.left - element.offsetWidth + parentRect.width - margins.x}px`;
                element.style.right = ''; // --
            } else {
                element.style.right = `${-margins.x}px`;
                element.style.left = ''; // --
            }
        }
    }
};

// Устанавливаем правильную начальную позицию по координатам
const setInitPositionByCoords = (element, coords: Coords, margins: Coords) => {
    element.style.top = `${coords.y + margins.y}px`;
    element.style.left = `${coords.x + margins.x}px`;
};

// Финальное выравнивание и чистка
const fixFloat = (
    element: HTMLElement,
    parentRect: DOMRect,
    overflowRect: DOMRect,
    margins: Coords,
    align: 'vertical' | 'horizontal',
    fixed: boolean
) => {
    const elementRect = element.getBoundingClientRect();
    if (align === 'vertical') {
        const left = fixed ? elementRect.left + elementRect.width : parentRect.left + elementRect.width + margins.x;
        if (left > overflowRect.right) {
            element.style.left = `${
                fixed
                    ? parentRect.right - elementRect.width - margins.x
                    : parentRect.width - margins.x - elementRect.width
            }px`;
        }
    } else if (elementRect.top + elementRect.height > overflowRect.bottom) {
        element.style.top = '';
        element.style.bottom = `${fixed ? parentRect.bottom + margins.y : margins.y}px`;
    }
};

// Проверяем пересечение
const resetPositionByParent = (
    element: HTMLElement,
    parentRect: DOMRect,
    align: 'vertical' | 'horizontal',
    margins = { x: 0, y: 0 },
    fixed: boolean,
    container
) => {
    // Перекрывающий элемент
    const overflowElement = container ?? (getScrollParent(element) as HTMLElement);
    // Габариты перекрывающего элемента
    const overflowElementRect = fixed
        ? // При fixed считаем от границ окна, а не body
          {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
              bottom: window.innerHeight,
              right: window.innerWidth,
          }
        : overflowElement.getBoundingClientRect();
    // Габариты выпадающего элемента
    const rect = element.getBoundingClientRect();

    if (align === 'horizontal') {
        // Если элемент ушел за правый край контейнера
        if (parentRect.right + rect.width > overflowElementRect.right) {
            // перебрасываем его влево
            const right = fixed ? parentRect.right + margins.x : parentRect.width + margins.x;
            element.style.right = `${right}px`;
            element.style.left = ''; // очищаем неопределенность
            const top = fixed ? parentRect.top + margins.y : margins.y;
            element.style.top = `${top}px`; // перекидываем вниз
        }
        // Если элемент ушел за левый край контейнера
        if (parentRect.left - rect.width < overflowElementRect.left) {
            // перекидываем его вправо
            const left = fixed ? parentRect.left + margins.x : parentRect.width + margins.x;
            element.style.left = `${left}px`;
            element.style.right = ''; // --
            const top = fixed ? parentRect.top + margins.y : margins.y;
            element.style.top = `${top}px`; // --
        }
    }

    // Если элемент ушел выше ниже нижней границы контейнера
    if (parentRect.bottom + rect.height > overflowElementRect.bottom) {
        if (align === 'vertical') {
            // Перекидываем еговвеерх
            const top = fixed ? parentRect.top - rect.height - margins.y : -rect.height - margins.y;
            element.style.top = `${top}px`;
        } else {
            const top = fixed
                ? parentRect.top - rect.height + parentRect.height + margins.y
                : -rect.height + parentRect.height + margins.y;
            element.style.top = `${top}px`;
        }
    }

    // Если компонент ушел выше верхней границы
    if (rect.top < overflowElementRect.top) {
        // Перерисовываем его вниз
        const top = fixed ? parentRect.top + margins.y : margins.y;
        element.style.top = `${top}px`;
        element.style.bottom = '';
    }

    // Ровняем компонент
    fixFloat(element, parentRect, overflowElementRect, margins, align, fixed);
};

// Проверяем пересечение с контейнером по координатам
const resetPositionByCoords = (element: HTMLElement, coords: Coords, margins = { x: 0, y: 0 }) => {
    const rect = element.getBoundingClientRect();
    if (coords.x + rect.width > window.innerWidth) {
        element.style.left = `${coords.x - rect.width - margins.x}px`;
        element.style.right = '';
    } else if (coords.x - rect.width < 0) {
        element.style.left = `${coords.x + margins.x}px`;
        element.style.right = '';
    }

    if (coords.y + rect.height > window.innerHeight) {
        element.style.top = `${coords.y - rect.height - margins.y}px`;
    } else if (coords.y - rect.height < 0) {
        element.style.top = `${coords.y + margins.y}px`;
    }
};

const setElement = (
    dropRef,
    align,
    float,
    margins,
    fixed,
    coords,
    container?,
    parentRef?,
    scrollHandler?,
    fitListToParent?
) => {
    const drop = dropRef.current as HTMLElement;
    if (drop) {
        // получаем родителя, относительно которого будем вести все расчеты
        const parent = parentRef?.current?.parentElement ?? (drop.parentElement as HTMLElement);
        if (parent) {
            // Делаем список невидимым
            drop.style.opacity = '0';

            // Получаем габариты родителя
            const parentRect = parent.getBoundingClientRect();

            // Устанавливаем position в зависимости от выбранной стратегии
            if (fixed) {
                drop.style.position = 'fixed';
                if (fitListToParent) {
                    drop.style.minWidth = `${parent.offsetWidth}px`;
                    drop.style.maxWidth = `${parent.offsetWidth}px`;
                    drop.style.width = `${parent.offsetWidth}px`;
                }
            } else {
                drop.style.position = 'absolute';
                drop.style.minWidth = ``;
                drop.style.maxWidth = ``;
                drop.style.width = '';
            }

            // Принудительный сброс позиции, если задана
            drop.style.top = '';
            drop.style.left = '';
            drop.style.bottom = '';
            drop.style.right = '';

            // Производим расчеты относительно координат или родителя
            if (coords) {
                setInitPositionByCoords(drop, coords, margins); // Первичная простановка позиции, чтобы начать расчеты
                resetPositionByCoords(drop, coords, margins); // Перерасчет позиции
            } else {
                setInitPositionByParent(drop, parentRect, float, align, margins, fixed); // Первичная простановка позиции, чтобы начать расчеты
                resetPositionByParent(drop, parentRect, align, margins, fixed, container); // Перерасчет позиции относительно контейнера
            }

            // Ловим событие scroll, если надо, на всех родителях, которые его поддерживают
            if (scrollHandler) {
                const scrollable = getScrollParents(parent);
                scrollable.forEach((s) => s.addEventListener('scroll', scrollHandler));
            }

            // Показываем выпавший и спозиционированный элемент
            drop.style.opacity = '1';
        }
    }
};

// Оптимизация скрола
const updateElement = (
    dropRef,
    align,
    float,
    margins,
    fixed,
    coords,
    container?,
    parentRef?,
    callbacks?: UseDropCallbacks
) => {
    const drop = dropRef.current as HTMLElement;
    if (drop) {
        // получаем родителя, относительно которого будем вести все расчеты
        const parent = parentRef?.current?.parentElement ?? (drop.parentElement as HTMLElement);
        const parentRect = parent.getBoundingClientRect();

        if (coords) {
            setInitPositionByCoords(drop, coords, margins); // Первичная простановка позиции, чтобы начать расчеты
            resetPositionByCoords(drop, coords, margins); // Перерасчет позиции
        } else {
            setInitPositionByParent(drop, parentRect, float, align, margins, fixed); // Первичная простановка позиции, чтобы начать расчеты
            resetPositionByParent(drop, parentRect, align, margins, fixed, container); // Перерасчет позиции относительно контейнера
        }

        // Проверяем не исчез ли из области видимости якорный компонент
        const scrollable = getScrollParent(parent);
        if (!isElementInViewport(parent, scrollable)) {
            if (typeof callbacks?.onHide === 'function') {
                callbacks?.onHide();
            }
        }
    }
};

/*
    Хук для создания выпадающих областей.

    Для совместимости с IOS изначальное состояние элемента задается невидимым через opacity, а не скрытым через visibility, так как последнее приводит к неработающему скроллу.

    align - определяет направление выпадания списка
        horisontal - по горизонтальной оси
        vertical - по вертикальной оси
    
    float - определяет выравниваниее компонента при выпадании
        start - по верхнему краю для horizontal | по левому краю для vertical
        end - по нижнему краю для horizontal | по правому краю для vertical

    margins - дополнительные отступы от родительского контейнера

    fixed - определяет стратегию выпадания относительно родительского элемента или относительно всего окна

    coords - работают в паре с fixed - позволяют передать якорную точку для выпадающего элемента

    container - позволяет вручную определить контейнер, относительно которого будут вестись расчеты пересечений с краями

    parentRef - ссылка на родительский элемент

    followParentWhenScroll - позволяет элементу оставаться для пользователя зрительно на фиксированном месте страницы (а не экрана)
    событие скролла навешивается на все родительские элементы, которые его поддерживают, если элемент уходит из области видимости любого из родителей список прячется

    callbacks - события генерируемы хуком
*/

export const useDrop = (config: UseDropConfig): React.RefObject<any> => {
    const {
        align = 'vertical',
        float = 'start',
        margins = { x: 0, y: 0 },
        fixed,
        coords,
        container,
        parentRef,
        followParentWhenScroll,
        callbacks,
        fitListToParent,
    } = config;

    const dropRef = useRef<HTMLElement>(null);
    const debouncerRender = useDebounce(setElement, 0); // Задержка рендера (так как приложение может быть сильно нагружено, повышаем шанс того, что все будет отрендерено)
    const debouncerScroll = useDebounce(updateElement, 0); // Задержка скрола

    // Метод используется в событии scroll
    const scrollHandler = useCallback(
        () => debouncerScroll(dropRef, align, float, margins, fixed, coords, container, parentRef, callbacks),
        [debouncerScroll, align, margins, float, fixed, coords, container, parentRef, callbacks]
    );

    useEffect(() => {
        // Вызываем установку позиции при появлении элемента
        debouncerRender(
            dropRef, // ссылка на управляемый элемент
            align,
            float,
            margins,
            fixed,
            coords,
            container,
            parentRef,
            followParentWhenScroll && scrollHandler,
            fitListToParent,
            null // пустой параметр (debouncer ожидает последним аргументом функцию колбэк) TODO: пока кажется удобным, этот случай скорее исключение
        );

        const drop = dropRef.current as HTMLElement;

        const overflowElement = container ?? (getScrollParent(parentRef?.current) as HTMLElement);
        let resizeObserver;

        // Включаем слежение за изменением размера родителя (все кроме IE)
        if ((window as any)?.ResizeObserver && overflowElement) {
            resizeObserver = new (window as any).ResizeObserver(() => {
                scrollHandler();
            });
            resizeObserver.observe(overflowElement);
        }

        return () => {
            // Выключаем событие скрола при анмаунте
            if (followParentWhenScroll) {
                const parent = container ?? (drop.parentElement as HTMLElement);
                const scrollable = getScrollParents(parent);
                scrollable.forEach((s) => s.removeEventListener('scroll', scrollHandler));
            }

            // Выключаем слежение за размерами родителя
            if (resizeObserver) {
                resizeObserver.unobserve(overflowElement);
            }
        };
    }, [
        debouncerRender,
        scrollHandler,
        dropRef,
        align,
        float,
        margins,
        fixed,
        coords,
        container,
        followParentWhenScroll,
        parentRef,
        fitListToParent,
    ]);

    return dropRef; // ссылка на управляемый элемент должна быть присвоена выпадающему элементу
};
