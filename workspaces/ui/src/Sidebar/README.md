# Sidebar

Боковое меню навигации.


## Импорт

```
import { Sidebar } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
size | 's' \| 'm' \| 'l' | 's' |
design | 'light' \| 'dark' | 'light' |
collapsed | boolean \| undefined | false |
header | ReactNode \| undefined | false |
footer | ReactNode \| undefined | false |
onCollapse | any | false |
active | any | false |
width | string \| undefined | '250px' |
ripple | any | false |

## Свойства элемнта / Item Props

Prop | Type | Default | Description
--- | --- | --- | ---
icon | ReactNode \| undefined | false |

## Использование

Компонент состоит из родительского контейнера `Sidebar` и дочерних элементов `Sidebar.Item`.

```
<Sidebar>
    <Sidebar.Item>Home</Sidebar.Item>
    <Sidebar.Item>Mail</Sidebar.Item>
    <Sidebar.Item>Documents</Sidebar.Item>
</Sidebar>
```

## Дизайн
##### Свойство `design`

Внешний вид контролируется параметром `design`. Доступно 2 варианта дизайна: `light` и `dark`. По умолчанию используется `light`.

```
<Sidebar design='dark'>
    <Sidebar.Item>Home</Sidebar.Item>
    <Sidebar.Item>Mail</Sidebar.Item>
    <Sidebar.Item>Documents</Sidebar.Item>
</Sidebar>
```

## Иконка пункта
##### Свойство `icon`

`Sidebar.Item` поддерживает свойство `icon`, куда можно передать иконку элемента меню.

```
<Sidebar>
    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
</Sidebar>
```

## Подвал
##### Свойство `footer`

```
<Sidebar
    footer={
        <React.Fragment>
            <Sidebar.Item icon={<Chat />}>Chat</Sidebar.Item>
            <Sidebar.Item icon={<Chat />}>Help</Sidebar.Item>
            <Sidebar.Item icon={<Settings1 />}>Settings</Sidebar.Item>
        </React.Fragment>
    }>
    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
</Sidebar>
```

## Нотификации
##### Свойство `notification`

В дополнение к `icon` `Sidebar.Item` также поддерживает свойство `notification`, куда можно передать индикатор уведомления.

```
<Sidebar>
    <Sidebar.Item icon={<Home />} notification={<Alarm design='accent' />}>
        Home
    </Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
</Sidebar>
```

## Активный элемент
##### Свойство `active`

`Sidebar.Item` так же поддерживает свойство `active`, для отображения выбранного состояния элемента меню.

```
<Sidebar>
    <Sidebar.Item icon={<Home />} active>
        Home
    </Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
</Sidebar>
```

В дополнение к этому, свойство `active` поддерживает и родительский компонент `Sidebar`, в него можно передать `id` выбранного элемента. При этом `Sidebar.Item` нужно передать свойство `id`

```
<Sidebar active='home'>
    <Sidebar.Item id='home' icon={<Home />}>
        Home
    </Sidebar.Item>
    <Sidebar.Item id='mail' icon={<Mail />}>
        Mail
    </Sidebar.Item>
    <Sidebar.Item id='docs' icon={<Document />}>
        Documents
    </Sidebar.Item>
</Sidebar>
```

## Свернутое состояние
##### Свойство `collapsed`

Комопнент также поддерживает свернутое состояние. Оно контролируется флагом `collapsed`.

```
<Sidebar
    footer={
        <React.Fragment>
            <Sidebar.Item icon={<Chat />}>Chat</Sidebar.Item>
            <Sidebar.Item icon={<Chat />}>Help</Sidebar.Item>
            <Sidebar.Item icon={<Settings1 />}>Settings</Sidebar.Item>
        </React.Fragment>
    }
    collapsed>
    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item>Documents</Sidebar.Item>
</Sidebar>
```

При этом, компонент является управляемым, чтобы переключаться между свернутым и полным состоянием, нужно передать хэндлер в свойство `onCollapse`.

> Обратите внимение, что в свернутом состоянии для каждого элемента меню отображается только его иконка. При этом,
> если иконка для элемента меню отсутствует, то в свернутом состоянии этот элемент не отображается и взаимодействовать
> с ним не получится.**

```{() => {
    const [collapsed, collapse] = React.useState(false);
    return (
        <Sidebar
            active='home'
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Chat />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Chat />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Settings1 />}>Settings</Sidebar.Item>
                </React.Fragment>
            }
            collapsed={collapsed}
            onCollapse={() => collapse(!collapsed)}>
            <Sidebar.Item notification={<Alarm design='accent' />}>Home</Sidebar.Item>
            <Sidebar.Item active>Mail</Sidebar.Item>
            <Sidebar.Item disabled>Documents</Sidebar.Item>
        </Sidebar>
    );
}}
```

## Шапка
##### Свойство `header`

В дополнение к `footer`, компонент поддерживает свойство `header`, который позволяет управлять регином заголовка меню. Это может полезно, например, в случае необходимости использования нестандартного логотипа.

```
<Sidebar header={<Logo size='xl' />}>
    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
</Sidebar>
```

Передав в `header` null можно убрать контейнер заголовка в сайдбаре.

```
<Sidebar header={null}>
    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
    <Sidebar.Item icon={<Mail />}>Mail</Sidebar.Item>
    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
</Sidebar>
```

## Элемент как ссылка

Компонент позволяет оборачивать компонент `Sidebar.Item` в компоненты-ссылки, например для использования react-router.

```{() => {
    const [collapsed, collapse] = React.useState(false);
    return (
        <Sidebar
            active='home'
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Chat />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Chat />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Settings1 />}>Settings</Sidebar.Item>
                </React.Fragment>
            }
            collapsed={collapsed}
            onCollapse={() => collapse(!collapsed)}>
            <Link href='#' id='home'>
                <Sidebar.Item notification={<Alarm design='accent' />}>Home</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Mail</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Documents</Sidebar.Item>
            </Link>
        </Sidebar>
    );
}}
```
