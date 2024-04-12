# Modal

Используется в случаях:

-   когда необходимо перевести внимание пользователя от текущей задачи к чему-то более важному
-   сообщить об ошибках, положительном завершении работы над задачей, уточнить намерения пользователя
-   показать дополнительную информацию/действие внутри контекста

## Свойства / Props

| Prop      | Type                                                   | Default | Description |
| --------- | ------------------------------------------------------ | ------- | ----------- |
| state      | { children?: ReactNode; onClose?: ((data?: unknown) => void) \| undefined; open?: (() => void) \| null \| undefined; close?: ((data?: unknown, force?: boolean \| undefined) => void) \| undefined; } \| undefined                   |
| isOpen    | boolean \| undefined     |
| closeIcon    | ReactNode                                           |    |
| onClose | ((data?: unknown) => boolean \| void \| Promise<boolean>) \| undefined |
| onPreDespose    | (() => void) \| undefined
| ref    | any                                           |
| closeByFade    | boolean | undefined |                                


## HTMLAttributes

| Prop      | Type                                                   | Default | Description |
| --------- | ------------------------------------------------------ | ------- | ----------- |
| id      | string \| undefined |


## Импорт

```
import { Modal, useModal } from 'vienna-ui';
```

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

## Внешний вид

```javascript
const state = useModal(); //при использовании в декларативном стиле

// state.open() - открыть окно
// state.close(data) - закрыть окно с передачей в onClose - data

closeHandler = (data) => {
    /**/
};

// ...

<Modal state={state} onClose={closeHandler}>
    content
</Modal>;

// ...
```

или

```javascript
const isOpen = useState(false);

<Modal isOpen={isOpen} onClose={closeHandler}>
    content
</Modal>;
```

#### Варианты наполнения

###### Модальное окно с отступами: заголовок, контент, подвал. (пример без хуков)

Является самым предпочтительным вариантом для большинства случаев. Особенно если требуется обновлять состояние содержимого модального окна из родителя.

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [scroll, setScroll] = React.useState(false);
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const openModal = React.useCallback((flag) => {
            setScroll(flag);
            setIsOpen(true);
        }, []);
        return (
            <>
                <Groups>
                    <Button onClick={() => openModal(false)}>Show modal scroll=document</Button>
                    <Button onClick={() => openModal(true)}>Show modal scroll=body</Button>
                </Groups>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body scroll={scroll} maxHeight={300}>
                            {arr.map((v, i) => (
                                <React.Fragment key={i}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris.
                                </React.Fragment>
                            ))}
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}

```

###### Модальное окно с отступами: заголовок, контент, подвал.

```
    {() => {
        const modalState = useModal();
        return (
            <>
                <Button onClick={modalState.open}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => modalState.close('test')}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={modalState.close}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

###### Модальное окно с отступами: заголовок, подзаголовок, контент, подвал.

```
    {() => {
        const modalState = useModal();
        return (
            <>
                <Button onClick={() => modalState.open()}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                            <Modal.SubTitle>Subheading text</Modal.SubTitle>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent'>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

###### Модальное окно с отступами: заголовок, подзаголовок, произвольный контент, подвал.

```
    {() => {
        const modalState = useModal();
        return (
            <>
                <Button onClick={() => modalState.open()}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                            <Modal.SubTitle>Subheading text</Modal.SubTitle>
                        </Modal.Head>
                        <Modal.Body>
                            <ComponentHelpers.Modal.ContentArea>Content area</ComponentHelpers.Modal.ContentArea>
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent'>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

###### Модальное окно с отступами: иконка, заголовок, подзаголовок, произвольный контент, подвал.

```
    {() => {
        const modalState = useModal();
        return (
            <>
                <Button onClick={() => modalState.open()}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <Modal.Layout>
                        <Modal.Head>
                            <ComponentHelpers.Modal.DemoIcon>
                                <RoundIcon size='l'>
                                    <Attach size='m' />
                                </RoundIcon>
                            </ComponentHelpers.Modal.DemoIcon>
                            <Modal.Title>Modal header</Modal.Title>
                            <Modal.SubTitle>Subheading text</Modal.SubTitle>
                        </Modal.Head>
                        <Modal.Body>
                            <ComponentHelpers.Modal.ContentArea style={{ height: '132px' }}>
                                Content area
                            </ComponentHelpers.Modal.ContentArea>
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                                <Button size='l' design='accent'>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

###### Модальное окно с отступами: иконка (по центру), заголовок (по центру), контент (по центру), подвал (по центру).

```
    {() => {
        const modalState = useModal();
        const theme = {
            screen: {
                custom: {
                    footer: {
                        marginBottom: '76px',
                    },
                },
            },
        };
        return (
            <>
                <Button onClick={() => modalState.open()}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <ThemeProvider theme={theme}>
                        <Modal.Layout>
                            <Modal.Head align={'center'}>
                                <ComponentHelpers.Modal.DemoIcon>
                                    <RoundIcon size='l'>
                                        <CloseCancelX size='m' />
                                    </RoundIcon>
                                </ComponentHelpers.Modal.DemoIcon>
                                <Modal.Title>Modal header</Modal.Title>
                                <Modal.SubTitle>Subheading text</Modal.SubTitle>
                            </Modal.Head>
                            <Modal.Body>
                                <div style={{ textAlign: 'center' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </div>
                            </Modal.Body>
                            <Modal.Footer align={'center'}>
                                <Button size='l' design='outline'>
                                    Button example
                                </Button>
                            </Modal.Footer>
                        </Modal.Layout>
                    </ThemeProvider>
                </Modal>
            </>
        );
    }}
```

###### Модальное окно с отступами: картинка, заголовок (по центру), контент (по центру), подвал (по центру).

```
    {() => {
        const modalState = useModal();
        return (
            <>
                <Button onClick={() => modalState.open()}>Show modal</Button>
                <Modal state={modalState} onClose={console.log}>
                    <Modal.Layout>
                        <ComponentHelpers.Modal.Image />
                        <Modal.Head align={'center'}>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div style={{ textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </Modal.Body>
                        <Modal.Footer align={'center'}>
                            <Button size='l' design='accent'>
                                Button example
                            </Button>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

## Использование в режиме менеджера

```javascript
const [open, close] = useModal(ModalContent, callback); // при использовании в режиме менеджера

// open() - открыть окно
// close(data) - закрыть окно с передачей в callback - data

// ...

open();
// close(data)

// ...
```

-   Данный способ дает возможность создавать переиспользуемые модальные окна, которые можно открывать из любой части приложения не привязываясь к контенту или компонентам.
-   При передаче в `useModal` в качестве параметров `JSX.Elemen`'а контента окна и `callback` функции срабатывающей на `onClose`, возвращаются методы открытия и закрытия окна в режиме менеджера.

```
    {() => {
        const [open, close] = useModal(
            <Modal.Layout>
                <ComponentHelpers.Modal.Image />
                <Modal.Head align={'center'}>
                    <Modal.Title>Modal header</Modal.Title>
                </Modal.Head>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                </Modal.Body>
                <Modal.Footer align={'center'}>
                    <Button size='l' design='accent'>
                        Button example
                    </Button>
                </Modal.Footer>
            </Modal.Layout>
        );
        return <Button onClick={open}>Show modal</Button>;
    }}
```

## Пример переиспользуемого окна подтверждения действия (confirm)

```
    {() => {
        const [status, setStatus] = React.useState('');
        const showModal = React.useCallback(() => {
            ComponentHelpers.Modal.confirmModal('Продолжить выполнение операции?').then((newStatus) =>
                setStatus(newStatus)
            );
        }, []);
        return (
            <Groups>
                <Button onClick={showModal}>Show modal</Button>
                {status}
            </Groups>
        );
    }}
```

#### Пояснение

-   Рассмотрим асинхронную реализацию, синхронная будет выглядеть примерно аналогично
-   Создаем файл `ConfirmModal.tsx`

```javascript
import { useModal } from '@fcc/ui';

export const ComponentHelpers.Modal.confirmModal = async (message) => {
    return new Promise((resolve) => {
        const [open, close] = useModal(
            <Modal.Layout>
                <Modal.Head>
                    <Modal.Title>Modal header</Modal.Title>
                </Modal.Head>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Groups>
                        <Button size='l' design='outline' onClick={() => close('Нажали "Отмена"')}>
                            Отмена
                        </Button>
                        <Button size='l' design='accent' onClick={() => close('Нажали "Ок"')}>
                            Ок
                        </Button>
                    </Groups>
                </Modal.Footer>
            </Modal.Layout>,
            resolve
        );
        open();
    });
};
```

-   Использование

```javascript
import { ComponentHelpers.Modal.confirmModal } from 'СonfirmModal';

// ... async
const status = await ComponentHelpers.Modal.confirmModal('Продолжить выполнение операции?');
// ...
```

## Модальное окно, как сложный компонент

Файл с компонентом модального окна

```javascript
const ModalContent = (props) => {
    const { onClose, ...attrs } = props;
    // бизнес логика
    return /**/;
};

export const MyModal = (props, callback) => {
    const [open, close] = useModal(<ModalContent {...props} onClose={close} />, callback);
    open();
};
```

## Модальное окно поверх модального окна

```
    {() => {
        const showModal = React.useCallback(() => {
            ComponentHelpers.Modal.confirmModal('Продолжить выполнение операции?').then(console.log);
        }, []);
        const [open, close] = useModal(
            <Modal.Layout>
                <ComponentHelpers.Modal.Image />
                <Modal.Head align={'center'}>
                    <Modal.Title>Modal header</Modal.Title>
                </Modal.Head>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                </Modal.Body>
                <Modal.Footer align={'center'}>
                    <Button size='l' design='accent' onClick={showModal}>
                        Show modal
                    </Button>
                </Modal.Footer>
            </Modal.Layout>
        );
        return (
            <Groups design='vertical'>
                <Button onClick={open}>Show modal</Button>
            </Groups>
        );
    }}
```

## Кастомизация тени и иконки закрытия, дополнительная обработка события закрытия

#### Сокрытие иконки закрытия

Иконка закрытия модального окна может быть полностью скрыта передачей `null` в `closeIcon`

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <Groups design='vertical'>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeIcon={null}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </Groups>
        );
    }}
```

#### Замена иконки закрытия

Передача в `closeIcon` значения отличного от null заменяет иконку закрытия

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <Groups design='vertical'>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeIcon={<FaceSmile size='l' />}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Modal.Body>
                        <Modal.Footer>
                            <Groups>
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                    Button example
                                </Button>
                            </Groups>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </Groups>
        );
    }}
```

#### Комплексный пример

Для более точной работы с модальными окнами предусмотрено следующие

-   метод `onClose` может возвращать занчение `true/false` или аналогичный `promise`, в случае возвращения `false` - окно не будет закрыьто по сути onClose вызывается непосредственно до старта анимации и процедуры закрытия и может быть предотвращен

Если в качестве управления состоянием окна применятся `isOpen` - следует установить его в false самостоятельно, так как анимация закрытие и исчезновение окна будут произведены, но родительское состояние не изменится.

-   метод `onPreDespose` - вызывается после завершения анимации закрытия, непосредственно перед удалением модального окна из `DOM`

-   если проп `isOpen` `undefined`, виидмостью Modal нужно управлять через ref.

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        const handleCustomClose = React.useCallback(
            () =>
                ComponentHelpers.Modal.confirmModal('Вы уверены, что хотите закрыть окно?').then((result) => {
                    if (result !== 'Нажали "Отмена"') {
                        console.log('start despose');
                        setIsOpen(false);
                        return true;
                    }
                    return false;
                }),
            []
        );
        const handleDespose = React.useCallback(() => console.log('end despose'), []);
        const theme = {
            modal: {
                fade: {
                    show: {
                        'background-color': 'rgba(43, 255, 51, .24)',
                    },
                },
            },
        };
        return (
            <Groups design='vertical'>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <ThemeProvider theme={theme}>
                    <Modal
                        isOpen={isOpen}
                        onClose={handleCustomClose}
                        onPreDespose={handleDespose}
                        closeIcon={<FaceSmile size='l' />}>
                        <Modal.Layout>
                            <Modal.Head>
                                <Modal.Title>Modal header</Modal.Title>
                            </Modal.Head>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </Modal.Body>
                            <Modal.Footer>
                                <Groups>
                                    <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
                                        Button example
                                    </Button>
                                    <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
                                        Button example
                                    </Button>
                                </Groups>
                            </Modal.Footer>
                        </Modal.Layout>
                    </Modal>
                </ThemeProvider>
            </Groups>
        );
    }}
```
