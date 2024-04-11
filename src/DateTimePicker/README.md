# DateTimePicker

Компонент для выбора даты и времени.

## Импорт

```
import { DateTimePicker } from 'vienna-ui';
```

## Свойства / Props

| Prop     | Type                                           | Default   | Description                        |
| -------- | ---------------------------------------------- | --------- | ---------------------------------- |
| design   | "outline" \| "material" \| undefined           |  |
| size     | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined |        |
| value    | Date \| DateObj \| undefined                   |      | Выбранное значение даты и времени  |
| timeFrom | string \| undefined                            |   | Нижняя граница выбора времени      |
| timeTo   | string \| undefined                            |    | Верхняя граница выбора времени     |
| step     | number \| undefined                            |         | Шаг для доступных значений времени |
| onChange | ChangeFunc \| undefined                        |      |
| localization | Localization<DatePickerLocalization, undefined> \| undefined |
| locale | Locale \| undefined |
| ref | Ref<HTMLDivElement> \| undefined |


## Внешний вид

По умолчанию дизайн `outline` и размер `l`. Интервал по умолчанию 30 минут время начала 00:00 время окончания 23:30

#### Outline

```
    {() => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value} />
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <Select />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select />
                </DateTimePicker>
            </Groups>
        );
    }}
```

#### Material

```
    {() => {
        const [value, setValue] = React.useState(new Date());
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker design='material' onChange={changeHandler} value={value} />
                <DateTimePicker design='material' onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker design='material' onChange={changeHandler} value={value}>
                    <Datepicker />
                    <Select />
                </DateTimePicker>
                <DateTimePicker design='material' onChange={changeHandler} value={value}>
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker design='material' onChange={changeHandler} value={value}>
                    <Select />
                </DateTimePicker>
            </Groups>
        );
    }}
```

## Произвольные интервалы времени

```
    {() => {
        const [value, setValue] = React.useState(new Date());
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select>
                        <Select.Option>10:00</Select.Option>
                        <Select.Option>12:30</Select.Option>
                        <Select.Option>15:00</Select.Option>
                        <Select.Option>20:00</Select.Option>
                    </Select>
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select options={['00:00', '18:00']} />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value} timeFrom='12:00' timeTo='13:00' step={5}>
                    <Select />
                </DateTimePicker>
            </Groups>
        );
    }}
```

## Состояния неактивности

```
    {() => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker disabled />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker disabled />
                    <InputDate disabled />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate disabled />
                </DateTimePicker>
            </Groups>
        );
    }}
```


## Состояния ошибки

```
    {() => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker invalid />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker invalid />
                    <InputDate invalid />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate invalid />
                </DateTimePicker>
            </Groups>
        );
    }}
```


## Локализация

Для того чтобы локализовать DateTimePicker, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        const inputDateLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM',
        };
        const calendarLocalization = {
            'ds.calendar.body.today': 'Today',
            'ds.calendar.day.monday': 'MO',
            'ds.calendar.day.tuesday': 'TU',
            'ds.calendar.day.wednesday': 'WE',
            'ds.calendar.day.thursday': 'TH',
            'ds.calendar.day.friday': 'FR',
            'ds.calendar.day.saturday': 'SA',
            'ds.calendar.day.sunday': 'SU',
            'ds.calendar.month.january': 'Jan.',
            'ds.calendar.month.february': 'Feb.',
            'ds.calendar.month.march': 'Mar.',
            'ds.calendar.month.april': 'Apr.',
            'ds.calendar.month.may': 'May',
            'ds.calendar.month.june': 'Jun.',
            'ds.calendar.month.july': 'Jul',
            'ds.calendar.month.august': 'Aug.',
            'ds.calendar.month.september': 'Sep.',
            'ds.calendar.month.october': 'Oct.',
            'ds.calendar.month.november': 'Nov.',
            'ds.calendar.month.december': 'Dec.',
        };
        const datePickerLocalization = { ...inputDateLocalization, ...calendarLocalization };
        return (
            <DateTimePicker
                value={value}
                onChange={changeHandler}
                localization={datePickerLocalization}
                locale={enGB}
            />
        );
    }}
```