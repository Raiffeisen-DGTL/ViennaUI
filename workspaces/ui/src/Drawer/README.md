# Drawer

Используется для

-   Предоставления объемной информации в контексте - тексты и дополнительные настройки
-   Дополнительные действия с контентом страницы


## Импорт

```
import { Drawer, useDrawer } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
isOpen | boolean \| undefined | false | 
closeIcon | ReactNode | <Close /> | Иконка для закрытия
noScroll | boolean \| undefined | false | Управление возможностью прокрутки всего контента или только содержимого `Drawer.Body`
orientation | "top" \| "bottom" \| "left" \| "right" \| undefined | false | Позиционирование
onClose | ((data?: any) => boolean \| void \| Promise) \| undefined | false |
onPreDispose | (() => void) \| undefined | false | Обработчик события исчезновения drawer-a
state | any | false | Управление состоянием черех хук `useDrawer`

## Использование

Компонент состоит из родительского контейнера `Drawer` и элементов контента `Drawer.Layout`, `Drawer.Head`, `Drawer.Title`, `Drawer.SubTitle`, `Drawer.Body` и `Drawer.Footer`.

```jsx
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
                        <Demo>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Demo>
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

## Признак открытого компонента
##### Свойство `isOpen`

Для того, чтобы управлять состояние открытия/закрытия Drawer-a необходимо передать соотвествующий статус `isOpen`.

 ```jsx
 <Button onClick={() => setOpen(true)}>Show Drawer</Button>
 <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
     <Drawer.Layout>
         <Drawer.Head>
             <Drawer.Title>Enter SMS-code</Drawer.Title>
             <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
         </Drawer.Head>
         <Drawer.Body>
             <Demo>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua.
             </Demo>
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
 ```

## Позиционирование
##### Свойство `orientation`

Компонент поддерживает позиционирование (свойство - `orientation`) по четырем сторонам экрана `left`, `bottom`, `right` и `top`

```jsx
<Button onClick={() => setOpen(true)}>Show Drawer</Button>
<Drawer orientation='bottom' isOpen={isOpen} onClose={() => setOpen(false)}>
    <Drawer.Layout>
        <Drawer.Head>
            <Drawer.Title>Enter SMS-code</Drawer.Title>
            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
        </Drawer.Head>
        <Drawer.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </Demo>
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
```


## Прокрутка длинного контента
##### Свойство `noScroll`

Возможен вариант прокрутки всего компонента или только внутреннего содержимого.
Если передается значение `true`, то для прокрутки будет доступен контент,  расположенный в `Drawer.Body`.

> Для ориентации `bottom` или `top` используйте только вариацию с прокруткой внутри компонента

```jsx
<Button onClick={() => setOpen(true)}>Show Drawer</Button>
<Drawer noScroll isOpen={isOpen} onClose={() => setOpen(false)}>
    <Drawer.Layout>
        <Drawer.Head>
            <Drawer.Title>Enter SMS-code</Drawer.Title>
            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
        </Drawer.Head>
        <Drawer.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </Demo>
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
```


## Иконка для закрытия
##### Свойство `closeIcon`

В качестве иконки для закрытия компонента, можно передать любой компонент.

```jsx
<Button onClick={() => setOpen(true)}>Show Drawer</Button>
<Drawer closeIcon={<>Close</>} isOpen={isOpen} onClose={() => setOpen(false)}>
    <Drawer.Layout>
        <Drawer.Head>
            <Drawer.Title>Enter SMS-code</Drawer.Title>
            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
        </Drawer.Head>
        <Drawer.Body>
            <Demo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </Demo>
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
```

## Управление состоянием через хук
##### Свойство `state`

Управлять состоянием Drawer-a можно через хук `useDrawer` и свойство `state`, которое содержит:
```
{
  close: () => void;
  open: () => void;
}
```

```
() => {
  const state = useDrawer();
  return (
    <>
      <Button onClick={() => state.open()}>Show Drawer</Button>
      <Drawer state={state}>
        <Drawer.Layout>
          <Drawer.Head>
            <Drawer.Title>Enter SMS-code</Drawer.Title>
            <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
          </Drawer.Head>
          <Drawer.Body>
            <Demo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Demo>
            <Select placeholder="Выберите значение">
              <Select.Option>Значение 1</Select.Option>
              <Select.Option>Значение 2</Select.Option>
              <Select.Option>Значение 3</Select.Option>
              <Select.Option>Значение 4</Select.Option>
              <Select.Option>Значение 5</Select.Option>
            </Select>
          </Drawer.Body>
          <Drawer.Footer>
            <Groups>
              <Button size="l" design="outline">
                Button example
              </Button>
              <Button size="l" design="accent" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Groups>
          </Drawer.Footer>
        </Drawer.Layout>
      </Drawer>
    </>
  )
}
```
