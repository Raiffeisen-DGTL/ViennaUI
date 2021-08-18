import React, { useCallback } from 'react';
import { Box, Item } from './Chips.styles';
import { withTabFocusState } from '../Utils';

interface Props {
    children?: any;
    active?: string | string[];
    design?: 'accent' | 'primary' | 'ghost';
    align?: string;
    onClick?: (event: React.FormEvent) => void;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export interface ItemProps {
    active?: boolean;
    disabled?: boolean;
    onFocus?: (event: React.FormEvent) => void;
    onBlur?: (event: React.FormEvent) => void;
    onKeyUp?: (event: React.FormEvent) => void;
    onKeyDown?: (event: React.FormEvent) => void;
    onMouseUp?: (event: React.FormEvent) => void;
    onMouseDown?: (event: React.FormEvent) => void;
    onMouseEnter?: (event: React.FormEvent) => void;
    onMouseOut?: (event: React.FormEvent) => void;
    onMouseLeave?: (event: React.FormEvent) => void;
}

export type ChipsProps = Props & HTMLAttributeProps;
export type ChipsItemProps = ItemProps & HTMLAttributeProps;

const isActive = (props: any, state?: string | string[]) => {
    if (!state) {
        return props.active;
    }

    return Array.isArray(state) ? state.includes(props.id) : state === props.id;
};

const ChipItem = withTabFocusState(Item);

export const Chips: React.FC<ChipsProps> & { Item: React.FC<ChipsItemProps> } = (props): JSX.Element => {
    const { design, onClick, children, active: setActive, ...attrs } = props;

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            switch (event.key) {
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    return onClick?.(event);
            }

            return null;
        },
        [onClick]
    );

    const content = React.Children.map(React.Children.toArray(children), (child) => {
        if (React.isValidElement(child)) {
            const { props: chipProps } = child;
            const onKeyDown = chipProps.onKeyDown || handleKeyDown;

            const active = isActive(chipProps, setActive);
            const tabIndex = chipProps.disabled ? '-1' : chipProps.tabIndex;
            const newProps = { ...chipProps, ...{ active, design, onClick, onKeyDown, tabIndex } };

            return <ChipItem role='option' {...newProps} />;
        }

        return null;
    });

    return (
        <Box design={design} {...attrs}>
            {content}
        </Box>
    );
};

Chips.displayName = 'Chips';
Chips.defaultProps = {
    design: 'primary',
    align: 'left',
};

Chips.Item = (props: ChipsItemProps): JSX.Element => {
    return <span {...props} />;
};

export default Chips;
