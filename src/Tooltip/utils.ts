/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { PropsBox } from './TooltipNative/TolltipNative.styles';

const margin = 8; // отступ тултипа от границы экрана
const shift = 10; // сдвиг тултипа от окончания стрелки до целевого объекта
const triangleBase = 7; // высота треугольника (стрелки)

/**
 * Вычисление дополнительного сдвига по горизонтали для позициониравния тултипа внутри видимой области окна
 * @param {DOMRect} pos параметры размеров целевого объекта тултипа
 * @param {*} curWidth ширина тултипа
 * @returns {Object}
 */
const getAdditionalHorizontalPosition = (pos: DOMRect, curWidth: number): PropsBox => {
    let res: PropsBox = {}; // заготовка результата
    const halfCurWidth = curWidth / 2; // половина ширины тултипа
    const calibrate = (pos.width - curWidth) / 2; // тултип сдвинутый на половину величины целевого объекта
    const defaultArrowPosition: PropsBox = { $arrowShift: { left: halfCurWidth - triangleBase } };
    if (pos.left + pos.width / 2 >= window.innerWidth / 2) {
        // целевой объект лежит правее центра видимой области экрана
        const right = window.innerWidth - pos.right + calibrate;
        res = { ...defaultArrowPosition, $right: right }; // вычисляем сдвиг от правой границы экрана
        if (right < 0) {
            // если тултип уходит за правую грницу то пересчитываем его положение и сдвигаем стрелку
            res = { $right: margin, $arrowShift: { right: halfCurWidth + right - margin - triangleBase } };
        }
    } else {
        // целевой объект лежит левее центра видимой области экрана
        const left = pos.left + calibrate;
        res = { ...defaultArrowPosition, $left: left }; // вычисляем сдвиг от левой границы экрана
        if (left < 0) {
            // если тултип уходит за левую грницу то пересчитываем его положение и сдвигаем стрелку
            res = { $left: margin, $arrowShift: { left: halfCurWidth + left - margin - triangleBase } };
        }
    }

    return res; // возвращаем результат
};

/* Аналогично getAdditionalHorizontalPosition но для вертикальной позиции */
const getAdditionalVerticalPosition = (pos: DOMRect, curHeight: number): PropsBox => {
    let res: PropsBox = {};
    const halfCurHeight = curHeight / 2;
    const calibrate = (pos.height - curHeight) / 2;
    const defaultArrowPosition: PropsBox = { $arrowShift: { top: halfCurHeight - triangleBase } };
    if (pos.top + pos.height / 2 >= window.innerHeight / 2) {
        const bottom = window.innerHeight - pos.bottom + calibrate;
        res = { ...defaultArrowPosition, $bottom: bottom };
        if (bottom < 0) {
            res = { $bottom: margin, $arrowShift: { bottom: halfCurHeight - margin - triangleBase } };
        }
    } else {
        const top = pos.top + calibrate;
        res = { ...defaultArrowPosition, $top: top };
        if (top < 0) {
            res = { $top: margin, $arrowShift: { top: halfCurHeight - margin - triangleBase } };
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
export const getPosition = (
    target: HTMLElement,
    current: HTMLElement,
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto'
): PropsBox => {
    const pos = target.getBoundingClientRect();
    const curHeight: number = current.offsetHeight;
    const curWidth: number = current.offsetWidth;
    if (anchor === 'bottom' || (anchor === 'auto' && window.innerHeight > pos.top + pos.height + curHeight + shift)) {
        return {
            $top: pos.top + pos.height + shift,
            ...getAdditionalHorizontalPosition(pos, curWidth),
            $arrow: 'top',
            $show: true,
        };
    }
    if (anchor === 'top' || (anchor === 'auto' && pos.top - curHeight - shift > 0)) {
        return {
            $top: pos.top - curHeight - shift,
            ...getAdditionalHorizontalPosition(pos, curWidth),
            $arrow: 'bottom',
            $show: true,
        };
    }
    if (anchor === 'left' || (anchor === 'auto' && pos.left - curWidth - shift > 0)) {
        return {
            ...getAdditionalVerticalPosition(pos, curHeight),
            $left: pos.left - curWidth - shift,
            $arrow: 'right',
            $show: true,
        };
    }
    if (anchor === 'right' || (anchor === 'auto' && window.innerWidth > pos.left + pos.width + curWidth + shift)) {
        return {
            ...getAdditionalVerticalPosition(pos, curHeight),
            $left: pos.left + pos.width + shift,
            $arrow: 'left',
            $show: true,
        };
    }

    return { $left: 0, $top: 0, $show: false };
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
