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

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику. Возможности:

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

## Автопозиционирование

```
    <Hint
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

В качестве иконки, вызывающей окно с подсказкой, можно задать `HintAnchorIcon.Info` (i) либо `HintAnchorIcon.Question` (?). По умолчанию задана иконка `HintAnchorIcon.Info`.

```
enum HintAnchorIcon {
    Info = 'info',
    Question = 'question',
}
```

```
    <Hint
        placement='right'
        placementIcon={HintAnchorIcon.Question}
        header='This is header'
        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
    />
```