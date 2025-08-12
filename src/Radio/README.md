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

# Radio

Компонент выбора одного из множества значений. Позволяет пользователю выбрать один вариант из списка.
Если можно выбрать несколько вариантов или вы меняете состояние (вкл / выкл), то используйте `Checkbox` или `Switcher`.

Радио-кнопки используются когда:
- есть список вариантов, из которых можно выбрать только один;
- заранее выбран один из вариантов в списке;



```
    {() => {
        const [state, setState] = React.useState({ value: '2' });
        return (
            <Groups>
                <Radio
                    checked={state.value === '1'}
                    name='group0'
                    value='1'
                    onChange={({ value }) => setState({ value })}>
                    Radio #1
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group0'
                    value='2'
                    onChange={({ value }) => setState({ value })}>
                    Radio #2
                </Radio>
                <Radio
                    checked={state.value === '3'}
                    name='group0'
                    value='3'
                    onChange={({ value }) => setState({ value })}>
                    Radio #3
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group0'
                    value='4'
                    onChange={({ value }) => setState({ value })}>
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
                    onChange={({ value }) => setState({ value })}>
                    Radio #1
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group1'
                    value='2'
                    onChange={({ value }) => setState({ value })}>
                    Radio #2
                </Radio>
                <Radio
                    checked={state.value === '3'}
                    name='group1'
                    value='3'
                    onChange={({ value }) => setState({ value })}>
                    Radio #3
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group1'
                    value='4'
                    onChange={({ value }) => setState({ value })}>
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
                    onChange={({ value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '2'}
                    name='group2'
                    value='2'
                    onChange={({ value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '3'}
                    name='group2'
                    value='3'
                    onChange={({ value }) => setState({ value })}
                />
                <Radio
                    checked={state.value === '4'}
                    name='group2'
                    value='4'
                    onChange={({ value }) => setState({ value })}
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
                    onChange={({ value }) => setState({ value })}>
                    Size S
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group3'
                    value='2'
                    size='s'
                    disabled
                    onChange={({ value }) => setState({ value })}>
                    Size S
                </Radio>
                <Radio
                    checked={state.value === '3'}
                    name='group3'
                    value='3'
                    size='m'
                    onChange={({ value }) => setState({ value })}>
                    Size M
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group3'
                    value='4'
                    size='m'
                    disabled
                    onChange={({ value }) => setState({ value })}>
                    Size M
                </Radio>
                <Radio
                    checked={state.value === '5'}
                    name='group3'
                    value='5'
                    size='l'
                    onChange={({ value }) => setState({ value })}>
                    Size L
                </Radio>
                <Radio
                    checked={state.value === '6'}
                    name='group3'
                    value='6'
                    size='l'
                    disabled
                    onChange={({ value }) => setState({ value })}>
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
                    onChange={({ value }) => setState({ value })}>
                    Radio #1
                </Radio>
                <Radio
                    checked={state.value === '2'}
                    name='group4'
                    value='2'
                    onChange={({ value }) => setState({ value })}>
                    Radio #2
                </Radio>
                <Radio
                    disabled
                    checked={state.value === '3'}
                    name='group4'
                    value='3'
                    onChange={({ value }) => setState({ value })}>
                    Radio #3
                </Radio>
                <Radio
                    checked={state.value === '4'}
                    name='group4'
                    value='4'
                    onChange={({ value }) => setState({ value })}>
                    Radio #4
                </Radio>
                <Radio
                    invalid
                    checked={state.value === '5'}
                    name='group4'
                    value='5'
                    onChange={({ value }) => setState({ value })}>
                    Radio #5
                </Radio>
            </Groups>
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать выбранный вариант радио группы без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);
- viewOnlyDisableIcon - отключение иконки (тип boolean);

```
    {() => {
        const radioButtons = [
            {
                text: 'Radio #1',
                checked: false,
            },
            {
                text: 'Radio #2',
                checked: true,
            },
            {
                text: 'Radio #3',
                checked: false,
            },
        ];
        return (
            <>
                <Groups>
                    {radioButtons.map((radio) => (
                        <Radio viewOnly name='group5' checked={radio.checked}>{radio.text}</Radio>
                    ))}
                </Groups>
                <Groups>
                    {radioButtons.filter((radio) => radio.checked).map((radio) => (
                        <Radio viewOnly name='group5' checked={radio.checked}>{radio.text}</Radio>
                    ))}
                </Groups>
                <Groups>
                    {radioButtons.filter((radio) => radio.checked).map((radio) => (
                        <Radio viewOnly viewOnlyDisableIcon name='group5' checked={radio.checked}>{radio.text}</Radio>
                    ))}
                </Groups>
            </>
        );
    }}
```

## Адаптив

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
    <Radio name="group5" checked size={{ base: 's', s: 'm', m: 'l' }}>
        Radio
    </Radio>
```