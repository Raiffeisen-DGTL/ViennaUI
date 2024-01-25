# Wizard

Компонент с позаголовоковым управлением формы

## Импорт

```
import { Wizard } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size |  "s" \| "m" \| "l" \| "xl" \| undefined | "m" | Доступные размеры |
| value | number |    | |
| onChange |((value: number, { isActive: boolean }: { isActive: any; }) => void) \| undefined |   | | 
| localization | Localization<WizardLocalizationMap, WizardLocalizationContext> \| undefined |   | |

## Использование

```
() => {
  const [step, setStep] = React.useState(0)
  const handleChange = value => {
    setStep(value)
  }
  const handleClickButton = spin => () => {
    setStep(spin === 'prev' ? step - 1 : step + 1)
  }
  return (
    <Wizard value={step} onChange={handleChange}>
      <Wizard.Body>
        <Wizard.Step title="Заголовок 1">1</Wizard.Step>
        <Wizard.Step title="Заголовок 2">2</Wizard.Step>
        <Wizard.Step title="Заголовок 3">3</Wizard.Step>
      </Wizard.Body>
      <Wizard.Footer>
        <Flex gap="s2">
          {step !== 0 && (
            <Button design="ghost" onClick={handleClickButton('prev')}>
              <GoLeft /> Назад
            </Button>
          )}
          {step !== 2 && (
            <Whitespace ml="auto">
              <Button design="accent" onClick={handleClickButton('next')}>
                Далее <GoRight />
              </Button>
            </Whitespace>
          )}
        </Flex>
      </Wizard.Footer>
    </Wizard>
  )
}
```
