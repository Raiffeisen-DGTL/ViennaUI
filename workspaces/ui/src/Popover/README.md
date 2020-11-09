# Popover

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику.
Основная особенность в том, что есть возможность блокировки прокрутки страницы.



## Импорт

```
import { Popover } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
design | "dark" \| "light" \| undefined | "light" |
anchor | "top" \| "bottom" \| "left" \| "right" \| "center" \| "auto" \| undefined | "auto" | Направление отображения
header | ReactNode | false |
noScroll | boolean \| undefined | false | Блокировать прокрутку экрана если элемент активен
allowKeyboardEvents | boolean \| undefined | false | Включить поддержку событий клавиатуры (для Popover = false, для Hint = true)
noClose | boolean \| undefined | false | Отключает иконку закрытия
content | ReactNode | false |
width | number | 250 | Ширина компонента в px

## Использование

Компонент в качестве дочернего элемента принимает компонент, для которого нужно отобразить контент.

```
<Popover
    anchor='right'
    header='This is header'
    content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
    <Button>Click me</Button>
</Popover>
```

## Контент
##### Свойство `content`

```
<Popover
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

## Заголовок
##### Свойство `header`

```
<Popover
    header='This is header'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

## Якорь
##### Свойство `anchor`

Направление отображения компонента

```
<Popover
    anchor='right'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

#### Автопозиционирование

Если не указывать `anchor`, то компонент будет отображаться в зависимости от видимости на странице (`auto`).

```
<Popover
    header='This is header'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```


## Ширина компонента
##### Свойство `width`

```jsx
<Popover
    width={100}
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

## C блокировкой прокрутки
##### Свойство `noScroll`

Для `noScroll={true}` прокрутка страницы невозможна, если компонент активен (виден).

```
<Popover
    noScroll
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

## Без иконки (крестика) закрытия
##### Свойство `noClose`

Для `noClose={true}` у компонента не отображается иконка закрытия компонента.
Компонент по-прежнему можно закрыть (прекратить отображение) при нажатии на любом другом месте  на странице.

```
<Popover
    noClose
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```

## События клавиатуры
##### Свойство `allowKeyboardEvents`

Свойство, позволяющее переключаться и управлять состоянием открытия компонента с клавиатуры.
По умолчанию `false`.

```
<Popover
    allowKeyboardEvents
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
>
    <Button>Click me</Button>
</Popover>
```
