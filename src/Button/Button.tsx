import React, { Ref, ReactElement, Children, ReactNode, FC, AnchorHTMLAttributes } from 'react';
import { Box, ContentWrapper, ContentWrapperIcon, PropsBox } from './Button.styles';
import { Spinner } from '../Spinner';
import { Breakpoints } from '../Utils/responsiveness';
import { withTabFocusState } from '../Utils';
import { BoxStyled } from '../Utils/styled';

export type ButtonDesign =
    | 'primary'
    | 'accent'
    | 'critical'
    | 'outline'
    | 'outline-critical'
    | 'ghost'
    | 'ghost-accent'
    | 'white';

export interface ButtonProps<B = Breakpoints>
    extends BoxStyled<typeof Box, PropsBox>,
        Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'referrerPolicy' | 'download' | 'rel' | 'href' | 'target'> {
    /** Дизайн */
    design?: PropsBox<B>['$design'];
    /** Размеры */
    size?: PropsBox<B>['$size'];
    grid?: PropsBox<B>['$grid'];
    square?: PropsBox<B>['$square'];
    pressed?: PropsBox<B>['$pressed'];
    loading?: PropsBox<B>['$loading'];
    disabled?: PropsBox<B>['$disabled'];
    forwardedRef?: Ref<HTMLButtonElement>;
}

const correctSpinnerSizes = {
    xxl: 'l',
    xl: 'l',
    l: 'm',
};

interface ButtonInternalProps<B = Breakpoints> extends ButtonProps<B> {
    isFocusStateVisible: boolean;
}

function ButtonComponent<B = void>(props: ButtonInternalProps<B extends void ? Breakpoints : B>) {
    const {
        children,
        size = 'm',
        loading,
        forwardedRef,
        isFocusStateVisible,
        disabled: disabledProps,
        design = 'primary',
        grid,
        pressed,
        square,
        type = 'button',
        ...attrs
    } = props;

    // Wrapping text nodes with span
    const content = Children.map(children, (child) => {
        const el = child as ReactElement;
        if (
            el?.type &&
            typeof el.type !== 'string' &&
            ['DropList'].includes((el.type as unknown as { displayName: string }).displayName)
        ) {
            return child;
        }

        if (el?.type?.toString().includes('svg')) {
            return <ContentWrapperIcon $size={size}>{child}</ContentWrapperIcon>;
        }
        return <ContentWrapper $size={size}>{child}</ContentWrapper>;
    });

    let spinner: ReactNode = null;

    let disabled = disabledProps;
    // TODO: Сверить с дизайом, верно ли расчитывается size?
    if (loading) {
        disabled = true;
        spinner = (
            <Spinner
                key='spinner'
                size={typeof size === 'string' ? correctSpinnerSizes[size] || size : size}
                position='absolute'
                color='london120'
            />
        );
    }

    const as = attrs.href ? 'a' : 'button';

    return (
        <Box
            {...(attrs as {})}
            type={type}
            ref={forwardedRef}
            as={as}
            disabled={disabled}
            $disabled={disabled}
            $isLoading={loading}
            $size={size}
            $isFocusStateVisible={isFocusStateVisible}
            $design={design}
            $grid={grid}
            $loading={loading}
            $pressed={pressed}
            $square={square}>
            {content}
            {spinner}
        </Box>
    );
}

export const Button = withTabFocusState(ButtonComponent) as <B = Breakpoints>(p: ButtonProps<B>) => JSX.Element;

(Button as FC).displayName = 'Button';
