# Switcher

Компонент выбора одного из множества или нескольких значений, в зависимости от целей

## Импорт

```
import { Switcher } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | false | Отображаемый лейбл |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки |
| size | "m" \| "l" \| undefined | "m" | Размеры |
| onBlur | SwitcherEvent<ChangeEvent<HTMLInputElement>> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onFocus | SwitcherEvent<ChangeEvent<HTMLInputElement>> \| undefined | false | Обработчик события при получении фокуса компонентом |
| onChange | SwitcherEvent<ChangeEvent<HTMLInputElement>> \| undefined | false | Обработчик события при клике на компонент |
| checked | boolean \| undefined | false | Статус выбранного значения |
| name | string \| undefined | false |
| disabled | boolean \| undefined | false |

## Использование

В качестве дочернего элемента передается label.

> Компонент является контролируемым, то есть чтобы отобразить чтобы отобразить выбранные элементы, необходимо получить ее значение через обработчик `onChange` и прокинуть проверку в `checked`.

```{() => {
    const [state, setState] = React.useState({ first: false, second: true });
    return (
        <Groups>
            <Switcher
                checked={state.first}
                onChange={(e, data) => setState({ ...state, ...{ first: data.value } })}>
                Switcher #1
            </Switcher>
            <Switcher
                checked={state.second}
                onChange={(e, data) => setState({ ...state, ...{ second: data.value } })}>
                Switcher #2
            </Switcher>
        </Groups>
    );
}}
```

## Выбранный элемент

##### Свойство `checked`

```
<Switcher checked>
    Content
</Switcher>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `m` (по-умолчанию) и `l`.

## Состояния

##### Свойство `disabled`

Компонент имеет состояние 'disabled'

```{() => {
    const [state, setState] = React.useState({ first: false, second: true });
    return (
        <Groups>
            <Switcher
                disabled
                checked={state.first}
                onChange={(e, data) => setState({ ...state, ...{ first: data.value } })}>
                Switcher #1
            </Switcher>
            <Switcher
                disabled
                checked={state.second}
                onChange={(e, data) => setState({ ...state, ...{ second: data.value } })}>
                Switcher #2
            </Switcher>
        </Groups>
    );
}}
```
