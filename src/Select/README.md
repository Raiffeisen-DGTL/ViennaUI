# Select

Компонент предназначен для выбора одного элемента из выпадающего списка.

## Импорт

```
import { Select } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
|| ref | Ref<HTMLInputElement> \| undefined |  | Сcылка на нативный элемент input, доступна после отрисовки |
| size | "xs" \| "s" \| "l" \| "xl" \| undefined |  | Размеры |
| design | "outline" \| "material" \| undefined |  | Дизайн |
| prefix | ReactNode |  | Значанеие отображаемое перед компонентом |
| postfix | ReactNode |  | Значение отображаемое после компонента |
| suggests | any[] \| undefined |  | Список элементов в выпадающем списке: массив |
| value | string \| undefined |  | Выбранный элемент (должен совпадать по интерфейсу с объектами массива) |
| maxListHeight | number \| undefined |  | Максимальная высота выпадающего списка в пикселях |
| maxListWidth | number \| undefined |
| invalid | boolean \| undefined |  | Компонент отображается как ошибочный если true |
| onSelect | SearchSelectEvent \| undefined |  | Обработчик события при выборе элемента списка |
| onChange | SearchEvent<FormEvent<HTMLInputElement>> \| undefined | | Обработчик события при наборе текста в поле ввода |
| onFocus | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined |  | Обработчик события при получении фокуса компонентом |
| onBlur | InputEvent<FocusEvent<HTMLInputElement, Element>> \| undefined | Обработчик события при потере фокуса компонентом |
| onKeyDown | SearchEvent<KeyboardEvent<HTMLInputElement>>  \| undefined |  | Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе |
| onKeyUp | KeyboardEventHandler<HTMLInputElement> \| undefined |  | Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе |
| onKeyPress | KeyboardEventHandler<HTMLInputElement>  \| undefined |  | Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе |
| onScroll | UIEventHandler<HTMLDivElement> \| undefined |  | Обработчик события при прокрутке списка |
| showInlineSuggest | boolean \| undefined |  | Показывать строчное дополнение (по умолчанию true) |
| wrapSuggestions | boolean \| undefined |  | Разрешить перенос подсказки на следующую строку |
| valueToString | ((item?: any) => string) \| undefined |  | Определяем значение которое надо вывести в компонент как текст выбранного значения |
| fitOptions | boolean \| undefined |
| fixed | boolean \| undefined |
| ref | Ref<HTMLDivElement> \| undefined |
| align | 'top' \| 'bottom' \| 'auto'  \| undefined |
| number | number \| undefined |
| remove | (((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => ChangeDetails)) \| undefined |
| append | ((str: string, flags?: AppendFlags<MaskedState> | undefined, tail?: string | String | TailDetails | undefined) => ChangeDetails) \| undefined |
| pad | (((flags?: AppendFlags<MaskedState> \| undefined) => ChangeDetails) & ((flags?: AppendFlags<MaskedState> \| undefined) => ChangeDetails) & ((flags?: AppendFlags<...> \| undefined) => ChangeDetails)) \| undefined |
| mask | (NumberConstructor & string) \| undefined |
| parent | Masked<any>  \| undefined |
| prepare | ((chars: string, masked: Masked<any>, flags: AppendFlags<MaskedState>) => string \| [string, ChangeDetails]) \| undefined |
| prepareChar | ((chars: string, masked: Masked<any>, flags: AppendFlags<MaskedState>) => string \| [string, ChangeDetails]) \| undefined |
| validate | ((value: string, masked: Masked<any>, flags: AppendFlags<MaskedState>) => boolean) \| undefined |
| commit | ((value: string, masked: Masked<any>) => void) \| undefined |
| format | (((value: number, masked: Masked<any>) => string) & ((value: string, masked: Masked<any>) => string) & ((value: any, masked: Masked<any>) => string) & ((value: DateValue, masked: Masked<...>) => string)) \| undefined |
| parse | (((str: string, masked: Masked<any>) => number) & ((str: string, masked: Masked<any>) => string) & ((str: string, masked: Masked<any>) => any) & ((str: string, masked: Masked<...>) => DateValue)) \| undefined |
| overwrite | boolean \| 'shift' \| undefined |
| eager | boolean | 'remove' | 'append' \| undefined |
| skipInvalid | boolean \| undefined |
| autofix | boolean | 'pad' \| undefined |
| radix | string \| undefined |
| thousandsSeparator | string \| undefined |
| mapToRadix | string[] \| undefined |
| scale | string[] \| undefined |
| normalizeZeros | boolean \| undefined |
| padFractionalZeros | boolean \| undefined |
| _numberRegExp | RegExp \| undefined |
| _thousandsSeparatorRegExp | RegExp \| undefined |
| _mapToRadixRegExp | RegExp \| undefined |
| _separatorsProcessed | string[] \| undefined |
| updateOptions | boolean \| undefined |
| mapToRadix | (((opts: Partial<Partial<Pick<MaskedNumber, 'mask' \| 'parent' \| 'prepare' \| 'prepareChar' \| 'validate' \| 'commit' \| 'format' \| 'parse' \| 'overwrite' \| 'eager' \| 'skipInvalid' \| ... 8 more ... \| 'padFractionalZeros'>>>) => void) & ((opts: Partial<...>) => void) & ((opts: Partial<...>) => void) & ((opts: Partial<...>)... \| undefined |
| _update | (((opts: Partial<Partial<Pick<MaskedNumber, 'mask' \| 'parent' \| 'prepare' \| 'prepareChar' \| 'validate' \| 'commit' \| 'format' \| 'parse' \| 'overwrite' \| 'eager' \| 'skipInvalid' \| ... 8 more ... \| 'padFractionalZeros'>>>) => void) & ((opts: Partial<...>) => void) & ((opts: Partial<...>) => void) & ((opts: Partial<...>)... \| undefined |
| _updateRegExps | (() => void) \| undefined |
| _removeThousandsSeparators | ((value: string) => string) \| undefined |
| _insertThousandsSeparators | ((value: string) => string) \| undefined |
| doPrepareChar | (((ch: string, flags?: AppendFlags<MaskedState> \| undefined) => [string, ChangeDetails]) & ((str: string, flags?: AppendFlags<MaskedState> \| undefined) => [...]) & ((ch: string, flags?: AppendFlags<...> \| undefined) => [...]))  \| undefined |
| _separatorsCount | ((to: number, extendOnSeparators?: boolean \| undefined) => number) \| undefined |
| _separatorsCountFromSlice | ((slice?: string \| undefined) => number)  \| undefined |
| extractInput | (((fromPos?: number \| undefined, toPos?: number \| undefined, flags?: ExtractFlags \| undefined) => string) & ((fromPos?: number \| undefined, toPos?: number \| undefined, flags?: ExtractFlags \| undefined) => string) & ((fromPos?: number \| undefined, toPos?: number \| undefined, flags?: ExtractFlags \| undefined) => strin...
 \| undefined |
| _appendCharRaw | (((ch: string, flags?: AppendFlags<MaskedState> \| undefined) => ChangeDetails) & ((ch: string, flags?: AppendFlags<MaskedPatternState> \| undefined) => ChangeDetails) & ((ch: string, flags?: AppendFlags<...> \| undefined) => ChangeDetails) & ((ch: string, flags?: AppendFlags<...> \| undefined) => ChangeDetails)) \| unde... \| undefined |
| _findSeparatorAround | ((pos: number) => number)\| undefined |
| _adjustRangeWithSeparators | ((from: number, to: number) => [number, number]) \| undefined|
| nearestInputPos | (((cursorPos: number, direction?: Direction \| undefined) => number) & ((cursorPos: number, direction?: Direction \| undefined) => number) & ((cursorPos: number, direction?: Direction \| undefined) => number))
 \| undefined |
| doCommit | ((() => void) & (() => void) & (() => void)) \| undefined |
| _normalizeZeros | ((value: string) => string)\| undefined |
| _padFractionalZeros | ((value: string) => string) \| undefined |
| doSkipInvalid | (((ch: string, flags?: AppendFlags<MaskedState> \| undefined, checkTail?: TailDetails \| undefined) => boolean) & ((ch: string, flags?: AppendFlags<...> \| undefined, checkTail?: TailDetails \| undefined) => boolean)) \| undefined |
| unmaskedValue | string \| undefined |
| typedValue | undefined |
| allowNegative | boolean \| undefined |
| allowPositive | boolean \| undefined |
| typedValueEquals | (((value: any) => boolean) & ((value: any) => boolean)) \| undefined |
| _initialized | boolean \| undefined |
| _value | string \| undefined |

| _refreshing | boolean \| undefined |
| _isolated | boolean \| undefined |
| state | (MaskedState & { _blocks: MaskedState[]; }) \| undefined |
| reset | ((() => void) & (() => void)) \| undefined |
| resolve | ((value: string, flags?: AppendFlags<MaskedState> | undefined) => void) \| undefined |
| rawInputValue | string \| undefined |
| displayValue | string \| undefined |
| isComplete | string \| undefined |
| isFilled | boolean \| undefined |
| totalInputPositions | (((fromPos?: number \| undefined, toPos?: number \| undefined) => number) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => number)) \| undefined |
| extractTail | (((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails) & ((fromPos?: number \| undefined, toPos?: number \| undefined) => TailDetails)) \| undefined |
| appendTail | (((tail: string \| String \| TailDetails) => ChangeDetails) & ((tail: string \| String \| TailDetails) => ChangeDetails))  \| undefined |
| _appendChar | ((ch: string, flags?: AppendFlags<MaskedState> \| undefined, checkTail?: TailDetails \| undefined) => ChangeDetails) \| undefined |
| _appendPlaceholder | ((() => ChangeDetails) & ((toBlockIndex?: number \| undefined) => ChangeDetails))  \| undefined |
| _appendEager | ((() => ChangeDetails) & (() => ChangeDetails))
 \| undefined |
| withValueRefresh | (<T>(fn: () => T) => T) \| undefined |
| runIsolated | (<T>(fn: (masked: MaskedNumber & MaskedPattern<string> & Masked<any> & MaskedRange & MaskedDate) => T) => T) \| undefined |
| doPrepare | ((str: string, flags?: AppendFlags<MaskedState> \| undefined) => [string, ChangeDetails])  \| undefined |
| doValidate | (((flags: AppendFlags<MaskedState>) => boolean) & ((flags: AppendFlags<MaskedState>) => boolean) & ((flags: AppendFlags<MaskedState>) => boolean)) \| undefined |
| splice | ((start: number, deleteCount: number, inserted?: string \| undefined, removeDirection?: Direction \| undefined, flags?: AppendFlags<MaskedState> \| undefined) => ChangeDetails) \| undefined |
| maskEquals | (((mask: any) => boolean) & ((mask: any) => boolean)) \| undefined |
| optionsIsChanged | boolean \| undefined |
| isFilled | (((opts: Partial<Partial<Pick<Masked<any>, 'mask' \| 'parent' \| 'prepare' \| 'prepareChar' \| 'validate' \| 'commit' \| 'format' \| 'parse' \| 'overwrite' \| 'eager' \| 'skipInvalid' \| 'autofix'>>>) => boolean) & ((opts: Partial<...>) => boolean))  \| undefined |
| blocks | { [key: string]: ExtendFactoryArgOptions<BlockExtraOptions>} \| undefined |
| definitions | Definitions \| undefined |
| placeholderChar | string \| undefined |
| displayChar | string \| undefined |
| lazy | boolean \| undefined |
| _blocks | PatternBlock<MaskedState>[] \| undefined |
| _maskedBlocks | { [key: string]: number[] }  \| undefined |
| _stops  | number[] \| undefined |
| exposeBlock | Masked<any> \| undefined |
| _rebuildMask | (() => void) \| undefined |
| isFixed | boolean \| undefined |

| from | number \| undefined |
| to | number \| undefined |
| _matchFrom | number \| undefined |
| boundaries | ((str: string) => [string, string]) \| undefined |
| isDateExist | ((str: string) => boolean) \| undefined |
| date | DateValue \| undefined |
| localization | Localization<SelectLocalization, undefined> \| undefined |

## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| className | string \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |
| style | CSSProperties \| undefined | |
| name | string \| undefined | |
| pattern | string \| undefined | |
| maxLength | number \| undefined | |
| autoComplete | string \| undefined | |
| autoCorrect | string \| undefined | |
| autoFocus | boolean \| undefined | |
| max | (number & Date) \| undefined | |
| placeholder | string \| undefined | |
| min | (number & Date) \| undefined | |
| disabled |boolean \| undefined |


## Использование

Компонент состоит из родительского контейнера `Select` и дочерних элементов `Select.Option`. При использовании допускается указывать либо `options`, либо передавать `дочерние элементы`. Предусмотрено автомотическое позиционирование выпадающего списка.

> Компонент является контролируемым, то есть чтобы отобразить выбранное значение, необходимо получить его значение через обработчик `onChange` и прокинуть в `value`. По умолчанию работает с массивом строк или объектами у которых есть поле `value`
```
 {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Использование

Размеры: `xs`, `s`, `m`, `l`, `xl` и `xxl`

Свойства дизайна размера и состояния идентичны компоненту `Input`. Предусмотрено автомотическое позиционирование выпадающего списка.

Компонент полностью управляемый, по умолчанию работает с массивом строк или объектами у которых есть поле `value`.

Массив передается в свойство `options`, а выбранный элемент в `value`.

По умолчанию список раскрывается при фокусе, это можно отключить установив свойство `openWhenFocus` в значение `false`.

Открытие и закрытие списка происходит по клавишам `Enter` и `Esacape` соответственно.

<ComponentHelpers.Select.Warn>
    <WarningRing size='xl' />
    <div>
        При использовании допускается единовремнно указывать либо <span>options</span>, либо передавать{' '}
        <span>дочерние элементы</span>
    </div>
</ComponentHelpers.Select.Warn>

## Дизайн

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```
Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                design='material'
                placeholder='Выберите значение'
                value={value}
                maxListHeight={300}
                fitOptions={false}
                onChange={(e, d) => console.log(d)}
                onSelect={handleSelect}>
                <Select.Option>Значение Значение Значение Значение Значение 1</Select.Option>
                <Select.Option>Значение Значение Значение Значение 2</Select.Option>
                <Select.Option>Значение Значение Значение Значение Значение 3</Select.Option>
                <Select.Option>Значение Значение Значение Значение Значение Значение Значение 4</Select.Option>
                <Select.Option>Значение Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Размеры

Доступные размеры `xs`, `s`, `m`, `l`, `xl` и `xxl`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Groups design='vertical'>
                <Select size='xs' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='s' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='m' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='l' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='xl' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='xxl' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </Groups>
        );
    }}
```
Доступные размеры `xs`, `s`, `m`, `l`, `xl` и `xxl` в дизайне `material`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Groups design='vertical'>
                <Select
                    design='material'
                    size='xs'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='s'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='m'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='l'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='xl'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='xxl'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </Groups>
        );
    }}
```
#### Состояние ошибки

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select invalid placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select design='material' invalid placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```
#### Состояние disabled

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select disabled placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```
Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select design='material' disabled placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Простое применение (статическое)

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option value='Значение 1' />
                <Select.Option value='Значение 2' />
                <Select.Option value='Значение 3' />
                <Select.Option value='Значение 4' />
                <Select.Option value='Значение 5' />
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option value={{ value: 'Значение 1' }} />
                <Select.Option value={{ value: 'Значение 2' }} />
                <Select.Option value={{ value: 'Значение 3' }} />
                <Select.Option value={{ value: 'Значение 4' }} />
                <Select.Option value={{ value: 'Значение 5' }} />
            </Select>
        );
    }}
```

<ComponentHelpers.Select.Info>
    <WarningRing size='xl' />
    <div>
        По умолчанию компонент работает со строками или объектами в которых есть поле <span>value</span>, если
        стандартная ситуация невозможна то можно воспользоваться свойством <span>valueToString</span>, которое указывает
        по какому значению сравнивать и отображать, как выбранное
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                placeholder='Выберите значение'
                valueToString={(item) => item && item.text}
                compare={(item) => item && item.name}
                value={value}
                onSelect={handleSelect}>
                <Select.Option value={{ name: 'Значение 1', text: 'Значение 1 - сложное' }} />
                <Select.Option value={{ name: 'Значение 2', text: 'Значение 2 - сложное' }} />
                <Select.Option value={{ name: 'Значение 3', text: 'Значение 3 - сложное' }} />
                <Select.Option value={{ name: 'Значение 4', text: 'Значение 4 - сложное' }} />
                <Select.Option value={{ name: 'Значение 5', text: 'Значение 5 - сложное' }} />
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                placeholder='Выберите значение'
                valueToString={(item) => item && item.name}
                value={value}
                onSelect={handleSelect}>
                <Select.Option value={{ name: 'Значение 1' }} />
                <Select.Option value={{ name: 'Значение 2' }} />
                <Select.Option value={{ name: 'Значение 3' }} />
                <Select.Option value={{ name: 'Значение 4' }} />
                <Select.Option value={{ name: 'Значение 5' }} />
            </Select>
        );
    }}
```

## Простое применение (динамическое)

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([]);
        const handleSelect = (e, data) => setValue(data.value);
        setTimeout(() => {
            setOptions(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
        }, 15000);
        return <Select placeholder='Выберите значение' options={options} value={value} onSelect={handleSelect} />;
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
        const handleSelect = (e, data) => setValue(data.value);
        setTimeout(() => {
            setOptions( ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5'] );
        }, 15000);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                {options.map((item, index) => (
                    <Select.Option key={index}>{item}</Select.Option>
                ))}
            </Select>
        );
    }}

```
## Бесконечные списки

Свойства `options` как `callback`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        const getOptions = React.useCallback((options) => {
            if (options.length) {
                return options.concat([`Значение ${options.length + 1}`]);
            } else {
                return ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'];
            }
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                options={getOptions}
                maxListHeight={150}
                onSelect={handleSelect}
            />
        );
    }}
```

`options` как `Promise`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        const getOptions = (options) => {
            if (options.length) {
                return Promise.resolve(options.concat([`Значение ${options.length + 1}`]));
            } else {
                return Promise.resolve([
                    'Значение 1',
                    'Значение 2',
                    'Значение 3',
                    'Значение 4',
                    'Значение 5',
                    'Значение 6',
                ]);
            }
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                options={getOptions}
                maxListHeight={150}
                onSelect={handleSelect}
            />
        );
    }}
```
Если элементы переданы, как дочерние

<ComponentHelpers.Select.Info>
    <WarningRing size='xl' />
    <div>
        Также тут продемонстрирован вариант предачи в качестве дочернего элемента <span>функции</span>, которая
        принимает следующие праметры : <span>props, currentIndex, Option</span>
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState({ name: '' });
        const [options, setOptions] = React.useState([
            { name: 'Значение 1' },
            { name: 'Значение 2' },
            { name: 'Значение 3' },
            { name: 'Значение 4' },
            { name: 'Значение 5' },
            { name: 'Значение 6' },
        ]);
        const handleSelect = (e, data) => setValue(data.value);
        const handleScroll = (e, data) => {
            const { height, scrollTop, scrollHeight } = data;
            if (height + scrollTop > scrollHeight - 10) {
                options.push({ name: `Элемент ${options.length}` });
                setOptions(options);
            }
        };
        return (
            <Groups design='vertical'>
                <Select
                    placeholder='Выберите значение'
                    valueToString={(item) => item && item.name}
                    value={value}
                    maxListHeight={150}
                    onScroll={handleScroll}
                    onSelect={handleSelect}>
                    {({ props, currentIndex, Option }) =>
                        options.map((s, i) => (
                            <Option key={i} value={s}>
                                {s.name}
                            </Option>
                        ))
                    }
                </Select>
            </Groups>
        );
    }}
```

## Кастомизация

<ComponentHelpers.Select.Warn>
    <WarningRing size='xl' />
    <div>
        Далее представлены некоторые способы изменения внешнего вида компонента, перед использованием рекомендуется
        проконсультироваться с дизайнером, возможно стоит пересмотреть дизайн
    </div>
</ComponentHelpers.Select.Warn>

<ComponentHelpers.Select.Warn>
    <WarningRing size='xl' />
    <div>
        Далее и везде при использовании иконок нужно придерживаться правила:
        <div>
            <span>l</span> - селект => <span>m</span> иконка.
        </div>
        <div>
            <span>s</span> - селект => <span>s</span> иконка.
        </div>
    </div>
</ComponentHelpers.Select.Warn>

Для изменения дизайна всех частей компонента можно использовать поле `custom` при переопределении шаблона, также для компонента `Option` предусмотрено свойство `custom` переопределяюще стили напрямую.

#### Изменение иконки компонента

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select postfix={{ up: <Violin /> }} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Различное состояние для закрытого и открытого списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                postfix={{ up: <FaceNeutral />, down: <FaceSmile /> }}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Добавление префиксной иконки

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select prefix={<TaskDone />} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Изменение иконки выделенного элемента списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option icon={<TheaterOut />}>Значение 1</Select.Option>
                <Select.Option icon={<Violin />}>Значение 2</Select.Option>
                <Select.Option icon={<Bust />}>Значение 3</Select.Option>
                <Select.Option icon={<ToPay />}>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Изменение содержимого элемента списка

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1' },
            { value: 'Значение 2', sub: 'Дополнение 2' },
            { value: 'Значение 3', sub: 'Дополнение 3' },
            { value: 'Значение 4', sub: 'Дополнение 4' },
            { value: 'Значение 5', sub: 'Дополнение 5' },
        ]);
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option value={i} key={index}>
                        <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />
                    </Select.Option>
                ))}
            </Select>
        );
    }}
```

#### Использование неоднородных элементов и блокировка

<ComponentHelpers.Select.Info>
    <WarningRing size='xl' />
    <div>
        Обратите внимание на свойство <span>disabled</span> у элемента списка, оно делает его недоступным к выбору
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
            { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
            { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
            { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <Violin /> },
            { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <Bust /> },
            { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
            { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
        ]);
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option disabled={i.disabled} value={i} key={index}>
                        {i.type === 'custom' && <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />}
                        {i.type === 'icon' && (
                            <ComponentHelpers.Select.CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />
                        )}
                        {i.type === 'default' && i.value}
                    </Select.Option>
                ))}
            </Select>
        );
    }}
```

#### Изменение отображения выбранного элемента

Используется свойство `templateValue` : `JSX.Element`

```javascript
export const Template = styled.div`
    display: flex;
    align-options: center;
    justify-content: space-between;
    width: 100%;
`;
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
            { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
            { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
            { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <Violin /> },
            { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <Bust /> },
            { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
            { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
        ]);
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                templateValue={
                    value && (
                        <ComponentHelpers.Select.Template>
                            <div>{value.value}</div>
                            <div>{value.sub}</div>
                        </ComponentHelpers.Select.Template>
                    )
                }
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option disabled={i.disabled} value={i} key={index}>
                        {i.type === 'custom' && <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />}
                        {i.type === 'icon' && (
                            <ComponentHelpers.Select.CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />
                        )}
                        {i.type === 'default' && i.value}
                    </Select.Option>
                ))}
            </Select>
        );
    }}
```
## Программная установка и снятие фокуса

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
        ]);
        let select = React.useRef(null);
        const handleSelect = React.useCallback((e, data) => setValue(data.value));
        const focus = React.useCallback(() => select.current && select.current.focus(), [select]);
        const blur = React.useCallback(() => select.current && select.current.blur(), [select]);
        return (
            <>
                <Groups>
                    <Button design='accent' onClick={focus}>
                        Focus
                    </Button>
                    <Button design='primary' onClick={blur}>
                        Blur
                    </Button>
                </Groups>
                <hr />
                <Groups design='vertical'>
                    <Select
                        ref={select}
                        placeholder='Выберите значение'
                        options={options}
                        value={value}
                        onSelect={handleSelect}
                    />
                </Groups>
            </>
        );
    }}
```

## Как сравниваются значения и свойство compare

По умолчанию для подсветки выбранного элемента используется сравнение с переданным в value значением в следующем порядке:

-   по ссылке
-   с результатом метода compare
-   с результатом метода valueToString

В отличие от `valueToString` назначение которого - сравнение и вывод строки результата, метод compare следует применять когда фактические значения могут совпадать, но их же нужно и выводить.

Например есть пользовтели с полным совпадением по `ФИО`, но с разными `ID` - вывести надо имя но сравнивать будем по ID. `Compare`следует также использовать если сравнение по `ссылке` не возможно так как список всевремя мутирует.

## Свойство editable

Свойство `editable` позволяет вводить текст в поле поиска компонента. При его включении становится доступным свойство `onChange` которое возвращает введеную строку. При этом поле ввода является дочерним от `iMask`

`Начните вводить 'Данные' или 'Значение'`

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([]);
        const handleSelect = React.useCallback((e, data) => {
            setValue(data.value);
        }, []);
        const changeHandler = React.useCallback((e, data) => {
            const mock = [
                'Значение 1',
                'Значение 2',
                'Значение 3',
                'Значение 4',
                'Значение 5',
                'Данные 1',
                'Данные 2',
                'Данные 3',
                'Данные 4',
                'Данные 5',
            ];
            setOptions([...mock.filter((i) => i.startsWith(data.value))]);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                editable
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([]);
        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5',
        ];
        const handleSelect = (e, data) => {
            setValue(data.value);
        };
        const changeHandler = (e, data) => {
            setOptions([...mock.filter((i) => i.startsWith(data.value))]);
        };
        return (
            <Groups design='vertical'>
                <Select
                    design='material'
                    placeholder='Выберите значение'
                    value={value}
                    editable
                    onChange={changeHandler}
                    onFocus={() => console.log('focus 2')}
                    onBlur={() => console.log('blur 2')}
                    options={options}
                    onSelect={handleSelect}
                />
                <Select
                    placeholder='Выберите значение'
                    value={value}
                    onFocus={() => console.log('focus')}
                    onBlur={() => console.log('blur')}
                    editable
                    onChange={changeHandler}
                    onSelect={handleSelect}>
                    {options.map((o, idx) => (
                        <Select.Option key={idx}>{o}</Select.Option>
                    ))}
                </Select>
            </Groups>
        );
    }}
```

## Значение вне списка

Бывает что требуется предоставить пользователю возможность сохранить то значение что сейчас введено, даже если отсутствует сопоставление в списке

-   Обратите внимание что такое использование компонента является контекстно-некорректным, попробуйте решить проблему по другому или воспользоваться компонентом `Search`

```
    {() => {
        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5',
        ];
        const [options, setOptions] = React.useState(mock);
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => {
            setValue(data.value);
        };
        const changeHandler = (e, data) => {
            setValue(data.value);
            setOptions([...mock.filter((i) => i.startsWith(data.value))]);
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                inputValue={value}
                editable
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

## Маска

Включение маски в поле ввода

```
    {() => {
        const mock = ['1234-1234', '1234-5678', '1234-0000', '1234-9876', '1234-4321'];
        const [options, setOptions] = React.useState(mock);
        const [value, setValue] = React.useState('1234-0000');
        const handleSelect = (e, data) => {
            setValue(data.value);
        };
        const changeHandler = (e, data) => {
            setValue(data.value);
            setOptions([...mock.filter((i) => i.startsWith(data.value))]);
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                mask={'{1234}-0000'}
                editable
                inputValue={value}
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}></Select>
        );
    }}

```
## Спиннер

```
    {() => {
        const [value, setValue] = React.useState();
        const [loading, setLoading] = React.useState(false);
        const timerRef = React.useRef(null);
        const handleSelect = React.useCallback((e, data) => {
            setValue(data.value);
            setLoading(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => setLoading(false), 1000);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}
                postfix={loading && { up: <Spinner /> }}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Свойство fixed

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '300px',
                    height: '100px',
                    border: '1px solid',
                }}>
                <div style={{ width: '500px', height: '300px' }}>
                    <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                            <Select.Option>Значение 1</Select.Option>
                            <Select.Option>Значение 2</Select.Option>
                            <Select.Option>Значение 3</Select.Option>
                            <Select.Option>Значение 4</Select.Option>
                            <Select.Option>Значение 5</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }}
```
## Свойство fitOptions

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <div style={{ width: '100px' }}>
                <Select fitOptions={false} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение очень длииное 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </div>
        );
    }}
```

## Свойство fitOptions с fixed

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '300px',
                    height: '100px',
                    border: '1px solid',
                }}>
                <div style={{ width: '500px', height: '300px' }}>
                    <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                        <Select
                            fixed
                            fitOptions={false}
                            maxListWidth={400}
                            placeholder='Выберите значение'
                            value={value}
                            onSelect={handleSelect}>
                            <Select.Option>Значение 1</Select.Option>
                            <Select.Option>Значение 2</Select.Option>
                            <Select.Option>Значение 3</Select.Option>
                            <Select.Option>Значение 4</Select.Option>
                            <Select.Option>Значение 5</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }}
```

## Интерактивный элемент списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                    <Button onClick={console.log} design='accent' size='xs'>
                        Кнопка
                    </Button>
                </Groups>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
                <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                    <Button onClick={console.log} design='accent' size='xs'>
                        Кнопка
                    </Button>
                </Groups>
            </Select>
        );
    }}
```

#### Адаптив

Для компонента Select, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = (e, data) => setValue(data.value);
        return (
            <Select
                size={{ base: 's', s: 'xs', m: 'xl' }}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```