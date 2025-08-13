# InputDigital

## Импорт

```
import { InputDigital } from 'vienna-ui';
``` 

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| number \| null` | — | Значение, передаваемое в компонент |
| `onChange` | `(data: { value: string \| number \| null; event: ChangeEvent<HTMLInputElement>; options: { name?: string; isComplete: boolean; unmaskedValue?: unknown; }) => void \| undefined` | — | Обработчик изменения значения |
| `parent` | `Masked<any> \| undefined` | — | Родительский маскированный объект |
| `prepare` | `(chars: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => string \| [string, ChangeDetails] \| undefined` | — | Преобразует значение перед применением маски |
| `prepareChar` | `(chars: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => string \| [string, ChangeDetails] \| undefined` | — | Преобразует **каждый символ** перед применением маски |
| `validate` | `(value: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => boolean \| undefined` | — | Проверяет, является ли значение допустимым |
| `commit` | `(value: string, masked: Masked<any>) => void \| undefined` | — | Выполняет дополнительную логику после завершения ввода |
| `format` | `(value: DateValue, masked: Masked<any>) => string` \| `(value: number, masked: Masked<any>) => string` \| `(value: string, masked: Masked<any>) => string` \| `(value: any, masked: Masked...>) => string` \| `undefined` | — | Форматирует значение в строку |
| `parse` | `(str: string, masked: Masked<any>) => DateValue` \| `(str: string, masked: Masked<any>) => number` \| `(str: string, masked: Masked<any>) => string` \| `(str: string, masked: Masked...>) => any` \| `undefined` | — | Парсит строку в typed value |
| `overwrite` | `boolean \| 'shift' \| undefined` | — | Включает режим перезаписи символов |
| `eager` | `boolean \| 'remove' \| 'append' \| undefined` | — | Режим "eager" для маски |
| `skipInvalid` | `boolean \| undefined` | — | Пропускать недопустимые символы |
| `autofix` | `boolean \| 'pad' \| undefined` | — | Автоматически исправляет значение |
| `thousandsSeparator` | `string \| undefined` | — | Разделитель тысячных (один символ) |
| `as` | `KnownTarget \| undefined` | — | Динамически изменяет отображаемый компонент или HTML-тег, например `as="input"` |
| `forwardedAs` | `KnownTarget \| undefined` | — | Используется для передачи другого тега/компонента |
| `theme` | `DefaultTheme \| undefined` | — | Тема компонента |
| `onComplete` | `(value: string, maskRef: InputMaskFactoryOpts>, e?: InputEvent \| undefined) => void \| undefined` | — | Вызывается, когда ввод завершён |
| `isFocusAllowMask` | `boolean \| undefined` | — | Позволяет фокусироваться на маске |



# InputDigital

Компонент ввода целых чисел



```
    {() => {
        const [value, setValue] = React.useState(null);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputDigital value={value} onChange={changeHandler} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState(null);
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputDigital value={value} onChange={changeHandler} size='xs' />
                <InputDigital value={value} onChange={changeHandler} size='s' />
                <InputDigital value={value} onChange={changeHandler} size='l' />
                <InputDigital value={value} onChange={changeHandler} size='xl' />
            </Groups>
        );
    }}
```

## Работа со строчными или числовыми значениями

Компонент помимо числовых значений может работать еще и со строчными. Для этого достаточно передать в `value` любую строку.

Под капотом компонент выполняет проверку, если передана в `value` строка, то работаем со строчными значениями и в `onChange`
будет также приходить строка. Если передано `null` или `number`, то работаем как с числом и в `onChange` будет также приходить
`null` или `number` в зависимости пустое поле или нет

Также необходимо иметь в виду, что при работе со строкой и указанными свойствами `min` и `max`, после потери фокуса значение будет проверяться
на соответствие по этим свойствам. И если передана строка с нулями в начале, например `0000100`, то при приведении к `min` или `max`
значение выведется без нулей

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputDigital min={150} value={value} onChange={changeHandler} />;
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputDigital viewOnly value={'12312312'} />
```