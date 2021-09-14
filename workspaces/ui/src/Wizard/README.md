# Wizard

Компонент с пошаговым управлением формы

## Импорт

```
import { Wizard } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop        | Type                            | Default | Description                          |
| ----------- | ------------------------------- | ------- | ------------------------------------ |
| size        | "s" \| "m" \| "l" \| undefined  | m       | 
| value       | number             | false      | Индекс активного шага                            |
| onChange    | (value: number, { isActive: boolean }) => void \| undefined             | false   | Обработчик клика по шагу

## Использование

Компонент состоит из радительского контейнера `Wizard` и дочерних компонентов `Wizard.Body` (контейнер для шагов компонента), `Wizard.Step` (контейнер шага компонента для контента шага) и `Wizard.Footer` (контейнер футера, где располагаются элементы навигации - кнопки).
Если шаги компонента занимают больше 20% шапки, то они перестраиваются под заголовок шага.

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
                <Wizard.Step title='Шаг 1'>1</Wizard.Step>
                <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                <Wizard.Step title='Шаг 3'>3</Wizard.Step>
            </Wizard.Body>
            <Wizard.Footer>
                <Flex gap='s2'>
                    {step !== 0 && (
                        <Button design='ghost' onClick={handleClickButton('prev')}>
                            <GoLeft /> Назад
                        </Button>
                    )}
                    {step !== 2 && (
                        <Whitespace ml='auto'>
                            <Button design='accent' onClick={handleClickButton('next')}>
                                Далее <GoRight />
                            </Button>
                        </Whitespace>
                    )}
                </Flex>
            </Wizard.Footer>
        </Wizard>
    );
}}
```

## Размеры

##### Свойство `size`

Имеет три доступных размера `s`, `m` (по умолчанию), `l`.

```
<Wizard value={0} size='s' />
```

## Текущий шаг

##### Свойство `value`

Текущий шаг задается через свойство `value` и принимает числовые значения от 0.

```
<Wizard value={9} />
```

## Изменение шага через клик по навигации

##### Свойство `onChange`

Навигацию по шагам можно осуществлять как по клику на кнопках, которые можно расположить в футере `Wizard.Footer`, так и по клику по шагам, которые расположены в шапке. Для осуществления последнего необходимо задать функцию обработки клика по навигации шагов через свойство `onChange`.

```
<Wizard value={0} onChange={(value, { isActive }) => setStep(value)} />
```

## Локализация

##### Свойство `localization`

```
{() => {
    const customLocalization = (key, context) => {
        if (key === 'ds.wizard.steps') {
            return `step ${context?.value} of ${context?.count}`;
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

Локализация компонента осуществляется с помощью функции кастомизации


