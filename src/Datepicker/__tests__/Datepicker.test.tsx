import React, { useState, useCallback } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Datepicker, DatepickerProps } from '../Datepicker';

type HandleChangeType = Required<DatepickerProps>['onChange'];

describe('Datepicker', () => {
    it('should open calendar droplist', () => {
        const { getByTestId, getByRole } = render(<Datepicker testId={{ calendarBox: 'Datepicker.CalendarBox' }} />);
        const input = getByRole('textbox');
        fireEvent.focus(input);

        const calendar = getByTestId('Datepicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange', () => {
        const fn = jest.fn();
        const { getByRole } = render(<Datepicker onChange={fn} />);
        const input = getByRole('textbox');
        fireEvent.input(input, { target: { value: '02.02.2021' } });

        expect(fn).toHaveBeenCalled();
    });

    it('should show correct date when typing', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<string>();
            const handleChange = useCallback<HandleChangeType>(({ value: data }) => {
                setValue(data);
            }, []);
            return <Datepicker value={value} onChange={handleChange} />;
        };
        const { getByRole } = render(<Wrapper />);
        const input = getByRole('textbox');
        fireEvent.input(input, { target: { value: '02.07.2021' } });

        expect(input).toHaveValue('02.07.2021');
    });

    it('should open calendar droplist when input is focused', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<string>();
            const handleChange = useCallback<HandleChangeType>(({ value: data }) => {
                setValue(data);
            }, []);
            return (
                <Datepicker value={value} testId={{ calendarBox: 'Datepicker.CalendarBox' }} onChange={handleChange} />
            );
        };
        const { getByTestId } = render(<Wrapper />);
        await userEvent.tab();

        const calendar = getByTestId('Datepicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange when click on day', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<string>('01.05.2021');
            const handleChange = useCallback<HandleChangeType>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <Datepicker value={value} onChange={handleChange} />;
        };
        const { getByText } = render(<Wrapper />);
        await userEvent.tab();
        const day = getByText('5');
        await userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            options: {
                date: new Date('2021-5-5'),
                name: undefined,
            },
            value: '05.05.2021',
        });
    });

    it('should return isDisabled as true for invalid date when minDate and maxDate are passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<string>();
            const handleChange = useCallback<HandleChangeType>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <Datepicker
                    value={value}
                    onChange={handleChange}
                    minDate={new Date('2021-7-5')}
                    maxDate={new Date('2021-7-10')}
                />
            );
        };
        const { getByRole } = render(<Wrapper />);
        const input = getByRole('textbox');
        fireEvent.input(input, { target: { value: '02.07.2021' } });
        fireEvent.blur(input);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            options: {
                date: undefined,
                isDisabled: false,
                name: undefined,
            },
            value: '02.07.202',
        });
        await userEvent.clear(input);
        fireEvent.input(input, { target: { value: '12.07.2021' } });
        fireEvent.blur(input);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            options: {
                date: undefined,
                isDisabled: false,
                name: undefined,
            },
            value: '12.07.202',
        });
    });

    it('should return isDisabled as true for invalid date when disabledDates is passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<string>();
            const handleChange = useCallback<HandleChangeType>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <Datepicker
                    value={value}
                    onChange={handleChange}
                    disabledDates={[new Date('2021-7-5'), new Date('2021-7-10')]}
                />
            );
        };
        const { getByRole } = render(<Wrapper />);
        const input = getByRole('textbox');
        fireEvent.input(input, { target: { value: '05.07.2021' } });

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            options: {
                date: new Date('2021-7-5'),
                isDisabled: true,
                name: undefined,
            },
            value: '05.07.2021',
        });
    });

    it('should correct form values', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<string>();
            const handleChange = useCallback<HandleChangeType>((data) => {
                setValue(data.value);
            }, []);
            return (
                <form data-testid={'form'}>
                    <Datepicker name={'date'} value={value} onChange={handleChange} />
                </form>
            );
        };

        const { getByRole, getByTestId } = render(<Wrapper />);
        const input = getByRole('textbox');
        const form = getByTestId('form');
        fireEvent.input(input, { target: { value: '02.02.2021' } });

        expect(form).toHaveFormValues({
            date: '02.02.2021',
        });
    });

    it('should block date if timezone is specified', () => {
        const { getByTestId } = render(
            <Datepicker
                testId={{
                    calendar: {
                        btnCalendarCell: (date: Date) => `day-${date.getDate()}`,
                    },
                }}
                defaultDisplayedDate={new Date('2025-05-02T00:00:00')}
                disabledDates={[new Date('2025-05-08T05:00:00+03:00')]}
                isCalendarOpen
            />
        );
        const day = getByTestId('day-8');
        expect(day).toBeInTheDocument();
        expect(day.dataset.type).toBe('disabled');
    });

    it('should close the calendar by clicking on the day', () => {
        const { getByTestId, getByRole } = render(<Datepicker testId={{ calendarBox: 'Datepicker.CalendarBox' }} />);
        const input = getByRole('textbox');
        fireEvent.focus(input);

        const calendar = getByTestId('Datepicker.CalendarBox');
        expect(calendar).toBeInTheDocument();

        const day = getByRole('button', { name: /15/ });
        fireEvent.click(day);

        expect(calendar).not.toBeInTheDocument();
    });

    it('should handle viewOnly mode correctly and retain value after multiple clicks', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState(new Date('2021-07-02'));
            const [viewOnly, setViewOnly] = useState(false);
            const handleChange = useCallback(({ value }) => setValue(value), []);
            return (
                <>
                    <button data-testid='viewOnly-button' onClick={() => setViewOnly((p) => !p)}>
                        Change viewOnly
                    </button>
                    <Datepicker
                        data-testid='datepicker_container'
                        value={value}
                        onChange={handleChange}
                        viewOnly={viewOnly}
                    />
                </>
            );
        };

        const { getByRole, getByTestId } = render(<Wrapper />);
        const input = getByRole('textbox');

        expect(input.disabled).toBe(false);

        fireEvent.click(screen.getByTestId('viewOnly-button'));

        fireEvent.click(screen.getByTestId('viewOnly-button'));
        expect(input.disabled).toBe(false);

        const initialValue = '02.07.2021';
        fireEvent.input(input, { target: { value: initialValue } });
        expect(input.value).toBe(initialValue);
    });
});
