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
| size | ResponsiveProp<'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl', Breakpoints> \| undefined | | |
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


## Использование

# Input

Компонент ввода данных.


```
    <Input placeholder='Введите текст' />
```

## Использование

По умолчанию дизайн `outline` и размер `l`.

```
    <Input />
```

#### Дизайн и размеры

Компонент имеет стандартные размеры `xs`, `s`, `m`, `l`, `xl` и `xxl` и два дизайна `material` и `outline`.

```
    <Input placeholder='Placeholder' design='outline' size='xs' prefix={<TaskDone size='s' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='s' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='m' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='l' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='xl' prefix={<TaskDone size='l' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='xxl' prefix={<TaskDone size='l' />} postfix={'руб.'} />
```

Дизайн `material`

```
    <Input placeholder='Placeholder' design='material' size='xs' prefix={<TaskDone size='s' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='s' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='m' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='l' prefix={<TaskDone />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='xl' prefix={<TaskDone size='l' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='xxl' prefix={<TaskDone size='l' />} postfix={'руб.'} />
```

#### Состояния

Компонент имеет два состояния `disabled` и `invalid`

```
    <Input placeholder='Placeholder' invalid />
    <Input placeholder='Placeholder' disabled />
```

Дизайн `material`

```
    <Input placeholder='Placeholder' design='material' invalid />
    <Input placeholder='Placeholder' design='material' disabled />
```

#### Расширеннное отображение

Возможно добавление прификса или постфикса. Можно использовать текст, иконки или при необходимости другие элементы.

```
    <Input placeholder='Placeholder' prefix='RUR' postfix={'руб.'} />
    <Input placeholder='Placeholder' prefix={'RUR'} postfix={<Spinner />} />
    <Input placeholder='Placeholder' prefix={<TheaterOut />} postfix={<Violin />} />
    <Input placeholder='Placeholder' prefix={<TaskDone />} />
    <Input placeholder='Placeholder' postfix={<ToPay />} />
```

Дизайн `material`

```
    <Input placeholder='Placeholder' design='material' prefix='RUR' postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' prefix={'RUR'} postfix={<Spinner />} />
    <Input placeholder='Placeholder' design='material' prefix={<TheaterOut />} postfix={<Violin />} />
    <Input placeholder='Placeholder' design='material' prefix={<TaskDone />} />
    <Input placeholder='Placeholder' design='material' postfix={<ToPay />} />
```

#### Адаптив

Для компонента Input, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <Input size={{ base: 's', s: 'm', m: 'l' }} />
```