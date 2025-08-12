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
| onChange | ((event: FormEvent<HTMLInputElement> \| Event \| null, options: DateResponse<DateValue> \| DateResponse<Date>) => void) \| undefined |  |
| defaultViewMode | ViewMode \| undefined |  | Начальный экран для отображения |
| disabledDates | Date[] \| DisabledDates \| dateFunction  \| undefined |  | Неактивные дни |
| weekendDates | DisabledDates \| Date[] \| dateFunction \| undefined |  | Выходные дни |
| eventDates | Date[] \| eventDateFunction \| undefined |  | Даты событий |
| ranged | boolean \| undefined |  | Возможность выбора периода дат |
| dateStart | DateValue \| Date \| undefined |  | Начальная дата для периода дат |
| dateEnd | DateValue \| Date \| undefined |  | Конечная дата для периода дат |
| todayButton | boolean \| undefined |  | Возможность убрать или отобразить кнопку "Сегодня" |
| minDate | DateValue \| Date \| undefined |  | Нижняя граница доступных для выбора дат |
| maxDate | DateValue \| Date \| undefined |  | Верхняя граница доступных для выбора дат |
| mode | "day" \| "month" \| undefined |  | Тип календаря - выбор дня или месяца |
| onChangeMonth | ((event: FormEvent<HTMLInputElement> \| Event \| null, options: { date: Date \| Date[]; value: string; }) => void) \| undefined |  | Обработчик для mode = ‘month’ |
| startingWeekDay | StartingWeekDay \| undefined |
| allowMultiple | boolean \| undefined |
| localization | Localization<CalendarLocalization, undefined> \| undefined |
| locale | Locale \| undefined |
| onChangeDisplayedDate | ((date: Date) => void) \| undefined |
| defaultDisplayedDate | Date \| undefined |



# Calendar

Данный компонент предназначен для наглядного представления данных типа `Date`. Используется в компоненте `DatePicker`.



```
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

## Дефолтное отображение даты

Задать отображаемую дату можно свойством `defaultDisplayedDate`. Также есть колбэк функция изменения отображаемой даты `onChangeDisplayedDate`

```
    {()=> {
        const [displayedDate, setDisplayedDate] = React.useState(new Date('2024-01-01'));
        const handleChangeDisplayedDate = React.useCallback((date) => setDisplayedDate(date), []);
        return (
            <>
                <p>{ displayedDate.toString() }</p>
                <Calendar defaultDisplayedDate={displayedDate} onChangeDisplayedDate={handleChangeDisplayedDate}/>
            </>
        );
    }}
```

## Границы выбора дат

Для задания границ выбора дат отвечают параметры **minDate** и **maxDate**. Выбор даты вне этих границ будет недоступен.

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
        const handleChangeMonth = React.useCallback(({ date }) => {
            setDate(date);
        }, []);
        return <Calendar date={date} mode='month' onChangeMonth={handleChangeMonth} />;
    }}
```

## Начало недели с воскресенья

Для того чтобы установить первым днем недели воскресенье, необходимо передать в `startingWeekDay` значение 'sunday'.

```
    <Calendar
        startingWeekDay='sunday'
        ranged={true}
        dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
        dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
    />
    <Calendar
        startingWeekDay='sunday'
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
        const testIdDate = new Date();
        return <Calendar date={new Date(2020, 1, 1)} format='date' locale={enGB} localization={calendarLocalization} testId={{ btnCalendarCell: (testIdDate) => `${testIdDate}` }} />;
    }}
```


## Установка data-testid

Атрибут `data-testid` можно передать для кнопок: "Предыдущий год", "Следующий год", "Предыдущий месяц", ""Следующий месяц", "Сегодня", и для ячейки календаря. Передается с помощью  пропса `testId: CalendarTestId`.
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
export const defaultCalendarTestId: CalendarTestId = {
    btnYearPrev: 'calendar_btn-year-prev',
    btnYearNext: 'calendar_btn-year-next',
    btnMonthPrev: 'calendar_btn-month-prev',
    btnMonthNext: 'calendar_btn-month-next',
    btnViewMode: 'calendar_btn-view-mode',
    btnToday: 'calendar_btn-today',
    btnCalendarCell: (date: Date) => `calendar_${date.toISOString()}`,
};
```

```
    <Calendar date={new Date(2020, 1, 1)} testId={{ btnYearPrev: 'calendar.header.yearPrev', btnYearNext: 'calendar.header.yearNext', btnMonthPrev: 'calendar.header.monthPrev', btnMonthNext: 'calendar.header.monthNext', btnToday: 'calendar.body.today', btnViewMode: 'calendar.header.viewModa', btnCalendarCell: (date) => `${date}`}} />;
```