# EmptyState

Компонент "Пустое состояние".
Компонент предназначен для использования в таких случаях, когда: результаты поиска отсутствуют, нет контента, ошибка загрузки, состояние загрузки.
Компонент также можно использовать для отображения состояния успешного выполнения действий, если не предусмотрен уникальный success page.


## Импорт

```
import { EmptyState } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
loading | boolean \| undefined | false | Состояние загрузки. true, чтобы отобразить spinner

## Использование

Содержимое компонента передается как дочерние элементы, которые определены
`EmptyState.Title`, `EmptyState.Description`, `EmptyState.Actions` - заголовок, контент сообщения, действия для пользователя соответсвенно.
Компонент заполняет все пространство в родительском контейнере и позиционируется по центру (вертикально и горизонтально).

```jsx
<EmptyState>
    <EmptyState.Title>Оформите дебетовую Кэшбэк карту</EmptyState.Title>
    <EmptyState.Description>
        <ul>
            <li>1,5% кэшбэк рублями на все покупки</li>
            <li>Бесплатное обслуживание</li>
            <li>До 4% на остаток на счете</li>
        </ul>
    </EmptyState.Description>
    <EmptyState.Actions>
        <Button design='accent'>Оформить</Button>
        <Button design='ghost'>Подробнее</Button>
    </EmptyState.Actions>
</EmptyState>
```

## Состояние загрузки
##### Свойство `loading`

Для отображения состояния загрузки нужно задать параметр `loading`

```jsx
<EmptyState loading>
    <EmptyState.Title>Оформите карту</EmptyState.Title>
    <EmptyState.Description>
        Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
        другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
    </EmptyState.Description>
</EmptyState>
```

## Дополнительный контент

Чтобы добавить дополнительный элемент в компонент "Пустое состояние", который не противоречит принципам и стилистике дизайн системы, его можно также передать как дочерний элемент.

```jsx
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
