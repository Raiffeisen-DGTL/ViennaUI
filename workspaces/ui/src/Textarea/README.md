# Textarea

Компонент "Многострочное поле для ввода текста".
Используйте данный компонент в формах, когда пользователю необходимо ввести длинный (многострочный) текст.

## Импорт

```
import { Textarea } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLTextAreaElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

Prop | Type | Default | Description
--- | --- | --- | ---
value | string \| undefined | false |
size | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | "m" |
design | "outline" \| "material" \| undefined | "outline" |
maxRows | number \| undefined | false | Максимальное число видимых строк
resize | boolean \| undefined | true | Возможность изменять вытосу компонента
invalid | boolean \| undefined | false |
onChange | TextareaEvent> \| undefined | false |
onClick | TextareaEvent> \| undefined | false |
onFocus | TextareaEvent> \| undefined | false |
onBlur | TextareaEvent> \| undefined | false |
onKeyDown | ((event: KeyboardEvent) => void) \| undefined | false |
onKeyPress | ((event: KeyboardEvent) => void) \| undefined | false |
onKeyUp | ((event: KeyboardEvent) => void) \| undefined | false |
ref | ((instance: HTMLTextAreaElement \| null) => void) \| RefObject \| null \| undefined | false |
autoCapitalize | string \| undefined | false | Автоматическая установка заглавной буквы
spellcheck | string \| undefined | false | Проверка орфографии

## Использование

По умолчанию дизайн `outline` и размер `m`

```
<Textarea placeholder='Текстовое поле' />
```

## Дизайн
##### Свойство `design`

Есть два доступных значения для свойства `design`: `outline` (по умолчанию) и `material`.

```jsx
<Textarea design='material' />
<Textarea design='outline' />
```

## Невалидное состояние
##### Свойство `invalid`

Невалидное поле

```
<Textarea placeholder='Текстовое поле' invalid />
```

## Неактивное состояние
##### Свойство `disabled`

Заблокированное поле

```
<Textarea value='Текстовое поле' disabled />
```

## Изменение высоты компонента
##### Свойство `resize`

Определяет возможность изменения высоты поля. По умолчанию `true`

```<Textarea placeholder='Текстовое поле' resize={false} />```

## Максимальное число видимых строк
##### Свойство `maxRows`

Максимальное значение количества видимых строк. По умолчанию равно `3`

```<Textarea placeholder='Текстовое поле' maxRows={1} />```
