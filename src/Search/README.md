# Search & Suggest

Компонент поиска данных с отображением подстовляемого значения.

Является оберткой над компонентом `Input` и наследует все его свойства, такие как: дизайн, размер, состояния и т.д.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| ref | Ref<HTMLInputElement> \| undefined |  | Сcылка на нативный элемент input, доступна после отрисовки |
| size | "xs" \| "s" \| "l" \| "xl" \| undefined |  | Размеры |
| design | "outline" \| "material" \| undefined |  | Дизайн |
| prefix | ReactNode |  | Значанеие отображаемое перед компонентом |
| postfix | ReactNode |  | Значение отображаемое после компонента |
| suggests | any[] \| undefined |  | Список элементов в выпадающем списке: массив |
| value | string \| undefined |  | Выбранный элемент (должен совпадать по интерфейсу с объектами массива) |
| maxListHeight | number \| undefined |  | Максимальная высота выпадающего списка в пикселях |
| maxListWidth | number \| undefined |
| invalid | boolean \| undefined |  | Компонент отображается как ошибочный если true |
| onSelect | SearchSelectEvent \| undefined |  | Обработчик события при выборе элемента списка |
| onChange | SearchEvent<FormEvent<HTMLInputElement>> \| undefined | | Обработчик события при наборе текста в поле ввода |
| onFocus | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при получении фокуса компонентом |
| onBlur | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined | | Обработчик события при потере фокуса компонентом |
| onKeyDown | SearchEvent<KeyboardEvent<HTMLInputElement>>  \| undefined |  | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyUp | KeyboardEventHandler<HTMLInputElement> \| undefined |  | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | KeyboardEventHandler<HTMLInputElement>  \| undefined |  | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onScroll | UIEventHandler<HTMLDivElement> \| undefined |  | Обработчик события при прокрутке списка |
| showInlineSuggest | boolean \| undefined |  | Показывать строчное дополнение (по умолчанию true) |
| wrapSuggestions | boolean \| undefined |  | Разрешить перенос подсказки на следующую строку |
| valueToString | ((item?: any) => string) \| undefined |  | Определяем значение которое надо вывести в компонент как текст выбранного значения |
| fitOptions | boolean \| undefined |
| fixed | boolean \| undefined |


# Search & Suggest

Компонент поиска данных с отображением подставляемого значения.

Является оберткой над компонентом `Input` и наследует все его свойства, такие как дизайн, размер, состояния и т.д.



```
    {() => {
        const [state, setValue] = React.useState({ value: '', suggests: [] });
        const handleSelect = (data) => setValue({ ...state, value: data.value });
        const handleChange = (data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
            setValue({ value: data.value, suggests: temp });
        };
        return (
            <Groups design='vertical'>
                <Search
                    suggests={state.suggests}
                    value={state.value}
                    fitOptions={false}
                    placeholder='Начните ввод'
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Использование

Начните набирать: `Райффайзен` или `Иванов`. Выбор по `Enter` или щелчком по элементу списка.

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Кастомизация

#### Префиксная иконка

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<ViolinIcon />}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

#### Постфиксная иконка

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    postfix={<TheaterOutIcon />}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

#### Две иконки

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<TaskDoneIcon />}
                    postfix={<Spinner />}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Кастомизация элементов списка

<ComponentHelpers.Search.Warn>
    <WarningRingIcon size='xl' />
    <div>
        В качестве <span>дочернего элемента</span> можно передать только <span>функцию</span>. Функция принимает в качестве
        аргумента - объект c полями: <span>props, suggest, value</span> где:
        <ul>
            <li>props - прокинутые насквозь свойства Search</li>
            <li>suggest - текст текущего элеменнта</li>
            <li>value - значение ввода</li>
        </ul>
        Возвращать следует валидный <span>JSX.Element</span>, который станет шаблоном для всех элементов.
    </div>
</ComponentHelpers.Search.Warn>

#### Изменение иконки

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<TaskDoneIcon />}
                    postfix={<Spinner />}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}>
                    {({ props, suggest, value }) => (
                        <ComponentHelpers.Search.CustomItemWithIcon icon={<Retry2Icon />} value={suggest} />
                    )}
                </Search>
            </Groups>
        );
    }}
```

#### Пример подсветки совпадений

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<TaskDoneIcon />}
                    postfix={<Spinner />}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    onSelect={handleSelect}>
                    {({ props, suggest, value }) => (
                        <ComponentHelpers.Search.CustomItem value={suggest} match={value} />
                    )}
                </Search>
            </Groups>
        );
    }}
```

#### Работа с объектами

<ComponentHelpers.Search.Warn>
    <WarningRingIcon size='xl' />
    <div>
        Если вы передаете в качестве <span>value</span> произвольный объект то <span>должны</span> определить функцию
        <span>valueToString</span> обязательно возвращающую строку.
        <div>
            Объекты <span>suggests</span> должны быть одной структуры с <span>value</span>.
        </div>
        <div>
            Возвращаемое значение в <span>onChange</span> - строка в инпуте
        </div>
        <div>
            Возвращаемое значение в <span>onSelect</span> - объект
        </div>
    </div>
</ComponentHelpers.Search.Warn>

<ComponentHelpers.Search.Info>
    <WarningRingIcon size='xl' />
    <div>
        Возможно вам захочется отключить строковую подсказку, для этого установите свойство{' '}
        <span>showInlineSuggest</span> в значение <span>false</span>.
    </div>
</ComponentHelpers.Search.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const valueToString = React.useCallback((val) => {
            if (val) {
                if (typeof val === 'string') {
                    return val;
                }
                return `${val.family} ${val.name} ${val.middle}`;
            }
            return '';
        }, []);
        const handleChange = React.useCallback((data) => {
            const mock = [
                { family: 'Иванов', name: 'Иван', middle: 'Иванович' },
                { family: 'Иванов', name: 'Иван', middle: 'Петрович' },
                { family: 'Иванов', name: 'Константин', middle: 'Петрович' },
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(valueToString(m).toUpperCase())))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<TaskDoneIcon />}
                    postfix={<Spinner />}
                    showInlineSuggest={false}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    valueToString={valueToString}
                    onChange={handleChange}
                    onSelect={handleSelect}>
                    {({ props, suggest, value }) => (
                        <ComponentHelpers.Search.CustomItem
                            value={valueToString(suggest)}
                            match={valueToString(value)}
                        />
                    )}
                </Search>
            </Groups>
        );
    }}
```

#### Дополнительная информация в подсказках из объекта

```
    {() => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const valueToString = React.useCallback((val) => {
            if (val) {
                if (typeof val === 'string') {
                    return val;
                }
                return `${val.family} ${val.name} ${val.middle}`;
            }
            return '';
        }, []);
        const handleChange = React.useCallback((data) => {
            const mock = [
                { family: 'Иванов', name: 'Иван', middle: 'Иванович', city: 'Омск', occupation: 'программист' },
                { family: 'Иванов', name: 'Иван', middle: 'Петрович', city: 'Москва', occupation: 'программист' },
                { family: 'Иванов', name: 'Константин', middle: 'Петрович', city: 'Нью-Йорк', occupation: 'аналитик' },
                { family: 'Иванов', name: 'Константин', middle: 'Петрович', city: 'Нью-Йорк', occupation: 'менеджер' },
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(valueToString(m).toUpperCase())))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    prefix={<TaskDoneIcon />}
                    postfix={<Spinner />}
                    showInlineSuggest={false}
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    valueToString={valueToString}
                    onChange={handleChange}
                    onSelect={handleSelect}>
                    {(data) => (
                        <Flex direction='column'>
                            <P>{`${data.suggest['family']} ${data.suggest['name']} ${data.suggest['middle']}`}</P>
                            <P color='seattle100'>Город: {data.suggest['city']}</P>
                            <P color='seattle100'>Профессия: {data.suggest['occupation']}</P>
                        </Flex>
                    )}
                </Search>
            </Groups>
        );
    }}
```

## Свойство fixed

```
    {() => {
        const [state, setValue] = React.useState({ value: '', suggests: [] });
        const handleSelect = (data) => setValue({ ...state, value: data.value });
        const handleChange = (data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
            setValue({ value: data.value, suggests: temp });
        };
        return (
            <Groups design='vertical'>
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '300px',
                        height: '100px',
                        border: '1px solid',
                    }}>
                    <div style={{ width: '500px', height: '300px' }}>
                        <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                            <Search
                                suggests={state.suggests}
                                value={state.value}
                                placeholder='Начните ввод'
                                onChange={handleChange}
                                onSelect={handleSelect}
                                fixed
                            />
                        </div>
                    </div>
                </div>
            </Groups>
        );
    }}
```

## Boilerplate с поиском

Начиная с версии 11.67.1 реализация фильтра спрятана внутрь компонента.
Чтобы включить внутренний фильтр укажите `enableInnerSearch={true}`
Для кастомизации добавлено свойство `search`, которое отвечает за фильтрацию опций.

Значение по умолчанию:

```
(item, value) => item.toLowerCase().startsWith(value.toLowerCase())
```

```
    {() => {
        const [state, setValue] = React.useState({
            value: '',
            suggests: [
                'Райффайзен банк 1',
                'Райффайзен банк 2',
                'Райффайзен банк 3',
                'Райффайзен банк 4',
                'Райффайзен банк 5',
                'Райффайзен банк 6',
                'Райффайзен банк 7',
                'Райффайзен банк 8',
                'Райффайзен банк 9',
                'Райффайзен банк 10',
                'Райффайзен банк 11',
                'Райффайзен банк 12',
                'Райффайзен банк 13',
                'Райффайзен банк 14',
                'Райффайзен банк 15',
                'Райффайзен банк 16',
                'Райффайзен банк 17',
                'Райффайзен банк 18',
            ],
        });
        const handleSelect = (data) => setValue({ ...state, value: data.value });
        const handleChange = (data) => {
            setValue({ ...state, value: data.value });
        };
        return (
            <Search
                suggests={state.suggests}
                value={state.value}
                enableInnerSearch
                fixed
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        );
    }}
```

Кастомизированный поиск

```
    {() => {
        const [state, setValue] = React.useState({
            value: '',
            suggests: [
                'Райффайзен банк 1',
                'Райффайзен банк 2',
                'Райффайзен банк 3',
                'Райффайзен банк 4',
                'Райффайзен банк 5',
                'Райффайзен банк 6',
                'Райффайзен банк 7',
                'Райффайзен банк 8',
                'Райффайзен банк 9',
                'Райффайзен банк 10',
                'Райффайзен банк 11',
                'Райффайзен банк 12',
                'Райффайзен банк 13',
                'Райффайзен банк 14',
                'Райффайзен банк 15',
                'Райффайзен банк 16',
                'Райффайзен банк 17',
                'Райффайзен банк 18',
            ],
        });
        const handleSelect = (data) => setValue({ ...state, value: data.value });
        const handleChange = (data) => {
            setValue({ ...state, value: data.value });
        };
        return (
            <Search
                suggests={state.suggests}
                value={state.value}
                enableInnerSearch
                search={(item, value) => item.toUpperCase().startsWith(value.toUpperCase())}
                fixed
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        );
    }}
```

## Очистка поля

Передав параметр `allowClear`, можно очистить введенный текст по клику на иконку крестика.

```
    {() => {
        const [value, setValue] = React.useState('');
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    allowClear
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
        );
    }}
```

## Выравнивание Suggests

Передав параметр `align` со значениями - `start` или `end`, можно выравнить Suggests по правой или левой стороне инпута.

```
    {() => {
        const [value, setValue] = React.useState('');
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    allowClear
                    onChange={handleChange}
                    fitOptions={false}
                    align={'end'}
                    onSelect={handleSelect}
                />
        );
    }}
```

## Изменение дизайна и размера

Для изменения дизайна отвечает свойство `design` (тип 'material' | 'outline') по умолчанию значение 'outline'.
Для изменения размера отвечает свойство `size` (тип 'xs' | 's' | 'm' | 'l' | 'xl') по умолчанию значение 'l'.

```
    {() => {
        const [state, setValue] = React.useState({ value: '', suggests: [] });
        const handleSelect = (data) => setValue({ ...state, value: data.value });
        const handleChange = (data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
            const temp = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
            setValue({ value: data.value, suggests: temp });
        };
        const sizes = ['xs', 's', 'm', 'l', 'xl'];
        return (
            <Groups design='vertical'>
                {sizes.map((size) => (
                    <Search
                        suggests={state.suggests}
                        value={state.value}
                        fitOptions={false}
                        placeholder='Начните ввод'
                        onChange={handleChange}
                        onSelect={handleSelect}
                        size={size}
                        design="material"
                    />
                ))}
            </Groups>
        );
    }}
```

## Изменение размеров выпадающего списка

За управление размерами отвечают следующие свойства:
- fitOptions (тип boolean) растягивает выпадающий список по ширине родителя, по умолчанию `true`;
- maxListHeight (тип number) ограничивает высоту выпадающего списка в пикселях;
- maxListWidth (тип number) ограничивает ширину выпадающего списка в пикселях;

```
    {() => {
        const [value, setValue] = React.useState('');
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    fitOptions={false}
                    onSelect={handleSelect}
                />
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    onChange={handleChange}
                    maxListWidth={250}
                    maxListHeight={100}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Управление состоянием поля

Компонент имеет два состояния `disabled` (тип boolean) и `invalid` (тип boolean)

```
    {() => {
        const [value, setValue] = React.useState('');
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups design='vertical'>
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    disabled
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
                <Search
                    suggests={suggests}
                    value={value}
                    placeholder={'Начните ввод'}
                    invalid
                    onChange={handleChange}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Перенос строки в подсказках

По умолчанию при длинных подсказках добавляется горизонтальный скролл в контейнер, чтобы избавиться от этого поведение и переносить на вторую строку необходимо указать свойство `wrapSuggestions` (тип boolean).

```
    {() => {
        const [value, setValue] = React.useState('');
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setSuggests(temp);
            setValue(data.value);
        }, []);
        const handleSelect = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <Search
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                maxListWidth={120}
                wrapSuggestions
                onChange={handleChange}
                onSelect={handleSelect}
            />
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <Search
        viewOnly
        suggests={[]}
        value={'Какой-то текст'}
        placeholder='Начните ввод'
    />
```


## Закрытие выпадающего списка после выбора опции

По умолчанию при выборе опции дропдаун закрывается. Чтобы отключить это поведение необходимо указать свойство `closeAfterSelection` со значением false.

```
    {() => {
        const [state, setValue] = React.useState({
        value: '',
        suggests: [
            'Райффайзен банк 1',
            'Райффайзен банк 2',
            'Райффайзен банк 3',
            'Райффайзен банк 4',
            'Райффайзен банк 5',
            'Райффайзен банк 6',
            'Райффайзен банк 7',
            'Райффайзен банк 8',
            'Райффайзен банк 9',
            'Райффайзен банк 10',
            'Райффайзен банк 11',
            'Райффайзен банк 12',
            'Райффайзен банк 13',
            'Райффайзен банк 14',
            'Райффайзен банк 15',
            'Райффайзен банк 16',
            'Райффайзен банк 17',
            'Райффайзен банк 18',
        ],
    });
    const handleSelect = ({ value }) => setValue((prev) => ({ ...prev, value }));
    const handleChange = ({ value }) => setValue((prev) => ({ ...prev, value }));
    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                closeAfterSelection={false}
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
    }}
```