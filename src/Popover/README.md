# Popover

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику. Основная особенность в том, что есть возможность блокировки прокрутки страницы.

## Импорт

```
import { Popover } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "dark" \| "light" \| undefined | "light" |
| anchor | "top" \| "bottom" \| "left" \| "right" \| "center" \| "auto" \| undefined | "auto" | Направление отображения |
| header | ReactNode | false |
| noScroll | boolean \| undefined | false | Блокировать прокрутку экрана если элемент активен |
| allowKeyboardEvents | boolean \| undefined | false | Включить поддержку событий клавиатуры (для Popover = false, для Hint = true) |
| noClose | boolean \| undefined | false | Отключает иконку закрытия |
| content | ReactNode | false |
| width | number | 250 | Ширина компонента в px |

## Использование

Компонент в качестве дочернего элемента принимает компонент, для которого нужно отобразить контент.

```
() => {
  return (
    <Popover
      placement="right"
      action="click"
      header="This is header"
      content="Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla."
    >
      {ref => <Button forwardedRef={ref}>Popover</Button>}
    </Popover>
  )
}
```
