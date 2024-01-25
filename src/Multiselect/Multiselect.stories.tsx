import React from 'react';
import { Story, Meta } from 'storybook';
import { InputSlider } from '..';
import { Multiselect, MultiselectProps } from './Multiselect';
import { Groups } from '../Groups';
import { FormField } from '../FormField';
import { Button } from '../Button';

export default {
    title: 'Development/Multiselect',
    component: Multiselect,
} as Meta;

export const Overview: Story<MultiselectProps> = (args) => {
    const [state, setValue] = React.useState<{ values: string[] }>({ values: ['Значение 1', 'Значение еще больше 3'] });
    const handleSelect = (e, data) => {
        const index = state.values.indexOf(data.value);
        if (index >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete state.values[index];
            setValue({ values: [...state.values.filter((val) => val !== undefined)] });
        } else {
            setValue({ values: [...state.values, data.value] });
        }
    };

    return (
        <Groups design='vertical' style={{ width: '250px' }}>
            <Multiselect
                fixed
                placeholder='Выберите значение'
                values={[...state.values]}
                onSelect={handleSelect}
                {...args}>
                <Multiselect.Option disabled>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                <Multiselect.Option>Знач. 4</Multiselect.Option>
                <Multiselect.Option>Значение 5</Multiselect.Option>
            </Multiselect>
        </Groups>
    );
};
export const SetFocus: Story<MultiselectProps> = () => {
    const [values, setValues] = React.useState<any[]>([]);
    const select = React.useRef<HTMLDivElement>(null);
    const handleSelect = React.useCallback(
        (e, data) => {
            const index = values.findIndex((val) => val.value === data.value.value);
            if (index >= 0) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete values[index];
                setValues([...values.filter((val) => val !== undefined)]);
            } else {
                setValues([...values, data.value]);
            }
        },
        [values]
    );
    const focus = React.useCallback(() => select.current && select.current?.focus(), [select]);
    const blur = React.useCallback(() => select.current && select.current?.blur(), [select]);
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
                <Multiselect fixed ref={select} placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                    <Multiselect.Option value={{ value: 'Значение 1' }} />
                    <Multiselect.Option value={{ value: 'Значение большое 2' }} />
                    <Multiselect.Option value={{ value: 'Значение еще больше 3' }} />
                    <Multiselect.Option value={{ value: 'Знач. 4' }} />
                    <Multiselect.Option value={{ value: 'Значение 5' }} />
                </Multiselect>
            </Groups>
        </>
    );
};
SetFocus.storyName = 'Программная установка и снятие фокуса';
export const InfiniteList: Story<MultiselectProps> = (args) => {
    const [values, setValues] = React.useState<string[]>([]);
    const handleSelect = React.useCallback(
        (e, data) => {
            const index = values.indexOf(data.value);
            if (index >= 0) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                delete values[index];
                setValues([...values.filter((val) => val !== undefined)]);
            } else {
                setValues([...values, data.value]);
            }
        },
        [values]
    );
    const getOptions = React.useCallback((options) => {
        if (options.length) {
            return options.concat([`Значение ${options.length + 1}`]);
        }

        return ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'];
    }, []);
    return (
        <Groups design='vertical'>
            <Multiselect
                fixed
                placeholder='Выберите значение'
                options={getOptions}
                values={values}
                design='material'
                maxListHeight={150}
                onSelect={handleSelect}
                {...args}
            />
        </Groups>
    );
};
InfiniteList.storyName = 'Бесконечный список';
export const Interactive: Story<MultiselectProps> = (args) => {
    const [state, setValue] = React.useState<{ values: string[] }>({ values: [] });
    const [visibleItems, setVisibleItems] = React.useState(1);
    const handleSelect = (e, data) => {
        const index = state.values?.indexOf(data.value);
        if (index >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete state.values[index];
            setValue({ values: [...state.values.filter((val) => val !== undefined)] });
        } else {
            setValue({ values: [...state.values, data.value] });
        }
    };
    const checkAll = () =>
        setValue({
            values: ['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5'],
        });
    const uncheckAll = () => setValue({ values: [] });
    return (
        <Groups design='vertical'>
            <FormField>
                <FormField.Label>Число одновременно показываемых значений, не спрятанных за "Еще"</FormField.Label>
                <FormField.Content>
                    <InputSlider
                        max={5}
                        min={0}
                        value={visibleItems}
                        // @ts-ignore
                        onChange={(e, data) => setVisibleItems(data.value)}
                    />
                </FormField.Content>
            </FormField>
            <Multiselect
                fixed
                placeholder='Выберите значение'
                minViewItems={visibleItems}
                values={[...state.values]}
                onSelect={handleSelect}
                {...args}>
                <div style={{ height: '44px' }}>
                    <Groups alignItems='center' height='full' justifyContent='center'>
                        <Button design='accent' size='xs' onClick={checkAll}>
                            Выбрать все
                        </Button>
                        <Button size='xs' onClick={uncheckAll}>
                            Очистить
                        </Button>
                    </Groups>
                </div>
                <Multiselect.Option>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                <Multiselect.Option>Знач. 4</Multiselect.Option>
                <Multiselect.Option>Значение 5</Multiselect.Option>
            </Multiselect>
        </Groups>
    );
};
Interactive.storyName = 'Интерактивный список';

export const PlaywrightWithCases: Story<MultiselectProps> = (args) => {
    const [state, setValue] = React.useState<{ values: string[] }>({ values: ['Значение 1', 'Значение еще больше 3'] });
    const handleSelect = (e, data) => {
        const index = state.values.indexOf(data.value);
        if (index >= 0) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete state.values[index];
            setValue({ values: [...state.values.filter((val) => val !== undefined)] });
        } else {
            setValue({ values: [...state.values, data.value] });
        }
    };

    const sizes = ['xs', 's', 'm', 'xl', 'xxl'];
    return (
        <>
            {sizes.map((size) => {
                return (
                    <Multiselect
                        fixed
                        size={size}
                        placeholder='Выберите значение'
                        values={[...state.values]}
                        onSelect={handleSelect}
                        {...args}>
                        <Multiselect.Option disabled>Значение 1</Multiselect.Option>
                        <Multiselect.Option>Значение большое 2</Multiselect.Option>
                        <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                        <Multiselect.Option>Знач. 4</Multiselect.Option>
                        <Multiselect.Option>Значение 5</Multiselect.Option>
                    </Multiselect>
                );
            })}
            <Multiselect
                fixed
                invalid
                placeholder='Выберите значение'
                values={[...state.values]}
                onSelect={handleSelect}
                {...args}>
                <Multiselect.Option disabled>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                <Multiselect.Option>Знач. 4</Multiselect.Option>
                <Multiselect.Option>Значение 5</Multiselect.Option>
            </Multiselect>
            <Multiselect data-testid='click-me-multiselect' placeholder='Click me' onSelect={handleSelect} {...args}>
                <Multiselect.Option disabled>Значение 1</Multiselect.Option>
                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                <Multiselect.Option>Знач. 4</Multiselect.Option>
                <Multiselect.Option>Значение 5</Multiselect.Option>
            </Multiselect>
        </>
    );
};
PlaywrightWithCases.storyName = 'Для тестирования';
