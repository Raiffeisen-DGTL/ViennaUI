import React, {
    FC,
    Children,
    isValidElement,
    KeyboardEventHandler,
    useCallback,
    useRef,
    useEffect,
    ReactNode,
    ReactElement,
} from 'react';
import { Box, PropsBox, BoxItem, PropsBoxItem, ChipsViewOnlyText } from './Chips.styles';
import { withTabFocusState, reactNodeIsComponent, SizeType } from '../Utils';
import { BoxStyled } from '../Utils/styled';
import { omit } from '../Utils/omit';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';

export interface BaseItemProps {
    active?: boolean;
    size?: SizeType<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'>;
    disabled?: boolean;
}

export interface ChipsProps extends BoxStyled<typeof Box, PropsBox>, WithViewOnly {
    size?: PropsBox['$size'];
    design?: PropsBox['$design'];
    align?: PropsBox['$align'];
    active?: null | string | string[];
    onPressEnter?: KeyboardEventHandler<HTMLDivElement>;
}
export interface ChipsItemProps extends Omit<BoxStyled<typeof BoxItem, PropsBoxItem>, 'onClick'> {
    size?: PropsBoxItem['$size'];
    design?: PropsBoxItem['$design'];
    active?: PropsBoxItem['$active'];
    disabled?: PropsBoxItem['$disabled'];
    isFocusStateVisible: boolean;
    onClick?: (e: MouseEvent | React.MouseEvent<HTMLDivElement | HTMLSpanElement>) => void;
}

const isActive = ({ active, id }: ChipsItemProps, state?: null | string | string[]) => {
    if (!state) {
        return active;
    }

    return Array.isArray(state) && id ? state.includes(id) : state === id;
};

const ItemWithEvent = React.forwardRef<HTMLDivElement, ChipsItemProps>(
    ({ onClick, size = 's', design, active, disabled, isFocusStateVisible, ...attrs }, ref) => {
        const item = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const clickHandler = (e: MouseEvent) => {
                onClick?.(e);
            };

            if (item.current) {
                item.current.addEventListener('click', clickHandler, true);
            }

            return () => item.current?.removeEventListener('click', clickHandler, true);
        }, [onClick]);

        return (
            <BoxItem
                {...attrs}
                ref={ref || item} // Используем переданный ref или внутренний ref
                as='div'
                data-checked={active ? 'true' : 'false'}
                $size={size}
                $design={design}
                $active={active}
                $disabled={disabled}
                $isFocusStateVisible={isFocusStateVisible}
            />
        );
    }
);

const ChipItem = withTabFocusState(ItemWithEvent);

const Item = (props: Omit<ChipsItemProps, 'isFocusStateVisible'>) => {
    const newProps = { ...props };
    delete newProps.active;
    delete newProps.size;
    delete newProps.disabled;
    delete newProps.design;
    return <span {...(newProps as Omit<typeof newProps, 'active' | 'size' | 'disabled' | 'design'>)} />;
};

export const Chips: FC<ChipsProps> & { Item: typeof Item } = ({
    design = 'primary',
    align = 'left',
    size = 's',
    children,
    active: rootActive,
    viewOnly,
    viewOnlyText,
    onPressEnter,
    onClick,
    ...attrs
}): JSX.Element => {
    const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
        (event) => {
            switch (event.key) {
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    onPressEnter?.(event);
            }

            return null;
        },
        [onPressEnter]
    );

    const renderChipItems = (child: ReactNode | ReactNode[]): ReactNode => {
        if (Array.isArray(child)) {
            return child.map((item, index) => {
                return <React.Fragment key={index}>{renderChipItem(item)}</React.Fragment>;
            });
        }

        return renderChipItem(child);
    };

    const renderChipItem = (child: ReactNode): ReactNode => {
        if (reactNodeIsComponent(child, Item)) {
            const { props: chipProps } = child as ReactElement<ChipsItemProps>;
            const onKeyDown = chipProps.onKeyDown || handleKeyDown;
            const active = isActive(chipProps, rootActive);
            const tabIndex = chipProps?.disabled ? -1 : chipProps.tabIndex;
            return (
                <ChipItem
                    role='option'
                    active={active}
                    design={design}
                    size={chipProps.size || size}
                    onKeyDown={onKeyDown}
                    tabIndex={tabIndex}
                    onClick={
                        !chipProps.disabled ? ((chipProps.onClick || onClick) as ChipsItemProps['onClick']) : undefined
                    }
                    {...(omit(chipProps, 'tabIndex', 'onClick', 'onKeyDown') as Omit<
                        ChipsItemProps,
                        'ref' | 'tabIndex' | 'onClick' | 'onKeyDown'
                    >)}
                />
            );
        }
        if (isValidElement(child) && (child as React.ReactElement<{ children: React.ReactNode }>).props.children) {
            const childProps = (child as React.ReactElement<{ children: React.ReactNode }>).props;
            return React.cloneElement(child, childProps, renderChipItems(childProps.children));
        }

        return child;
    };

    const content = Children.map(children, renderChipItems);

    if (viewOnly) {
        const chipItemsProps: ChipsItemProps[] = [];
        const getChipItemsProps = (child: ReactNode | ReactNode[]) => {
            if (Array.isArray(child)) {
                child.forEach(getChipItemsProps);
            } else if (reactNodeIsComponent(child, Item)) {
                chipItemsProps.push(child.props as ChipsItemProps);
            } else if (
                isValidElement(child) &&
                (child as React.ReactElement<{ children: React.ReactNode }>).props.children
            ) {
                getChipItemsProps(child.props.children);
            }
        };
        Children.forEach(children, getChipItemsProps);
        const activeChips = chipItemsProps
            .filter((chipProps) => isActive(chipProps, rootActive))
            .map((item) => item.children);
        return (
            <ViewOnly>
                <ChipsViewOnlyText $size={size}>
                    {viewOnlyText ??
                        activeChips.map((item, index, arr) => (
                            <React.Fragment key={index}>
                                {item}
                                {index + 1 < arr.length && ', '}
                            </React.Fragment>
                        ))}
                </ChipsViewOnlyText>
            </ViewOnly>
        );
    }

    return (
        <Box {...attrs} $design={design} $align={align} $size={size}>
            {content}
        </Box>
    );
};

Chips.displayName = 'Chips';

Chips.Item = Item;
Item.displayName = 'Item';
