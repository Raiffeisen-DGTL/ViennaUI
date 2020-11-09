# ComboButton

Компонент с двойным вариантом действий. Дает возможность пользователю как применить основное действие, указанное на кнопке, так и выбрать из дополнительного списка функций.


## Импорт

```
import { ComboButton } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
icons | { down: ReactNode, up: ReactNode } \| undefined | { down: <Down />, up: <Up /> } | Иконки открытого и закрытого состояния
fitOptions | boolean \| undefined | true | Растягивание опций по ширине родителя
options | ReactNode[] \| undefined | false | Опции
maxListHeight | number \| undefined | false | Максимальная высота выпадающего списка в пикселях
design | "critical" \| "accent" \| "primary" \| "outline" \| "outline-critical" \| "ghost" \| undefined | "primary" | Дизайн
size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | "m" | Размеры

## Использование

Компонент состоит из родительского контейнера `ComboButton` и дочерних пунктов `ComboButton.Option`.

> Для того, чтобы воспользоваться компонентом, нужно обязательно передать `Button` как дочерний элемент.

```jsx
{() => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups>
            <ComboButton options={options}>
                <Button>Button</Button>
            </ComboButton>
            <ComboButton options={options} design='outline'>
                <Button>Button</Button>
            </ComboButton>
        </Groups>
    );
}}
```

## Дизайн `design`
##### Свойство `design`

Для компонента доступны следующие варианты дизайна: `critical`, `accent`, `primary` (по умолчанию), `outline`, `outline-critical`, `ghost`

```jsx
{() => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <ComboButton design='critical' options={options}>
            <Button>Button</Button>
        </ComboButton>
    );
}}
```

## Размер
##### Свойство `size`

Доступны следующие размеры: `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```jsx
{() => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <ComboButton size='xs' options={options}>
            <Button>Button</Button>
        </ComboButton>
    );
}}
```

## Максимальная  высота списка
##### Свойство `maxListHeight`

Управляет максимальной высотой выпадающего списка.

```jsx
{() => {
    const options = Array.from(Array(20).keys()).map((i) => (
        <ComboButton.Option key={i}>Option {i}</ComboButton.Option>
    ));
    return (
        <Groups>
            <ComboButton maxListHeight={200} options={options}>
                <Button>Button</Button>
            </ComboButton>
        </Groups>
    );
}}
```
