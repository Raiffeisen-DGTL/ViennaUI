import React, { useCallback, useMemo } from 'react';
import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';
import { Left, LeftArrow, RewindLeft2, RewindRight2, Right } from 'vienna.icons';
import ru from 'date-fns/locale/ru';
import { Spin, ViewMode } from '../types';
import { FirstLetterUpper } from '../Calendar.styles';
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

    const handleChangeYear = useCallback(
        (spin: Spin, step?: number) => () => {
            if (!spin) {
                return;
            }

            switch (spin) {
                case 'prev': {
                    const nextDate = subYears(displayedDate, step || 1);
                    onChangeDisplayedDate(nextDate);

                    return;
                }
                case 'next': {
                    const nextDate = addYears(displayedDate, step || 1);
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
        const monthName = format(displayedDate, 'LLLL', { locale: ru });
        const displayedYear = displayedDate.getFullYear();

        switch (viewMode) {
            case ViewMode.YEAR_LIST: {
                const startYear = Math.floor(displayedYear / 12) * 12;

                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <LeftArrow size='s' onClick={onChangeViewMode(ViewMode.MONTH)} />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <Left size='s' onClick={handleChangeYear('prev', 12)} />
                        </NavigationButton>

                        <HeaderTitle>
                            {startYear}-{startYear + 11}
                        </HeaderTitle>

                        <NavigationButton>
                            <Right size='s' onClick={handleChangeYear('next', 12)} />
                        </NavigationButton>
                    </Box>
                );
            }
            case ViewMode.MONTH_LIST: {
                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton>
                                <LeftArrow size='s' onClick={onChangeViewMode(ViewMode.MONTH)} />
                            </BackButton>
                        )}

                        <NavigationButton>
                            <Left size='s' onClick={handleChangeYear('prev', 1)} />
                        </NavigationButton>

                        <HeaderTitle>
                            <Button type='button' design='ghost' onClick={onChangeViewMode(ViewMode.YEAR_LIST)}>
                                <b>{displayedYear}</b>
                            </Button>
                        </HeaderTitle>

                        <NavigationButton>
                            <Right size='s' onClick={handleChangeYear('next', 1)} />
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
                            <RewindLeft2 size='s' onClick={handleChangeYear('prev', 1)} />
                        </HeaderDoubleArrow>
                        <NavigationButton>
                            <Left size='s' onClick={handleChangeMonth('prev')} />
                        </NavigationButton>

                        <HeaderTitle hasPadding>
                            {monthValue}
                            {yearValue}
                        </HeaderTitle>

                        <NavigationButton>
                            <Right size='s' onClick={handleChangeMonth('next')} />
                        </NavigationButton>
                        <HeaderDoubleArrow>
                            <RewindRight2 size='s' onClick={handleChangeYear('next')} />
                        </HeaderDoubleArrow>
                    </Box>
                );
            }
        }
    }, [viewMode, displayedDate]);

    return <>{content}</>;
};
