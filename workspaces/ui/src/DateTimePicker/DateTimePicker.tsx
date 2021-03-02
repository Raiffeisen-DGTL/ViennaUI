import React, { useCallback } from 'react';
import { History } from 'vienna.icons';
import { Locale } from 'date-fns';
import { Select } from '../Select';
import { InputDate } from '../InputMask';
import { Datepicker } from '../Datepicker';
import { Box, Left, Right } from './DateTimePicker.styles';
import { DateTimePickerLocalizationProps } from './localization';

interface DateObj {
    date: string;
    time: string;
}
type ChangeFunc = (e, data: DateObj) => void;
export interface DateTimePickerProps extends DateTimePickerLocalizationProps {
    design?: 'outline' | 'material';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    value?: Date | DateObj;
    timeFrom?: string;
    timeTo?: string;
    step?: number;
    onChange?: ChangeFunc;
    ref?: any;
    /**
     * Локаль календаря
     */
    locale?: Locale;
}

const selectProps = {
    postfix: {
        up: <History />,
    },
};

const LIMIT_DEFAULT_TIME_OPTIONS = 5;

// вспомогательная функция для Select
// генерирует набор данных постепенно для оптимизации первого рендера
const getDefaultTimeOptions = (step: number, from: string, to: string) => {
    // функция callback для select (по документации принимает массив)
    return (items) => {
        const lastItem = items[items.length - 1] || from;
        const result: string[] = items.length ? [] : [from];
        const hoursTo = parseInt(to.split(':')[0], 10);
        const minutesTo = parseInt(to.split(':')[1], 10);
        let index = 0;
        let hours: number = parseInt(lastItem.split(':')[0], 10);
        let minutes: number = parseInt(lastItem.split(':')[1], 10) + step;
        while (index <= LIMIT_DEFAULT_TIME_OPTIONS) {
            if (hours >= hoursTo && minutes > minutesTo) {
                break;
            }

            if (minutes > 59) {
                hours = hours + 1;
                minutes = minutes % 60;
            }

            const time = [hours, minutes]
                .map((i) => {
                    return i < 10 ? `0${i}` : i;
                })
                .join(':');
            result.push(time);

            minutes += step;
            index++;
        }

        return [...items, ...result];
    };
};

const pickDate = (date?: Date | DateObj): string => {
    if (date instanceof Date) {
        return date
            .toISOString()
            .replace(/T.*/, '')
            .replace(/(.*)-(.*)-(.*)/, '$3.$2.$1');
    }
    if (date?.date) {
        return date.date;
    }

    return '';
};

const pickTime = (date?: Date | DateObj): string => {
    if (date instanceof Date) {
        return date.toISOString().replace(/.*T(..:..):..\..*/, '$1');
    }
    if (date?.time) {
        return date.time;
    }

    return '';
};

const sanitizeChildren = (children: any) => {
    if (children.length === 0) {
        return [<Datepicker key={0} />, <InputDate key={0} />];
    }
    if (children.length === 1) {
        return [<Datepicker key={0} />, children[0]];
    }
    if (
        children.length === 2 &&
        (children[0].type !== Datepicker || (children[1].type !== InputDate && children[1].type !== Select))
    ) {
        return [null, null];
    }

    return children;
};

export const DateTimePicker: React.FC<DateTimePickerProps> = React.forwardRef(
    (props: React.PropsWithChildren<DateTimePickerProps>, ref: any) => {
        const {
            value,
            timeFrom = '00:00',
            timeTo = '23:30',
            step = 30,
            design,
            size,
            children,
            onChange,
            localization,
            locale,
            ...attrs
        } = props;

        const timeChangeHandler = useCallback(
            (e, data) => {
                if (data && typeof onChange === 'function') {
                    onChange(e, { date: pickDate(value), time: data.value });
                }
            },
            [onChange, value]
        );

        const dateChangeHandler = useCallback(
            (e, data) => {
                if (data && typeof onChange === 'function') {
                    onChange(e, { date: data.value, time: pickTime(value) });
                }
            },
            [onChange, value]
        );

        const constructChildren = useCallback(() => {
            const array = React.Children.toArray(children).slice(0, 2);
            const [left, right] = sanitizeChildren(array);
            if (left && right) {
                return (
                    <>
                        <Left>
                            {React.cloneElement(left, {
                                value: pickDate(value),
                                onChange: dateChangeHandler,
                                design,
                                size,
                                localization,
                                locale,
                            })}
                        </Left>
                        <Right isInput={right.type === InputDate}>
                            {React.cloneElement(right, {
                                value: pickTime(value),
                                options: right.props.children
                                    ? null
                                    : right.props.options || getDefaultTimeOptions(step, timeFrom, timeTo),
                                maxListHeight: 150,
                                type: 'time',
                                onChange: timeChangeHandler,
                                onSelect: timeChangeHandler,
                                design,
                                size,
                                ...(right.type === Select ? selectProps : {}),
                            })}
                        </Right>
                    </>
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

        return (
            <Box {...attrs} ref={ref}>
                {constructChildren()}
            </Box>
        );
    }
);

DateTimePicker.displayName = 'DateTimePicker';
export default DateTimePicker;
