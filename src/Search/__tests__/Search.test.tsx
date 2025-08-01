import React, { ComponentProps, useCallback, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search, SearchProps } from '../Search';

type SearchRequiredProps = Required<SearchProps>;

const onSelectFn = jest.fn();
const onFocusFn = jest.fn();
const onBlurFn = jest.fn();
const Wrapper = (props: ComponentProps<typeof Search>) => {
    const [state, setValue] = useState({ value: '', suggests: [] });
    const handleChange: SearchRequiredProps['onChange'] = (data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
            '320124',
        ];
        const temp: any = (data.value && mock.filter((m) => m.toUpperCase().includes(data.value.toUpperCase()))) || [];
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

describe('Search', () => {
    it('should open drop list', async () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        await userEvent.tab();
        await userEvent.keyboard('Райффайзен');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();

        await userEvent.click(document.body);
        expect(option).not.toBeInTheDocument();
    });

    it('should open drop list by click', async () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        const search = screen.getByRole('textbox');
        await userEvent.click(search);
        await userEvent.keyboard('Райффайзен');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();

        await userEvent.click(document.body);
        expect(option).not.toBeInTheDocument();
    });

    it('should select option by click', async () => {
        const optionMessage = 'Райффайзен банк';
        render(<Wrapper />);

        await userEvent.tab();
        await userEvent.keyboard('Райффайзен');
        const option = screen.getByText(optionMessage);
        await userEvent.click(option);
        expect(onSelectFn).toHaveBeenCalledWith({
            event: expect.any(Object),
            value: optionMessage,
            options: { index: 0, name: undefined },
        });
    });

    it('should focus component', async () => {
        render(<Wrapper />);

        await userEvent.tab();
        expect(onFocusFn).toHaveBeenCalledWith(expect.any(Object), { value: '' });
    });

    it('should blur component', async () => {
        render(<Wrapper />);

        await userEvent.tab();
        await userEvent.tab();
        expect(onBlurFn).toHaveBeenCalledWith(expect.any(Object), { value: '' });
    });

    it('should call onChange', async () => {
        const fn = jest.fn();
        const text = 'Райффайзен';
        const Wrapper = () => {
            const [state] = useState({ value: '', suggests: [] });
            return <Search suggests={state.suggests} value={state.value} fitOptions={false} onChange={fn} />;
        };
        render(<Wrapper />);

        await userEvent.tab();
        await userEvent.keyboard(text);
        expect(fn).toHaveBeenCalledTimes(text.length);
    });

    it('should show value by valueToString', async () => {
        interface OptionType {
            family: string;
            name: string;
            middle: string;
        }
        const optionMessage = 'Смирнов Иван Иванович';
        const ValueToStringWrapper = () => {
            const [value, setValue] = useState<string | OptionType>();
            const [suggests, setSuggests] = useState();
            const valueToString = useCallback<SearchRequiredProps['valueToString']>((val) => {
                if (val) {
                    if (typeof val === 'string') {
                        return val;
                    }

                    return `${val.family} ${val.name} ${val.middle}`;
                }

                return '';
            }, []);
            const handleChange = useCallback<SearchRequiredProps['onChange']>((data) => {
                const mock = [
                    { family: 'Смирнов', name: 'Иван', middle: 'Иванович' },
                    { family: 'Иванов', name: 'Иван', middle: 'Петрович' },
                    { family: 'Иванов', name: 'Константин', middle: 'Петрович' },
                ];
                const temp: any =
                    (data.value &&
                        mock.filter((m) => valueToString(m).toUpperCase().includes(data.value.toUpperCase()))) ||
                    [];
                setSuggests(temp);
                setValue(data.value);
            }, []);
            const handleSelect: NonNullable<SearchProps<string | OptionType>['onSelect']> = useCallback((data) => {
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
        await userEvent.click(search);
        await userEvent.keyboard('Смирнов');
        const option = screen.queryByText(optionMessage);
        expect(option).toBeInTheDocument();
    });

    it('should format value by mask', async () => {
        const optionMessage = '320124';
        render(<Wrapper mask={'000-000'} />);

        await userEvent.tab();
        await userEvent.keyboard('320');
        const option = screen.getByText(optionMessage);
        await userEvent.click(option);
        const search: HTMLInputElement = screen.getByRole('textbox');
        expect(search.value).toBe('320-124');
    });

    it('should accept value matching mask and clear value not matching mask', async () => {
        const mask = '000-000';
        render(<Wrapper mask={mask} />);

        const search = screen.getByRole('textbox');

        // Test with a value matching the mask
        await userEvent.click(search);
        await userEvent.keyboard('320-124');
        expect(search.value).toBe('320-124');

        // Test with a value not matching the mask
        await userEvent.clear(search);
        await userEvent.keyboard('abc-def');
        expect(search.value).toBe('');
    });
});
