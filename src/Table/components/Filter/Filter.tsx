import React, { useRef, useMemo, useState, useCallback, MutableRefObject, ReactNode } from 'react';
import { useFloating, offset, autoPlacement, shift, Placement, FloatingPortal } from '@floating-ui/react';
import { FilterSortIcon as FilterIcon } from 'vienna.icons';
import { useOutsideClick } from 'vienna.react-use';
import { Groups } from '../../../Groups';
import { SortInFilter, SortIcon } from '../Sort';
import { useTableService, useTableConfig } from '../Context';
import { ColumnTitle } from '../ColumnTitle';
import { FilterProvider } from './FilterContext';
import { tableLayers } from '../../TableLayers';
import { ColumnProps } from '../Column';
import { TableProps } from '../../Table';
import { FilterPopup } from './Filter.styles';
import { TableSize, SortDirection } from '../../types';

export interface TableFilterProps<T> {
    column: ColumnProps<T>;
    size?: TableProps['size'];
}

const toggleParentTh = (ref: MutableRefObject<HTMLDivElement | null>, isOpen: boolean) => {
    const $th = ref.current?.closest('th');
    if ($th) {
        const zIndex = isOpen ? `${tableLayers.activeFilter}` : '';
        $th.style.zIndex = zIndex;
    }
};

const getFilterPopupOffset = (size?: TableSize): [number, number] => {
    // defined in preset filterPopover.base
    const lineHeight = 18;

    // defined in preset: table.filterPopover.size
    const paddings: Record<TableSize, number> = {
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
    };

    const horizontal = 16; // filterPopover horizontal padding
    const vertical = lineHeight + (size ? paddings[size] : 0); // cell lineHeight +  filterPopover vertical padding
    return [-horizontal, -vertical];
};

const findAttrValue = (element: Element | null, attr: string, value: string) => {
    while (element) {
        if (element.isEqualNode(document)) {
            return false;
        }
        if (element.hasAttribute(attr) && element.getAttribute(attr) === value) {
            return true;
        }
        element = element.parentNode as Element;
    }

    return false;
};

export const Filter = <T,>(props: TableFilterProps<T>) => {
    const { column, size } = props;
    const { id, title, sortable, forceIconVisibility, align } = column;

    const { setFilter, getFilterColumn, getSortColumn } = useTableService();
    const {
        columns: { filters },
    } = useTableConfig();

    const [active, setActive] = useState(false);

    const filter = filters?.get(id);
    const titleRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const setFilterCb = React.useCallback(
        (value: string) => {
            setFilter(id, value);
        },
        [setFilter]
    );

    const filterValue = getFilterColumn(id);
    const isActiveFilter = typeof filterValue === 'number' ? true : !!filterValue;
    const isActiveSort = getSortColumn()?.field === id && getSortColumn()?.direction !== SortDirection.None;
    const isActive = isActiveFilter || isActiveSort;
    const icon = isActiveFilter || !isActiveSort ? <FilterIcon size='s' /> : <SortIcon column={id} />;

    const open = useCallback(() => {
        setActive(true);
        toggleParentTh(titleRef, true);
    }, [setActive, toggleParentTh]);

    const close = useCallback(
        (event: React.MouseEvent) => {
            const hasValue = findAttrValue(event.target as Element, 'data-id', 'calendar');

            if (hasValue) return;

            requestAnimationFrame(() => {
                setActive(false);
                toggleParentTh(titleRef, false);
            });
        },
        [setActive, toggleParentTh]
    );

    const content = useMemo(() => {
        const filterContent: ReactNode | undefined = typeof filter === 'function' ? filter(setFilterCb) : filter;

        return (
            <Groups design='vertical'>
                <ColumnTitle
                    title={title}
                    active={isActive}
                    icon={icon}
                    forceIconVisibility={forceIconVisibility}
                    align={align}
                    onClick={close}
                />
                <div style={{ flexGrow: 1 }}>{filterContent}</div>
                {sortable && <SortInFilter field={id} />}
            </Groups>
        );
    }, [id, title, isActive, filter, setFilterCb]);

    const offsetPopup = getFilterPopupOffset(props.size);

    const alignPlacementMap: Record<NonNullable<typeof align>, Placement[]> = {
        left: ['top-start', 'bottom-start'],
        center: ['top', 'bottom'],
        right: ['top-end', 'bottom-end'],
    };

    const allowedPlacements = align ? alignPlacementMap[align] : alignPlacementMap.left;

    const { refs, floatingStyles } = useFloating({
        middleware: [
            offset({
                mainAxis: offsetPopup[0],
                alignmentAxis: 0,
            }),
            shift(),
            autoPlacement({
                alignment: 'start',
                allowedPlacements,
                crossAxis: true,
            }),
        ],
    });

    // TODO: изменить тип для useOutsideClick
    useOutsideClick(popupRef, close as unknown as (e: MouseEvent | TouchEvent) => void, { isEnabled: active });

    return (
        <FilterProvider id={id}>
            <div ref={titleRef}>
                <ColumnTitle
                    ref={refs.setReference}
                    title={title}
                    active={isActive}
                    icon={icon}
                    forceIconVisibility={forceIconVisibility}
                    align={align}
                    onClick={open}
                />
                {active && (
                    <FloatingPortal>
                        <FilterPopup $size={size} ref={refs.setFloating} style={floatingStyles}>
                            <div ref={popupRef}>{content}</div>
                        </FilterPopup>
                    </FloatingPortal>
                )}
            </div>
        </FilterProvider>
    );
};
