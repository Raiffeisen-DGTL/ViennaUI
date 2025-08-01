import React, { PropsWithChildren, ReactNode, ReactElement, useCallback, useMemo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProvider } from 'vienna.ui-primitives';
import { header } from 'vienna.ui-theme';
import { TabsProps, TabProps, Tabs, TabsValueType } from '../../Tabs';
import { MenuPoint } from '../MenuPoint';
import { Tab } from './Items.styles';
import { AnyObject } from '../../Utils';
import { getPresets, getPresetsCustom } from '../../Utils/styling';

export interface ItemProps<T = TabsValueType> extends TabProps<T>, PropsWithChildren {
    label: ReactNode;
}

export interface ItemsProps<T = TabsValueType> extends Omit<TabsProps<T>, 'onChange' | 'value'> {
    /** Выравнить табы по центру контейнера высоте */
    align?: 'bottom' | 'center';
    size?: 'l' | 'm' | 's';
    justifyContent?: string;
    isMobile?: boolean;
    value?: T;
    onChange?: (event: React.MouseEvent, value: T, hasContent?: boolean) => void;
}

const tabsPresets = getPresets(
    header.tabs,
    'header.tabs'
)({
    base: null,
});

const tabPresets = getPresets(
    header.tab,
    'header.tab'
)({
    base: null,
});

const customPresets = getPresetsCustom('header.custom')({
    tabs: null,
    tab: null,
});

const buildTheme = <T,>(props: ItemsProps<T>) => {
    return {
        tabs: {
            base: {
                ...tabsPresets.base(props),
                'justify-content': props.justifyContent,
                alignItems: 'baseline',
                minWidth: 0,
            } as AnyObject,
            custom: customPresets.tabs(props) as AnyObject,
            tab: {
                base: tabPresets.base(props) as AnyObject,
                custom: customPresets.tab(props) as AnyObject,
            },
        },
    };
};

const getHasContentMap = (items: ItemProps[]) =>
    items.reduce((acc, cur) => {
        acc.set(cur.value, Boolean(cur.children));
        return acc;
    }, new Map());

export const Items = <T,>(props: ItemsProps<T>) => {
    const {
        children,
        value,
        onChange,
        size,
        isMobile,
        align = 'bottom',
        justifyContent = 'center',
        design,
        ...attrs
    } = props;

    const items = React.Children.map(React.Children.toArray(children), (child) => {
        const { props: itemProps } = child as ReactElement<ItemProps<T>>;
        return itemProps;
    });
    const themedContext = useContext(ThemeContext);
    const hasContentMap = useMemo(() => getHasContentMap(items as ItemProps[]), [items]);

    const handleChange = useCallback(
        (itemValue: T, e: React.MouseEvent) => {
            if (typeof onChange === 'function') {
                onChange(e, itemValue, hasContentMap.get(itemValue));
            }
        },
        [onChange, hasContentMap]
    );

    const theme = useMemo(() => {
        return buildTheme({ ...props, align, justifyContent, theme: themedContext });
    }, [props, themedContext]);

    if (isMobile) {
        return (
            <>
                {items.map(({ value, label }) => (
                    <MenuPoint key={String(value)} value={value} label={label} onClick={handleChange} />
                ))}
            </>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Tabs
                {...attrs}
                value={value}
                size={size}
                design={design}
                onChange={({ value, event }) => handleChange(value, event)}>
                {items.map(({ label, value }) => (
                    <Tab key={String(value)} $align={align} $size={size} value={value}>
                        {label}
                    </Tab>
                ))}
            </Tabs>
        </ThemeProvider>
    );
};

export const Item = <T,>(props: ItemProps<T>) => {
    return <span {...props} />;
};

Items.displayName = 'Items';
Item.displayName = 'Item';
