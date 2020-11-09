import React, { useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDrop } from 'vienna.react-use';
import { Box } from './DropList.styles';
import { Item, Props as ItemProps } from './Item';

export interface DropListProps {
    [key: string]: any;
    children?: React.ReactNode;
    size?: 's' | 'm' | 'l';
    maxHeight?: number;
    width?: number;
    fitItems?: boolean;
    align?: 'vertical' | 'horizontal';
    float?: 'start' | 'end';
    scrollable?: boolean;
    margins?: { x: number; y: number };
    fixed?: boolean;
    coords?: { x: number; y: number };

    /** Опционально: элемент от которого вести расчет пересечений */
    container?: any;
    allowScrollUnstable?: boolean;
}

export const DropList: React.FC<DropListProps> & { Item: React.FC<ItemProps> } = (props) => {
    const {
        children,
        size = 'm',
        align = 'vertical',
        coords,
        fixed,
        float = 'start',
        margins = { x: 0, y: 4 },
        onMouseDown,
        container,
        allowScrollUnstable,
        ...attrs
    } = props;

    const parentRef = useRef<HTMLDivElement>(null);
    const ref = useDrop(align, float, margins, fixed, coords, container, parentRef, allowScrollUnstable);

    const handleMouseDown = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof onMouseDown === 'function') {
                onMouseDown(e);
            }
        },
        [onMouseDown]
    );

    const result = (
        <Box {...attrs} ref={ref} role='listbox' onMouseDown={handleMouseDown}>
            {React.Children.map(children, (child: any) => React.cloneElement(child, { size }))}
        </Box>
    );

    if (fixed && document) {
        return (
            <>
                <div ref={parentRef} />
                {ReactDOM.createPortal(result, document.body)}
            </>
        );
    }

    return result;
};

DropList.Item = Item;
DropList.defaultProps = {
    size: 'm',
    scrollable: true,
};

DropList.displayName = 'DropList';
export default DropList;
