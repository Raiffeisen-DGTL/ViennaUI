# Datepicker

Компонент для выбора даты через календарь или ввод нужного значения.

## Импорт

```
import { Datepicker } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| value | string \| Date \| undefined |  | Выбранная дата передается строкой вида 01.01.2021 |
| isCalendarOpen | boolean \| undefined |  | Флаг управляет отображением календаря из вне |
| eventDates | Date[] \| eventDateFunction \| undefined |  | Даты-события |
| weekendDates | DisabledDates \| Date[] \| dateFunction \| undefined |  | Выходные даты |
| todayButton | boolean \| undefined |  | Отображение кнопки “Сегодня” |
| minDate | Date \| undefined |  | Нижняя граница выбора даты |
| maxDate | Date \| undefined |  | Верхняя граница выбора даты |
| onChange | ((event: Event \| InputEvent> \| null, data: { value?: string \| undefined; name?: string \| undefined; isDisabled?: boolean \| undefined; }) => void) \| undefined |  |
| disabledDates | DisabledDates \| Date[] \| dateFunction \| undefined |  | Неактивные для выбора даты |
| design | "outline" \| "material" \| undefined | "outline" | Дизайн |
| startingWeekDay | 0 \| 1 \| undefined |
| onChangeDisplayedDate | ((date: Date) => void) \| undefined|
| defaultDisplayedDate | Date  \| undefined |  
| invalid | boolean \| undefined |  |
| disabled | boolean \| undefined |  |
| dropdownPortal | HTMLElement \| MutableRefObject<HTMLElement \| null> \| null  \| undefined |  
| view | ViewMode  \| undefined  |
| postfix | ReactNode |  | Значение отображаемое в конце поля ввода |
| smartPlaceholder | ReactNode |  |
| onDispose | (() => void) \| undefined |  |
| localization | Localization<DatePickerLocalization, undefined> \| undefined |
| locale | Locale \| undefined |


## Использование

> Компонент является контролируемым, то есть чтобы отобразить выбранную дату, необходимо получить ее значение через обработчик `onChange` и прокинуть в `value`.

```jsx
{
    () => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return <Datepicker value={value} onChange={handleChange} />;
    };
}
```

#### Outline

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups>
                <Datepicker value={value} onChange={handleChange} design='outline' size='xs' />
                <Datepicker value={value} onChange={handleChange} design='outline' size='s' />
                <Datepicker value={value} onChange={handleChange} design='outline' size='l' />
                <Datepicker value={value} onChange={handleChange} design='outline' size='xl' />
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
                <Datepicker value={value} onChange={handleChange} design='material' size='xs' />
                <Datepicker value={value} onChange={handleChange} design='material' size='s' />
                <Datepicker value={value} onChange={handleChange} design='material' size='l' />
                <Datepicker value={value} onChange={handleChange} design='material' size='xl' />
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
                    <Datepicker value={value} onChange={handleChange} invalid />
                    <Datepicker value={value} onChange={handleChange} disabled />
                </Groups>
                <Groups>
                    <Datepicker value={value} onChange={handleChange} design='material' invalid />
                    <Datepicker value={value} onChange={handleChange} design='material' disabled />
                </Groups>
            </Groups>
        );
    }}
```


## Границы выбора дат

Для задания границ выбора дат отвечают параметры **minDate** и **maxDate**. Выбор даты вне этих границ будет недоступен.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <Datepicker
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
            <Datepicker
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

#### Выходные дни (суббота и воскресенье) - значение **'weekends'**

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return <Datepicker value={value} onChange={handleChange} disabledDates={DisabledDates.WEEKENDS} />;
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
            <Datepicker
                value={value}
                onChange={handleChange}
                disabledDates={(date) => {
                    return date.getDay() === 5;
                }}
            />
        );
    }}
```


## Специальные даты (даты событий)

Даты, которые отмечены меткой события задаются через параметр **eventDates**

#### Массив дат

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <Datepicker
                value={value}
                onChange={handleChange}
                eventDates={[
                    new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                    new Date(new Date().getFullYear(), new Date().getMonth(), 4),
                ]}
            />
        );
    }}
```

#### Определение дней через функцию

Для специальных дат есть возможность кастомного определения отображения дня. Сам компонент специального дня экпортируется с календарем **Calendar.EventDay**

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <Datepicker
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
                <FormField.Label>Дата</FormField.Label>
                <FormField.Content>
                    <Datepicker
                        value={value}
                        onChange={handleChange}
                        disabledDates={[
                            new Date(new Date().getFullYear(), new Date().getMonth(), 6),
                            new Date(new Date().getFullYear(), new Date().getMonth(), 4),
                        ]}
                        invalid={!isValid}
                    />
                    {!isValid && (
                        <FormField.Message color='critical'>Данная дата недоступна для выбора</FormField.Message>
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
    <Datepicker startingWeekDay={StartingWeekDay.Sunday} />
```

## Локализация

Для того чтобы локализовать Datepicker, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
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
        return <Datepicker value={value} onChange={handleChange} localization={datePickerLocalization} locale={enGB} />;
    }}
```


## Решения часто возникающих проблем

#### Проблема позиционирования календаря в контейнере со скроллбаром

Эта проблема связана с порталом для календаря, по умолчанию он указывает на body. Чтобы исправить проблему, необходимо встроить календарь в другой контейнер со скролбаром в котором находится Datepicker.
Для этого передайте в свойство `dropdownPortal` DOM узел, куда хотите встроить календарь.

Свойство `dropdownPortal` принимает такие типы значений: `HTMLElement | React.MutableRefObject<HTMLElement | null> | null`

И убедитесь, что у контейнера указано css свойство `position: relative`

Пример реализации:

```
    {() => {
        const layout = React.useRef(null);
        React.useEffect(() => {
            const $layoutPage = document.getElementById('layout-page');
            if ($layoutPage) {
                layout.current = $layoutPage;
                $layoutPage.style.position = 'relative';
            }
        }, []);
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return <Datepicker value={value} dropdownPortal={layout} onChange={handleChange} />;
    }}
```