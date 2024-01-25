import React, { FC, ReactNode, createContext, useContext } from 'react';
import { Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarLocalizationContext } from '../localization';

export const Context = createContext({});
export const { Consumer } = Context;

interface CalendarContext {
    locale: Locale;
    localization: CalendarLocalizationContext;
}

interface TableProviderProps {
    locale?: Locale;
    localization: CalendarLocalizationContext;
    children: ReactNode;
}

export const CalendarProvider: FC<TableProviderProps> = (props) => {
    const { locale, localization, children } = props;

    const context: CalendarContext = {
        locale: locale ?? ru,
        localization,
    };

    return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useCalendarContext = (): CalendarContext => {
    const context = useContext(Context) as CalendarContext;

    if (context === undefined) {
        throw new Error('useCalendarContext must be used within a CalendarProvider');
    }

    return context;
};

export const useCalendarLocale = (): Locale => {
    const context = useCalendarContext();

    return context.locale;
};

export const useCalendarLocalization = (): CalendarLocalizationContext => {
    const context = useCalendarContext();

    return context.localization;
};
