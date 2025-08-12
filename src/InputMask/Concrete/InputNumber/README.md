# InputNumber
## Импорт

```
import { InputNumber } from 'vienna-ui';
``` 


# InputNumber

Компонент ввода чисел. По умолчанию целое число без запятой.



```
    {() => {
        const [value, setValue] = React.useState(23);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputNumber onChange={changeHandler} value={value} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState(23.4);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputNumber value={value} onChange={changeHandler} size='xs' />
                <InputNumber value={value} onChange={changeHandler} size='s' />
                <InputNumber value={value} onChange={changeHandler} size='l' />
                <InputNumber value={value} onChange={changeHandler} size='xl' />
            </Groups>
        );
    }}
```

## Количество символов после запятой

C помощью свойства `scale` можно указать количество символов после запятой. Также делитель дробных частей по умолчанию - запятая. С помощью свойства `delimiter` можно задать другой разделитель.

```
    {() => {
        const [value, setValue] = React.useState(23.4);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups design='vertical'>
                <InputNumber onChange={changeHandler} value={value} scale={1} delimiter={'.'} />
                <InputNumber onChange={changeHandler} value={value} scale={2} delimiter={'.'} />
                <InputNumber onChange={changeHandler} value={value} scale={3} delimiter={'.'} />
            </Groups>
        );
    }}
```

## Разделение на разряды

```
    {() => {
        const [value, setValue] = React.useState('354657126');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups design='vertical'>
                <InputNumber signed min={-800} onChange={changeHandler} value={value} scale={2} thousandsSeparator='' />
                <InputNumber onChange={changeHandler} value={value} scale={2} thousandsSeparator='_' />
                <InputNumber onChange={changeHandler} value={value} scale={2} thousandsSeparator='.' />
            </Groups>
        );
    }}
```

## Диапазон допустимых значений

Чтобы задать диапазон допустимых значений используйте свойства `min` и `max`.

```
    {() => {
        const [value, setValue] = React.useState(5);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputNumber min={-10} max={10} onChange={changeHandler} value={value} />;
    }}
```

Если компонент может принимать только отрицательные значения, знак минуса будет добавлен автоматически.

```
    {() => {
        const [value, setValue] = React.useState(5);
        const changeHandler = React.useCallback(({ value }) => {setValue(value)}, []);
        return <InputNumber min={-10} max={-5} onChange={changeHandler} value={value} />;
    }}
```

## Сокрытие лишних нолей в десятичной части

```
    {() => {
        const [value, setValue] = React.useState(5.2);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputNumber scale={12} padFractionalZeros={false} onChange={changeHandler} value={value} />;
    }}

```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputNumber viewOnly value={12.5} scale={10} max={500} />
```