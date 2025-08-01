import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { BustIcon as Bust, TheaterOutIcon as TheaterOut, ToPayIcon as ToPay, ViolinIcon as Violin } from 'vienna.icons';
import { Select, SelectProps } from './Select';
import { Groups } from '../Groups';
import { Button } from '../Button';
import { CustomItem, CustomItemWithIcon, Template } from './helpers';
import { SelectServiceType } from '../Utils';
import { Modal } from '@/Modal';
import { Input } from '@/Input';

export default {
    title: 'Development/Select',
    component: Select,
    parameters: {
        docs: {
            source: {
                type: 'code',
            },
        },
    },
} as Meta;

type SelectOnChange<T> = NonNullable<SelectProps<T>['onChange']>;
type SelectOnSelect<T> = NonNullable<SelectProps<T>['onSelect']>;
type ValueType = string | undefined;

export const Overview: Story<SelectProps<ValueType>> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>('');
    const options = ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5'];
    const handleFocus = (event: React.FocusEvent) => {
        console.log('focus', event);
    };
    const handleBlur = (event: React.FocusEvent) => {
        console.log('blur', event);
    };
    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            options={options}
            onSelect={({ value: data }) => setValue(data)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...args}
        />
    );
};

export const InfiniteListPromise: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);
    const getOptions = async (options: ValueType[]) => {
        if (options.length) {
            return Promise.resolve(options.concat([`Значение ${options.length + 1}`]));
        }

        return Promise.resolve(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6']);
    };

    return (
        <Select
            fixed
            placeholder='Выберите значение'
            value={value}
            options={getOptions}
            maxListHeight={150}
            onSelect={handleSelect}
            {...args}
        />
    );
};
InfiniteListPromise.storyName = 'Бесконечный список';

export const OptionIcon: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);
    return (
        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect} {...args} name='OptionIcon'>
            <Select.Option icon={<TheaterOut />}>Значение 1</Select.Option>
            <Select.Option icon={<Violin />}>Значение 2</Select.Option>
            <Select.Option icon={<Bust />}>Значение 3</Select.Option>
            <Select.Option icon={<ToPay />}>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};
OptionIcon.storyName = 'Иконка выделенного компонента списка';

export const SetFocus: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = React.useState<ValueType>();
    const [options] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
    const handleSelect: SelectOnSelect<ValueType> = ({ value }) => setValue(value);

    const controlsRef = React.useRef<SelectServiceType | null>(null);
    const focus = () => controlsRef.current?.focus();
    const blur = () => controlsRef.current?.blur();

    return (
        <>
            <Groups>
                <Button design='accent' onClick={focus}>
                    Focus
                </Button>
                <Button design='primary' onClick={blur}>
                    Blur
                </Button>
            </Groups>
            <hr />
            <Groups design='vertical'>
                <Select
                    controlsRef={controlsRef}
                    fixed
                    maxListHeight={150}
                    placeholder='Выберите значение'
                    options={options}
                    value={value}
                    onSelect={handleSelect}
                    {...args}
                />
            </Groups>
        </>
    );
};
SetFocus.storyName = 'Программная установка и снятие фокуса';

export const Interactive: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = React.useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value }) => setValue(value);
    const select = React.useRef<any>(null);

    return (
        <Select
            ref={select}
            placeholder='Выберите значение'
            value={value}
            fixed
            maxListHeight={150}
            onSelect={handleSelect}
            {...args}>
            <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                <Button design='accent' size='xs' onClick={(e) => console.log('Кнопка 1')}>
                    Кнопка 1
                </Button>
            </Groups>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
            <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                <Button design='accent' size='xs' onClick={(e) => console.log('Кнопка 2')}>
                    Кнопка 2
                </Button>
            </Groups>
        </Select>
    );
};
Interactive.storyName = 'Интерактивный элемент списка';

export const WithAdaptive: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);

    return (
        <Select
            size={{ s: 'xs', m: 'xl' }}
            fixed
            placeholder='Выберите значение'
            value={value}
            onSelect={handleSelect}
            {...args}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};

WithAdaptive.storyName = 'С адаптивным размером';

export const Editable: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = React.useState<ValueType>();
    const [options, setOptions] = React.useState([
        'Значение 1',
        'Значение 2',
        'Значение 3',
        'Значение 4',
        'Значение 5',
        'Данные 1',
        'Данные 2',
        'Данные 3',
        'Данные 4',
        'Данные 5',
    ]);
    const handleSelect: SelectOnSelect<ValueType> = ({ value }) => setValue(value);
    const changeHandler = React.useCallback<SelectOnChange<ValueType>>(({ value }) => {
        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5',
        ];
        setOptions([...mock.filter((i) => i.includes(value))]);
    }, []);
    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            editable
            onFocus={() => console.log('focus')}
            onBlur={() => console.log('blur')}
            onChange={changeHandler}
            options={options}
            onSelect={handleSelect}
            {...args}
        />
    );
};

Editable.storyName = 'Редактируемый список';

const templateOptions = [
    { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
    { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
    { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
    {
        value: 'Значение 4',
        sub: 'Дополнение 4',
        type: 'icon',
        icon: <Violin />,
    },
    {
        value: 'Значение 5',
        sub: 'Дополнение 5',
        type: 'icon',
        icon: <Bust />,
    },
    {
        value: 'Значение 6',
        sub: 'Дополнение 6',
        type: 'custom',
        disabled: true,
    },
    { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
];

interface TemplatedValue {
    value: string;
    sub: string;
    type: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export const EditableWithTemplateValue: Story<SelectProps<TemplatedValue | undefined>> = (
    args: SelectProps<TemplatedValue | undefined>
) => {
    const [value, setValue] = React.useState<TemplatedValue | undefined>();
    const [options, setOptions] = React.useState(templateOptions);
    const handleSelect = ({ value }: { value?: TemplatedValue }) => setValue(value);
    const changeHandler: SelectOnChange<TemplatedValue | undefined> = ({ value }) => {
        setOptions(
            templateOptions.filter((i) => {
                const val = value.toString().toLowerCase();

                return i.value.toString().toLowerCase().includes(val) || i.sub.toString().toLowerCase().includes(val);
            })
        );
    };
    return (
        <Select
            valueToString={(item) => (item ? item.value : '')}
            editable
            placeholder='Выберите значение'
            value={value}
            templateValue={
                value && (
                    <Template>
                        <div>{value.value}</div>
                        <div>{value.sub}</div>
                    </Template>
                )
            }
            onSelect={handleSelect}
            onChange={changeHandler}
            {...args}>
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

EditableWithTemplateValue.storyName = 'Редактируемый список c templateValue';

export const PlaywrightWithCases: Story<SelectProps<ValueType>> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);
    const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] satisfies SelectProps<ValueType>['size'][];
    return (
        <>
            {sizes.map((size) => {
                return (
                    <Select
                        key={size}
                        size={size}
                        fixed
                        placeholder='Выберите значение'
                        value={value}
                        onSelect={handleSelect}
                        {...args}>
                        <Select.Option size='l' icon={<TheaterOut />}>
                            Значение 1
                        </Select.Option>
                        <Select.Option size='m' icon={<Violin />}>
                            Значение 2
                        </Select.Option>
                        <Select.Option size='s'>Значение 3</Select.Option>
                        <Select.Option icon={<ToPay />}>Значение 4</Select.Option>
                        <Select.Option>Значение 5</Select.Option>
                    </Select>
                );
            })}
        </>
    );
};
PlaywrightWithCases.storyName = 'Для тестирования';

export const SelectorWithClearButton: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);
    return (
        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect} clearButton {...args}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};

SelectorWithClearButton.storyName = 'С кнопкой очистки значения';

export const LongLastOption: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = React.useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value }) => setValue(value);
    return (
        <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
            <Select.Option>Значение 6</Select.Option>
            <Select.Option>Значение 7</Select.Option>
            <Select.Option>Значение 8</Select.Option>
            <Select.Option>Значение 9</Select.Option>
            <Select.Option>Значение 10</Select.Option>
            <Select.Option>Значение 11</Select.Option>
            <Select.Option>Значение 12</Select.Option>
            <Select.Option>Значение 13</Select.Option>
            <Select.Option wrapLine>
                Значение 14 Значение 14 Значение 14 Значение 14 Значение 14 Значение 14 Значение 14 Значение 14 Значение
                14 Значение 14
            </Select.Option>
        </Select>
    );
};

export const ProgramClearValue: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = React.useState<ValueType>();
    const [options, setOptions] = React.useState([
        'Значение 1',
        'Значение 2',
        'Значение 3',
        'Значение 4',
        'Значение 5',
        'Данные 1',
        'Данные 2',
        'Данные 3',
        'Данные 4',
        'Данные 5',
    ]);

    const handleSelect = ({ value }: { value: ValueType }) => {
        setValue((prev) => {
            const newValue = prev === value ? undefined : value;

            console.log('select', newValue);

            return newValue;
        });
    };

    const changeHandler = React.useCallback<SelectOnChange<ValueType>>(({ value }) => {
        console.log('change', value);

        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5',
        ];
        setOptions([...mock.filter((i) => i.includes(value))]);
    }, []);
    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            editable
            onFocus={() => console.log('focus')}
            onBlur={() => console.log('blur')}
            onChange={changeHandler}
            options={options}
            onSelect={handleSelect}
            {...args}
        />
    );
};

const vtsMock = [
    { value: 1, label: 'test1' },
    { value: 2, label: 'test2' },
];

export const VTSUpdate = () => {
    const [options, setOptions] = useState<{ value: number; label: string }[]>([]);

    React.useEffect(() => {
        setTimeout(() => {
            setOptions(vtsMock);
        }, 2000);
    }, []);

    const changeHandler = React.useCallback<SelectOnChange<ValueType>>(({ value }) => {
        setOptions([...vtsMock.filter((i) => i.label.includes(value))]);
    }, []);

    return (
        <Select
            value={1}
            valueToString={(value) => options?.find((option) => option.value === value)?.label ?? ''}
            onChange={changeHandler}
            editable>
            {options?.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                    {option.label}
                </Select.Option>
            ))}
        </Select>
    );
};

export const WithCallbackFuncProp: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value: data }) => setValue(data);
    const handleFocus = (event: React.FocusEvent) => {
        console.log('focus', event);
    };
    const handleBlur = (event: React.FocusEvent) => {
        console.log('blur', event);
    };
    const addLogic = () => {
        console.log('do some logic here');
    };

    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            onSelect={handleSelect}
            onFocus={handleFocus}
            onBlur={handleBlur}
            clearButton
            onClear={addLogic}
            {...args}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};

export const ViewOnly: Story<SelectProps> = (args) => {
    return <Select viewOnly placeholder='Выберите значение' value={'Значение 1'} options={[]} />;
};

export const WithAddButton: Story<SelectProps<ValueType>> = (args: SelectProps<ValueType>) => {
    interface OptionType {
        id: number;
        label: string;
    }
    const [options, setOptions] = React.useState<OptionType[]>([
        {
            id: 1,
            label: 'Значение 1',
        },
        {
            id: 2,
            label: 'Значение 2',
        },
        {
            id: 3,
            label: 'Значение 3',
        },
        {
            id: 4,
            label: 'Значение 4',
        },
    ]);
    const [value, setValue] = React.useState<OptionType>();
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleSelect: SelectOnSelect<OptionType> = ({ value }) => setValue(value);
    const handleAddButtonClick = () => {
        setIsOpen(true);
    };
    const handleSubmit: React.FormEventHandler = (e) => {
        e.preventDefault();
        const newOption = { id: Date.now(), label: inputValue };
        setOptions((prev) => [...prev, newOption]);
        setIsOpen(false);
        setInputValue('');
        setValue(newOption);
    };
    return (
        <div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onAfterOpen={() => inputRef.current?.focus()}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Добавить опцию</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <Groups design={'vertical'}>
                                <Input
                                    ref={inputRef}
                                    placeholder={'Новое значение'}
                                    value={inputValue}
                                    required
                                    onChange={({ value }) => setInputValue(value)}
                                />
                                <Button type={'submit'} size='l' design='outline'>
                                    Сохранить
                                </Button>
                            </Groups>
                        </form>
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
            <Select
                options={options}
                value={value}
                name={'add-button'}
                placeholder={'Выберите значение'}
                showAddButton
                valueToString={(opt) => opt.label}
                compare={(opt) => String(opt.id)}
                onSelect={handleSelect}
                addButtonOnClick={handleAddButtonClick}
            />
        </div>
    );
};

export const WithPlaceholder: Story<SelectProps> = (args: SelectProps<ValueType>) => {
    const [value, setValue] = useState<ValueType>();
    const handleSelect: SelectOnSelect<ValueType> = ({ value }) => setValue(value);
    const handleFocus = (event: React.FocusEvent) => {
        console.log('focus', event);
    };
    const handleBlur = (event: React.FocusEvent) => {
        console.log('blur', event);
    };

    const item = '';
    const zero = 0;
    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            onSelect={handleSelect}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...args}>
            <Select.Option>{item}</Select.Option>
            <Select.Option>{zero}</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};
