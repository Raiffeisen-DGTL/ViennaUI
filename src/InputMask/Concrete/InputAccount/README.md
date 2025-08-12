# InputAccount

## Импорт

```
import { InputAccount } from 'vienna-ui';
``` 


# InputAccount

Компонент ввода номера счета



```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputAccount value={value} onChange={changeHandler} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputAccount value={value} onChange={changeHandler} size='xs' />
                <InputAccount value={value} onChange={changeHandler} size='s' />
                <InputAccount value={value} onChange={changeHandler} size='l' />
                <InputAccount value={value} onChange={changeHandler} size='xl' />
            </Groups>
        );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputAccount viewOnly value={'12312.312.3.12312313123'} />
```