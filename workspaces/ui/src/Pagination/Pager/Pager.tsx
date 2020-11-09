import React from 'react';
import { Box } from './Pager.styles';

interface PagerProps {
    children?: React.ReactNode;
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
    active?: boolean;
    title?: string;
    onClick: (event: React.FormEvent, { index: number }) => void;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    tabIndex?: number;
}

export const Pager: React.FC<PagerProps & HTMLAttributeProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;
    const tabIndex = attrs.disabled || !attrs.tabIndex ? '-1' : attrs.tabIndex;

    return React.createElement(Box, { ...attrs, tabIndex }, children);
};

Pager.defaultProps = {
    size: 'm',
    active: false,
};

export default Pager;
