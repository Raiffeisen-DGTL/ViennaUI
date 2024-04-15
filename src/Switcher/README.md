# Switcher

Компонент выбора одного из множества или нескольких значений, в зависимости от целей

## Импорт

```
import { Switcher } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| ref | Ref<HTMLInputElement> \| undefined |  | Сcылка на нативный элемент input, доступна после отрисовки |
| size |ResponsiveProp<'m' \| 'l', Breakpoints> \| undefined
| | Размеры |
| onBlur | SwitcherEvent<FocusEvent<HTMLInputElement, Element>>  \| undefined | | Обработчик события при потере фокуса компонентом |
| onFocus | SwitcherEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при получении фокуса компонентом |
| onChange | SwitcherEvent<ChangeEvent<HTMLInputElement>>  \| undefined |  | Обработчик события при клике на компонент |
| checked | boolean \| undefined |  | Статус выбранного значения |
| name | string \| undefined |  |
| disabled | boolean \| undefined |  |

## Использование

В качестве дочернего элемента передается label.
```
 {() => {
        const [state, setState] = React.useState(false);
        return (
            <Switcher checked={state} onChange={(e, data) => setState(data.value)}>
                Switcher #1
            </Switcher>
        );
    }}
```
## Внешний вид

```
    {() => {
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

#### Без лейбла

```
    {() => {
        const [state, setState] = React.useState({ first: false, second: true });
        return (
            <Groups>
                <Switcher
                    checked={state.first}
                    onChange={(e, data) => setState({ ...state, ...{ first: data.value } })}
                />
                <Switcher
                    checked={state.second}
                    onChange={(e, data) => setState({ ...state, ...{ second: data.value } })}
                />
            </Groups>
        );
    }}
```

## Размеры

Компонент имеет стандартные размеры `m` (по-умолчанию) и `l`.

```
    {() => {
        const [state, setState] = React.useState({ first: false, second: true });
        return (
            <Groups>
                <Switcher
                    checked={state.first}
                    onChange={(e, data) => setState({ ...state, ...{ first: data.value } })}>
                    Switcher Size M
                </Switcher>
                <Switcher
                    size='l'
                    checked={state.second}
                    onChange={(e, data) => setState({ ...state, ...{ second: data.value } })}>
                    Switcher Size L
                </Switcher>
            </Groups>
        );
    }}
```
## Состояния

Компонент имеет состояние 'disabled'

```
    {() => {
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
#### Адаптив

Для компонента Switcher, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    {() => {
        const [state, setState] = React.useState(false);
        return (
            <Switcher size={{ base: 'm', m: 'l' }} checked={state} onChange={(e, data) => setState(data.value)}>
                Adaptive switcher
            </Switcher>
        );
    }}
```