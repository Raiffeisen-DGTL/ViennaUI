# Groups

Контейнер для объеденения элементов в группы с отступами между элементами.

## Импорт

```
import { Groups } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "horizontal" \| "vertical" \| undefined |  |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined |  |
| alignItems | "normal" \| "inherit" \| "initial" \| "unset" \| "stretch" \| "center" \| "flex-start" \| "flex-end" \| "self-start" \| "self-end" \| "baseline" \| undefined |  |
| justifyContent | "normal" \| "inherit" \| "initial" \| "unset" \| "center" \| "flex-start" \| "flex-end" \| "space-between" \| "space-around" \| undefined | |
| clean | boolean \| undefined |  | Игнорирование React.Fragment, переданные на первом уровне вложенности дочерних компонентов |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| height | 'full' \| 'auto' \| undefined | | Высота контейнера |

## Использование

Контейнер для объеденения элементов в группы с отступами между элементами.

```jsx
<Groups>
    <Button design='accent'>Make payment</Button>
    <Button design='outline'>Download statement</Button>
    <Button design='ghost'>
        <Trash /> Delete statement
    </Button>
</Groups>
```

## Дизайн

##### Свойство `design`

Компонент имееет дизайн `vertical` для вертикального выравнивания элементов.

```jsx
<Groups design='vertical'>
    <Button design='accent'>Make payment</Button>
    <Button design='outline'>Download statement</Button>
    <Button design='outline'>
        <Trash /> Delete statement
    </Button>
</Groups>
```

## Дизайн

Компонент имееет дизайн `vertical` для вертикального выравнивания элементов.

```
    <Groups design='vertical'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <TrashDelete /> Delete statement
        </Button>
    </Groups>
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `m`, `l` и `xl`.

```
    <Groups design='vertical'>
        <Groups size='xs'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
        <Groups size='s'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
        <Groups size='m'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
        <Groups size='l'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
        <Groups size='xl'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
    </Groups>
```

## Обработка React.Fragment

Компонент может раскрывать `React.Fragment` на первом уровне (удалять его) и добавлять элементы в первый уровень. Если вы хотите включить эту возможность, передайте параметр `clean` как `true`.

```
    <Groups clean={true}>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <React.Fragment>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
            <Button design='outline'>
                <TrashDelete /> Delete statement
            </Button>
        </React.Fragment>
    </Groups>
```