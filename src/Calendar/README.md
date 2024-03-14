# Calendar

Данный компонент предназначен для наглядного представления данных типа `Date`. Используется в компоненте `Datepicker`, `DatepickerRange` и `DateTimePicker`.

## Импорт

```
import { Calendar } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| date | DateValue \| Date \| undefined | false | Selected/active date |
| format | Format \| undefined | false |
| onChange | ((event: Event \| FormEvent \| null, options: DateResponse \| DateResponse) => void) \| undefined | false |
| defaultViewMode | ViewMode \| undefined | false | Начальный экран для отображения |
| disabledDates | DisabledDates \| Date[] \| dateFunction \| undefined | false | Неактивные дни |
| weekendDates | DisabledDates \| Date[] \| dateFunction \| undefined | false | Выходные дни |
| eventDates | Date[] \| eventDateFunction \| undefined | false | Даты событий |
| ranged | boolean \| undefined | false | Возможность выбора периода дат |
| dateStart | DateValue \| Date \| undefined | false | Начальная дата для периода дат |
| dateEnd | DateValue \| Date \| undefined | false | Конечная дата для периода дат |
| todayButton | boolean \| undefined | false | Возможность убрать или отобразить кнопку "Сегодня" |
| minDate | DateValue \| Date \| undefined | false | Нижняя граница доступных для выбора дат |
| maxDate | DateValue \| Date \| undefined | false | Верхняя граница доступных для выбора дат |
| mode | "day" \| "month" \| undefined | false | Тип календаря - выбор дня или месяца |
| onChangeMonth | ((event: Event \| FormEvent \| null, options: { date: Date; value: string; }) => void) \| undefined | false | Обработчик для mode = ‘month’ |
| localization | [CalendarLocalization](../Calendar/localization.ts) | defaultCalendarLocalization | Локализация |
| locale | [Locale](https://github.com/date-fns/date-fns/blob/master/src/locale/index.js) | ru | [Локализация дат](https://date-fns.org/v2.17.0/docs/Locale) |

## Использование

```jsx
<Calendar date={new Date(2020, 1, 1)} />
```

## Формат выбранной даты

##### Свойство `format`

Календарь в качестве даты может принимать значение в двух форматах. За тип формата отвечает параметр `format` и может принимать значения `date` (по умолчанию) и `object`

```jsx
<Calendar date={new Date(2020, 1, 1)} format='date' />
<Calendar date={{ year: 2020, month: 1, day: 1 }} format='object' />
```

## Режим отображения

##### Свойство `defaultViewMode`

Режим отображения календаря можно изменять с помощью параметра `defaultViewMode`.

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

##### Свойство `disabledDates`

Даты, которые нельзя выбирать можно задать через параметр `disabledDates`. Эти дни можно передать как мыссив, строку "weekends" (для субботы и воскресенья) или функцию.

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

##### Свойство `eventDates`

Даты, которые отмечены меткой события задаются через параметр `eventDates` Эти дни можно передать как мыссив или функцию.

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

Для специальных дат есть возможность кастомного определения отображения дня. Сам компонент даты события экпортируется с календарем `Calendar.EventDay`

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

##### Свойство `weekendDates`

Даты, которые должны быть отмечены как выходные дни, но доступны для выбора `weekendDates` Эти дни можно передать как мыссив, строку "weekends" (для субботы и воскресенья) или функцию.

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

##### Свойство `todayButton`

Кнопка "Сегодня" предназначена для выбора сегодняшней даты в календаре. По умолчанию она отображется, чтобы её убрать необходимо установить `todayButton` равным `false`

```jsx
<Calendar todayButton={false} />
```

## Границы выбора дат

##### Свойство `minDate`, `maxDate`

Для задания границ выбора дат отвечают параметры `minDate` и `maxDate`. Выбор даты вне этих границ бцдет недоступен.

```jsx
<Calendar
    ranged={true}
    minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
/>
```

## Выбор периода дат

##### Свойство `ranged`

Чтобы дать возможность задавать период дат необходимо установить значение `ranged` в `true`. За управление начальной и конечноый датами периода отвечают параметры `dateStart` и `dateEnd` соответственно.

```jsx
<Calendar
    ranged={true}
    dateStart={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    dateEnd={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
/>
```

## Выбор только месяца и года

##### Свойство `mode`

Чтобы ограничить выбор даты только месяцем и годом, нужно передать в свойство `mode` значение `month`

```jsx
{
    () => {
        const [date, setDate] = React.useState();
        const handleChangeMonth = React.useCallback((e, { date, value }) => {
            setDate(date);
        }, []);
        return <Calendar date={date} mode='month' onChangeMonth={handleChangeMonth} />;
    };
}
```

## Выбор даты / onChange

```jsx
{
    () => {
        const handleChange = React.useCallback((e, { date }) => {}, []);
        return <Calendar onChange={handleChange} />;
    };
}
```
