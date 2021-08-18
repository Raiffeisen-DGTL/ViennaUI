# Tooltip

Компонент используется для обычных подсказок при наведении на элемент (кнопку, иконку, картинку ссылку). Количество объектов, к которым может вызываться тултип, не стандартизируется и определяется потребностями продуктов.

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| ref | any | false |
| design | "dark" \| "light" \| undefined | "light" |
| content | React.ReactNode \| undefined | false |
| anchor | "top" \| "bottom" \| "left" \| "right" \| "center" \| "auto" \| undefined | "auto" | Направление отображения |
| size | "s" \| "m" | "m" |
| width | number | 250 | Ширина компонента в px |
| disabled | boolean \| undefined | false |
| allowInteraction | boolean \| undefined | false | Включает взаимодействие с элементами внутри тултипа |
| truncate | boolean \| undefined | false | Управляет отображением всей строки или обрезает ее |

## Использование

В качестве дочернего элемента принимает компонент, на котором будет показываться тултип.

```
<Tooltip content='tooltip' anchor='left' design='dark'>
    <Input />
</Tooltip>
```

## Контент

##### Свойство `content`

Свойство `content` принимает компонент, который будет отображаться в открытом (активном) тултипе.

```
<Tooltip content='tooltip'>
    <Input />
</Tooltip>
```

## Размер

##### Свойство `size`

Доступные размеры `size`: `s` и `m` (по умолчанию).

## Дизайн

##### Свойство `design`

Можно выбрать цветовую схему `light` (по умолчанию) или `dark`.

```
<Tooltip content='tooltip' design='dark'>
    <Input />
</Tooltip>
```

## Якорь

##### Свойство `anchor`

Можно задавать позицию `left`, `bottom`, `right`, `top` или `auto` (по умолчанию). При `anchor='auto'` тултип будет занимать доступную позицию (по умолчанию пытается открыться вниз)

```
<Tooltip content='tooltip' anchor='left'>
    <Input />
</Tooltip>
```

## Неактивное состояние

##### Свойство `disabled`

Чтобы тултип не появлялся на компоненте, можно передать свойство `disabled`.

```
<Tooltip content='tooltip' disabled>
    <Input />
</Tooltip>
```

## Ширина компонента

##### Свойство `width`

```jsx
<Tooltip content='tooltip' width={20}>
    <Input />
</Tooltip>
```

## Неполное отображение контента

##### Свойство `truncate`

Если необходимо ограничить размер текста внутри тултипа, можно передать свойство `truncate`. Текст будет обрезаться, исходя из параметра `width`.

```
<Tooltip content='tooltip' truncate width={20}>
    <Input />
</Tooltip>
```

## Ручная активация

Если сослаться на `Tooltip`, и вызвать его методы `show` или `hide`, то можно открыть или закртыть его без ожидания действия от курсора, при этом сам компонент также скроется при прокрутке.

```{() => {
    const tooltipRef = React.useRef();
    const show = React.useCallback(() => {
        if (tooltipRef.current) {
            tooltipRef.current.show();
        }
    }, []);
    const hide = React.useCallback(() => {
        if (tooltipRef.current) {
            tooltipRef.current.hide();
        }
    }, []);
    return (
        <Groups>
            <Tooltip ref={tooltipRef} content='manual tooltip'>
                <Input />
            </Tooltip>
            <Button design='accent' onClick={show}>
                Show tooltip
            </Button>
            <Button onClick={hide}>Hide Tooltip</Button>
        </Groups>
    );
}}
```

## Возможность взаимодействовать с элементами внутри тултипа

##### Свойство `allowInteraction`

По умолчанию, тултип исчезает, в тот момент, когда курсос уходит с компонента, вызвавшего тултип. Чтобы была возможность взаимодействовать с контентом (элементами) внутри тултипа, нужно прокинуть свойство `allowInteraction`.

```{() => {
    const [state, setState] = React.useState('');
    const handleClick = React.useCallback(() => setState(new Date()), []);
    return (
        <Groups>
            <Tooltip allowInteraction content={<Button onClick={handleClick}>Click Me</Button>}>
                <Input value={state} />
            </Tooltip>
        </Groups>
    );
}}
```
