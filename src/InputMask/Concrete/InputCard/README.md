# InputCard
## Импорт

```
import { InputCard } from 'vienna-ui';
``` 



# InputCard

Компонент ввода номера карты



```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputCard value={value} onChange={changeHandler} />;
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
                <InputCard value={value} onChange={changeHandler} size='xs' />
                <InputCard value={value} onChange={changeHandler} size='s' />
                <InputCard value={value} onChange={changeHandler} size='l' />
                <InputCard value={value} onChange={changeHandler} size='xl' />
            </Groups>
        )
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputCard viewOnly value={'1231 2312 3123 2132'} />
```