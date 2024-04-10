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

```
<Accordion iconPosition='left'>
        <Accordion.Item header='Accordion header'>Put your content here</Accordion.Item>
    </Accordion>
```


## Различные компоненты в заголовке

```
    <Accordion>
        <Accordion.Item
            header={
                <>
                    <Violin />
                    Accordion header
                </>
            }>
            Put your content here
        </Accordion.Item>
    </Accordion>
```


## Различный контент

```
    <Accordion>
        <Accordion.Item header={'Accordion header'}>
            <Violin />
            Put your content here
            <Button>Click</Button>
        </Accordion.Item>
    </Accordion>
```

## Размеры

### Размер l

```
    <Accordion size={'l'} iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

### Размер m

```
    <Accordion size={'m'} iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

### Размер s

```
    <Accordion size={'s'} iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo />
        </Accordion.Item>
    </Accordion>
```

## Положение стрелки

### Слева

```
    <Accordion iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

### Справа

```
    <Accordion iconPosition='right'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

### Нет стрелки

```
    <Accordion iconPosition='none'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

# Режим, когда аккордеон изначально открыт

```
    <Accordion iconPosition='left'>
        <Accordion.Item initiallyOpen header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```



