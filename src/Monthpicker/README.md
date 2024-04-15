

## Импорт

```
import { Monthpicker } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | Date \| undefined |  | Выбранная дата |
| isCalendarOpen | boolean \| undefined |  | Отображение календаря |
| onChange | ((event: InputEvent<FormEvent<HTMLInputElement>> \| Event \| null, data: { value?: string \| undefined; date?: Date \| undefined; name?: string \| undefined; }) => void)  \| undefined |  |
| localization | Localization<CalendarLocalization, undefined> \| undefined |
| locale | Locale \| undefined |


# Monthpicker

Компонент, который помогает пользователю заполнить дату. Используется как самостоятельный компонент или как часть компонента Datepicker

## Использование

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.date), []);
        return <Monthpicker value={value} onChange={handleChange} />;
    }}
```

## Локализация

Для того чтобы локализовать Monthpicker, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.date), []);
        const calendarLocalization = {
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
        return (
            <Monthpicker
                value={value}
                placeholder='Choose month'
                onChange={handleChange}
                locale={enGB}
                localization={calendarLocalization}
            />
        );
    }}
```
