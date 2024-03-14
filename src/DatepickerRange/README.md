# DatepickerRange

Компонент для выбора периода двт.

## Импорт

```
import { DatepickerRange } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | string \| undefined | false | Выбранная дата передается строкой вида 01.01.2021-12.01.2021 |
| isCalendarOpen | boolean \| undefined | false | Флаг управляет отображением календаря из вне |
| eventDates | Date[] \| dateFunction \| undefined | false | Даты-событие |
| minDate | Date \| undefined | false | Нижняя граница выбора даты |
| maxDate | Date \| undefined | false | Верхняя граница выбора даты |
| onChange | ((event: Event \| InputEvent> \| null, data: { value?: string \| undefined; valueAsDate: DateType; name?: string \| undefined; isDisabled?: boolean \| undefined; }) => void) \| undefined | false |
| disabledDates | DisabledDates \| Date[] \| dateFunction \| undefined | false | Неактивные для выбора даты |
| design | "outline" \| "material" \| undefined | false | Дизайн |
| prefix | ReactNode | false | Значанеие отображаемое перед компонентом |
| autoCapitalize | string \| undefined | false | Автоматическая установка заглавной буквы |
| onCopy | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик копирования |
| onCut | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вырезки |
| onFocus | InputEvent> \| undefined | false | Обработчик события при получении фокуса компонентом |
| onBlur | InputEvent> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onKeyDown | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onKeyUp | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onMouseDown | Function \| undefined | false | Обработчик события первого полупериода клика |
| onPointerDown | Function \| undefined | false | Обработчик события первого полупериода клика |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки |
| invalid | boolean \| undefined | false |
| active | boolean \| undefined | false | Принудительный ховер |
| postfix | ReactNode | false | Значение отображаемое в конце поля ввода |
| smartPlaceholder | ReactNode | false |
| onDispose | (() => void) \| undefined | false |
| localization | [DatePickerRangeLocalization](../DatepickerRange/localization.ts) |  | Локализация |
| locale | [Locale](https://github.com/date-fns/date-fns/blob/master/src/locale/index.js) | ru | [Локализация дат](https://date-fns.org/v2.17.0/docs/Locale) |

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

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `l` (по умолчанию) и `xl`.

## Дизайн

##### Свойство `design`

Есть два доступных значения для свойства `design`: `outline` (по умолчанию) и `material`.

```
<DatepickerRange design='outline' />
<DatepickerRange design='material' />
```

## Состояния

##### Свойство `disabled`, `invalid`

Компонент имеет два состояния `disabled` и `invalid`.

```jsx
<DatepickerRange value={value} onChange={handleChange} invalid />
<DatepickerRange value={value} onChange={handleChange} disabled />
```

## Границы выбора дат

##### Свойство `minDate`, `maxDate`

Для задания границ выбора дат отвечают параметры `minDate` и `maxDate`. Выбор даты через интерфейс календаря вне этих границ бцдет недоступен.

```jsx
<DatepickerRange
    minDate={new Date(new Date().getFullYear(), new Date().getMonth(), 2)}
    maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), 15)}
/>
```

## Неактивные даты

##### Свойство `disabledDates`

Даты, которые нельзя выбирать можно задать через параметр `disabledDates`. Эти дни можно передать как мыссив, строку "weekends" (для субботы и воскресенья) или функцию.

#### Массив дат

```jsx
<DatepickerRange
    value={value}
    onChange={handleChange}
    disabledDates={[
        new Date(new Date().getFullYear(), new Date().getMonth(), 6),
        new Date(new Date().getFullYear(), new Date().getMonth(), 4),
    ]}
/>
```

#### Выходные дни (суббота и воскресенье)

```jsx
<DatepickerRange value={value} onChange={handleChange} disabledDates='weekends' />
```

#### Определение дней через функцию

```jsx
<DatepickerRange
    value={value}
    onChange={handleChange}
    disabledDates={(date) => {
        return date.getDay() === 5;
    }}
/>
```

## Специальные даты (даты-событий)

##### Свойство `eventDates`

Даты, которые отмечены меткой события задаются через параметр `eventDates` Эти дни можно передать как мыссив или функцию.

#### Массив дат

```jsx
<DatepickerRange
    value={value}
    onChange={handleChange}
    eventDates={[
        new Date(new Date().getFullYear(), new Date().getMonth(), 6),
        new Date(new Date().getFullYear(), new Date().getMonth(), 4),
    ]}
/>
```

#### Определение дней через функцию

Для специальных дат есть возможность кастомного определения отображения дня. Сам компонент даты события экпортируется с календарем `Calendar.EventDay`

```jsx
<DatepickerRange
    value={value}
    onChange={handleChange}
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

## Управление состоянием открытия календаря из родительского компонента

##### Свойство `isCalendarOpen`

Состоянием отображения календаря можно управлять с помощью свойства `isCalendarOpen`.

```jsx
{
    () => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return <DatepickerRange isCalendarOpen={!value} value={value} onChange={handleChange} />;
    };
}
```

## Элемент, отображаемый в конце поля ввода

##### Свойство `postfix`

Свойство `postfix` управляет отображением элемента в конце поля ввода. По умолчанию отображается иконка календаря.

```jsx
<DatepickerRange postfix={<Icon />} />
```

## Локализация

Для того чтобы локализовать DatepickerRange, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```jsx harmony
{
    () => {
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
    };
}
```
