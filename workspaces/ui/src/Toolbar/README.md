# Toolbar

Компонент используется в таблицах, списках, с карточками и отображает действия, которые можно осуществить с выбранным контентом. Компонент может располагаться над или под контентом, и его необходимо закреплять при прокрутке.


## Импорт

```
import { Toolbar } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
design | "dark" \| "light" \| undefined | "light" |
onClick | (event: FormEvent<HTMLDivElement>, data?: { id?: string; name?: string }) => void \| undefined | false |

## Свойства операции / Operation Props

Prop | Type | Default | Description
--- | --- | --- | ---
ref | any | false |
id | string | false |
name | string | false |
icon | ReactNode \| undefined | false | Иконка
label | ReactNode \| undefined | false | Заголовок операции

## Использование

Компонент состоит из родительского контейнера `Toolbar` и дочерних операций (путнктов) `Toolbar.Operation`.
Сами операции могут содержать подменю, которые тоже задаются через компонент `Toolbar.Operation`.

```
<Toolbar>
    <Toolbar.Operation icon={<Clip />} label='Action 1' />
    <Toolbar.Operation icon={<Clip />} label='Action 2' />
    <Toolbar.Operation icon={<Clip />} label='Action 3'>
        <Toolbar.Operation label='Option 1' />
        <Toolbar.Operation label='Option 2' />
        <Toolbar.Operation label='Option 3' />
    </Toolbar.Operation>
</Toolbar>
```

## Дизайн
##### Свойство `design`

Дизайн доступен в двух значениях: `dark`, `light`.

```
<Toolbar design='dark'>
    <Toolbar.Operation label='Action 1' />
    <Toolbar.Operation label='Action 2' />
</Toolbar>
```

## Заголовок
##### Свойство `label`

С помощью свойства `label` можно установить заголовок операции (пункта).

```
<Toolbar>
    <Toolbar.Operation label='Action 1' />
    <Toolbar.Operation label='Action 2' />
</Toolbar>
```

## Иконка
##### Свойство `icon`

C помощью свойства `icon` можно добавить иконку к операции (пункту).

```
<Toolbar>
    <Toolbar.Operation icon={<Clip />} label='Action 1' />
    <Toolbar.Operation icon={<Clip />} label='Action 2' />
</Toolbar>
```
