import React, { AnchorHTMLAttributes } from 'react';
import { Box, Wrapper } from './Link.styles';
import { Spinner } from '../Spinner';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'size'> {
    [key: string]: any;
    children?: React.ReactNode;
    design?: 'accent' | 'accent-underline' | 'primary' | 'secondary';
    size?: 's' | 'm' | 'l';
    loading?: boolean;
    disabled?: boolean;
}

export const Link: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
> = React.forwardRef(function Link(props, ref) {
    const { children, loading, disabled, design, ...attrs } = props;

    const params = {
        design,
        disabled,
        ...(loading && { isLoading: loading }),
    };

    const content: any = React.Children.map(children, (child: any) => {
        if (typeof child === 'string' || (child && child.type === 'span')) {
            return <Wrapper {...params}>{child}</Wrapper>;
        }

        return child;
    });

    if (loading) {
        params.disabled = true;
        content.push(<Spinner key='spinner' size={props.size} position='absolute' />);
    }

    return React.createElement(Box, { ref, ...attrs, ...params }, content);
});

Link.defaultProps = {
    design: 'primary',
    size: 'm',
};

Link.displayName = 'Link';
export default Link;
