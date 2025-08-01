import React, { isValidElement, MutableRefObject, ReactElement, RefObject, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDrop, usePortal, type UseDropConfig, useOutsideClick } from 'vienna.react-use';
import { Box, PropsBox } from './DropList.styles';
import { Item, ItemProps } from './Item';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { ItemsGroup } from './ItemsGroup';
import { MenuItem } from './MenuItem';
import { reactNodeIsComponent, ReactRefType } from '../Utils';

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
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
    containerRef?: React.MutableRefObject<HTMLElement | null>;

    /** Опционально: элемент от которого вести расчет пересечений */
    container?: HTMLElement;
    followParentWhenScroll?: boolean;
    onHide?: () => void;

    /** Опционально: функция, которая вызывается при клике вне DropList и элементов из additionalOutsideClickRefs */
    onOutsideClick?: (e: TouchEvent | MouseEvent) => void;
    /** Опционально: дополнительные элементы, над которыми вешается onOutsideClick */
    additionalOutsideClickRefs?: React.MutableRefObject<HTMLElement | null>[];
}

const DropListInternal = <B,>(props: DropListProps<B>, ref: ReactRefType<HTMLDivElement>) => {
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
        dropdownPortal,
        containerRef,
        onOutsideClick,
        additionalOutsideClickRefs = [],
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
                onMouseDown?.(e);
            }
        },
        [onMouseDown]
    );

    const result = (
        <Box
            {...attrs}
            $width={width}
            $fitItems={fitItems}
            $scrollable={scrollable}
            $maxHeight={maxHeight}
            ref={resultRef}
            role='listbox'
            onMouseDown={handleMouseDown}>
            {React.Children.map(children as ReactElement[], (child: ReactElement<ItemProps>) => {
                const cloneProps = [DropList, DropList.MenuItem].some((elem) => reactNodeIsComponent(child, elem))
                    ? { size, scrollable }
                    : { size };

                return isValidElement(child) ? React.cloneElement(child, cloneProps) : null;
            })}
        </Box>
    );

    const containerPortal = usePortal();

    useOutsideClick(
        [resultRef, ...additionalOutsideClickRefs],
        (e) => {
            onOutsideClick?.(e);
        },
        { isEnabled: onOutsideClick !== undefined }
    );

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

export const DropList = React.forwardRef(DropListInternal) as unknown as (<B = Breakpoints>(
    props: DropListProps<B> & { ref?: ReactRefType<HTMLDivElement> }
) => ReturnType<typeof DropListInternal>) & {
    Item: typeof Item;
    Group: typeof ItemsGroup;
    MenuItem: typeof MenuItem;
    displayName?: string;
};

DropList.Item = Item;
DropList.Group = ItemsGroup;
DropList.MenuItem = MenuItem;

DropList.displayName = 'DropList';
