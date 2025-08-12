
# Sidebar

Боковое меню навигации. Боковое меню используется для навигации и отображает всю многоуровневую структуру продукта.  
Располагается в левой части страницы, фиксируется и заполняет всю высоту экрана.  
Позволяет пользователям быстро перемещаться по сервисам.

## Импорт

```
import { Sidebar } from '@fcc/ui';
```

## React Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| items | `SidebarItem<T, U>[]` | — | Массив элементов меню |
| design | `'light' \| 'dark'` | `light` | Дизайн компонента |
| collapsed | `boolean` | — | Флаг свернутого состояния |
| footerItems | `SidebarFooterItem[]` | — | Массив элементов футера |
| footer | `ReactNode` | — | Кастомный футер |
| onLogoClick | `(e: React.MouseEvent<HTMLDivElement>) => void` | — | Коллбэк для клика на логотип |
| onCollapse | `() => void` | — | Коллбэк для клика на иконку сворачивания |
| activeItemId | `T \| U` | — | ID активного элемента |
| width | `string` | `252px` | Ширина компонента |
| header | `ReactNode` | — | Кастомный хедер |
| draggable | `boolean` | — | Включает Drag and Drop |
| loading | `boolean` | — | Включает состояние загрузки |
| loadingConfig | `SkeletonLoadingConfig` | — | Конфиг для состояния загрузки |
| itemOrder | `T[]` | — | Внешний стейт с порядком элементов |
| onDragSort | `OnDragSort<T>` | — | Коллбэк для изменения порядка через DnD |
| controlsRef | `React.MutableRefObject<SidebarControls<T> \| null \| undefined>` | — | Реф для управления компонентом |
| testId | `SidebarTestId` | — | `test-id` для подкомпонентов |

## SidebarItem Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | `T` | — | Уникальный идентификатор элемента |
| title | `string \| undefined` | — | Строковой заголовок |
| prefix | `ReactNode` | — | Иконка или элемент перед заголовком |
| postfix | `ReactNode` | — | Иконка или элемент после заголовка |
| active | `boolean` | — | Активное состояние элемента |
| disabled | `boolean` | — | Заблокированный элемент |
| href | `string` | — | При передаче рендерится как `a`-тэг |
| target | `HTMLAttributeAnchorTarget` | — | Цель для `a`-тэга |
| sub | `Omit<SidebarItem<U>, 'sub'>[]` | — | Дочерние элементы, превращают айтем в подменю |
| defaultCollapsed | `boolean` | — | Свернутое состояние подменю по умолчанию |
| truncate | `boolean` | `true` | Сокращает текст элемента |
| onCollapse | `(newValue: boolean) => void` | — | Коллбэк открытия/закрытия сабменю |
| render | `(props: React.PropsWithChildren) => ReactNode` | — | Позволяет рендерить кастомный элемент |
| testId | `SidebarItemTestId` | — | `data-testid` для элемента |


 ``` preview style={playgroundStyle} of={Sidebar} library='@fcc/ui/v13' componentName="v13sidebar">
    <Sidebar items={[
        { id: '0', title: 'Выписки' },
        { id: '1', title: 'Справки' },
        { id: '2', title: 'Контрагенты' },
        { id: '3', title: 'Письма' },
        { id: '4', title: 'Документы в работе' },
    ]} />
 ```

## Типизация

Типы компонента могут быть импортированы по отдельности напрямую из пакета. В качестве альтернативы можно использовать типы из одноименного пространства имен `Sidebar`. 
Типы в `namespace Sidebar` имеют удобочитаемый вид в тултипах IDE и могут использоваться для описания хендлеров, элементов меню и прочих пропов, например:

```typescript
    /// ...
const onDragSort: Sidebar.OnDragSort<string> = ({ 
    newOrder, 
    dragged: { id, newIndex }
    }) => {
        setItemOrder(newOrder)
        cb(id, newIndex)
    }

return <Sidebar onDragSort={onDragSort} />
```

```typescript 
    /// ...
const controlsRef: MutableRefObject<Sidebar.Controls<string> | null> = useRef(null)

return <Sidebar controlsRef={controlsRef} />
```

## Темная тема

Внешний вид контролируется параметром `design`. Доступно 2 варианта дизайна: `light` и `dark`. По умолчанию используется `light`.

 ``` style={playgroundStyle}>
    <Sidebar design='dark' items={[
        { id: '0', title: 'Выписки' },
        { id: '1', title: 'Справки' },
        { id: '2', title: 'Контрагенты' },
        { id: '3', title: 'Письма' },
        { id: '4', title: 'Документы в работе' },
    ]} />
 ```

## Ширина

За ширину компонента отвечает свойство `width` (тип `string`), по умолчанию значение 252px

 ```>
    <Sidebar width="200px" items={[
        { id: '0', title: 'Выписки' },
        { id: '1', title: 'Справки' },
        { id: '2', title: 'Контрагенты' },
        { id: '3', title: 'Письма' },
        { id: '4', title: 'Документы в работе' },
    ]}/>
 ```

## Prefix

Объект `SidebarItem` имеет свойство `prefix`, куда можно передать иконку или другой элемент.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
        { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
    ]}/>
 ```

## Postfix

`SidebarItem` также имеет свойство `postfix`, предназначенное для индикаторов уведомления, например `Alarm`, `Counter` и `Badge`.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', postfix: <Alarm design='accent' size="m"/> },
        { id: '1', title: 'Справки' },
        { id: '2', title: 'Контрагенты', postfix: <Counter design='accent'>1</Counter> },
        { id: '3', title: 'Письма' },
        { id: '4', title: 'Документы в работе', postfix: <Badge size='s' color='oslo100'>Новое</Badge> },
    ]}/>
 ```

## Свойство `disabled`

`SidebarItem` поддерживает свойство `disabled` для отображения заблокированного элемента меню.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
        { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы в работе', prefix: <DocumentIcon />, disabled: true},
    ]}/>
 ```

## Свойство `truncate`

`SidebarItem` поддерживает свойство `truncate` для отображения текста элемента в несколько строк.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
        { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы и заявки в работе', prefix: <DocumentIcon />, truncate: false},
    ]}/>
 ```

## Footer

 ``` style={playgroundStyle}>
    <Sidebar
        items={[
            { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
            { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
            { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
            { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
            { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
        ]}
        footerItems={[
            {
                id: 1,
                title: 'Мои компании',
                icon: <CompanyIcon />,
            },
            {
                id: 2,
                title: 'Настройки',
                icon: <SettingsIcon />,
                postfix: <Alarm design='accent' size="m"/>,
            },   
        ]}
    />
 ```

## Свойство `active`

Свойство `active` в `SidebarItem` используется для отображения выбранного состояния элемента меню.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
        { id: '1', title: 'Справки', prefix: <Chat2Icon />, active: true},
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
    ]}/>
 ```

В качестве альтернативы можно передать `id` активного элемента в проп `activeItemId` в компонент `Sidebar`.

 ``` style={playgroundStyle}>
    <Sidebar activeItemId='1' items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
        { id: '1', title: 'Справки', prefix: <Chat2Icon />},
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
    ]}/>
 ```

## Свойство `collapsed`

Компонент также поддерживает свернутое состояние. Оно контролируется флагом `collapsed`.

 ``` style={playgroundStyle}>
    <Sidebar
        collapsed
        items={[
            { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
            { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
            { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
            { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
            { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
        ]}
        footerItems={[
            {
                id: 1,
                title: 'Мои компании',
                icon: <CompanyIcon />,
            },
            {
                id: 2,
                title: 'Настройки',
                icon: <SettingsIcon />,
                postfix: <Alarm design='accent' size="m"/>,
            },   
        ]}
    />
 ```

При этом, компонент является управляемым, чтобы переключаться между свернутым и полным состоянием, нужно передать хэндлер в свойство `onCollapse`.

<Alert title='Важно!' design='warning' compact dynamic style={{ marginBottom: '24px' }}>
    Обратите внимание, что в свернутом состоянии для каждого элемента меню отображается только его иконка. При этом,
    если иконка для элемента меню отсутствует, то в свернутом состоянии этот элемент не отображается и взаимодействовать
    с ним не получится.
</Alert>

 ``` style={{...playgroundStyle, height: "600px"}}>
    {() => {
        const [collapsed, setCollapsed] = React.useState(false);
        return (
            <Sidebar
                collapsed={collapsed}
                onCollapse={() => setCollapsed(prev => !prev)}
                items={[
                    { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
                    { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
                    { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
                    { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                    { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
                ]}
                footerItems={[
                    {
                        id: 1,
                        title: 'Мои компании',
                        icon: <CompanyIcon />,
                    },
                    {
                        id: 2,
                        title: 'Настройки',
                        icon: <SettingsIcon />,
                        postfix: <Alarm design='accent' size="m"/>,
                    },   
                ]}
            />
        );
    }}
 ```


При необходимости можно настроить логику скрытия/раскрытия компонента при взаимодействии с элементами `Sidebar`, например, при клике на подменю в свернутом состоянии

 ``` style={{...playgroundStyle, height: "600px"}}>
    {() => {
        const [collapsed, setCollapsed] = React.useState(true);
        return (
            <Sidebar
                collapsed={collapsed}
                onCollapse={() => setCollapsed(prev => !prev)}
                items={[
                    { id: '0', title: 'Выписки', prefix: <HomeIcon />, onClick: () => setCollapsed((prev) => prev ? !prev : prev), sub: [
                        { id: 0, title: 'Рублевые платежи' },
                        { id: 1, title: 'Регулярные платежи' },
                        ]
                    },
                    { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
                    { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
                    { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                    { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
                ]}
                footerItems={[
                    {
                        id: 1,
                        title: 'Мои компании',
                        icon: <CompanyIcon />,
                    },
                    {
                        id: 2,
                        title: 'Настройки',
                        icon: <SettingsIcon />,
                        postfix: <Alarm design='accent' size="m"/>,
                    },   
                ]}
            />
        );
    }}
 ```

## Свойство `loading`

Компонент поддерживает свойство `loading`, при передаче которого Sidebar отображается в состоянии загрузки с помощью лэйаута на основе [`Skeleton`](https://ds.raiffeisen.ru/components/skeleton). Отображение можно конфигурировать через проп `loadingConfig` следующим образом:
- `itemCount` - количество элементов меню. По умолчанию 11
- `itemIcon` - включить скелетоны для иконок элементов меню
- `footer` - включить футер (отображает два элемента)
- `collapseIcon` - включить скелетон иконки collapse

Скелетную загрузку рекомендуется использовать с хуком `useDeferredLoading` ([подробнее](https://ds.raiffeisen.ru/components/skeleton#usedeferredloading))

 ``` style={playgroundStyle}>
    {() => {
        return (<StyleWrapper>
                <Sidebar loading={true} loadingConfig={{itemCount: 5, itemIcon: true}} items={[
                    { id: '0', title: 'Выписки', prefix: <HomeIcon /> },
                    { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
                    { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
                    { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                    { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
                ]}/>
            </StyleWrapper>)
    }}
 ```

## Работа со ссылками

При передаче `href` элемент рендерится в виде `a`-тэга, также можно передать `target`.

 ``` style={playgroundStyle}>
    <StyleWrapper>
        <Sidebar items={[
                { id: '0', title: 'Выписки', prefix: <HomeIcon />, href: "#" },
                { id: '1', title: 'Справки', prefix: <Chat2Icon />, href: "#"},
                { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon />, href: "#", target: "_blank"},
                { id: '3', title: 'Письма', prefix: <MailOutIcon />, href: "#" },
                { id: '4', title: 'Документы в работе', prefix: <DocumentIcon />, href: "#" },
            ]}/>
    </StyleWrapper>
 ```

## Кликабельный логотип

При передаче коллбэка в `onLogoClick` логотип становится интерактивным, к нему применяются hover-стили.

 ``` style={playgroundStyle}>
    <StyleWrapper>
        <Sidebar onLogoClick={() => console.log('logo click')} items={[
                { id: '0', title: 'Выписки', prefix: <HomeIcon />, href: "#" },
                { id: '1', title: 'Справки', prefix: <Chat2Icon />, href: "#"},
                { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon />, href: "#" },
                { id: '3', title: 'Письма', prefix: <MailOutIcon />, href: "#" },
                { id: '4', title: 'Документы в работе', prefix: <DocumentIcon />, href: "#" },
            ]}/>
    </StyleWrapper>
 ```

## Использование `render`

Элементы поддерживают свойство `render`, которое позволяет добавлять обертки к элементу (например, `Tooltip`), либо полностью его заменить в случае необходимости. `render` принимает `children`, в который будет передана `ReactNode` с исходным элементом меню.

 ``` style={playgroundStyle}>
    <StyleWrapper>
        <Sidebar items={[
                { id: '0', title: 'Выписки', prefix: <HomeIcon />},
                { id: '1', title: 'Справки', prefix: <Chat2Icon />},
                { id: '2', title: 'Я с тултипом', prefix: <ChartBar1Icon />, render: ({children}) => <Tooltip anchor='right' content='Я тултип'>{children}</Tooltip> },
                { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
            ]}/>
    </StyleWrapper>
 ```

 ``` style={playgroundStyle}>
    <StyleWrapper>
        <Sidebar items={[
                { id: '0', render: () => <Button design='accent' size='s' style={{margin: "12px 22px",}} onClick={() => console.log('render button click')} >Я кнопка</Button> },
                { id: '1', title: 'Справки', prefix: <Chat2Icon />},
                { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon />},
                { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
            ]}/>
    </StyleWrapper>
 ```

## Подменю

При наличии поля `sub` в объекте `SidebarItem` элемент превратится в подменю. Дочерние элементы также описываются типом `SidebarItem`, но не имеют свойства `sub`.

 ``` style={playgroundStyle}>
    <Sidebar items={[
        { id: '0', title: 'Выписки', prefix: <HomeIcon />, sub: [
            { id: 0, title: 'Рублевые платежи' },
            { id: 1, title: 'Регулярные платежи' },
            ]
        },
        { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
        { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
        { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
        { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
    ]}/>
 ```

Элемент-подменю можно развернуть по умолчанию через свойство `defaultCollapsed`, элемент также принимает коллбэк `onCollapse`. Для программного скрытия и раскрытия используйте `controlsRef.collapseSubmenu`

 ``` style={playgroundStyle}>
    {() => {
        const controlsRef = React.useRef(null)
        const close = () => controlsRef.current.collapseSubmenu('0', true)
        return (<Sidebar
            controlsRef={controlsRef}
            items={[
                {
                    id: '0',
                    title: 'Выписки',
                    prefix: <HomeIcon />,
                    defaultCollapsed: false,
                    sub: [
                        { id: 0, title: 'Рублевые платежи' },
                        { id: 1, title: 'Регулярные платежи' },
                    ],
                },
                { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
                { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
                { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
                { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
            ]}
            footerItems={[
                {
                    id: 12,
                    title: 'Закрыть "Выписки"',
                    icon: <Cross16Icon />,
                    onClick: close,
                },
            ]}
        />)
    }}
 ```

## Drag and Drop

Компонент поддерживает механику Drag and Drop, для включения используйте проп `draggable`. Новый порядок элементов, а также `id` и новый индекс перемещенного элемента передаются в коллбэк `onDragSort`. Компонент опционально принимает внешний стейт с порядком id - `itemOrder`.

 ``` style={playgroundStyle}>
    {() => {
        const items = React.useMemo(() => [
            { id: '0', title: 'Выписки', prefix: <HomeIcon />, sub: [
                { id: 0, title: 'Рублевые платежи' },
                { id: 1, title: 'Регулярные платежи' },
                ]
            },
            { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
            { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
            { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
            { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
        ])
        return (<Sidebar
            draggable
            items={items}
            onDragSort={(data) => console.log(data)}
        />)
    }}
 ```

#### Варианты использования
`Sidebar` рендерит элементы по порядку `itemOrder` (если он передан), либо по внутреннему стейту, который собирается из `id` `items` и меняется при перемещении элементов. Если значение `items` изменится, компонент обновит внутренний стейт за счет `itemOrder` или массива `id`, получаемого из нового значения `items`.
Таким образом, можно выбрать один из следующих вариантов исходя из ваших потребностей:
* Если `items` можно мемоизировать и меняться они не будут, то достаточно просто сохранить новый порядок, полученный из коллбэка (напр., получаем элементы с бэка, после DND отправляем запрос на обновление порядка в БД, а при следующем открытии страницы список придет уже с новым порядком)
* Если `items` будут меняться, можно хранить новый порядок после DND снаружи и передавать `items` в сортированном виде (напр. в LocalStorage)
* Если `items` будут меняться, но сортировка снаружи нежелательна, сохраните новый порядок в стейт и передайте в проп `itemOrder`

 ``` style={playgroundStyle}>
    {() => {
        const items = React.useMemo(() => [
            { id: '0', title: 'Выписки', prefix: <HomeIcon />, sub: [
                { id: 0, title: 'Рублевые платежи' },
                { id: 1, title: 'Регулярные платежи' },
                ]
            },
            { id: '1', title: 'Справки', prefix: <Chat2Icon /> },
            { id: '2', title: 'Контрагенты', prefix: <ChartBar1Icon /> },
            { id: '3', title: 'Письма', prefix: <MailOutIcon /> },
            { id: '4', title: 'Документы в работе', prefix: <DocumentIcon /> },
        ])
        const [itemOrder, setItemOrder] = React.useState(items.map(({id}) => id))
        return (<Sidebar
            draggable
            items={items}
            itemOrder={itemOrder}
            onDragSort={({newOrder}) => setItemOrder(newOrder)}
        />)
    }}
 ```

## Установка data-testid

Атрибут `data-testid` можно передать для контейнера, заголовка, логотипа, кнопки сворачивания,
 контейнера элемента, заголовка элемента, контента элемента, кнопки сворачивания элемента. Передается пропс `testId?: { container, header, logo, collapser, itemContainer, footer }`.
Для SidebarItem: `testId:{container, chevron, prefix, title, dragIcon, postfix, collapsedPlaceholder, submenuContainer, submenuItemContainer, footerIcon}`

Также добавлены дефолтные значения для `testId`:

```
export const defaultSidebarTestId: SidebarTestId = {
    container: 'sidebar_container',
    header: 'sidebar_header',
    logo: 'sidebar_logo',
    collapser: 'sidebar_collapser',
    itemContainer: 'sidebar_item-container',
    footer: 'sidebar_footer',
};
```
Также добавлены дефолтные значения для Item `testId`:

```
export const defaultSidebarItemTestId: SidebarItemTestId = {
    container: 'sidebar-item_container',
    chevron: 'sidebar-item_chevron',
    prefix: 'sidebar-item_prefix',
    title: 'sidebar-item_title',
    postfix: 'sidebar-item_postfix',
    dragIcon: 'sidebar-item_drag-icon',
    collapsedPlaceholder: 'sidebar-item_collapsed-placeholder',
    submenuContainer: 'sidebar-item_submenu-container',
    submenuItemContainer: 'sidebar-item_submenu-item-container',
    footerIcon: 'sidebar-item_footer-icon',
};
```

 ```>
    <Sidebar testId={{container: 'sidebar_container', header: 'sidebar_header', logo: 'sidebar_logo', collapser: 'sidebar_collapser', itemContainer: 'sidebar_item-container', footer: 'sidebar_footer'}} items={[
        { id: '0', title: 'Выписки' },
        { id: '1', title: 'Справки' },
        { id: '2', title: 'Контрагенты' },
        { id: '3', title: 'Письма' },
        { id: '4', title: 'Документы в работе' },
    ]} />
 ```