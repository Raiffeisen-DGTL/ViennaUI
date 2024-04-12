# InputPassword

Компонент ввода пароля.

## Props

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

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return <InputPassword value={value} onChange={handleChange} />;
    }}
```
## Внешний вид

Полностью наследует все поведение и свойства от компонента `Input` Пароль не хранится в разметке, но компонент полностью кастомизируется.

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <FormField>
                    <FormField.Label>Пароль</FormField.Label>
                    <FormField.Content>
                        <InputPassword value={value} onChange={handleChange} />
                    </FormField.Content>
                </FormField>
                <FormField>
                    <FormField.Label>Проверочное поле (двойного направления)</FormField.Label>
                    <FormField.Content>
                        <Input value={value} onChange={handleChange} />
                    </FormField.Content>
                </FormField>
            </Groups>
        );
    }}
```

## Размеры и дизайн

#### Outline

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <InputPassword size='xs' value={value} onChange={handleChange} />
                <InputPassword size='s' value={value} onChange={handleChange} />
                <InputPassword size='l' value={value} onChange={handleChange} />
                <InputPassword size='xl' value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```

#### Material

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <InputPassword design='material' size='xs' value={value} onChange={handleChange} />
                <InputPassword design='material' size='s' value={value} onChange={handleChange} />
                <InputPassword design='material' size='l' value={value} onChange={handleChange} />
                <InputPassword design='material' size='xl' value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```

## Состояния

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <InputPassword invalid value={value} onChange={handleChange} />
                <InputPassword disabled value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```

## Префикс

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <InputPassword prefix={<Locked />} value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```

## Placeholder

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        });
        return (
            <Groups design='vertical'>
                <InputPassword placeholder='Введите пароль' value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```