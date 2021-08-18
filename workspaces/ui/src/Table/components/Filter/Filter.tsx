import React, { useRef, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { Groups, Popover } from 'vienna.ui';
import { ThemeProvider, getPresets } from 'vienna.ui-primitives';
import { Filter as FilterIcon } from 'vienna.icons';
import { SortInFilter, SortIcon } from '../Sort';
import { useTableService, useTableConfig } from '../Context';
import { ColumnTitle } from '../ColumnTitle';
import { FilterProvider } from './FilterContext';
import { TableLayers } from '../../TableLayers';
import { ColumnProps } from '../Column';
import { TableProps } from '../../Table';

export interface TableFilterProps {
    column: ColumnProps;
    size?: TableProps['size'];
}

const presets = getPresets('table.filterPopover', {
    wrapper: null,
    base: null,
    size: 'size',
});

const buildTheme = (props) => {
    const theme = {
        popover: {
            message: {
                custom: {
                    ...presets.base(props),
                    ...presets.size(props),
                },
            },
            wrapper: {
                custom: {
                    ...presets.wrapper(props),
                },
            },
        },
    };

    return theme;
};

const toggleParentTh = (ref, isOpen) => {
    return () => {
        if (ref.current && ref.current.closest('th')) {
            const zIndex = isOpen ? `${TableLayers.ActiveFilter}` : '';
            ref.current.closest('th').style.zIndex = zIndex;
        }
    };
};

let popoverRef;
const popoverRefGetter: any = (ref) => {
    popoverRef = ref;
};
const close = () => {
    if (popoverRef) {
        popoverRef.close();
    }
};

export const Filter: React.FC<TableFilterProps> = (props) => {
    const { column } = props;
    const { id, title, sortable } = column;
    const { setFilter, getFilterColumn, getSortColumn } = useTableService();
    const {
        columns: { filters },
    } = useTableConfig();
    const filter = filters?.get(id);
    const titleRef = useRef<HTMLDivElement>(null);

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

    const content = React.useMemo(() => {
        const filterContent = typeof filter === 'function' ? filter(setFilterCb) : filter;
        return (
            <Groups design='vertical'>
                <ColumnTitle title={title} active={isActive} icon={icon} onClick={close} forceIconVisibility />
                <div style={{ flexGrow: 1 }}>{filterContent}</div>
                {sortable && <SortInFilter field={id} />}
            </Groups>
        );
    }, [id, title, isActive, icon, filter, setFilterCb]);

    const themedContext = useContext(ThemeContext);
    const theme = useMemo(() => {
        return buildTheme({ ...props, theme: themedContext });
    }, [props, themedContext]);

    return (
        <div ref={titleRef}>
            <FilterProvider id={id}>
                <ThemeProvider theme={theme}>
                    <Popover
                        onOpen={toggleParentTh(titleRef, true)}
                        onClose={toggleParentTh(titleRef, false)}
                        anchor='bottom'
                        content={content}
                        width={248}
                        noClose
                        ref={popoverRefGetter}>
                        <ColumnTitle title={title} active={isActive} icon={icon} />
                    </Popover>
                </ThemeProvider>
            </FilterProvider>
        </div>
    );
};
