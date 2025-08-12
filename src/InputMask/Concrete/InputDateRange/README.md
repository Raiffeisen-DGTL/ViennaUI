# InputDateRange

## Импорт

```
import { InputDateRange } from 'vienna-ui';
``` 

# InputDateRange

Компонент ввода периода дат



```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputDateRange value={value} onChange={changeHandler} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputDateRange value={value} onChange={changeHandler} size='xs' />
                <InputDateRange value={value} onChange={changeHandler} size='s' />
                <InputDateRange value={value} onChange={changeHandler} size='l' />
                <InputDateRange value={value} onChange={changeHandler} size='xl' />
            </Groups>
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputDateRange viewOnly value={'08.04.2024 - 14.04.2024'} />
```

## Локализация

Для того чтобы локализовать InputDateRange, необходимо передать в `localization` обьект локализации

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        const inputDateRangeLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
        };
        return <InputDateRange value={value} onChange={changeHandler} localization={inputDateRangeLocalization} />;
    }}
```