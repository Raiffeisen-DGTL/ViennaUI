import React, { useState, useCallback, useEffect } from 'react';
import { Story, Meta } from 'storybook';
import { Bust, TheaterOut, ToPay, Violin } from 'vienna.icons';
import { Select, SelectProps } from './Select';
import { Groups } from '../Groups';
import { Button } from '../Button';

export default {
    title: 'Development/Select',
    component: Select,
} as Meta;

const cleanArgs = (args) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { postfix, onSelect, maxListHeight, ...newArgs } = args;
    return newArgs;
};

export const Overview: Story<SelectProps> = (args) => {
    const [value, setValue] = useState('');
    const handleSelect = (e, data) => setValue(data.value);
    return (
        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect} {...cleanArgs(args)}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};

export const InfiniteListPromise: Story<SelectProps> = (args) => {
    const [value, setValue] = useState();
    const handleSelect = (e, data) => setValue(data.value);
    const getOptions = async (options) => {
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
            {...cleanArgs(args)}
        />
    );
};
InfiniteListPromise.storyName = 'Бесконечный список';

export const OptionIcon: Story<SelectProps> = (args) => {
    const [value, setValue] = useState();
    const handleSelect = (e, data) => setValue(data.value);
    return (
        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect} {...cleanArgs(args)}>
            <Select.Option icon={<TheaterOut />}>Значение 1</Select.Option>
            <Select.Option icon={<Violin />}>Значение 2</Select.Option>
            <Select.Option icon={<Bust />}>Значение 3</Select.Option>
            <Select.Option icon={<ToPay />}>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};
OptionIcon.storyName = 'Иконка выделенного компонента списка';

export const SetFocus: Story<SelectProps> = (args) => {
    const [value, setValue] = React.useState();
    const [options] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
    const select = React.useRef<HTMLDivElement>(null);
    const handleSelect = useCallback((e, data) => setValue(data.value), []);
    const focus = useCallback(() => select.current && select.current.focus(), [select]);
    const blur = useCallback(() => select.current && select.current.blur(), [select]);
    const buttonRef = React.useRef<any>(null);

    useEffect(() => {
        buttonRef.current.click();
    }, [buttonRef]);

    return (
        <>
            <Groups>
                <Button design='accent' onClick={focus} forwardedRef={buttonRef}>
                    Focus
                </Button>
                <Button design='primary' onClick={blur}>
                    Blur
                </Button>
            </Groups>
            <hr />
            <Groups design='vertical'>
                <Select
                    fixed
                    maxListHeight={150}
                    ref={select}
                    placeholder='Выберите значение'
                    options={options}
                    value={value}
                    onSelect={handleSelect}
                    {...cleanArgs(args)}
                />
            </Groups>
        </>
    );
};
SetFocus.storyName = 'Программная установка и снятие фокуса';

export const Interactive: Story<SelectProps> = (args) => {
    const [value, setValue] = React.useState();
    const handleSelect = (e, data) => setValue(data.value);
    const select = React.useRef<any>(null);

    return (
        <Select
            ref={select}
            placeholder='Выберите значение'
            value={value}
            fixed
            maxListHeight={150}
            onSelect={handleSelect}
            {...cleanArgs(args)}>
            <Groups alignItems='center' height='full' justifyContent='center'>
                <Button design='accent' size='xs'>
                    Кнопка
                </Button>
            </Groups>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
            <Groups alignItems='center' height='full' justifyContent='center'>
                <Button design='accent' size='xs'>
                    Кнопка
                </Button>
            </Groups>
        </Select>
    );
};
Interactive.storyName = 'Интерактивный элемент списка';

export const WithAdaptive: Story<SelectProps> = (args) => {
    const [value, setValue] = useState();
    const handleSelect = (e, data) => setValue(data.value);
    return (
        <Select
            size={{ s: 'xs', m: 'xl' }}
            fixed
            placeholder='Выберите значение'
            value={value}
            onSelect={handleSelect}
            {...cleanArgs(args)}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
};

WithAdaptive.storyName = 'С адаптивным размером';

export const Editable: Story<SelectProps> = (args) => {
    const [value, setValue] = React.useState();
    const [options, setOptions] = React.useState([]);
    const handleSelect = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    const changeHandler = React.useCallback((e, data) => {
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
        setOptions([...mock.filter((i) => i.startsWith(data.value))]);
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
        />
    );
};

Editable.storyName = 'Редактируемый список';

export const PlaywrightWithCases: Story<SelectProps> = (args) => {
    const [value, setValue] = useState();
    const handleSelect = (e, data) => setValue(data.value);
    const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
    return (
        <>
            {sizes.map((size) => {
                return (
                    <Select
                        size={size}
                        fixed
                        placeholder='Выберите значение'
                        value={value}
                        onSelect={handleSelect}
                        {...cleanArgs(args)}>
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
