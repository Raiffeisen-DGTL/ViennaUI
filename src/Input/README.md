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


# Input

Компонент ввода данных. Инструмент для ввода текстовой и числовой информации небольшого объема. Для объема в 5 и более слов рекомендуем использовать `Textarea`.



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
    <Input placeholder='Placeholder' design='outline' size='xs' prefix={<TaskDoneIcon size='s' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='s' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='m' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='l' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='xl' prefix={<TaskDoneIcon size='l' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='outline' size='xxl' prefix={<TaskDoneIcon size='l' />} postfix={'руб.'} />
```

Дизайн `material`

```
    <Input placeholder='Placeholder' design='material' size='xs' prefix={<TaskDoneIcon size='s' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='s' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='m' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='l' prefix={<TaskDoneIcon />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='xl' prefix={<TaskDoneIcon size='l' />} postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' size='xxl' prefix={<TaskDoneIcon size='l' />} postfix={'руб.'} />
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

#### Расширенное отображение

Возможно добавление префикса или постфикса. Можно использовать текст, иконки или при необходимости другие элементы.

```
    <Input placeholder='Placeholder' prefix='RUR' postfix={'руб.'} />
    <Input placeholder='Placeholder' prefix={'RUR'} postfix={<Spinner />} />
    <Input placeholder='Placeholder' prefix={<TheaterOutIcon />} postfix={<ViolinIcon />} />
    <Input placeholder='Placeholder' prefix={<TaskDoneIcon />} />
    <Input placeholder='Placeholder' postfix={<ToPayIcon />} />
```

Дизайн `material`

```
    <Input placeholder='Placeholder' design='material' prefix='RUR' postfix={'руб.'} />
    <Input placeholder='Placeholder' design='material' prefix={'RUR'} postfix={<Spinner />} />
    <Input placeholder='Placeholder' design='material' prefix={<TheaterOutIcon />} postfix={<ViolinIcon />} />
    <Input placeholder='Placeholder' design='material' prefix={<TaskDoneIcon />} />
    <Input placeholder='Placeholder' design='material' postfix={<ToPayIcon />} />
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

#### Принудительный ховер

Свойство `active` со значением true включает принудительный фокус на компоненте Input.

```
    <Input placeholder='Placeholder' prefix='RUR' postfix={'руб.'} active />
```

#### Выравнивание placeholder

Свойство `align` принимает значения "center" | "left" | "right". Отвечает за выравнивание placeholder по горизонтали.

```
    <Input placeholder='Placeholder' prefix='RUR' postfix={'руб.'} align='center' />
```

### Обработчики событий

Обработчики событий компонента `Input` позволяют отслеживать действия пользователя при взаимодействии с полем ввода. Их можно разделить на следующие группы:

---

#### 1. **Изменение значения**

События, связанные с изменением содержимого поля ввода.

* `onChange`

Срабатывает при изменении значения поля.

```typescript
const onChange = (args: {
    value: string;
    event: React.ChangeEvent<HTMLInputElement>;
    options: {
        name?: string | undefined;
    };
}) => {
    console.log('onChange', { value: args.value, event: args.event });
};
```

```
    {() => {
        const [value, setValue] = React.useState('')
        const onChange = React.useCallback(({ value, event, options }) => {
            setValue(value)
            console.log('onChange', { value, event, options })
        }, [])
        return <Input value={value} onChange={onChange} placeholder="Введите текст" />
    }}
```

---

#### 2. **Фокус и потеря фокуса**

События, связанные с фокусом на поле ввода.

* `onBlur`

Срабатывает при потере фокуса полем ввода.

```typescript
const onBlur = (
    event: React.FocusEvent<HTMLInputElement, Element>,
    data: {
        name?: string | undefined;
        value: string;
    }
) => {
    console.log('onBlur', { event, name: data.name, value: data.value });
};
```

```
    {() => {
        const onBlur = (event, { name, value }) => {
            console.log('onBlur', { event, name, value });
        };
        return <Input onBlur={onBlur} placeholder="Введите текст" />;
    }}
```

* `onFocus`

Срабатывает при получении фокуса полем ввода.

```typescript
const onFocus = (
    event: React.FocusEvent<HTMLInputElement, Element>,
    data: {
        name?: string | undefined;
        value: string;
    }
) => {
    console.log('onFocus', { event, name: data.name, value: data.value });
};
```

```
    {() => {
        const onFocus = (event, { name, value }) => {
            console.log('onFocus', { event, name, value });
        };
        return <Input onFocus={onFocus} placeholder="Введите текст" />;
    }}
```

---

#### 3. **Работа с клавиатурой**

События, связанные с нажатием клавиш на клавиатуре.

* `onKeyDown`

Срабатывает при нажатии клавиши (до ввода символа).

```typescript
const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('onKeyDown', { event });
};
```

```
    {() => {
        const onKeyDown = (event) => {
            console.log('onKeyDown', { event });
        };
        return <Input onKeyDown={onKeyDown} placeholder="Нажмите любую клавишу" />;
    }}
```

* `onKeyUp`

Срабатывает при отпускании клавиши.

```typescript
const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('onKeyUp', { event });
};
```

```
    {() => {
        const onKeyUp = (event) => {
            console.log('onKeyUp', { event });
        };
        return <Input onKeyUp={onKeyUp} placeholder="Отпустите клавишу" />;
    }}
```

* `onKeyPress` *(устаревшее, но всё ещё поддерживается)*

Срабатывает при нажатии клавиши с печатаемым символом.

```typescript
const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('onKeyPress', { event });
};
```

```
    {() => {
        const onKeyPress = (event) => {
            console.log('onKeyPress', { event });
        };
        return <Input onKeyPress={onKeyPress} placeholder="Введите символ" />;
    }}
```

---

#### 4. **Работа с буфером обмена**

События, связанные с копированием, вставкой и вырезанием текста.

* `onPaste`

Срабатывает при вставке текста из буфера обмена.

```typescript
const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('onPaste', { event });
};
```

```
    {() => {
        const onPaste = (event) => {
            console.log('onPaste', { event });
        };
        return <Input onPaste={onPaste} placeholder="Вставьте текст" />;
    }}
```

* `onCopy`

Срабатывает при копировании текста.

```typescript
const onCopy = (event: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('onCopy', { event });
};
```

```
    {() => {
        const onCopy = (event) => {
            console.log('onCopy', { event });
        };
        return <Input onCopy={onCopy} value="Скопируйте меня" />;
    }}
```

* `onCut`

Срабатывает при вырезании текста.

```typescript
const onCut = (event: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('onCut', { event });
};
```

```
    {() => {
        const onCut = (event) => {
            console.log('onCut', { event });
        };
        return <Input onCut={onCut} value="Вырежьте меня" />;
    }}
```


## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <Input viewOnly value={'Какой-то текст...'} />
```

## Установка data-testid

Атрибут `data-testid` можно передать для самого инпута, для обертки при состояни disabled и для обертки закрытия. Передается с помощью пропса `testId?: { input, inputDisabledWrapper, inputWrapper }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultInputTestId: InputTestId = {
    input: 'input_input',
    inputDisabledWrapper: 'input_disabled-wrapper',
    inputWrapper: 'input_wrapper',
};

```

```
    <Input testId={{ input: 'input_input', inputDisabledWrapper: 'input_disabled-wrapper', inputWrapper: 'input_wrapper' }}  value={'Какой-то текст...'} />
```