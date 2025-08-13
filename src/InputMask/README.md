# InputMask

Компонент ввода текстовых данных по маске.

## Импорт

```
import { InputMask } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| maskOptions | `Opts` | — |  |
| value | `unknown` | — |  |
| readOnly | `boolean` | — |  |
| viewOnly | `boolean` | — |  |
| viewOnlyText | `React.ReactNode` | — |  |
| onChange | `(data: { value: unknown, isComplete: boolean, unmaskedValue?: unknown }) => void` | — |  |




## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| title | string \| undefined | |
| className | string \| undefined | |
| spellCheck | boolean \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |
| style | CSSProperties \| undefined | |
| name | string \| undefined | |
| type | string \| undefined | |
| maxLength | number \| undefined | |
| autoComplete | string \| undefined | |
| autoCorrect | string \| undefined | |
| autoFocus | boolean \| undefined | |
| readOnly | boolean \| undefined | |
| placeholder | string \| undefined | |
| disabled | boolean \| undefined | |


# InputMask

Компонент ввода данных по маске



```
    {() => {
        const [value, setValue] = React.useState();
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <InputMask
                value={value}
                onChange={changeHandler}
                maskOptions={{mask: Number}}
            />
        );
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask.

```
    {() => {
        const [value, setValue] = React.useState();
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputMask value={value} onChange={changeHandler} size='xs' />
                <InputMask value={value} onChange={changeHandler} size='s' />
                <InputMask value={value} onChange={changeHandler} size='l' />
                <InputMask value={value} onChange={changeHandler} size='xl' />
            </Groups>
        );
    }}
```

## Стандартные элементы

Для удобства реализовано несколько стандартных компонентов маски.

##### Account

```
    <InputAccount value='111111' />
```

##### Card

```
    <InputCard value='111111' />
```

##### Дата

```
    <InputDate value='22.02.1' />
```

##### Дата с периодом

```
    <InputDateRange value='11.12.1900 - 12' />
```

##### Digital

```
    <InputDigital value='1231' />
```

##### Число

```
    <InputNumber value='123123123.123' scale={3} />
```

##### Телефон

```
    <InputPhone value='749539' />
```

## Паттерны масок

Чтобы задать паттерн для маски, нужно использовать:
0 - для любого числа,
a - для любой буквы, * для любого символа

Чтобы 0, а или * использовались как обычные символы, их нужно экранировать с помощью двойного обратного слэша

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups design='vertical'>
                <InputMask
                    value={value}
                    onChange={changeHandler}
                    maskOptions={{mask:"\\0000"}}
                />
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
    <InputMask viewOnly maskOptions={{ mask: '0000' }} value={'7812'} />
```