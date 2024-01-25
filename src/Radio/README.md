# Radio

Компонент выбора одного из множества значений

## Импорт

```
import { Hint } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | false | Отображаемый лейбл |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки |
| size | "s" \| "m" \| "l" \| undefined | false | Размеры |
| value\* | string | false | Значение компонента |
| invalid | boolean \| undefined | false | Компонент отображается как ошибочный если true |
| onBlur | RadioEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onFocus | RadioEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при получении фокуса компонентом |
| onChange | RadioEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при клике на компонент |
| checked | boolean \| undefined | false | Статус выбранного значения |
| name | string \| undefined | false |
| disabled | boolean \| undefined | false |

## Использование

> Компонент является контролируемым, то есть чтобы отобразить выбранные элементы, необходимо получить их значение через обработчик `onChange` и прокинуть проверку в `checked`.

```{() => {
    const [state, setState] = React.useState({ value: '2' });
    return (
        <Groups>
            <Radio
                checked={state.value === '1'}
                name='group1'
                value='1'
                onChange={(e, { value }) => setState({ value })}>
                Radio #1
            </Radio>
            <Radio
                checked={state.value === '2'}
                name='group1'
                value='2'
                onChange={(e, { value }) => setState({ value })}>
                Radio #2
            </Radio>
            <Radio
                checked={state.value === '3'}
                name='group1'
                value='3'
                onChange={(e, { value }) => setState({ value })}>
                Radio #3
            </Radio>
            <Radio
                checked={state.value === '4'}
                name='group1'
                value='4'
                onChange={(e, { value }) => setState({ value })}>
                Radio #4
            </Radio>
        </Groups>
    );
}}
```

## Выбранный элемент

##### Свойство `checked`

```
<Radio checked>
    Content
</Radio>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `s`, `m` (по умолчанию) и `l`.

## Состояния

##### Свойство `disabled`, `invalid`

Компонент имеет состояние `disabled` и `invalid`

```
<Radio
    disabled
    checked
>
    Content
</Radio>
<Radio
    invalid
    checked
>
    Content
</Radio>
```

## Значение

##### Свойство `value`

Значение, которое передается в компонент и потом возвращается `onChange`.

```
<Radio
    value='value-1'
    checked={state === 'value-1'}
>
    Content
</Radio>
```
