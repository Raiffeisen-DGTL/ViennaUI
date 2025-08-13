# InputDate
## Импорт

```
import { InputDate } from 'vienna-ui';
``` 


# InputDate

Компонент ввода даты



```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate value={value} onChange={handleChange} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

## Дата

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputDate value={value} onChange={handleChange} size="xs" />
                <InputDate value={value} onChange={handleChange} size="s" />
                <InputDate value={value} onChange={handleChange} size="l" />
                <InputDate value={value} onChange={handleChange} size="xl" />
            </Groups>
        );
    }}
```

## Дата и время

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

## Время

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='time' value={value} onChange={handleChange} />;
    }}
```

## Передача значения

#### Строка

```
    {() => {
        const [value, setValue] = React.useState('22.02.1988 09:30');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

#### Объект Date

```
    {() => {
        const [value, setValue] = React.useState(new Date());
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

#### Диапазон допустимых дат

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            console.log(value);
            setValue(value);
        }, []);
        return (
            <InputDate
                value={value}
                onChange={handleChange}
                min={new Date(2020, 5, 1)}
                max={new Date(2021, 5, 15)}
            />
        );
    }}
```

#### Диапазон допустимых дат (обход проблемы с равными годами)

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return (
            <InputDate
                value={value}
                onChange={handleChange}
                min={new Date(2020, 5, 1)}
                max={new Date(2020, 5, 15)}
                lazy={false}
            />
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
    <InputDate viewOnly value={new Date('2024-05-24')} type='date' />
```

## Локализация

Для того чтобы локализовать InputDate, необходимо передать в `localization` обьект локализации

```
    {() => {
        const inputDateLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM'
        };
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate value={value} onChange={handleChange} localization={inputDateLocalization} />;
    }}
```