import { ReactNode } from 'react';

export type Spin = 'next' | 'prev';

export enum Day {
    monday = 'monday',
    tuesday = 'tuesday',
    wednesday = 'wednesday',
    thursday = 'thursday',
    friday = 'friday',
    saturday = 'saturday',
    sunday = 'sunday',
}

export enum Month {
    january = 'january',
    february = 'february',
    march = 'march',
    april = 'april',
    may = 'may',
    june = 'june',
    july = 'july',
    august = 'august',
    september = 'september',
    october = 'october',
    november = 'november',
    december = 'december',
}

export enum DayType {
    TODAY = 'today',
    DISABLED = 'disabled',
    WEEKEND = 'weekend',
    NOT_ACTIVE = 'not-active',
    ACTIVE = 'active',
    RANGE = 'range',
    EVENT = 'event',
    CLEAR = '',
    ACTIVE_DISABLED = 'activeDisabled',
}

export enum ViewMode {
    MONTH = 'month',
    YEAR_LIST = 'year_list',
    MONTH_LIST = 'month_list',
}

export enum Format {
    DATE = 'date',
    OBJECT = 'object',
}

export enum DisabledDates {
    WEEKENDS = 'weekends',
}

export enum StartingWeekDay {
    Sunday = 0,
    Monday = 1,
}

export interface MonthProps<T> {
    date?: T;
    disabledDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    weekendDates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    eventDates?: Date[] | eventDateFunction;
    onChangeDate: (date: T) => void;
    displayedDate: Date;
    minDate?: Date;
    maxDate?: Date;
    startingWeekDay: StartingWeekDay;
}

export interface DateItem {
    label?: number;
    value: Date;
    isSelected?: boolean;
    type: DayType[];
    component?: ReactNode;
}

export interface RangeDate<T> {
    start?: T;
    end?: T;
}

export type dateFunction = (date: Date) => boolean;

export type eventDateFunction = (date: Date) => ReactNode | undefined;
