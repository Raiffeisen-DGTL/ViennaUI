import React, { FC, ReactElement, useCallback, useMemo, useContext, FormEvent } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProvider } from 'vienna.ui-primitives';
import { TabsProps, TabProps, Tabs } from '../../Tabs';
import { MenuPoint } from '../MenuPoint';
import { Tab } from './Items.styles';
import { getPresets } from '../../Utils/styling';

export interface ItemProps extends TabProps {
    label: string;
}

export interface ItemsProps extends Omit<TabsProps, 'onChange'> {
    /** Выравнить табы по центру контейнера высоте */
    align?: 'bottom' | 'center';
    size?: 'l' | 'm' | 's';
    justifyContent?: string;
    isMobile?: boolean;
    children: ReactElement<ItemProps>[];
    onChange?: (event: FormEvent<HTMLDivElement>, value: string, hasContent: boolean) => void;
}

const tabsPresets = getPresets('header.tabs', {
    base: null,
});

const tabPresets = getPresets('header.tab', {
    base: null,
});

const customPresets = getPresets('header.custom', {
    tabs: null,
    tab: null,
});

const buildTheme = (props) => {
    return {
        tabs: {
            base: {
                ...tabsPresets.base(props),
                'justify-content': props.justifyContent,
                alignItems: 'baseline',
                minWidth: 0,
            },
            custom: customPresets.tabs(props),
            tab: {
                base: tabPresets.base(props),
                custom: customPresets.tab(props),
            },
        },
    };
};

const getHasContentMap = (items) =>
    items.reduce((acc, cur) => {
        acc[cur.value] = Boolean(cur.children);
        return acc;
    }, {});

export const Items: FC<ItemsProps> = (props) => {
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
        const { props: itemProps } = child as ReactElement<ItemProps>;
        return itemProps;
    });
    const themedContext = useContext(ThemeContext);
    const hasContentMap = useMemo(() => getHasContentMap(items), [items]);

    const handleChange = useCallback(
        (e, itemValue) => {
            if (typeof onChange === 'function') {
                onChange(e, itemValue, hasContentMap[itemValue]);
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
            <Tabs {...(attrs as {})} value={value} size={size} design={design} onChange={handleChange}>
                {items.map(({ label, value }) => (
                    <Tab key={String(value)} $align={align} value={value}>
                        {label}
                    </Tab>
                ))}
            </Tabs>
        </ThemeProvider>
    );
};

export const Item: React.FC<ItemProps> = (props) => {
    return <span {...props} />;
};
