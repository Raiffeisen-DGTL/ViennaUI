import React, { useCallback, useMemo } from 'react';
import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';
import { GoLeft, Back, CollapseLeft, CollapseRight, GoRight } from '@fcc/icons';
import { Spin, ViewMode } from '../types';
import { FirstLetterUpper } from '../Calendar.styles';
import { useCalendarLocale } from '../Context';
import { Box, HeaderDoubleArrow, HeaderTitle, NavigationButton, BackButton, MonthName } from './Header.style';
import { Button } from '../../Button';

interface Props {
    viewMode: ViewMode;
    onChangeViewMode: (value: ViewMode) => () => void;
    onChangeDisplayedDate: (date: Date) => void;
    displayedDate: Date;
    hasNavigation: boolean;
    mode?: 'day' | 'month';
}

export const Header: React.FC<Props> = (props) => {
    const { mode, viewMode, onChangeDisplayedDate, onChangeViewMode, displayedDate, hasNavigation } = props;

    const locale = useCalendarLocale();

    const handleChangeYear = useCallback(
        (spin: Spin, step?: number) => () => {
            if (!spin) {
                return;
            }
            const displayedYear = displayedDate?.getFullYear();

            switch (spin) {
                case 'prev': {
                    const nextDate = subYears(displayedDate, step ?? 1);
                    if (displayedYear > 0) {
                        onChangeDisplayedDate(new Date(nextDate));
                    }

                    return;
                }
                case 'next': {
                    const nextDate = addYears(displayedDate, step ?? 1);
                    if (displayedYear < 3000) {
                        onChangeDisplayedDate(new Date(nextDate));
                    }
                }
            }
        },
        [displayedDate]
    );

    const handleChangeMonth = useCallback(
        (spin: Spin) => () => {
            if (!spin) {
                return;
            }
            const displayedYear = displayedDate?.getFullYear();

            switch (spin) {
                case 'prev': {
                    const nextDate = subMonths(displayedDate, 1);
                    if (displayedYear >= 0) {
                        onChangeDisplayedDate(new Date(nextDate));
                    }

                    return;
                }
                case 'next': {
                    const nextDate = addMonths(displayedDate, 1);
                    if (displayedYear <= 3000) {
                        onChangeDisplayedDate(new Date(nextDate));
                    }
                }
            }
        },
        [displayedDate]
    );

    const content = useMemo(() => {
        const monthName = format(displayedDate, 'LLLL', { locale });
        const displayedYear = displayedDate.getFullYear();

        switch (viewMode) {
            case 'year_list': {
                const startYear = Math.floor(displayedYear / 12) * 12;
                const start = startYear <= 0 ? 0 : startYear;
                const end = startYear + 11 >= 3000 ? 3000 : startYear + 11;

                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <Back
                                    role='button'
                                    size='s'
                                    onClick={onChangeViewMode(mode === 'month' ? 'month_list' : 'month')}
                                />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <GoLeft role='button' size='s' onClick={handleChangeYear('prev', 12)} />
                        </NavigationButton>

                        <HeaderTitle>
                            {start}-{end}
                        </HeaderTitle>

                        <NavigationButton>
                            <GoRight role='button' size='s' onClick={handleChangeYear('next', 12)} />
                        </NavigationButton>
                    </Box>
                );
            }
            case 'month_list': {
                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <Back role='button' size='s' onClick={onChangeViewMode('month')} />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <GoLeft role='button' size='s' onClick={handleChangeYear('prev', 1)} />
                        </NavigationButton>

                        <HeaderTitle>
                            <Button type='button' design='ghost' onClick={onChangeViewMode('year_list')}>
                                <b>{displayedYear}</b>
                            </Button>
                        </HeaderTitle>

                        <NavigationButton>
                            <GoRight role='button' size='s' onClick={handleChangeYear('next', 1)} />
                        </NavigationButton>
                    </Box>
                );
            }
            case 'month':
            default: {
                const monthValue = (
                    <MonthName>
                        <Button type='button' design='ghost' onClick={onChangeViewMode('month_list')}>
                            <FirstLetterUpper>{monthName}</FirstLetterUpper>
                        </Button>
                    </MonthName>
                );
                const yearValue = (
                    <Button type='button' design='ghost' onClick={onChangeViewMode('year_list')}>
                        <b>{displayedYear}</b>
                    </Button>
                );

                return (
                    <Box>
                        <HeaderDoubleArrow>
                            <CollapseLeft role='button' size='s' onClick={handleChangeYear('prev', 1)} />
                        </HeaderDoubleArrow>
                        <NavigationButton>
                            <GoLeft role='button' size='s' onClick={handleChangeMonth('prev')} />
                        </NavigationButton>

                        <HeaderTitle>
                            {monthValue}
                            {yearValue}
                        </HeaderTitle>

                        <NavigationButton>
                            <GoRight role='button' size='s' onClick={handleChangeMonth('next')} />
                        </NavigationButton>
                        <HeaderDoubleArrow>
                            <CollapseRight role='button' size='s' onClick={handleChangeYear('next')} />
                        </HeaderDoubleArrow>
                    </Box>
                );
            }
        }
    }, [viewMode, displayedDate, locale]);

    return <>{content}</>;
};
