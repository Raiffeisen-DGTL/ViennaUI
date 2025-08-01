# Multiselect

Компонент предназначен для выбора нескольких элементов из выпадающего списка.

## Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| onChange | (InputEvent<FormEvent<HTMLInputElement>> & ((value: unknown) => void)) \| undefined |  |
| design | "outline" \| "material" \| undefined |  | Дизайн |
| prefix | ReactNode |  | Значанеие отображаемое перед компонентом |
| onFocus | MultiselectEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |
| onBlur | MultiselectEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при потере фокуса компонентом |
| onKeyDown | MultiselectEvent<KeyboardEventHandler<HTMLInputElement>> \| undefined |  | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | KeyboardEventHandler \| undefined |  | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onKeyUp | KeyboardEventHandler \| undefined |  | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onMouseDown | Function \| undefined |  | Обработчик события первого полупериода клика |
| onPointerDown | Function \| undefined |  | Обработчик события первого полупериода клика |
| size | ResponsiveProp<"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl", Breakpoints> \| undefined |  | Размеры |
| values | any[] \| undefined |
| defaultValue | string \| undefined |  |
| ref | Ref<HTMLInputElement>  \| undefined |  | Сcылка на нативный элемент input, доступна после отрисовки |
| invalid | boolean \| undefined |  |
| placeholderValueAutoDiff | boolean \| undefined |  |
| active | boolean \| undefined |  | Принудительный ховер |
| postfix | ReactNode |  | Значение отображаемое после компонента |
| smartPlaceholder | ReactNode |  |
| onDespose | (() => void) \| undefined |  |
| onUpdated | (() => void) \| undefined |  |
| onComplete | ((value: string, maskRef: InputMask<FactoryOpts>, e?: InputEvent \| undefined) => void) \| undefined |  |
| maskOptions | FactoryOpts |
| options | any[] \| CallbackFunc \| undefined |  |
| maxListHeight | number \| undefined |  |
| maxListWidth | number \| undefined |  |
| openWhenFocus | boolean \| undefined |  |
| onScroll | MultiselectScrollEvent<FormEvent<HTMLInputElement>> \| undefined |  |
| onSelect | MultiselectScrollEvent<FormEvent<HTMLInputElement>> \| undefined |  |
| fitOptions | boolean \| undefined  |
| valueToString | ((item: any) => string)\| undefined |  |
| compare | ((item: any) => any )\| undefined |  |
| minViewItems | number \| undefined |  |
| groupItems | boolean  \| undefined |  |
| fixed  | boolean  \| undefined  |
| ref | Ref<HTMLDivElement> \| undefined  |
| align | 'top' \| 'bottom' \| 'auto' \| undefined |  |
| localization | Localization<MultiselectLocalizationMap, MultiselectLocalizationCotext> \| undefined  |



## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| className | string \| undefined | |
| tabIndex | number \| undefined | |
| name | string \| undefined | |
| placeholder | string \| undefined | |
| disabled | boolean \| undefined | |


```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const handleSelect = (e, data) => {
            const index = state.values.indexOf(data.value);
            if (index >= 0) {
                delete state.values[index];
                setValue({ values: [...state.values.filter((val) => val !== undefined)] });
            } else {
                setValue({ values: [...state.values, data.value] });
            }
        };
        return (
            <Groups design='vertical'>
                <Multiselect placeholder='Выберите значение' values={[...state.values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
            </Groups>
        );
    }}
```


## Использование

Размеры: `xs`, `s`, `m`, `l`, `xl` и `xxl`

Свойства дизайна размера и состояния идентичны компоненту `Select`.

Компонент полностью управляемый, по умолчанию работает с массивом строк или объектами у которых есть поле `value`.

Массив передается в свойство `options`, а выбранные элементы в `values`.

По умолчанию список раскрывается при фокусе, это можно отключить установив свойство `openWhenFocus` в значение `false`.

Открытие и закрытие списка происходит по клавишам `Enter` и `Esacape` соответственно.

## Простое применение (статическое)

```

    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.indexOf(data.value);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        return (
            <Groups design='vertical'>
                <Multiselect size='xs' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
                <Multiselect size='s' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
                <Multiselect size='m' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
                <Multiselect size='l' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
                <Multiselect size='xl' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
                <Multiselect size='xxl' placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
                    <Multiselect.Option>Значение 1</Multiselect.Option>
                    <Multiselect.Option>Значение большое 2</Multiselect.Option>
                    <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                    <Multiselect.Option>Знач. 4</Multiselect.Option>
                    <Multiselect.Option>Значение 5</Multiselect.Option>
                </Multiselect>
            </Groups>
        );
    }}
```


Значение как строка

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.indexOf(data.value);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        return (
            <Groups design='vertical'>
                <Multiselect placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                    <Multiselect.Option value='Значение 1' />
                    <Multiselect.Option value='Значение большое 2' />
                    <Multiselect.Option value='Значение еще больше 3' />
                    <Multiselect.Option value='Знач. 4' />
                    <Multiselect.Option value='Значение 5' />
                </Multiselect>
            </Groups>
        );
    }}
```

Значение как объект со свойством `value`

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.findIndex((val) => val.value === data.value.value);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        return (
            <Groups design='vertical'>
                <Multiselect placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                    <Multiselect.Option value={{ value: 'Значение 1' }} />
                    <Multiselect.Option value={{ value: 'Значение большое 2' }} />
                    <Multiselect.Option value={{ value: 'Значение еще больше 3' }} />
                    <Multiselect.Option value={{ value: 'Знач. 4' }} />
                    <Multiselect.Option value={{ value: 'Значение 5' }} />
                </Multiselect>
            </Groups>
        );
    }}
```

<ComponentHelpers.Select.Info>
    <WarningRing size='xl' />
    <div>
        По умолчанию компонент работает со строками или объектами в которых есть поле <span>value</span>, если
        стандартная ситуация невозможна то можно воспользоваться свойством <span>valueToString</span>, которое указывает
        по какому значению сравнивать и отображать, как выбранное
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback((e, data) => {
            const index = values.findIndex((val) => val.name === data.value.name);
            if (index >= 0) {
                delete values[index];
                setValues([...values.filter((val) => val !== undefined)]);
            } else {
                setValues([...values, data.value]);
            }
        }, [values]);
        return (
            <Groups design='vertical'>
                <Multiselect
                    placeholder='Выберите значение'
                    valueToString={(item) => item.name}
                    values={values}
                    onSelect={handleSelect}>
                    <Multiselect.Option value={{ name: 'Значение 1' }}>Значение 1 - сложное</Multiselect.Option>
                    <Multiselect.Option value={{ name: 'Значение большое 2' }}>Значение 2 - сложное</Multiselect.Option>
                    <Multiselect.Option value={{ name: 'Значение еще больше 3' }}>
                        Значение 3 - сложное
                    </Multiselect.Option>
                    <Multiselect.Option value={{ name: 'Знач. 4' }}>Значение 4 - сложное</Multiselect.Option>
                    <Multiselect.Option value={{ name: 'Значение 5' }}>Значение 5 - сложное</Multiselect.Option>
                </Multiselect>
            </Groups>
        );
    }}

```

## Простое применение (динамическое)

```
    {() => {
        const [options, setOptions] = React.useState([]);
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.indexOf(data.value);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        setTimeout(() => {
            setOptions(['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5']);
        }, 3000);
        return (
            <Groups design='vertical'>
                <Multiselect
                    placeholder='Выберите значение'
                    options={options}
                    values={values}
                    design='material'
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Функция сравнения

```
    {() => {
        const options = [
            { id: 0, value: 'Значение' },
            { id: 1, value: 'Значение' },
            { id: 2, value: 'Значение' },
            { id: 3, value: 'Значение' },
        ];
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.findIndex((val) => val.id === data.value.id);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        return (
            <Groups design='vertical'>
                <Multiselect
                    placeholder='Выберите значение'
                    options={options}
                    values={values}
                    compare={(item) => item.id}
                    design='material'
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Программная установка и снятие фокуса

```
    {() => {
        const [values, setValues] = React.useState([]);
        let select = React.useRef(null);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.findIndex((val) => val.value === data.value.value);
                if (index >= 0) {
                    delete values[index];
                    setValues([...values.filter((val) => val !== undefined)]);
                } else {
                    setValues([...values, data.value]);
                }
            },
            [values]
        );
        const focus = React.useCallback(() => select.current && select.current.focus(), [select]);
        const blur = React.useCallback(() => select.current && select.current.blur(), [select]);
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
                    <Multiselect ref={select} placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                        <Multiselect.Option value={{ value: 'Значение 1' }} />
                        <Multiselect.Option value={{ value: 'Значение большое 2' }} />
                        <Multiselect.Option value={{ value: 'Значение еще больше 3' }} />
                        <Multiselect.Option value={{ value: 'Знач. 4' }} />
                        <Multiselect.Option value={{ value: 'Значение 5' }} />
                    </Multiselect>
                </Groups>
            </>
        );
    }}
```

## Бесконечные списки

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = React.useCallback(
            (e, data) => {
                const index = values.indexOf(data.value);
                if (index >= 0) {
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
            } else {
                return ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'];
            }
        }, []);
        return (
            <Groups design='vertical'>
                <Multiselect
                    placeholder='Выберите значение'
                    options={getOptions}
                    values={values}
                    design='material'
                    maxListHeight={150}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Свойство fixed

```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const handleSelect = (e, data) => {
            const index = state.values.indexOf(data.value);
            if (index >= 0) {
                delete state.values[index];
                setValue({ values: [...state.values.filter((val) => val !== undefined)] });
            } else {
                setValue({ values: [...state.values, data.value] });
            }
        };
        return (
            <Groups design='vertical'>
                {' '}
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '350px',
                        height: '100px',
                        border: '1px solid',
                    }}>
                    <div style={{ width: '500px', height: '300px' }}>
                        <div style={{ position: 'absolute', left: 'calc(50% - 30px)', top: 'calc(50% - 20px)' }}>
                            <Multiselect
                                fixed
                                placeholder='Выберите значение'
                                values={[...state.values]}
                                onSelect={handleSelect}>
                                <Multiselect.Option>Значение 1</Multiselect.Option>
                                <Multiselect.Option>Значение большое 2</Multiselect.Option>
                                <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
                                <Multiselect.Option>Знач. 4</Multiselect.Option>
                                <Multiselect.Option>Значение 5</Multiselect.Option>
                            </Multiselect>
                        </div>
                    </div>
                </div>
            </Groups>
        );
    }}
```

## Интерактив

```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const [visibleItems, setVisibleItems] = React.useState(1);
        const handleSelect = (e, data) => {
            const index = state.values.indexOf(data.value);
            if (index >= 0) {
                delete state.values[index];
                setValue({ values: [...state.values.filter((val) => val !== undefined)] });
            } else {
                setValue({ values: [...state.values, data.value] });
            }
        };
        const checkAll = () => setValue({ values: ['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5'] });
        const uncheckAll = () => setValue({ values: [] });
        return (
            <Groups design='vertical'>
                 <FormField>
                    <FormField.Label>Число одновременно показываемых значений, не спрятанных за "Еще"</FormField.Label>
                    <FormField.Content>
                        <InputSlider max={5} min={0} onChange={(e, data) => setVisibleItems(data.value)} value={visibleItems}/>
                    </FormField.Content>
                </FormField>
                <Multiselect placeholder='Выберите значение' minViewItems={visibleItems} values={[...state.values]} onSelect={handleSelect}>
                    <div __nowrap__="true" style={{height: '44px'}}>
                        <Groups alignItems="center" height="full" justifyContent="center">
                            <Button design="accent" size='xs' onClick={checkAll}>Выбрать все</Button>
                            <Button size='xs' onClick={uncheckAll}>Очистить</Button>
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
    }}

```

## Локализация

Для того чтобы локализовать мультиселект, необходимо передать в `localization` функцию локализации

```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const handleSelect = (e, data) => {
            const index = state.values.indexOf(data.value);
            if (index >= 0) {
                delete state.values[index];
                setValue({ values: [...state.values.filter((val) => val !== undefined)] });
            } else {
                setValue({ values: [...state.values, data.value] });
            }
        };
        const customLocalization = (key, context) => {
            if (key === 'ds.multiselect.extra') {
                return `${context.count} more`;
            }
            return 'List is empty';
        };
        return (
            <Groups design='vertical' style={{ width: '200px'}}>
                <Multiselect placeholder='Choose option' values={[...state.values]} onSelect={handleSelect} localization={customLocalization}>
                    <Multiselect.Option>Option 1</Multiselect.Option>
                    <Multiselect.Option>Option 2</Multiselect.Option>
                    <Multiselect.Option>Option 3</Multiselect.Option>
                    <Multiselect.Option>Opt. 4</Multiselect.Option>
                    <Multiselect.Option>Option 5</Multiselect.Option>
                </Multiselect>
                <Multiselect placeholder='Choose option' localization={customLocalization}>
                </Multiselect>
            </Groups>
        );
    }}

```
