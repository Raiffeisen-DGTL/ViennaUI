# Hint

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику.

## Импорт

```
import { Hint } from 'vienna-ui';
```

## Свойства / Props

| Prop    | Type                                                          | Default | Description             |
| ------- | ------------------------------------------------------------- | ------- | ----------------------- |
| design  | "dark" \| "light" \| undefined                                | |
| size    | "s" \| "m" \| "l" \| undefined                                |    |
| anchor  | "top" \| "bottom" \| "left" \| "right" \| "auto" \| undefined |   | Направление отображения |
| header  | ReactNode                                                     |    |
| content | ReactNode                                                     |    |
| id  | string \| undefined                                                   |    |
| anchorIcon  | HintAnchorIcon \| undefined |
| width   | number \| undefined                                                        |     | Ширина компонента в px  |

# Hint

Компонент Hint используется для расширенных подсказок. По умолчанию отображается по клику. Для того, чтобы компонент отображался по ховеру, необходимо прописать action="hover".
Возможности:

-   содержать текст с заголовком или без него
-   закрываться по крестику или клику в свободной области
-   настраиваемое позиционирование
-   открывается и закрывается клавишой Enter и Escape если в фокусе
-   закрывается при потере фокуса
-   есть в темном и светлом исполнении



```
    <Hint
        placement='right'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
```

## Использование

```
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Hint
            placement='right'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
        <Hint
            design='dark'
            placement='bottom'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
        <Hint
            placement='top'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
        <Hint
            design='dark'
            placement='left'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        />
    </div>
```

## Позиционирование

За позиционирование отвечает свойство `placement`. Помимо основных видов позиционирования - 'top', 'right', 'bottom', 'left', можно использовать и такие: 'left-end', 'left-start', 'right-end', 'right-start', 'bottom-end', 'bottom-start', 'top-end', 'top-start'.

```
    <Hint
        placement='left-end'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='left-start'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='right-end'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='right-start'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='bottom-end'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='bottom-start'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='top-end'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
    <Hint
        placement='top-start'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
```

## В тексте

```
    <P size='s'>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            size='s'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            placerat
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
    <P>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            placerat
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
    <P size='l'>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            size='l'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            placerat
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
```

## C ссылкой

```
    <P size='s'>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            size='s'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Link size='s' design='accent' href='https://google.com'>
                placerat
            </Link>
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
    <P>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Link design='accent' href='https://google.com'>
                placerat
            </Link>
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
    <P size='l'>
        Ut ut dui non ipsum pharetra aliquam id in libero. Aenean{' '}
        <Hint
            size='l'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'>
            <Link size='l' design='accent' href='https://google.com'>
                placerat
            </Link>
        </Hint>{' '}
        leo nec ex pharetra finibus.
    </P>
```

## Выбор иконки якоря

Можно выбрать иконку якоря -  для этого передайте в свойство `anchorIcon` одно из значений: 'info' (i) или 'question' (?). По умолчанию значение 'info' (i).

```
type AnchorIcon: 'info' | 'question';
```

```
    <Hint
        placement='right'
        anchorIcon='question'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
```

## Возможность отображения стрелки

За отображение стрелки внутри Popover отвечает свойство `showPopoverWithArrow`, имеет тип boolean. По умолчанию стрелка не отображается.

```
    <Hint
        placement='right'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        design='dark'
        showPopoverWithArrow
    />
```

## Отображение информации по клику/при наведении

За отображение информации внутри компонента Hint отвечает свойство `action`. Оно может принимать значения - 'hover' | 'click'. Значение по умолчанию - 'click'.

```
    <Groups>
        <Hint
            placement='right'
            header='Click me'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            design='dark'
            action='click'
        />
        <Hint
            placement='right'
            header='Click me'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            design='dark'
            action='hover'
        />
    </Groups>
```

## Закрытие при повторном клике на таргет элемент

По умолчанию закрытие работает только при клике на крестик или вне компонента. Однако также можно настроить закрытие при повторном клике на таргет элемент. Это поведение регулируется свойством `closeOnTargetClick`, которое имеет тип `boolean`.

```
    <Hint
        closeOnTargetClick
        placement='right'
        header='Click me'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        design='dark'
        action='click'
    />
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки закрытия, сообщения и для иконки наведения на компонент. Передается с помощью пропса `testId?: { closeIcon?: string; popover?: string; targetIcon?: string }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultHintTestId: HintTestId = {
    popover: 'hint_popover',
    targetIcon: 'hint_target-icon',
    closeIcon: 'hint_close-icon',
};
```

```
    <Hint
        placement='right'
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
        testId={{
            closeIcon: 'Hint.CloseIcon',
            popover: 'Hint.Message',
            targetIcon: 'Hint.Icon',
        }}
    />
```