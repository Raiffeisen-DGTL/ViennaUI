import React from 'react';
import { act } from 'react-dom/test-utils';
import { Datepicker, Select, InputMask } from '..';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';

test('DateTimePicker', () => {
    const snap = snapshot.render(<DateTimePicker />);

    const snapTwoChild = snapshot.render(
        <DateTimePicker>
            <Datepicker />
            <Select />
        </DateTimePicker>
    );

    const snapDatePickerChild = snapshot.render(
        <DateTimePicker>
            <Datepicker />
        </DateTimePicker>
    );

    const snapSelectChild = snapshot.render(
        <DateTimePicker>
            <Select />
        </DateTimePicker>
    );

    expect(snap).toMatchSnapshot();
    expect(snapTwoChild).toMatchSnapshot();
    expect(snapDatePickerChild).toMatchSnapshot();
    expect(snapSelectChild).toMatchSnapshot();
});

test('DateTimePicker w/ design', () => {
    const designs: DateTimePickerProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<DateTimePicker design={design} />);

        const snapTwoChild = snapshot.render(
            <DateTimePicker design={design}>
                <Datepicker />
                <Select />
            </DateTimePicker>
        );

        const snapDatePickerChild = snapshot.render(
            <DateTimePicker design={design}>
                <Datepicker />
            </DateTimePicker>
        );

        const snapSelectChild = snapshot.render(
            <DateTimePicker design={design}>
                <Select />
            </DateTimePicker>
        );

        expect(snap).toMatchSnapshot();
        expect(snapTwoChild).toMatchSnapshot();
        expect(snapDatePickerChild).toMatchSnapshot();
        expect(snapSelectChild).toMatchSnapshot();
    });
});

test('DateTimePicker w/ size', () => {
    const sizes: DateTimePickerProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<DateTimePicker size={size} />);

        const snapTwoChild = snapshot.render(
            <DateTimePicker size={size}>
                <Datepicker />
                <Select />
            </DateTimePicker>
        );

        const snapDatePickerChild = snapshot.render(
            <DateTimePicker size={size}>
                <Datepicker />
            </DateTimePicker>
        );

        const snapSelectChild = snapshot.render(
            <DateTimePicker size={size}>
                <Select />
            </DateTimePicker>
        );

        expect(snap).toMatchSnapshot();
        expect(snapTwoChild).toMatchSnapshot();
        expect(snapDatePickerChild).toMatchSnapshot();
        expect(snapSelectChild).toMatchSnapshot();
    });
});

test('DateTimePicker w/ edit date', async () => {
    const fn = jest.fn();
    const data = { value: '22.02.1988' };

    const snap = snapshot.mount(<DateTimePicker onChange={fn} />);

    act(() => {
        snap.find(InputMask).get(0).props.onChange({}, data);
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith({}, { date: '22.02.1988', time: '' });
});

test('DateTimePicker w/ edit time', async () => {
    const fn = jest.fn();
    const data = { value: '21:00' };

    const snap = snapshot.mount(<DateTimePicker onChange={fn} />);

    act(() => {
        snap.find(InputMask).get(1).props.onChange({}, data);
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith({}, { date: '', time: '21:00' });
});

test('DateTimePicker w/ select time', async () => {
    const fn = jest.fn();
    const data = { value: '21:00' };

    const snap = snapshot.mount(
        <DateTimePicker onChange={fn}>
            <Select />
        </DateTimePicker>
    );

    act(() => {
        snap.find(Select).props().onSelect({}, data);
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith({}, { date: '', time: '21:00' });
});

test('DateTimePicker w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = (
        <DateTimePicker {...props}>
            <Select />
        </DateTimePicker>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
