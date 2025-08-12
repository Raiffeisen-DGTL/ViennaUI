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



```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(
            ({ value }) => setValue(value),
            []
        );
        return <Monthpicker value={value} onChange={handleChange} />;
    }}
```

## Свойство isCalendarOpen

Свойство `isCalendarOpen` отвечает за изначальное отображение календаря (тип boolean)

```
    <Monthpicker isCalendarOpen={false} />
```

## Свойство isCalendarAlwaysOpen

Свойство `isCalendarAlwaysOpen` позволяет календарю всегда быть открытым (тип boolean)

```
    <Monthpicker isCalendarAlwaysOpen={false} />
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

-   viewOnly - состояние `ViewOnly` (тип boolean);
-   viewOnlyText - текст значения (тип ReactNode);

```
    <Monthpicker viewOnly value={new Date('2020-01-01')} />
```

## Локализация

Для того чтобы локализовать Monthpicker, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(
            ({ value }) => setValue(value),
            []
        );
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
            'ds.calendar.month.december': 'Dec.'
        };
        return (
            <Monthpicker
                value={value}
                placeholder="Choose month"
                onChange={handleChange}
                locale={enGB}
                localization={calendarLocalization}
            />
        );
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки, для календаря. Передается с помощью пропса `testId?: {postfixIcon?: string; calendarBox?: string; calendar?: CalendarTestId; }`.
Интерфейс `CalendarTestId` имеет вид:

```
export interface CalendarTestId {
    btnYearPrev?: string;
    btnYearNext?: string;
    btnMonthPrev?: string;
    btnMonthNext?: string;
    btnViewMode?: string;
    btnToday?: string;
    btnCalendarCell?: (date: Date) => string;
}

```

Также добавлены дефолтные значения для `testId`:

```
export const defaultMonthpickerTestId: MonthPickerTestId = {
    postfixIcon: 'monthpicker_postfix-icon',
    calendarBox: 'monthpicker_calendar-box',
    calendar: defaultCalendarTestId,
};
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(
            ({ value }) => setValue(value),
            []
        );
        return (
            <Monthpicker
                value={value}
                onChange={handleChange}
                testId={{
                    calendarBox: 'Monthpicker.CalendarBox',
                    postfixIcon: 'Monthpicker.CalendarIcon'
                }}
            />
        );
    }}
```

## Позиционирование календаря

Календарь можно позиционировать с помощью свойства `placement` (значения могут быть: 'left', 'right', 'bottom', 'top', 'left-end', 'left-start', 'right-end', 'right-start', 'bottom-end', 'bottom-start', 'top-end', 'top-start'). По умолчанию календарь позиционируется внизу поля ввода. Если календарь не помещается на экране, то он будет позиционироваться там, где достаточно места.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(
            ({ value }) => setValue(value),
            []
        );
        return (
            <Monthpicker
                value={value}
                onChange={handleChange}
                placement={'left'}
            />
        );
    }}
```