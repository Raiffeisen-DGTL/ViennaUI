# PaymentLogo

Компонент для отображения логотипов платежных систем.

## Импорт

```
import { PaymentLogo } from 'vienna-ui';
```

## Свойства / Props

| Prop         | Type                                             | Default      | Description |
| ------------ | ------------------------------------------------ | ------------ | ----------- |
| logo         | "mastercard" \| "mir" \| "visa" \| undefined     | |
| design       | "wildsand" \| "whitebox" \| "ghost" \| undefined |   |
| size         | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined   |         |
| clickable    | boolean \| undefined                             |         |

## Использование


```
    <Groups>
        <PaymentLogo logo='mastercard' />
        <PaymentLogo logo='mir' />
        <PaymentLogo logo='visa' />
    </Groups>
```


## Внешний вид

```
    <PaymentLogo logo='mastercard' />
    <PaymentLogo logo='mir' />
    <PaymentLogo logo='visa' />
```

## Внешний вид

#### Прозрачный фон

Компонент важен для использования в случаях, когда использование компонента с фоном не применимо, для размещения на примерах карт и использования в графике.

```
    <PaymentLogo logo='mastercard' design='ghost' />
    <PaymentLogo logo='mir' design='ghost' />
    <PaymentLogo logo='visa' design='ghost' />
```

#### Серый и белый фоном

Для размещения компонента в таблцах или рядом с другими логотипами плтаежных систем используй логотип с фоном. Ширина и высота для таких компонентов одинакова в массве данных они не будут выделяться.

```
    <PaymentLogo logo='mastercard' design='wildsand' />
    <PaymentLogo logo='mir' design='wildsand' />
    <PaymentLogo logo='visa' design='wildsand' />
```

```
    <PaymentLogo logo='mastercard' design='whitebox' />
    <PaymentLogo logo='mir' design='whitebox' />
    <PaymentLogo logo='visa' design='whitebox' />
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `m`, `l` и `xl`.

```
    <Groups>
        <PaymentLogo logo='mastercard' size='xs' />
        <PaymentLogo logo='mastercard' size='s' />
        <PaymentLogo logo='mastercard' size='m' />
        <PaymentLogo logo='mastercard' size='l' />
        <PaymentLogo logo='mastercard' size='xl' />
    </Groups>
    <Groups>
        <PaymentLogo logo='mir' size='xs' />
        <PaymentLogo logo='mir' size='s' />
        <PaymentLogo logo='mir' size='m' />
        <PaymentLogo logo='mir' size='l' />
        <PaymentLogo logo='mir' size='xl' />
    </Groups>
    <Groups>
        <PaymentLogo logo='visa' size='xs' />
        <PaymentLogo logo='visa' size='s' />
        <PaymentLogo logo='visa' size='m' />
        <PaymentLogo logo='visa' size='l' />
        <PaymentLogo logo='visa' size='xl' />
    </Groups>
```
