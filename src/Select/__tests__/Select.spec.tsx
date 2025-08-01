import React, { useState } from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BustIcon, ViolinIcon } from 'vienna.icons';
import { Select } from '../Select';
import { CustomItem, CustomItemWithIcon, Template } from '../helpers';
import { SelectServiceType } from '../../Utils';
import { Button } from '../../Button';

const WithForcedFocusBlur: React.FC<{ optionMessage: string; editable?: boolean }> = ({
    optionMessage,
    editable = false,
}) => {
    const controlsRef = React.useRef<SelectServiceType | null>(null);
    const focus = () => controlsRef.current?.focus();
    const blur = () => controlsRef.current?.blur();

    return (
        <>
            <Button data-testid='button-focus' onClick={focus}>
                Focus
            </Button>
            <Button data-testid='button-blur' onClick={blur}>
                Blur
            </Button>
            <Select editable={editable} controlsRef={controlsRef}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        </>
    );
};

// TODO рефактор в 12 мажоре

const ClearButtonSelect: React.FC<{ cb; optionMessage; editable?: boolean }> = ({ cb, optionMessage, editable }) => {
    const [value, setValue] = React.useState();

    const onSelect = ({ value }) => {
        setValue(value);
        cb(value);
    };

    return (
        <Select value={value} onSelect={onSelect} editable={editable} clearButton>
            <Select.Option>{optionMessage}</Select.Option>
            <Select.Option>Значение 2</Select.Option>
        </Select>
    );
};

const postfixTest =
    (postfix, editable = false) =>
    async () => {
        const user = userEvent.setup();

        const fn1 = jest.fn();
        const fn2 = jest.fn();

        const onFocus = (e) => {
            fn1();
        };

        const onBlur = (e) => {
            fn2();
        };

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, getByTestId, queryByRole } = render(
            <Select onFocus={onFocus} onBlur={onBlur} postfix={postfix} editable={editable}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = queryByRole('textbox') ?? getByRole('listbox');

        await act(async () => {
            await user.click(select);
        });

        expect(fn1).toHaveBeenCalledTimes(1);

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        const part = getByTestId('part');

        await act(async () => {
            await user.click(part);
        });

        expect(fn2).toHaveBeenCalledTimes(1);
    };

const focusOnTabTest =
    (editable = false) =>
    async () => {
        const user = userEvent.setup();

        const optionMessage1 = 'Значение 1';
        const optionMessage2 = 'Значение 2';
        const { queryAllByRole, getByText } = render(
            <>
                <Select editable={editable}>
                    <Select.Option>{optionMessage1}</Select.Option>
                </Select>
                <Select editable={editable}>
                    <Select.Option>{optionMessage2}</Select.Option>
                </Select>
            </>
        );

        const select = queryAllByRole(editable ? 'textbox' : 'listbox')[0];

        await act(async () => {
            await user.click(select);
        });

        const option1 = getByText(optionMessage1);
        expect(option1).toBeInTheDocument();

        await act(async () => {
            await user.tab();
        });

        const option2 = getByText(optionMessage2);

        expect(option1).not.toBeInTheDocument();
        expect(option2).toBeInTheDocument();

        await act(async () => {
            await user.tab({ shift: true });
        });

        expect(option2).not.toBeInTheDocument();
    };

describe('Select', () => {
    it('dropdown on click', async () => {
        const user = userEvent.setup();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText } = render(
            <Select>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(select);
        });

        expect(option).not.toBeInTheDocument();
    });

    it('onSelect', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const onSelect = ({ value }) => fn(value);
        const optionMessage = 'Значение 1';

        const { getByRole, getByText, getByTestId } = render(
            <Select onSelect={onSelect}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);

        await act(async () => {
            await user.click(option);
        });

        expect(fn).toHaveBeenLastCalledWith(optionMessage);
        expect(fn).toHaveBeenCalledTimes(1);
        expect(option).not.toBeInTheDocument();
    });

    it('onFocus/onBlur', async () => {
        const user = userEvent.setup();

        const fn1 = jest.fn();
        const fn2 = jest.fn();

        const onFocus = () => {
            fn1();
        };

        const onBlur = () => {
            fn2();
        };

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, getByTestId } = render(
            <Select onFocus={onFocus} onBlur={onBlur}>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);
        expect(fn1).toHaveBeenCalledTimes(1);

        await act(async () => {
            await user.click(option);
        });

        expect(fn2).toHaveBeenCalledTimes(1);
        expect(option).not.toBeInTheDocument();
    });

    it('forced focus/blur', async () => {
        const user = userEvent.setup();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, getByTestId } = render(<WithForcedFocusBlur optionMessage={optionMessage} />);

        const buttonFocus = getByTestId('button-focus');
        const buttonBlur = getByTestId('button-blur');

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(buttonFocus);
        });

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(buttonBlur);
        });

        expect(option).not.toBeInTheDocument();
    });

    it('clearButton', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, queryByText } = render(
            <ClearButtonSelect cb={fn} optionMessage={optionMessage} />
        );

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);

        await act(async () => {
            await user.click(option);
        });

        const clear = getByRole('button');

        await act(async () => {
            await user.click(clear);
        });

        const undefinedValue = queryByText('undefined');

        expect(fn).toHaveBeenCalledWith(undefined);
        expect(option).not.toBeInTheDocument();
        expect(undefinedValue).toBe(null);
    });

    it('custom postfix single', postfixTest({ up: <ViolinIcon /> }));

    it('custom postfix', postfixTest({ up: <ViolinIcon />, down: <BustIcon /> }));

    it('focus on tab', focusOnTabTest());
});

const templateOptions = [
    { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
    { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
    { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
    {
        value: 'Значение 4',
        sub: 'Дополнение 4',
        type: 'icon',
        icon: <ViolinIcon />,
    },
    {
        value: 'Значение 5',
        sub: 'Дополнение 5',
        type: 'icon',
        icon: <BustIcon />,
    },
    {
        value: 'Значение 6',
        sub: 'Дополнение 6',
        type: 'custom',
        disabled: true,
    },
    { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
];

const EditableSelectWithTemplate: React.FC<{
    placeholderMessage: string;
    optionMessage: string;
    cb: (value: string) => void;
}> = ({ placeholderMessage, optionMessage, cb }) => {
    const [value, setValue] = useState<{
        value: string;
        sub: string;
        type: string;
        icon?: React.ReactNode;
        disabled?: boolean;
    }>();
    const [options, setOptions] = useState(templateOptions);

    const handleSelect = ({ value: data }) => setValue(data);

    const changeHandler = ({ value }) => {
        setOptions(
            templateOptions.filter((i) => {
                const val = value.toString().toLowerCase();

                return i.value.toString().toLowerCase().includes(val) || i.sub.toString().toLowerCase().includes(val);
            })
        );
        cb(value);
    };

    return (
        <Select
            onChange={changeHandler}
            onSelect={handleSelect}
            editable
            placeholder={placeholderMessage}
            templateValue={
                value ? (
                    <Template>
                        <div>{value.value}</div>
                        <div>{value.sub}</div>
                    </Template>
                ) : undefined
            }>
            {options.map((i, index) => (
                <Select.Option disabled={i.disabled} value={i} key={index}>
                    {i.type === 'custom' && <CustomItem value={i.value} sub={i.sub} />}
                    {i.type === 'icon' && <CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />}
                    {i.type === 'default' && i.value}
                </Select.Option>
            ))}
        </Select>
    );
};

describe('Editable Select', () => {
    it('dropdown on click', async () => {
        const user = userEvent.setup();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText } = render(
            <Select editable>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('textbox');

        await act(async () => {
            await userEvent.click(select);
        });

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(document.body);
        });

        expect(option).not.toBeInTheDocument();
    });

    it('onSelect', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const onSelect = ({ value }) => {
            fn(value);
        };

        const optionMessage = 'Значение 1';

        const { getByRole, getByText } = render(
            <Select onSelect={onSelect} editable>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('textbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);

        await act(async () => {
            await user.click(option);
        });

        expect(fn).toHaveBeenLastCalledWith(optionMessage);
        expect(fn).toHaveBeenCalledTimes(1);
        expect(option).not.toBeInTheDocument();
    });

    it('onFocus/onBlur', async () => {
        const user = userEvent.setup();

        const fn1 = jest.fn();
        const fn2 = jest.fn();

        const onFocus = () => {
            fn1();
        };

        const onBlur = () => {
            fn2();
        };

        const optionMessage = 'Значение 1';

        const { getByRole, getByText } = render(
            <Select onFocus={onFocus} onBlur={onBlur} editable>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const select = getByRole('textbox');

        await act(async () => {
            await user.click(select);
        });

        const option = getByText(optionMessage);
        expect(fn1).toHaveBeenCalledTimes(1);

        await act(async () => {
            await user.click(option);
        });

        expect(fn2).toHaveBeenCalledTimes(1);
        expect(option).not.toBeInTheDocument();
    });

    it('onChange', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage = 'Значение 1';

        const { getByRole } = render(
            <Select onChange={({ value }) => fn(value)} editable>
                <Select.Option>{optionMessage}</Select.Option>
                <Select.Option>Значение 2</Select.Option>
            </Select>
        );

        const input = getByRole('textbox') as HTMLInputElement;

        await act(async () => {
            await user.click(input);
            await user.type(input, 'Зна');
        });

        expect(fn).toHaveBeenCalledTimes(3);
        expect(fn).toHaveBeenLastCalledWith('Зна');
        expect(input.placeholder).toBe('');

        await act(async () => {
            await user.keyboard('{backspace}');
            await user.keyboard('{backspace}');
            await user.keyboard('{backspace}');
        });

        expect(fn).toHaveBeenCalledTimes(6);
        expect(fn).toHaveBeenLastCalledWith('');
    });

    it('templateValue', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage = 'Значение 1';
        const subMessage = 'Дополнение 1';
        const placeholderMessage = 'Введите значение';

        const { getByRole, getByText } = render(
            <EditableSelectWithTemplate optionMessage={optionMessage} placeholderMessage={placeholderMessage} cb={fn} />
        );

        const input = getByRole('textbox') as HTMLInputElement;

        await act(async () => {
            await user.click(input);
            await user.type(input, 'Зна');
        });

        expect(input.placeholder).toBe(placeholderMessage);
        expect(input.value).not.toBe('undefined');

        expect(fn).toHaveBeenCalledTimes(3);
        expect(fn).toHaveBeenLastCalledWith('Зна');

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(option);
        });

        expect(input.placeholder).toBe('');
        expect(option).not.toBeInTheDocument();

        const sub = getByText(subMessage);
        expect(sub).toBeInTheDocument();
        expect(input.value).not.toBe('undefined');
    });

    it('forced focus/blur', async () => {
        const user = userEvent.setup();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, getByTestId } = render(
            <WithForcedFocusBlur editable optionMessage={optionMessage} />
        );

        const buttonFocus = getByTestId('button-focus');
        const buttonBlur = getByTestId('button-blur');

        const select = getByRole('listbox');

        await act(async () => {
            await user.click(buttonFocus);
        });

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(buttonBlur);
        });

        expect(option).not.toBeInTheDocument();
    });

    it('clearButton', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage = 'Значение 1';

        const { getByRole, getByText, queryByText } = render(
            <ClearButtonSelect cb={fn} optionMessage={optionMessage} editable />
        );

        const input = getByRole('textbox') as HTMLInputElement;

        await act(async () => {
            await user.click(input);
        });

        const option = getByText(optionMessage);
        expect(option).toBeInTheDocument();

        await act(async () => {
            await user.click(option);
        });

        const clear = getByRole('button');

        await act(async () => {
            await user.click(clear);
        });

        const undefinedValue = queryByText('undefined');

        expect(fn).toHaveBeenCalledWith(undefined);
        expect(option).not.toBeInTheDocument();
        expect(undefinedValue).toBe(null);
    });

    it('custom postfix single', postfixTest({ up: <ViolinIcon /> }, true));

    it('custom postfix', postfixTest({ up: <ViolinIcon />, down: <BustIcon /> }, true));

    it('focus on tab', focusOnTabTest(true));

    it('valueToString update', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage = 'Значение 1';

        const TestComp = () => {
            const [options, setOptions] = React.useState<string[]>([]);

            React.useEffect(() => {
                setTimeout(() => setOptions([optionMessage]), 1000);
            }, []);

            return (
                <Select
                    value={optionMessage}
                    valueToString={(val) => {
                        const vts = options.find((o) => o === val);

                        return vts ? `${vts}_` : '';
                    }}
                    onChange={(_, data) => fn(data?.value)}
                    editable>
                    {options.map((o) => (
                        <Select.Option key={o}>{o}</Select.Option>
                    ))}
                </Select>
            );
        };

        const { getByRole } = render(<TestComp />);

        const input = getByRole('textbox') as HTMLInputElement;

        expect(input.value).toBe('');

        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 1200);
            });
        });

        expect(input.value).toBe(optionMessage + '_');
    });
});
