# Card

Компонент карточек.

## Импорт

```
import { Card } from 'vienna-ui';
```

## Свойства / Props

| Prop    | Type            | Default | Description                                                 |
| ------- | --------------- | ------- | ----------------------------------------------------------- |
| header  | React.ReactNode |    | Контент шапки                                               |
| size   | ResponsiveProp<'s' \| 'm' \| 'l', B> \| undefined          |    |                                                    |
| actions | React.ReactNode |    | Контент в правой части шапки                                |
| footer  | React.ReactNode |    | Контент подвала                                             |
| stretch | boolean   \| undefined       |    | Может ли компонент растягиваться под родительский контейнер |
| margin | Whitespace \| undefined | |
| marginTop | Whitespace \| undefined | |
| marginBottom | Whitespace \| undefined | |
| marginLeft | Whitespace \| undefined | |
| marginRight | Whitespace \| undefined | |
| marginHorizontal | Whitespace \| undefined | |
| marginVertical | Whitespace \| undefined | |
| m | Whitespace \| undefined | |
| mt | Whitespace \| undefined | |
| mb | Whitespace \| undefined | |
| ml | Whitespace \| undefined | |
| mr | Whitespace \| undefined | |
| mx | Whitespace \| undefined | |
| my | Whitespace \| undefined | |
| ref | Ref<HTMLDivElement> \| undefined | |

## HTMLAttributes 👇

| Prop    | Type            | Default | Description                                                 |
| ------- | --------------- | ------- | ----------------------------------------------------------- |
| title  | string \| undefined|     

# Card

Компонент `Card` используется, как базовый стиль фона карточек.
В него можно добавить свой собственный контент и вывести некоторые заложенные элементы.



```
    <Card title='Simple card'>
        <ComponentHelpers.Card.Demo style={{ width: '600px' }} />
    </Card>
```

## Размер

С помощью свойства `size` можно указать размер карточки. Доступные значения: `s`, `m`, `l`. Размеры отличаются внутренними отступами, скруглением углов и тенью. Размер по умолчанию - `l`.

```
    <Grid.Row>
        <Grid.Col size={4}>
            <Card size='s'>
                <ComponentHelpers.Card.Demo />
            </Card>
        </Grid.Col>
        <Grid.Col size={4}>
            <Card size='m'>
                <ComponentHelpers.Card.Demo />
            </Card>
        </Grid.Col>
        <Grid.Col size={4}>
            <Card size='l'>
                <ComponentHelpers.Card.Demo />
            </Card>
        </Grid.Col>
    </Grid.Row>
```

## Содержимое карточки

```
    <Card>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Иконка действия

В `actions` можно передать объект с иконкой, который будет отображён в правом верхнем углу карточки.

```
    <Card title='Card with actions' actions={<SettingsIcon />}>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Карточка с несколькими действиями

```
    <Card
        title='Card with actions'
        actions={
            <Groups size='xs'>
                <SettingsIcon />
                <CloseCancelXIcon />
            </Groups>
        }>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Карточка с заголовком

Для простых заголовков кароточки достаточно передать строку в `title`. Для более сложных используется `header`, который приниает JSX-объект. Компонент также экспортирует вспомогательные подкомпоненты `Card.Title` и `Card.Subtitle` для создания загловка и подзаголовка карточки.

```
    <Card
        header={
            <Groups alignItems='baseline'>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card subtitle</Card.Subtitle>
            </Groups>
        }>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Вертикальное расположение заголовков

```
    <Card
        title='Simple card'
        header={
            <Groups design='vertical' size='s'>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle>Card subtitle</Card.Subtitle>
            </Groups>
        }>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Карточка с footer

```
    <Card
        title='Card with footer'
        actions={<SettingsIcon />}
        footer={
            <Groups justifyContent='flex-end'>
                <Button design='outline'>Button example</Button>
                <Button design='accent'>Button example</Button>
            </Groups>
        }>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Подзаголовки внутри контента

Компонент также экспортирует подкомпонент `Card.ContentTitle` для заголовков внутри контента.

```
    <Card title='Content title' actions={<SettingsIcon />}>
        <Card.ContentTitle>Section header</Card.ContentTitle>
        <ComponentHelpers.Card.Demo />
        <Card.ContentTitle>Section header</Card.ContentTitle>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Карточка с tabs

```
    <Card
        header={
            <Groups design='vertical'>
                <Card.Title>Card with tabs</Card.Title>
                <Tabs size='m' value='active'>
                    <Tabs.Tab value='active'>Active</Tabs.Tab>
                    <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                    <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                </Tabs>
            </Groups>
        }
        actions={<SettingsIcon />}>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Карточка с Tabs и с subtitle

```
    <Card
        header={
            <Groups design='vertical'>
                <Groups alignItems='baseline'>
                    <Card.Title>Card header</Card.Title>
                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                </Groups>
                <Tabs size='m' value='active'>
                    <Tabs.Tab value='active'>Active</Tabs.Tab>
                    <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                    <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                </Tabs>
            </Groups>
        }
        actions={<SettingsIcon />}>
        <ComponentHelpers.Card.Demo />
    </Card>
```

## Растягивание по высоте родителя

Свойство `stretch` позволяет растянуть карточку по высоте до 100% высоты родителя.

```
    <Grid.Row>
        <Grid.Col size={6}>
            <Card
                stretch
                title='Simple card'
                footer={
                    <Groups justifyContent='flex-end'>
                        <Button design='outline'>Button example</Button>
                        <Button design='accent'>Button example</Button>
                    </Groups>
                }>
                <ComponentHelpers.Card.Demo style={{ marginBottom: '5px' }} />
                <ComponentHelpers.Card.Demo />
            </Card>
        </Grid.Col>
        <Grid.Col size={6}>
            <Card
                stretch
                title='Simple card'
                footer={
                    <Groups justifyContent='flex-end'>
                        <Button design='outline'>Button example</Button>
                        <Button design='accent'>Button example</Button>
                    </Groups>
                }>
                <ComponentHelpers.Card.Demo />
            </Card>
        </Grid.Col>
    </Grid.Row>
```

## Внешние отступы

Так же компонент наследует margin-аттрибуты компонента `Whitespace` для управления внешними отступами карточки. Подробнее про эти атрибуты можно почитать на странице компонента [Whitespace](/components/whitespace)

```
    <Card title='Simple card' marginTop='s7' mb='s5'>
        <ComponentHelpers.Card.Demo style={{ width: '600px' }} />
    </Card>
```