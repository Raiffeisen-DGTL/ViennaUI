import React, { FC, ReactElement, useCallback, useMemo, useContext, FormEvent } from 'react';
import { ThemeContext } from 'styled-components';
import { getPresets, ThemeProvider } from 'vienna.ui-primitives';
import { TabsProps, TabProps, Tabs } from '../../Tabs';
import { MenuPoint } from '../MenuPoint';
import { Tab } from './Items.styles';

type Align = 'bottom' | 'center';

export interface ItemProps extends TabProps {
    label: string;
}

export interface ItemsProps extends Omit<TabsProps, 'onChange'> {
    /** Выравнить табы по центру контейнера высоте */
    align?: Align;

    size?: 'l' | 'm' | 's';
    justifyContent?: string;
    isMobile?: boolean;
    children: ReactElement<ItemProps>[];
    onChange?: (event: FormEvent<HTMLDivElement>, value: string, hasContent: boolean) => void;
}

const tabsPresets = getPresets('header.tabs', {
    base: null,
    custom: null,
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

const Items: FC<ItemsProps> = (props) => {
    const { children, value, onChange, size, isMobile, align, ...attrs } = props;
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
        return buildTheme({ ...props, theme: themedContext });
    }, [props, themedContext]);

    if (isMobile) {
        return (
            <>
                {items.map(({ value, label, children }) => (
                    <MenuPoint key={value} value={value} label={label} onClick={handleChange}>
                        {children}
                    </MenuPoint>
                ))}
            </>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Tabs {...attrs} value={value} size={size} onChange={handleChange}>
                {items.map((props) => (
                    <Tab key={props.value} align={align} {...props}>
                        {props.label}
                    </Tab>
                ))}
            </Tabs>
        </ThemeProvider>
    );
};

Items.defaultProps = {
    align: 'bottom',
    justifyContent: 'center',
};

export const Item = (props: ItemProps): JSX.Element => {
    return <span {...props} />;
};

export default Items;
