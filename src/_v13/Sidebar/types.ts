import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Box, PropsBox } from './Sidebar.styles';
import { Box as ItemBox, PropsBox as ItemPropsBox } from './Item/Item.styles';
import { BoxStyled } from '@/Utils/styled';

export type SidebarDesign = 'light' | 'dark';

export type OnDragSort<T> = (args: { newOrder: T[]; dragged: { id: T; newIndex: number } }) => void;

export interface SkeletonLoadingConfig {
    itemCount?: number;
    itemIcon?: boolean;
    footer?: boolean;
    collapseIcon?: boolean;
}

export interface SidebarItemTestId {
    container?: string;
    chevron?: string;
    prefix?: string;
    title?: string;
    postfix?: string;
    dragIcon?: string;
    collapsedPlaceholder?: string;

    submenuContainer?: string;
    submenuItemContainer?: string;

    footerIcon?: string;
}

/**
 * @param T - типа `id` айтема
 * @param U - типа `id` айтема сабменю. `default = undefined`
 */
export interface SidebarItem<T, U = undefined>
    extends Omit<BoxStyled<typeof ItemBox, ItemPropsBox>, 'id' | 'prefix' | 'draggable'> {
    /** Уникальный id айтема*/
    id: T;

    /** Строковой заголовок для айтема*/
    title?: string;

    prefix?: ReactNode;

    postfix?: ReactNode;

    /** Флаг активного айтема (имеет приоритет над `activeItemId`)*/
    active?: boolean;

    disabled?: boolean;

    /** При передаче `href` компонент айтема рендерится в виде `a`-тэга*/
    href?: string;

    /** `target` для `a`-тэга. Компонент айтема рендерится в виде `a`-тэга при передаче `href` */
    target?: HTMLAttributeAnchorTarget;

    /** Массив дочерних элементов, превращает айтем в submenu*/
    sub?: Omit<SidebarItem<U>, 'sub'>[];

    /** Флаг свернутого состояния по умолчанию для submenu*/
    defaultCollapsed?: boolean;

    /** Флаг сокращения текста в айтеме. По умолчанию `true` */
    truncate?: boolean;

    /** Коллбэк открытия/закрытия сабменю */
    onCollapse?: (newValue: boolean) => void;

    render?: (props: React.PropsWithChildren) => ReactNode;

    testId?: SidebarItemTestId;
}

export interface SidebarFooterItem
    extends Omit<SidebarItem<string | number, never>, 'prefix' | 'active' | 'sub' | 'disabled'> {
    /** Иконка. Оборачивается в IconContainer внутри компонента*/
    icon?: ReactNode;
}

export interface SidebarTestId {
    container?: string;
    header?: string;
    logo?: string;
    collapser?: string;
    itemContainer?: string;
    footer?: string;
}

export interface SidebarControls<T> {
    collapseSubmenu: (id: T, shouldCollapse: boolean) => void;
}

/**
 * @param T - типа `id` айтема
 * @param U - типа `id` айтема сабменю. `default = undefined`
 */
export interface SidebarProps<T extends string | number, U extends string | number = string>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'draggable' | 'children'> {
    /** Массив айтемов */
    items?: SidebarItem<T, U>[];

    /** Дизайн - `light` | `dark` */
    design?: SidebarDesign;

    /** Флаг для сворачивания сайдбара */
    collapsed?: boolean;

    /** Массив айтемов футера */
    footerItems?: SidebarFooterItem[];

    /** Кастомный футер. Имеет приоритет над `footerItems` */
    footer?: ReactNode;

    /** Коллбэк для клика на иконку в хедере. При наличии коллбэка иконка приобретает `hover`-стили */
    onLogoClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** Коллбэк для клика на иконку сворачивания сайдбара. Иконка отображается при наличии коллбэка */
    onCollapse?: () => void;

    /** id активного айтема сайдбара. Альтернативно можно проставлять соответствующий флаг в самих айтемах (имеет приоритет над `activeItemId`) */
    activeItemId?: T | U;

    width?: string;

    /** Кастомный хедер */
    header?: ReactNode;

    /** Флаг для drag and drop */
    draggable?: boolean;

    /** Флаг для состояния скелетной загрузки */
    loading?: boolean;

    /** Конфиг для состояния скелетной загрузки. Позволяет включать отображение иконки коллапса, иконок элементов меню, футера а также настраивать количество элементов */
    loadingConfig?: SkeletonLoadingConfig;

    /** Внешний стейт с порядком id для drag and drop*/
    itemOrder?: T[];

    /** Коллбэк для изменения порядка через drag and drop*/
    onDragSort?: OnDragSort<T>;

    /** Реф для методов императивного управления компонентом. Содержит:
     * - `collapseSubmenu` - метод для программного открытия/закрытия сабменю по id
     */
    controlsRef?: React.MutableRefObject<SidebarControls<T> | null | undefined>;

    /** `test-id` для подкомпонентов. Для `items` и `footerItems` передается непосредственно */
    testId?: SidebarTestId;
}

export type ItemMap<T extends string | number, U> = Record<T, SidebarItem<T, U>>;

export type ControlsMap<T extends string | number> = Record<T, (expanded: boolean) => void>;
