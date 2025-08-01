import { ReactElement, ReactNode } from 'react';
import { DateObj, DateTimePickerProps } from './types';

const LIMIT_DEFAULT_TIME_OPTIONS = 100;

// вспомогательная функция для Select
// генерирует набор данных постепенно для оптимизации первого рендера
export function getDefaultTimeOptions(step: number, from: string, to: string) {
    // функция callback для select (по документации принимает массив)
    return (items: string[]) => {
        const lastItem: string = items[items.length - 1] || from;
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
}

export function formatDate(date: DateTimePickerProps['value']): string {
    if (date instanceof Date) {
        return date
            .toLocaleDateString('ru-RU')
            .replace(/T.*/, '')
            .replace(/(.*)-(.*)-(.*)/, '$3.$2.$1');
    }

    if (date?.date) return date.date;

    return '';
}

export function formatTime(date: DateTimePickerProps['value']): string {
    if (date instanceof Date) {
        return date
            .toTimeString()
            .replace(/.*T(..:..):..\..*/, '$1')
            .slice(0, 5);
    }

    if (date?.time) return date.time;

    return '';
}

export function updateTime(prevDate: DateTimePickerProps['value'], newTime: string): Date | DateObj {
    if (prevDate instanceof Date) {
        const newValue = new Date(prevDate);

        const [h, m] = newTime.split(':');

        newValue.setHours(Number(h));
        newValue.setMinutes(Number(m));

        if (newValue.toString() === 'Invalid Date') return new Date(prevDate);

        return newValue;
    }

    return {
        time: newTime,
        date: prevDate?.date ?? '',
    };
}

export function updateDate(prevDate: DateTimePickerProps['value'], newDate: string): Date | DateObj {
    if (prevDate instanceof Date) {
        const newValue = new Date(prevDate);

        const [d, m, y] = newDate.split('.');

        newValue.setFullYear(Number(y));
        newValue.setMonth(Number(m) - 1);
        newValue.setDate(Number(d));

        if (newValue.toString() === 'Invalid Date') return prevDate;

        return newValue;
    }

    return {
        date: newDate,
        time: prevDate?.time ?? '',
    };
}

export const isReactElements = (elements: ReactNode[]): elements is ReactElement[] => {
    return elements.every((child) => child !== null && typeof child === 'object' && 'type' in child);
};
