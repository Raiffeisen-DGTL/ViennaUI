# Input

Компонент ввода текстовых данных небольшого размера.


## Импорт

```
import { Input } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
active | boolean \| undefined | false | Системное свойство - реализация подсветки ховера у фальшивого инпута обвязки
ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки
size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | "m" | Размеры
design | "outline" \| "material" \| undefined | "outline" | Дизайн
prefix | ReactNode | false | Значанеие отображаемое перед компонентом
postfix | ReactNode | false | Значение отображаемое после компонента
onChange | InputEvent> \| undefined | false | Обработчик события при вводе символов
onBlur | InputEvent> \| undefined | false | Обработчик события при потере фокуса компонентом
onFocus | InputEvent> \| undefined | false | Обработчик события при получении фокуса компонентом
onKeyDown | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе
onKeyUp | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе
onKeyPress | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе
onPaste | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вставки
onCopy | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик копирования
onCut | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вырезки
invalid | boolean \| undefined | false |
smartPlaceholder | ReactNode | false |
onDespose | (() => void) \| undefined | false |
value | string \| undefined | false | Значение в поле ввода
autoCapitalize | string \| undefined | false | Автоматическая установка заглавной буквы
onMouseDown | Function \| undefined | false | Обработчик события первого полупериода клика
onPointerDown | Function \| undefined | false | Обработчик события первого полупериода клика

## Использование

```jsx
<Input placeholder='Введите текст' />
```

## Дизайн
##### Свойство `design`

Для свойства `design` есть два доступных значения `material` и `outline` (по умолчанию).

```jsx
<Input design='material' />
```

## Размер
##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `m` (по умолчанию), `l`, `xl` и `xxl`.

```jsx
<Input placeholder='Placeholder' size='xs' />
```

## Состояния
##### Свойство `disabled`, `invalid`

Компонент имеет два состояния `disabled` и `invalid`

```jsx
<Input placeholder='Placeholder' invalid />
<Input placeholder='Placeholder' disabled />
```

## Расширеннное отображение
##### Свойство `prefix`, `postfix`

Возможно добавление прификса или постфикса. Можно использовать текст, иконки или при необходимости другие элементы.

```jsx
<Input placeholder='Placeholder' prefix='RUR' postfix={'руб.'} />
```

## Умный placeholder 
##### Свойство `smartPlaceholder`

Чтобы отобразить в качестве placeholder-а что-то кроме текста, можно передать необходимый компонент в `smartPlaceholder`.

```jsx
<Input smartPlaceholder={<>Placeholder</>} />
```
