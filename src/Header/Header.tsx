import React, { FC, ReactNode, useRef, useState, useCallback, cloneElement, useMemo, ReactElement } from 'react';
import { BurgerHorIcon as Burger, CloseCancelXIcon } from 'vienna.icons';
import {
    Box,
    BoxMobile,
    Action,
    SideContent,
    Fade,
    SearchContainer,
    HeaderBox,
    ActionGroups,
    CloseButton,
    Content,
    ContentMobile,
} from './Header.styles';
import { Button } from '../Button';
import { Logotype } from '../Logotype';
import { Link } from '../Link';
import { Items, Item, ItemProps, ItemsProps } from './Items';
import { MenuPoint } from './MenuPoint';
import { TabsValueType } from '../Tabs/Tabs';

export interface HeaderProps {
    /** Размеры */
    size?: 'l' | 'm' | 's';

    /** Ссылка для лого */
    logoHref?: string;

    /** Свойство для отображения тени */
    shadow?: boolean;

    /** Свойство для фиксации Header */
    fixed?: boolean;

    /** Принимает Header.Items для отображения элементов */
    items?: ReactElement;

    /** Принмает поле для поиска */
    search?: ReactNode;

    /** Заменяет лого */
    logo?: ReactNode;

    disabledContent?: boolean;

    /** Состояние открытие мобильного меню/контента */
    isOpen?: boolean;

    /** Брейкпоинт для мобильной версии */
    mobileBelow?: number;

    mobileMenu?: (obj: { items: ReactNode; onClose?: () => void }) => ReactNode;

    /** Компонент для дополнительных элементов */
    action?: ReactNode | ((data: { isMobile: boolean }) => ReactNode);
    /** Функция открытия мобильного меню/контента */
    onOpen?: () => void;
    /** Функция закрытия мобильного меню/контента */
    onClose?: () => void;
}

const iconButtonSize = {
    s: 'xs',
    m: 's',
    l: 'm',
} as const;

const logotypeSize = {
    s: 'm',
    m: 'l',
    l: 'xl',
} as const;

export const Header: FC<HeaderProps> & { Items: typeof Items; Item: typeof Item } = ({
    size = 'm',
    shadow = true,
    fixed,
    logoHref,
    items,
    search,
    logo,
    action,
    disabledContent,
    mobileMenu,
    mobileBelow = 1,
    isOpen,
    onOpen,
    onClose,
}) => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [currentItemValue, setCurrentItemValue] = useState<TabsValueType | null>(null);

    const currentItem = useMemo(() => {
        if (!items || disabledContent || !currentItemValue) {
            return null;
        }

        return React.Children.toArray((items as { props: { children: ReactElement } }).props.children).find(
            (item) => (item as ReactElement<ItemProps>).props.value === currentItemValue
        );
    }, [currentItemValue, items, disabledContent]);

    const currentItemContent = useMemo(() => {
        return currentItem ? (currentItem as ReactElement<ItemProps>).props.children : null;
    }, [currentItem]);

    const contentRef = useRef<HTMLDivElement>(null); // Потребуется для проверки что кликаем за пределами

    const closeIfClickOutside = useCallback(
        (e: MouseEvent) => {
            if (typeof onClose === 'function' && !contentRef.current?.contains(e.target as Node)) {
                onClose();
                setCurrentItemValue(null); // Так как value все еще приходит из родителя но оно нужно для подсветки таба см. handleCloseContent
                if (document) {
                    document.removeEventListener('click', closeIfClickOutside);
                }
            }
        },
        [onClose]
    );

    const onChange = useCallback(
        (e: React.MouseEvent, newValue: TabsValueType, hasContent: boolean) => {
            const itemsOnChange = (items as ReactElement<ItemsProps> | undefined)?.props.onChange;
            if (itemsOnChange) {
                itemsOnChange(e, newValue);
            }
            // Как показывается контент внизу компонента если он есть у элемента списка:
            // Прокидываем наружу события onClose или onOpen, которые установят флаг isOpen в родителе
            // который покажет контенет currentItemContent, который пришел из children компонента Item,
            // который отдал нам children из события onChange, которое он получил после оборачивания
            // в компонент Tab. currentItemContent - мы извлекли из children через currentItemValue,
            // который был установлен через onChange родителя и вернулся в пропсе value, обновив мемоизированное значение currentItemContent,
            // используя мемоизированое значение currentItem, высчитанное на основе currentItemValue, установленое здесь и обновившее через onChange value родителя.
            const handler = !hasContent || currentItemValue === newValue ? onClose : onOpen;
            if (handler) {
                handler();
            }

            // проверка на SSR
            if (document) {
                if (handler === onOpen) {
                    document.addEventListener('click', closeIfClickOutside);
                } else {
                    document.removeEventListener('click', closeIfClickOutside);
                }
            }

            setCurrentItemValue(currentItemValue !== newValue ? newValue : null);
            e.stopPropagation();
            e.nativeEvent?.stopImmediatePropagation();
        },
        [items, currentItemValue, onOpen, onClose, closeIfClickOutside]
    );

    const handleCloseContent = useCallback(() => {
        setCurrentItemValue(null);
    }, []);

    const handleChangeList = useCallback(() => {
        if (isOpen) {
            onClose?.();
        } else {
            onOpen?.();
        }

        handleCloseContent();
    }, [isOpen, onClose, onOpen, handleCloseContent]);

    const handleReturnBack = useCallback(
        (_: undefined, e: React.MouseEvent) => {
            e.stopPropagation();
            e?.nativeEvent.stopImmediatePropagation();
            onChange(e, null, true);
        },
        [onChange]
    );

    const headerItems = items && cloneElement(items, { size, isMobile: false, onChange });

    const currentItemLabel = useMemo(() => {
        return currentItem ? (currentItem as ReactElement<ItemProps>).props.label : '';
    }, [currentItem]);

    const linkLogo = useMemo(
        () => (
            <Link href={logoHref}>
                <Logotype size={logotypeSize[size]} />
            </Link>
        ),
        [logoHref, size]
    );

    const mobileHeader = useMemo(
        () => (
            <>
                <SideContent $isMobile $size={size}>
                    {logo ?? linkLogo}
                </SideContent>
                <Action $isMobile $size={size}>
                    <ActionGroups justifyContent='flex-end'>
                        {typeof action === 'function' ? action({ isMobile: true }) : action}
                        {items && (
                            <Button square design='ghost' size={iconButtonSize[size]} onClick={handleChangeList}>
                                {isOpen ? <CloseCancelXIcon size={size} /> : <Burger size={size} />}
                            </Button>
                        )}
                    </ActionGroups>
                </Action>
            </>
        ),
        [size, logo, linkLogo, action, items, handleChangeList, isOpen]
    );

    const desktopHeader = useMemo(
        () => (
            <>
                <SideContent $size={size}>
                    {logo ?? linkLogo}
                    {search && <SearchContainer $size={size}>{search}</SearchContainer>}
                </SideContent>
                {headerItems}
                {action && (
                    <Action $size={size}>
                        <ActionGroups justifyContent='flex-end'>
                            {typeof action === 'function' ? action({ isMobile: false }) : action}
                        </ActionGroups>
                    </Action>
                )}
            </>
        ),
        [size, logo, linkLogo, search, headerItems, action]
    );

    const desktopBox = useMemo(
        () => (
            <Box $size={size} $fixed={fixed} $mobileBelow={mobileBelow}>
                {isOpen && !!currentItemContent && <Fade />}
                <HeaderBox ref={boxRef} $shadow={shadow} $size={size}>
                    {desktopHeader}
                </HeaderBox>
                {isOpen && !!currentItemContent && (
                    <Content ref={contentRef} $size={size}>
                        <CloseButton size='xs' square design='ghost' onClick={handleChangeList}>
                            <CloseCancelXIcon size='s' />
                        </CloseButton>
                        {currentItemContent}
                    </Content>
                )}
            </Box>
        ),
        [size, fixed, currentItemContent, mobileBelow, boxRef, shadow, desktopHeader, isOpen, handleChangeList]
    );

    const headerItemsMobile = items && cloneElement(items, { size, isMobile: true, onChange });

    const mobileBox = useMemo(
        () => (
            <BoxMobile $size={size} $fixed={fixed} $mobileBelow={mobileBelow}>
                <HeaderBox $size={size} $isMobile ref={boxRef} $shadow={shadow}>
                    {mobileHeader}
                </HeaderBox>

                {isOpen && (
                    <ContentMobile ref={contentRef} $isMobile $size={size}>
                        {!currentItemContent &&
                            (mobileMenu?.({ items: headerItemsMobile, onClose }) || headerItemsMobile)}

                        {!!currentItemContent && (
                            <>
                                <MenuPoint leftArrow label={currentItemLabel} onClick={handleReturnBack} />
                                {currentItemContent}
                            </>
                        )}
                    </ContentMobile>
                )}
            </BoxMobile>
        ),
        [
            size,
            fixed,
            currentItemContent,
            currentItemLabel,
            mobileBelow,
            boxRef,
            shadow,
            isOpen,
            mobileMenu,
            headerItemsMobile,
            handleReturnBack,
            mobileHeader,
            onClose,
        ]
    );

    if (mobileBelow <= 1) {
        return desktopBox;
    }

    return (
        <>
            {mobileBox}
            {desktopBox}
        </>
    );
};

Header.Items = Items;
Header.Item = Item;
Header.displayName = 'Header';
