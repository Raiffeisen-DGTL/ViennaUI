import React, {
    useState,
    useCallback,
    useRef,
    ReactNode,
    PropsWithChildren,
    Children,
    cloneElement,
    ReactElement,
    useEffect,
} from 'react';
import { SelectOpenDownIcon, SelectHideIcon } from 'vienna.icons';
import type { UseDropConfig } from 'vienna.react-use';
import { Wrapper, LeftButton, RightButton } from './ComboButton.styles';
import { DropList, DropListProps } from '../DropList';
import { ItemProps } from '../DropList/Item';
import { ButtonProps } from '../Button';
import { getIcon } from '../Utils/useSelect';
import { ResponsiveProp } from '../Utils/responsiveness/responsiveProp';
import { SizeType } from '../Utils/types';
import { useLatest } from '@/Utils';

export interface Icons {
    up: ReactNode;
    down: ReactNode;
}

export enum Buttons {
    Left = 0,
    Right = 1,
}

export interface ComboButtonControls {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ComboButtonProps extends Pick<ButtonProps, 'design' | 'size' | 'pressed'> {
    /** Иконки открытого и закрытого состояния */
    icons?: Icons;
    /** Растягивание опций по ширине родителя */
    fitOptions?: boolean;
    /** Опции */
    options?: ReactNode[];
    /** Кастомный контент дроплиста */
    droplistContent?: ReactNode;
    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;
    fixed?: boolean;
    float?: 'start' | 'end';
    align?: UseDropConfig['align'];
    children?: React.ReactNode;
    /** При прокидывании массива из двух boolean можно по отдельности контролировать дизейбл левой и правой кнопки. При прокидывании просто boolean он будет влиять на обе кнопки одновременно */
    disabled?: boolean | [boolean, boolean];
    onClick?: (e: React.MouseEvent) => void;
    onBlur?: (e: React.FocusEvent) => void;
    onClose?: () => void;

    /** Опционально: дополнительные элементы, над которыми вешается onOutsideClick */
    additionalOutsideClickRefs?: DropListProps['additionalOutsideClickRefs'];

    /** Реф для методов императивного управления компонентом. Содержит:
     * - `setOpen` - открыть/закрыть выпадающий список
     */
    controlsRef?: React.MutableRefObject<ComboButtonControls | null | undefined>;
}

export interface CBProps extends ComboButtonProps {
    Option?: ItemProps;
}

const defaultIcons = { down: <SelectOpenDownIcon key='1' />, up: <SelectHideIcon key='1' /> };

export type ComboButtonPropsWithOption = ComboButtonProps & { Option?: ItemProps };
export function ComboButton({
    children,
    fitOptions = true,
    options = [],
    droplistContent,
    size = 'm',
    design = 'primary',
    icons = defaultIcons,
    maxListHeight,
    fixed,
    maxListWidth,
    align,
    float,
    disabled,
    additionalOutsideClickRefs,
    onClose,
    controlsRef,
    pressed,
}: PropsWithChildren<CBProps>): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const droplistRef = useRef<HTMLDivElement>(null);

    const childrenArr = Children.toArray(children);

    const handleClick = useCallback(
        function (this: ReactElement<CBProps>, event: React.MouseEvent) {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(event);
            }
            setOpen((prev) => {
                if (prev) onClose?.();

                return !prev;
            });
        },
        [onClose]
    );

    const handleBlur = useCallback(function (this: ReactElement<CBProps>, event: React.FocusEvent) {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(event);
        }
    }, []);

    const handleHide = () => {
        setOpen(false);
        onClose?.();
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        const $wrapper = ref.current;
        const $dropList = droplistRef.current;
        const $target = event.target as HTMLDivElement;

        if (!$wrapper || !$dropList) return;

        if (
            !$wrapper?.contains($target) &&
            !$dropList?.contains($target) &&
            !additionalOutsideClickRefs?.some((ref) => ref.current?.contains($target))
        ) {
            handleHide();
        }
    };

    const handleClickOutsideRef = useLatest(handleClickOutside);

    const constructOptions = useCallback(
        () =>
            options.map((option) =>
                cloneElement(option as ReactElement, {
                    onClick: handleClick.bind(option as ReactElement),
                })
            ),
        [options, handleClick]
    );

    const multipleButtons = Children.count(children) > 1;
    const dropBtn = (multipleButtons ? childrenArr[1] : childrenArr[0]) as ReactElement<CBProps>;
    const clickableBtn = (multipleButtons ? childrenArr[0] : null) as ReactElement<ComboButtonProps> | null;
    const dropButtonProps = {
        ...dropBtn.props,
        square: multipleButtons,
        design,
        $design: design,
        size,
        disabled: Array.isArray(disabled) ? disabled[Buttons.Right] : disabled,
        onClick: handleClick.bind(dropBtn),
        onBlur: handleBlur.bind(dropBtn),
    };
    const icon = getIcon(isOpen, icons, dropBtn.props.size as ResponsiveProp<SizeType>, false);

    useEffect(() => {
        if (!controlsRef) return;

        controlsRef.current = { setOpen };
    }, [controlsRef]);

    return (
        <Wrapper ref={ref}>
            {multipleButtons ? (
                <>
                    <LeftButton
                        {...clickableBtn?.props}
                        design={design}
                        size={size}
                        disabled={Array.isArray(disabled) ? disabled[Buttons.Left] : disabled}
                    />
                    <RightButton {...dropButtonProps}>{icon}</RightButton>
                </>
            ) : (
                cloneElement(dropBtn, { ...dropButtonProps, pressed: pressed }, [dropButtonProps.children, icon])
            )}
            {isOpen && (
                <DropList
                    additionalOutsideClickRefs={additionalOutsideClickRefs}
                    onOutsideClick={handleClickOutsideRef.current}
                    ref={droplistRef}
                    fitItems={fitOptions}
                    maxHeight={maxListHeight}
                    width={maxListWidth}
                    fixed={fixed}
                    float={float}
                    align={align}
                    followParentWhenScroll={fixed}
                    onHide={handleHide}>
                    {droplistContent ?? constructOptions()}
                </DropList>
            )}
        </Wrapper>
    );
}

ComboButton.displayName = 'ComboButton';
ComboButton.Option = DropList.Item;
export default ComboButton;
