# InputMask

Компонент ввода текстовых данных по маске.

## Импорт

```
import { InputMask } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| onChange | (InputEvent<FormEvent<HTMLInputElement>> & ((value: unknown) => void)) \| undefined |  |
| design | "outline" \| "material" \| undefined |  | Дизайн |
| prefix | ReactNode |  | Значанеие отображаемое перед компонентом |
| autoCapitalize | string \| undefined |  | Автоматическая установка заглавной буквы |
| onCopy | ClipboardEventHandler  \| undefined |  | Обработчик копирования |
| onCut | ClipboardEventHandler  \| undefined |  | Обработчик вырезки |
| onPaste | ClipboardEventHandler \| undefined |  | Обработчик вставки |
| onFocus | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при получении фокуса компонентом |
| onBlur | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при потере фокуса компонентом |
| onKeyDown | KeyboardEventHandler \| undefined |  | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | KeyboardEventHandler \| undefined |  | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onKeyUp | KeyboardEventHandler \| undefined |  | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onMouseDown | Function \| undefined |  | Обработчик события первого полупериода клика |
| onPointerDown | Function \| undefined |  | Обработчик события первого полупериода клика |
| size | ResponsiveProp<"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl", Breakpoints> \| undefined |  | Размеры |
| value | string \| undefined |  | Значение в поле ввода |
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



## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| title | string \| undefined | |
| className | string \| undefined | |
| spellCheck | boolean \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |
| style | CSSProperties \| undefined | |
| name | string \| undefined | |
| type | string \| undefined | |
| maxLength | number \| undefined | |
| autoComplete | string \| undefined | |
| autoCorrect | string \| undefined | |
| autoFocus | boolean \| undefined | |
| readOnly | boolean \| undefined | |
| placeholder | string \| undefined | |
| disabled | boolean \| undefined | |

# InputMask

Компонент ввода данных по маске


```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <InputMask
                value={value}
                onChange={changeHandler}
                maskOptions={{mask: Date}}
                placeholder='Введите дату в формате ДД.ММ.ГГГГ'
            />
        );
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask.

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
        return (
            <Groups design='vertical'>
                <InputMask
                    value={value}
                    onChange={changeHandler}
                    maskOptions={{mask: Date}}
                    placeholder='Введите дату в формате ДД.ММ.ГГГГ'
                />
            </Groups>
        );
    }}
```

## Стандартные элементы

Для удобства реализовано несколько стандартных компонентов маски.

##### Account

```
    <InputAccount value='111111' />
```

##### Card

```
    <InputCard value='111111' />
```

##### Дата

```
    <InputDate value='22.02.1' />
```

##### Дата с периодом

```
    <InputDateRange value='11.12.1900 - 12' />
```

##### Digital

```
    <InputDigital value='1231' />
```

##### Число

```
    <InputNumber value='123123123.123' />
```

##### Телефон

```
    <InputPhone value='749539' />
```

## Паттерны масок

Чтобы задать паттерн для маски, нужно использовать:
0 - для любого числа,
a - для любой буквы, * для любого символа

Чтобы 0, а или * использовались как обычные символы, их нужно экранировать с помощью двойного обратного слэша

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback((data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <InputMask
                    value={value}
                    onChange={changeHandler}
                    maskOptions={{mask:"\\0000"}}
                />
            </Groups>
        );
    }}
```
