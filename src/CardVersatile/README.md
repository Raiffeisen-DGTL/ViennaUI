# CardVersatile

## Импорт

```
import { CardVersatile } from 'vienna-ui';
``` 

# CardVersatile

Универсальный, настраиваемый и гибкий контейнер контента.

Использование:
- Навигация
- Рекомендуемая информация: для отображения избранной информации или связанного контента
- Контейнеры контента: для последовательной организации информации на странице
- Группировка информации
- Обеспечение визуальной иерархии: для организации информации в краткие, автономные блоки
- Превью информации: карточки могут служить точкой входа к получению более подробной информации



```
    <CardVersatile
        title="Card title"
        icon={{
            type: 'square',
            children: 'ВВ',
        }}
        counter={{
            children: '2',
        }}
        hint={{
            header: 'Заголовок подсказки',
            content: 'Содержимое подсказки',
        }}
        badge={{
            children: 'Status',
        }}
        extraText="Extra text"
        subtitle="Card subtitle"
        info="More information"
    >Some text</CardVersatile>
```

## Заголовок

За заголовок в карточке отвечает свойство `title`, является обязательным (имеет тип `ReactNode`).

Пример ссылки в заголовке:

```
    <CardVersatile
        title={<Link design="accent" href="https://google.com">Link</Link>}
        disableDivider
    />
```

## Внешний вид

За внешний вид карточки отвечает свойство `design` (имеет тип `'gray' | 'shadow' | 'stroke' | 'white' | 'critical'| 'warning' | 'info'`)

```
    <Flex gap="s2">
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="gray">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="shadow">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="stroke">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="white">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="critical">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="warning">Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="info">Some text</CardVersatile>
        </Flex.Item>
    </Flex>
```

## Подзаголовок и дополнительная информация

За подзаголовок отвечает свойство `subtitle` (имеет тип `string`). Свойство `info` (имеет тип `string`) - дополнительная информация.

```
    <CardVersatile
        title="Card title"
        subtitle="Card subtitle"
        info="More information"
        disableDivider
    />
```

## Extra text

Свойство `extraText` (имеет тип `ReactNode`) выводит указанный текст справа от заголовока.
Если передать строку, то будет выводиться иконка в конце строки. `ReactElement` будет выводиться в том виде, в котором передан.

```
    <Flex gap="s2">
        <Flex.Item grow="1">
            <CardVersatile
                title="Card title"
                extraText="Extra text"
                disableDivider
            />
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile
                title="Card title"
                extraText={<Link design="accent" href="https://google.com">Link</Link>}
                disableDivider
            />
        </Flex.Item>
    </Flex>
```

## Встроенные компоненты

Внутри карточки встроены такие компоненты:
- `IconContainer` - выводится в левой части карточки, чтобы вывести компонент, необходимо в свойство `icon` передать объект со свойствами компонента IconContainer
- `Hint` - выводится правее заголовка, чтобы вывести компонент, необходимо в свойство `hint` передать объект со свойствами компонента Hint
- `Counter` - выводится правее Hint, чтобы вывести компонент, необходимо в свойство `counter` передать объект со свойствами компонента Counter
- `Badge` - выводится правее Counter, чтобы вывести компонент, необходимо в свойство `badge` передать объект со свойствами компонента Badge

```
    <CardVersatile
        title="Card title"
        icon={{
            type: 'square',
            children: 'ВВ',
        }}
        counter={{
            children: '2',
        }}
        hint={{
            header: 'Заголовок подсказки',
            content: 'Содержимое подсказки',
        }}
        badge={{
            children: 'Status',
        }}
        disableDivider
    />
```

## Слоты с контентом

В компоненте есть два свойства, в которые можно добавить любой контент:
- children - выводит контент под разделителем
- topRightSlot - выводит контент в правом верхнем углу компонента
- iconSlot - выводит контент вместо иконки (приоритет у свойства icon)

```
    <CardVersatile
        title="Card title"
        topRightSlot={<Badge color={'miami10'} size={'s'}>Status</Badge>}
        iconSlot={<ViolinIcon style={{ display: 'block' }} />}
    >
        <Groups>
            <Badge color={'seattle10'} size={'xs'}>Status 1</Badge>
            <Badge color={'seattle10'} size={'xs'}>Status 2</Badge>
            <Badge color={'seattle10'} size={'xs'}>Status 3</Badge>
            <Badge color={'seattle10'} size={'xs'}>Status 4</Badge>
        </Groups>
    </CardVersatile>
```

## Интерактив

Компонент наследует все свойства от `div` элемента, что дает возможность использовать обработчики событий через свойства `onClick`, `onMouseEnter`, `onMouseLeave` и др.
Чтобы было видно, что с компонентом можно взаимодействовать, есть свойство `hasInteractive` (имеет тип `boolean`), которое добавляет `hover` для карточки.
Так же есть свойство `selected` (имеет тип `boolean`), которое меняет вид карточки.

```
    <Flex gap="s2">
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="gray" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="shadow" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="stroke" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="white" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
        <Flex.Item grow="1">
            <CardVersatile title="Card title" design="white" hasInteractive selected>Some text</CardVersatile>
        </Flex.Item>
         <Flex.Item grow="1">
            <CardVersatile title="Card title" design="critical" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
         <Flex.Item grow="1">
            <CardVersatile title="Card title" design="warning" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
         <Flex.Item grow="1">
            <CardVersatile title="Card title" design="info" hasInteractive>Some text</CardVersatile>
        </Flex.Item>
    </Flex>
```

## Разделитель

По умолчанию в карточке отображается разделитель, чтобы его скрыть есть свойство `disableDivider` (имеет тип `boolean`)

```
    <CardVersatile
        title="Card title"
        subtitle="Card subtitle"
        info="More information"
        disableDivider
    />
```

## Группировка карточек

Для группировки карточек существует компонент `CardVersatile.Group`. Это универсальный, настраиваемый и гибкий контейнер.
Имеет список свойств:
- `list` - массив карточек;
- `design`- принимает значения `'gray' | 'shadow' | 'stroke' | 'white' | 'critical' | 'warning' | 'info'`, делает единым дизайн для всех карточек;

```
    {() => {
        const cardsList = [
            {
                title: 'Title',
                subtitle: 'Subtitle',
                icon: {
                    type: 'stroke',
                    children: 'ВВ',
                },
                counter:{
                    children: '2',
                },
                hint:{
                    header: 'Заголовок подсказки',
                    content: 'Содержимое подсказки',
                },
                badge:{
                    children: 'Status',
                },
                selected: false,
                disableDivider: true,
                hasInteractive: true,
            },
            {
                title: 'Title',
                subtitle: 'Subtitle',
                icon: {
                    type: 'stroke',
                    children: 'ВВ',
                },
                counter:{
                    children: '2',
                },
                hint:{
                    header: 'Заголовок подсказки',
                    content: 'Содержимое подсказки',
                },
                badge:{
                    children: 'Status',
                },
                selected: false,
                disableDivider: true,
                hasInteractive: true,
            },
            {
                title: 'Title',
                subtitle: 'Subtitle',
                icon: {
                    type: 'stroke',
                    children: 'ВВ',
                },
                counter:{
                    children: '2',
                },
                hint:{
                    header: 'Заголовок подсказки',
                    content: 'Содержимое подсказки',
                },
                badge:{
                    children: 'Status',
                },
                selected: false,
                disableDivider: true,
                hasInteractive: true,
            },
        ];
        return (
            <CardVersatile.Group list={cardsList} design='gray'></CardVersatile.Group>
        )
    }}
```