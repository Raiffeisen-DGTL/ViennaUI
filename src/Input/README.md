# Input

Компонент ввода текстовых данных небольшого размера.

## Импорт

```
import { Input } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
|ref | Ref<HTMLInputElement> \| undefined | | |
|size | ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', Breakpoints> \| undefined | | |
|design | 'outline' \| 'material' \| undefined | | |
|prefix| ReactNode | | |
|postfix |ReactNode | | |
|active | boolean \| undefined | | |
|onChange | InputEvent<FormEvent<HTMLInputElement>> \| undefined | | |
|onBlur| InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined| | |
|onFocus |InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined| | |
|onKeyDown |KeyboardEventHandler<HTMLInputElement> \| undefined| | |
|onKeyUp |KeyboardEventHandler<HTMLInputElement> \| undefined| | |
|onKeyPress |KeyboardEventHandler<HTMLInputElement> \| undefined| | |
|onPaste| ClipboardEventHandler<HTMLInputElement> \| undefined| | |
|onCopy| ClipboardEventHandler<HTMLInputElement> \| undefined| | |
|onCut |ClipboardEventHandler<HTMLInputElement> \| undefined| | |
|invalid| boolean \| undefined| | |
|smartPlaceholder| ReactNode| | |
|onDespose| (() => void) \| undefined| | |
|value| string \| undefined| | |
|defaultValue| string \| undefined| | |
|autoCapitalize| string \| undefined| | |
|onMouseDown| Function \| undefined| | |
|onPointerDown| Function \| undefined| | |
|placeholderValueAutoDiff| boolean \| undefined| | |
|onUpdated| (() => void) \| undefined | | |

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
