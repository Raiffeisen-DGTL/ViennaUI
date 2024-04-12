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


## Использование

Компонент состоит из родительского контейнера `DropList` и элементов выпадающего списка `DropList.Item`. Для управления отображением компонента необходимо использовать state, который контролирует нажатие на активирующий элемент.

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
        );
    }}
```

## Использование

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
        );
    }}
```
## Использование с fixed

#### Передача координат

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
        );
    }}
```
#### Без передачи координат

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
        );
    }}
```

#### Включение отслеживания прокрутки

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
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
                        <RoundIcon onClick={() => setOpen(!isOpen)}>
                            <ManPerson />
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
                        </RoundIcon>
                    </div>
                </div>
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
                <RoundIcon size='s' onClick={() => setOpen({ ...isOpen, s: !isOpen.s })}>
                    <ManPerson size='s' />
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
                </RoundIcon>
                <RoundIcon onClick={() => setOpen({ ...isOpen, m: !isOpen.m })}>
                    <ManPerson />
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
                </RoundIcon>
                <RoundIcon size='l' onClick={() => setOpen({ ...isOpen, l: !isOpen.l })}>
                    <ManPerson size='l' />
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
                </RoundIcon>
            </Groups>
        );
    }}
```

## Многоуровневое меню

#### margins

Задает дополнительные отступы от родителя

-   по умолчанию `4px` полезно использовать для многоуровневых меню

```
    {() => {
        const [isOpenFirstLevelDropdown, setOpenFirstLevelDropdown] = React.useState(false);
        const [isOpenSecondLevelDropdown, setOpenSecondLevelDropdown] = React.useState(false);
        const [isOpenThirdLevelDropdown, setOpenThirdLevelDropdown] = React.useState(false);
        const showFirstLevelDropdown = () => {
            if (!isOpenFirstLevelDropdown) {
                setOpenFirstLevelDropdown(true);
            }
        };
        const hideFirstLevelDropdown = () => {
            if (isOpenFirstLevelDropdown) {
                setOpenFirstLevelDropdown(false);
                hideSecondLevelDropdown();
            }
        };
        const showSecondLevelDropdown = () => {
            if (isOpenFirstLevelDropdown && !isOpenSecondLevelDropdown) {
                setOpenSecondLevelDropdown(true);
            }
        };
        const hideSecondLevelDropdown = () => {
            if (isOpenSecondLevelDropdown) {
                setOpenSecondLevelDropdown(false);
                hideThirdLevelDropdown();
            }
        };
        const showThirdLevelDropdown = () => {
            if (!isOpenThirdLevelDropdown) {
                setOpenThirdLevelDropdown(true);
            }
        };
        const hideThirdLevelDropdown = () => {
            if (isOpenThirdLevelDropdown) {
                setOpenThirdLevelDropdown(false);
            }
        };
        return (
            <div>
                <div onClick={showFirstLevelDropdown}>Кликни</div>
                {isOpenFirstLevelDropdown && (
                    <DropList fixed scrollable={false}>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 1</DropList.Item>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 2</DropList.Item>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 3</DropList.Item>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 4</DropList.Item>
                        <DropList.Item onMouseOver={showSecondLevelDropdown} onMouseLeave={hideSecondLevelDropdown}>
                            Item 5 with nested
                            {isOpenSecondLevelDropdown && (
                                <DropList align='horizontal' float='end' margins={{ x: 0, y: -8 }} scrollable={false}>
                                    <DropList.Item onClick={hideFirstLevelDropdown}>Item 1</DropList.Item>
                                    <DropList.Item onMouseOver={showThirdLevelDropdown} onMouseLeave={hideThirdLevelDropdown}>
                                        Item 2 with nested
                                        {isOpenThirdLevelDropdown && (
                                            <DropList align='horizontal' float='end' margins={{ x: 0, y: -8 }}>
                                                <DropList.Item onClick={hideFirstLevelDropdown}>Item 1</DropList.Item>
                                                <DropList.Item onClick={hideFirstLevelDropdown}>Item 2</DropList.Item>
                                            </DropList>
                                        )}
                                    </DropList.Item>
                                </DropList>
                            )}
                        </DropList.Item>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 6</DropList.Item>
                        <DropList.Item onClick={hideFirstLevelDropdown}>Item 7</DropList.Item>
                    </DropList>
                )}
            </div>
        );
    }}
```

## Различия в позиционировании (align и float)

Возможны два значения свойства align `vertical` (по умолчанию) и `horisontal`

-   vertical - список выпадает вверх или вниз относительно родителя
-   horisontal - список выпадает вправо или влево относительно родителя

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
                    <RoundIcon>
                        <ManPerson />
                        {isOpen && (
                            <DropList>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </RoundIcon>
                    <RoundIcon>
                        <ManPerson />
                        {isOpen && (
                            <DropList align='horizontal'>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </RoundIcon>
                    <RoundIcon>
                        <ManPerson />
                        {isOpen && (
                            <DropList align='horizontal' float='end'>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </RoundIcon>
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
                    <RoundIcon>
                        <ManPerson />
                        {isOpen && (
                            <DropList fixed followParentWhenScroll onHide={() => setOpen(false)}>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </RoundIcon>
                    <RoundIcon>
                        <ManPerson />
                        {isOpen && (
                            <DropList align='horizontal' fixed followParentWhenScroll onHide={() => setOpen(false)}>
                                {items.map((i) => (
                                    <DropList.Item key={i}>{i}</DropList.Item>
                                ))}
                            </DropList>
                        )}
                    </RoundIcon>
                    <RoundIcon>
                        <ManPerson />
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
                    </RoundIcon>
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
                            <RoundIcon>
                                <ManPerson />
                                {isOpen1 && (
                                    <DropList fixed followParentWhenScroll onHide={() => setOpen1(false)}>
                                        {items.map((i) => (
                                            <DropList.Item key={i}>{i}</DropList.Item>
                                        ))}
                                    </DropList>
                                )}
                            </RoundIcon>
                            <RoundIcon>
                                <ManPerson />
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
                            </RoundIcon>
                            <RoundIcon>
                                <ManPerson />
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
                            </RoundIcon>
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
            <RoundIcon onClick={() => setOpen(!isOpen)}>
                <ManPerson />
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
            </RoundIcon>
        );
    }}
```