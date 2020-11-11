# Modal

Используется в случаях:

-   когда необходимо перевести внимание пользователя от текущей задачи к чему-то более важному
-   сообщить об ошибках, положительном завершении работы над задачей, уточнить намерения пользователя
-   показать дополнительную информацию/действие внутри контекста

## Импорт

```
import { Modal, useModal } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
isOpen | boolean \| undefined | false |
closeIcon | ReactNode | <Close /> | Иконка для закрытия
onClose | ((data?: any) => boolean \| void \| Promise) \| undefined | false |
onPreDispose | (() => void) \| undefined | false | Обработчик события исчезновения модального окна
state | any | false | Управление состоянием черех хук `useModal`

## Использование

Компонент состоит из родительского контейнера `Modal` и элементов контента `Modal.Layout`, `Modal.Head`, `Modal.Title`, `Modal.SubTitle`, `Modal.Body` и `Modal.Footer`.

```jsx
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

```jsx
const isOpen = useState(false);

<Modal isOpen={isOpen} onClose={closeHandler}>
    content
</Modal>;
```

##### Модальное окно с отступами: заголовок, контент, подвал. (пример без хуков)

Является самым предпочтительным вариантом для большинства случаев. Особенно если требуется обновлять состояние содержимого модального окна из родителя.

```jsx
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
                        <Demo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.
                        </Demo>
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

## Использование в режиме менеджера
##### Свойство `state`, `useModal`

```
const [open, close] = useModal(ModalContent, callback); // при использовании в режиме менеджера

// open() - открыть окно
// close(data) - закрыть окно с передачей в callback - data

// ...

open();
// close(data)

// ...
```

> Данный способ дает возможность создавать переиспользуемые модальные окна, которые можно открывать из любой части приложения не привязываясь к контенту или компонентам.
> При передаче в `useModal` в качестве параметров `JSX.Elemen`'а контента окна и `callback` функции срабатывающей на `onClose`, возвращаются методы открытия и закрытия окна в режиме менеджера.

```jsx
{() => {
    const [open, close] = useModal(
        <Modal.Layout>
            <Image />
            <Modal.Head align={'center'}>
                <Modal.Title>Modal header</Modal.Title>
            </Modal.Head>
            <Modal.Body>
                <Demo style={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </Demo>
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

## Признак открытого компонента
##### Свойство `isOpen`

Для того, чтобы управлять состояние открытия/закрытия модального окна необходимо передать соотвествующий статус `isOpen`.

```
<Button onClick={() => setIsOpen(true)}>Show modal</Button>
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <Modal.Layout>
        <Modal.Head>
            <Modal.Title>Modal header</Modal.Title>
        </Modal.Head>
        <Modal.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
            </Demo>
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
```

## Иконка для закрытия
##### Свойство `closeIcon`

В качестве иконки для закрытия компонента, можно передать любой компонент.

```
<Button onClick={() => setIsOpen(true)}>Show modal</Button>
<Modal closeIcon={<>Close</>} isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <Modal.Layout>
        <Modal.Head>
            <Modal.Title>Modal header</Modal.Title>
        </Modal.Head>
        <Modal.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
            </Demo>
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
```

## Исчезновение компонента
##### Свойство `onPreDispose`

Метод `onPreDispose` вызывается после завершения анимации закрытия, непосредственно перед удалением модального окна из `DOM`.

```
<Modal
    isOpen={isOpen}
    onClose={handleCustomClose}
    onPreDespose={() => console.log('end despose')}
>
    <Modal.Layout>
        <Modal.Head>
            <Modal.Title>Modal header</Modal.Title>
        </Modal.Head>
        <Modal.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
            </Demo>
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
```
