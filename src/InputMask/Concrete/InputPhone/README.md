# InputPhone
## Импорт

```
import { InputPhone } from 'vienna-ui';
``` 
### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix` | `ReactNode` | — | Значение, отображаемое перед компонентом |
| `onFocus` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при получении фокуса компонентом |
| `onBlur` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при потере фокуса компонентом |
| `ref` | `Ref<HTMLInputElement> \| undefined` | — | Ссылка на нативный элемент `<input>`, доступна после отрисовки |
| `size` | `ResponsiveProp<'s' \| 'xs' \| 'm' \| 'l' \| 'xl' \| 'xxl', Breakpoints> \| undefined` | — | Размеры компонента |
| `defaultValue` | `string \| undefined` | — | Значение в поле ввода по умолчанию (для первого рендера) |
| `autoCapitalize` | `string \| undefined` | — | Автоматическая установка заглавной буквы |
| `onCopy` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события копирования |
| `onCut` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вырезки |
| `onPaste` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вставки |
| `onKeyDown` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| `onKeyPress` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии и удержании кнопки с печатаемым символом, когда компонент в фокусе |
| `onKeyUp` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| `as` | `KnownTarget \| undefined` | — | Динамически изменяет отображаемый компонент или HTML-тег, например: `as="input"` |
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
| `extraNativeProps` | `{ [key: string]: any; } \| undefined` | — | Для передачи дополнительных нативных атрибутов, которые могут конфликтовать с имеющимися пропсами (например, `size`) |
| `postfix` | `ReactNode` | — | Значение, отображаемое после компонента |
| `active` | `boolean \| undefined` | — | Принудительный ховер |
| `additionalPostfix` | `ReactNode` | — | Режим для включения иконки "Close" в компоненте `Search` |
| `viewOnly` | `boolean \| undefined` | — | Компонент отображается как текст, без поля ввода |
| `viewOnlyText` | `ReactNode` | — | Значение, отображаемое в режиме `viewOnly` |
| `onComplete` | `((value: string, maskRef: InputMaskFactoryOpts>, e?: InputEvent \| undefined) => void) \| undefined` | — | Вызывается, когда ввод завершён |
| `parent` | `Masked<any> \| undefined` | — | Родительский маскированный объект |
| `prepare` | `(chars: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => string \| [string, ChangeDetails] \| undefined` | — | Преобразует значение перед применением маски |
| `prepareChar` | `(chars: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => string \| [string, ChangeDetails] \| undefined` | — | Преобразует **каждый символ** перед применением маски |
| `validate` | `(value: string, masked: Masked<any>, flags: AppendFlagsMaskedState>) => boolean \| undefined` | — | Проверяет, является ли значение допустимым |
| `commit` | `(value: string, masked: Masked<any>) => void \| undefined` | — | Выполняет дополнительную логику после завершения ввода |
| `format` | `(value: DateValue, masked: Masked<any>) => string` \| `(value: number, masked: Masked<any>) => string` \| `(value: string, masked: Masked<any>) => string` \| `(value: any, masked: Masked...>) => string` \| `undefined` | — | Форматирует typed value в строку |
| `parse` | `(str: string, masked: Masked<any>) => DateValue` \| `(str: string, masked: Masked<any>) => number` \| `(str: string, masked: Masked<any>) => string` \| `(str: string, masked: Masked...>) => any` \| `undefined` | — | Парсит строку в typed value |
| `overwrite` | `boolean \| 'shift' \| undefined` | — | Включает режим перезаписи символов |
| `eager` | `boolean \| 'remove' \| 'append' \| undefined` | — | Режим "eager" для маски |
| `skipInvalid` | `boolean \| undefined` | — | Пропускать недопустимые символы |
| `autofix` | `boolean \| 'pad' \| undefined` | — | Автоматически исправляет значение |
| `definitions` | `Definitions \| undefined` | — | — |
| `blocks` | `{ [key: string]: ExtendFactoryArgOptions<BlockExtraOptions>; } \| undefined` | — | — |
| `placeholderChar` | `string \| undefined` | — | Единичный символ для отображения в пустом поле ввода |
| `displayChar` | `string \| undefined` | — | Единичный символ для заполненных позиций |
| `lazy` | `boolean \| undefined` | — | Отображает placeholder только если это необходимо |
| `mask` | `string \| RegExp \| MaskedDate \| typeof Masked \| typeof MaskedPattern \| MaskedNumber \| MaskedPattern<string> \| MaskedEnum \| ... 16 more ... \| undefined` | — | — |
| `delimiter` | `'.' \| ',' \| undefined` | — | Разделитель для чисел |
| `value` | `number \| null \| undefined` | — | — |
| `scale` | `number \| undefined` | — | Количество знаков после точки |
| `thousandsSeparator` | `string \| undefined` | — | Разделитель тысячных (один символ) |
| `padFractionalZeros` | `boolean \| undefined` | — | Флаг для добавления нулей после точки в конце ввода |
| `isFocusAllowMask` | `boolean \| undefined` | — | Позволяет фокусироваться на маске |
| `onChange` | `{ value: number \| null; event: ChangeEvent<HTMLInputElement>; options: { name?: string; isComplete: boolean; unmaskedValue?: unknown; }; } \| undefined` | — | Обработчик изменения значения |
| `mapToRadix` | `string[] \| undefined` | — | Массив единичных символов |
| `radix` | `string \| undefined` | — | Единичный символ для разделения целой и дробной части |
| `normalizeZeros` | `boolean \| undefined` | — | Флаг для удаления ведущих и завершающих нулей в конце ввода |
| `enum` | `string[] \| undefined` | — | Массив строк для enum-маски |
| `matchValue` | `(enumStr: string, inputStr: string, matchFrom: number) => boolean \| undefined` | — | Проверяет совпадение значения enum и ввода |
| `from` | `number \| undefined` | — | Минимальное значение диапазона |
| `to` | `number \| undefined` | — | Максимальное значение диапазона |
| `dispatch` | `(appended: string, masked: MaskedDynamic<any>, flags: AppendFlagsHandleState>, tail: string \| String \| TailDetails) => Masked...> \| undefined` | — | Выбирает {@link Masked} в зависимости от введённого значения |

---

###  HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string \| undefined` | — | Включение встроенного в браузер автокомплита |
| `disabled` | `boolean \| undefined` | — | Компонент неактивен, если `true` |
| `maxLength` | `number \| undefined` | — | Максимальная длина вводимого значения в символах. Опционально устанавливает максимальную длину шаблона. Используется, когда длина шаблона превышает `to`. Добавляет нули в начало в этом случае. |
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




# InputPhone

Компонент ввода номера телефона



```
    <InputPhone value={'4959191242'} />
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту `Input`. Для использования необходимо ознакомится с работой `IMask`. Подробнее о свойствах смотрите в `InputMask`;

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({value}) => setValue(value), []);
        return (
            <Groups>
                <InputPhone value={value} onChange={handleChange} size='xs' />
                <InputPhone value={value} onChange={handleChange} size='s' />
                <InputPhone value={value} onChange={handleChange} size='l' />
                <InputPhone value={value} onChange={handleChange} size='xl' />
            </Groups>
        );
    }}
```

По умолчанию маска настроена для России.

```
    <InputPhone value={'4959191242'} disabled />
```

По умолчанию включена передача через `8` вместо `+7`

```
    <InputPhone value={'84959191242'} disabled />
```

## Пример с редактированием поля

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} onChange={handleChange} />;
    }}
```

## Вариант с предустановленой частью номера

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{7} (495) 000-00-00'} onChange={handleChange} />;
    }}
```

## Вариант со сложной маской телефона

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{42} (000) {234}-00-00'} smartPlaceholder="+42 ___ ___-__-__" placeholder="+42 ___ ___-__-__" onChange={handleChange} />;
    }}
```

## Вариант с передачей кастомного замещающего символа

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputPhone value={value} mask={'+{42} (000) {234}-00-00'} smartPlaceholder="+42 ___ ___-__-__"  placeholder="+42 ___ ___-__-__" onChange={handleChange} />;
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <InputPhone viewOnly value={'+7 213 213-12-31'} />
```