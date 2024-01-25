import React, { useCallback, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from '../Search';

const onSelectFn = jest.fn();
const onFocusFn = jest.fn();
const onBlurFn = jest.fn();
const Wrapper = (props) => {
    const [state, setValue] = useState({ value: '', suggests: [] });
    const handleChange = (e, data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
            '320124',
        ];
        const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
        const temp: any = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
        setValue({ value: data.value, suggests: temp });
    };
    const { mask } = props;

    return (
        <Search
            suggests={state.suggests}
            value={state.value}
            fitOptions={false}
            onChange={handleChange}
            onSelect={onSelectFn}
            onFocus={onFocusFn}
            onBlur={onBlurFn}
            {...(mask && { mask })}
        />
    );
};

describe.skip('Search', () => {
    it('should open drop list', () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        userEvent.tab();
        userEvent.keyboard('Райффайзен');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();

        userEvent.click(document.body);
        expect(option).not.toBeInTheDocument();
    });

    it('should open drop list by click', () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        const search = screen.getByRole('textbox');
        userEvent.click(search);
        userEvent.keyboard('Райффайзен');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();

        userEvent.click(document.body);
        expect(option).not.toBeInTheDocument();
    });

    it('should select option by click', () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        userEvent.tab();
        userEvent.keyboard('Райффайзен');
        const option = screen.getByText(optionMessage);
        userEvent.click(option);
        expect(onSelectFn).toHaveBeenCalledWith(expect.any(Object), { value: optionMessage });
    });

    it('should focus component', () => {
        render(<Wrapper />);

        userEvent.tab();
        expect(onFocusFn).toHaveBeenCalledWith(expect.any(Object), { value: '' });
    });

    it('should blur component', () => {
        render(<Wrapper />);

        userEvent.tab();
        userEvent.tab();
        expect(onBlurFn).toHaveBeenCalledWith(expect.any(Object), { value: '' });
    });

    it('should call onChange', () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [state] = useState({ value: '', suggests: [] });
            return <Search suggests={state.suggests} value={state.value} fitOptions={false} onChange={fn} />;
        };
        render(<Wrapper />);

        userEvent.tab();
        userEvent.keyboard('Райффайзен');
        expect(onBlurFn).toHaveBeenCalledWith(expect.any(Object), { value: 'Райффайзен' });
    });

    it('should show value by valueToString', () => {
        const optionMessage = 'Смирнов Иван Иванович';
        const ValueToStringWrapper = () => {
            const [value, setValue] = useState();
            const [suggests, setSuggests] = useState();
            const valueToString = useCallback((val) => {
                if (val) {
                    if (typeof val === 'string') {
                        return val;
                    }

                    return `${val.family} ${val.name} ${val.middle}`;
                }

                return '';
            }, []);
            const handleChange = useCallback((e, data) => {
                const mock = [
                    { family: 'Смирнов', name: 'Иван', middle: 'Иванович' },
                    { family: 'Иванов', name: 'Иван', middle: 'Петрович' },
                    { family: 'Иванов', name: 'Константин', middle: 'Петрович' },
                ];
                const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
                const temp: any =
                    (data.value && mock.filter((m) => regexp.test(escape(valueToString(m).toUpperCase())))) || [];
                setSuggests(temp);
                setValue(data.value);
            }, []);
            const handleSelect = useCallback((e, data) => {
                setValue(data.value);
            }, []);
            return (
                <Search
                    showInlineSuggest={false}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    valueToString={valueToString}
                    onChange={handleChange}
                    onSelect={handleSelect}>
                    {({ suggest }) => <div>{valueToString(suggest)}</div>}
                </Search>
            );
        };
        render(<ValueToStringWrapper />);

        const search = screen.getByRole('textbox');
        userEvent.click(search);
        userEvent.keyboard('Смирнов');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();
    });

    it('should format value by mask', () => {
        const optionMessage = '320124';
        render(<Wrapper mask={'000-000'} />);

        userEvent.tab();
        userEvent.keyboard('320');
        const option = screen.getByText(optionMessage);
        userEvent.click(option);
        const search = screen.getByRole('textbox');
        expect(search).toHaveAttribute('value', '320-124');
    });

    it('should get any props', () => {
        const props = {
            title: 'title',
        };

        const component = <Search {...props} />;

        const wrapper = snapshot.mount(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.find('input').props()[key]).toEqual(value);
        }
    });
});
