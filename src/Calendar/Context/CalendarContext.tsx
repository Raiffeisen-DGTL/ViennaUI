import React, { FC, ReactNode, createContext, useContext, useRef, useState } from 'react';
import { Locale } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarLocalizationContext } from '../localization';
import { FooterButton, HeaderButton } from '../types';

export const Context = createContext({});
export const { Consumer } = Context;

interface CalendarContext {
    locale: Locale;
    localization: CalendarLocalizationContext;
    //
    gridButtonNodes: React.MutableRefObject<HTMLButtonElement[]>;
    focusedGrid: number | null;
    setFocusedGrid: React.Dispatch<React.SetStateAction<number | null>>;
    //
    headerButtonNodes: React.MutableRefObject<Partial<Record<HeaderButton, HTMLButtonElement>>>;
    focusedHeader: HeaderButton | null;
    setFocusedHeader: React.Dispatch<React.SetStateAction<HeaderButton | null>>;
    //
    footerButtonNodes: React.MutableRefObject<Partial<Record<FooterButton, HTMLButtonElement>>>;
    focusedFooter: FooterButton | null;
    setFocusedFooter: React.Dispatch<React.SetStateAction<FooterButton | null>>;
}

interface TableProviderProps {
    locale?: Locale;
    localization: CalendarLocalizationContext;
    children: ReactNode;
}

export const CalendarProvider: FC<TableProviderProps> = (props) => {
    const { locale, localization, children } = props;
    const gridButtonNodes = useRef([]);
    const headerButtonNodes = useRef({});
    const footerButtonNodes = useRef({});

    const [focusedGrid, setFocusedGrid] = useState<number | null>(null);
    const [focusedHeader, setFocusedHeader] = useState<HeaderButton | null>(null);
    const [focusedFooter, setFocusedFooter] = useState<FooterButton | null>(null);

    const context: CalendarContext = {
        locale: locale ?? ru,
        localization,
        headerButtonNodes,
        focusedHeader,
        setFocusedHeader,
        gridButtonNodes,
        focusedGrid,
        setFocusedGrid,
        footerButtonNodes,
        focusedFooter,
        setFocusedFooter,
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
