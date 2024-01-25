import React, {
    useState,
    useCallback,
    useRef,
    ReactNode,
    PropsWithChildren,
    Children,
    cloneElement,
    ReactElement,
    RefObject,
    useEffect,
} from 'react';
import { SelectOpenDown, SelectHide } from 'vienna.icons';
import { Wrapper, LeftButton, RightButton } from './ComboButton.styles';
import { DropList } from '../DropList';
import { ItemProps } from '../DropList/Item';
import { ButtonProps } from '../Button';

interface Icons {
    up: ReactNode;
    down: ReactNode;
}

export interface ComboButtonProps extends Pick<ButtonProps, 'design' | 'size' | 'disabled'> {
    /** Иконки открытого и закрытого состояния */
    icons?: Icons;
    /** Растягивание опций по ширине родителя */
    fitOptions?: boolean;
    /** Опции */
    options?: ReactNode[];
    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;
    fixed?: boolean;
    float?: 'start' | 'end';
}

export interface CBProps extends ComboButtonProps {
    Option?: ItemProps;
}

const getIcon = (icon, size) => {
    size = size === 'xs' ? 's' : 'm';
    return cloneElement(icon, { size });
};

const defaultIcons = { down: <SelectOpenDown key='1' />, up: <SelectHide key='1' /> };

export type ComboButtonPropsWithOption = ComboButtonProps & { Option?: ItemProps };

export function ComboButton({
    children,
    fitOptions,
    options = [],
    size,
    design,
    icons,
    maxListHeight,
    fixed,
    maxListWidth,
    float,
    disabled,
}: PropsWithChildren<CBProps>): JSX.Element {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [refDropList, setRefDropList] = useState<RefObject<HTMLElement> | null>(null);

    const childrenArr = Children.toArray(children);

    const handleClick = useCallback(
        function (this: ReactElement, event) {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(event);
            }
            setOpen(!isOpen);
        },
        [isOpen]
    );

    const handleBlur = useCallback(function (this: ReactElement, event) {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(event);
        }
    }, []);

    const handleHide = useCallback(() => {
        setOpen(false);
    }, []);

    const constructOptions = useCallback(
        () =>
            options.map((option: any) =>
                cloneElement(option, {
                    onClick: handleClick.bind(option),
                })
            ),
        [options, handleClick]
    );

    const multipleButtons = Children.count(children) > 1;
    const dropBtn = (multipleButtons ? childrenArr[1] : childrenArr[0]) as ReactElement;
    const clickableBtn = (multipleButtons ? childrenArr[0] : null) as ReactElement;

    const dropButtonProps = {
        ...dropBtn.props,
        square: multipleButtons,
        design,
        $design: design,
        size,
        disabled,
        onClick: handleClick.bind(dropBtn),
        onBlur: handleBlur.bind(dropBtn),
    };

    const icon = getIcon(icons && (isOpen ? icons.up : icons.down), dropBtn.props.size);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const $wrapper = ref.current;
            const $dropList = ref.current;
            const $target = event.target as HTMLDivElement;

            if (($wrapper || $dropList) && !$wrapper?.contains($target) && !$dropList?.contains($target)) {
                handleHide();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, refDropList]);

    return (
        <Wrapper ref={ref}>
            {multipleButtons ? (
                <>
                    <LeftButton {...clickableBtn.props} design={design} size={size} disabled={disabled} />
                    <RightButton {...dropButtonProps}>{icon}</RightButton>
                </>
            ) : (
                cloneElement(dropBtn, dropButtonProps, [dropButtonProps.children, icon])
            )}
            {isOpen && (
                <DropList
                    ref={setRefDropList as any}
                    fitItems={fitOptions}
                    maxHeight={maxListHeight}
                    width={maxListWidth}
                    fixed={fixed}
                    float={float}
                    followParentWhenScroll={fixed}
                    onHide={handleHide}>
                    {constructOptions()}
                </DropList>
            )}
        </Wrapper>
    );
}

ComboButton.displayName = 'ComboButton';
ComboButton.defaultProps = {
    design: 'primary',
    size: 'm',
    fitOptions: true,
    icons: defaultIcons,
};
ComboButton.Option = DropList.Item;
export default ComboButton;
