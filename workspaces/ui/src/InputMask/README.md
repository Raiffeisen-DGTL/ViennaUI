# InputMask

Компонент ввода текстовых данных по маске.

## Импорт

```
import { InputMask } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| onChange | InputMaskChangeEvent \| undefined | false |
| showMask | boolean \| undefined | false |
| pipeRef | ((instance: { valueToMask: (string: any) => string; maskToValue: (string: any) => string; placeholder: (string: any) => string; } \| null) => void) \| RefObject<{ valueToMask: (string: any) => string; maskToValue: (string: any) => string; placeholder: (string: any) => string; }> \| null \| undefined | false |
| design | "outline" \| "material" \| undefined | false | Дизайн |
| prefix | ReactNode | false | Значанеие отображаемое перед компонентом |
| autoCapitalize | string \| undefined | false | Автоматическая установка заглавной буквы |
| onCopy | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик копирования |
| onCut | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вырезки |
| onPaste | ((event: ClipboardEvent) => void) \| undefined | false | Обработчик вставки |
| onFocus | InputEvent> \| undefined | false | Обработчик события при получении фокуса компонентом |
| onBlur | InputEvent> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onKeyDown | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onKeyUp | ((event: KeyboardEvent) => void) \| undefined | false | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onMouseDown | Function \| undefined | false | Обработчик события первого полупериода клика |
| onPointerDown | Function \| undefined | false | Обработчик события первого полупериода клика |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры |
| value | string \| undefined | false | Значение в поле ввода |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки |
| invalid | boolean \| undefined | false |
| active | boolean \| undefined | false | Принудительный ховер |
| postfix | ReactNode | false | Значение отображаемое после компонента |
| smartPlaceholder | ReactNode | false |
| onDespose | (() => void) \| undefined | false |
| radix | string \| undefined | false |
| thousandsSeparator | string \| undefined | false |
| mapToRadix | string[] \| undefined | false |
| scale | number \| undefined | false |
| signed | boolean \| undefined | false |
| normalizeZeros | boolean \| undefined | false |
| padFractionalZeros | boolean \| undefined | false |
| allowNegative | boolean \| undefined | false |
| number | number \| undefined | false |
| updateOptions | (((opts: Partial) => void) & ((opts: Partial>) => void) & ((opts: Partial>) => void) & ((opts: Partial) => void) & ((opts: Partial<...>) => void)) \| undefined | false |
| mask | any | false |
| state | any | false |
| unmaskedValue | string \| undefined | false |
| typedValue | undefined | false |
| rawInputValue | string \| undefined | false |
| isComplete | boolean \| undefined | false |
| parent | AnyMasked \| undefined | false |
| prepare | (((value: string, masked: Masked, flags: AppendFlags) => string) & ((value: string, masked: Masked, flags: AppendFlags) => string) & ((value: string, masked: Masked<...>, flags: AppendFlags) => string) & ((value: string, masked: Masked<...>, flags: AppendFlags) => string)) \| undefined | false |
| validate | (((value: string, masked: Masked, flags: AppendFlags) => boolean) & ((value: string, masked: Masked, flags: AppendFlags) => boolean) & ((value: string, masked: Masked<...>, flags: AppendFlags) => boolean) & ((value: string, masked: Masked<...>, flags: AppendFlags) => boolean)) \| undefined | false |
| commit | (((value: string, masked: Masked) => void) & ((value: string, masked: Masked) => void) & ((value: string, masked: Masked) => void) & ((value: string, masked: Masked<...>) => void)) \| undefined | false |
| overwrite | boolean \| undefined | false |
| isInitialized | boolean \| undefined | false |
| reset | ((() => void) & (() => void) & (() => void) & (() => void)) \| undefined | false |
| resolve | (((value: string) => string) & ((value: string) => string) & ((value: string) => string) & ((value: string) => string)) \| undefined | false |
| nearestInputPos | (((cursorPos: number, direction?: "NONE" \| "LEFT" \| "FORCE_LEFT" \| "RIGHT" \| "FORCE_RIGHT" \| undefined) => number) & ((cursorPos: number, direction?: "NONE" \| "LEFT" \| "FORCE_LEFT" \| "RIGHT" \| "FORCE_RIGHT" \| undefined) => number) & ((cursorPos: number, direction?: "NONE" \| ... 4 more ... \| undefined) => number) & (... | false |
| extractTail | (((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails)) \| und... | false |
| appendTail | (((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails) & ((tail: string \| TailDetails) => ChangeDetails)) \| undefined | false |
| append | (((str: string, flags?: AppendFlags \| undefined, tail?: string \| TailDetails \| undefined) => ChangeDetails) & ((str: string, flags?: AppendFlags \| undefined, tail?: string \| TailDetails \| undefined) => ChangeDetails) & ((str: string, flags?: AppendFlags \| undefined, tail?: string \| ... 1 more ... \| undefined) => Cha... | false |
| remove | (((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails... | false |
| doPrepare | (((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string) & ((str: string, flags: AppendFlags) => string)) \| undefined | false |
| doValidate | (((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean) & ((flags: AppendFlags) => boolean)) \| undefined | false |
| doCommit | ((() => boolean) & (() => boolean) & (() => boolean) & (() => boolean)) \| undefined | false |
| splice | (((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((start: number, deleteCount: number, inserted: string, removeDirection: Direction) => ChangeDetails) & ((st... | false |
| blocks | { [key: string]: AnyMaskedOptions; } \| undefined | false |
| definitions | Definitions \| undefined | false |
| placeholderChar | string \| undefined | false |
| lazy | boolean \| undefined | false |
| maskedBlock | (((name: string) => PatternBlock \| undefined) & ((name: string) => PatternBlock \| undefined)) \| undefined | false |
| maskedBlocks | (((name: string) => PatternBlock[]) & ((name: string) => PatternBlock[])) \| undefined | false |
| from | number \| undefined | false |
| to | number \| undefined | false |
| autofix | boolean \| undefined | false |
| parse | ((value: string) => Date) \| undefined | false |
| format | ((value: Date) => string) \| undefined | false |
| date | Date \| undefined | false |
| isDateExist | ((str: string) => boolean) \| undefined | false |

## Использование

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask.

```jsx
const [value, setValue] = React.useState('');
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputMask value={value} onChange={changeHandler} mask={Date} placeholder='Введите дату в формате ДД.ММ.ГГГГ' />;
```

## Стандартные элементы

Для удобства реализовано несколько стандартных компонентов маски.

#### Специализированые маски

[Номер счета](Concrete/InputAccount)

[Номер карты](Concrete/InputCard)

[Дата](Concrete/InputDate)

[Период дат](Concrete/InputDateRange)

[Цифры](Concrete/InputDigital)

[Вещественные числа](Concrete/InputNumber)

[Телефон](Concrete/InputPhone)
