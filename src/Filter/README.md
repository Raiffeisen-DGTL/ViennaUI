# Filter

Компонент для отображения значений фильтров

## Импорт

```
import { Filter } from 'vienna-ui';
```

## Свойства / Props

| Prop   | Type                              | Default      | Description   |
| ------ | --------------------------------- | ------------ | ------------- |
| design | 'primary' \| 'ghost' \| undefined |   | Дизайн        |
| size   | 'm' \| undefined                  |          | Размеры       |
| align  | 'horizontal' \| 'vertical'        |  | Выравнивание |
| alignItems  | 'inherit' \| 'normal' \| 'initial' \| 'unset' \| 'stretch' \| 'center' \| 'flex-start' \| 'flex-end' \| 'self-start' \| 'self-end' \| 'baseline' \| undefined |
| justifyContent  | 'inherit' \| 'normal' \| 'initial' \| 'unset' \| 'stretch' \| 'center' \| 'flex-start' \| 'flex-end' \| 'self-start' \| 'self-end' \| 'baseline' \| undefined|
| clean  | boolean \| undefined |


## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| height | 'full' \| 'auto' \| undefined |


Свойства наследуются от GroupsProps компонента 'Groups'

## Использование

```
    <Filter>
        <Filter.Item>Пол</Filter.Item>
        <Filter.Item>Рост</Filter.Item>
        <Filter.Item>Вес</Filter.Item>
    </Filter>
```

## Использованиее

## Дизайн

#### Primary

```  
  <Filter design='primary'>
        <Filter.Item>Пол</Filter.Item>
        <Filter.Item>Рост</Filter.Item>
        <Filter.Item>Вес</Filter.Item>
    </Filter>
```

#### Ghost

```
    <Filter design='ghost'>
        <Filter.Item>Пол</Filter.Item>
        <Filter.Item>Рост</Filter.Item>
        <Filter.Item>Вес</Filter.Item>
    </Filter>
```

## Длиные значения

```
    <Filter>
        <Filter.Item>Пол</Filter.Item>
        <Filter.Item maxWidth={100}>Рост очень высокий</Filter.Item>
        <Filter.Item>Вес</Filter.Item>
    </Filter>
```

## Интерактив

```
    {() => {
        const [state, setState] = React.useState({ a: true, b: true, c: true });
        return (
            <Groups>
                <Button design='accent' onClick={() => setState({ a: true, b: true, c: true })}>
                    Reset
                </Button>
                <Filter>
                    {state.a && (
                        <Filter.Item onDelete={() => setState((old) => ({ ...old, ...{ a: false } }))}>Пол</Filter.Item>
                    )}
                    {state.b && (
                        <Filter.Item maxWidth={100} onDelete={() => setState((old) => ({ ...old, ...{ b: false } }))}>
                            Рост очень высокий
                        </Filter.Item>
                    )}
                    {state.c && (
                        <Filter.Item onDelete={() => setState((old) => ({ ...old, ...{ c: false } }))}>Вес</Filter.Item>
                    )}
                </Filter>
            </Groups>
        );
    }}
```