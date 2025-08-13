# DatePickerBeta

Компонент для выбора даты через календарь или ввод нужного значения.
В пилотном режиме данный компонент использует библиотеку react-number-format. Подробнее с библиотекой можно ознакомиться на странице документации

Данный компонент находится в стадии бета-тестирования, а это значит что:

Мы не гарантируем консистентность API компонента в рамках текущего мажорного релиза
Мы не гарантируем что компонент попадёт в следующий мажорный релиз
Компонент может работать нестабильно и поведение может отличаться от существующего Datepicker
Предложения и замечания по работе компонента можно присылать нам в Gitlab или в #design-system-web
Поле ввода помогает пользователю выбрать дату с помощью клавиатуры или с помощью мыши через окно календаря.

Отличается от стандартного поля ввода выделенной маской по формату даты и иконкой, при нажатии на которую открывается окно с выбором даты или периода. В нижней части календаря кнопка "Сегодня", которая поможет выбрать текущий день.

Виды даты в календаре: сегодняшняя, выбранная, заблокированная, дата при наведении.

## Импорт

```
import { DatePickerBeta } from 'vienna-ui';
```

# DatePickerBeta

В пилотном режиме данный компонент использует библиотеку `react-number-format`.
Подробнее с библиотекой можно ознакомиться на странице [документации](https://s-yadav.github.io/react-number-format/docs/intro/)

Данный компонент находится в стадии бета-тестирования, а это значит что:
- Мы не гарантируем консистентность API компонента в рамках текущего мажорного релиза
- Мы не гарантируем что компонент попадёт в следующий мажорный релиз
- Компонент может работать нестабильно и поведение может отличаться от существующего Datepicker
- Предложения и замечания по работе компонента можно присылать нам в [Gitlab](https://gitlabci.raiffeisen.ru/fcc-atlant/atlant/-/issues/new) или в [#design-system-web](https://mattermost.raiffeisen.ru/raiffeisenbank/channels/design-system-web)

Поле ввода помогает пользователю выбрать дату с помощью клавиатуры или с помощью мыши через окно календаря.

Отличается от стандартного поля ввода выделенной маской по формату даты и иконкой, при нажатии на которую открывается окно с выбором даты или периода. В нижней части календаря кнопка "Сегодня", которая поможет выбрать текущий день.

Виды даты в календаре: сегодняшняя, выбранная, заблокированная, дата при наведении.



```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return <DatePickerBeta value={value} onChange={handleChange} />;
    }}
```

## Использование

По умолчанию дизайн `outline` и размер `l`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => setValue(data.value), []);
        return <DatePickerBeta value={value} onChange={handleChange} />;
    }}
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `l` и `xl` и два дизайна `material` и `outline`.

## Внешний вид

#### Outline

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        return (
            <Groups>
                <DatePickerBeta value={value} onChange={handleChange} design='outline' size='xs' />
                <DatePickerBeta value={value} onChange={handleChange} design='outline' size='s' />
                <DatePickerBeta value={value} onChange={handleChange} design='outline' size='l' />
                <DatePickerBeta value={value} onChange={handleChange} design='outline' size='xl' />
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
                <DatePickerBeta value={value} onChange={handleChange} design='material' size='xs' />
                <DatePickerBeta value={value} onChange={handleChange} design='material' size='s' />
                <DatePickerBeta value={value} onChange={handleChange} design='material' size='l' />
                <DatePickerBeta value={value} onChange={handleChange} design='material' size='xl' />
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
                    <DatePickerBeta value={value} onChange={handleChange} invalid />
                    <DatePickerBeta value={value} onChange={handleChange} disabled />
                </Groups>
                <Groups>
                    <DatePickerBeta value={value} onChange={handleChange} design='material' invalid />
                    <DatePickerBeta value={value} onChange={handleChange} design='material' disabled />
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
            <DatePickerBeta
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
            <DatePickerBeta
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
        return <DatePickerBeta value={value} onChange={handleChange} disabledDates={DisabledDates.WEEKENDS} />;
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
            <DatePickerBeta
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
            <DatePickerBeta
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
            <DatePickerBeta
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
                    <DatePickerBeta
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

Для того чтобы установить первым днем недели воскресенье, необходимо передать в `startingWeekDay` значение `sunday`.

```
type StartingWeekDay = 'sunday' | 'monday';
```

```
    <DatePickerBeta startingWeekDay='sunday' />
```

## Локализация

Для того чтобы локализовать DatePickerBeta, необходимо передать в `locale` значение из `date-fns/locale`, передать в `localization` обьект локализации

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
        const DatePickerBetaLocalization = { ...inputDateLocalization, ...calendarLocalization };
        return <DatePickerBeta value={value} onChange={handleChange} localization={DatePickerBetaLocalization} locale={enGB} />;
    }}
```