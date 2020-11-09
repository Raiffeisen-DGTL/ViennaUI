/* eslint-disable @typescript-eslint/restrict-plus-operands */

const margin = 8; // отступ тултипа от границы экрана
const shift = 10; // сдвиг тултипа от окончания стрелки до целевого объекта
const triangleBase = 7; // высота треугольника (стрелки)

/**
 * Вычисление дополнительного сдвига по горизонтали для позициониравния тултипа внутри видимой области окна
 * @param {DOMRect} pos параметры размеров целевого объекта тултипа
 * @param {*} curWidth ширина тултипа
 * @returns {Object}
 */
const getAdditionalHorisontalPosition = (pos: DOMRect, curWidth) => {
    let res: any = {}; // заготовка результата
    const halfCurWidth = curWidth / 2; // половина ширины тултипа
    const calibrate = (pos.width - curWidth) / 2; // тултип сдвинутый на половину величины целевого объекта
    const defaultArrowPosition = { arrowShift: { left: halfCurWidth - triangleBase } };
    if (pos.left + pos.width / 2 >= window.innerWidth / 2) {
        // целевой объект лежит правее центра видимой области экрана
        res = { ...defaultArrowPosition, right: window.innerWidth - pos.right + calibrate }; // вычисляем сдвиг от правой границы экрана
        if (res.right < 0) {
            // если тултип уходит за правую грницу то пересчитываем его положение и сдвигаем стрелку
            res = { right: margin, arrowShift: { right: halfCurWidth + res.right - margin - triangleBase } };
        }
    } else {
        // целевой объект лежит левее центра видимой области экрана
        res = { ...defaultArrowPosition, left: pos.left + calibrate }; // вычисляем сдвиг от левой границы экрана
        if (res.left < 0) {
            // если тултип уходит за левую грницу то пересчитываем его положение и сдвигаем стрелку
            res = { left: margin, arrowShift: { left: halfCurWidth + res.left - margin - triangleBase } };
        }
    }

    return res; // возвращаем результат
};

/* Аналогично getAdditionalHorisontalPosition но для вертикальной позиции */
const getAdditionalVerticalPosition = (pos: DOMRect, curHeight) => {
    let res: any = {};
    const halfCurHeight = curHeight / 2;
    const calibrate = (pos.height - curHeight) / 2;
    const defaultArrowPosition = { arrowShift: { top: halfCurHeight - triangleBase } };
    if (pos.top + pos.height / 2 >= window.innerHeight / 2) {
        res = { ...defaultArrowPosition, bottom: window.innerHeight - pos.bottom + calibrate };
        if (res.bottom < 0) {
            res = { bottom: margin, arrowShift: { bottom: halfCurHeight - margin - triangleBase } };
        }
    } else {
        res = { ...defaultArrowPosition, top: pos.top + calibrate };
        if (res.top < 0) {
            res = { top: margin, arrowShift: { top: halfCurHeight - margin - triangleBase } };
        }
    }

    return res;
};

/**
 * Вычисление полной позиции тултипа
 * @param {*} target
 * @param {*} current
 * @param {('left' | 'right' | 'top' | 'bottom' | 'auto')} [anchor]
 * @returns {Object}
 */
export const getPosition = (target, current, anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto') => {
    const pos = target.getBoundingClientRect() as DOMRect;
    const curHeight: number = current.offsetHeight;
    const curWidth: number = current.offsetWidth;
    if (anchor === 'bottom' || (anchor === 'auto' && window.innerHeight > pos.top + pos.height + curHeight + shift)) {
        return {
            top: pos.top + pos.height + shift,
            ...getAdditionalHorisontalPosition(pos, curWidth),
            arrow: 'top',
            show: true,
        };
    }
    if (anchor === 'top' || (anchor === 'auto' && pos.top - curHeight - shift > 0)) {
        return {
            top: pos.top - curHeight - shift,
            ...getAdditionalHorisontalPosition(pos, curWidth),
            arrow: 'bottom',
            show: true,
        };
    }
    if (anchor === 'left' || (anchor === 'auto' && pos.left - curWidth - shift > 0)) {
        return {
            ...getAdditionalVerticalPosition(pos, curHeight),
            left: pos.left - curWidth - shift,
            arrow: 'right',
            show: true,
        };
    }
    if (anchor === 'right' || (anchor === 'auto' && window.innerWidth > pos.left + pos.width + curWidth + shift)) {
        return {
            ...getAdditionalVerticalPosition(pos, curHeight),
            left: pos.left + pos.width + shift,
            arrow: 'left',
            show: true,
        };
    }

    return { left: 0, top: 0, show: false };
};

export const getValidTarget = (target: HTMLElement): HTMLElement => {
    if (
        !target.childNodes ||
        (target.childNodes.length > 1 && !Array.from(target.childNodes).every((c) => c.nodeType === 3))
    ) {
        // eslint-disable-next-line no-console
        console.warn(`Внимание: Для коректной работы компонента в него следует передавать:
        1 - один вложеный компонент
        2 - строку из текстовых нод
        При передаче другого числа компонентов или последовательности за основу расчетов будет взята обертка tooltip:
        div - для обычного использования
        span - для inline.
        `);
        return target;
    }
    if (target.childNodes.length === 1 && target.firstChild && target.firstChild.nodeType === 1) {
        return target.firstChild as HTMLElement;
    }

    return target;
};
