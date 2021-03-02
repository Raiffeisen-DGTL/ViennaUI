# PaymentLogo

Компонент для отображения логотипов платежных систем.

## Импорт

```
import { PaymentLogo } from 'vienna-ui';
```

## Свойства / Props

| Prop         | Type                                             | Default      | Description |
| ------------ | ------------------------------------------------ | ------------ | ----------- |
| logo         | "mastercard" \| "mir" \| "visa" \| undefined     | "mastercard" |
| design       | "wildsand" \| "whitebox" \| "ghost" \| undefined | "wildsand"   |
| size         | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined   | "m"          |
| clickable    | boolean \| undefined                             | false        |
| forwardedRef | any                                              | false        |

## Использование

```
<PaymentLogo logo='mir' />
```

## Дизайн

##### Свойство `design`

#### Прозрачный фон

Компонент важен для использования в случаях, когда использование компонента с фоном не применимо, для размещения на примерах карт и использования в графике.

```
<PaymentLogo logo='mir' design='ghost' />
```

#### Серый и белый фоном

Для размещения компонента в таблцах или рядом с другими логотипами плтаежных систем используй логотип с фоном. Ширина и высота для таких компонентов одинакова в массве данных они не будут выделяться.

```
<div style={{ background: '#fff' }}>
    <PaymentLogo logo='mastercard' design='wildsand' />
</div>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `m` (по умолчанию), `l` и `xl`.
