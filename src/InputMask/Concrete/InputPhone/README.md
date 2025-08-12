# InputPhone
## Импорт

```
import { InputPhone } from 'vienna-ui';
``` 


# InputPhone

Компонент ввода номера телефона



```
    <InputPhone value={'4959191242'} />
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту `Input`. Для использования необходимо ознакомится с работой `IMask`. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({value}) => setValue(value), []);
        return (
            <Groups>
                <InputPhone value={value} onChange={handleChange} size='xs' />
                <InputPhone value={value} onChange={handleChange} size='s' />
                <InputPhone value={value} onChange={handleChange} size='l' />
                <InputPhone value={value} onChange={handleChange} size='xl' />
            </Groups>
        );
    }}
```

По умолчанию маска настроена для России.

```
    <InputPhone value={'4959191242'} disabled />
```

По умолчанию включена передача через `8` вместо `+7`

```
    <InputPhone value={'84959191242'} disabled />
```

## Пример с редактированием поля

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} onChange={handleChange} />;
    }}
```

## Вариант с предустановленой частью номера

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{7} (495) 000-00-00'} onChange={handleChange} />;
    }}
```

## Вариант со сложной маской телефона

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{42} (000) {234}-00-00'} smartPlaceholder="+42 ___ ___-__-__" placeholder="+42 ___ ___-__-__" onChange={handleChange} />;
    }}
```

## Вариант с передачей кастомного замещающего символа

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{42} (000) {234}-00-00'} smartPlaceholder="+42 ___ ___-__-__"  placeholder="+42 ___ ___-__-__" onChange={handleChange} />;
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputPhone viewOnly value={'+7 213 213-12-31'} />
```