# FormField

Компонент обертка для элементов формы


## Импорт

```
import { FormField } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
inline | boolean \| undefined | false | Заголовок и компонент отображается в одну строку

## Свойства сообщения / Message Props

Prop | Type | Default | Description
--- | --- | --- | ---
color | 'warning' \| 'critical' |  | Цвет текста сообщения
align | 'left' \| 'center' \| 'right' | 'left' | Выравнивание текста

## Свойства заголовка / Label Props

Prop | Type | Default | Description
--- | --- | --- | ---
required | boolean |  | Отображение звездочки
htmlFor | string |  | ID labelable-элемента, который находится в том же документе, что и компонент `FormField.Label`

## Использование

Компонент состоит из родительского компонента `FormField` и дочерних компонентов `FormField.Label`, `FormField.Content` и `FormField.Message`.

## Внешний вид

```jsx
<FormField>
    <FormField.Label>Название поля</FormField.Label>
    <FormField.Content>
        <Input />
        <FormField.Message>Сообщение</FormField.Message>
    </FormField.Content>
</FormField>
```

## Обязательное поле
##### Свойство `FormField.Label`, `required`

Для отображение звездочки можно использовать свойство `required` компонента `FormField.Label`.

```jsx
<FormField>
    <FormField.Label required>Обязательное поле</FormField.Label>
    <FormField.Content>
        <Input />
    </FormField.Content>
</FormField>
```

## Сообщения
##### Свойство `FormField.Message`, `color`

Для `FormField.Message` есть два доступных значения свойства `color`: `warning`, `critical`.

```jsx
<FormField>
    <FormField.Label>Название поля</FormField.Label>
    <FormField.Content>
        <Input />
        <FormField.Message color='warning'>Предупреждение</FormField.Message>
    </FormField.Content>
</FormField>
```


## Строчное отображение
##### Свойство `inline`

```jsx
<FormField inline>
    <FormField.Label>Название поля в одну строку:</FormField.Label>
    <FormField.Content>
        <Input />
        <FormField.Message>Сообщение</FormField.Message>
    </FormField.Content>
</FormField>
```
