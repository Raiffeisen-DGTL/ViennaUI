import React, { useCallback, useMemo } from 'react';
import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';
import { GoLeft, Back, CollapseLeft, CollapseRight, GoRight } from 'vienna.icons';
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
}

export const Header: React.FC<Props> = (props: Props): JSX.Element => {
    const { viewMode, onChangeDisplayedDate, onChangeViewMode, displayedDate, hasNavigation } = props;

    const locale = useCalendarLocale();

    const handleChangeYear = useCallback(
        (spin: Spin, step?: number) => () => {
            if (!spin) {
                return;
            }

            switch (spin) {
                case 'prev': {
                    const nextDate = subYears(displayedDate, step ?? 1);
                    onChangeDisplayedDate(nextDate);

                    return;
                }
                case 'next': {
                    const nextDate = addYears(displayedDate, step ?? 1);
                    onChangeDisplayedDate(nextDate);
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

            switch (spin) {
                case 'prev': {
                    const nextDate = subMonths(displayedDate, 1);
                    onChangeDisplayedDate(nextDate);

                    return;
                }
                case 'next': {
                    const nextDate = addMonths(displayedDate, 1);
                    onChangeDisplayedDate(nextDate);
                }
            }
        },
        [displayedDate]
    );

    const content = useMemo(() => {
        const monthName = format(displayedDate, 'LLLL', { locale });
        const displayedYear = displayedDate.getFullYear();

        switch (viewMode) {
            case ViewMode.YEAR_LIST: {
                const startYear = Math.floor(displayedYear / 12) * 12;

                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <Back role='button' size='s' onClick={onChangeViewMode(ViewMode.MONTH)} />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <GoLeft role='button' size='s' onClick={handleChangeYear('prev', 12)} />
                        </NavigationButton>

                        <HeaderTitle>
                            {startYear}-{startYear + 11}
                        </HeaderTitle>

                        <NavigationButton>
                            <GoRight role='button' size='s' onClick={handleChangeYear('next', 12)} />
                        </NavigationButton>
                    </Box>
                );
            }
            case ViewMode.MONTH_LIST: {
                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <Back role='button' size='s' onClick={onChangeViewMode(ViewMode.MONTH)} />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <GoLeft role='button' size='s' onClick={handleChangeYear('prev', 1)} />
                        </NavigationButton>

                        <HeaderTitle>
                            <Button type='button' design='ghost' onClick={onChangeViewMode(ViewMode.YEAR_LIST)}>
                                <b>{displayedYear}</b>
                            </Button>
                        </HeaderTitle>

                        <NavigationButton>
                            <GoRight role='button' size='s' onClick={handleChangeYear('next', 1)} />
                        </NavigationButton>
                    </Box>
                );
            }
            case ViewMode.MONTH:
            default: {
                const monthValue = (
                    <MonthName>
                        <Button type='button' design='ghost' onClick={onChangeViewMode(ViewMode.MONTH_LIST)}>
                            <FirstLetterUpper>{monthName}</FirstLetterUpper>
                        </Button>
                    </MonthName>
                );
                const yearValue = (
                    <Button type='button' design='ghost' onClick={onChangeViewMode(ViewMode.YEAR_LIST)}>
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

                        <HeaderTitle hasPadding>
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
