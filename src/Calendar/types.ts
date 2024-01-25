import { ReactNode } from 'react';

export type Spin = 'next' | 'prev';

export type DayType =
    | 'today'
    | 'disabled'
    | 'weekend'
    | 'not-active'
    | 'active'
    | 'range'
    | 'event'
    | ''
    | 'activeDisabled';

export type ViewMode = 'month' | 'year_list' | 'month_list';

export type StartingWeekDay = 'sunday' | 'monday';

export type Dates = 'weekends' | Date[] | DateFunction;

export interface MonthProps<T> {
    date?: T;
    disabledDates?: Dates;
    weekendDates?: Dates;
    eventDates?: Date[] | EventDateFunction;
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

export type DateFunction = (date: Date) => boolean;

export type EventDateFunction = (date: Date) => ReactNode | undefined;
