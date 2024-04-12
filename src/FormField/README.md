# FormField

Компонент обертка для элементов формы

## Импорт

```
import { FormField } from 'vienna-ui';
```

## Свойства / Props

| Prop   | Type                 | Default | Description                                      |
| ------ | -------------------- | ------- | ------------------------------------------------ |
| inline | boolean \| undefined |    | Заголовок и компонент отображается в одну строку |
| size | FormFieldSize  \| undefined |
| fixateMessageHeight | boolean \| undefined |


## Использование


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

## Размер

По умолчанию `size` имеет значение `s`.

```
    <FormField size='s'>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
    <FormField size='m'>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```

Чтобы изменить размер передаваемого поля, необходимо задать `size` для самого поля.

```
    <FormField size='m'>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input size='xl' />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```
#### Без сообщения

```
    <FormField>
        <FormField.Label>Название поля (без сообщения)</FormField.Label>
        <FormField.Content>
            <Input />
        </FormField.Content>
    </FormField>
```

#### С меткой обязательности и ошибкой

```
    <FormField>
        <FormField.Label required>Обязательное поле</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message color='critical'>Сообщение об ошибке</FormField.Message>
        </FormField.Content>
    </FormField>
```

#### С предупреждением

```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message color='warning'>Предупреждение</FormField.Message>
        </FormField.Content>
    </FormField>
```

#### С предупреждением и ошибкой

```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message color='warning'>Предупреждение</FormField.Message>
            <FormField.Message color='critical'>Сообщение об ошибке</FormField.Message>
        </FormField.Content>
    </FormField>
```

## Строчное отображение

```
    <FormField inline>
        <FormField.Label>Название поля в одну строку:</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```