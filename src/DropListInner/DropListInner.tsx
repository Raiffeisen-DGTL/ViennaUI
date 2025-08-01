import React, {
    useCallback,
    useRef,
    ReactNode,
    forwardRef,
    isValidElement,
    ReactElement,
    MutableRefObject,
    RefObject,
} from 'react';
import ReactDOM from 'react-dom';
import { useDrop, usePortal } from 'vienna.react-use';
import { Box } from '../DropList/DropList.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { Item, ItemProps } from '../DropList/Item';
import { DropListProps } from '../DropList';
import { ReactRefType } from '../Utils';

export interface DropListInnerProps<B = Breakpoints> extends DropListProps<B> {
    groupItems?: boolean;
}
export interface DroplistInnerItems extends ItemProps {
    value?: {
        category?: string;
    };
}

const _DropListInner = <B,>(props: DropListInnerProps<B>, ref: ReactRefType<HTMLDivElement>) => {
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
        dropdownPortal,
        containerRef,
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
        parentRef: dropdownPortal && !fixed ? containerRef : parentRef,
        followParentWhenScroll,
        fitListToParent: fitItems,
        callbacks: { onHide },
    });

    React.useEffect(() => {
        if (resultRef) {
            if (typeof ref === 'function') {
                (ref as (instance: RefObject<HTMLDivElement> | null) => void)(resultRef);
            }
            if (ref && typeof ref === 'object') {
                (ref as React.MutableRefObject<HTMLElement | null>).current = resultRef.current;
            }
        }
    }, [resultRef, ref]);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            if (typeof onMouseDown === 'function') {
                onMouseDown(e);
            }
        },
        [onMouseDown]
    );

    const result = groupItems ? (
        <Box
            {...attrs}
            ref={resultRef}
            role='listbox'
            $width={width}
            $fitItems={fitItems}
            $scrollable={scrollable}
            $maxHeight={maxHeight}
            onMouseDown={handleMouseDown}>
            {React.Children.map(
                children as ReactElement<DroplistInnerItems>[],
                (ch: ReactElement<DroplistInnerItems>) =>
                    groupItems &&
                    isValidElement(ch) &&
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
            {...attrs}
            ref={resultRef}
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

    const wrapperPortalRef = (dropdownPortal as MutableRefObject<HTMLElement | null>)?.current;
    const dropListPortal: HTMLElement | null | undefined =
        wrapperPortalRef ?? (dropdownPortal as HTMLElement | null | undefined);

    if (dropListPortal) {
        return ReactDOM.createPortal(result, dropListPortal);
    }

    return result;
};

export const DropListInner = forwardRef(_DropListInner) as unknown as (<B>(
    props: DropListInnerProps<B> & { ref: ReactRefType<HTMLDivElement> }
) => ReturnType<typeof _DropListInner>) & {
    Item: typeof Item;
    displayName?: string;
};

DropListInner.Item = Item;

DropListInner.displayName = 'DropListInner';
