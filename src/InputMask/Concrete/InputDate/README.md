# InputDate
## Импорт

```
import { InputDate } from 'vienna-ui';
``` 


### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| Date \| undefined` | — | Контролируемое значение поля ввода |
| `onChange` | `(data: { value: string \| null; event: ChangeEvent<HTMLInputElement>; options: { name?: string; isComplete: boolean; unmaskedValue?: unknown; }) => void \| undefined` | — | Обработчик изменения значения |
| `prefix` | `ReactNode` | — | Значение, отображаемое перед компонентом |
| `onFocus` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при получении фокуса |
| `onBlur` | `InputEventFocusEvent<HTMLInputElement, Element>> \| undefined` | — | Обработчик события при потере фокуса |
| `size` | `ResponsiveProp<'s' \| 'xs' \| 'm' \| 'l' \| 'xl' \| 'xxl', Breakpoints>` | — | Размеры компонента (адаптивные) |
| `defaultValue` | `string \| undefined` | — | Неконтролируемое значение по умолчанию |
| `autoCapitalize` | `string \| undefined` | — | Автоматическая установка заглавной буквы |
| `onCopy` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события копирования |
| `onCut` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вырезания |
| `onPaste` | `ClipboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события вставки |
| `onKeyDown` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при нажатии кнопки клавиатуры |
| `onKeyPress` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при печати символа |
| `onKeyUp` | `KeyboardEventHandler<HTMLInputElement> \| undefined` | — | Обработчик события при отпускании кнопки |
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
| `extraNativeProps` | `{ [key: string]: any; } \| undefined` | — | Для передачи дополнительных нативных атрибутов, которые могут конфликтовать с существующими пропсами (например, `size`) |
| `postfix` | `ReactNode` | — | Значение, отображаемое после компонента |
| `active` | `boolean \| undefined` | — | Принудительный ховер (активное состояние) |
| `additionalPostfix` | `ReactNode` | — | Режим для включения иконки "Close" в компоненте `Search` |
| `viewOnly` | `boolean \| undefined` | — | Компонент отображается как текст, без поля ввода |
| `viewOnlyText` | `ReactNode` | — | Значение, отображаемое в режиме `viewOnly` |
| `onComplete` | `((value: string, maskRef: InputMaskFactoryOpts>, e?: InputEvent \| undefined) => void) \| undefined` | — | Вызывается, когда ввод завершён |
| `lazy` | `boolean \| undefined` | — | Отложенное обновление значения |
| `localization` | `Localization<InputDateLocalization, undefined> \| undefined` | — | Настройки локализации |
| `private props` | — | — | — |

---

###  HTML Attributes

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
| `type` | `'time' \| 'date' \| 'datetime' \| undefined` | `'date'` | Вариант маски (по умолчанию `date`) |
| `autoFocus` | `boolean \| undefined` | — | Автофокус при монтировании |
| `className` | `string \| undefined` | — | Название стиля для компонента (опционально) |
| `id` | `string \| undefined` | — | Уникальный идентификатор компонента |
| `spellCheck` | `boolean \| undefined` | — | Если `true`, включает системную проверку орфографии |
| `tabIndex` | `number \| undefined` | — | Порядок получения фокуса при нажатии `Tab` (`-1` — исключает из фокусировки) |
| `autoCorrect` | `string \| undefined` | — | Включение встроенной коррекции ввода браузером |

# InputDate

Компонент ввода даты



```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate value={value} onChange={handleChange} />;
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask. Подробнее о свойствах смотрите в `InputMask`;

## Дата

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return (
            <Groups>
                <InputDate value={value} onChange={handleChange} size="xs" />
                <InputDate value={value} onChange={handleChange} size="s" />
                <InputDate value={value} onChange={handleChange} size="l" />
                <InputDate value={value} onChange={handleChange} size="xl" />
            </Groups>
        );
    }}
```

## Дата и время

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

## Время

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='time' value={value} onChange={handleChange} />;
    }}
```

## Передача значения

#### Строка

```
    {() => {
        const [value, setValue] = React.useState('22.02.1988 09:30');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

#### Объект Date

```
    {() => {
        const [value, setValue] = React.useState(new Date());
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate type='datetime' value={value} onChange={handleChange} />;
    }}
```

#### Диапазон допустимых дат

```
    {() => {
        const [value, setValue] = React.useState();
        const handleChange = React.useCallback(({ value }) => {
            console.log(value);
            setValue(value);
        }, []);
        return (
            <InputDate
                value={value}
                onChange={handleChange}
                min={new Date(2020, 5, 1)}
                max={new Date(2021, 5, 15)}
            />
        );
    }}
```

#### Диапазон допустимых дат (обход проблемы с равными годами)

```
    {() => {
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return (
            <InputDate
                value={value}
                onChange={handleChange}
                min={new Date(2020, 5, 1)}
                max={new Date(2020, 5, 15)}
                lazy={false}
            />
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
    <InputDate viewOnly value={new Date('2024-05-24')} type='date' />
```

## Локализация

Для того чтобы локализовать InputDate, необходимо передать в `localization` обьект локализации

```
    {() => {
        const inputDateLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM'
        };
        const [value, setValue] = React.useState('');
        const handleChange = React.useCallback(({ value }) => setValue(value), []);
        return <InputDate value={value} onChange={handleChange} localization={inputDateLocalization} />;
    }}
```