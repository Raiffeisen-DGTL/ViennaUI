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


# Filter

Компонент предназначен для отображения значений фильтров и элементов фильтрации в списке или таблице. Также он используется для показа выбранных элементов и быстрой отмены примененных значений. Предлагаем использовать новый компонент `Tag` вместо компонента `Filter`.



```
    <Filter>
        <Filter.Item>Пол</Filter.Item>
        <Filter.Item>Рост</Filter.Item>
        <Filter.Item>Вес</Filter.Item>
    </Filter>
```

## Использование

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

## Размеры

С помощью параметра `size` можно установить размеры Filter. Поддерживается 6 размеров `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```
            <Filter>
                <Filter.Item size='xs'>Пол</Filter.Item>
                <Filter.Item size='s'>Пол</Filter.Item>
                <Filter.Item size='m'>Пол</Filter.Item>
                <Filter.Item size='l'>Пол</Filter.Item>
                <Filter.Item size='xl'>Пол</Filter.Item>
                <Filter.Item size='xxl'>Пол</Filter.Item>
            </Filter>
```

Размеры можно указывать и у компонента Filter, и у Filter.Item. Приоритет будет у Filter.Item.

```
            <Filter size='m'>
                <Filter.Item>Пол</Filter.Item>
            </Filter>
```

```
            <Filter size='xs'>
                <Filter.Item size='l'>Пол</Filter.Item>
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

## Выравнивание

Свойство `align` со значениями 'horizontal' | 'vertical' отвечает за выравнивание фильтров по горизонтали или вертикали.

```
    <Groups>
        <Filter align='horizontal'>
            <Filter.Item>Пол</Filter.Item>
            <Filter.Item>Рост</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
        <Filter align='vertical'>
            <Filter.Item>Пол</Filter.Item>
            <Filter.Item>Рост</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
    </Groups>
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки закрытия фильтра. Передается с помощью пропса `testId?: { cross?: string }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultFilterItemTestId: ItemProps['testId'] = {
    cross: 'filter-item_cross',
};
```

```
    <Filter>
        <Filter.Item testId={{ cross: 'cross-item-close' }}>Пол</Filter.Item>
        <Filter.Item testId={{ cross: 'cross-item-close' }}>Рост</Filter.Item>
        <Filter.Item testId={{ cross: 'cross-item-close' }}>Вес</Filter.Item>
    </Filter>
```