# DropList

Компонент выпадающих списков.

## Импорт

```
import { DropList } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | ResponsiveProp<"s" \| "m" \| "l", Breakpoints> \| undefined |
| maxHeight | number \| undefined |  | Максимальная высота |
| fitItems | boolean \| undefined |  | Компонент подстраивается под ширину ближайшего родителя |
| align | "horizontal" \| "vertical" \| undefined |  | Выравнивание |
| float | "start" \| "end" \| undefined | | Место появление списка относитетельно его ширины |
| scrollable | boolean \| undefined |  | Возможность прокручивать список |
| margins | { x: number; y: number; } \| undefined |  |
| fixed | boolean \| undefined |  | Фиксируется по центру |
| container | HTMLElement \| undefined |  |  |
| followParentWhenScroll | boolean \| undefined |  |
| onHide | (() => void) \| undefined |  |  |


## HTMLAttributes 👇
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| width | number \| undefined |
| coords | { x: number; y: number; } \| undefined |

# DropList

Компонент выпадающих списков. Компонент, который используется в составе других компонентов `Select`, `MultiselectWithSearch`, `Combobutton`, а также его можно использовать самостоятельно.



```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Использование

- Для выбора одного значения из пяти и более вариантов;
- При заполнении форм, выбора месяца;
- Для переключения состояний, выбора фильтра;
- Для выбора предустановленных настроек, для выбора уведомлений или часового пояса;

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Использование с fixed

#### Передача координат

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList fixed coords={{ x: 100, y: 100 }}>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

#### Без передачи координат

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList fixed>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

#### Включение отслеживания прокрутки

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList fixed followParentWhenScroll onHide={() => setOpen(false)}>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

###### Прокрутка для вложенных скроллов

поддерживается по умолчанию

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
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
                        <IconContainer onClick={() => setOpen(!isOpen)}>
                            <ManPersonIcon />
                            {isOpen && (
                                <DropList fixed followParentWhenScroll onHide={() => setOpen(false)}>
                                    <DropList.Item>Item 1</DropList.Item>
                                    <DropList.Item>Very very long Item 2</DropList.Item>
                                    <DropList.Item disabled>Item 3</DropList.Item>
                                    <DropList.Item>Item 4</DropList.Item>
                                    <DropList.Item selected>Item 5</DropList.Item>
                                    <DropList.Item>Item 6</DropList.Item>
                                    <DropList.Item>Item 7</DropList.Item>
                                </DropList>
                            )}
                        </IconContainer>
                    </div>
                </div>
            </div>
        );
    }}
```

## Закрытие при клике вне компонента

С помощью `onOutsideClick` и `additionalOutsideClickRefs` можно контроллировать поведение компонента при клике снаружи компонента. Функция `onOutsideClick` вызовется при клике вне самого DropList и элементов из `additionalOutsideClickRefs`.

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        const ref = React.useRef(null);
        return (
            <div style={{width: '100px'}} ref={ref}>
            <IconContainer ref={ref} onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList onOutsideClick={() => setOpen(false)} additionalOutsideClickRefs={[ref]}>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
            </div>
        );
    }}
```

## Размеры

Компонент имеет стандартные размеры — `s`, `m` и `l` (по-умолчанию `m`).

```
    {() => {
        const [isOpen, setOpen] = React.useState({ s: false, m: false, l: false });
        return (
            <Groups>
                <IconContainer size='s' onClick={() => setOpen({ ...isOpen, s: !isOpen.s })}>
                    <ManPersonIcon size='s' />
                    {isOpen.s && (
                        <DropList size='s'>
                            <DropList.Item>Item 1</DropList.Item>
                            <DropList.Item>Very very long Item 2</DropList.Item>
                            <DropList.Item disabled>Item 3</DropList.Item>
                            <DropList.Item>Item 4</DropList.Item>
                            <DropList.Item selected>Item 5</DropList.Item>
                            <DropList.Item>Item 6</DropList.Item>
                            <DropList.Item>Item 7</DropList.Item>
                        </DropList>
                    )}
                </IconContainer>
                <IconContainer onClick={() => setOpen({ ...isOpen, m: !isOpen.m })}>
                    <ManPersonIcon />
                    {isOpen.m && (
                        <DropList>
                            <DropList.Item>Item 1</DropList.Item>
                            <DropList.Item>Very very long Item 2</DropList.Item>
                            <DropList.Item disabled>Item 3</DropList.Item>
                            <DropList.Item>Item 4</DropList.Item>
                            <DropList.Item selected>Item 5</DropList.Item>
                            <DropList.Item>Item 6</DropList.Item>
                            <DropList.Item>Item 7</DropList.Item>
                        </DropList>
                    )}
                </IconContainer>
                <IconContainer size='l' onClick={() => setOpen({ ...isOpen, l: !isOpen.l })}>
                    <ManPersonIcon size='l' />
                    {isOpen.l && (
                        <DropList size='l'>
                            <DropList.Item>Item 1</DropList.Item>
                            <DropList.Item>Very very long Item 2</DropList.Item>
                            <DropList.Item disabled>Item 3</DropList.Item>
                            <DropList.Item>Item 4</DropList.Item>
                            <DropList.Item selected>Item 5</DropList.Item>
                            <DropList.Item>Item 6</DropList.Item>
                            <DropList.Item>Item 7</DropList.Item>
                        </DropList>
                    )}
                </IconContainer>
            </Groups>
        );
    }}
```

## Многоуровневое меню

С помощью компонента `DropList.MenuItem` можно создать многоуровневое меню

```
{() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList fixed scrollable={false}>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.MenuItem
                            text='Submenu 1 (by click)'
                            action='click'
                        >
                            <DropList
                                align="horizontal"
                                float="end"
                                margins={{ x: 0, y: -8 }}
                                scrollable={false}
                                onClick={() => setOpen(false)}
                            >
                                <DropList.Item>
                                    Item 1
                                </DropList.Item>
                                <DropList.MenuItem
                                    text='Submenu 2 (by hover)'
                                >
                                    <DropList
                                    align="horizontal"
                                    float="end"
                                    margins={{ x: 0, y: -8 }}
                                    scrollable={false}
                                    onClick={() => setOpen(false)}
                                    >
                                    <DropList.Item>
                                        Item 1
                                    </DropList.Item>
                                    <DropList.Item>
                                        Item 2
                                    </DropList.Item>
                                    </DropList>
                                </DropList.MenuItem>
                            </DropList>
                        </DropList.MenuItem>
                        <DropList.Item>
                            Item 5
                        </DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Различия в позиционировании (align и float)

Возможны два значения свойства align `vertical` (по умолчанию) и `horisontal`

-   vertical - список выпадает вверх или вниз относительно родителя
-   horizontal - список выпадает вправо или влево относительно родителя

Возможны два значения свойства float `start` (по умолчанию) и `end`

-   start - выравнивается по левому краю для `vertical` / по верхнему для `horisontal` родителя
-   end - выравнивается по правому краю для `vertical` / по нижнему для `horisontal` родителя

#### absolute

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        const items = ['Item 1', 'Item 2', 'Item 3'];
        return (
            <Groups design='vertical'>
                <Button onClick={() => setOpen(!isOpen)}>Open</Button>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList align='horizontal'>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList align='horizontal' float='end'>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                </div>
            </Groups>
        );
    }}
```

#### fixed

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        const items = ['Item 1', 'Item 2', 'Item 3'];
        return (
            <Groups design='vertical'>
                <Button onClick={() => setOpen(!isOpen)}>Open</Button>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList fixed followParentWhenScroll onHide={() => setOpen(false)}>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList align='horizontal' fixed followParentWhenScroll onHide={() => setOpen(false)}>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                    <IconContainer>
                        <ManPersonIcon />
                        {isOpen && (
                            <DropList
                                align='horizontal'
                                float='end'
                                fixed
                                followParentWhenScroll
                                onHide={() => setOpen(false)}>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </IconContainer>
                </div>
            </Groups>
        );
    }}
```

#### fixed во вложенном родителе

по умолчанию поддерживается слежение за изменением размера родителя / экрана

```
    {() => {
        const [isOpen1, setOpen1] = React.useState(false);
        const [isOpen2, setOpen2] = React.useState(false);
        const [isOpen3, setOpen3] = React.useState(false);
        const [isOpen4, setOpen4] = React.useState(false);
        const items = ['Item 1', 'Item 2', 'Item 3'];
        const openAll = () => {
            setOpen1(true);
            setOpen2(true);
            setOpen3(true);
            setOpen4(true);
        };
        const closeAll = () => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
        };
        return (
            <Groups design='vertical'>
                <Button onClick={openAll} design='accent'>
                    Open
                </Button>
                <Button onClick={closeAll}>Close</Button>
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '300px',
                        height: '100px',
                        border: '1px solid',
                        resize: 'both',
                    }}>
                    <div style={{ width: '500px', height: '300px' }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: 'calc(50% - 20px)',
                                top: 'calc(50% - 20px)',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <IconContainer>
                                <ManPersonIcon />
                                {isOpen1 && (
                                    <DropList fixed followParentWhenScroll onHide={() => setOpen1(false)}>
                                        {items.map((i) => (
                                            <DropList.Item key={i}>{i}</DropList.Item>
                                        ))}
                                    </DropList>
                                )}
                            </IconContainer>
                            <IconContainer>
                                <ManPersonIcon />
                                {isOpen3 && (
                                    <DropList
                                        align='horizontal'
                                        fixed
                                        followParentWhenScroll
                                        onHide={() => setOpen3(false)}>
                                        {items.map((i) => (
                                            <DropList.Item key={i}>{i}</DropList.Item>
                                        ))}
                                    </DropList>
                                )}
                            </IconContainer>
                            <IconContainer>
                                <ManPersonIcon />
                                {isOpen4 && (
                                    <DropList
                                        align='horizontal'
                                        float='end'
                                        fixed
                                        followParentWhenScroll
                                        onHide={() => setOpen4(false)}>
                                        {items.map((i) => (
                                            <DropList.Item key={i}>{i}</DropList.Item>
                                        ))}
                                    </DropList>
                                )}
                            </IconContainer>
                        </div>
                    </div>
                </div>
            </Groups>
        );
    }}
```

#### Адаптив

Для компонента DropList, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList size={{ base: 's', s: 'm', m: 'l' }}>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Разбиение списка на группы

Используя компонент `Group`, элементы списка можно объединять в группы; с помощью атрибута `label` можно задать заголовок группы

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Group label='Subheader 1'>
                            <DropList.Item>Item 1</DropList.Item>
                            <DropList.Item>Very very long Item 2</DropList.Item>
                        </DropList.Group>
                        <DropList.Group label='Subheader 2'>
                            <DropList.Item>Item 3</DropList.Item>
                            <DropList.Item>Item 4</DropList.Item>
                            <DropList.Item>Item 5</DropList.Item>
                        </DropList.Group>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Описание элемента списка

Используя атрибут `description` компонета `DropList.Item`, можно задать описание элементу списка

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Item description='description'>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected description='very very long description'>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Растягивание выпадающего списка

Свойство `fitItems` позволяет растягивать выпадающий список по размеру родителя.

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList fitItems>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Скролл содержимого
Свойство `scrollable` позволяет скроллить выпадающий список. По умолчанию свойство `scrollable` имеет значение true, если указать false - скролла не будет.

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                    <DropList>
                        <DropList.Item>Item 1</DropList.Item>
                        <DropList.Item>Very very long Item 2</DropList.Item>
                        <DropList.Item disabled>Item 3</DropList.Item>
                        <DropList.Item>Item 4</DropList.Item>
                        <DropList.Item selected>Item 5</DropList.Item>
                        <DropList.Item>Item 6</DropList.Item>
                        <DropList.Item>Item 7</DropList.Item>
                        <DropList
                            align="horizontal"
                            float="end"
                            margins={{ x: 0, y: -8 }}
                            scrollable={false}
                            onClick={() => setOpen(false)}
                        >
                        <DropList.Item>
                            Item Dop
                        </DropList.Item>
                        </DropList>
                    </DropList>
                )}
            </IconContainer>
        );
    }}
```

## Смещение выпадающего списка по оси x и y
Свойство `margins?: { x: number; y: number }` позволяет смещать выпадающий список по оси x и y.

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <IconContainer onClick={() => setOpen(!isOpen)}>
                <ManPersonIcon />
                {isOpen && (
                <DropList
                    align="horizontal"
                    float="end"
                    margins={{ x: 0, y: -8 }}
                    scrollable={false}
                    onClick={() => setOpen(false)}
                >
                    <DropList.Item>Item 1</DropList.Item>
                    <DropList.Item>Very very long Item 2</DropList.Item>
                    <DropList.Item disabled>Item 3</DropList.Item>
                    <DropList.Item>Item 4</DropList.Item>
                    <DropList.Item selected>Item 5</DropList.Item>
                    <DropList.Item>Item 6</DropList.Item>
                    <DropList.Item>Item 7</DropList.Item>
                </DropList>
            )}
            </IconContainer>
        );
    }}
```