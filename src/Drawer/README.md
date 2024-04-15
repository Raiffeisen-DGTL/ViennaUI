# Drawer

Используется для

-   Предоставления объемной информации в контексте - тексты и дополнительные настройки
-   Дополнительные действия с контентом страницы

## Импорт

```
import { Drawer, useDrawer } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| isOpen | boolean \| undefined |  |
| closeIcon | ReactNode | | Иконка для закрытия |
| noScroll | boolean \| undefined |  | Управление возможностью прокрутки всего контента или только содержимого `Drawer.Body` |
| orientation | "top" \| "bottom" \| "left" \| "right" \| undefined |  | Позиционирование |
| onClose | ((data?: any) => boolean \| void \| Promise) \| undefined |  |
| onPreDispose | (() => void) \| undefined |  | Обработчик события исчезновения drawer-a |
| state | any |  | Управление состоянием черех хук `useDrawer` |
| ref | boolean \| undefined  |
| closeByFade | boolean \| undefined  |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined |  |
| width | string \| undefined |  |


## Использование


```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            <ComponentHelpers.Drawer.Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.
                            </ComponentHelpers.Drawer.Demo>
                            <Select placeholder='Выберите значение'>
                                <Select.Option>Значение 1</Select.Option>
                                <Select.Option>Значение 2</Select.Option>
                                <Select.Option>Значение 3</Select.Option>
                                <Select.Option>Значение 4</Select.Option>
                                <Select.Option>Значение 5</Select.Option>
                            </Select>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Внешний вид

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            <ComponentHelpers.Drawer.Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.
                            </ComponentHelpers.Drawer.Demo>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Позиционирование

Компонент поддерживает позиционирование (свойство - `orientation`) по четырем сторонам экрана `left`, `bottom`, `right` и `top`

```
    {() => {
        const [orientation, setOrientation] = React.useState('right');
        const [isOpen, setOpen] = React.useState(false);
        const handleOrientation = React.useCallback((e, data)=>{
            setOrientation(data.value);
        },[])
        return (
            <>
                <Groups>
                    <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                    <Radio value="left" checked={orientation === 'left'} onChange={handleOrientation} name='orientation'>left</Radio>
                    <Radio value="bottom" checked={orientation === 'bottom'} onChange={handleOrientation} name='orientation'>bottom</Radio>
                    <Radio value="right" checked={orientation === 'right'} onChange={handleOrientation} name='orientation'>right</Radio>
                    <Radio value="top" checked={orientation === 'top'} onChange={handleOrientation} name='orientation'>top</Radio>
                </Groups>
                <Drawer orientation={orientation} isOpen={isOpen} onClose={() => setOpen(false)}>
                     <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            {orientation === 'left' || orientation === 'right' ?
                            <ComponentHelpers.Drawer.Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.
                            </ComponentHelpers.Drawer.Demo>
                            :  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.`}
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Прокрутка длинного контента

Аналогично компоненту `Screen`. Возможен вариант прокрутки всего компонента или только внутреннего содержимого

```
    {() => {
        const [orientation, setOrientation] = React.useState('right');
        const [isOpen, setOpen] = React.useState(false);
        const [scroll, setScroll] = React.useState(false);
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const handleOrientation = React.useCallback((e, data) => {
            setOrientation(data.value);
        }, []);
        const open = React.useCallback((scroll) => {
            setOpen(true);
            setScroll(scroll);
        }, []);
        return (
            <>
                <Groups>
                    <Button onClick={() => open(false)}>Show Drawer (scroll document)</Button>
                    <Button onClick={() => open(true)}>Show Drawer (scroll drawer's body)</Button>
                    <Radio
                        value='left'
                        checked={orientation === 'left'}
                        onChange={handleOrientation}
                        name='orientation1'>
                        left
                    </Radio>
                    <Radio
                        value='right'
                        checked={orientation === 'right'}
                        onChange={handleOrientation}
                        name='orientation1'>
                        right
                    </Radio>
                </Groups>
                <Drawer orientation={orientation} noScroll={scroll} isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body scroll={scroll}>
                            {arr.map((v, i) => (
                                <React.Fragment key={i}>
                                    <ComponentHelpers.Drawer.Demo>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit
                                        amet justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat
                                        nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa.
                                        Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis
                                        aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In
                                        dictum non consectetur a erat nam at lectus. Facilisi cras fermentum odio eu
                                        feugiat. Risus commodo viverra maecenas accumsan. Interdum velit euismod in
                                        pellentesque massa placerat duis ultricies. Ac ut consequat semper viverra nam
                                        libero justo. Dapibus ultrices in iaculis nunc sed augue lacus viverra.
                                    </ComponentHelpers.Drawer.Demo>
                                    <Select placeholder='Выберите значение'>
                                        <Select.Option>Значение 1</Select.Option>
                                        <Select.Option>Значение 2</Select.Option>
                                        <Select.Option>Значение 3</Select.Option>
                                        <Select.Option>Значение 4</Select.Option>
                                        <Select.Option>Значение 5</Select.Option>
                                    </Select>
                                </React.Fragment>
                            ))}
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

Для ориентации `bottom` или `top` используйте только вариацию с прокруткой внутри компонента

```
    {() => {
        const [orientation, setOrientation] = React.useState('bottom');
        const [isOpen, setOpen] = React.useState(false);
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const handleOrientation = React.useCallback((e, data) => {
            setOrientation(data.value);
        }, []);
        const open = React.useCallback((scroll) => {
            setOpen(true);
        }, []);
        return (
            <>
                <Groups>
                    <Button onClick={() => open(true)}>Show Drawer</Button>
                    <Radio value='top' checked={orientation === 'top'} onChange={handleOrientation} name='orientation2'>
                        top
                    </Radio>
                    <Radio
                        value='bottom'
                        checked={orientation === 'bottom'}
                        onChange={handleOrientation}
                        name='orientation2'>
                        bottom
                    </Radio>
                </Groups>
                <Drawer orientation={orientation} isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body scroll={true} maxHeight={300}>
                            {arr.map((v, i) => (
                                <React.Fragment key={i}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet
                                    justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel
                                    pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat
                                    lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut
                                    porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                    consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                                    commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque massa
                                    placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                                    ultrices in iaculis nunc sed augue lacus viverra.
                                </React.Fragment>
                            ))}
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Drawer внутри Drawer

Можно размещать компоненты каскадом

```
    {() => {
        const [orientation, setOrientation] = React.useState('right');
        const [orientationNext, setOrientationNext] = React.useState('left');
        const [isOpen, setOpen] = React.useState(false);
        const [isOpenNext, setOpenNext] = React.useState(false);
        const handleOrientation = React.useCallback((e, data)=>{
            setOrientation(data.value);
        },[])
         const handleOrientationNext = React.useCallback((e, data)=>{
            setOrientationNext(data.value);
        },[])
        return (
            <>
                <Groups>
                    <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                    <Radio value="left" checked={orientation === 'left'} onChange={handleOrientation} name='orientation3'>left</Radio>
                    <Radio value="bottom" checked={orientation === 'bottom'} onChange={handleOrientation} name='orientation3'>bottom</Radio>
                    <Radio value="right" checked={orientation === 'right'} onChange={handleOrientation} name='orientation3'>right</Radio>
                    <Radio value="top" checked={orientation === 'top'} onChange={handleOrientation} name='orientation3'>top</Radio>
                </Groups>
                <Drawer orientation={orientation} isOpen={isOpen} onClose={() => setOpen(false)}>
                     <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            <>
                                <Groups>
                                    <Button onClick={() => setOpenNext(true)}>Show Drawer</Button>
                                    <Radio value="left" checked={orientationNext === 'left'} onChange={handleOrientationNext} name='orientation4'>left</Radio>
                                    <Radio value="bottom" checked={orientationNext === 'bottom'} onChange={handleOrientationNext} name='orientation4'>bottom</Radio>
                                    <Radio value="right" checked={orientationNext === 'right'} onChange={handleOrientationNext} name='orientation4'>right</Radio>
                                    <Radio value="top" checked={orientationNext === 'top'} onChange={handleOrientationNext} name='orientation4'>top</Radio>
                                </Groups>
                                <Drawer orientation={orientationNext} isOpen={isOpenNext} onClose={() => setOpenNext(false)}>
                                     <Drawer.Layout>
                                        <Drawer.Head>
                                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                                        </Drawer.Head>
                                        <Drawer.Body>
                                             {orientationNext === 'left' || orientationNext === 'right' ?
                                                <ComponentHelpers.Drawer.Demo>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                                    donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                                    lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                                    laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                                    a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                                    at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                                    accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                                    consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                                    lacus viverra.
                                                </ComponentHelpers.Drawer.Demo>
                                                :  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                                    donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                                    lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                                    laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                                    a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                                    at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                                    accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                                    consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                                    lacus viverra.`}
                                        </Drawer.Body>
                                        <Drawer.Footer>
                                            <Groups>
                                                <Button size='l' design='outline'>
                                                    Button example
                                                </Button>
                                                <Button size='l' design='accent' onClick={() => setOpenNext(false)}>
                                                    Close
                                                </Button>
                                            </Groups>
                                        </Drawer.Footer>
                                    </Drawer.Layout>
                                </Drawer>
                            </>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Динамический контент

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        const [toggle, setToggle] = React.useState(true);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            {toggle ? (
                                <ComponentHelpers.Drawer.Demo>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet
                                    justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel
                                    pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat
                                    lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut
                                    porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                    consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                                    commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque massa
                                    placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                                    ultrices in iaculis nunc sed augue lacus viverra.
                                </ComponentHelpers.Drawer.Demo>
                            ) : (
                                <ComponentHelpers.Drawer.Demo>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet
                                    justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel
                                    pretium lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat
                                    lacus laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut
                                    porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non
                                    consectetur a erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                                    commodo viverra maecenas accumsan. Interdum velit euismod in pellentesque massa
                                    placerat duis ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus
                                    ultrices in iaculis nunc sed augue lacus viverra. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Amet cursus sit amet dictum sit amet justo donec enim. Sit amet
                                    porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium lectus quam id leo
                                    in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus laoreet non. Etiam
                                    non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor
                                    urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam at lectus.
                                    Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas accumsan.
                                    Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                    consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed
                                    augue lacus viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet
                                    dictum sit amet justo donec enim. Sit amet porttitor eget dolor morbi non. Ipsum
                                    consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam nulla porttitor
                                    massa. Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse faucibus.
                                    Mollis aliquam ut porttitor leo a diam. Auctor urna nunc id cursus metus aliquam. In
                                    dictum non consectetur a erat nam at lectus. Facilisi cras fermentum odio eu
                                    feugiat. Risus commodo viverra maecenas accumsan. Interdum velit euismod in
                                    pellentesque massa placerat duis ultricies. Ac ut consequat semper viverra nam
                                    libero justo. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec
                                    enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                    lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                    laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor
                                    leo a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a
                                    erat nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra
                                    maecenas accumsan. Interdum velit euismod in pellentesque massa placerat duis
                                    ultricies. Ac ut consequat semper viverra nam libero justo. Dapibus ultrices in
                                    iaculis nunc sed augue lacus viverra. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Amet cursus sit amet dictum sit amet justo donec enim. Sit amet porttitor eget dolor
                                    morbi non. Ipsum consequat nisl vel pretium lectus quam id leo in. Duis ut diam quam
                                    nulla porttitor massa. Id volutpat lacus laoreet non. Etiam non quam lacus
                                    suspendisse faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna nunc id
                                    cursus metus aliquam. In dictum non consectetur a erat nam at lectus. Facilisi cras
                                    fermentum odio eu feugiat. Risus commodo viverra maecenas accumsan. Interdum velit
                                    euismod in pellentesque massa placerat duis ultricies. Ac ut consequat semper
                                    viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue lacus viverra.
                                </ComponentHelpers.Drawer.Demo>
                            )}
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setToggle(!toggle)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```

## Подтверждение закрытия

```
    {() => {
        const [isOpen, setOpen] = React.useState(false);
        const handleCustomClose = React.useCallback( () =>
            ComponentHelpers.Modal.confirmModal('Вы уверены, что хотите закрыть окно?').then((result) => {
                if (result !== 'Нажали "Отмена"') {
                    setOpen(false);
                    return true;
                }
                return false;
            }), []);
        return (
            <>
                <Button onClick={() => setOpen(true)}>Show Drawer</Button>
                <Drawer isOpen={isOpen} onClose={handleCustomClose}>
                    <Drawer.Layout>
                        <Drawer.Head>
                            <Drawer.Title>Enter SMS-code</Drawer.Title>
                            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                        </Drawer.Head>
                        <Drawer.Body>
                            <ComponentHelpers.Drawer.Demo>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo
                                donec enim. Sit amet porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                                lectus quam id leo in. Duis ut diam quam nulla porttitor massa. Id volutpat lacus
                                laoreet non. Etiam non quam lacus suspendisse faucibus. Mollis aliquam ut porttitor leo
                                a diam. Auctor urna nunc id cursus metus aliquam. In dictum non consectetur a erat nam
                                at lectus. Facilisi cras fermentum odio eu feugiat. Risus commodo viverra maecenas
                                accumsan. Interdum velit euismod in pellentesque massa placerat duis ultricies. Ac ut
                                consequat semper viverra nam libero justo. Dapibus ultrices in iaculis nunc sed augue
                                lacus viverra.
                            </ComponentHelpers.Drawer.Demo>
                        </Drawer.Body>
                        <Drawer.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={handleCustomClose}>
                                    Close
                                </Button>
                            </Groups>
                        </Drawer.Footer>
                    </Drawer.Layout>
                </Drawer>
            </>
        );
    }}
```