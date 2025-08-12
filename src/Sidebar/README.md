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


# Sidebar

Боковое меню навигации. Боковое меню используется для навигации и отображает всю многоуровневую структуру продукта. Располагается в левой части страницы, фиксируется и заполняет всю высоту экрана. Позволяет пользователям быстро перемещаться по сервисам.




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

#### Размеры

У компонента есть 3 варианта размеров `s`, `m`, `l`

```
    <Sidebar size="s">
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
    <Sidebar size="m">
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
    <Sidebar size="l">
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

#### Ширина

За ширину компонента отвечает свойство `width` (тип string), по умолчанию значение 252px

```
    <Sidebar width="200px">
        <Sidebar.Item>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```

### С иконками

`Sidebar.Item` поддерживает свойство `icon`, куда можно передать иконку элемента меню.

```
    <Sidebar>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

### Анимация при клике

`Sidebar.Item` поддерживает свойство `ripple`, которое отвечает за анимацию при клике на него

```
    <Sidebar>
        <Sidebar.Item icon={<HomeIcon />} ripple>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />} ripple>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />} ripple>Documents</Sidebar.Item>
    </Sidebar>
```

#### Свойство footer

```
    <Sidebar
        footer={
            <React.Fragment>
                <Sidebar.Item icon={<Chat2Icon />}>Chat</Sidebar.Item>
                <Sidebar.Item icon={<Chat2Icon />}>Help</Sidebar.Item>
                <Sidebar.Item icon={<SettingsIcon />}>Settings</Sidebar.Item>
            </React.Fragment>
        }>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
    </Sidebar>
```

#### С уведомлением

В дополнение к `icon` `Sidebar.Item` также поддерживает свойство `notification`, куда можно передать индикатор уведомления.

```
    <Sidebar>
        <Sidebar.Item icon={<HomeIcon />} notification={<Alarm design='accent' />}>
            Home
        </Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />} notification={<Counter design="accent">2</Counter>}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Свойство active

`Sidebar.Item` так же поддерживает свойство `active`, для отображения выбранного состояния элемента меню.

```
    <Sidebar>
        <Sidebar.Item icon={<HomeIcon />} active>
            Home
        </Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

В дополнение к этому, свойство `active` поддерживает и родительский компонент `Sidebar`, в него можно передать `id` выбранного элемента. При этом нужно передать свойство `id` прямому потоку Sidebar. В частном случае это будет `Sidebar.Item`, но также может быть и любая обёртка над ним.

```
    <Sidebar active='home'>
        <div id='home'>
            <Sidebar.Item icon={<HomeIcon />}>
                Home
            </Sidebar.Item>
        </div>
        <Sidebar.Item id='Mail' icon={<MailOutIcon />}>
            Mail
        </Sidebar.Item>
        <Sidebar.Item id='docs' icon={<DocumentIcon />}>
            Documents
        </Sidebar.Item>
    </Sidebar>
```

## Свойство disabled

`Sidebar.Item` так же поддерживает свойство `disabled`, для отображения заблокированного элемента меню.

```
    <Sidebar>
        <Sidebar.Item icon={<HomeIcon />} disabled>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Флаг `collapsed`

Компонент также поддерживает свернутое состояние. Оно контролируется флагом `collapsed`.

```
    <Sidebar
        footer={
            <React.Fragment>
                <Sidebar.Item icon={<Chat2Icon />}>Chat</Sidebar.Item>
                <Sidebar.Item icon={<Chat2Icon />}>Help</Sidebar.Item>
                <Sidebar.Item icon={<SettingsIcon />}>Settings</Sidebar.Item>
            </React.Fragment>
        }
        collapsed>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
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
                        <Sidebar.Item icon={<Chat2Icon />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2Icon />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<SettingsIcon />}>Settings</Sidebar.Item>
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

## Cвойство `header`

В дополнение к `footer`, компонент поддерживает свойство `header`, которое позволяет управлять регином заголовка меню. Это может быть полезно, например, в случае необходимости использования нестандартного логотипа.

```
    <Sidebar active='home' header={<Logotype size='xl' />}>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Без свойства header

Передав в `header` null можно убрать контейнер заголовка в сайдбаре.

```
    <Sidebar header={null}>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
    </Sidebar>
```

## Компонент-ссылка

Компонент позволяет оборачивать компонент `Sidebar.Item` в компоненты-ссылки, например для использования react-router.

```
    {() => {
        const [collapsed, collapse] = React.useState(false);
        return (
            <Sidebar
                active='home'
                footer={
                    <React.Fragment>
                        <Sidebar.Item icon={<Chat2Icon />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2Icon />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<SettingsIcon />}>Settings</Sidebar.Item>
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
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
        <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1Icon />}>
            <Sidebar.Item icon={<HomeIcon />} active>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
        </Sidebar.Submenu>
    </Sidebar>
```

Можно передать свойство `defaultExpanded`, чтобы подменю было раскрыто по дефолту

```
    <Sidebar active='submenu'>
        <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
        <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
        <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
        <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1Icon />} defaultExpanded>
            <Sidebar.Item icon={<HomeIcon />} active>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
        </Sidebar.Submenu>
    </Sidebar>
```

 При необходимости вынести Sidebar.Submenu в отдельный компонент - состоянием активности необходимо управлять внутри этого компонента.

```
{() => {
    const Submenu = (props) => {
        const { active } = props;
        const [expanded, toggleExpanded] = React.useState(true);
        const onClick = () => toggleExpanded((prev) => !prev);
        const title = 'Submenu 2';
        return (
            <Sidebar.Submenu title={title} expanded={expanded} active={active === title} onClick={onClick}>
                <Sidebar.Item>Home 2</Sidebar.Item>
                <Sidebar.Item>Mail 2</Sidebar.Item>
            </Sidebar.Submenu>
        );
    };
    const [expanded, toggleExpanded] = React.useState(true);
    const onClick = () => toggleExpanded((prev) => !prev);
    return (
        <Sidebar>
            <Sidebar.Submenu
                title='Submenu'
                icon={<ChartBar1Icon />}
                expanded={expanded}
                onClick={onClick}>
                <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
                <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
            </Sidebar.Submenu>
            <Submenu active='Submenu 2' />
        </Sidebar>
    );
}}
```

## Управление состоянием

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
                <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
                <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
                <Sidebar.Submenu
                    title='Submenu'
                    icon={<ChartBar1Icon />}
                    expanded={expanded}
                    active={expanded}
                    onClick={onClick}>
                    <Sidebar.Item icon={<HomeIcon />}>Home</Sidebar.Item>
                    <Sidebar.Item icon={<MailOutIcon />}>Mail</Sidebar.Item>
                    <Sidebar.Item icon={<DocumentIcon />}>Documents</Sidebar.Item>
                </Sidebar.Submenu>
            </Sidebar>
        );
    }}
```

## Интерактивный режим

Интерактивный режим позволяет программно управлять кнопками и менять дизайн.

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
                        <Sidebar.Item icon={<LampIcon />} onClick={toggleDesign}>
                            Design
                        </Sidebar.Item>
                        <Sidebar.Item icon={<Chat2Icon />}>Chat</Sidebar.Item>
                        <Sidebar.Item icon={<Chat2Icon />}>Help</Sidebar.Item>
                        <Sidebar.Item icon={<SettingsIcon />}>Settings</Sidebar.Item>
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

## Установка data-testid

Атрибут `data-testid` можно передать для `menu`. Передается пропс `testId?: { menu, container }`.

Также добавлены дефолтные значения для `testId`:
```
export const deprecated_defaultSidebarTestId: SidebarProps['testId'] = {
    menu: 'sidebar_menu',
    conteiner: 'sidebar-item_container',
};
```

```
    <Sidebar testId={{menu: 'menu'}}>
        <Sidebar.Item testId={{container: 'container'}}>Home</Sidebar.Item>
        <Sidebar.Item>Mail</Sidebar.Item>
        <Sidebar.Item>Documents</Sidebar.Item>
    </Sidebar>
```