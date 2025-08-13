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

# Toolbar

Компонент используется в таблицах, списках, с карточками и отображает действия, которые можно осуществить с выбранным контентом. Компонент может располагаться над или под контентом, и его необходимо закреплять при прокрутке.



```
    <Toolbar>
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} />
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
        </Toolbar.Operation>
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 4'} />
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 5'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
            <Toolbar.Operation label={'Option 4'} />
        </Toolbar.Operation>
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 6'} />
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
    </Toolbar>
```

## Внешний вид

Свойство `design` может принимать одно из значений 'light' или 'dark'. По умолчанию значение 'light'.

```
    {() => {
        return (
            <Toolbar>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 4'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 5'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                    <Toolbar.Operation label={'Option 4'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 6'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
            </Toolbar>
        );
    }}
```

#### Темный дизайн

```
    {() => {
        return (
            <Toolbar design='dark'>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 4'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 5'}>
                    <Toolbar.Operation label={'Option 1'} />
                    <Toolbar.Operation label={'Option 2'} />
                    <Toolbar.Operation label={'Option 3'} />
                    <Toolbar.Operation label={'Option 4'} />
                </Toolbar.Operation>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 6'} />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
            </Toolbar>
        );
    }}
```

## Cостояние disabled

Свойство `disabled` сделает опцию внутри Toolbar недоступной.

```
    {() => {
        return (
            <Toolbar>
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} disabled />
                <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
            </Toolbar>
        );
    }}
```

## Кастомизация текста выпадающего списка действий

Если действия не помещаются в Toolbar, то появляется выпадающий список, содержащий не поместившиеся действия. По умолчанию кнопка, раскрывающая этот список, содержит текст "More Options". Для изменения этого текста используйте свойство
`moreOptionsText`.

```
    <Toolbar moreOptionsText={'Другое'}>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 4'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 5'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
                <Toolbar.Operation label={'Option 4'} />
            </Toolbar.Operation>
            <Toolbar.Operation visible={false} icon={<AttachIcon />} label={'Action 6'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 4'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 5'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
                <Toolbar.Operation label={'Option 4'} />
            </Toolbar.Operation>
            <Toolbar.Operation visible={false} icon={<AttachIcon />} label={'Action 6'} />
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
    </Toolbar>
```

## Отображение иконки стрелки для выпадающих списков действий

Для того, чтобы выпадающие списки действий отображались с иконкой стрелки вместо стандартного троеточия, используйте свойство
`enableArrowIcons`.

```
    <Toolbar moreOptionsText={'Другое'} enableArrowIcons>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 1'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 2'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
                <Toolbar.Operation label={'Option 4'} />
            </Toolbar.Operation>
            <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
    </Toolbar>
```


## Возможность позиционирования выпадающего списка

С помощью свойства `isFixed` можно позиционировать выпадающий список через position: fixed. Свойство дает возможность Toolbar открыться сверху, когда нет места снизу и наоборот.

```
    <Toolbar isFixed>
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 3'}>
            <Toolbar.Operation label={'Option 1'} />
            <Toolbar.Operation label={'Option 2'} />
            <Toolbar.Operation label={'Option 3'} />
        </Toolbar.Operation>
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 6'} />
        <Toolbar.Operation icon={<AttachIcon />} label={'Action 7'} />
    </Toolbar>
```