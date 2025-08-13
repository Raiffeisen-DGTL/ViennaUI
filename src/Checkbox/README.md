# Checkbox

Компонент для выбора нескольких значений из множества

## Импорт

```
import { Checkbox } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLLabelElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode |  | Отображаемый лейбл |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined |  | Сcылка на нативный элемент input, доступна после отрисовки |
| size | ResponsiveProp<"s" \| "m" \| "l" , B> \| undefined | | Размеры |
| invalid | boolean \| undefined |  | Компонент отображается как ошибочный если true |
| indeterminate | boolean \| undefined |  | Частично выбранный чекбокс. Нельзя использовать совместно с checked |
| onBlur | FocusEventHandler<HTMLInputElement> \| undefined |  | Обработчик события при потере фокуса компонентом |
| onFocus | FocusEventHandler<HTMLInputElement>  \| undefined |  | Обработчик события при получении фокуса компонентом |
| onChange | ChangeEventHandler<HTMLInputElement> \| undefined |  | Обработчик события при клике на компонент |
| checked | boolean \| undefined |  | Статус выбранного значения |
| disabled | boolean \| undefined |  |
| name | string \| undefined |  |
| active | boolean \| undefined |
| ref | Ref<HTMLInputElement> \| undefined |


## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| disabled | boolean \| undefined |
| checked | boolean \| undefined |
| name |  name \| undefined |


# Checkbox

Компонент позволяет пользователю выбрать один или несколько вариантов из списка.
Если можно выбрать только один вариант или вы меняете состояние (вкл / выкл), то используйте Radio или Switcher.

Чекбоксы используются когда:
- есть группа пунктов, из которых можно выбрать несколько или оставить группу без выбора;
- можно изменить настройки в интерфейсе с помощью одного чекбокса;



```
    <Checkbox checked onChange={(e) => console.log(e)}>
        Checkbox
    </Checkbox>
```

## Внешний вид

```
    {() => {
        const [state, setState] = React.useState({ checked: false, checked2: true, indeterminate: true });
        return (
            <Groups>
                <Checkbox
                    checked={state.checked}
                    onChange={(e) => setState({ ...state, checked: e.target.checked })}>
                    Checkbox
                </Checkbox>
                <Checkbox
                    checked={state.checked2}
                    onChange={(e) => setState({ ...state, checked2: e.target.checked })}>
                    Checkbox
                </Checkbox>
                <Checkbox
                    indeterminate={state.indeterminate}
                    onChange={(e) => setState({ ...state, indeterminate: e.target.checked })}>
                    Checkbox
                </Checkbox>
            </Groups>
        );
    }}
```

#### Без лейбла

```
    {() => {
        const [state, setState] = React.useState({ checked: false, checked2: true, indeterminate: true });
        return (
            <Groups>
                <Checkbox
                    checked={state.checked}
                    onChange={(e) => setState({ ...state, checked: e.target.checked })}
                />
                <Checkbox
                    checked={state.checked2}
                    onChange={(e) => setState({ ...state, checked2: e.target.checked })}
                />
                <Checkbox
                    indeterminate={state.indeterminate}
                    onChange={(e) => setState({ ...state, indeterminate: e.target.checked })}
                />
            </Groups>
        );
    }}
```

## Размеры

Компонент имеет стандартные размеры `s`, `m` и `l`.

```
    {() => {
        const [state, setState] = React.useState({ checked: false, checked2: true, checked3: true });
        return (
            <Groups>
                <Checkbox
                    size='s'
                    checked={state.checked}
                    onChange={(e) => setState({ ...state, checked: e.target.checked })}>
                    Checkbox Size S
                </Checkbox>
                <Checkbox
                    size='m'
                    checked={state.checked2}
                    onChange={(e) => setState({ ...state, checked2: e.target.checked })}>
                    Checkbox Size M
                </Checkbox>
                <Checkbox
                    size='l'
                    checked={state.checked3}
                    onChange={(e) => setState({ ...state, checked3: e.target.checked })}>
                    Checkbox Size L
                </Checkbox>
            </Groups>
        );
    }}
```

## Состояния

Компонент имеет состояния `disabled`, `invalid` и `active`

```
    {() => {
        const [state, setState] = React.useState({ checked: false, checked2: true, checked3: false });
        return (
            <Groups>
                <Checkbox
                    disabled
                    checked={state.checked}
                    onChange={(e) => setState({ ...state, checked: e.target.checked })}>
                    Checkbox
                </Checkbox>
                <Checkbox
                    invalid
                    checked={state.checked2}
                    onChange={(e) => setState({ ...state, checked2: e.target.checked })}>
                    Checkbox
                </Checkbox>
                <Checkbox
                    active
                    checked={state.checked3}
                    onChange={(e) => setState({ ...state, checked3: e.target.checked })}>
                    Checkbox
                </Checkbox>
            </Groups>
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать выбранный вариант чекбокса без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);
- viewOnlyDisableIcon - отключение иконки (тип boolean);

```
    {() => {
        const checkboxes = [
            {
                text: 'Checkbox',
                checked: false,
            },
            {
                text: 'Checkbox',
                checked: true,
            },
            {
                text: 'Checkbox',
                checked: false,
            },
        ];
        return (
            <>
                <Groups>
                    {checkboxes.map((checkbox) => (
                        <Checkbox viewOnly checked={checkbox.checked}>{checkbox.text}</Checkbox>
                    ))}
                </Groups>
                <Groups>
                    {checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => (
                        <Checkbox viewOnly checked={checkbox.checked}>{checkbox.text}</Checkbox>
                    ))}
                </Groups>
                <Groups>
                    {checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => (
                        <Checkbox viewOnly viewOnlyDisableIcon checked={checkbox.checked}>{checkbox.text}</Checkbox>
                    ))}
                </Groups>
            </>
        );
    }}
```

## Адаптив

Для компонента Checkbox, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <Checkbox size={{ base: 's', s: 'm', m: 'l' }}>Checkbox</Checkbox>
```