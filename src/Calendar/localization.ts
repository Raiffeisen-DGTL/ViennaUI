import { DSLocalizationProps, DSLocalization } from '../Localization';

export interface CalendarLocalization {
    'ds.calendar.body.today'?: string;
    'ds.calendar.day.monday'?: string;
    'ds.calendar.day.tuesday'?: string;
    'ds.calendar.day.wednesday'?: string;
    'ds.calendar.day.thursday'?: string;
    'ds.calendar.day.friday'?: string;
    'ds.calendar.day.saturday'?: string;
    'ds.calendar.day.sunday'?: string;
    'ds.calendar.month.january'?: string;
    'ds.calendar.month.february'?: string;
    'ds.calendar.month.march'?: string;
    'ds.calendar.month.april'?: string;
    'ds.calendar.month.may'?: string;
    'ds.calendar.month.june'?: string;
    'ds.calendar.month.july'?: string;
    'ds.calendar.month.august'?: string;
    'ds.calendar.month.september'?: string;
    'ds.calendar.month.october'?: string;
    'ds.calendar.month.november'?: string;
    'ds.calendar.month.december'?: string;
}

export type CalendarLocalizationProps = DSLocalizationProps<CalendarLocalization>;

export type CalendarLocalizationContext = DSLocalization<CalendarLocalization>;

export const defaultCalendarLocalization: Required<CalendarLocalization> = {
    'ds.calendar.body.today': 'Сегодня',
    'ds.calendar.day.monday': 'ПН',
    'ds.calendar.day.tuesday': 'ВТ',
    'ds.calendar.day.wednesday': 'СР',
    'ds.calendar.day.thursday': 'ЧТ',
    'ds.calendar.day.friday': 'ПТ',
    'ds.calendar.day.saturday': 'СБ',
    'ds.calendar.day.sunday': 'ВС',
    'ds.calendar.month.january': 'Янв.',
    'ds.calendar.month.february': 'Февр.',
    'ds.calendar.month.march': 'Март',
    'ds.calendar.month.april': 'Апр.',
    'ds.calendar.month.may': 'Май',
    'ds.calendar.month.june': 'Июнь',
    'ds.calendar.month.july': 'Июль',
    'ds.calendar.month.august': 'Авг.',
    'ds.calendar.month.september': 'Сент.',
    'ds.calendar.month.october': 'Окт.',
    'ds.calendar.month.november': 'Нояб.',
    'ds.calendar.month.december': 'Дек.',
};
