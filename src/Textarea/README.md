# Textarea

Компонент "Многострочное поле для ввода текста". Используйте данный компонент в формах, когда пользователю необходимо ввести длинный (многострочный) текст.

## Импорт

```
import { Textarea } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLTextAreaElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | string \| undefined |  |
| size | ResponsiveProp<Size, Breakpoints> \| undefined |  |
| design | Design  \| undefined |  |
| maxRows | number \| undefined |  | Максимальное число видимых строк |
| resize | boolean \| undefined |  | Возможность изменять вытосу компонента |
| invalid | boolean \| undefined |  |
| showCounter | boolean \| undefined |  |
| onChange | TextareaEvent<FormEvent<HTMLTextAreaElement>> \| undefined |  |
| onClick | TextareaEvent<MouseEvent<HTMLTextAreaElement, MouseEvent>> \| undefined |  |
| onFocus | TextareaEvent<FocusEvent<HTMLTextAreaElement, Element>> \| undefined |  |
| onBlur | TextareaEvent<FocusEvent<HTMLTextAreaElement, Element>> \| undefined |  |
| onKeyDown | KeyboardEventHandler<HTMLTextAreaElement> \| undefined |  |
| onKeyPress | KeyboardEventHandler<HTMLTextAreaElement> \| undefined |  |
| onKeyUp | KeyboardEventHandler<HTMLTextAreaElement> \| undefined |  |
| ref | Ref<HTMLTextAreaElement> \| RefObject \| null \| undefined |  |
| autoCapitalize | string \| undefined |  | Автоматическая установка заглавной буквы |
| spellcheck | string \| undefined |  | Проверка орфографии |

## HTMLAttributes
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| rows | number \| undefined |  |
| disabled | boolean \| undefined |  |
| id | string \| undefined |  |
| name | string \| undefined |  |
| cols | number \| undefined |  |
| wrap | 'hard' \| 'soft' \| 'off'  \| undefined |  |
| autoComplete | string \| undefined |  |
| autoCorrect | string \| undefined |  |
| autoFocus | boolean \| undefined |  |
| maxLength | number \| undefined |  |
| minLength | number \| undefined |  |
| placeholder | string \| undefined |  |
| readOnly | boolean \| undefined |  |
| required | boolean \| undefined |  |
| tabIndex | number \| undefined |  |


## Использование

По умолчанию дизайн `outline` и размер `m`

```
<Textarea placeholder='Текстовое поле' />
```

# Textarea

Компонент "Многострочное поле для ввода текста".

Используйте данный компонент в формах, когда пользователю необходимо ввести длинный (многострочный) текст.

```
    <Textarea placeholder='Многострочное поле для ввода текста' />
```

## Внешний вид и размеры

По умолчанию дизайн `outline` и размер `m`

#### Outline

Дизайн outline

```
    <Textarea size='xs' placeholder='xs - Текстовое поле' />
    <Textarea size='s' placeholder='s - Текстовое поле' />
    <Textarea size='m' placeholder='m - Текстовое поле' />
    <Textarea size='l' placeholder='l - Текстовое поле' />
    <Textarea size='xl' placeholder='xl - Текстовое поле' />
    <Textarea />
    <Textarea placeholder='Текстовое поле' disabled />
    <Textarea placeholder='Текстовое поле' invalid />
```

#### Material

Дизайн material

```
    <Textarea size='xs' placeholder='xs - Текстовое поле' design='material' />
    <Textarea size='s' placeholder='s - Текстовое поле' design='material' />
    <Textarea size='m' placeholder='m - Текстовое поле' design='material' />
    <Textarea size='l' placeholder='l - Текстовое поле' design='material' />
    <Textarea size='xl' placeholder='xl - Текстовое поле' design='material' />
    <Textarea design='material' />
    <Textarea placeholder='Текстовое поле' design='material' disabled />
    <Textarea placeholder='Текстовое поле' design='material' invalid />
```

## Состояния

#### invalid

Невалидное поле

```
    <Textarea placeholder='Текстовое поле' invalid />
    <Textarea placeholder='Текстовое поле' invalid design='material' />
```

#### disabled

Заблокированное поле

```
    <Textarea value='Текстовое поле' disabled />
    <Textarea value='Текстовое поле' disabled design='material' />
```

#### resize

Определяет возможность изменения высоты поля

```
    <Textarea placeholder='Текстовое поле' resize={false} />
```

#### maxRows

Максимальное значение количества видимых строк. По умолчанию равно **3**

```
    <Textarea placeholder='Текстовое поле' maxRows={1} />
```

#### showCounter

Показывает счетчик символов внутри поля. По умолчанию равно **false**. Если указан maxLength, в счетчике отображаются оба значения. При достижении максимального значения символов, поле принимает состояние invalid

```
    <Textarea placeholder='Текстовое поле' value={'test'} maxLength={10} showCounter />
```

#### Адаптив

Для компонента Textarea, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    {() => {
        const [value, setValue] = React.useState('text');
        const handleChange = (e, data) => setValue(data.value);
        return <Textarea size={{ base: 'xs', s: 's', m: 'xl' }} value={value} onChange={handleChange} />;
    }}
```