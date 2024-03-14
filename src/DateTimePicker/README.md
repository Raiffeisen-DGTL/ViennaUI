# DateTimePicker

Компонент для выбора даты и времени.

## Импорт

```
import { DateTimePicker } from 'vienna-ui';
```

## Свойства / Props

| Prop     | Type                                           | Default   | Description                        |
| -------- | ---------------------------------------------- | --------- | ---------------------------------- |
| design   | "outline" \| "material" \| undefined           | "outline" |
| size     | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | "l"       |
| value    | Date \| DateObj \| undefined                   | false     | Выбранное значение даты и времени  |
| timeFrom | string \| undefined                            | '00:00'   | Нижняя граница выбора времени      |
| timeTo   | string \| undefined                            | '23:30'   | Верхняя граница выбора времени     |
| step     | number \| undefined                            | 30        | Шаг для доступных значений времени |
| onChange | ChangeFunc \| undefined                        | false     |

## Использование

По умолчанию дизайн `outline` и размер `l`. Интервал по умолчанию 30 минут время начала 00:00 время окончания 23:30

```jsx
{
    () => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return <DateTimePicker onChange={changeHandler} value={value} />;
    };
}
```

## Использование с компонентом `Select`

Для выбора значения времени можно использовать компонент `Select`, если время необходимо выбрать из ограниченных значений, которые будут в выпадающем списке.

```jsx
import { Select } from 'vienna-ui';

{
    () => {
        const [value, setValue] = React.useState(new Date());
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select>
                        <Select.Option>10:00</Select.Option>
                        <Select.Option>12:30</Select.Option>
                        <Select.Option>15:00</Select.Option>
                        <Select.Option>20:00</Select.Option>
                    </Select>
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select options={['00:00', '18:00']} />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value} timeFrom='12:00' timeTo='13:00' step={5}>
                    <Select />
                </DateTimePicker>
            </Groups>
        );
    };
}
```

## Границы выбора времени

##### Свойство `timeFrom`, `timeTo`

Границы выбора времени определяют нижнее и верхнее значения при выборе времени из выпадающего списка компонента `Select`. По умолчанию `timeFrom='00:00` и `timeTo='23:30`

```jsx
<DateTimePicker timeFrom='05:00' timeTo='15:00'>
    <Select />
</DateTimePicker>
```

## Шаг для выбора времени

##### Свойство `step`

Шаг выбора времени определяет значения при выборе времени из выпадающего списка компонента `Select`. По умолчанию `step={30}`

```jsx
<DateTimePicker step={60}>
    <Select />
</DateTimePicker>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `l` (по умолчанию) и `xl`.

## Дизайн

##### Свойство `design`

Есть два доступных значения для свойства `design`: `outline` (по умолчанию) и `material`.

```jsx
<DateTimePicker design='material' />
<DateTimePicker design='outline' />
```

## Состояние неактивности

##### Свойство `disabled`

Для того, чтобы отобразить компонент, как неактивный, необходимо установить свойство `disabled` тому дочернему элементу: **календарю или полю для выбора/ввода даты, или им обоим**, выбор значения в котором должнет быть заблокирован.

```jsx
{
    () => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker disabled />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker disabled />
                    <InputDate disabled />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate disabled />
                </DateTimePicker>
            </Groups>
        );
    };
}
```

## Состояние ошибки

##### Свойство `invalid`

Для того, чтобы отобразить компонент, как невалидный, необходимо установить свойство `disabled` тому дочернему элементу: **календарю или полю для выбора/ввода даты, или им обоим**, значение в котором выбрано некорректно.

```jsx
{
    () => {
        const [value, setValue] = React.useState({ date: '22.02.1988', time: '09:00' });
        const changeHandler = React.useCallback((e, data) => setValue(data), []);
        return (
            <Groups design='vertical'>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker invalid />
                    <InputDate />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker invalid />
                    <InputDate invalid />
                </DateTimePicker>
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Datepicker />
                    <InputDate invalid />
                </DateTimePicker>
            </Groups>
        );
    };
}
```
