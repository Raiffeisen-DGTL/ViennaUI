import React from 'react';
import {
    Box,
    CircleSVG,
    CircleProgress,
    Line,
    Progress,
    CircleBack,
    CircleBox,
    CircleContent,
} from './Progressbar.styles';
import { Loading } from './Loading';

interface Props {
    view?: 'line' | 'circle';
    size?: 's' | 'm' | 'l';
    color?:
        | 'moscow100'
        | 'osaka100'
        | 'accent'
        | 'geneva100'
        | 'oslo120'
        | 'seattle140'
        | 'oslo100'
        | 'miami100'
        | 'sochi100'
        | 'paris100'
        | 'tokyo100'
        | 'dubai100'
        | 'nice100';
    value: number;
    /** Shows loading state, if view is 'line' */
    loading?: boolean;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type ProgressbarProps = Props & HTMLAttributeProps;

export const Progressbar: React.FC<ProgressbarProps> = (props: React.PropsWithChildren<ProgressbarProps>) => {
    const { size, view, color, value, children, loading, ...attrs } = props;

    switch (view) {
        case 'circle': {
            return (
                <CircleBox {...attrs}>
                    <CircleSVG size={size}>
                        <CircleBack size={size} />
                        <CircleProgress size={size} color={color} value={value} />
                    </CircleSVG>
                    {children && <CircleContent size={size}>{children}</CircleContent>}
                </CircleBox>
            );
        }
        case 'line':
        default: {
            return (
                <Box {...attrs} size={size}>
                    <Line />
                    <Progress width={value > 100 ? 100 : value} color={color}>
                        {loading && <Loading />}
                    </Progress>
                </Box>
            );
        }
    }
};

Progressbar.displayName = 'Progressbar';
Progressbar.defaultProps = {
    view: 'line',
    size: 'm',
    color: 'oslo120',
};

export default Progressbar;
