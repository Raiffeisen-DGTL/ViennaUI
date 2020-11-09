# Chips

Компонент `Chips` используется для сегментации и фильтрации контента.


## Импорт

```
import { Chips } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
active | string \| string[] \| undefined | false | Активные элементы
design | 'accent' \| 'primary' \| 'ghost' \| undefined | 'primary' |
align | string \| undefined | 'left' |
onClick | (event: React.FormEvent) => void | false |

## Свойства элемента / Item Props

Prop | Type | Default | Description
--- | --- | --- | ---
id | string \| undefined | false | Идентификатор элемента
active | boolean \| undefined | false | Активный элемент
disabled | boolean \| undefined | false | Заблокированный элемент
onFocus | ((event: FormEvent) => void) \| undefined | false |
onBlur | ((event: FormEvent) => void) \| undefined | false |
onKeyUp | ((event: FormEvent) => void) \| undefined | false |
onKeyDown | ((event: FormEvent) => void) \| undefined | false |
onMouseUp | ((event: FormEvent) => void) \| undefined | false |
onMouseDown | ((event: FormEvent) => void) \| undefined | false |
onMouseEnter | ((event: FormEvent) => void) \| undefined | false |
onMouseOut | ((event: FormEvent) => void) \| undefined | false |
onMouseLeave | ((event: FormEvent) => void) \| undefined | false |

## Использование

Компонент состоит из родительского контейнера `Chips` и дочерних элементов `Chips.Item`.

> Компонент является контролируемым, то есть чтобы отобразить элементы как активные,
> необходимо получить их значение через обработчик `onChange` и прокинуть в `active`.

```jsx
<Chips>
    <Chips.Item id='1' active>
        Chip
    </Chips.Item>
    <Chips.Item id='2'>Chip</Chips.Item>
    <Chips.Item id='3'>Chip</Chips.Item>
</Chips>
```

## Дизайн
##### Свойство `design`

Комопнент поддерживает 3 опции внешнего вида: `accent`, `primary` и `ghost`

```jsx
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
```

## Выравнивание
##### Свойство `align`

```jsx
<Chips align='right'>
    <Chips.Item id='1' active>
        Chip
    </Chips.Item>
    <Chips.Item id='2'>Chip</Chips.Item>
    <Chips.Item id='3'>Chip</Chips.Item>
</Chips>
```

## Активный элемент
##### Свойство `active`

Активный элемент мможно выбрать, как установив свойство `active` для компонента `Chips`, который принимает строку или массив строк `id` компонентов `Chips.Item`,
так и установив свойство `active` для компонента `Chips.Item` в `true`.

```jsx
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
            <Chips.Item id='4' tabIndex='1'>
                Chip
            </Chips.Item>
        </Chips>
    );
}}
```

```jsx
<Chips design='primary' onClick={onClick}>
    <Chips.Item id='1' tabIndex='1' active>
        Chip
    </Chips.Item>
    <Chips.Item id='2' tabIndex='1'>
        Chip
    </Chips.Item>
    <Chips.Item id='3' tabIndex='1'>
        Chip
    </Chips.Item>
    <Chips.Item id='4' tabIndex='1'>
        Chip
    </Chips.Item>
</Chips>
```

## Заблокированный элемент
##### Свойство `disabled`

```jsx
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
```
