# Radio

Компонент выбора одного из множества значений

## Импорт

```
import { Hint } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| ref | Ref<HTMLInputElement> \| undefined |
| size | ResponsiveProp<'s' \| 'm' \| 'l', Breakpoints> \| undefined |
| value\* | string |  | Значение компонента |
| invalid | boolean \| undefined |  | Компонент отображается как ошибочный если true |
| onBlur | RadioEvent<FocusEvent<HTMLInputElement, Element>>  \| undefined |  | Обработчик события при потере фокуса компонентом |
| onFocus | RadioEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при получении фокуса компонентом |
| onChange | RadioEvent<ChangeEvent<HTMLInputElement>>\| undefined |  | Обработчик события при клике на компонент |
| checked | boolean \| undefined |  | Статус выбранного значения |
| name | string \| undefined |  |
| disabled | boolean \| undefined |  |

## Использование

> Компонент является контролируемым, то есть чтобы отобразить выбранные элементы, необходимо получить их значение через обработчик `onChange` и прокинуть проверку в `checked`.

```
    {() => {
        const [state, setState] = React.useState({ value: '2' });
        return (
            <Groups>
                <Radio
                    checked={state.value === '1'}
                    name='group0'
                    value='1'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #1
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group0'
                    value='2'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #2
                </Radio>
                <Radio
                    checked={state.value === '3'}
                    name='group0'
                    value='3'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #3
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group0'
                    value='4'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #4
                </Radio>
            </Groups>
        );
    }}
```

## Внешний вид

```
    {() => {
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

#### Без лейбла

```
    {() => {
        const [state, setState] = React.useState({ value: '2' });
        return (
            <Groups>
                <Radio
                    checked={state.value === '1'}
                    name='group2'
                    value='1'
                    onChange={(e, { value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '2'}
                    name='group2'
                    value='2'
                    onChange={(e, { value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '3'}
                    name='group2'
                    value='3'
                    onChange={(e, { value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '4'}
                    name='group2'
                    value='4'
                    onChange={(e, { value }) => setState({ value })}
                />
            </Groups>
        );
    }}
```

## Размеры

Компонент имеет стандартные размеры `s`, `m` и `l`.

```
    {() => {
        const [state, setState] = React.useState({ value: '6' });
        return (
            <Groups>
                <Radio
                    checked={state.value === '1'}
                    name='group3'
                    value='1'
                    size='s'
                    onChange={(e, { value }) => setState({ value })}>
                    Size S
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group3'
                    value='2'
                    size='s'
                    disabled
                    onChange={(e, { value }) => setState({ value })}>
                    Size S
                </Radio>
                <Radio
                    checked={state.value === '3'}
                    name='group3'
                    value='3'
                    size='m'
                    onChange={(e, { value }) => setState({ value })}>
                    Size M
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group3'
                    value='4'
                    size='m'
                    disabled
                    onChange={(e, { value }) => setState({ value })}>
                    Size M
                </Radio>
                <Radio
                    checked={state.value === '5'}
                    name='group3'
                    value='5'
                    size='l'
                    onChange={(e, { value }) => setState({ value })}>
                    Size L
                </Radio>
                <Radio
                    checked={state.value === '6'}
                    name='group3'
                    value='6'
                    size='l'
                    disabled
                    onChange={(e, { value }) => setState({ value })}>
                    Size L
                </Radio>
            </Groups>
        );
    }}
```

## Состояния

Компонент имеет состояние `disabled` и `invalid`

```
    {() => {
        const [state, setState] = React.useState({ value: '2' });
        return (
            <Groups>
                <Radio
                    disabled
                    checked={state.value === '1'}
                    name='group4'
                    value='1'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #1
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group4'
                    value='2'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #2
                </Radio>
                <Radio
                    disabled
                    checked={state.value === '3'}
                    name='group4'
                    value='3'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #3
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group4'
                    value='4'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #4
                </Radio>
                <Radio
                    invalid
                    checked={state.value === '5'}
                    name='group4'
                    value='5'
                    onChange={(e, { value }) => setState({ value })}>
                    Radio #5
                </Radio>
            </Groups>
        );
    }}
```

#### Адаптив

Для компонента Radio, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <Radio checked size={{ base: 's', s: 'm', m: 'l' }}>
        Radio
    </Radio>
```
