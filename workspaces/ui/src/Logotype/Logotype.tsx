import React from 'react';
import { Box } from './Logotype.styles';
import { En, Ru, Logo } from './Logos';

interface Props {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    design?: 'light' | 'dark' | 'monochrome' | 'monochrome-dark';
    locale?: 'ru' | 'en';
    collapsed?: boolean;
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

export type LogotypeProps = HTMLAttributeProps & Props;

export const Logotype: React.FC<LogotypeProps> = (props): JSX.Element => {
    const { size, design, locale, collapsed, ...attrs } = props;
    const Title = locale === 'en' ? En : Ru;

    return (
        <Box {...attrs}>
            <Logo size={size} design={design} />
            {!collapsed && <Title size={size} design={design} />}
        </Box>
    );
};

Logotype.displayName = 'Logotype';
Logotype.defaultProps = {
    design: 'light',
    size: 'm',
    locale: 'ru',
    collapsed: false,
};

export default Logotype;
