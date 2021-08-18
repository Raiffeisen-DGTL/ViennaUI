# Flex

Коспонент для создания флекс-боксов, поддерживает все css-свойства флекс-контейнера.

## Импорт

```
import { Flex } from 'vienna-ui';
```

## Свойства Flex

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | 'primary' \| 'ghost' \| undefined | 'primary' | Дизайн |
| inline | boolean \| undefined | false | display:inline-flex или display:flex |
| center | boolean \| undefined | false | Устанавливает значения justify-content и align-items равным 'center' |
| justifyContent | [Одно из](https://developer.mozilla.org/ru/docs/Web/CSS/justify-content) \| undefined | 'normal' |
| alignItems | [Одно из](https://developer.mozilla.org/ru/docs/Web/CSS/align-items) \| undefined | 'normal' |
| alignContent | [Одно из](https://developer.mozilla.org/ru/docs/Web/CSS/align-content) \| undefined | 'normal' |
| wrap | 'nowrap' \| 'wrap' \| 'wrap-reverse' \| undefined | 'normal' |
| flow | string | 'normal' | Сокращенная форма для свойств <‘flex-direction’> \|\| <‘flex-wrap’> |

## Свойства Flex.Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| order | string \| undefined | false | [order](https://developer.mozilla.org/ru/docs/Web/CSS/order) |
| grow | string \| undefined | false | [flex-grow](https://developer.mozilla.org/ru/docs/Web/CSS/flex-grow) |
| shrink | string \| undefined | false | [flex-shrink](https://developer.mozilla.org/ru/docs/Web/CSS/flex-shrink) |
| basis | string \| undefined | false | [flex-basis](https://developer.mozilla.org/ru/docs/Web/CSS/flex-basis) |
| flex | string \| undefined | false | [flex](https://developer.mozilla.org/ru/docs/Web/CSS/flex) |
| alignSelf | [Одно из](https://developer.mozilla.org/ru/docs/Web/CSS/align-self) \| undefined | 'auto' | [align-self](https://developer.mozilla.org/ru/docs/Web/CSS/align-self) |

## Использование

Компонент состоит из родительского контейнера `Flex` и дочерних элементов `Flex.Item`. `Flex.Item` поддерживает все свойства дочерненго элемента.

```
<Flex>
    <Flex.Item grow='2'>
        <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
    </Flex.Item>
    <Flex.Item grow='1'>
        <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
    </Flex.Item>
    <Flex.Item basis='100px'>
        <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
    </Flex.Item>
    <Flex.Item basis='200px'>
        <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
    </Flex.Item>
</Flex>
```
