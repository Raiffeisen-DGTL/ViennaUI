# Multiselect

Компонент предназначен для выбора нескольких элементов из выпадающего списка.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| prefix | ReactNode | false | Значанеие отображаемое перед компонентом |
| postfix | Postfix \| undefined | false | Значение отображаемое после компонента (объект) |
| invalid | boolean \| undefined | false | Компонент отображается как ошибочный если true |
| options | any[] \| CallbackFunc \| undefined | false | Список элементов в выпадающем списке: массив, callback функция или promise |
| values | any[] \| undefined | false | Массив выбраных элементов (интерфейсы объектов options и values должны совпадать) |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры |
| design | "outline" \| "material" \| undefined | false | Дизайн |
| maxListHeight | number \| undefined | false | Максимальная высота выпадающего списка в пикселях |
| openWhenFocus | boolean \| undefined | false | Разворачивать список при получениее фокуса |
| onScroll | MultiselectScrollEvent> \| undefined | false | Обработчик события при прокрутке списка |
| onSelect | MultiselectEvent> \| undefined | false | Обработчик события при выборе элемента списка |
| onKeyDown | MultiselectEvent<(event: KeyboardEvent) => void> \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onBlur | MultiselectEvent> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onFocus | MultiselectEvent> \| undefined | false | Обработчик события при получении фокуса компонентом |
| children | string \| number \| boolean \| {} \| ReactElement ReactElement Component)> \| null) \| (new (props: any) => Component)> \| ... 4 more ... \| undefined | false | Элементы выпадающего списка в случае если не используется свойство options |
| fitOptions | boolean \| undefined | false | Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true) |
| valueToString | ((item: any) => string) \| undefined | false | Определяем значение которое надо вывести в селекте как текст выбранного значения |
| compare | ((item: any) => any) \| undefined | false | Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента |

## Option Props

| Prop    | Type                                                   | Default | Description |
| ------- | ------------------------------------------------------ | ------- | ----------- |
| size    | "s" \| "m" \| "l" \| undefined                         | false   |
| altText | string \| undefined                                    | false   |
| first   | boolean \| undefined                                   | false   |
| preLast | boolean \| undefined                                   | false   |
| last    | boolean \| undefined                                   | false   |
| value   | any                                                    | false   |
| onClick | ((e: any, data: { value: any; }) => void) \| undefined | false   |

```jsx
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
    <Multiselect placeholder='Выберите значение' values={[...state.values]} onSelect={handleSelect}>
        <Multiselect.Option>Значение 1</Multiselect.Option>
        <Multiselect.Option>Значение большое 2</Multiselect.Option>
        <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
        <Multiselect.Option>Знач. 4</Multiselect.Option>
        <Multiselect.Option>Значение 5</Multiselect.Option>
    </Multiselect>
);
```

## Использование

Размеры: `xs`, `s`, `m`, `l`, `xl` и `xxl`

Свойства дизайна размера и состояния идентичны компоненту `Select`.

Компонент полностью управляемый, по умолчанию работает с массивом строк или объектами у которых есть поле `value`.

Массив передается в свойство `options`, а выбранные элементы в `values`.

По умолчанию список раскрывается при фокусе, это можно отключить установив свойство `openWhenFocus` в значение `false`.

Открытие и закрытие списка происходит по клавишам `Enter` и `Esacape` соответственно.

## Простое применение (статическое)

```jsx
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
    <Multiselect placeholder='Выберите значение' values={[...values]} onSelect={handleSelect}>
        <Multiselect.Option>Значение 1</Multiselect.Option>
        <Multiselect.Option>Значение большое 2</Multiselect.Option>
        <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
        <Multiselect.Option>Знач. 4</Multiselect.Option>
        <Multiselect.Option>Значение 5</Multiselect.Option>
    </Multiselect>
);
```

Значение как строка

```jsx
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
    <Multiselect placeholder='Выберите значение' values={values} onSelect={handleSelect}>
        <Multiselect.Option value='Значение 1' />
        <Multiselect.Option value='Значение большое 2' />
        <Multiselect.Option value='Значение еще больше 3' />
        <Multiselect.Option value='Знач. 4' />
        <Multiselect.Option value='Значение 5' />
    </Multiselect>
);
```

Значение как объект со свойством `value`

```jsx
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
    <Multiselect placeholder='Выберите значение' values={values} onSelect={handleSelect}>
        <Multiselect.Option value={{ value: 'Значение 1' }} />
        <Multiselect.Option value={{ value: 'Значение большое 2' }} />
        <Multiselect.Option value={{ value: 'Значение еще больше 3' }} />
        <Multiselect.Option value={{ value: 'Знач. 4' }} />
        <Multiselect.Option value={{ value: 'Значение 5' }} />
    </Multiselect>
);
```

По умолчанию компонент работает со строками или объектами в которых есть поле `value`, если стандартная ситуация невозможна то можно воспользоваться свойством `valueToString`, которое указывает по какому значению сравнивать и отображать, как выбранное

```jsx
const [values, setValues] = React.useState([]);
const handleSelect = React.useCallback(
    (e, data) => {
        const index = values.findIndex((val) => val.name === data.value.name);
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
    <Multiselect
        placeholder='Выберите значение'
        valueToString={(item) => item.name}
        values={values}
        onSelect={handleSelect}>
        <Multiselect.Option value={{ name: 'Значение 1' }}>Значение 1 - сложное</Multiselect.Option>
        <Multiselect.Option value={{ name: 'Значение большое 2' }}>Значение 2 - сложное</Multiselect.Option>
        <Multiselect.Option value={{ name: 'Значение еще больше 3' }}>Значение 3 - сложное</Multiselect.Option>
        <Multiselect.Option value={{ name: 'Знач. 4' }}>Значение 4 - сложное</Multiselect.Option>
        <Multiselect.Option value={{ name: 'Значение 5' }}>Значение 5 - сложное</Multiselect.Option>
    </Multiselect>
);
```

## Простое применение

```jsx
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
    <Multiselect
        placeholder='Выберите значение'
        options={options}
        values={values}
        design='material'
        onSelect={handleSelect}
    />
);
```

## Функция сравнения

> По умолчанию компонент работает со строками или объектами в которых есть поле `value`, если стандартная ситуация невозможна то можно воспользоваться свойствами `compare` и `valueToString`, которое указывает по какому значению сравнивать и отображать, как выбранное.

```jsx
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
    <Multiselect
        placeholder='Выберите значение'
        options={options}
        values={values}
        compare={(item) => item.id}
        design='material'
        onSelect={handleSelect}
    />
);
```

## Программная установка и снятие фокуса

```jsx
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
        <Button design='accent' onClick={focus}>
            Focus
        </Button>
        <Button design='primary' onClick={blur}>
            Blur
        </Button>
        <hr />
        <Multiselect ref={select} placeholder='Выберите значение' values={values} onSelect={handleSelect}>
            <Multiselect.Option value={{ value: 'Значение 1' }} />
            <Multiselect.Option value={{ value: 'Значение большое 2' }} />
            <Multiselect.Option value={{ value: 'Значение еще больше 3' }} />
            <Multiselect.Option value={{ value: 'Знач. 4' }} />
            <Multiselect.Option value={{ value: 'Значение 5' }} />
        </Multiselect>
    </>
);
```

## Бесконечные списки

```jsx
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
    <Multiselect
        placeholder='Выберите значение'
        options={getOptions}
        values={values}
        design='material'
        maxListHeight={150}
        onSelect={handleSelect}
    />
);
```
