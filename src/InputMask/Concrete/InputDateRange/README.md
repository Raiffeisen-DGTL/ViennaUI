# InputDateRange

## Импорт

```
import { InputDateRange } from 'vienna-ui';
``` 

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `unknown` | — | — |
| `onChange` | `(data: { value: string \| null; event: ChangeEvent<HTMLInputElement>; options: { name?: string; isComplete: boolean; unmaskedValue?: unknown; }) => void \| undefined` | — | Обработчик изменения значения |
| `prefix` | `ReactNode` | — | Значение, отображаемое перед компонентом |
| `onFocus` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при получении фокуса |
| `onBlur` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при потере фокуса |
| `size` | `ResponsiveProp<'s' \| 'xs' \| 'm' \| 'l' \| 'xl' \| 'xxl', Breakpoints> \| undefined` | — | Размеры компонента |
| `defaultValue` | `string \| undefined` | — | Значение в поле ввода (по умолчанию для первого рендера) |
| `autoCapitalize` | `string \| undefined` | — | Автоматическая установка заглавной буквы |
| `onCopy` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события копирования |
| `onCut` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вырезки |
| `onPaste` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вставки |
| `onKeyDown` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии кнопки клавиатуры |
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
| `extraNativeProps` | `{ [key: string]: any; } \| undefined` | — | Для передачи дополнительных нативных атрибутов, которые могут конфликтовать с имеющимися пропсами (например, `size`) |
| `postfix` | `ReactNode` | — | Значение, отображаемое после компонента |
| `active` | `boolean \| undefined` | — | Принудительный ховер |
| `additionalPostfix` | `ReactNode` | — | Режим для включения иконки "Close" в компоненте `Search` |
| `viewOnly` | `boolean \| undefined` | — | Компонент отображается как текст, без поля ввода |
| `viewOnlyText` | `ReactNode` | — | Значение, отображаемое в режиме `viewOnly` |
| `onComplete` | `((value: string, maskRef: InputMaskFactoryOpts>, e?: InputEvent \| undefined) => void) \| undefined` | — | Вызывается, когда ввод завершён |
| `valueAsDate` | `DateType \| undefined` | — | — |
| `placeholderMask` | `string \| undefined` | — | — |
| `localization` | `Localization<InputDateRangeLocalization, undefined> \| undefined` | — | Настройки локализации |

---

###  HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `autoComplete` | `string \| undefined` | — | Включение встроенного в браузер автокомплита |
| `disabled` | `boolean \| undefined` | — | Компонент неактивен, если `true` |
| `max` | `Date \| undefined` | — | Максимально допустимая дата |
| `maxLength` | `number \| undefined` | — | Максимальная длина вводимого значения в символах |
| `min` | `Date \| undefined` | — | Минимально допустимая дата |
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




# InputDateRange

Компонент ввода периода дат


```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        return <InputDateRange value={value} onChange={changeHandler} />;
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
                <InputDateRange value={value} onChange={changeHandler} size='xs' />
                <InputDateRange value={value} onChange={changeHandler} size='s' />
                <InputDateRange value={value} onChange={changeHandler} size='l' />
                <InputDateRange value={value} onChange={changeHandler} size='xl' />
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
    <InputDateRange viewOnly value={'08.04.2024 - 14.04.2024'} />
```

## Локализация

Для того чтобы локализовать InputDateRange, необходимо передать в `localization` обьект локализации

```
    {() => {
        const [value, setValue] = React.useState('');
        const changeHandler = React.useCallback(({ value }) => setValue(value), []);
        const inputDateRangeLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
        };
        return <InputDateRange value={value} onChange={changeHandler} localization={inputDateRangeLocalization} />;
    }}
```