# EmptyState

Компонент "Пустое состояние". Компонент предназначен для использования в таких случаях, когда: результаты поиска отсутствуют, нет контента, ошибка загрузки, состояние загрузки. Компонент также можно использовать для отображения состояния успешного выполнения действий, если не предусмотрен уникальный success page.

## Импорт

```
import { EmptyState } from 'vienna-ui';
```

## Свойства / Props

| Prop    | Type                 | Default | Description                                        |
| ------- | -------------------- | ------- | -------------------------------------------------- |
| loading | boolean \| undefined |    | Состояние загрузки. true, чтобы отобразить spinner |
| spinnerProps | SpinnerProps<Breakpoints>  \| undefined |


## Внешний вид

Содержимое компонента передается как дочерние элементы, которые определены `EmptyState.Title`, `EmptyState.Description`, `EmptyState.Actions` - заголовок, контент сообщения, действия для пользователя соответсвенно.

```
    <EmptyState>
        <EmptyState.Title>Оформите карту</EmptyState.Title>
        <EmptyState.Description>
            Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
            другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
        </EmptyState.Description>
        <EmptyState.Actions>
            <Button design='accent'>Оформить</Button>
            <Button design='ghost'>Позвонить</Button>
        </EmptyState.Actions>
    </EmptyState>
```

Компонент заполняет все пространство в родительском контейнере и позиционируется по центру (вертикально и горизонтально).

```
    <EmptyState>
        <EmptyState.Title>Оформите карту</EmptyState.Title>
        <EmptyState.Description>
            Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
            другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
        </EmptyState.Description>
        <EmptyState.Actions>
            <Button design='accent'>Оформить</Button>
            <Button design='ghost'>Позвонить</Button>
        </EmptyState.Actions>
    </EmptyState>
```

Для отображения состояния загрузки нужно задать параметр `loading`

```
    <EmptyState loading>
        <EmptyState.Title>Оформите карту</EmptyState.Title>
        <EmptyState.Description>
            Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
            другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
        </EmptyState.Description>
    </EmptyState>
```

Чтобы добавить дополнительный элемент в компонент "Пустое состояние", который не противоречит принципам и стилистике дизайн системы, его можно также передать как дочерний элемент.

```
    <EmptyState>
        <Logo size='xl' />
        <EmptyState.Title>Оформите карту</EmptyState.Title>
        <EmptyState.Description>
            Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
            другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
        </EmptyState.Description>
        <EmptyState.Actions>
            <Button design='accent'>Перезагрузить</Button>
            <Button design='ghost'>Позвонить</Button>
        </EmptyState.Actions>
    </EmptyState>
```