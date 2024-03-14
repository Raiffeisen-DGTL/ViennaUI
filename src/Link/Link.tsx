import React, { FC, ForwardedRef, Ref } from 'react';
import { Box, PropsBox, Wrapper } from './Link.styles';
import { Spinner } from '../Spinner';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface LinkProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox<B>['$design'];
    color?: PropsBox<B>['$color'];
    size?: PropsBox<B>['$size'];
    loading?: PropsBox<B>['$loading'];
    disabled?: PropsBox<B>['$disabled'];
}

function LinkInternal<B = void>(props: LinkProps<B extends void ? Breakpoints : B>, ref: Ref<HTMLAnchorElement>) {
    const { children, loading, disabled, design = 'primary', color, tabIndex: tab, size = 'm', ...attrs } = props;

    const tabIndex = disabled ? -1 : tab;

    const content =
        React.Children.map(children, (child: any) => {
            if (typeof child === 'string' || (child && child.type === 'span')) {
                return (
                    <Wrapper $design={design} $color={color} $disabled={disabled} $loading={loading} $size={size}>
                        {child}
                    </Wrapper>
                );
            }

            return child;
        }) ?? [];

    if (loading) {
        content.push(<Spinner key='spinner' size={props.size} position='absolute' />);
    }

    return (
        <Box
            {...(attrs as {})}
            ref={ref}
            tabIndex={tabIndex}
            $design={design}
            $color={color}
            $disabled={loading ? true : disabled}
            $loading={loading}
            $size={size}>
            {content}
        </Box>
    );
}

export const Link = React.forwardRef(LinkInternal) as <B = Breakpoints>(
    props: LinkProps<B> & { ref?: ForwardedRef<HTMLAnchorElement> }
) => ReturnType<typeof LinkInternal>;

(Link as FC).displayName = 'Link';
