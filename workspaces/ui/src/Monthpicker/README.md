# Monthpicker

Компонент, который помогает пользователю заполнить дату без учета конкретного дня - месяц и год.


## Импорт

```
import { Monthpicker } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
value | Date \| undefined | false | Выбранная дата
isCalendarOpen | boolean \| undefined | false | Отображение календаря
onChange | ((event: Event \| InputEvent> \| null, data: { value?: string \| undefined; date?: Date \| undefined; name?: string \| undefined; }) => void) \| undefined | false |
design | "outline" \| "material" \| undefined | false | Дизайн
prefix | ReactNode | false | Значанеие отображаемое перед компонентом
autoCapitalize | string \| undefined | false | Автоматическая установка заглавной буквы
onCopy | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик копирования
onCut | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вырезки
onFocus | InputEvent> \| undefined | false | Обработчик события при получении фокуса компонентом
onBlur | InputEvent> \| undefined | false | Обработчик события при потере фокуса компонентом
onKeyDown | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе
onKeyPress | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе
onKeyUp | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе
onMouseDown | Function \| undefined | false | Обработчик события первого полупериода клика
onPointerDown | Function \| undefined | false | Обработчик события первого полупериода клика
size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры
ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки
invalid | boolean \| undefined | false |
disabled | boolean \| undefined | false |
active | boolean \| undefined | false | Принудительный ховер
postfix | ReactNode | false | Значение отображаемое после компонента
smartPlaceholder | ReactNode | false |
onDispose | (() => void) \| undefined | false |

## Использование

По умолчанию дизайн `outline` и размер `l`.
> Компонент является контролируемым, то есть чтобы отобразить выбранную дату,
> необходимо получить ее значение через обработчик `onChange` и прокинуть в `value`.

```{() => {
    const [value, setValue] = React.useState();
    const handleChange = React.useCallback((e, data) => setValue(data.date), []);
    return <Monthpicker value={value} onChange={handleChange} />;
}}
```

## Выбранная дата
##### Свойство `value`

Выбранное значение передается в формате `Date`.

```
<Monthpicker value={new Date(2020, 2, 4)} />
```

## Размеры
##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `l` (по умолчанию) и `xl`.

## Дизайн
##### Свойство `design`

Есть два доступных значения для свойства `design`: `outline` (по умолчанию) и `material`.

```jsx
<Monthpicker design='material' />
<Monthpicker design='outline' />
```

## Состояния
##### Свойство `disabled`, `invalid`

Компонент имеет два состояния `disabled` и `invalid`.

```jsx
<Monthpicker value={value} onChange={handleChange} invalid />
<Monthpicker value={value} onChange={handleChange} disabled />
```

## Управление состоянием открытия календаря из родительского компонента
##### Свойство `isCalendarOpen`

Состоянием отображения календаря можно управлять с помощью свойства `isCalendarOpen`.

```jsx
{() => {
    const [value, setValue] = React.useState();
    const handleChange = React.useCallback((e, data) => setValue(data.value), []);
    return <Monthpicker isCalendarOpen={!value} value={value} onChange={handleChange} />;
}}
```

## Элемент, отображаемый в конце поля ввода
##### Свойство `postfix`

Свойство `postfix` управляет отображением элемента в конце поля ввода.
По умолчанию отображается иконка календаря.

```jsx
<Monthpicker postfix={<Icon />} />
```
