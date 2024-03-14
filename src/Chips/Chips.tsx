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
import { Box, PropsBox, BoxItem, PropsBoxItem } from './Chips.styles';
import { withTabFocusState } from '../Utils';
import { BoxStyled } from '../Utils/styled';

export interface BaseItemProps {
    active?: boolean;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    disabled?: boolean;
}

export interface ChipsProps extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox['$size'];
    design?: PropsBox['$design'];
    align?: PropsBox['$align'];
    active?: null | string | string[];
    onPressEnter?: KeyboardEventHandler<HTMLDivElement>;
}
export interface ChipsItemProps extends BoxStyled<typeof BoxItem, PropsBoxItem> {
    size?: PropsBoxItem['$size'];
    design?: PropsBoxItem['$design'];
    active?: PropsBoxItem['$active'];
    disabled?: PropsBoxItem['$disabled'];
    isFocusStateVisible: boolean;
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
            const clickHandler = (e) => {
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
    const newProps: any = { ...props };
    delete newProps.active;
    delete newProps.size;
    delete newProps.disabled;
    delete newProps.design;
    return <span {...newProps} />;
};

export const Chips: FC<ChipsProps> & { Item: typeof Item } = ({
    design = 'primary',
    align = 'left',
    size = 's',
    children,
    active: rootActive,
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

    const renderChipItems = (child: ReactNode | ReactNode[]) => {
        if (Array.isArray(child)) {
            return child.map((item, index) => {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                return <React.Fragment key={index}>{renderChipItem(item)}</React.Fragment>;
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return renderChipItem(child);
    };

    const renderChipItem = (child: ReactNode) => {
        if (isValidElement(child) && child.type === Item) {
            const { props: chipProps } = child as ReactElement;
            const onKeyDown = chipProps.onKeyDown || handleKeyDown;
            const active = isActive(chipProps, rootActive);
            const tabIndex = chipProps.disabled ? '-1' : chipProps.tabIndex;

            return (
                <ChipItem
                    key={chipProps.key}
                    role='option'
                    active={active}
                    design={design}
                    size={chipProps.size || size}
                    onKeyDown={onKeyDown}
                    tabIndex={tabIndex}
                    onClick={onClick}
                    {...chipProps}
                />
            );
        }
        if (isValidElement(child) && child.props.children) {
            return React.cloneElement(child, child.props, renderChipItems(child.props.children));
        }

        return child;
    };

    const content = Children.map(children, renderChipItems);

    return (
        <Box {...(attrs as {})} $design={design} $align={align} $size={size}>
            {content}
        </Box>
    );
};

Chips.displayName = 'Chips';

Chips.Item = Item;
