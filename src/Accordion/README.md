# Accordion

Aккордеон это компонент для отображения списка элементов. Каждый элемент можно раскрыть, нажав на заголовок.

## Импорт

```
import { Accordion } from 'vienna-ui';
```

## Свойства / Props
Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | 's' \| 'm' \| 'l' \| undefined | 'm' |  |
| iconPosition | 'left' | 'right' \| 'none' \| undefined | 'right' | |;

## Использование

```
    <Accordion iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```
