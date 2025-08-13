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


# Switch

Компонент выбора одного из множества или нескольких значений, в зависимости от целей.
`Switch` - компонент для переключения состояний. Он позволяет пользователю выбрать один из двух взамоисключающих вариантов, при этом один из них предустановлен.



```
    {() => {
        const [state, setState] = React.useState(false);
        return (
            <Switcher checked={state} onChange={({ value }) => setState(value)}>
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
                    onChange={({ value }) => setState({ ...state, ...{ first: value } })}>
                    Switcher #1
                </Switcher>
                <Switcher
                    checked={state.second}
                    onChange={({ value }) => setState({ ...state, ...{ second: value } })}>
                    Switcher #2
                </Switcher>
            </Groups>
        );
    }}
```

#### Свойство checked

Свойство `checked` служит, чтобы контролировать состояние компонента.

```
    {() => {
        const [state, setState] = React.useState({ first: false, second: true });
        return (
            <Groups>
                <Switcher
                    checked={state.first}
                    onChange={({ value }) => setState({ ...state, ...{ first: value } })}>
                    Switcher #1
                </Switcher>
                <Switcher
                    checked={state.second}
                    onChange={({ value }) => setState({ ...state, ...{ second: value } })}>
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
                    onChange={({ value }) => setState({ ...state, ...{ first: value } })}
                />
                <Switcher
                    checked={state.second}
                    onChange={({ value }) => setState({ ...state, ...{ second: value } })}
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
                    onChange={({ value }) => setState({ ...state, ...{ first: value } })}>
                    Switcher Size M
                </Switcher>
                <Switcher
                    size='l'
                    checked={state.second}
                    onChange={({ value }) => setState({ ...state, ...{ second: value } })}>
                    Switcher Size L
                </Switcher>
            </Groups>
        );
    }}
```

## Состояние disabled

Компонент имеет состояние 'disabled'.

```
    {() => {
        const [state, setState] = React.useState({ first: false, second: true });
        return (
            <Groups>
                <Switcher
                    disabled
                    checked={state.first}
                    onChange={({ value }) => setState({ ...state, ...{ first: value } })}>
                    Switcher #1
                </Switcher>
                <Switcher
                    disabled
                    checked={state.second}
                    onChange={({ value }) => setState({ ...state, ...{ second: value } })}>
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
            <Switcher size={{ base: 'm', m: 'l' }} checked={state} onChange={({ value }) => setState(value)}>
                Adaptive switcher
            </Switcher>
        );
    }}
```

## Обработчики событий

Компонент поддерживает несколько обработчиков событий:

- `onBlur` - обработчик события при потере фокуса компонентом;
- `onFocus` - обработчик события при получении фокуса компонентом;
- `onChange` - обработчик события при клике на компонент;

```
    {() => {
        const [value, setValue] = React.useState(false);
        const handleChange = ({ value }) => setValue(value);
        return (
            <Switcher checked={value} onChange={handleChange}>
                Switcher
            </Switcher>
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение свитча без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <Switcher viewOnly checked={false}>Switcher</Switcher>
```