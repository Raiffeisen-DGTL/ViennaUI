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

```jsx
const [state, setValue] = React.useState({ value: '', suggests: [] });
const handleSelect = (e, data) => setValue({ ...state, value: data.value });
const handleChange = (e, data) => {
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
    <Search
        suggests={state.suggests}
        value={state.value}
        placeholder='Начните ввод'
        onChange={handleChange}
        onSelect={handleSelect}
    />
);
```

## Использование

Начните набирать: `Райффайзен` или `Иванов`. Выбор по `Enter` или щелчком по элементу списка.

```jsx
{
    () => {
        const [value, setValue] = React.useState();
        const [suggests, setSuggests] = React.useState();
        const handleChange = React.useCallback((e, data) => {
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
        const handleSelect = React.useCallback((e, data) => {
            setValue(data.value);
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
    };
}
```

## Кастомизация

#### Префиксная иконка

```jsx
const [value, setValue] = React.useState();
const [suggests, setSuggests] = React.useState();
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        prefix={<Violin />}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        onChange={handleChange}
        onSelect={handleSelect}
    />
);
```

#### Постфиксная иконка

```jsx
const [value, setValue] = React.useState();
const [suggests, setSuggests] = React.useState();
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        postfix={<Theater2 />}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        onChange={handleChange}
        onSelect={handleSelect}
    />
);
```

#### Две иконки

```jsx
const [value, setValue] = React.useState();
const [suggests, setSuggests] = React.useState();
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        prefix={<Task />}
        postfix={<Spinner />}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        onChange={handleChange}
        onSelect={handleSelect}
    />
);
```

## Кастомизация элементов списка

В качестве `дочернего элемента` можно передать только `функцию`. Функция принемает аргумент объект c полями: `props, suggest, value` где:

-   props - прокинутые насквозь свойства Search
-   suggest - текст текущего элеменнта
-   value - значение ввода

Возвращать следует валидный `JSX.Element`, который станет шаблоном для всех элементов

#### Изменение иконки

```jsx
const [value, setValue] = React.useState();
const [suggests, setSuggests] = React.useState();
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        prefix={<Task />}
        postfix={<Spinner />}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        onChange={handleChange}
        onSelect={handleSelect}>
        {({ props, suggest, value }) => <CustomItemWithIcon icon={<OperationsHistory />} value={suggest} />}
    </Search>
);
```

#### Пример подсветки совпадений

```jsx
const [value, setValue] = React.useState();
const [suggests, setSuggests] = React.useState();
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        prefix={<Task />}
        postfix={<Spinner />}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        onChange={handleChange}
        onSelect={handleSelect}>
        {({ props, suggest, value }) => <CustomItem value={suggest} match={value} />}
    </Search>
);
```

#### Работа с объектами

Если вы передаете в качестве `value` произвольный объект то `должны` определить функцию `valueToString` обязательно возвращающую строку.

-   Объекты `suggests` должны быть одной структуры с `value`.
-   Возвращаемое значение в `onChange` - строка в инпуте
-   Возвращаемое значение в `onSelect` - объек

Возможно вам захочется отключить строковую подсказку, для этого установите свойство `showInlineSuggest` в значение `false`.

```jsx
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
const handleChange = React.useCallback((e, data) => {
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
const handleSelect = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return (
    <Search
        prefix={<Task />}
        postfix={<Spinner />}
        showInlineSuggest={false}
        suggests={suggests}
        value={value}
        placeholder={'Начните ввод'}
        valueToString={valueToString}
        onChange={handleChange}
        onSelect={handleSelect}>
        {({ props, suggest, value }) => <CustomItem value={valueToString(suggest)} match={valueToString(value)} />}
    </Search>
);
```
