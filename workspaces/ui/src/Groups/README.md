# Groups

Контейнер для объеденения элементов в группы с отступами между элементами.

## Импорт

```
import { Groups } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "horizontal" \| "vertical" \| undefined | 'horizontal' |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | 'm' |
| alignItems | "normal" \| "inherit" \| "initial" \| "unset" \| "stretch" \| "center" \| "flex-start" \| "flex-end" \| "self-start" \| "self-end" \| "baseline" \| undefined | 'center' |
| justifyContent | "normal" \| "inherit" \| "initial" \| "unset" \| "center" \| "flex-start" \| "flex-end" \| "space-between" \| "space-around" \| undefined | 'flex-start' |
| clean | boolean \| undefined | false | Игнорирование React.Fragment, переданные на первом уровне вложенности дочерних компонентов |
| height | 'full' \| 'auto' \| undefined | 'auto' | Высота контейнера |

## Использование

Компонент принимает элементы (компоненты), которые необходжимло сгруппировать.

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

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `m`, `l` и `xl`.

```jsx
<Groups design='vertical'>
    <Groups size='xs'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </Groups>
    <Groups size='s'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </Groups>
    <Groups size='m'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </Groups>
    <Groups size='l'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </Groups>
    <Groups size='xl'>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </Groups>
</Groups>
```

## Обработка React.Fragment

##### Свойство `clean`

Компонент может раскрывать `React.Fragment` на первом уровне (удалять его) и добавлять элементы в первый уровень вложенности. Если вы хотите включить эту возможность, передайте параметр `clean` как `true`.

```jsx
<Groups clean={true}>
    <Button design='accent'>Make payment</Button>
    <Button design='outline'>Download statement</Button>
    <React.Fragment>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
        <Button design='outline'>
            <Trash /> Delete statement
        </Button>
    </React.Fragment>
</Groups>
```
