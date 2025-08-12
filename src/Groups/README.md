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


# Groups

Контейнер для объеденения элементов в группы с отступами между элементами.



```
    <Groups>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='ghost'>
            <TrashDeleteIcon /> Delete statement
        </Button>
    </Groups>
```

## Использование

```
    <Groups>
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <Button design='ghost'>
            <TrashDeleteIcon /> Delete statement
        </Button>
    </Groups>
```

## Расположение элементов

Компонент имееет свойство `design` (тип `'horizontal' | 'vertical'`), отвечает за расположение элементов по горизонтали или вертикали

```
    <Groups design='vertical'>
        <Groups design='horizontal'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
        <Groups design='horizontal'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
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
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
        <Groups size='s'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
        <Groups size='m'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
        <Groups size='l'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
        <Groups size='xl'>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
    </Groups>
```

## Выравнивание элементов

За выравнивание элементов отвечают свойства `alignItems` и `justifyContent` добавляют аналогичные по названию css свойства контейнеру

```
    <Groups clean={true} alignItems="flex-start" justifyContent="flex-end">
        <Button design='accent'>Make payment</Button>
        <Button design='outline'>Download statement</Button>
        <React.Fragment>
            <Button size="xl">
                <TrashDeleteIcon /> Delete statement
            </Button>
        </React.Fragment>
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
                <TrashDeleteIcon /> Delete statement
            </Button>
            <Button design='outline'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </React.Fragment>
    </Groups>
```

## Добавление отступа снизу

Свойство `bottomGap` добавляет группе отступ снизу пропорционально размеру.

```
    <Groups design='vertical'>
            <Groups size='xs' bottomGap>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDeleteIcon /> Delete statement
                </Button>
            </Groups>
            <Groups size='s' bottomGap>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDeleteIcon /> Delete statement
                </Button>
            </Groups>
            <Groups size='m' bottomGap>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDeleteIcon /> Delete statement
                </Button>
            </Groups>
            <Groups size='l' bottomGap>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDeleteIcon /> Delete statement
                </Button>
            </Groups>
            <Groups size='xl' bottomGap>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDeleteIcon /> Delete statement
                </Button>
            </Groups>
    </Groups>
```

## Высота контейнера

За высоту контейнера отвечает свойство `height` (тип `'full' | 'auto'`), по умолчанию значение `auto`. Значение `full` добавляет css свойства контейнеру:
```
align-items: flex-start;
height: 100%;
```

```
    <div style={{height: '100px'}}>
        <Groups height="full">
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='ghost'>
                <TrashDeleteIcon /> Delete statement
            </Button>
        </Groups>
    </div>
```