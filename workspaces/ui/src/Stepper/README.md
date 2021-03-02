# Stepper

Компонент может использоваться как прогресс-бар при заполнении и как статусная модель сущности.

## Импорт

```
import { Stepper } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "l" \| undefined | "s" |
| orientation | "horizontal" \| "vertical" \| undefined | "horizontal" | Тип направления |
| responsive | boolean \| undefined | true | Отвечает за автоматическое определение длины шага |
| value | string \| undefined | false | Активный шаг |
| error | string[] \| undefined | false | Шаги со статусом "Ошибка" |
| valign | "top" \| "center" \| undefined | "center" | Выравнивание текста внутри шага. Доступно только для orientation='vertical' |

## Использование

Компонент состоит из родительского контейнера `Stepper` и шагов `Stepper.Step`.

Шаг может находится в 1 из 4 состояний:

-   непройденный
-   пройденный
-   текущий / `value`
-   с ошибкой / `error`

```
<Stepper value='3'>
    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
    <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
</Stepper>
```

## Активный шаг

##### Свойство `value`

Выбранный шаг передается в свойство `value`. Данное значение должно совпадать с одним из значений свойства `value` дочернего компонента `Stepper.Step`

## Размеры

##### Свойство `size`

Доступные размеры `size`: `s` и `l` (по умолчанию).

## Шаг со статусом "ошибка"

##### Свойство `error`

Управлять отображением шагов со статусом "ошибка" можно с помошью свойства `error`.

```
<Stepper value='3' error={['2']}>
    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
    <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
</Stepper>
```

## Направление

##### Свойство `orientation`

Значение поля `orientation` определяет верттикально / `vertical` или горизонтально / `horizontal` будет отображаться компонент. По умолчанию `horizontal`

```
<Stepper value='3' size='l' error={['2']} orientation='vertical'>
    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
    <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
</Stepper>
```

## Адаптивная длина шага

##### Свойство `responsive`

Данное свойство определяет раснягивется ли степпер по родительскому контейнеру, как для `orientation='horizontal'`, так и для `orientation='vertical'`. По умолчанию принимает значение `true`.

```
<Stepper value='2' responsive={false}>
    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
    <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
</Stepper>
```

## Выравнивание текста

##### Свойство `valign`

Текст внутри шага для вертикально ориентированного степпера можно выровнять по верхней границе / `top` или по центру / `center`

```
<Stepper value='3' size='l' error={['2']} orientation='vertical' valign='top'>
    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
    <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
</Stepper>
```
