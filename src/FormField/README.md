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


# FormField

Компонент-обертка для элементов формы. Компонент `FormField` служит для построения контролируемых элементов формы, обеспечивая структурированное и удобное отображение полей ввода, меток и сообщений о валидации. Он позволяет легко управлять внешним видом и поведением полей формы, предоставляя различные настройки для размеров, стилей и состояний.
Компонент `FormField` является важным элементом для создания функциональных форм, обеспечивая гибкость и удобство в разработке пользовательского интерфейса.



```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```

## Внешний вид

```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```

## Размер

В компоненте представлены два размера 's' | 'm'. По умолчанию свойство `size` имеет значение `m`.

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
    <FormField size='s'>
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
            <FormField.Message color="critical">
                Сообщение об ошибке
            </FormField.Message>
        </FormField.Content>
    </FormField>
```

#### С предупреждением

```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message color="warning">
                Предупреждение
            </FormField.Message>
        </FormField.Content>
    </FormField>
```

#### С предупреждением и ошибкой

```
    <FormField>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
            <FormField.Message color="warning">
                Предупреждение
            </FormField.Message>
            <FormField.Message color="critical">
                Сообщение об ошибке
            </FormField.Message>
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

## Возможность убрать блок для Message через fixateMessageHeight

Значение `fixateMessageHeight={false}` позволяет отключить отступ под валидационное сообщение.

```
    <FormField fixateMessageHeight={false}>
        <FormField.Label>Название поля</FormField.Label>
        <FormField.Content>
            <Input />
        </FormField.Content>
    </FormField>
```

## Установка data-testid

Атрибут `data-testid` можно передать для контейнера внутри контента, лейбла и сообщения. Передается с помощью пропса `testId?: { container }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultFormFieldContentTestId: ContentProps['testId'] = {
    container: 'form-field_content_container',
};
```
```
export const defaultFormFieldLabelTestId: LabelProps['testId'] = {
    container: 'form-field_label_container',
};
```
```
export const defaultFormFieldMessageTestId: MessageProps['testId'] = {
    container: 'form-field_message_container',
};
```

```
    <FormField>
        <FormField.Label testId={{ container: 'label_container' }}>Название поля</FormField.Label>
        <FormField.Content testId={{ container: 'content_container' }}>
            <Input />
            <FormField.Message testId={{ container: 'message_container' }}>Сообщение</FormField.Message>
        </FormField.Content>
    </FormField>
```