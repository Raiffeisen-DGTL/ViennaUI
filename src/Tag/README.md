# Tag
## Импорт

```
import { Tag } from 'vienna-ui';
``` 

## Tag Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | `BoxStyledProps['$design']` | — |  |
| size | `BoxStyledProps<B>['$size']` | — |  |
| disabled | `BoxStyledProps['$disabled']` | — |  |
| maxWidth | `BoxStyledProps['$maxWidth']` | — |  |
| disabledTabIndex | `boolean` | — |  |
| onClick | `() => void` | — |  |
| onDelete | `(event: MouseEvent<HTMLButtonElement>) => void` | — |  |


# Tag

Компонент используется для индикации и управления выбранными фильтрами, а также в элементах управления с множественным выбором,
таких как мультиселект. Теги помечают контент или объект, который выбирает пользователь. Помогают в быстром распознавании, навигации и управлении выбранными вариантами.



```
{() => {
    const moreDeleteHandler = () => {
        console.log("Tag");
    }
    return (
    <Tag
        size='l'
        onDelete={moreDeleteHandler}>
        Значение 1
    </Tag>
)
}}
```

## Внешний вид

Представлен в трех дизайнах `gray`, `primary`, `ghost`, состояние `disabled` и в четырех размерах `l`, `m`, `s`, `xs`

-   По-умолчанию дизайн `gray`

#### Gray

```
    <Tag
        size='l'
        design='gray'>
        Значение 1
    </Tag>
```

#### Primary

```
    <Tag
        size='l'
        design='primary'>
        Значение 1
    </Tag>
```

#### Ghost

```
    <Tag
        size='l'
        design='ghost'>
        Значение 1
    </Tag>
```

## Состояние disabled

```
    <Tag
        size='l'
        disabled>
        Значение 1
    </Tag>
```

## Размеры

Размер можно задать, передав props `size`

#### Размер `l`

```
    <Tag
        size='l'
        design='primary'>
        Значение 1
    </Tag>
```

#### Размер `m`

```
    <Tag
        size='m'
        design='primary'>
        Значение 1
    </Tag>
```

#### Размер `s`

```
    <Tag
        size='s'
         design='primary'>
        Значение 1
    </Tag>
```

#### Размер `xs`

```
    <Tag
        size='xs'
         design='primary'>
        Значение 1
    </Tag>
```

#### TagGroup

TagGroup - контейнер для тегов, позволяет добавить группу тегов.

```
    <Tag.Group offset={10} nowrap>
    <>
    <Tag
        size='m'
        design='primary'>
        Значение 1
    </Tag>
    <Tag
        size='m'
        design='primary'>
        Значение 2
    </Tag>
    </>
    </Tag.Group>
```

## Отключение доступа с клавиатуры

Доступность Tag c клавиатуры можно отключить с помощью свойства `disabledTabIndex`

```
    <Tag
        size='l'
        design='gray'
        disabledTabIndex>
        Значение 1
    </Tag>
```

## Максимальная ширина

По умолчанию максимальная ширина компонента составляет 650 пикселей. Это значение можно изменить с помощью свойства `maxWidth`, которое принимает строку.

```
    <Tag
        size='l'
        design='gray'
        maxWidth="100px">
        Значение 1
    </Tag>
```

## Обработчики клика

У компонента есть два обработчика клика:

- onClick обработчик клика по компоненту
- onDelete обработчик клика по крестику

```
    <Tag
        size='l'
        design='gray'
        onDelete={() => console.log('onDelete')}
        onClick={() => console.log('onClick')}
    >
        Значение 1
    </Tag>
```