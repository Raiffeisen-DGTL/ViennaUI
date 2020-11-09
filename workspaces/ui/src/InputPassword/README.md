# InputPassword

Компонент ввода пароля.

## Props
Prop | Type | Default | Description
--- | --- | --- | ---
reffalse | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки
sizefalse | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры
designfalse | "outline" \| "material" \| undefined | false | Дизайн
prefixfalse | ReactNode | false | Значанеие отображаемое перед компонентом
postfixfalse | ReactNode | false | Значение отображаемое после компонента
activefalse | boolean \| undefined | false | Принудительный ховер
onChangefalse | InputEvent> \| undefined | false | Обработчик события при вводе символов
onBlurfalse | InputEvent> \| undefined | false | Обработчик события при потере фокуса компонентом
onFocusfalse | InputEvent> \| undefined | false | Обработчик события при получении фокуса компонентом
onKeyDownfalse | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе
onKeyUpfalse | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе
onKeyPressfalse | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе
onPastefalse | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вставки
onCopyfalse | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик копирования
onCutfalse | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вырезки
invalidfalse | boolean \| undefined | false |
smartPlaceholderfalse | ReactNode | false |
onDesposefalse | (() => void) \| undefined | false |
valuefalse | string \| undefined | false | Значение в поле ввода
autoCapitalizefalse | string \| undefined | false | Автоматическая установка заглавной буквы
onMouseDownfalse | Function \| undefined | false | Обработчик события первого полупериода клика
onPointerDownfalse | Function \| undefined | false | Обработчик события первого полупериода клика

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
{() => {
    const [value, setValue] = React.useState('');
    const handleChange = React.useCallback((e, data) => {
        setValue(data.value);
    });
    return (
        <Groups design='vertical'>
            <InputPassword prefix={<Lock />} value={value} onChange={handleChange} />
        </Groups>
    );
}}
```

## Placeholder

```jsx
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
