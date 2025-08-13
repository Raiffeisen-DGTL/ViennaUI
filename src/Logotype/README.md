# Logotype

Стандартный логотип Raiffeisenbank

## Импорт

```
import { Logotype } from 'vienna-ui';
```

## Свойства / Props

| Prop      | Type                                                   | Default | Description |
| --------- | ------------------------------------------------------ | ------- | ----------- |
| size      | 'xs' \| 's' \| 'm' \| 'l' \| 'xl'                      |    |
| design    | 'light' \| 'dark' \| 'monochrome' \| 'monochrome-dark' |    |
| locale    | 'ru' \| 'en'                                           |    |
| collapsed | boolean \| undefined                                   |    |


# Logotype

Стандартный логотип



```
    <Logotype />
```

## Внешний вид

```
    <Logotype />
```

#### Свёрнутое состояние

С помощью флага `collapsed` можно отобразить логотип в свёрнутом состоянии, при котором надпись отсутствует.

```
    <Logotype collapsed />
```


#### Дизайн

Свойство `design` может принимать одно из значений: "dark" | "light" | "monochrome". Значение по умолчанию "light".

```
        <Logotype />
```

###### Чёрно-белый логотип

Установив свойство `design` в значение `monochrome`, можно отобразить чёрно-белый логотип.

```
    <Logotype design='monochrome' />
```

###### Тёмная тема

Установив свойство `design` в значение `dark`, можно отобразить логотип для тёмной темы.

```
    <Groups design='vertical' size='xl'>
        <Logotype design='dark' />
    </Groups>
```

## Locale

С помощью параметра `locale` можно установить язык логотипа. Поддерживается два значения `en` и `ru`.

```
    <Logotype locale='ru' />
    <Logotype locale='en' />
```

## Однострочный логотип

С помощью параметра `type` можно установить стиль логотипа. Принимает значения: "default" | "one-line". По умолчанию принимает значение "default" - отображение логотипа в две строки. Значение 'one-line' служит для отображения в одну строку.

```
    <Logotype type='one-line' />
    <Logotype type='one-line' locale='en' />
```

## Вертикальный логотип

С помощью свойства `orientation` в значении 'vertical' можно задать вертикальное отображение логотипа.

```
    <>
        <Logotype orientation='vertical' />
    </>
```

## Размеры

С помощью параметра `size` можно установить размер логотипа. Поддерживается 6 размеров `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```
    <Groups design='vertical'>
        <Logotype size='xs' collapsed />
        <Logotype size='s' collapsed />
        <Logotype size='m' collapsed />
        <Logotype size='l' collapsed />
        <Logotype size='xl' collapsed />
        <Logotype size='xxl' collapsed />
    </Groups>
    <Groups design='vertical'>
        <Logotype size='xs' />
        <Logotype size='s' />
        <Logotype size='m' />
        <Logotype size='l' />
        <Logotype size='xl' />
        <Logotype size='xxl' />
    </Groups>
    <Groups design='vertical'>
        <Logotype size='xs' locale='en' />
        <Logotype size='s' locale='en' />
        <Logotype size='m' locale='en' />
        <Logotype size='l' locale='en' />
        <Logotype size='xl' locale='en' />
        <Logotype size='xxl' locale='en' />
    </Groups>
```