# ComboButton

Компонент с двойным вариантом действий. Дает возможность пользователю как применить основное действие, указанное на кнопке, так и выбрать из дополнительного списка функций.

## Импорт

```
import { ComboButton } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| icons | `Icons` | — | Иконки открытого и закрытого состояния |
| fitOptions | `boolean` | — | Растягивание опций по ширине родителя |
| options | `ReactNode[]` | — | Опции |
| droplistContent | `ReactNode` | — | Кастомный контент дроплиста |
| maxListHeight | `number` | — | Максимальная высота выпадающего списка в пикселях |
| maxListWidth | `number` | — | Максимальная ширина выпадающего списка в пикселях |
| fixed | `boolean` | — |  |
| float | `'start' \| 'end'` | — |  |
| align | `UseDropConfig['align']` | — |  |
| children | `React.ReactNode` | — |  |
| disabled | `boolean \| [boolean, boolean]` | — | При прокидывании массива из двух boolean можно по отдельности контролировать дизейбл |
| onClick | `(e: React.MouseEvent) => void` | — |  |
| onBlur | `(e: React.FocusEvent) => void` | — |  |


# ComboButton

Компонент для выбора нескольких значений из множества. Схожи с компонентом `Button`.
Компонент `Combobutton` можно использовать, когда несколько действий объединены по контексту.



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
                 <ComboButton design='ghost' options={options} maxListWidth={100}>
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

#### Дизайн Ghost

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
                    <ComboButton design='ghost' size='xs' options={options} maxListWidth={100}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='ghost' size='s' options={options} maxListWidth={100}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='ghost' size='m' options={options} maxListWidth={100}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='ghost' size='l' options={options} maxListWidth={100}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='ghost' size='xl' options={options} maxListWidth={100}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```

#### Дизайн Neutral

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
                    <ComboButton design='neutral' size='xs' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='neutral' size='s' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='neutral' size='m' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='neutral' size='l' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                    <ComboButton design='neutral' size='xl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                     <ComboButton design='neutral' size='xxl' options={options}>
                        <Button>Button</Button>
                    </ComboButton>
                </Groups>
                <Groups>
                    <ComboButton design='neutral' size='xs' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='neutral' size='s' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='neutral' size='m' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='neutral' size='l' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='neutral' size='xl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                    <ComboButton design='neutral' size='xxl' options={options}>
                        <Button>Button</Button>
                        <Button />
                    </ComboButton>
                </Groups>
            </Groups>
        );
    }}
```

## Позиционирование (align и float)

Возможны значения для свойства align `vertical` (по умолчанию), `horizontal`, `top`, `bottom`, `left`, `right`

-   vertical - список выпадает вверх или вниз относительно родителя
-   horizontal - список выпадает вправо или влево относительно родителя
-   top - список выпадает вверх относительно родителя
-   bottom - список выпадает вниз относительно родителя
-   left - список выпадает влево относительно родителя
-   right - список выпадает вправо относительно родителя

Возможны два значения свойства float `start` (по умолчанию) и `end`

-   start - выравнивается по левому краю для вертикального позиционирования / по верхнему для горизонтального позиционирования
-   end - выравнивается по правому краю для вертикального позиционирования / по нижнему для горизонтального позиционирования

```
    {() => {
        const options = Array.from(Array(5).keys()).map((i) => (
            <ComboButton.Option key={i}>Option Option {i}</ComboButton.Option>
        ));
        return (
            <Groups>
                <ComboButton options={options} align={'vertical'} float={'start'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'vertical'} float={'end'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'horizontal'} float={'start'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'horizontal'} float={'end'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'top'} float={'start'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'bottom'} float={'end'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'left'} float={'start'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton options={options} align={'right'} float={'end'} fitOptions={false} >
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            );
    }}
```

## Ограничение размеров выпадающего списка по высоте

Свойство `maxListHeight` - максимальная высота выпадающего списка, задается в пикселях (тип `boolean`)

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

##  Ограничение размеров выпадающего списка по ширине

Свойство `maxListWidth` - максимальная ширина выпадающего списка, задается в пикселях (тип `boolean`)

```
    {() => {
        const options = Array.from(Array(5).keys()).map((i) => (
            <ComboButton.Option key={i}>Option Option Option {i}</ComboButton.Option>
        ));
        return (
            <Groups>
                <ComboButton maxListWidth={100} options={options}>
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

## Disabled состояние

В ComboButton у двухкнопочного варианта можно прокинуть просто disabled или disabled как массив из двух булевых значений.

```
    { () => {
  const options = [
    <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
    <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
    <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
    <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
    <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
  ]
  return (
    <Groups>
      <ComboButton options={options} disabled>
        <Button>Button</Button>
        <Button />
      </ComboButton>
      <ComboButton options={options} design="outline" disabled={[false, true]}>
        <Button>Button</Button>
        <Button />
      </ComboButton>
      <ComboButton options={options} design="outline" disabled={[true, false]}>
        <Button>Button</Button>
        <Button />
      </ComboButton>
    </Groups>
  )
    }}
```

## Выранивание опций по ширине родителя

Свойство `fitOptions` растягивает опции по ширине родителя (тип `boolean`), по умолчанию `true`

```
    {() => {
        const options = Array.from(Array(5).keys()).map((i) => (
            <ComboButton.Option key={i}>Option Option {i}</ComboButton.Option>
        ));
        return (
            <Groups>
                <ComboButton options={options} fitOptions={false}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            );
    }}
```

## Кастомизация иконок открытия/закрытия

Свойство `icons` отвечает за иконку открытого и закрытого состояния справа, по умолчанию `{ down: <SelectOpenDown />, up: <SelectHide /> };`

```
    {() => {
        const options = Array.from(Array(5).keys()).map((i) => (
            <ComboButton.Option key={i}>Option {i}</ComboButton.Option>
        ));
        const icons = { down: <SelectOpenClassicIcon />, up: <SelectHideClassicIcon /> };
        return (
            <Groups>
                <ComboButton options={options} icons={icons}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            );
    }}
```

## Кастомный контент выпадающего списка вместо опций

Свойство `droplistContent` позволяет задавать свой контент для выпадающего списка в виде `ReactNode`, например, для создания кастомных фильтров на основе `ComboButton`. 
Компонент дает возможность программного открытия/закрытия списка через `controlsRef`, а также принимает проп `additionalOutsideClickRefs`, позволяюший использовать внутри дроплиста вложеные списки, календари, модальные окна и т.д. 

```
    {() => {
    const [value, setValue] = React.useState('');
    const [design, setDesign] = React.useState('primary');
    const isPending = React.useRef(false);
    const isDirty = React.useRef(false);
    const controls = React.useRef(null);
    const calendarBoxRef = React.useRef(null);
    const onClick = () => {
        if (isPending.current) return;
        isPending.current = true;
        setDesign('accent');
        setTimeout(() => {
            setDesign('primary');
            isPending.current = false;
            controls.current.setOpen(false);
            isDirty.current = false;
        }, 333);
    };
    const onChange = ({ value }) => {
        isDirty.current = true;
        setValue(value);
    };
    const onClose = () => {
        if (!isDirty.current) return;
        setValue('');
        isDirty.current = false;
    };
    return (
        <Groups>
            <FormField style={{ width: '250px' }}>
                <FormField.Label>Период учета:</FormField.Label>
                <FormField.Content>
                    <ComboButton
                        controlsRef={controls}
                        fitOptions={false}
                        additionalOutsideClickRefs={[calendarBoxRef]}
                        onClose={onClose}
                        droplistContent={
                            <Flex direction='column' alignItems='center' padding='10px 16px' style={{ gap: '16px' }}>
                                <DatepickerRange
                                    calendarBoxRef={calendarBoxRef}
                                    value={value}
                                    onChange={onChange}
                                    placeholder='Выберите период'
                                />
                                <Button design={design} onClick={onClick}>
                                    Применить
                                </Button>
                            </Flex>
                        }>
                        <Button grid={12}>{value || 'Не выбрано'}</Button>
                    </ComboButton>
                </FormField.Content>
            </FormField>
        </Groups>
    );
    }}
```

## Pressed

Свойство `pressed` указывает, что элемент был выбран пользователем и сейчас находится в активном или выделенном статусе среди других аналогичных элементов. Это результат выбора, который может сохраняться долгое время. Не применяется в обычном `Combobutton`.

```
    {() => {
        const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    const [pressedState, setPressedState] = React.useState({
        accent: false,
        primary: false,
        outline: false,
        critical: false,
        'outline-critical': false,
        ghost: false,
        'ghost-accent': false,
        white: false,
        neutral: false,
        'ghost-white': false,
    });
    const handleClick = (design) => {
        setPressedState((prevState) => ({
            ...prevState,
            [design]: !prevState[design],
        }));
    };
    return (
        <Groups design='vertical' size='xl'>
            <Groups>
                <ComboButton pressed={pressedState.accent} design='accent' options={options}>
                    <Button onClick={() => handleClick('accent')}>Accent</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.primary} design='primary' options={options}>
                    <Button onClick={() => handleClick('primary')}>Primary</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.outline} design='outline' options={options}>
                    <Button onClick={() => handleClick('outline')}>Outline</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.critical} design='critical' options={options}>
                    <Button onClick={() => handleClick('critical')}>Critical</Button>
                </ComboButton>
                <ComboButton pressed={pressedState['outline-critical']} design='outline-critical' options={options}>
                    <Button onClick={() => handleClick('outline-critical')}>Outline-critical</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.ghost} design='ghost' maxListWidth={80} options={options}>
                    <Button onClick={() => handleClick('ghost')}>Ghost</Button>
                </ComboButton>
                <ComboButton pressed={pressedState['ghost-accent']} design='ghost-accent' options={options}>
                    <Button onClick={() => handleClick('ghost-accent')}>Ghost-accent</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.white} design='white' options={options}>
                    <Button onClick={() => handleClick('white')}>White</Button>
                </ComboButton>
                <ComboButton pressed={pressedState.neutral} design='neutral' options={options}>
                    <Button onClick={() => handleClick('neutral')}>Neutral</Button>
                </ComboButton>
                <Groups
                    style={{
                        backgroundColor: '#2b2d33',
                        width: '150px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <ComboButton pressed={pressedState['ghost-white']} design='ghost-white' options={options}>
                        <Button onClick={() => handleClick('ghost-white')}>Ghost-white</Button>
                    </ComboButton>
                </Groups>
            </Groups>
        </Groups>
    );
    }}
```