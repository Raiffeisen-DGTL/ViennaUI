# Chips

Компонент `Chips` используется для сегментации и фильтрации контента.

## Импорт

```
import { Chips } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `PropsBox['$size']` | — |  |
| design | `PropsBox['$design']` | — |  |
| align | `PropsBox['$align']` | — |  |
| active | `null \| string \| string[]` | — |  |
| viewOnly | `boolean` | — |  |
| viewOnlyText | `React.ReactNode` | — |  |
| onPressEnter | `KeyboardEventHandler<HTMLDivElement>` | — |  |


# Chips

Компонент `Chips` предназначен для отображения нескольких опций, доступных для выбора или взаимодействия.
Он поддерживает как единичный, так и множественный выбор, а также используется для сегментации и фильтрации контента.



```
    <Chips>
        <Chips.Item id='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2'>Chip</Chips.Item>
        <Chips.Item id='3'>Chip</Chips.Item>
    </Chips>
```

## Внешний вид

Комопнент поддерживает 3 опции внешнего вида: `accent`, `primary` и `ghost`

```
    <Chips design='accent'>
        <Chips.Item id='1' tabIndex='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' tabIndex='1'>
            Chip
        </Chips.Item>
        <Chips.Item id='3' tabIndex='1'>
            Chip
        </Chips.Item>
    </Chips>
    <Chips design='primary'>
        <Chips.Item id='1' tabIndex='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' tabIndex='1'>
            Chip
        </Chips.Item>
        <Chips.Item id='3' tabIndex='1'>
            Chip
        </Chips.Item>
    </Chips>
    <Chips design='ghost'>
        <Chips.Item id='1' tabIndex='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' tabIndex='1'>
            Chip
        </Chips.Item>
        <Chips.Item id='3' tabIndex='1'>
            Chip
        </Chips.Item>
    </Chips>
```

## Размеры

С помощью параметра `size` можно установить размеры чипсов. Поддерживается 6 размеров `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```
    {() => {
        const [active, setActive] = React.useState(null);
        const onClick = (event) => setActive(event.target.id);
        return (
            <Chips onClick={onClick} active={active}>
                <Chips.Item size='xs' id='1' active>
                    Chip
                </Chips.Item>
                <Chips.Item size='s' id='2'>
                    Chip
                </Chips.Item>
                <Chips.Item size='m' id='3'>
                    Chip
                </Chips.Item>
                <Chips.Item size='l' id='4'>
                    Chip
                </Chips.Item>
                <Chips.Item size='xl' id='5'>
                    Chip
                </Chips.Item>
                <Chips.Item size='xxl' id='6'>
                    Chip
                </Chips.Item>
            </Chips>
        );
    }}
```

## Выравнивание по правому краю

```
    <Chips align='right'>
        <Chips.Item id='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2'>Chip</Chips.Item>
        <Chips.Item id='3'>Chip</Chips.Item>
    </Chips>
```

## Интерактив

#### Одиночный выбор

```
    {() => {
        const [active, setActive] = React.useState(null);
        const changeState = (id) => setActive(id);
        const onClick = (event) => changeState(event.target.id);
        const onPressEnter = (event) => changeState(event.target.id);
        return (
            <Chips design='primary' onClick={onClick} onPressEnter={onPressEnter} active={active}>
                <Chips.Item id='1' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='4' tabIndex='1' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        );
    }}
```

#### Одиночный выбор с возможностью убрать выбранный элемент

```
    {() => {
        const [active, setActive] = React.useState(null);
        const changeState = (id) => setActive(active !== id ? id : null);
        const onClick = (event) => changeState(event.target.id);
        const onPressEnter = (event) => changeState(event.target.id);
        return (
            <Chips design='accent' onClick={onClick} onPressEnter={onPressEnter} active={active}>
                <Chips.Item id='1' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex='1' isFocusStateVisible>
                    Chip
                </Chips.Item>
                <Chips.Item id='4' tabIndex='1' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        );
    }}
```

#### Множественный выбор

<p>
    <Alert>
        Обратите внимание, что для мульти выбора следует указать role='checkbox'. По умолчанию Chips.Item имеет
        role='option'
    </Alert>
</p>

```
    {() => (<ChipsMultiple />)}
```

```tsx
    const [active, setActive] = React.useState<string[]>([]);
    const changeState = (id) => setActive(state => state.includes(id) ? state.filter(i => i !== id) : [ ...state, id]);
    const onClick = (event) => changeState(event.currentTarget.id);
    const onPressEnter = (event) => changeState(event.currentTarget.id);

    return (
        <Chips active={active} onClick={onClick} onPressEnter={onPressEnter}>
            <Chips.Item id='1' tabIndex={1} role='checkbox'>
                Chip 1
            </Chips.Item>
            <Chips.Item id='2' tabIndex={1} role='checkbox'>
                Chip 2
            </Chips.Item>
            <Chips.Item id='3' tabIndex={1} role='checkbox'>
                Chip 3
            </Chips.Item>
            <Chips.Item id='4' tabIndex={1} role='checkbox' disabled>
                Chip 4
            </Chips.Item>
        </Chips>
    );
```

## Состояния

#### Disabled

```
    <Chips design='accent'>
        <Chips.Item id='1' disabled active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' disabled>
            Chip
        </Chips.Item>
        <Chips.Item id='3' disabled>
            Chip
        </Chips.Item>
    </Chips>
    <Chips design='primary'>
        <Chips.Item id='1' disabled active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' disabled>
            Chip
        </Chips.Item>
        <Chips.Item id='3' disabled>
            Chip
        </Chips.Item>
    </Chips>
    <Chips design='ghost'>
        <Chips.Item id='1' disabled active>
            Chip
        </Chips.Item>
        <Chips.Item id='2' disabled>
            Chip
        </Chips.Item>
        <Chips.Item id='3' disabled>
            Chip
        </Chips.Item>
    </Chips>
```

#### ViewOnly

Это состояние используется, когда нужно показать выбранные варианты без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    {() => {
        const [active, setActive] = React.useState(['1', '2']);
        return (
            <Chips active={active} viewOnly>
                <Chips.Item id='1'>Chip 1</Chips.Item>
                <Chips.Item id='2'>Chip 2</Chips.Item>
                <Chips.Item id='3'>Chip 3</Chips.Item>
                <Chips.Item id='4'>Chip 3</Chips.Item>
            </Chips>
        );
    }}
```