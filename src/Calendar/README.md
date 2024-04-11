# Calendar

Данный компонент предназначен для наглядного представления данных типа `Date`. Используется в компоненте `Datepicker`.

## Импорт

```
import { Calendar } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| date | DateValue \| Date \| \| Date[] \| undefined | | Selected/active date |
| format | Format \| undefined |  |
| onChange | ((event: FormEvent<HTMLInputElement> | Event | null, options: DateResponse<DateValue> | DateResponse<Date>) => void) \| undefined |  |
| defaultViewMode | ViewMode \| undefined |  | Начальный экран для отображения |
| disabledDates | Date[] | DisabledDates | dateFunction  \| undefined |  | Неактивные дни |
| weekendDates | DisabledDates \| Date[] \| dateFunction \| undefined |  | Выходные дни |
| eventDates | Date[] \| eventDateFunction \| undefined |  | Даты событий |
| ranged | boolean \| undefined |  | Возможность выбора периода дат |
| dateStart | DateValue \| Date \| undefined |  | Начальная дата для периода дат |
| dateEnd | DateValue \| Date \| undefined |  | Конечная дата для периода дат |
| todayButton | boolean \| undefined |  | Возможность убрать или отобразить кнопку "Сегодня" |
| minDate | DateValue \| Date \| undefined |  | Нижняя граница доступных для выбора дат |
| maxDate | DateValue \| Date \| undefined |  | Верхняя граница доступных для выбора дат |
| mode | "day" \| "month" \| undefined |  | Тип календаря - выбор дня или месяца |
| onChangeMonth | ((event: FormEvent<HTMLInputElement> | Event | null, options: { date: Date | Date[]; value: string; }) => void) \| undefined |  | Обработчик для mode = ‘month’ |
| startingWeekDay | StartingWeekDay \| undefined |
| allowMultiple | boolean \| undefined |
| localization | Localization<CalendarLocalization, undefined> \| undefined |
| locale | Locale \| undefined |
| onChangeDisplayedDate | ((date: Date) => void) \| undefined |
| defaultDisplayedDate | Date \| undefined |


## Использование

```jsx
    <Calendar date={new Date(2020, 1, 5)} format='date' />
```

## Формат выбранной даты

Календарь в качестве даты может принимать значение в **2** форматах. За тип формата отвечает параметр **format** и может принимать значения **'date'** (по умолчанию) и **'object'**

```
    <Calendar date={new Date(2020, 1, 1)} format='date' />
    <Calendar date={{ year: 2020, month: 1, day: 1 }} format='object' />
```

## Режим отображения

Режим отображения календаря можно изменять с помощью параметра **defaultViewMode**.

#### Дни месяца

```
    <Calendar defaultViewMode='month' />
```


#### Месяцы

```
    <Calendar defaultViewMode='month_list' />
```


#### Годы

```
    <Calendar defaultViewMode='year_list' />
```

## Неактивные даты

Даты, которые нельзя выбирать можно задать через параметр **disabledDates**.

#### Массив дат

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        disabledDates={[
            new Date(new Date().getFullYear(), new Date().getMonth(), 6),
            new Date(new Date().getFullYear(), new Date().getMonth(), 4),
        ]}
    />
```

#### Выходные дни (суббота и воскресенье)

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        disabledDates={DisabledDates.WEEKENDS}
    />
```

#### Определение дней через функцию

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        disabledDates={(date) => {
            return date.getDay() === 5;
        }}
    />
```


## Специальные даты (даты событий)

Даты, которые отмечены меткой события задаются через параметр **eventDates**

#### Массив дат

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        eventDates={[
            new Date(new Date().getFullYear(), new Date().getMonth(), 6),
            new Date(new Date().getFullYear(), new Date().getMonth(), 4),
        ]}
    />
```

#### Определение дней через функцию

Для специальных дат есть возможность кастомного определения отображения дня. Сам компонент специального дня экпортируется с календарем **Calendar.EventDay**

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        eventDates={(date) => {
            return (
                date.getDay() === 5 && (
                    <Tooltip content="Thank God it's Friday" design='dark'>
                        <Calendar.Day>{date.getDate()}</Calendar.Day>
                    </Tooltip>
                )
            );
        }}
    />
```

## Выходные дни

Даты, которые должны быть отмечены как выходные дни, но доступны для выбора **weekendDates**

#### Массив дат

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        weekendDates={[
            new Date(new Date().getFullYear(), new Date().getMonth(), 6),
            new Date(new Date().getFullYear(), new Date().getMonth(), 4),
        ]}
    />
```

#### Определение дней через функцию

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        weekendDates={(date) => {
            return date.getDay() === 5;
        }}
    />
```

#### Выходные суббота и воскресенье

```
    <Calendar
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
        weekendDates={DisabledDates.WEEKENDS}
    />
```

## Кнопка "Сегодня"

Кнопка "Сегодня" предназначена для выбора сегодняшней даты в календаре. По умолчанию она отображется, чтобы её убрать необходимо установить **todayButton** равным **false**

```
    <Calendar todayButton={false} />
```

## Границы выбора дат

Для задания границ выбора дат отвечают параметры **minDate** и **maxDate**. Выбор даты вне этих границ бцдет недоступен.

```
    <Calendar
        ranged={true}
        minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
    />
```

## Выбор периода дат

Чтобы дать возможность задавать период дат необходимо установить значение **ranged** в **true**. За управление начальной и конечноый датами периода отвечают параметры **dateStart** и **dateEnd** соответственно.

```
    <Calendar
        ranged={true}
        dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
        dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
    />
```

## Выбор только месяца и года
```
    {() => {
        const [date, setDate] = React.useState();
        const handleChangeMonth = React.useCallback((e, { date, value }) => {
            setDate(date);
        }, []);
        return <Calendar date={date} mode='month' onChangeMonth={handleChangeMonth} />;
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
    <Calendar
        startingWeekDay={StartingWeekDay.Sunday}
        ranged={true}
        dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
        dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
    />
    <Calendar
        startingWeekDay={StartingWeekDay.Sunday}
        date={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    />
```

## Выбор нескольких дат

Для того, чтобы выбрать несколько дат нужно передать `allowMultiple` в `true`, даты передать как массив в `date`

```
    <Calendar date={[new Date(2020, 1, 1), new Date(2020, 1, 5)]} allowMultiple />
```

## Локализация

Для того чтобы локализовать календарь, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
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
        return <Calendar date={new Date(2020, 1, 1)} format='date' locale={enGB} localization={calendarLocalization} />;
    }}
```