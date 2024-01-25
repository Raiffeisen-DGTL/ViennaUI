import React, { Children, cloneElement, CSSProperties, ReactElement } from 'react';
import { AccordionList, PropsAccordionList } from './Accordion.styles';
import { Item } from './Item';
import { BoxStyled } from '../Utils/styled';

export interface AccordionProps extends BoxStyled<typeof AccordionList, PropsAccordionList> {
    /** Размеры */
    size?: PropsAccordionList['$size'];
    /** Позиция стрелки в заголовке */
    iconPosition?: PropsAccordionList['$iconPosition'];
    className?: string;
    style?: CSSProperties;
}

export const Accordion: React.FC<AccordionProps> & { Item: typeof Item } = ({
    children,
    size = 'm',
    iconPosition = 'right',
    ...attrs
}) => {
    const iconSize = size === 's' ? 'm' : 'l';

    const content = Children.map(Children.toArray(children), (child) => {
        const el = child as ReactElement;
        if (
            el?.type &&
            typeof el.type !== 'string' &&
            (el.type as unknown as { displayName: string }).displayName === 'Item'
        ) {
            return cloneElement(el, { $size: size, $iconPosition: iconPosition, $iconSize: iconSize });
        }

        return el;
    });

    return (
        <AccordionList {...(attrs as {})} $size={size} $iconPosition={iconPosition} $iconSize={iconSize}>
            {content}
        </AccordionList>
    );
};

Accordion.Item = Item;
Accordion.displayName = 'Accordion';
