import React, { useCallback, useState, FormEvent } from 'react';
import { useCramList } from 'vienna.react-use';
import { SelectOpenDown, SelectHide, Checkmark } from 'vienna.icons';
import { useLocalization } from '../Localization';
import { TabsLocalizationProps, defaultTabsLocalization } from './localization';
import { DropList } from '../DropList';
import { Box, Tab, CombineTab, Item, Arrow, PropsTab, PropsBox } from './Tabs.styles';
import { BoxStyled } from '../Utils/styled';

export type TabProps = PropsTab;

export interface TabsProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'onChange'> {
    /** Дизайн */
    design?: PropsBox['$design'];
    /** Размеры */
    size?: PropsBox['$size'];
    /** Включает или отключает изменение размера по умолчанию включено */
    resizable?: PropsBox['$resizable'];
    /** Выбранный таб (совпадает с value Tabs.Tab) */
    value?: any;
    /** Функция сравнения, которая определяет активный элемент */
    comparator?: (value: any, tabValue: any) => boolean;
    /** Обработчик события при переключении таба */
    onChange?: (event: FormEvent<HTMLDivElement>, value: any) => void;
}

const constructItems = (item, idx, size) => {
    const { active, disabled, onClick, children } = item.props;
    return (
        <DropList.Item key={idx} selected={active} disabled={disabled} onClick={onClick}>
            {<Item $size={size}>{children}</Item>}
            {active && <Checkmark size='m' />}
        </DropList.Item>
    );
};

export const Tabs: React.FC<TabsProps & TabsLocalizationProps> & { Tab: typeof Tab } = (props) => {
    const {
        children,
        value,
        design = 'accent',
        size = 'l',
        onChange,
        comparator = (value, tabValue) => value === tabValue,
        resizable = false,
        localization,
        ...attrs
    } = props;

    const l10n = useLocalization(localization, defaultTabsLocalization);
    const [open, setOpen] = useState(false);
    const [containerRef, extraComponentRef, count] = useCramList(children as React.ReactNode[]);

    const handleChange = useCallback(
        (e, value: string) => {
            if (typeof onChange === 'function') {
                onChange(e, value);
            }
            setOpen(false);
        },
        [onChange]
    );

    const buildChildren = useCallback(
        () =>
            React.Children.toArray(children).map((child: any) =>
                React.cloneElement(child, {
                    active: child.props.active ? child.props.active : comparator?.(value, child.props.value),
                    design,
                    size,
                    onClick: (e) => {
                        e.preventDefault();
                        if (!child.props.disabled) {
                            handleChange(e, child.props.value);
                        }
                    },
                })
            ),
        [design, size, value, handleChange, comparator, children]
    );

    const handleClickOnCombined = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    const handleBlur = useCallback(() => {
        setOpen(false);
    }, []);

    const preparedChildren = buildChildren();
    const dropList = preparedChildren.slice(preparedChildren.length - count);

    return (
        <Box
            {...(attrs as {})}
            ref={containerRef}
            tabIndex={1}
            $resizable={resizable}
            $design={design}
            $size={size}
            onBlur={handleBlur}>
            {preparedChildren}
            {resizable && (
                <CombineTab ref={extraComponentRef} $size={size}>
                    <Tab design={design} size={size} onClick={handleClickOnCombined}>
                        {`${l10n('ds.tabs.rest')} `}
                        <Arrow>{open ? <SelectHide size='m' /> : <SelectOpenDown size='m' />}</Arrow>
                    </Tab>
                    {open && dropList.length && (
                        <DropList size={size} float='end'>
                            {dropList.map((i, idx) => constructItems(i, idx, size))}
                        </DropList>
                    )}
                </CombineTab>
            )}
        </Box>
    );
};

Tabs.Tab = Tab;

Tabs.displayName = 'Tabs';
