# Popover

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику. Основная особенность в том, что есть возможность блокировки прокрутки страницы.

## Импорт

```
import { Popover } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "dark" \| "light" \| undefined | |
| header | ReactNode |  |
| noScroll | boolean \| undefined |  | Блокировать прокрутку экрана если элемент активен |
| allowKeyboardEvents | boolean \| undefined |  | Включить поддержку событий клавиатуры (для Popover = false, для Hint = true) |
| noClose | boolean \| undefined |  | Отключает иконку закрытия |
| placement | 'left' \| 'right' \| 'top' \| 'bottom' \| 'center' \| 'auto' \| undefined|
| fontSize | number \| undefined|
| fontWeight | number \| undefined |
| onOpen | (() => void) \| undefined|
| fontWeight |(() => void) \| undefined |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined |
| content | ReactNode |  |
| width | number \| undefined|
| height | number \| undefined|

# Popover

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику. Возможности:

-   содержать текст с заголовком или без него
-   содержать таблицы графики и тд.
-   блокировать экран на прокрутку
-   закрываться по крестику или клику в свободной области
-   настраиваемое позиционирование
-   открывается и закрывается клавишой Enter и Escape если в фокусе
-   закрывается при потере фокуса
-   есть в темном и светлом исполнении



```
    {()=> {
        return (
            <Popover
                     placement='right'
                     action='click'
                     header='This is header'
                     content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            {(ref)=><Button forwardedRef={ref}>Popover</Button>}
            </Popover>)
    }}
```

## Использование

```
    <Popover
        placement='right'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        design='dark'
        placement='bottom'
        action='hover'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Hover me</Button>}
    </Popover>
    <Popover
        placement='center'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        design='dark'
        placement='top'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        placement='left'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Автопозиционирование

```
    <Popover
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Открытие по ховеру

Для того, чтобы Popover открывался по ховеру, необходимо прописать action="hover".

<Popover
    design='dark'
    placement='bottom'
    action='hover'
    header='This is header'
    content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
    {(ref)=><Button forwardedRef={ref}>Hover me</Button>}
</Popover>

## В тексте

```
    <div>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Popover
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            {(ref)=><Button forwardedRef={ref}>Click me</Button>}
        </Popover>{' '}
        leo nec ex pharetra finibus.
    </div>
```

## Внешнее управление

```
    {() => {
        const ref = React.useRef(null);
        return (
            <div>
                <Groups>
                    <Button onClick={() => ref.current.open()}>Open</Button>
                    <Button onClick={() => ref.current.close()}>Close</Button>
                </Groups>
                <div>
                    Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
                    <Popover
                        ref={ref}
                        header='This is header'
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
                        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
                    </Popover>{' '}
                    leo nec ex pharetra finibus.
                </div>
            </div>
        );
    }}

```

## Без крестика

```
    <Popover
        noClose
        placement='right'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Позиционирование Popover

Помимо основных видов позиционирования - 'top', 'right', 'bottom', 'left', можно использовать и такие: 'left-end', 'left-start', 'right-end', 'right-start', 'bottom-end', 'bottom-start', 'top-end', 'top-start'.

```
    <Popover
        noClose
        placement='left-end'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='left-start'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='right-end'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='right-start'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='bottom-end'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='bottom-start'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='top-end'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        noClose
        placement='top-start'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

### disableFlip

Свойство `disableFlip` (тип `boolean`) - отключает автоматическое позиционирование `Popover` при нехватке места на экране.
По умолчанию, если `Popover` не помещается в заданной позиции, он "перекидывается" (флипит) в противоположную сторону, чтобы избежать выхода за границы экрана.

Если `disableFlip = true`, такое поведение отключается — `Popover` будет отображаться строго в указанной позиции, даже если она выходит за пределы экрана.

```
    <Popover
        content="Информация"
        placement="bottom"
        disableFlip
    >
        <Button>Открыть Popover</Button>
    </Popover>
```

## Закрытие при повторном клике на таргет элемент

По умолчанию закрытие работает только при клике на крестик или вне компонента. Однако также можно настроить закрытие при повторном клике на таргет элемент. Это поведение регулируется свойством `closeOnTargetClick`, которое имеет тип `boolean`.

```
    <Popover
        closeOnTargetClick
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Возможность отображения стрелки

За отображение стрелки отвечает свойство `showPopoverWithArrow`, имеет тип boolean. По умолчанию стрелка не отображается.

```
    <Popover
        placement="bottom"
        action="click"
        design='dark'
        showPopoverWithArrow
        header="This is header"
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='top'
        action='click'
        design='dark'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='left'
        action='click'
        design='dark'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='right'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='bottom-end'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='bottom-start'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        showPopoverWithArrow
        placement='top-start'
        action='click'
        design='dark'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Размеры

У компонента есть два варианта размера `s` и `m`, по умолчанию используется размер `s`.

```
    <Popover
        size="s"
        placement="bottom"
        action="click"
        showPopoverWithArrow
        header="This is header"
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
    <Popover
        size="m"
        showPopoverWithArrow
        placement='top'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки закрытия. Передается пропс `testId?: { closeIcon }`.

```
    <Popover
        placement='right'
        action='click'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        testId={{ closeIcon: 'Popover.Close' }}>
        {(ref)=><Button forwardedRef={ref}>Click me</Button>}
    </Popover>
```