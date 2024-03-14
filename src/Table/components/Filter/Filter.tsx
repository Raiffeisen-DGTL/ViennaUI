import React, { useRef, useMemo, useState, useCallback } from 'react';
import { useFloating, offset, autoPlacement, shift, FloatingPortal } from '@floating-ui/react';
import { Filter as FilterIcon } from 'vienna.icons';
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

export interface TableFilterProps {
    column: ColumnProps;
    size?: TableProps['size'];
}

const toggleParentTh = (ref, isOpen) => {
    if (ref.current && ref.current.closest('th')) {
        const zIndex = isOpen ? `${tableLayers.activeFilter}` : '';
        ref.current.closest('th').style.zIndex = zIndex;
    }
};

const getFilterPopupOffset = (size): any => {
    // defined in preset filterPopover.base
    const lineHeight = 18;

    // defined in preset: table.filterPopover.size
    const paddings = {
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
    };

    const horizontal = 16; // filterPopover horizontal padding
    const vertical = lineHeight + paddings[size]; // cell lineHeight +  filterPopover vertical padding
    return [-horizontal, -vertical];
};

const findAttrValue = (element, attr, value) => {
    while (element) {
        if (element.isEqualNode(document)) {
            return false;
        }
        if (element.hasAttribute(attr) && element.getAttribute(attr) === value) {
            return true;
        }
        element = element.parentNode;
    }

    return false;
};

export const Filter: React.FC<TableFilterProps> = (props) => {
    const { column, size } = props;
    const { id, title, sortable, forceIconVisibility } = column;

    const { setFilter, getFilterColumn, getSortColumn } = useTableService();
    const {
        columns: { filters },
    } = useTableConfig();

    const [active, setActive] = useState(false);

    const filter = filters?.get(id);
    const titleRef = useRef<HTMLDivElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const setFilterCb = React.useCallback(
        (value) => {
            setFilter(id, value);
        },
        [setFilter]
    );

    const isActiveFilter = getFilterColumn(id) !== undefined && getFilterColumn(id) !== null;
    const isActiveSort = getSortColumn()?.field === id;
    const isActive = isActiveFilter || isActiveSort;
    const icon = isActiveFilter || !isActiveSort ? <FilterIcon size='s' /> : <SortIcon field={id} />;

    const open = useCallback(() => {
        setActive(true);
        toggleParentTh(titleRef, true);
    }, [setActive, toggleParentTh]);

    const close = useCallback(
        (event) => {
            const hasValue = findAttrValue(event.target, 'data-id', 'calendar');
            if (hasValue) return;
            setActive(false);
            toggleParentTh(titleRef, false);
        },
        [setActive, toggleParentTh]
    );

    const content = useMemo(() => {
        const filterContent = typeof filter === 'function' ? filter(setFilterCb) : filter;
        return (
            <Groups design='vertical'>
                <ColumnTitle
                    title={title}
                    active={isActive}
                    icon={icon}
                    forceIconVisibility={forceIconVisibility}
                    onClick={close}
                />
                <div style={{ flexGrow: 1 }}>{filterContent}</div>
                {sortable && <SortInFilter field={id} />}
            </Groups>
        );
    }, [id, title, isActive, icon, filter, setFilterCb]);

    const offsetPopup = getFilterPopupOffset(props.size);

    const { refs, floatingStyles } = useFloating({
        middleware: [
            offset({
                mainAxis: offsetPopup[0],
                crossAxis: offsetPopup[1],
                alignmentAxis: 0,
            }),
            shift(),
            autoPlacement({
                alignment: 'start',
                allowedPlacements: ['top-start', 'bottom-start'],
                crossAxis: true,
            }),
        ],
    });

    useOutsideClick(popupRef, close, { isEnabled: active });

    return (
        <FilterProvider id={id}>
            <div ref={titleRef}>
                <ColumnTitle
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    ref={refs.setReference}
                    title={title}
                    active={isActive}
                    icon={icon}
                    forceIconVisibility={forceIconVisibility}
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
