# Toolbar

Компонент используется в таблицах, списках, с карточками и отображает действия, которые можно осуществить с выбранным контентом. Компонент может располагаться над или под контентом, и его необходимо закреплять при прокрутке.

## Импорт

```
import { Toolbar } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "dark" \| "light" \| undefined |  |
| onClick | ClickEvent \| undefined |  |

## HTMLAttributes

 Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined |  |
| name | string \| undefined |  |


## Свойства операции / Operation Props

| Prop  | Type                   | Default | Description        |
| ----- | ---------------------- | ------- | ------------------ |
| ref   | any                    | false   |
| id    | string                 | false   |
| name  | string                 | false   |
| icon  | ReactNode \| undefined | false   | Иконка             |
| label | ReactNode \| undefined | false   | Заголовок операции |

## Использование

```
    <Toolbar>
        <Toolbar.Operation icon={<Attach />} label={'Action 1'} />
        <Toolbar.Operation icon={<Attach />} label={'Action 2'} />
        <Toolbar.Operation icon={<Attach />} label={'Action 3'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
        </Toolbar.Operation>
        <Toolbar.Operation icon={<Attach />} label={'Action 4'} />
        <Toolbar.Operation icon={<Attach />} label={'Action 5'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
            <Toolbar.Operation label={'Option 4'} />
        </Toolbar.Operation>
        <Toolbar.Operation icon={<Attach />} label={'Action 6'} />
        <Toolbar.Operation icon={<Attach />} label={'Action 7'} />
    </Toolbar>
```

## Внешний вид

```
    {() => {
        return (
            <Toolbar>
                <Toolbar.Operation icon={<Attach />} label={'Action 1'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 2'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 3'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<Attach />} label={'Action 4'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 5'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                    <Toolbar.Operation label={'Option 4'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<Attach />} label={'Action 6'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 7'} />
            </Toolbar>
        );
    }}
```

## Темный дизайн

```
    {() => {
        return (
            <Toolbar design='dark'>
                <Toolbar.Operation icon={<Attach />} label={'Action 1'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 2'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 3'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<Attach />} label={'Action 4'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 5'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                    <Toolbar.Operation label={'Option 4'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<Attach />} label={'Action 6'} />
                <Toolbar.Operation icon={<Attach />} label={'Action 7'} />
            </Toolbar>
        );
    }}
```

