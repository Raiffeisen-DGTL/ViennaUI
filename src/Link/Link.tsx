import React, { FC, ForwardedRef, ReactElement, Ref } from 'react';
import { Box, PropsBox, Wrapper } from './Link.styles';
import { Spinner } from '../Spinner';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export const defaultLinkTestId: LinkProps['testId'] = {
    container: 'link_container',
};

export interface Path {
    /**
     * A URL pathname, beginning with a /.
     */
    pathname: string;
    /**
     * A URL search string, beginning with a ?.
     */
    search: string;
    /**
     * A URL fragment identifier, beginning with a #.
     */
    hash: string;
}

type To = string | Partial<Path>;
export interface LinkProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox<B>['$design'];
    color?: PropsBox<B>['$color'];
    size?: PropsBox<B>['$size'];
    loading?: PropsBox<B>['$loading'];
    disabled?: PropsBox<B>['$disabled'];
    to?: To;
    testId?: {
        container?: string;
    };
}

function LinkInternal<B = void>(props: LinkProps<B extends void ? Breakpoints : B>, ref: Ref<HTMLAnchorElement>) {
    const {
        children,
        loading,
        disabled,
        design = 'primary',
        color,
        tabIndex: tab,
        size = 'm',
        testId = defaultLinkTestId,
        ...attrs
    } = props;
    const tabIndex = disabled ? -1 : tab;

    const content =
        React.Children.map(children, (child) => {
            const el = child as ReactElement;
            if (typeof el === 'string' || typeof el === 'number' || el?.type === 'span') {
                return (
                    <Wrapper $design={design} $color={color} $disabled={disabled} $loading={loading} $size={size}>
                        {el}
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
            data-testid={testId?.container}
            {...attrs}
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
