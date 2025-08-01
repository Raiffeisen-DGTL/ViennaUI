import React, { useCallback, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Monthpicker as MonthPickerComponent, MonthpickerProps } from '../Monthpicker';

type RequiredMonthpickerProps = Required<MonthpickerProps>;

const Monthpicker: React.FC<React.ComponentProps<typeof MonthPickerComponent>> = (props) => {
    return (
        <MonthPickerComponent
            data-testid={'Monthpicker'}
            testId={{
                calendarBox: 'Monthpicker.CalendarBox',
                postfixIcon: 'Monthpicker.CalendarIcon',
            }}
            {...props}
        />
    );
};

describe('Monthpicker', () => {
    it('should open calendar droplist', async () => {
        render(<Monthpicker />);
        const input = screen.getByTestId('Monthpicker');
        await userEvent.click(input);

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange when click on month', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<Date | undefined>(new Date('2021-5-5'));
            const handleChange = useCallback<RequiredMonthpickerProps['onChange']>((data) => {
                if (data) {
                    setValue(data.value);
                    fn(data);
                }
            }, []);
            return <Monthpicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        await userEvent.tab();
        const day = screen.getByText(/Янв/i);
        await userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            options: {
                month: 'январь 2021',
                name: undefined,
            },
            value: new Date('2021-1-1'),
        });
    });

    it('should open calendar droplist when input is focused', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<Date | undefined>();
            const handleChange = useCallback<RequiredMonthpickerProps['onChange']>((data) => {
                if (data) {
                    setValue(data.value);
                }
            }, []);
            return <Monthpicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        await userEvent.tab();

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it.only('should hide calendar droplist when click calendar icon', async () => {
        render(<Monthpicker />);
        const icon = screen.getByTestId('Monthpicker.CalendarIcon');
        await userEvent.click(icon);

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        await userEvent.click(icon);
        expect(calendar).not.toBeInTheDocument();
    });
});
