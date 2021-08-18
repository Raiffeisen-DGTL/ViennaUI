# Функции форматирования редполитики

Функции предназначены для приведения строковых данных к виду, который утвержден и описывается <Link href='/guides/editorial' target='_blank'>редполитикой банка</Link>. Например, отображение даты рождения, номера телефона клиента или суммы для оплаты. Рекомендуется использовать данные методы для отображения подобных данных в таблицах или тексте на странице продукта.

## Числа

### formatNumberString

Функция предназначена для приведение числа к формату, согласно опциям, которые передаются через аргументы.

```bash
import { formatNumberString } from '@fcc/utils'
```

```js
formatNumberString(value: string, options: NumberOptions): string
```

`value: string` - строка как число, то есть вещественное или целое число или вещественное число с незавершенной дробной частью (например '1.')<br/><br/> **NumberOptions**:<br/> `scale: number` - количество символов в дробной части<br/> `thousandsSeparator: string` - разделитель разрядов тысяч<br/> `padFractionalZeros: boolean` - дополнение дробной части 0 до значения `scale`<br/> `delimiter: '.' | ','` - разделитель целой и дробной части

### convertNumberToString

Функция предназначена для приведения числа к формату, согласно правилам, описанным в редполитике.

```bash
import { convertNumberToString } from '@fcc/utils'
```

```js
convertNumberToString(value: number): string
```

Значение свойст согласно редполитике:

```
delimiter: ',',
scale: 2,
thousandsSeparator: ' ',
padFractionalZeros: false,
```

### convertStringToNumber

Функция предназначена для приведения строки в число согласно стандартным свойствам редполитики.

```js
import { convertStringToNumber } from '@fcc/utils';
```

```bash
convertStringToNumber(value: string): number
```

## Номер телефона

### convertNumberToPhone

Функция предназначена для приведения числа к строке с номером телефона по шаблону `+7 XXX XXX-XX-XX` или `8 XXX XXX-XX-XX`

```bash
import { convertNumberToPhone } from '@fcc/utils'
```

```js
convertNumberToPhone(value: number, options?: PhoneOptions): string
```

`value: string` - число длиной 10 или 11 символов (может начинаться с '7')

<br />
<br /> **PhoneOptions**:
<br />
`startWith: '+7' | '8'` - символ начала номера телефона (по умолчанию '+7')
<br />

### convertPhoneToNumber

Функция предназначена для приведения строки с номером телефона по шаблону `+7 XXX XXX-XX-XX` или `8 XXX XXX-XX-XX` к числу

```bash
import { convertNumberToPhone } from '@fcc/utils'
```

```js
convertNumberToPhone(value: number, options?: PhoneOptions): string
```

`value: string` - строка с номером телефона по шаблону `+7 XXX XXX-XX-XX` или `8 XXX XXX-XX-XX`

<br />
<br /> **PhoneOptions**:
<br />
`startWith: '+7' | '8'` - символ начала номера телефона (по умолчанию '+7')
<br />

## Даты

### convertDateToString

Функция предназначена для приведения даты к строке.

```bash
import { convertDateToString } from '@fcc/utils'
```

```js
convertDateToString(value: Date, mask?: string): string
```

`value: Date` - значение даты `mask: string` - [маска для даты](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

### convertStringToDate

Функция предназначена для приведения строки к дате.

```bash
import { convertStringToDate } from '@fcc/utils'
```

```js
convertStringToDate(value: string, mask?: string): Date
```

`value: string` - дата в строке `mask: string` - [маска для даты](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

### convertRangeToString

Функция предназначена для приведения интервала дат к строке.

```bash
import { convertRangeToString } from '@fcc/utils'
```

```js
convertRangeToString(value: Date[], mask?: string): string
```

`value: Date[]` - массив дат, где первое значение - дата начала, второе значение - дата окончания `mask: string` - [маска для даты](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)

### convertStringToRange

Функция предназначена для приведения строки с интервалос дат к массиву с интервалом дат.

```bash
import { convertStringToRange } from '@fcc/utils'
```

```js
convertStringToRange(value: string, mask?: string): Date[] | null
```

`value: string` - строка с интервалом дат `mask: string` - [маска для даты](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)
