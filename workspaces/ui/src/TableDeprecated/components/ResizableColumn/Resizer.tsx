import React, { FC } from 'react';
import { ResizerLine } from './Resizer.styles';
import { useResizableColumns } from './useResizableColumn';

interface RisizerProps {
    size;
}

export const Resizer: FC<RisizerProps> = ({ size }) => {
    const events = useResizableColumns();

    return <ResizerLine size={size} {...events} />;
};
