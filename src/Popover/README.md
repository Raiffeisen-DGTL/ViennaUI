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


## Использование

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

## C ссылкой

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

## C блокировкой прокрутки

```
    <div>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Popover
            noScroll
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
