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
<Tooltip content="tooltip" placement="auto">
  {ref => <Input ref={ref} />}
</Tooltip>
```
