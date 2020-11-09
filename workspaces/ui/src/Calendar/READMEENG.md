# Calendar

For displaying data of `Date` type. Uses in `Datepicker`, `DatepickerRange` and `DateTimePicker`  components.


## Import

```
import { Calendar } from 'vienna-ui';
```

## Props
Prop | Type | Default | Description
--- | --- | --- | ---
date | DateValue \| Date \| undefined | false | Selected/active date
format | Format \| undefined | false |
onChange | ((event: Event \| FormEvent \| null, options: DateResponse \| DateResponse) => void) \| undefined | false |
defaultViewMode | ViewMode \| undefined | false | Default type of calendar screen
disabledDates | DisabledDates \| Date[] \| dateFunction \| undefined | false | Disabled dates
weekendDates | DisabledDates \| Date[] \| dateFunction \| undefined | false | Weekend dates
eventDates | Date[] \| eventDateFunction \| undefined | false | Event Dates
ranged | boolean \| undefined | false | Controls selecting of dates period
dateStart | DateValue \| Date \| undefined | false | Starting date of dates period
dateEnd | DateValue \| Date \| undefined | false | Ending date of dates period
todayButton | boolean \| undefined | false | Controls showing of 'Today' button
minDate | DateValue \| Date \| undefined | false | Lower bound for selecting date
maxDate | DateValue \| Date \| undefined | false | Upper bound for selecting date
mode | "day" \| "month" \| undefined | false | Calendar type - day or month selecting
onChangeMonth | ((event: Event \| FormEvent \| null, options: { date: Date; value: string; }) => void) \| undefined | false | Handler for mode = ‘month’

## Usage

```jsx
<Calendar date={new Date(2020, 1, 1)} format='date' />
```

## Format of selected date

Календарь в качестве даты может принимать значение в **2** форматах. За тип формата отвечает параметр **format** и может принимать значения **'date'** (по умолчанию) и **'object'**

```jsx
<Calendar date={new Date(2020, 1, 1)} format='date' />
<Calendar date={{ year: 2020, month: 1, day: 1 }} format='object' />
```

## Режим отображения

Режим отображения календаря можно изменять с помощью параметра **defaultViewMode**.

#### Дни месяца

```jsx
<Calendar defaultViewMode='month' />
```

#### Месяцы

```jsx
<Calendar defaultViewMode='month_list' />
```

#### Годы

```jsx
<Calendar defaultViewMode='year_list' />
```

## Неактивные даты

Даты, которые нельзя выбирать можно задать через параметр **disabledDates**.

#### Массив дат

```jsx
<Calendar
    date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
    disabledDates={[
        new Date(new Date().getFullYear(), new Date().getMonth(), 6),
        new Date(new Date().getFullYear(), new Date().getMonth(), 4),
    ]}
/>
```

#### Выходные дни (суббота и воскресенье)

```jsx
<Calendar date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)} disabledDates='weekends' />
```

#### Определение дней через функцию

```jsx
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

```jsx
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

```jsx
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

```jsx
<Calendar
    date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
    weekendDates={[
        new Date(new Date().getFullYear(), new Date().getMonth(), 6),
        new Date(new Date().getFullYear(), new Date().getMonth(), 4),
    ]}
/>
```

#### Определение дней через функцию

```jsx
<Calendar
    date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)}
    weekendDates={(date) => {
        return date.getDay() === 5;
    }}
/>
```

#### Выходные суббота и воскресенье

```jsx
<Calendar date={new Date(new Date().getFullYear(), new Date().getMonth(), 6)} weekendDates='weekends' />
```

## Кнопка "Сегодня"

Кнопка "Сегодня" предназначена для выбора сегодняшней даты в календаре. По умолчанию она отображется, чтобы её убрать необходимо установить **todayButton** равным **false**

```jsx
<Calendar todayButton={false} />
```

## Границы выбора дат

Для задания границ выбора дат отвечают параметры **minDate** и **maxDate**. Выбор даты вне этих границ бцдет недоступен.

```jsx
<Calendar
    ranged={true}
    minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
/>
```

## Выбор периода дат

Чтобы дать возможность задавать период дат необходимо установить значение **ranged** в **true**. За управление начальной и конечноый датами периода отвечают параметры **dateStart** и **dateEnd** соответственно.

```jsx
<Calendar
    ranged={true}
    dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
/>
```

## Выбор только месяца и года

```jsx
{() => {
    const [date, setDate] = React.useState();
    const handleChangeMonth = React.useCallback((e, { date, value }) => {
        setDate(date);
    }, []);
    return <Calendar date={date} mode='month' onChangeMonth={handleChangeMonth} />;
}}
```
