import React, { useCallback, useState, PropsWithChildren, useMemo } from 'react';
import { useCramList } from 'vienna.react-use';
import { SelectOpenDownIcon, SelectHideIcon } from 'vienna.icons';
import { useLocalization } from '../Localization';
import { TabsLocalizationProps, defaultTabsLocalization } from './localization';
import { DropList } from '../DropList';
import { Box, Tab, CombineTab, Item, Arrow, PropsTab, PropsBox } from './Tabs.styles';
import { BoxStyled } from '../Utils/styled';
import { AnyObject, OnChangeHandler, Pretty } from '../Utils';

export type TabsValueType = string | number | AnyObject | null | undefined;

export type TabProps<T = TabsValueType> = PropsTab<T>;

export interface TabsProps<T = TabsValueType>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onChange'>,
        PropsWithChildren,
        TabsLocalizationProps {
    /** Дизайн */
    design?: PropsBox['$design'];
    /** Размеры */
    size?: PropsBox['$size'];
    /** Включает или отключает изменение размера по умолчанию выключено (добавление опций в "Еще...") */
    resizable?: boolean;
    /** Выбранный таб (совпадает с value Tabs.Tab) */
    value?: T;
    /** Свойство отвечает за растягивание по высоте (по умолчанию выключено) */
    alignMiddle?: PropsBox['$alignMiddle'];
    /** Функция сравнения, которая определяет активный элемент */
    comparator?: (value?: T, tabValue?: T) => boolean;
    /** Обработчик события при переключении таба */
    onChange?: OnChangeHandler<T, React.MouseEvent, null>;
}

export namespace Tabs {
    export type OnChange<T = string | number | AnyObject | null | undefined> = Pretty.Func<
        OnChangeHandler<T, React.MouseEvent, null>
    >;
}

export function Tabs<T>(props: TabsProps<T>) {
    const {
        children,
        value,
        design = 'accent',
        size = 'l',
        alignMiddle = false,
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
        (event: React.MouseEvent, value: T) => {
            onChange?.({ value, event });
            setOpen(false);
        },
        [setOpen, onChange]
    );
    const handleClickOnCombined = useCallback(() => {
        setOpen((open) => !open);
    }, [setOpen]);
    const handleBlur = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const preparedChildren = useMemo(() => {
        return React.Children.toArray(children).map((item) => {
            const child = item as React.ReactElement<TabProps<T>>;

            const isLink = 'to' in child.props || 'href' in child.props;

            return React.cloneElement(child, {
                active: child.props.active ? child.props.active : comparator?.(value, child.props.value),
                design,
                size,
                value: child.props.value,
                alignMiddle: child.props.alignMiddle ?? alignMiddle,
                onClick: isLink
                    ? child.props.onClick
                    : (e: React.MouseEvent) => {
                          e.preventDefault();
                          if (!child.props.disabled) {
                              handleChange(e, child.props.value as T);
                          }
                      },
            });
        });
    }, [design, size, value, handleChange, comparator, children, alignMiddle]);

    const dropList = preparedChildren.slice(preparedChildren.length - count);
    const activeState = extraComponentRef.current
        ? comparator?.(value, dropList.find((child) => child.props.active)?.props.value)
        : false;

    return (
        <Box
            {...attrs}
            ref={containerRef}
            tabIndex={1}
            $alignMiddle={alignMiddle}
            $design={design}
            $size={size}
            onBlur={handleBlur}>
            {preparedChildren}
            {resizable && (
                <CombineTab ref={extraComponentRef} $size={size}>
                    <Tab design={design} size={size} onClick={handleClickOnCombined} active={activeState} isLastTab>
                        {`${l10n('ds.tabs.rest')} `}
                        <Arrow>{open ? <SelectHideIcon size='m' /> : <SelectOpenDownIcon size='m' />}</Arrow>
                    </Tab>
                    {open && dropList.length > 0 && (
                        <DropList size={size} float='end' align='vertical'>
                            {dropList.map(({ props: { active, disabled, onClick, children } }, idx) => (
                                <DropList.Item key={idx} selected={active} disabled={disabled} onClick={onClick}>
                                    <Item $size={size}>{children}</Item>
                                </DropList.Item>
                            ))}
                        </DropList>
                    )}
                </CombineTab>
            )}
        </Box>
    );
}

Tabs.displayName = 'Tabs';
Tabs.Tab = Tab;
