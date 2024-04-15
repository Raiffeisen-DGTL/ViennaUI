# Sidebar

Боковое меню навигации.

## Импорт

```
import { Sidebar } from 'vienna-ui';
```

## Свойства / Props

| Prop       | Type                   | Default | Description |
| ---------- | ---------------------- | ------- | ----------- |
| size       | 's' \| 'm' \| 'l'      |     |
| design     | 'light' \| 'dark'      |  |
| collapsed  | boolean \| undefined   |    |
| header     | ReactNode \| undefined |    |
| footer     | ReactNode \| undefined |    |
| onCollapse | any                    |    |
| active     | any                    |    |
| width      | string \| undefined    |  |

## Свойства элемнта / Item Props

| Prop | Type                   | Default | Description |
| ---- | ---------------------- | ------- | ----------- |
| icon | ReactNode \| undefined | false   |

## Использование

Компонент состоит из родительского контейнера `Sidebar` и дочерних элементов `Sidebar.Item`.

```
    <Sidebar>
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```

## Внешний вид

```
    <Sidebar>
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```

#### Темная тема

Внешний вид контролируется параметром `design`. Доступно 2 варианта дизайна: `light` и `dark`. По умолчанию используется `light`.

```
    <Sidebar design='dark'>
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>MailOut</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```

#### With icons

`Sidebar.Item` поддерживает свойство `icon`, куда можно передать иконку элемента меню.

```
    <Sidebar>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
    </Sidebar>
```

#### With footer

```
    <Sidebar
        footer={
            <React.Fragment>
                <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
            </React.Fragment>
        }>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
    </Sidebar>
```

#### With notification

В дополнение к `icon` `Sidebar.Item` также поддерживает свойство `notification`, куда можно передать индикатор уведомления.

```
    <Sidebar>
        <Sidebar.Item icon={<Home />} notification={<Alarm design='accent' />}>
            Home
        </Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Active state

`Sidebar.Item` так же поддерживает свойство `active`, для отображения выбранного состояния элемента меню.

```
    <Sidebar>
        <Sidebar.Item icon={<Home />} active>
            Home
        </Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
    </Sidebar>
```

В дополнение к этому, свойство `active` поддерживает и родительский компонент `Sidebar`, в него можно передать `id` выбранного элемента. При этом нужно передать свойство `id` прямому потоку Sidebar. В частном случае это будет `Sidebar.Item`, но также может быть и любая обёртка над ним.

```
    <Sidebar active='home'>
        <div id='home'>
            <Sidebar.Item icon={<Home />}>
                Home
            </Sidebar.Item>
        </div>
        <Sidebar.Item id='Mail' icon={<MailOut />}>
            Mail
        </Sidebar.Item>
        <Sidebar.Item id='docs' icon={<Document />}>
            Documents
        </Sidebar.Item>
    </Sidebar>
```

## Collapsable

Компонент также поддерживает свернутое состояние. Оно контролируется флагом `collapsed`.

```
    <Sidebar
        footer={
            <React.Fragment>
                <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
            </React.Fragment>
        }
        collapsed>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```

При этом, компонент является управляемым, чтобы переключаться между свернутым и полным состоянием, нужно передать хэндлер в свойство `onCollapse`.

<Alert title='Важно!' design='warning' compact dynamic style={{ marginBottom: '24px' }}>
    Обратите внимание, что в свернутом состоянии для каждого элемента меню отображается только его иконка. При этом,
    если иконка для элемента меню отсутствует, то в свернутом состоянии этот элемент не отображается и взаимодействовать
    с ним не получится.
</Alert>

```
    {() => {
        const [collapsed, collapse] = React.useState(false);
        return (
            <Sidebar
                active='home'
                footer={
                    <React.Fragment>
                        <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
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

## Custom header

В дополнение к `footer`, компонент поддерживает свойство `header`, который позволяет управлять регином заголовка меню. Это может полезно, например, в случае необходимости использования нестандартного логотипа.

```
    <Sidebar header={<Logo size='xl' />}>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Without header

Передав в `header` null можно убрать контейнер заголовка в сайдбаре.

```
    <Sidebar header={null}>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
    </Sidebar>
```

## With links

Компонент позволяет оборачивать компонент `Sidebar.Item` в компоненты-ссылки, например для использования react-router.

```
    {() => {
        const [collapsed, collapse] = React.useState(false);
        return (
            <Sidebar
                active='home'
                footer={
                    <React.Fragment>
                        <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
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

## Подменю

С помощью компонента `Sidebar.Submenu` можно создать подменю.

```
    <Sidebar active='submenu'>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1 />}>
            <Sidebar.Item icon={<Home />} active>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar.Submenu>
    </Sidebar>
```

Можно передать свойство `defaultExpanded`, чтобы подменю было раскрыто по дефолту

```
    <Sidebar active='submenu'>
        <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1 />} defaultExpanded>
            <Sidebar.Item icon={<Home />} active>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar.Submenu>
    </Sidebar>
```

## Controllable mode

С помощью аттрибутов `expanded` и `onClick` можно управлять состоянием раскрытия вручную. В этом случае внутренний стейт компонента будет игнорироваться и компонент будет работать в контролируемом режиме.

```
    {() => {
        const [expanded, toggleExpanded] = React.useState(true);
        const onClick = React.useCallback(
            (e) => {
                toggleExpanded((prev) => !prev);
            },
            [toggleExpanded]
        );
        return (
            <Sidebar>
                <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
                <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
                <Sidebar.Submenu
                    title='Submenu'
                    icon={<ChartBar1 />}
                    expanded={expanded}
                    active={expanded}
                    onClick={onClick}>
                    <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
                    <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
                    <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
                </Sidebar.Submenu>
            </Sidebar>
        );
    }}
```

## Interactive

```
    {() => {
        const [collapsed, collapse] = React.useState(false);
        const [active, setActive] = React.useState(null);
        const [design, setDesign] = React.useState('light');
        const onClick = (e) => setActive(e.currentTarget.id);
        const toggleDesign = () => setDesign(design === 'light' ? 'dark' : 'light');
        return (
            <Sidebar
                active='home'
                footer={
                    <React.Fragment>
                        <Sidebar.Item icon={<Lamp />} onClick={toggleDesign}>
                            Design
                        </Sidebar.Item>
                        <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
                    </React.Fragment>
                }
                design={design}
                collapsed={collapsed}
                active={active}
                onCollapse={() => collapse(!collapsed)}>
                <Sidebar.Item id='home' onClick={onClick} notification={<Alarm design='accent' />}>
                    Home
                </Sidebar.Item>
                <Sidebar.Item id='MailOut' onClick={onClick} notification={<Counter design='accent'>2</Counter>}>
                    Mail
                </Sidebar.Item>
                <Sidebar.Item id='docs' onClick={onClick}>
                    <Tooltip
                        content="Element with very long title that doesn't fit"
                        anchor='right'
                        design='dark'
                        truncate>
                        Element with very long title that doesn't fit
                    </Tooltip>
                </Sidebar.Item>
                <Sidebar.Item id='analytics' onClick={onClick}>
                    Analytics
                </Sidebar.Item>
                <Sidebar.Item id='curr-ex' onClick={onClick}>
                    Currency exchange
                </Sidebar.Item>
            </Sidebar>
        );
    }}
```
