# InputMask

Компонент ввода текстовых данных по маске.

## Импорт

```
import { InputMask } from 'vienna-ui';
```


### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix` | `ReactNode` | — | Значение, отображаемое перед компонентом |
| `onFocus` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при получении фокуса |
| `onBlur` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при потере фокуса |
| `ref` | `Ref<HTMLInputElement> \| undefined` | — | Ссылка на нативный элемент `<input>`, доступна после отрисовки |
| `size` | `ResponsiveProp<'s' \| 'xs' \| 'm' \| 'l' \| 'xl' \| 'xxl', Breakpoints> \| undefined` | — | Размеры компонента |
| `defaultValue` | `string \| undefined` | — | Значение в поле ввода по умолчанию (для первого рендера) |
| `autoCapitalize` | `string \| undefined` | — | Автоматическая установка заглавной буквы |
| `onCopy` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события копирования |
| `onCut` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вырезки |
| `onPaste` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вставки |
| `onKeyDown` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| `onKeyPress` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии и удержании кнопки с печатаемым символом |
| `onKeyUp` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при отпускании кнопки клавиатуры |
| `as` | `KnownTarget \| undefined` | — | Динамически изменяет отображаемый компонент или HTML-тег |
| `forwardedAs` | `KnownTarget \| undefined` | — | Используется для передачи другого тега/компонента |
| `theme` | `DefaultTheme \| undefined` | — | Тема компонента |
| `design` | `'outline' \| 'material' \| undefined` | — | Дизайн компонента |
| `align` | `'left' \| 'center' \| 'right' \| undefined` | — | Выравнивание текста внутри поля ввода |
| `invalid` | `boolean \| undefined` | — | Устанавливает индикацию ошибки |
| `smartPlaceholder` | `ReactNode` | — | Умное значение placeholder |
| `onDispose` | `() => void \| undefined` | — | Вызывается при удалении компонента |
| `placeholderValueAutoDiff` | `boolean \| undefined` | `true` | Автоматическое сравнение и вычитание введённого значения из `smartPlaceholder` |
| `onUpdated` | `() => void \| undefined` | — | Вызывается, когда значение обновлено |
| `private props` | — | — | — |
| `extraNativeProps` | `{ [key: string]: any; } \| undefined` | — | Для передачи дополнительных нативных атрибутов, которые могут конфликтовать с имеющимися пропсами, например `size` |
| `postfix` | `ReactNode` | — | Значение, отображаемое после компонента |
| `active` | `boolean \| undefined` | — | Принудительный ховер |
| `additionalPostfix` | `ReactNode` | — | Режим для включения иконки "Close" в компоненте `Search` |
| `viewOnly` | `boolean \| undefined` | — | Компонент отображается как текст, без поля ввода |
| `viewOnlyText` | `ReactNode` | — | Значение, отображаемое в режиме `viewOnly` |
| `onComplete` | `((value: string, maskRef: InputMaskFactoryOpts>, e?: InputEvent \| undefined) => void) \| undefined` | — | Вызывается, когда ввод завершён |
| `maskOptions` | `*` | `FactoryOpts` | Дополнительные параметры для маски |
| `value` | `unknown` | — | Контролируемое значение поля ввода |
| `onChange` | `(data: { value: unknown; isComplete: boolean; unmaskedValue?: unknown; }) => void \| undefined` | — | Обработчик изменения значения |

---

### HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string \| undefined` | — | Включение встроенного в браузер автокомплита |
| `disabled` | `boolean \| undefined` | — | Компонент неактивен, если `true` |
| `maxLength` | `number \| undefined` | — | Максимальная длина вводимого значения в символах |
| `name` | `string \| undefined` | — | Имя компонента |
| `placeholder` | `string \| undefined` | — | Значение, отображаемое, если ничего не введено |
| `readOnly` | `boolean \| undefined` | — | Компонент активен, но не доступен для редактирования |
| `type` | `string \| undefined` | — | Типы поля ввода |
| `autoFocus` | `boolean \| undefined` | — | Автофокус при монтировании |
| `className` | `string \| undefined` | — | Название стиля для компонента (опционально) |
| `id` | `string \| undefined` | — | Уникальный идентификатор компонента |
| `spellCheck` | `boolean \| undefined` | — | Если `true`, работает системная проверка правописания |
| `tabIndex` | `number \| undefined` | `-1` | Порядок получения фокуса при нажатии `Tab` |
| `autoCorrect` | `string \| undefined` | — | Включение встроенного в браузер корректирования ввода |


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