import React, { FC } from 'react';
import { ResizerLine } from './Resizer.styles';
import { useResizableColumns } from './useResizableColumn';

export interface ResizerProps {
    size: 'xs' | 's' | 'm' | 'l' | undefined;
}

export const Resizer: FC<ResizerProps> = ({ size }) => {
    const { resizerRef, onMouseDown } = useResizableColumns();

    return (
        <ResizerLine
            ref={resizerRef}
            $size={size}
            // TODO: разные типы у реакт свойства и у слушателя
            onMouseDown={onMouseDown as unknown as (e: React.MouseEvent) => void}
        />
    );
};
