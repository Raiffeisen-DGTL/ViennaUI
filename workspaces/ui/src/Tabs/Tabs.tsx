import React, { useCallback, useState, HTMLAttributes, FormEvent } from 'react';
import { useCramList } from 'vienna.react-use';
import { Down, Up, CheckMark } from 'vienna.icons';
import { DropList } from '../DropList';
import { Box, Tab, CombineTab, Item, Arrow } from './Tabs.styles';

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Дизайн */
    design?: 'accent' | 'primary';

    /** Размеры */
    size?: 'l' | 'm' | 's';

    /** Выбранный таб (совпадает с value Tabs.Tab) */
    value?: any;

    /** Включает или отключает изменение размера по умолчанию включено */
    resizeble?: boolean;

    /** Функция сравнения, которая определяет активный элемент */
    comparator?: (value: any, tabValue: any) => boolean;

    /** Обработчик события при переключении таба */
    onChange?: (event: FormEvent<HTMLDivElement>, value: any) => void;
}

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    /** Дизайн (наследуется от родителя) */
    design?: 'accent' | 'primary';

    /** Размер (наследуется от родителя) */
    size?: 'l' | 'm' | 's';

    /** Разворачиваемое поле (вычесляется родителем) */
    inDrop?: boolean;

    /** Ховер (вычесляется родителем) */
    active?: boolean;

    /** Помечается отключеным */
    disabled?: boolean;

    /** Значение таба */
    value?: any;
}

const constructItems = (item, idx, size) => {
    const { active, disabled, onClick, children } = item.props;
    return (
        <DropList.Item key={idx} selected={active} disabled={disabled} onClick={onClick}>
            {<Item size={size}>{children}</Item>}
            {active && <CheckMark size='m' />}
        </DropList.Item>
    );
};

export const Tabs: React.FC<TabsProps> & { Tab: React.FC<TabProps> } = (props: React.PropsWithChildren<TabsProps>) => {
    const { children, value, design, size, onChange, comparator, resizeble = true } = props;

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
        <Box ref={containerRef} tabIndex={1} onBlur={handleBlur}>
            {preparedChildren}
            {resizeble && (
                <CombineTab ref={extraComponentRef} size={size}>
                    <Tab design={design} size={size} onClick={handleClickOnCombined}>
                        Еще... <Arrow>{open ? <Up size='m' /> : <Down size='m' />}</Arrow>
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
Tabs.defaultProps = {
    design: 'accent',
    size: 'l',
    comparator: (value, tabValue) => value === tabValue,
};

Tabs.displayName = 'Tabs';
export default Tabs;
