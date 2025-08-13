# Wizard

Компонент с позаголовоковым управлением формы

## Импорт

```
import { Wizard } from 'vienna-ui';
```

## Свойства / Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size |  "s" \| "m" \| "l"  \| undefined |  | Доступные размеры |
| value | number |    | |
| onChange |((value: number, { isActive: boolean }: { isActive: any; }) => void) \| undefined |   | | 
| localization | Localization<WizardLocalizationMap, WizardLocalizationContext> \| undefined |   | |


# Wizard

Компонент с позаголовковым управлением формы. Компонент `Wizard` используется для построения пошагового интерфейса. Включает в себя шаги и управление навигацией между шагами.



```
    <Wizard value={0}>
        <Wizard.Body>
            <Wizard.Step title='Шаг 1'>1</Wizard.Step>
            <Wizard.Step title='Шаг 2'>2</Wizard.Step>
            <Wizard.Step title='Шаг 3'>3</Wizard.Step>
            <Wizard.Step title='Шаг 4'>4</Wizard.Step>
            <Wizard.Step title='Шаг 5'>5</Wizard.Step>
        </Wizard.Body>
        <Wizard.Footer>Footer</Wizard.Footer>
    </Wizard>
```

## Внешний вид

Компонент состоит из родительского контейнера `Wizard` и дочерних компонентов `Wizard.Body` (контейнер для заголовков компонента), `Wizard.Step` (контейнер Заголовка компонента для контента Заголовка) и `Wizard.Footer` (контейнер футера, где располагаются элементы навигации - кнопки).

```
    {() => {
        const [step, setStep] = React.useState(0);
        const handleChange = (value) => {
            setStep(value);
        };
        const handleClickButton = (spin) => () => {
            setStep(spin === 'prev' ? step - 1 : step + 1);
        };
        return (
            <Wizard value={step} onChange={handleChange}>
                <Wizard.Body>
                    <Wizard.Step title='Заголовок 1'>1</Wizard.Step>
                    <Wizard.Step title='Заголовок 2'>2</Wizard.Step>
                    <Wizard.Step title='Заголовок 3'>3</Wizard.Step>
                </Wizard.Body>
                <Wizard.Footer>
                    <Flex gap='s2'>
                        {step !== 0 && (
                            <Button design='ghost' onClick={handleClickButton('prev')}>
                                <GoLeftIcon /> Назад
                            </Button>
                        )}
                        {step !== 2 && (
                            <Whitespace ml='auto'>
                                <Button design='accent' onClick={handleClickButton('next')}>
                                    Далее <GoRightIcon />
                                </Button>
                            </Whitespace>
                        )}
                    </Flex>
                </Wizard.Footer>
            </Wizard>
        );
    }}
```

## Навигация по заголовкам

Навигацию по заголовкам можно осуществлять как по клику на кнопках, которые можно расположить в футере `Wizard.Footer`, так и по клику по заголовкам, которые расположены в шапке. Для осуществления последнего необходимо задать функцию обработки клика по навигации заголовков через свойство `onChange`.

## Размеры

### s

```
    <Wizard value={1} size='s'>
        <Wizard.Body>
            <Wizard.Step title='Заголовок 1'>1</Wizard.Step>
            <Wizard.Step title='Заголовок 2'>2</Wizard.Step>
            <Wizard.Step title='Заголовок 3'>3</Wizard.Step>
        </Wizard.Body>
        <Wizard.Footer>Footer</Wizard.Footer>
    </Wizard>
```

### m (по умолчанию)

```
    <Wizard value={1} size='m'>
        <Wizard.Body>
            <Wizard.Step title='Заголовок 1'>1</Wizard.Step>
            <Wizard.Step title='Заголовок 2'>2</Wizard.Step>
            <Wizard.Step title='Заголовок 3'>3</Wizard.Step>
        </Wizard.Body>
        <Wizard.Footer>Footer</Wizard.Footer>
    </Wizard>
```

### l

```
    <Wizard value={1} size='l'>
        <Wizard.Body>
            <Wizard.Step title='Заголовок 1'>1</Wizard.Step>
            <Wizard.Step title='Заголовок 2'>2</Wizard.Step>
            <Wizard.Step title='Заголовок 3'>3</Wizard.Step>
        </Wizard.Body>
        <Wizard.Footer>Footer</Wizard.Footer>
    </Wizard>
```

## Гибкая шапка

Если заголовки компонента занимают больше 20% шапки, то они перестраиваются под заголовок

```
    <Wizard value={5}>
        <Wizard.Body>
            <Wizard.Step title='Заголовок 1'>1</Wizard.Step>
            <Wizard.Step title='Заголовок 2'>2</Wizard.Step>
            <Wizard.Step title='Заголовок 3'>3</Wizard.Step>
            <Wizard.Step title='Заголовок 4'>4</Wizard.Step>
            <Wizard.Step title='Заголовок 5'>5</Wizard.Step>
            <Wizard.Step title='Заголовок 6'>6</Wizard.Step>
            <Wizard.Step title='Заголовок 7'>7</Wizard.Step>
            <Wizard.Step title='Заголовок 8'>8</Wizard.Step>
            <Wizard.Step title='Заголовок 9'>9</Wizard.Step>
        </Wizard.Body>
        <Wizard.Footer>Footer</Wizard.Footer>
    </Wizard>
```

## Локализация

Локализация компонента осуществляется с помощью функции кастомизации

```
    {() => {
        const customLocalization = (key, context) => {
            if (key === 'ds.wizard.steps') {
                return `step ${context.value} of ${context.count}`;
            }
            return '';
        };
        return (
            <Wizard value={4} localization={customLocalization}>
                <Wizard.Body>
                    <Wizard.Step title='Title 1'>1</Wizard.Step>
                    <Wizard.Step title='Title 2'>2</Wizard.Step>
                    <Wizard.Step title='Title 3'>3</Wizard.Step>
                    <Wizard.Step title='Title 4'>4</Wizard.Step>
                    <Wizard.Step title='Title 5'>5</Wizard.Step>
                    <Wizard.Step title='Title 6'>6</Wizard.Step>
                </Wizard.Body>
                <Wizard.Footer>Footer</Wizard.Footer>
            </Wizard>
        );
    }}
```