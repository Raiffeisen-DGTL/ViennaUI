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


# DatepickerRange

Компонент для выбора периода, но с возможностью указать только одну дату. Хорошо подойдет для выбора близких друг к другу дат.



```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return <DatepickerRange value={value} onChange={handleChange} />;
    }}
```

## Внешний вид

Компонент имеет два дизайна `material` и `outline`. По умолчанию дизайн `outline` и размер `l`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups>
                <DatepickerRange
                    design="outline"
                    value={value}
                    onChange={handleChange}
                />
                <DatepickerRange
                    design="material"
                    value={value}
                    onChange={handleChange}
                />
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
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups>
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="outline"
                    size="xs"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="outline"
                    size="s"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="outline"
                    size="l"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="outline"
                    size="xl"
                />
            </Groups>
        );
    }}
```

#### Material

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups>
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="material"
                    size="xs"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="material"
                    size="s"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="material"
                    size="l"
                />
                <DatepickerRange
                    value={value}
                    onChange={handleChange}
                    design="material"
                    size="xl"
                />
            </Groups>
        );
    }}
```

## Состояния

Компонент имеет два состояния `disabled` и `invalid`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <Groups>
                <Groups>
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        invalid
                    />
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        disabled
                    />
                </Groups>
                <Groups>
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        design="material"
                        invalid
                    />
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        design="material"
                        disabled
                    />
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
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                minDate={
                    new Date(new Date().getFullYear(), new Date().getMonth(), 2)
                }
                maxDate={
                    new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        15
                    )
                }
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
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                disabledDates={[
                    new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        6
                    ),
                    new Date(new Date().getFullYear(), new Date().getMonth(), 4)
                ]}
            />
        );
    }}
```

#### Выходные дни (суббота и воскресенье)

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                disabledDates={'weekends'}
            />
        );
    }}
```

#### Определение дней через функцию

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                disabledDates={date => {
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
        const handleChange = React.useCallback(({value}) => {
            setValue(value);
        }, []);
        return (
            <DatepickerRange
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
        const handleChange = React.useCallback((data) => {
            setValue(data.value);
        }, []);
        return (
            <DatepickerRange
                value={value}
                onChange={handleChange}
                eventDates={(date) => {
                    return (
                        date.getDay() === 5 && (
                            <Tooltip content="Thank God it's Friday" action={'hover'} design='dark'>
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
        const handleChange = React.useCallback(({ value, event, options }) => {
            setValue(value);
            setIsValid(!options.isDisabled);
        }, []);
        return (
            <FormField>
                <FormField.Label>Даты</FormField.Label>
                <FormField.Content>
                    <DatepickerRange
                        value={value}
                        onChange={handleChange}
                        disabledDates={[
                            new Date(
                                new Date().getFullYear(),
                                new Date().getMonth(),
                                6
                            ),
                            new Date(
                                new Date().getFullYear(),
                                new Date().getMonth(),
                                4
                            )
                        ]}
                        invalid={!isValid}
                    />
                    {!isValid && (
                        <FormField.Message color="critical">
                            Даннай период дат недоступен для выбора
                        </FormField.Message>
                    )}
                </FormField.Content>
            </FormField>
        );
    }}
```

## Начало недели с воскресенья

Для того чтобы установить первым днем недели воскресенье, необходимо передать в `startingWeekDay` значение `StartingWeekDay.Sunday`

```
type StartingWeekDay = 'sunday' | 'monday';
```

```
    <DatepickerRange startingWeekDay='sunday' />
```

## Вспомогательные свойства

#### isCalendarOpen

Свойство `isCalendarOpen` отвечает за изначальное отображение календаря (тип boolean)

```
    <DatepickerRange isCalendarOpen />
```

#### Свойство isCalendarAlwaysOpen

Свойство `isCalendarAlwaysOpen` позволяет календарю всегда быть открытым (тип boolean)

```
    <DatepickerRange isCalendarAlwaysOpen={false} />
```

#### defaultDisplayedDate

Свойство `defaultDisplayedDate` отвечает за отображение указанной даты по умолчанию (тип Date)

```
    <DatepickerRange defaultDisplayedDate={new Date('2024-01-01')} />
```

#### view

Свойство `view` отвечает за режим отображения "дни", "месяцы" и "года" (тип `month` | `year_list` | `month_list`)

```
    <DatepickerRange view="year_list" />
```

#### onChangeDisplayedDate

Свойство `onChangeDisplayedDate` - коллбэк при изменении отображаемого месяца/года (тип `(date: Date) => void`)

```
    <DatepickerRange onChangeDisplayedDate={(date) => console.log('onChangeDisplayedDate', date)} />
```

#### todayButton

Свойство `todayButton` — отображение кнопки "Сегодня" (тип `boolean`). При нажатии на кнопку выбирается текущая дата в зависимости от выбранных границ:
- Проставляется на первую позицию, если поле пустое или заполнены обе границы (при этом поле полностью очищается и остаётся только текущая дата);
- Проставляется на вторую позицию, если указана только начальная граница.

```
  {() => {
      const [value, setValue] = React.useState();
      const handleChange = React.useCallback(({ value }) => {
          setValue(value);
      }, []);
      return (
          <DatepickerRange
              value={value}
              todayButton
              onChange={handleChange}
          />
      );
  }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <DatepickerRange viewOnly value={'08.04.2024 - 14.04.2024'} />
```

## Локализация

Для того чтобы локализовать DatepickerRange, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

```
    {() => {
        /* import { enGB } from 'date-fns/locale'; */
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            setValue(value);
        }, []);
        const inputDateRangeLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range':
                'DD.MM.YYYY - DD.MM.YYYY'
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
            'ds.calendar.month.december': 'Dec.'
        };
        const datePickerLocalization = {
            ...inputDateRangeLocalization,
            ...calendarLocalization
        };
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

## Позиционирование календаря в контейнере

Свойство `dropdownPortal` принимает такие типы значений: `HTMLElement | React.MutableRefObject<HTMLElement | null> | null`. По умолчанию он указывает на body.

```
    {() => {
        const layout = React.useRef(null);
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((data) => setValue(data.value), []);
        React.useEffect(() => {
            const $layoutPage = document.getElementById('layout-page');
            if ($layoutPage) {
                layout.current = $layoutPage;
                $layoutPage.style.position = 'relative';
            }
        }, []);
        return <DatepickerRange
                value={value}
                dropdownPortal={layout}
                onChange={handleChange}
            />;
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для контейнера, бокса и календаря. Передается с помощью пропса `testId: CalendarTestId`.
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
export const defaultDatepickerRangeTestId: DatepickerRangeProps['testId'] = {
    container: 'datepicker-range_container',
    calendarBox: 'datepicker-range_calendar-box',
    calendar: defaultCalendarTestId,
};
```

```
{() => {
    const [value, setValue] = React.useState();
    const handleChange = React.useCallback(({ value }) => {
        setValue(value);
    }, []);
    return <DatepickerRange value={value} onChange={handleChange} testId={{ container: 'datepickerrange-container', calendarBox: 'datepickerrange-calendar-box', calendar: { container: 'datepickerrange-calendar-container' }}} />;
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
            <DatepickerRange
                value={value}
                onChange={handleChange}
                placement={'top-end'}
            />
        );
    }}
```