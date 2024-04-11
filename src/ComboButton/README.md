# ComboButton

Компонент с двойным вариантом действий. Дает возможность пользователю как применить основное действие, указанное на кнопке, так и выбрать из дополнительного списка функций.

## Импорт

```
import { ComboButton } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| icons | Icons \| undefined | | Иконки открытого и закрытого состояния |
| Option | Props<Breakpoints> \| undefined  |
| fitOptions | boolean \| undefined |  | Растягивание опций по ширине родителя |
| options | ReactNode[] \| undefined |  | Опции |
| maxListHeight | number \| undefined |  | Максимальная высота выпадающего списка в пикселях |
|  maxListWidth | number \| undefined |  | Максимальная высота выпадающего списка в пикселях |
| design | ButtonDesign \| undefined | | Дизайн |
| fixed | boolean \| undefined  |
| float | 'start' \| 'end' \| undefined |
| size | ResponsiveProp<"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl", Breakpoints> \| undefined |  | Размеры |

## Использование

```
    {() => {
        const options = [
            <ComboButton.Option onClick={(e) => console.log(e.target)} key={1}>
                Option 1
            </ComboButton.Option>,
            <ComboButton.Option onClick={(e) => console.log(e.target)} key={2}>
                Option 2
            </ComboButton.Option>,
            <ComboButton.Option onClick={(e) => console.log(e.target)} key={3}>
                Option 3
            </ComboButton.Option>,
        ];
        return (
            <Groups>
                <ComboButton options={options}>
                    <Button onClick={(e) => console.log(e.target)}>Button</Button>
                </ComboButton>
                <ComboButton design='accent' options={options}>
                    <Button onClick={(e) => console.log(e.target)}>Button</Button>
                </ComboButton>
                <ComboButton design='critical' options={options}>
                    <Button onClick={(e) => console.log(e.target)}>Button</Button>
                </ComboButton>
                <ComboButton design='outline' options={options}>
                    <Button onClick={(e) => console.log(e.target)}>Button</Button>
                </ComboButton>
            </Groups>
        );
    }}
```

## Однокнопочный вариант

 ```
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

## Двухкнопочный вариант

```
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
                    <Button />
                </ComboButton>
                <ComboButton options={options} design='outline'>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        );
    }}
```

## Внешний вид и размеры

#### Дизайн Primary

```
    {() => {
        const options = [
            <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
            <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
            <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
            <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
            <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
        ];
        return (
            <Groups design='vertical' size='xl'>
                <Groups>
                    <ComboButton size='xs' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton size='s' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton size='m' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton size='l' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton size='xl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
                <Groups>
                    <ComboButton size='xs' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton size='s' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton size='m' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton size='l' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton size='xl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```

#### Дизайн Accent


```
    {() => {
        const options = [
            <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
            <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
            <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
            <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
            <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
        ];
        return (
            <Groups design='vertical' size='xl'>
                <Groups>
                    <ComboButton design='accent' size='xs' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='accent' size='s' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='accent' size='m' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='accent' size='l' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='accent' size='xl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
                <Groups>
                    <ComboButton design='accent' size='xs' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='accent' size='s' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='accent' size='m' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='accent' size='l' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='accent' size='xl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```


#### Дизайн Critical

```
    {() => {
        const options = [
            <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
            <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
            <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
            <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
            <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
        ];
        return (
            <Groups design='vertical' size='xl'>
                <Groups>
                    <ComboButton design='critical' size='xs' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='critical' size='s' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='critical' size='m' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='critical' size='l' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='critical' size='xl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
                <Groups>
                    <ComboButton design='critical' size='xs' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='critical' size='s' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='critical' size='m' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='critical' size='l' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='critical' size='xl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```

#### Дизайн Outline

```
    {() => {
        const options = [
            <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
            <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
            <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
            <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
            <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
        ];
        return (
            <Groups design='vertical' size='xl'>
                <Groups>
                    <ComboButton design='outline' size='xs' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='outline' size='s' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='outline' size='m' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='outline' size='l' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='outline' size='xl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
                <Groups>
                    <ComboButton design='outline' size='xs' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='outline' size='s' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='outline' size='m' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='outline' size='l' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='outline' size='xl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```

## Свойство maxListHeight

```
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

## Свойство fixed

```
    {() => {
        const options = Array.from(Array(20).keys()).map((i) => (
            <ComboButton.Option key={i}>Option {i}</ComboButton.Option>
        ));
        return (
            <Groups>
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '300px',
                        height: '100px',
                        border: '1px solid',
                    }}>
                    <div style={{ width: '500px', height: '300px' }}>
                        <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                            <ComboButton maxListHeight={200} options={options} fixed>
                                <Button>Button</Button>
                            </ComboButton>
                        </div>
                    </div>
                </div>
            </Groups>
        );
    }}
```
