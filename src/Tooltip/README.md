# Tooltip

Компонент используется для обычных подсказок при наведении на элемент (кнопку, иконку, картинку ссылку). Количество объектов, к которым может вызываться тултип, не стандартизируется и определяется потребностями продуктов.

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| ref | Ref<TooltipElement> \| undefined |  |
| design | "dark" \| "light" \| undefined |  |
| inline | boolean \| undefined |  |
| placement | "top" \| "bottom" \| "left" \| "right"  \| "auto" \| undefined |  | Направление отображения |
| size | "s" \| "m" \| undefined |
| allowInteraction | boolean \| undefined |  | Включает взаимодействие с элементами внутри тултипа |
| truncate | boolean \| undefined |  | Управляет отображением всей строки или обрезает ее |

## HTMLAttributes 👇
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined |  |
| content | React.ReactNode \| undefined |  |
| width | number \| undefined |  | Ширина компонента в px |
| disabled | boolean \| undefined |  |

## Использование

```
    <Tooltip content='tooltip' placement='auto' action='hover'>
        {(ref)=><Input  ref={ref} />}
    </Tooltip>
```

## Использование
Toopltip можно использовать без ref, если в качестве children передается ваш кастомный компонент или компонент из ДС, не имеющий forwardedRef.

Можно задавать позицию `left`, `bottom`, `right`, `top` или `auto`. Также можно выбрать цветовую схему `light` или `dark`. По умолчанию позиция равна `auto` и схема равна `light`.

При `placement='auto'` тултип будет занимать доступную позицию (по умолчанию пытается открыться вниз)

```
    <Tooltip content='tooltip' placement='auto'>
        {(ref)=><Input  ref={ref} />}
    </Tooltip>
```

Тултипом может быть любой валидный компонент

```
    <Tooltip content={<FaceSmile />} placement='auto'>
        {(ref)=><Input  ref={ref} />}
    </Tooltip>
```

Многострочный тултип при заданном `width`

```
    <Tooltip width={200} content='В этом примере тултип является мультистрочным с переносом текста' placement='auto'>
        {(ref)=><Input  ref={ref} />}
    </Tooltip>
```

Точное позиционирование

```
    {() => {
        const [state, setState] = React.useState({
            value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        });
        return (
            <Groups design='vertical'>
                <div
                    style={{
                        position: 'relateive',
                        width: '100%',
                        height: '400px',
                        border: '1px solid gray',
                        margin: '20px',
                    }}>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', top: 0, left: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', left: 'calc(50% - 50px)', top: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', top: 0, right: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', bottom: 0, left: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', left: 'calc(50% - 50px)', bottom: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', bottom: 0, right: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', left: 0, top: 'calc(50% - 40px)' }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div style={{ width: '100px', position: 'absolute', top: 'calc(50% - 40px)', right: 0 }}>
                            <Input />
                        </div>
                    </Tooltip>
                    <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                        <div
                            style={{
                                width: '100px',
                                position: 'absolute',
                                top: 'calc(50% - 40px)',
                                left: 'calc(50% - 50px)',
                            }}>
                            <Input />
                        </div>
                    </Tooltip>
                </div>
            </Groups>
        );
    }}
```

## Ручная активация

Если сослаться на `Tooltip`, и вызвать его методы `open` или `close`, то можно открыть или закртыть его без ожидания действия от курсора, при этом сам компонент также скроется при прокрутке.

```
    {() => {
        const ref = React.useRef();
        const show = React.useCallback(() => {
            if (ref.current) {
                ref.current.open();
            }
        }, []);
        const hide = React.useCallback(() => {
            if (ref.current) {
                ref.current.close();
            }
        }, []);
        return (
            <Groups>
                <Tooltip ref={ref} content='manual tooltip'>
                    {(ref) => <Input ref={ref}/>}
                </Tooltip>
                <Button design='accent' onClick={show}>
                    Show tooltip
                </Button>
                <Button onClick={hide}>Hide Tooltip</Button>
            </Groups>
        );
    }}
```

## Возможность взаимодействовать с элементами внутри тултипа

```
    {() => {
        const [state, setState] = React.useState('');
        const handleClick = React.useCallback(() => setState(new Date()), []);
        return (
            <Groups>
                <Tooltip allowInteraction content={<Button onClick={handleClick}>Click Me</Button>}>
                    {(ref)=><Input  ref={ref} value={state} />}
                </Tooltip>
            </Groups>
        );
    }}
```

## Пример работы Tooltip c Button

```
    <Tooltip action='hover' placement={'bottom'} content='tooltip'>
        {ref => <Button forwardedRef={ref}>test</Button>}
    </Tooltip>
```
