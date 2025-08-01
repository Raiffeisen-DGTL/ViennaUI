import React, { useCallback, useMemo } from 'react';
import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';
import { GoLeftIcon, BackIcon, CollapseLeftIcon, CollapseRightIcon, GoRightIcon } from 'vienna.icons';
import { Spin, ViewMode } from '../types';
import { FirstLetterUpper } from '../Calendar.styles';
import { useCalendarLocale } from '../Context';
import { useHeaderFocus } from '../hooks';
import { Box, HeaderDoubleArrow, HeaderTitle, Button, BackButton, MonthName } from './Header.style';

export interface HeaderTestId {
    btnYearPrev?: string;
    btnYearNext?: string;
    btnMonthPrev?: string;
    btnMonthNext?: string;
    btnViewMode?: string;
}

interface Props {
    viewMode: ViewMode;
    onChangeViewMode: (value: ViewMode) => () => void;
    onChangeDisplayedDate: (date: Date) => void;
    displayedDate: Date;
    hasNavigation: boolean;
    mode?: 'day' | 'month';
    testId?: HeaderTestId;
}

export const Header: React.FC<Props> = (props) => {
    const { mode, viewMode, onChangeDisplayedDate, onChangeViewMode, displayedDate, hasNavigation, testId } = props;

    const locale = useCalendarLocale();
    const { setUpFocusProps } = useHeaderFocus(viewMode);

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
                const start = Math.max(startYear, 1900);
                const end = Math.min(start + 11, 3000);

                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton
                                type='button'
                                design='ghost'
                                data-testid={testId?.btnViewMode}
                                onClick={onChangeViewMode(mode === 'month' ? 'month_list' : 'month')}
                                {...setUpFocusProps('back')}>
                                <BackIcon role='button' size='s' />
                            </BackButton>
                        )}

                        <Button
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnYearPrev}
                            onClick={handleChangeYear('prev', 12)}
                            {...setUpFocusProps('leftArrow')}>
                            <GoLeftIcon role='button' size='s' />
                        </Button>

                        <HeaderTitle>
                            {start}-{end}
                        </HeaderTitle>

                        <Button
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnMonthNext}
                            onClick={handleChangeYear('next', 12)}
                            {...setUpFocusProps('rightArrow')}>
                            <GoRightIcon role='button' size='s' />
                        </Button>
                    </Box>
                );
            }
            case 'month_list': {
                return (
                    <Box>
                        {hasNavigation && (
                            <BackButton
                                type='button'
                                design='ghost'
                                data-testid={testId?.btnViewMode}
                                onClick={onChangeViewMode('month')}
                                {...setUpFocusProps('back')}>
                                <BackIcon role='button' size='s' />
                            </BackButton>
                        )}

                        <Button
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnYearPrev}
                            onClick={handleChangeYear('prev', 1)}
                            {...setUpFocusProps('leftArrow')}>
                            <GoLeftIcon role='button' size='s' />
                        </Button>

                        <HeaderTitle>
                            <Button
                                type='button'
                                design='ghost'
                                data-testid={testId?.btnViewMode}
                                onClick={onChangeViewMode('year_list')}
                                {...setUpFocusProps('year')}>
                                <b>{displayedYear}</b>
                            </Button>
                        </HeaderTitle>

                        <Button
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnYearNext}
                            onClick={handleChangeYear('next', 1)}
                            {...setUpFocusProps('rightArrow')}>
                            <GoRightIcon role='button' size='s' />
                        </Button>
                    </Box>
                );
            }
            case 'month':
            default: {
                const monthValue = (
                    <MonthName>
                        <Button
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnViewMode}
                            onClick={onChangeViewMode('month_list')}
                            {...setUpFocusProps('month')}>
                            <FirstLetterUpper>{monthName}</FirstLetterUpper>
                        </Button>
                    </MonthName>
                );
                const yearValue = (
                    <Button
                        type='button'
                        design='ghost'
                        data-testid={testId?.btnViewMode}
                        onClick={onChangeViewMode('year_list')}
                        {...setUpFocusProps('year')}>
                        <b>{displayedYear}</b>
                    </Button>
                );

                return (
                    <Box>
                        <HeaderDoubleArrow
                            tabIndex={0}
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnYearPrev}
                            onClick={handleChangeYear('prev', 1)}
                            {...setUpFocusProps('leftArrowDouble')}>
                            <CollapseLeftIcon role='button' size='s' />
                        </HeaderDoubleArrow>
                        <Button
                            tabIndex={0}
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnMonthPrev}
                            onClick={handleChangeMonth('prev')}
                            {...setUpFocusProps('leftArrow')}>
                            <GoLeftIcon role='button' size='s' />
                        </Button>

                        <HeaderTitle>
                            {monthValue}
                            {yearValue}
                        </HeaderTitle>

                        <Button
                            tabIndex={0}
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnMonthNext}
                            onClick={handleChangeMonth('next')}
                            {...setUpFocusProps('rightArrow')}>
                            <GoRightIcon role='button' size='s' />
                        </Button>
                        <HeaderDoubleArrow
                            tabIndex={0}
                            type='button'
                            design='ghost'
                            data-testid={testId?.btnYearNext}
                            onClick={handleChangeYear('next')}
                            {...setUpFocusProps('rightArrowDouble')}>
                            <CollapseRightIcon role='button' size='s' />
                        </HeaderDoubleArrow>
                    </Box>
                );
            }
        }
    }, [viewMode, displayedDate, locale]);

    return <>{content}</>;
};
