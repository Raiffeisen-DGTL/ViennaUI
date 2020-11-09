# Logotype

Стандартный логотип Raiffeisenbank


## Импорт

```
import { Logotype } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
size | 'xs' \| 's' \| 'm' \| 'l' \| 'xl' | false |
design | 'light' \| 'dark' \| 'monochrome' \| 'monochrome-dark' | false |
locale | 'ru' \| 'en' | false |
collapsed | boolean \| undefined | false |

## Использование

```jsx
<Logotype />
```

## Свёрнутое состояние
##### Свойство `collapsed`

С помощью флага `collapsed` можно отобразить логотип в свёрнутом состоянии, при котором надпись отсутствует.

```jsx
<Logotype collapsed />
```

## Чёрно-белый логотип
##### Свойство `design`

```jsx
<Logotype design='monochrome' />
```

#### Тёмная тема

Установив свойство `design` в значение `dark` можно отобразить логотип для тёмной темы. Дизайн `monochrome-dark` исользуется для черно-белого логотипа в тёмной теме.

```jsx
<Groups design='vertical' size='xl'>
    <Logotype design='dark' />
    <Logotype design='monochrome-dark' />
</Groups>
```

## Локализация
##### Свойство `locale`

С помощью параметра `locale` можно устновать язык логотипа. Поддерживается два значения `en` и `ru`.

## Размеры
##### Свойство `size`

С помощью параметра `size` можно установить размер логотипа. Поддерживается 5 размеров `xs`, `s`, `m`, `l`, `xl`.
