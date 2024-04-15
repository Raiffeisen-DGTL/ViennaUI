# Stepper

Компонент может использоваться как прогресс-бар при заполнении и как статусная модель сущности.

## Импорт

```
import { Stepper } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "l" \| undefined |  |
| orientation | "horizontal" \| "vertical" \| undefined | | Тип направления |
| responsive | boolean \| undefined |  | Отвечает за автоматическое определение длины шага |
| value | string \| undefined |  | Активный шаг |
| error | string[] \| undefined |  | Шаги со статусом "Ошибка" |
| valign | "top" \| "center" \| undefined |  | Выравнивание текста внутри шага. Доступно только для orientation='vertical' |

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

## Внешний вид

```
    {() => {
        const [active, setActive] = React.useState('2');
        const handleGoPrev = () => parseInt(active, 10) - 1 > 0 && setActive(String(parseInt(active, 10) - 1));
        const handleGoNext = () => parseInt(active, 10) + 1 < 5 && setActive(String(parseInt(active, 10) + 1));
        return (
            <Groups design='vertical'>
                <Stepper value={active} size='l' error={['1']}>
                    <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
                    <Stepper.Step value='2'>
                        Заголовок шага №2, который не вмещается в данное поле менее чем в три строки будет отображаться
                        неполностью. Для его полного отображения есть тултип.
                    </Stepper.Step>
                    <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
                    <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
                </Stepper>
                <Groups>
                    <Button design='ghost' onClick={handleGoPrev}>
                        Назад
                    </Button>
                    <Button onClick={handleGoNext}>Вперед</Button>
                </Groups>
            </Groups>
        );
    }}
```

## Размеры

Доступные размеры `s` и `l`.

```
    <Stepper value='3'>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
    </Stepper>
```

```
    <Stepper value='3' size='l'>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
    </Stepper>
```

## Состояние шага

Шаг может находится в 1 из 4 состояний:

-   непройденный
-   пройденный
-   текущий
-   с ошибкой

Управлять отображением шагов можно с помощью свойств для Stepper:

-   value: активный (должен совпадать с value для Stepper.Step)
-   error: с ошибкой (набор шагов)

```
    <Stepper value='3' error={['2']}>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
    </Stepper>
    <Stepper size='l' value='3' error={['2']}>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
    </Stepper>
```

## Дизайн

Значение поля дизайн определяет верттикально или горизонтально будет отображаться компонент. По умолчанию `horizontal`

```
    <Stepper value='3'>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
    </Stepper>
```

### Инвертированное состояние

```
    <Stepper value="2" inverted>
        <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
        <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
        <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
        <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
    </Stepper>
```

### Вертикальный режим

Вертикальный режим для компонента можно установить с помощью свойства `orientation='vertical'`.

<Alert compact dynamic style={{ marginBottom: '24px' }}>
    Высота компонента подстраивается под внешний контейнер
</Alert>

#### Выравнивание шага по центру

Доступно только для `orientation='vertical'`. Выравнивание текста на шаге по цетру: `stepAlign` принимает значение `center` (по умолчанию)

```
    <Stepper value='3' size='l' error={['2']} orientation='vertical'>
        <Stepper.Step value='1'>Заголовок шага №1, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4, который занимает две строчки</Stepper.Step>
    </Stepper>
```

#### Выравнивание шага по верху

Доступно только для `orientation='vertical'`. Выравнивание текста на шаге по верхней границе: `stepAlign` принимает значение `top`

```
    <Stepper value='3' size='l' error={['2']} orientation='vertical' valign='top'>
        <Stepper.Step value='1'>Заголовок шага №1, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3, который занимает две строчки</Stepper.Step>
        <Stepper.Step value='4'>Заголовок шага №4, который занимает две строчки</Stepper.Step>
    </Stepper>
```

## Responsive

Данное свойство определяет раснягивется ли степпер по родительскому контейнеру, как для `orientation='horizontal'`, так и для `orientation='vertical'`. По умолчанию принимает значение `true`.

### Not responsive

```
    <Stepper value='2' responsive={false}>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    </Stepper>
```
### Responsive

```
    <Stepper value='2'>
        <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
        <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
        <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
    </Stepper>
```