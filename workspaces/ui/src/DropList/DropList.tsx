import React, { ForwardRefExoticComponent, RefAttributes, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDrop, usePortal } from 'vienna.react-use';
import { Box } from './DropList.styles';
import { Item, Props as ItemProps } from './Item';

export interface DropListProps {
    [key: string]: any;
    ref?: React.Ref<HTMLDivElement>;
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
    followParentWhenScroll?: boolean;
    onHide?: () => void;
}

export const DropList: React.FC<DropListProps> & { Item: React.FC<ItemProps> } = React.forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        const {
            children,
            size = 'm',
            align = 'vertical',
            coords,
            fixed,
            float = 'start',
            margins,
            onMouseDown,
            container,
            followParentWhenScroll,
            fitItems,
            onHide,
            ...attrs
        } = props;

        const portalContainer = usePortal();
        const parentRef = useRef<HTMLDivElement>(null);
        const resultRef = useDrop({
            align,
            float,
            margins: margins ?? (align === 'vertical' ? { x: 0, y: 4 } : { x: 4, y: 0 }),
            fixed,
            coords,
            container,
            parentRef,
            followParentWhenScroll,
            fitListToParent: fitItems,
            callbacks: { onHide },
        });

        if (resultRef) {
            if (typeof ref === 'function') {
                (ref as any)(resultRef);
            }
            if (ref && typeof ref === 'object') {
                (ref as any).current = resultRef.current;
            }
        }

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
            <Box {...attrs} ref={resultRef} role='listbox' fitItems={fitItems} onMouseDown={handleMouseDown}>
                {React.Children.map(children, (child: any) => React.cloneElement(child, { size }))}
            </Box>
        );

        if (fixed && document) {
            return (
                <>
                    <div ref={parentRef} />
                    {ReactDOM.createPortal(result, portalContainer ?? document.body)}
                </>
            );
        }

        return result;
    }
) as ForwardRefExoticComponent<DropListProps & RefAttributes<HTMLDivElement>> & { Item: React.FC<ItemProps> };

DropList.Item = Item;
DropList.defaultProps = {
    size: 'm',
    scrollable: true,
};

DropList.displayName = 'DropList';
export default DropList;
