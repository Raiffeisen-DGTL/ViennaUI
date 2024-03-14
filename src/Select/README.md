# Select

Компонент предназначен для выбора одного элемента из выпадающего списка.

## Импорт

```
import { Select } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| prefix | ReactNode | false | Значанеие отображаемое перед компонентом |
| postfix | Postfix \| undefined | false | Значение отображаемое после компонента (объект) |
| invalid | boolean \| undefined | false | Компонент отображается как ошибочный если true |
| options | any[] \| CallbackFunc \| undefined | false | Список элементов в выпадающем списке: массив, callback функция или promise |
| value | any | false | Выбранный элемент (интерфейсы объектов options и value должны совпадать) |
| inputValue | any | false | Выбранный элемент (интерфейсы объектов options и value должны совпадать) |
| templateValue | ReactNode | false | Шаблон отображения выбранного элемента при закрытом списке |
| smartPlaceholder | ReactNode | false |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | "l" | Размеры |
| design | "outline" \| "material" \| undefined | "outline" | Дизайн |
| maxListHeight | number \| undefined | 300 | Максимальная высота выпадающего списка в пикселях |
| openWhenFocus | boolean \| undefined | true | Разворачивать список при получениее фокуса |
| onScroll | SelectScrollEvent \| undefined | false | Обработчик события при прокрутке списка |
| onSelect | (event: React.FormEvent<HTMLInputElement>, data?: { name?: string; value?: any; index?: number }) => void \| undefined | false | Обработчик события при выборе элемента списка |
| onChange | (event: React.FormEvent<HTMLInputElement>, data?: { name?: string; value?: string; originalValue?: string }) => void \| undefined | false | Обработчик события при наборе текста с активным флагомeditable |
| onKeyDown | SelectEvent<(event: KeyboardEvent) => void> \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onBlur | SelectEvent<(event: KeyboardEvent) => void> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onFocus | SelectEvent<(event: KeyboardEvent) => void> \| undefined | false | Обработчик события при получении фокуса компонентом |
| children | string \| number \| boolean \| {} \| ReactElement ReactElement Component)> \| null) \| (new (props: any) => Component)> \| ... 4 more ... \| undefined | false | Элементы выпадающего списка в случае если не используется свойство options |
| editable | string \| number \| boolean \| {} \| ReactElement ReactElement Component)> \| null) \| (new (props: any) => Component)> \| ... 4 more ... \| undefined | false | Отображает input при фокусе, позволяетнабирать текст |
| fitOptions | boolean \| undefined | false | Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true) |
| valueToString | ((item: any) => string) \| undefined | false | Определяем значение которое надо вывести в селекте как текст выбранного значения |
| compare | ((item: any) => any) \| undefined | false | Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента |
| radix | string \| undefined | false |
| thousandsSeparator | string \| undefined | false |
| mapToRadix | string[] \| undefined | false |
| scale | number \| undefined | false |
| signed | boolean \| undefined | false |
| normalizeZeros | boolean \| undefined | false |
| padFractionalZeros | boolean \| undefined | false |
| allowNegative | boolean \| undefined | false |
| number | number \| undefined | false |
| updateOptions | (((opts: Partial) => void) & ((opts: Partial>) => void) & ((opts: Partial>) => void) & ((opts: Partial) => void) & ((opts: Partial<...>) => void)) \| undefined | false |
| mask | any | false |
| state | any | false |
| unmaskedValue | string \| undefined | false |
| typedValue | undefined | false |
| rawInputValue | string \| undefined | false |
| isComplete | boolean \| undefined | false |
| parent | AnyMasked \| undefined | false |
| prepare | (((value: string, masked: Masked, flags: AppendFlags) => string) & ((value: string, masked: Masked, flags: AppendFlags) => string) & ((value: string, masked: Masked<...>, flags: AppendFlags) => string) & ((value: string, masked: Masked<...>, flags: AppendFlags) => string)) \| undefined | false |
| validate | (((value: string, masked: Masked, flags: AppendFlags) => boolean) & ((value: string, masked: Masked, flags: AppendFlags) => boolean) & ((value: string, masked: Masked<...>, flags: AppendFlags) => boolean) & ((value: string, masked: Masked<...>, flags: AppendFlags) => boolean)) \| undefined | false |
| commit | (((value: string, masked: Masked) => void) & ((value: string, masked: Masked) => void) & ((value: string, masked: Masked) => void) & ((value: string, masked: Masked<...>) => void)) \| undefined | false |
| overwrite | boolean \| undefined | false |
| isInitialized | boolean \| undefined | false |
| reset | ((() => void) & (() => void) & (() => void) & (() => void)) \| undefined | false |
| resolve | (((value: string) => string) & ((value: string) => string) & ((value: string) => string) & ((value: string) => string)) \| undefined | false |
| nearestInputPos | (((cursorPos: number, direction?: "NONE" \| "LEFT" \| "FORCE_LEFT" \| "RIGHT" \| "FORCE_RIGHT" \| undefined) => number) & ((cursorPos: number, direction?: "NONE" \| "LEFT" \| "FORCE_LEFT" \| "RIGHT" \| "FORCE_RIGHT" \| undefined) => number) & ((cursorPos: number, direction?: "NONE" \| ... 4 more ... \| undefined) => number) & (... | false |
| extractTail | (((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails)) \| und... | false |
| appendTail | (((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails)) \| undefined | false |
| append | (((str: string, flags?: AppendFlags \| undefined, tail?: string \| TailDetails \| undefined) => ChangeDetails) & ((str: string, flags?: AppendFlags \| undefined, tail?: string \| TailDetails \| undefined) => ChangeDetails) & ((str: string, flags?: AppendFlags \| undefined, tail?: string \| ... 1 more ... \| undefined) => Cha... | false |
| remove | (((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails... | false |
| doPrepare | (((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string)) \| undefined | false |
| doValidate | (((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean)) \| undefined | false |
| doCommit | ((() => boolean) & (() => boolean) & (() => boolean) & (() => boolean)) \| undefined | false |
| splice | (((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((st... | false |
| blocks | { [key: string]: AnyMaskedOptions; } \| undefined | false |
| definitions | Definitions \| undefined | false |
| placeholderChar | string \| undefined | false |
| lazy | boolean \| undefined | false |
| maskedBlock | (((name: string) => PatternBlock \| undefined) & ((name: string) => PatternBlock \| undefined)) \| undefined | false |
| maskedBlocks | (((name: string) => PatternBlock[]) & ((name: string) => PatternBlock[])) \| undefined | false |
| from | number \| undefined | false |
| to | number \| undefined | false |
| autofix | boolean \| undefined | false |
| parse | ((value: string) => Date) \| undefined | false |
| format | ((value: Date) => string) \| undefined | false |
| date | Date \| undefined | false |
| isDateExist | ((str: string) => boolean) \| undefined | false |
| tabIndex | number \| undefined | 0 |
| defaultPostfix | { down?: ReactNode, up?: ReactNode } \| undefined | { down: <Down />, up: <Up /> } | Элементы управления по умолчанию |
| localization | [SelectLocalization](../Select/localization.ts) | defaultSelectLocalization | Локализация |

## Использование

Компонент состоит из родительского контейнера `Select` и дочерних элементов `Select.Option`. При использовании допускается указывать либо `options`, либо передавать `дочерние элементы`. Предусмотрено автомотическое позиционирование выпадающего списка.

> Компонент является контролируемым, то есть чтобы отобразить выбранное значение, необходимо получить его значение через обработчик `onChange` и прокинуть в `value`. По умолчанию работает с массивом строк или объектами у которых есть поле `value`

```jsx
const [value, setValue] = React.useState('');
const handleSelect = (e, data) => setValue(data.value);
return (
    <Select design='material' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
        <Select.Option>Значение 1</Select.Option>
        <Select.Option>Значение 2</Select.Option>
        <Select.Option>Значение 3</Select.Option>
        <Select.Option>Значение 4</Select.Option>
        <Select.Option>Значение 5</Select.Option>
    </Select>
);
```

## Дизайн

##### Свойство `design`

Представлен в двух дизайнах `otline` (по умолчанию), `material`.

```jsx
<Select design='material' value={value} onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
</Select>
```

## Размеры

##### Свойство `size`

Доступные размеры `xs`, `s`, `m`, `l` (по умолчанию), `xl` и `xxl`.

```jsx
<Select size='xs' value={value} onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
</Select>
```

## Состояние ошибки

##### Свойство `invalid`

```jsx
<Select invalid value={value} onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
</Select>
```

## Неактивное состояние

##### Свойство `disabled`

```jsx
<Select disabled value={value} onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
</Select>
```

## Значение элемента списка

##### Свойство `value`, `Select.Option`

Отображаемое значение элемента списка можно задать через свойство `value` компонента `Select.Option`, либо через дочерний элемент компонента `Select.Option`. Значение, переданное через свойство `value` может быть передано как строкой, так и объектом с полем **value**.

```jsx
<Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
    <Select.Option value='Значение 2' />
    <Select.Option>Значение 1</Select.Option>
    <Select.Option value={{ value: 'Значение 3' }} />
</Select>
```

## Составные значения списка

##### Свойство `valueToString`, `compare`

> По умолчанию компонент работает со строками или объектами в которых есть поле `value`, если стандартная ситуация невозможна то можно воспользоваться свойствами `compare` и `valueToString`, которое указывает по какому значению сравнивать и отображать, как выбранное.

```jsx
<Select
    placeholder='Выберите значение'
    valueToString={(item) => item && item.text}
    compare={(item) => item && item.name}
    value={value}
    onSelect={handleSelect}
>
    <Select.Option value={{ name: 'Значение 1', text: 'Значение 1 - сложное' }} />
    <Select.Option value={{ name: 'Значение 2',  text: 'Значение 2 - сложное' }} />
</Select>
```

#### Как сравниваются значения

##### Свойство `compare`

По умолчанию для подсветки выбранного элемента используется сравнение с переданным в value значением в следующем порядке:

-   по ссылке
-   с результатом метода compare
-   с результатом метода valueToString

В отличие от `valueToString` назначение которого - сравнение и вывод строки результата, метод `compare` следует применять когда фактические значения могут совпадать, но их же нужно и выводить.

Например есть пользовтели с полным совпадением по `ФИО`, но с разными `ID` - вывести надо имя но сравнивать будем по ID. `compare`следует также использовать, если сравнение по `ссылке` не возможно так как список все время мутирует.

## Список через свойство компонента

##### Свойство `options`

Если вариант с передачей элементов списка не подходит, их можно передать как массив в свойство `options`.

```jsx
<Select
    options={['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']}
    value={value}
    onSelect={handleSelect}
/>
```

`options` как `Promise`

```jsx
const [value, setValue] = React.useState('');
const handleSelect = (e, data) => setValue(data.value);
const getOptions = (options) => {
    if (options.length) {
        return Promise.resolve(options.concat([`Значение ${options.length + 1}`]));
    } else {
        return Promise.resolve(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6']);
    }
};
return (
    <Select
        placeholder='Выберите значение'
        value={value}
        options={getOptions}
        maxListHeight={150}
        onSelect={handleSelect}
    />
);
```

## Иконки для закрытого и открытого списка

##### Свойство `postfix`

```jsx
<Select
    postfix={{ up: <SmileNormal />, down: <Smile /> }}
    placeholder='Выберите значение'
    value={value}
    onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
    <Select.Option>Значение 3</Select.Option>
    <Select.Option>Значение 4</Select.Option>
    <Select.Option>Значение 5</Select.Option>
</Select>
```

## Префиксная иконка

##### Свойство `prefix`

```jsx
<Select prefix={<Task />} value={value} onSelect={handleSelect}>
    <Select.Option>Значение 1</Select.Option>
    <Select.Option>Значение 2</Select.Option>
</Select>
```

## Иконка выбранного элемента

##### Свойство `icon`, `Select.Option`

```jsx
<Select value={value} onSelect={handleSelect}>
    <Select.Option icon={<Theater2 />}>Значение 1</Select.Option>
    <Select.Option icon={<Violin />}>Значение 2</Select.Option>
</Select>
```

## Изменение содержимого элемента списка

Отображение контента в элементе списка можно регулировать, добавляя свои элементы, в зависимости от целей.

```jsx
const CustomItem = (props) => {
    return (
        <div>
            <div>{props.value}</div>
            <div>{props.sub}</div>
        </div>
    );
};

const [value, setValue] = React.useState('');
const [options, setOptions] = React.useState([
    { value: 'Значение 1', sub: 'Дополнение 1' },
    { value: 'Значение 2', sub: 'Дополнение 2' },
    { value: 'Значение 3', sub: 'Дополнение 3' },
    { value: 'Значение 4', sub: 'Дополнение 4' },
    { value: 'Значение 5', sub: 'Дополнение 5' },
]);
const handleSelect = (e, data) => setValue(data.value);
return (
    <Select valueToString={(item) => item.value} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
        {options.map((i, index) => (
            <Select.Option value={i} key={index}>
                <CustomItem value={i.value} sub={i.sub} />
            </Select.Option>
        ))}
    </Select>
);
```

## Использование неоднородных элементов и блокировка

> Обратите внимание на свойство `disabled` у элемента списка, оно делает его недоступным к выбору

```jsx
const CustomItem = (props) => {
    return (
        <div>
            <div>{props.value}</div>
            <div>{props.sub}</div>
        </div>
    );
};

const [value, setValue] = React.useState('');
const [options, setOptions] = React.useState([
    { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
    { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
    { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
    { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <Violin /> },
    { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <Bust /> },
    { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
    { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
]);
const handleSelect = (e, data) => setValue(data.value);
return (
    <Select valueToString={(item) => item.value} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
        {options.map((i, index) => (
            <Select.Option disabled={i.disabled} value={i} key={index}>
                {i.type === 'custom' && <CustomItem value={i.value} sub={i.sub} />}
                {i.type === 'icon' && <CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />}
                {i.type === 'default' && i.value}
            </Select.Option>
        ))}
    </Select>
);
```

## Изменение отображения выбранного элемента

##### Свойство `templateValue`

Для изменения шаблона выбранного элемента необходимо использовать свойство `templateValue`.

```javascript
export const Template = styled.div`
    display: flex;
    align-options: center;
    justify-content: space-between;
    width: 100%;
`;
```

```jsx
const [value, setValue] = React.useState('');
const [options, setOptions] = React.useState([
    { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
    { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
    { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
    { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <Violin /> },
    { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <Bust /> },
    { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
    { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
]);
const handleSelect = (e, data) => setValue(data.value);
return (
    <Select
        valueToString={(item) => item.value}
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
        onSelect={handleSelect}>
        {options.map((i, index) => (
            <Select.Option disabled={i.disabled} value={i} key={index}>
                {i.type === 'custom' && <CustomItem value={i.value} sub={i.sub} />}
                {i.type === 'icon' && <CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />}
                {i.type === 'default' && i.value}
            </Select.Option>
        ))}
    </Select>
);
```

## Установка и снятие фокуса внутри контейнера

##### Свойство `ref`

Для управления состоянием установки фокуса и его снятия нуобходимо работать с ссылкой на DOM элемент через свойство `ref`.

```jsx
const [value, setValue] = React.useState('');
const [options, setOptions] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
let select = React.useRef(null);
const handleSelect = React.useCallback((e, data) => setValue(data.value));
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
        <Select ref={select} placeholder='Выберите значение' options={options} value={value} onSelect={handleSelect} />
    </>
);
```

## Список с возможностью поиска

##### Свойство `editable`

Свойство `editable` позволяет вводить текст в поле поиска компонента. При его включении становится доступным свойство `onChange` которое возвращает введеную строку. При этом поле ввода является дочерним от `iMask`

```jsx
const [value, setValue] = React.useState('');
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
        onFocus={() => console.log('focus 1')}
        onBlur={() => console.log('blur 1')}
        onChange={changeHandler}
        options={options}
        onSelect={handleSelect}
    />
);
```

## Значение вне списка

Бывает, что требуется предоставить пользователю возможность сохранить то значение что сейчас введено, даже если отсутствует сопоставление в списке

> Обратите внимание что такое использование компонента является контекстно-некорректным, попробуйте решить проблему по другому или воспользоваться компонентом `Search`

```jsx
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
const [options, setOptions] = React.useState(mock);
const [value, setValue] = React.useState('');
const handleSelect = (e, data) => {
    setValue(data.value);
};
const changeHandler = (e, data) => {
    setValue(data.value);
    setOptions([...mock.filter((i) => i.startsWith(data.value))]);
};
return (
    <Select
        placeholder='Выберите значение'
        value={value}
        inputValue={value}
        editable
        onFocus={() => console.log('focus 1')}
        onBlur={() => console.log('blur 1')}
        onChange={changeHandler}
        options={options}
        onSelect={handleSelect}
    />
);
```

## Маска

##### Свойство `mask`

Включение маски в поле ввода

```jsx
const mock = ['1234-1234', '1234-5678', '1234-0000', '1234-9876', '1234-4321'];
const [options, setOptions] = React.useState(mock);
const [value, setValue] = React.useState('1234-0000');
const handleSelect = (e, data) => {
    setValue(data.value);
};
const changeHandler = (e, data) => {
    setValue(data.value);
    setOptions([...mock.filter((i) => i.startsWith(data.value))]);
};
return (
    <Select
        placeholder='Выберите значение'
        value={value}
        mask={'{1234}-0000'}
        editable
        inputValue={value}
        onFocus={() => console.log('focus 1')}
        onBlur={() => console.log('blur 1')}
        onChange={changeHandler}
        options={options}
        onSelect={handleSelect}></Select>
);
```
