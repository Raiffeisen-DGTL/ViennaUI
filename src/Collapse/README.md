# Collapse

## Импорт

```
import { Collapse } from 'vienna-ui';
``` 

## CollapseProps

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| open | `WrapperProps['open']` | — |  |
| initiallyOpen | `boolean` | — |  |
| size | `PropsCollapseWrapper['$size']` | — |  |
| onOpenChange | `WrapperProps['onOpenChange']` | — |  |

# Collapse

Компонент `Collapse` используется для отображения и скрытия контента. Он полезен для скрытия дополнительного контента или необязательных полей в формах.



```
    <Collapse header='The text for the label'>Content: text, table, image or another component</Collapse>
```

## Использование

- `Collapse` — компонент управления видимостью контента.
- Позволяет экономить место на экране и создавать визуальную иерархию контента. Он визуально менее выделяется, нежели `Accordion`, поэтому лучше подходит для контента, который не так важен пользователям.
- Раскрытие происходит при нажатии на заголовок.
- Может содержать в себе любой контент: текст, таблицу, изображение, видео и даже другой `Collapse`.

#### Заголовок

В заголовок помимо строки есть возможность передать любой компонент

```
    <Collapse header={
        <>
            <ViolinIcon /> Collapse header
        </>
    }>Content: text, table, image or another component</Collapse>
```

#### Различный контент

В качестве `children` в компонент можно передать любой компонент

```
    <Collapse header='The text for the label'>
        <ViolinIcon /> Put your content here <Button>Click</Button>
    </Collapse>
```

#### Изначально расскрытый контент

За это отвечает свойство `initiallyOpen`, которое имеет тип `boolean`

```
    <Collapse header='The text for the label' initiallyOpen={true}>Content: text, table, image or another component</Collapse>
```

#### Свойство onOpenChange

`onOpenChange` - коллбэк открытия/закрытия контента (имеет тип `(open: boolean) => void`)

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Collapse header='The text for the label' onOpenChange={setIsOpen}>Content: text, table, image or another component</Collapse>
                <p>{isOpen ? 'Открыт' : 'Закрыт'}</p>
            </>
        );
    }}
```

#### Управление состоянием

Можно управлять состоянием открытия/закрытия коллапса с помощью свойства `open`.

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(true);
        return (
            <Collapse header='The text for the label' open={isOpen} onOpenChange={setIsOpen}>Content: text, table, image or another component</Collapse>
        )
    }}
```

#### Размеры

С помощью свойства `size` можно указать размер компонента. Доступные значения: `s`, `m`, `l`, `xl`. Размер по умолчанию `l`.

```
    <Groups design='vertical'>
        <Collapse header='The text for the label' size="s">Content: text, table, image or another component</Collapse>
        <Collapse header='The text for the label' size="m">Content: text, table, image or another component</Collapse>
        <Collapse header='The text for the label' size="l">Content: text, table, image or another component</Collapse>
        <Collapse header='The text for the label' size="xl">Content: text, table, image or another component</Collapse>
    </Groups>
```