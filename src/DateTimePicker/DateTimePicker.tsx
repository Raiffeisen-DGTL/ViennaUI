import React, { ReactElement, ReactNode, useCallback } from 'react';
import { HistoryIcon } from 'vienna.icons';
import { ThemeProvider } from 'vienna.ui-primitives';
import { Select, SelectProps } from '../Select';
import { Datepicker, DatepickerProps } from '../Datepicker';
import { Box, Left, Right } from './DateTimePicker.styles';
import { InputDate, InputDateProps } from '../InputMask/Concrete/InputDate/InputDate';
import { OnChangeHandler, Pretty, reactNodeIsComponent } from '../Utils';
import { DateObj, DateTimePickerProps } from './types';
import { formatDate, formatTime, getDefaultTimeOptions, isReactElements, updateDate, updateTime } from './utils';
import { ViewOnly } from '@/ViewOnly';
import { getViewOnlySize } from '@/ViewOnly/utils';

const selectProps = {
    postfix: {
        up: <HistoryIcon />,
    },
};

export const sanitizeChildren = (children: ReactNode[]) => {
    if (children.length === 0) {
        return [<Datepicker key={0} />, <InputDate key={0} />];
    }
    if (children.length === 1) {
        return [<Datepicker key={0} />, children[0]];
    }
    if (
        children.length === 2 &&
        isReactElements(children) &&
        (children[0]?.type !== Datepicker || (children[1]?.type !== InputDate && children[1]?.type !== Select))
    ) {
        return [null, null];
    }

    return children;
};

export const _DateTimePicker = (props: DateTimePickerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
        name,
        value,
        timeFrom = '00:00',
        timeTo = '23:30',
        step = 30,
        design,
        size,
        disabled,
        invalid,
        children,
        onChange,
        localization,
        locale,
        viewOnly,
        viewOnlyText,
        ...attrs
    } = props;

    const timeChangeHandler = useCallback<NonNullable<SelectProps['onChange']>>(
        ({ value: data, event }) => {
            onChange?.({ value: updateTime(value, data), event, options: { name } });
        },
        [onChange, value, name]
    );

    const timeSelectHandler = useCallback<NonNullable<SelectProps<unknown>['onSelect']>>(
        ({ value: data, event }) => {
            if (data === undefined) return;

            onChange?.({ value: updateTime(value, data as string), event, options: { name } });
        },
        [onChange, value, name]
    );

    const timeChangeHandlerInputDate = useCallback<NonNullable<InputDateProps['onChange']>>(
        ({ value: data }) => {
            if (data instanceof Date || !data) return;

            onChange?.({ value: updateTime(value, data), event: null, options: { name } });
        },
        [onChange, value, name]
    );

    const dateChangeHandler = useCallback<NonNullable<DatepickerProps['onChange']>>(
        ({ value: data, event }) => {
            onChange?.({ value: updateDate(value, data), event, options: { name } });
        },

        [onChange, value, name]
    );

    const constructChildren = useCallback(() => {
        const array = React.Children.toArray(children).slice(0, 2);
        const sanitizedChildren = sanitizeChildren(array);
        const theme = { select: { custom: { overflow: 'visible' } } };
        if (isReactElements(sanitizedChildren)) {
            const [left, right] = sanitizedChildren;
            return (
                <ThemeProvider theme={theme}>
                    <Left>
                        {reactNodeIsComponent(left, Datepicker) &&
                            React.cloneElement(left, {
                                ...left.props,
                                value: formatDate(value),
                                onChange: dateChangeHandler,
                                design,
                                disabled: disabled || left.props.disabled,
                                invalid: invalid || left.props.invalid,
                                size,
                                localization,
                                locale,
                            })}
                    </Left>
                    <Right $isInput={right.type === InputDate}>
                        {reactNodeIsComponent(right, InputDate) &&
                            React.cloneElement(right, {
                                ...right.props,
                                value: formatTime(value),
                                type: 'time',
                                onChange: timeChangeHandlerInputDate,
                                design,
                                disabled: disabled || right.props.disabled,
                                invalid: invalid || right.props.invalid,
                                size,
                            })}
                        {reactNodeIsComponent(right, Select) &&
                            React.cloneElement(right, {
                                ...right.props,
                                value: formatTime(value),
                                options: right.props.children
                                    ? undefined
                                    : (right.props.options as string[]) ||
                                      getDefaultTimeOptions(step, timeFrom, timeTo),
                                maxListHeight: right.props.maxListHeight ? right.props.maxListHeight : 150,
                                onChange: timeChangeHandler,
                                onSelect: timeSelectHandler,
                                design,
                                disabled: disabled || right.props.disabled,
                                invalid: invalid || right.props.invalid,
                                size,
                                ...(right.type === Select ? selectProps : {}),
                            })}
                    </Right>
                </ThemeProvider>
            );
        }

        return null;
    }, [
        dateChangeHandler,
        timeChangeHandler,
        children,
        value,
        design,
        size,
        step,
        timeFrom,
        timeTo,
        localization,
        locale,
    ]);

    if (viewOnly) {
        const valueText = value
            ? value instanceof Date
                ? `${formatDate(value)} в ${formatTime(value)}`
                : `${value.date} в ${value.time}`
            : '';
        return <ViewOnly size={getViewOnlySize(size)}>{viewOnlyText ?? valueText}</ViewOnly>;
    }

    return (
        <Box {...attrs} ref={ref}>
            {constructChildren()}
        </Box>
    );
};

export namespace DateTimePicker {
    export type OnChange<T extends Date | DateObj = Date | DateObj> = Pretty.Func<
        OnChangeHandler<
            T,
            | React.FormEvent<HTMLInputElement>
            | React.ChangeEvent
            | React.MouseEvent
            | React.KeyboardEvent
            | Event
            | null
        >
    >;
}

export const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(_DateTimePicker) as unknown as (<
    T extends Date | DateObj,
>(
    p: DateTimePickerProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReactElement) & {
    displayName?: string;
};

DateTimePicker.displayName = 'DateTimePicker';
