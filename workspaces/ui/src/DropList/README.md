# DropList

Компонент выпадающих списков.

## Импорт

```
import { DropList } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "m" \| "l" \| undefined | "m" |
| maxHeight | number \| undefined | false | Максимальная высота |
| fitItems | boolean \| undefined | false | Компонент подстраивается под ширину ближайшего родителя |
| align | "horizontal" \| "vertical" \| undefined | "vertical" | Выравнивание |
| float | "start" \| "end" \| undefined | "start" | Место появление списка относитетельно его ширины |
| scrollable | boolean \| undefined | false | Возможность прокручивать список |
| margins | { x: number; y: number; } \| undefined | false |
| fixed | boolean \| undefined | false | Фиксируется по центру |

## Использование

Компонент состоит из родительского контейнера `DropList` и элементов выпадающего списка `DropList.Item`. Для управления отображением компонента необходимо использовать state, который контролирует нажатие на активирующий элемент.

```jsx
{
    () => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <Man2 />
                {isOpen && (
                    <DropList>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </RoundIcon>
        );
    };
}
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры — `s`, `m` (по умолчанию) и `l`.

## Наследуемая ширина

##### Свойство `fitItems`

Чтобы ширина контейнера с выпадающим списком была равна ширине родителя, необходимо передать свойство `fitItems`.

```jsx
<DropList fitItems>
    <DropList.Item>Item 1</DropList.Item>
    <DropList.Item>Very very long Item 2</DropList.Item>
</DropList>
```

## Расположение

##### Свойство `float`

Свойство отвечает за расположение списка при появлении относительно ширины компонента: `start`, `end`.

```jsx
<DropList float='end'>
    <DropList.Item>Item 1</DropList.Item>
    <DropList.Item>Very very long Item 2</DropList.Item>
</DropList>
```

## Прокрутка списка

##### Свойство `scrollable`

Свойство отвечает за возмможность прокручивать элементы списка внутри контейнера.

```jsx
<DropList scrollable>
    <DropList.Item>Item 1</DropList.Item>
    <DropList.Item>Very very long Item 2</DropList.Item>
</DropList>
```
