import React, {
    ForwardRefExoticComponent,
    RefAttributes,
    useCallback,
    useRef,
    ReactNode,
    Ref,
    forwardRef,
    isValidElement,
    ReactElement,
} from 'react';
import ReactDOM from 'react-dom';
import { useDrop, usePortal } from 'vienna.react-use';
import { Box } from '../DropList/DropList.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { Item, ItemProps } from '../DropList/Item';
import { DropListProps } from '../DropList/DropList';

export interface DropListInnerProps<B = Breakpoints> extends DropListProps<B> {
    groupItems?: boolean;
}

export const DropListInner = forwardRef(
    <B,>(props: DropListInnerProps<B extends void ? Breakpoints : B>, ref: Ref<HTMLDivElement>) => {
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
            groupItems,
            scrollable = true,
            width,
            maxHeight,
            ...attrs
        } = props;

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
                    onMouseDown(e);
                }
            },
            [onMouseDown]
        );

        const result = groupItems ? (
            <Box
                {...(attrs as {})}
                ref={resultRef as any}
                role='listbox'
                $width={width}
                $fitItems={fitItems}
                $scrollable={scrollable}
                $maxHeight={maxHeight}
                onMouseDown={handleMouseDown}>
                {React.Children.map(
                    children,
                    (ch: any) =>
                        groupItems &&
                        ch.props.value?.category && (
                            <option label={ch.props.value?.category} style={{ color: '#AAABAD' }}>
                                {
                                    React.Children.map(children as ReactElement[], (child: ReactElement<ItemProps>) =>
                                        isValidElement(child) ? React.cloneElement(child, { size }) : null
                                    ) as ReactNode[]
                                }
                            </option>
                        )
                )}
            </Box>
        ) : (
            <Box
                {...(attrs as {})}
                ref={resultRef as any}
                role='listbox'
                $width={width}
                $fitItems={fitItems}
                $scrollable={scrollable}
                $maxHeight={maxHeight}
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
) as ForwardRefExoticComponent<DropListInnerProps & RefAttributes<HTMLElement>> & { Item: typeof Item };

DropListInner.Item = Item;

DropListInner.displayName = 'DropListInner';
