# Accordion

Aккордеон это компонент для отображения списка элементов. Каждый элемент можно раскрыть, нажав на заголовок.

## Импорт

```
import { Accordion } from 'vienna-ui';
```

## React Props
Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | 's' \| 'm' \| 'l' \| undefined |  |  |
| iconPosition | 'left' \| 'right' \| 'none' \| undefined |  | |;

## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| className | string \| undefined | |
| style | CSSProperties \| undefined | |

## Item
#### React Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| columnStart | string \| undefined | |
| columnEnd | string \| undefined | |
| rowStart | string \| undefined | |
| rowEnd | string \| undefined | |
| column | string \| undefined | |
| row | string \| undefined | |
| area | string \| undefined | |
| justifySelf | 'start' \| 'end' \| 'center' \| 'stretch' \| undefined |
| alignSelf | 'start' \| 'end' \| 'center' \| 'stretch' \| undefined |
| placeSelf | string \| undefined | |
| maxHeight | string \| undefined | |
| maxWidth | string \| undefined | |
| margin | Whitespace \| undefined | |
| marginTop | Whitespace \| undefined | |
| marginBottom | Whitespace \| undefined | |
| marginLeft | Whitespace \| undefined | |
| marginRight | Whitespace \| undefined | |
| marginHorizontal | Whitespace \| undefined | |
| marginVertical | Whitespace \| undefined | |
| m | Whitespace \| undefined | |
| mt | Whitespace \| undefined | |
| mb | Whitespace \| undefined | |
| ml | Whitespace \| undefined | |
| mr | Whitespace \| undefined | |
| mx | Whitespace \| undefined | |
| my | Whitespace \| undefined | |
| padding | Whitespace \| undefined | |
| paddingTop | Whitespace \| undefined | |
| paddingBottom | Whitespace \| undefined | |
| paddingLeft | Whitespace \| undefined | |
| paddingRight | Whitespace \| undefined | |
| paddingHorizontal | Whitespace \| undefined | |
| paddingVertical | Whitespace \| undefined | |
| p | Whitespace \| undefined | |
| pt | Whitespace \| undefined | |
| pb | Whitespace \| undefined | |
| pl | Whitespace \| undefined | |
| pr | Whitespace \| undefined | |
| px | Whitespace \| undefined | |
| py | Whitespace \| undefined | |

## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| title | string \| undefined | |
| className | string \| undefined | |
| role | string \| undefined | |
| spellCheck | boolean \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |


# Accordion

Aккордеон - это компонент для отображения и скрытия списка элементов. Каждый элемент можно раскрыть, нажав на заголовок.
С помощью компонента Aккордеон можно компактно размещать и группировать большое количество информации, а также с помощью заголовка информировать пользователя о содержимом.

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
                    <ViolinIcon />
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
            <ViolinIcon />
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

Настраивается свойством Accordion.Item `initiallyOpen`, также состоянием можно управлять с помощью пропа `open`


```
    {()=>{
        const [isOpen, setIsOpen] = React.useState(false);
   return( <Groups  design='vertical' >
       <Button onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'Close' : 'Open'}</Button>
       <Accordion iconPosition='left' style={{ width: '100%' }}>
        <Accordion.Item initiallyOpen header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
        <Accordion.Item open={isOpen}  header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
   </Groups>);
    }}
```


# Accordion.Item

## Disabled состояние

```
    <Accordion>
        <Accordion.Item disabled header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

## Ширина Accordion.Item

```
    <Accordion>
        <Accordion.Item width='150px' header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
```

## Стилизация контента внутри Accordion.Item

За стилизацию контента внутри `Accordion.Item` отвечает свойство `flexDirection` со значениями 'row' | 'column'. Значение по умолчанию - 'row', это значит, что контент будет располагаться в строку, а иначе в колонку.

```
    <Accordion>
        <Accordion.Item header={'the header'} flexDirection="column">
            <div>first</div>
            <div>second</div>
            <div>third</div>
            <div>forth</div>
            <div>fifth</div>
            <div>sixth</div>
        </Accordion.Item>
        <Accordion.Item header={'the header'}>lalala</Accordion.Item>
        <Accordion.Item header={'the header'}>lalala</Accordion.Item>
    </Accordion>
```

## Установка data-testid

Атрибут data-testid можно передать для `header` и `content` компонента `Accordion.Item`.
Для установки атрибута data-testid  можно передать пропс `testId?: { header, content };`.

Также добавлены дефолтные значения для testId:

```
export const defaultAccordionItemTestId: ItemProps['testId'] = {
    header: 'accordion-item_header',
    content: 'accordion-item_content',
};
```

```
    <Accordion>
        <Accordion.Item header={'the header'} flexDirection="column" testId={{ header: 'Item.Header', content: 'Item.Content' }}>
            <div>first</div>
        </Accordion.Item>
        <Accordion.Item header={'the header'}>lalala</Accordion.Item>
        <Accordion.Item header={'the header'}>lalala</Accordion.Item>
    </Accordion>
```