import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from '../Select';
import { Option } from '../Option';
import { Icon } from '../Option/Option.styles';
import { Current } from '../Select.styles';

describe.skip('Select', () => {
    test('w/ click', () => {
        const optionMessage = 'Значение 1';
        render(
            <Select>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = screen.getByRole('listbox');
        userEvent.click(select);
        const option = screen.getByText(optionMessage);
        expect(option).toBeInTheDocument();

        userEvent.click(select);
        expect(option).not.toBeInTheDocument();
    });

    test('w/ click document', () => {
        const optionMessage = 'Значение 1';
        render(
            <>
                <Select>
                    <Select.Option>{optionMessage}</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                </Select>
                <button>Click</button>
            </>
        );

        const select = screen.getByRole('listbox');
        userEvent.click(select);
        const option = screen.getByText(optionMessage);
        expect(option).toBeInTheDocument();

        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(option).not.toBeInTheDocument();
    });

    test('w/ editable', () => {
        const optionMessage = 'Значение 1';
        const Wrapper = () => {
            const [value, setValue] = React.useState<string>();
            const [options, setOptions] = React.useState<string[]>([]);

            const handleSelect = React.useCallback((e, data) => {
                setValue(data.value);
            }, []);

            const changeHandler = React.useCallback((e, data) => {
                const mock: string[] = [optionMessage, 'Значение 2'];
                setOptions([...mock.filter((it) => it.startsWith(data.value))]);
            }, []);

            return <Select value={value} editable onChange={changeHandler} options={options} onSelect={handleSelect} />;
        };
        render(<Wrapper />);

        userEvent.tab();
        const input = screen.getByRole('textbox');
        userEvent.type(input, optionMessage);
        const option = screen.getByText(optionMessage);
        expect(option).toBeInTheDocument();
    });

    test('w/ tab', () => {
        const optionMessage = 'Значение 2';
        render(
            <>
                <Select>
                    <Select.Option>Значение 1</Select.Option>
                </Select>
                <Select>
                    <Select.Option>{optionMessage}</Select.Option>
                </Select>
            </>
        );

        userEvent.tab();
        userEvent.tab();

        const option = screen.getByText(optionMessage);
        expect(option).toBeInTheDocument();
    });

    test('w/ change', () => {
        const optionMessage = 'Значение 1';
        const Wrapper = () => {
            const [value, setValue] = React.useState();
            const handleSelect = (e, data) => setValue(data.value);
            return (
                <Select value={value} onSelect={handleSelect}>
                    <Select.Option>{optionMessage}</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            );
        };
        render(<Wrapper />);

        const select = screen.getByRole('listbox');
        userEvent.click(select);

        const option = screen.getByText(optionMessage);
        userEvent.click(option);
        expect(option).not.toBeInTheDocument();

        const selectedOption = screen.getByText(optionMessage);
        expect(selectedOption).toBeInTheDocument();
    });

    test('w/ spy onSelect', () => {
        const optionMessage = 'Значение 1';
        const fn = jest.fn();
        render(
            <Select onSelect={fn}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = screen.getByRole('listbox');
        userEvent.click(select);

        const option = screen.getByText(optionMessage);
        userEvent.click(option);
        expect(option).not.toBeInTheDocument();
        expect(fn).toBeCalledWith(expect.any(Object), { value: optionMessage, name: undefined });
    });

    test('w/ spy onFocus', () => {
        const optionMessage = 'Значение 1';
        const fn = jest.fn();
        render(
            <Select onFocus={fn} value={optionMessage}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        userEvent.tab();

        expect(fn).toBeCalledWith(expect.any(Object));
    });

    test('w/ spy onBlur', () => {
        const optionMessage = 'Значение 1';
        const fn = jest.fn();
        render(
            <Select onBlur={fn} value={optionMessage}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        userEvent.tab();
        userEvent.tab();

        expect(fn).toBeCalledWith(expect.any(Object));
    });

    test('/w compare options as children', () => {
        const snap = snapshot.mount(
            <Select value={'Значение 2'}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );
        snap.simulate('mousedown');
        let option = snap.find(Option).at(1);
        let icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);

        const snapStandartObject = snapshot.mount(
            <Select value={{ value: 'Значение 2' }}>
                <Select.Option value={{ value: 'Значение 1' }} />
                <Select.Option value={{ value: 'Значение 2' }} />
            </Select>
        );
        snapStandartObject.simulate('mousedown');
        option = snapStandartObject.find(Option).at(1);
        icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);

        function valueToString(item) {
            return item.name;
        }
        function compare(item) {
            return item.id;
        }
        const snapSpecialObject = snapshot.mount(
            <Select valueToString={valueToString} compare={compare} value={{ id: 2, name: 'Значение 3' }}>
                <Select.Option value={{ id: 1, name: 'Значение 3' }} />
                <Select.Option value={{ id: 2, name: 'Значение 3' }} />
            </Select>
        );
        snapSpecialObject.simulate('mousedown');
        option = snapSpecialObject.find(Option).at(1);
        icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);
    });

    test('/w compare options as props', () => {
        const options = ['Значение 1', 'Значение 2'];
        const snap = snapshot.mount(<Select value={'Значение 2'} options={options} />);
        snap.simulate('mousedown');
        let option = snap.find(Option).at(1);
        let icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);

        const optionsStandartObject = [{ value: 'Значение 1' }, { value: 'Значение 2' }];
        const snapStandartObject = snapshot.mount(
            <Select value={optionsStandartObject[1]} options={optionsStandartObject} />
        );
        snapStandartObject.simulate('mousedown');
        option = snapStandartObject.find(Option).at(1);
        icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);

        const optionsSpecialObject = [
            { id: 1, name: 'Значение 3' },
            { id: 2, name: 'Значение 3' },
        ];
        function valueToString(item) {
            return item.name;
        }
        function compare(item) {
            return item.id;
        }
        const snapSpecialObject = snapshot.mount(
            <Select
                valueToString={valueToString}
                compare={compare}
                value={optionsSpecialObject[1]}
                options={optionsSpecialObject}
            />
        );
        snapSpecialObject.simulate('mousedown');
        option = snapSpecialObject.find(Option).at(1);
        icon = option.find(Icon);
        expect(icon.exists()).toEqual(true);
    });

    test('w/ any props', () => {
        const props = {
            className: 'className',
            id: 'id',
            title: 'title',
        };

        const component = <Select {...props} />;

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });

    test('/w template value', () => {
        const div = <div className='template'>template</div>;
        const snap = snapshot.mount(<Select templateValue={div} value={'Значение 1'} options={['Значение 1']} />);

        const current = snap.find(Current);
        const template = current.find('.template');

        expect(template.text()).toEqual('template');
    });
});
