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
| closeByFade    | boolean \| undefined |                                


## HTMLAttributes

| Prop      | Type                                                   | Default | Description |
| --------- | ------------------------------------------------------ | ------- | ----------- |
| id      | string \| undefined |


## Импорт

```
import { Modal, useModal } from 'vienna-ui';
```



# Modal

Модальное окно («диалоговое окно») — окно, появляющееся поверх страницы в ответ на действия пользователя и блокирующее доступ к основному содержимому страницы.
Используется, когда нам нужно выполнить какое‑то прямое единичное действие (подтвердить, удалить, etc.). Модальное окно появляется поверх страницы, затемняя ее. Это помогает сфокусировать внимание пользователя на конкретных действиях, не теряя при этом общий контекст.

Используется в случаях:

-   когда необходимо перевести внимание пользователя от текущей задачи к чему-то более важному;
-   сообщить об ошибках, положительном завершении работы над задачей, уточнить намерения пользователя;
-   показать дополнительную информацию/действие внутри контекста;



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

#### Варианты наполнения

###### Модальное окно с отступами: заголовок, контент, подвал (пример без хуков)

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
                        <Modal.Body scroll={scroll} maxHeight={scroll ? 300 : undefined}>
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

###### Модальное окно с отступами: заголовок, контент, подвал

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

###### Модальное окно с отступами: заголовок, подзаголовок, контент, подвал

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
                            <Modal.SubTitle>Subheading text</Modal.SubTitle>
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

###### Модальное окно с отступами: заголовок, подзаголовок, произвольный контент, подвал

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
                            <Modal.SubTitle>Subheading text</Modal.SubTitle>
                        </Modal.Head>
                        <Modal.Body>
                            <ComponentHelpers.Modal.ContentArea>Content area</ComponentHelpers.Modal.ContentArea>
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

###### Модальное окно с отступами: иконка, заголовок, подзаголовок, произвольный контент, подвал

```
    {() => {
         const [isOpen, setIsOpen] = React.useState(false);
         return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <ComponentHelpers.Modal.DemoIcon>
                                <IconContainer size='l'>
                                    <AttachIcon size='m' />
                                </IconContainer>
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

###### Модальное окно с отступами: иконка (по центру), заголовок (по центру), контент (по центру), подвал (по центру)

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
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
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <ThemeProvider theme={theme}>
                        <Modal.Layout>
                            <Modal.Head align={'center'}>
                                <ComponentHelpers.Modal.DemoIcon>
                                    <IconContainer size='l'>
                                        <CloseCancelXIcon size='m' />
                                    </IconContainer>
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
                                <Button size='l' design='outline' onClick={() => setIsOpen(false)}>
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

###### Модальное окно с отступами: картинка, заголовок (по центру), контент (по центру), подвал (по центру)

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
         return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
                            <Button size='l' design='accent' onClick={() => setIsOpen(false)}>
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
-   При передаче в `useModal` в качестве параметров `JSX.Element`'а контента окна и `callback` функции срабатывающей на `onClose`, возвращаются методы открытия и закрытия окна в режиме менеджера.

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
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeIcon={<FaceSmileIcon size='l' />}>
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

Для более точной работы с модальными окнами предусмотрено следующее:

-   метод `onClose` может возвращать значение `true/false` или аналогичный `promise`, в случае возвращения `false` - окно не будет закрыто по сути onClose вызывается непосредственно до старта анимации и процедуры закрытия и может быть предотвращен.

Если в качестве управления состоянием окна применятся `isOpen` - следует установить его в false самостоятельно, так как анимация закрытия и исчезновения окна будут произведены, но родительское состояние не изменится.

-   метод `onPreDespose` - вызывается после завершения анимации закрытия, непосредственно перед удалением модального окна из `DOM`.

-   если проп `isOpen` принимает значение `undefined`- видимостью Modal нужно управлять через ref.
-   `onAfterOpen` - callback функция открытия окна с учётом времени выполнения анимации;

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
        const handleOpen = React.useCallback(() => console.log('modal open'), []);
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
                        onAfterOpen={handleOpen}
                        closeIcon={<FaceSmileIcon size='l' />}>
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

## Расположение двух кнопок в футере слева

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(true)}>
                    <Modal.Layout>
                        <Modal.Head align={'center'}>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div style={{ textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </Modal.Body>
                        <Modal.Footer align={'left'}>
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

## Расположение двух кнопок в футере по центру

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(true)}>
                    <Modal.Layout>
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
                            <Groups justifyContent='center'>
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

## Расположение двух кнопок в футере справа

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(true)}>
                    <Modal.Layout>
                        <Modal.Head align={'center'}>
                            <Modal.Title>Modal header</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div style={{ textAlign: 'center' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </Modal.Body>
                        <Modal.Footer align={'right'}>
                            <Groups justifyContent='flex-end'>
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

## Доступность с клавиатуры

Обработчик `onClose` срабатывает по нажатию клавиши Escape при передаче пропа `closeByEscape`.

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} closeByFade={false} onClose={() => setIsOpen(false)} closeByEscape>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Title</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.
                            </div>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

## Агрессивное модальное окно c размытым фоном, которое нельзя закрыть кликом вне области или по нажатию клавиши Esc

Для данных модальных окон необходимо использовать свойства:
- `blurOverlay` (тип boolean, по умолчанию `false`) - отвечает за размытие фона у overlay;
- `hideCloseIcon` (тип boolean, по умолчанию `false`) - отвечает за скрытие иконки крестика;
- `closeByFade` (тип boolean, по умолчанию `true`) - отвечает за закрытие модального окна по клику на overlay;
- `closeByEscape` (тип boolean, по умолчанию `false`) - отвечает за закрытие модального окна по нажатию на клавишу Esc;

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} blurOverlay hideCloseIcon closeByFade={false} closeByEscape={false} onClose={() => setIsOpen(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Title</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setIsOpen(false)}>Hide modal</Button>
                        </Modal.Footer>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}
```

## Размер модального окна

С помощью свойства `size` можно указать размер модального окна. Доступные значения: `s`, `m`, `l`. Размеры отличаются шириной модального окна:
- `s` - `420px`
- `m` - `600px`
- `l` - `1024px`

```
    {() => {
        const [openedModal, setOpenedModal] = React.useState(undefined);
        return (
            <>
                <Groups>
                    <Button onClick={() => setOpenedModal('s')}>Show modal "s" size</Button>
                    <Button onClick={() => setOpenedModal('m')}>Show modal "m" size</Button>
                    <Button onClick={() => setOpenedModal('l')}>Show modal "l" size</Button>
                </Groups>
                <Modal size='s' isOpen={openedModal === 's'} onClose={() => setOpenedModal(undefined)} closeByEscape>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal size S</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.
                            </div>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
                <Modal isOpen={openedModal === 'm'} onClose={() => setOpenedModal(undefined)} closeByEscape>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal size M</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.
                            </div>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
                <Modal size='l' isOpen={openedModal === 'l'} onClose={() => setOpenedModal(undefined)} closeByEscape>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Modal size L</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris.
                            </div>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
            </>
        );
    }}

```

## Использование в декларативном стиле (deprecated)

```
    {() => {
        const state = useModal();
        const closeModal = (data) => {
            state.close(data)
        }
        return (
            <>
                <Button onClick={state.open}>Show modal</Button>
                <Modal state={state} onClose={closeModal}>
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
                                <Button size='l' design='outline' onClick={() => state.close('test')}>
                                    Button example
                                </Button>
                                <Button size='l' design='accent' onClick={state.close}>
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


## Установка data-testid

Атрибут `data-testid` можно передать для контейнера и иконки закрытия. Передается с помощью пропса `testId?: { container, closeIcon }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultModalTestId: ModalProps['testId'] = {
    container: 'modal_container',
    closeIcon: 'modal_close-icon',
};
```

```
    {() => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Show modal</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} testId={{container: 'modal_container', closeIcon: 'modal_close-icon'}}>
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