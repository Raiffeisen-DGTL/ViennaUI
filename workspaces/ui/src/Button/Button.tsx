import React from 'react';
import { withTabFocusState } from '../Utils';
import { Box, ContentWrapper } from './Button.styles';
import { Spinner } from '../Spinner';

export type ButtonProps = Props & HTMLAttributeProps;
interface Props {
    children?: React.ReactNode;
    /** Дизайн */
    design?: 'primary' | 'accent' | 'critical' | 'outline' | 'outline-critical' | 'ghost' | 'white';
    /** Размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    grid?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    square?: boolean;
    pressed?: boolean;
    loading?: boolean;
    disabled?: boolean;
    href?: string;
    forwardedRef?: any;
}

interface HTMLAttributeProps {
    [key: string]: any;
    autoFocus?: boolean;
    id?: string;
    name?: string;
    value?: string;
    className?: string;
    title?: string;
    role?: string;
    tabIndex?: string;
    download?: string;
    rel?: string;
    type?: 'button' | 'submit' | 'reset' | 'menu';
    target?: '_self' | '_blank' | '_parent' | '_top';
    onClick?: (event: React.FormEvent) => void;
    onFocus?: (event: React.FormEvent) => void;
    onBlur?: (event: React.FormEvent) => void;
    onKeyUp?: (event: React.FormEvent) => void;
    onKeyDown?: (event: React.FormEvent) => void;
    onMouseUp?: (event: React.FormEvent) => void;
    onMouseDown?: (event: React.FormEvent) => void;
    onMouseEnter?: (event: React.FormEvent) => void;
    onMouseOut?: (event: React.FormEvent) => void;
    onMouseLeave?: (event: React.FormEvent) => void;
    referrerPolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'unsafe-url';
}

const correctSpinnerSizes = {
    xxl: 'l',
    xl: 'l',
    l: 'm',
};

const ButtonComponent: React.FC<ButtonProps> = (props): JSX.Element => {
    const { children, size = 'm', loading, forwardedRef, ...attrs } = props;

    // Wrapping text nodes with span
    const content: any = React.Children.map(children, (child: any) => {
        if (child?.type && ['DropList'].includes(child.type.displayName)) {
            return child;
        }

        return <ContentWrapper size={size}>{child}</ContentWrapper>;
    });

    const params = {
        ref: forwardedRef,
        isLoading: loading,
    };

    if (loading) {
        attrs.disabled = true;
        content.push(
            <Spinner key='spinner' size={correctSpinnerSizes[size] || size} position='absolute' color='london120' />
        );
    }

    const as = attrs.href ? 'a' : 'button';
    return React.createElement(Box, { ...attrs, ...params, size, as }, content);
};

export const Button = withTabFocusState(ButtonComponent);

Button.displayName = 'Button';
Button.defaultProps = {
    design: 'primary',
    size: 'm',
    type: 'button',
};

export default Button;
