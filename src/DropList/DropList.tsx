import React, {
    ForwardRefExoticComponent,
    isValidElement,
    ReactElement,
    RefAttributes,
    useCallback,
    useRef,
} from 'react';
import ReactDOM from 'react-dom';
import { useDrop, usePortal, type UseDropConfig } from 'vienna.react-use';
import { Box, PropsBox } from './DropList.styles';
import { Item, ItemProps } from './Item';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface DropListProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    maxHeight?: PropsBox['$maxHeight'];
    width?: PropsBox['$width'];
    fitItems?: PropsBox['$fitItems'];
    scrollable?: PropsBox['$scrollable'];
    size?: ResponsiveProp<'s' | 'm' | 'l', B>;
    align?: UseDropConfig['align'];
    float?: 'start' | 'end';
    margins?: { x: number; y: number };
    fixed?: boolean;
    coords?: { x: number; y: number };

    /** Опционально: элемент от которого вести расчет пересечений */
    container?: HTMLElement;
    followParentWhenScroll?: boolean;
    onHide?: () => void;
}

export const DropList = React.forwardRef(
    <B,>(props: DropListProps<B extends void ? Breakpoints : B>, ref: React.Ref<HTMLElement>) => {
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
            scrollable = true,
            width,
            maxHeight,
            ...attrs
        } = props;

        const parentRef = useRef<HTMLDivElement>(null);
        const resultRef = useDrop<HTMLDivElement>({
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

        React.useEffect(() => {
            if (resultRef) {
                if (typeof ref === 'function') {
                    (ref as any)(resultRef);
                }
                if (ref && typeof ref === 'object') {
                    (ref as any).current = resultRef.current;
                }
            }
        }, [resultRef, ref]);

        const handleMouseDown = useCallback(
            (e) => {
                e.stopPropagation();
                if (typeof onMouseDown === 'function') {
                    onMouseDown?.(e);
                }
            },
            [onMouseDown]
        );

        const result = (
            <Box
                {...(attrs as {})}
                $width={width}
                $fitItems={fitItems}
                $scrollable={scrollable}
                $maxHeight={maxHeight}
                ref={resultRef}
                role='listbox'
                onMouseDown={handleMouseDown}>
                {React.Children.map(children as ReactElement[], (child: ReactElement<ItemProps>) =>
                    isValidElement(child) ? React.cloneElement(child, { size }) : null
                )}
            </Box>
        );

        const containerPortal = usePortal();

        if (fixed && document) {
            return (
                <>
                    <div ref={parentRef} />
                    {ReactDOM.createPortal(result, containerPortal ?? document.body)}
                </>
            );
        }

        return result;
    }
) as ForwardRefExoticComponent<DropListProps & RefAttributes<HTMLElement>> & { Item: typeof Item };

DropList.Item = Item;

DropList.displayName = 'DropList';
