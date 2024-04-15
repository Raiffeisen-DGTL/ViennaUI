# DatepickerRange

Компонент для выбора периода двт.

## Импорт

```
import { DatepickerRange } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | string \| \| undefined  |
| isCalendarOpen | boolean \| undefined |  | Флаг управляет отображением календаря из вне |
| eventDates | Date[] \| dateFunction \| undefined |  | Даты-события |
| minDate | Date \| undefined |  | Нижняя граница выбора даты |
| maxDate | Date \| undefined |  | Верхняя граница выбора даты |
| onChange | ((event: InputEvent<FormEvent<HTMLInputElement>> \| Event \| null, data: { value?: string \| undefined; valueAsDate: DateType; name?: string \| undefined; isDisabled?: boolean \| undefined; }) => void) \| undefined  |
| disabledDates | DisabledDates \| Date[] \| dateFunction \| undefined |  | Неактивные для выбора даты |
| startingWeekDay | 0 \| 1 \| undefined |
| onChangeDisplayedDate | ((date: Date) => void) \| undefined|
| view | ViewMode  \| undefined  |
| localization | Localization<DatePickerLocalization, undefined> \| undefined |

## Использование

По умолчанию дизайн `outline` и размер `l`.

> Компонент является контролируемым, то есть чтобы отобразить выбранную дату, необходимо получить ее значение через обработчик `onChange` и прокинуть в `value`.

```jsx
{
    () => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return <DatepickerRange value={value} onChange={handleChange} />;
    };
}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return <DatepickerRange value={value} onChange={handleChange} />;
    }}
```

## Внешний вид

Компонент имеет два дизайна `material` и `outline`. По умолчанию дизайн `outline` и размер `l`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return (
            <Groups>
                <DatepickerRange design='outline' value={value} onChange={handleChange} />
                <DatepickerRange design='material' value={value} onChange={handleChange} />
            </Groups>
        );
    }}
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `l` и `xl`.

#### Outline

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return (
            <Groups>
                <DatepickerRange value={value} onChange={handleChange} design='outline' size='xs' />
                <DatepickerRange value={value} onChange={handleChange} design='outline' size='s' />
                <DatepickerRange value={value} onChange={handleChange} design='outline' size='l' />
                <DatepickerRange value={value} onChange={handleChange} design='outline' size='xl' />
            </Groups>
        );
    }}
```

#### Material

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return (
            <Groups>
                <DatepickerRange value={value} onChange={handleChange} design='material' size='xs' />
                <DatepickerRange value={value} onChange={handleChange} design='material' size='s' />
                <DatepickerRange value={value} onChange={handleChange} design='material' size='l' />
                <DatepickerRange value={value} onChange={handleChange} design='material' size='xl' />
            </Groups>
        );
    }}
```

## Состояния

Компонент имеет два состояния `disabled` и `invalid`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return (
            <Groups>
                <Groups>
                    <DatepickerRange value={value} onChange={handleChange} invalid />
                    <DatepickerRange value={value} onChange={handleChange} disabled />
                </Groups>
                <Groups>
                    <DatepickerRange value={value} onChange={handleChange} design='material' invalid />
                    <DatepickerRange value={value} onChange={handleChange} design='material' disabled />
                </Groups>
            </Groups>
        );
    }}
```

## Границы выбора дат

Для задания границ выбора дат отвечают параметры **minDate** и **maxDate**. Выбор даты вне этих границ бцдет недоступен.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
                maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
            />
        );
    }}
```

## Неактивные даты

Даты, которые нельзя выбирать можно задать через параметр **disabledDates**.

#### Массив дат

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                disabledDates={[
                    new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                    new Date(new Date().getFullYear(), new Date().getMonth(), 4),
                ]}
            />
        );
    }}
```

#### Выходные дни (суббота и воскресенье)

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return <DatepickerRange value={value} onChange={handleChange} disabledDates={DisabledDates.WEEKENDS} />;
    }}
```

#### Определение дней через функцию

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                disabledDates={(date) => {
                    return date.getDay() === 5;
                }}
            />
        );
    }}
```

## Совмещение с FormField

```
    {() => {
        const [value, setValue] = React.useState();
        const [isValid, setIsValid] = React.useState(true);
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
            setIsValid(!data.isDisabled);
        }, []);
        return (
            <FormField>
                <FormField.Label>Даты</FormField.Label>
                <FormField.Content>
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        disabledDates={[
                            new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                            new Date(new Date().getFullYear(), new Date().getMonth(), 4),
                        ]}
                        invalid={!isValid}
                    />
                    {!isValid && (
                        <FormField.Message color='critical'>Даннай период дат недоступен для выбора</FormField.Message>
                    )}
                </FormField.Content>
            </FormField>
        );
    }}
```

## Начало недели с воскресенья

Для того чтобы установить первым днем недели воскресенье, необходимо передать в `startingWeekDay` значение `StartingWeekDay.Sunday`

```
enum StartingWeekDay {
    Sunday = 0,
    Monday = 1,
}
```

```
    <DatepickerRange startingWeekDay={StartingWeekDay.Sunday} />
```

## Локализация

Для того чтобы локализовать DatepickerRange, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        const inputDateRangeLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
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
        const datePickerLocalization = { ...inputDateRangeLocalization, ...calendarLocalization };
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                localization={datePickerLocalization}
                locale={enGB}
            />
        );
    }}
```