# Chips

Компонент `Chips` используется для сегментации и фильтрации контента.

## Импорт

```
import { Chips } from 'vienna-ui';
```

## Свойства / Props

| Prop    | Type                                          | Default   | Description       |
| ------- | --------------------------------------------- | --------- | ----------------- |
| active  | string \| string[] \| undefined               |     | Активные элементы |
| design  | 'accent' \| 'primary' \| 'ghost' \| undefined | |
| align   | string \| undefined                           |   |
| onPressEnter | KeyboardEventHandler<HTMLDivElement> \| undefined |
| size  | 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| undefined | |

## Использование

Компонент состоит из родительского контейнера `Chips` и дочерних элементов `Chips.Item`.

> Компонент является контролируемым, то есть чтобы отобразить элементы как активные, необходимо получить их значение через обработчик `onChange` и прокинуть в `active`.

```jsx
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


## Right aligned

```
    <Chips align='right'>
        <Chips.Item id='1' active>
            Chip
        </Chips.Item>
        <Chips.Item id='2'>Chip</Chips.Item>
        <Chips.Item id='3'>Chip</Chips.Item>
    </Chips>
```

## Interactive

#### Single selection

```
    {() => {
        const [active, setActive] = React.useState(null);
        const onClick = (event) => setActive(event.target.id);
        return (
            <Chips design='primary' onClick={onClick} active={active}>
                <Chips.Item id='1' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='4' tabIndex='1' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        );
    }}
```

#### Single selection with toggle

```
    {() => {
        const [active, setActive] = React.useState(null);
        const onClick = (event) => {
            const id = event.target.id;
            setActive(active !== id ? id : null);
        };
        return (
            <Chips design='accent' onClick={onClick} active={active}>
                <Chips.Item id='1' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex='1'>
                    Chip
                </Chips.Item>
                <Chips.Item id='4' tabIndex='1' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        );
    }}
```

## Multiple selection with toggle

```
<p>
    <Alert>
        Обратите внимание, что для мульти выбора следует указать role='checkbox'. По умолчанию Chips.Item имеет
        role='option'
    </Alert>
</p>
```



```
    {() => (<ChipsMultiple />)}
```

```tsx
    const [active, setActive] = React.useState<string[]>([]);
    const onClick = (event) => {
        const id = event.currentTarget.id;
        setActive(state => state.includes(id) ? state.filter(i => i !== id) : [ ...state, id])
    };

    return (
        <Chips active={active} onClick={onClick}>
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