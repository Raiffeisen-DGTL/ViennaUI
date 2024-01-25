import React, { FC } from 'react';
import { ResizerLine } from './Resizer.styles';
import { useResizableColumns } from './useResizableColumn';

interface ResizerProps {
    size: any;
}

export const Resizer: FC<ResizerProps> = ({ size }) => {
    const events = useResizableColumns();

    return <ResizerLine $size={size} {...events} />;
};
