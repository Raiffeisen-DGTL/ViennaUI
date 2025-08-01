import React from 'react';
import { Shadow } from './BoxShadow.styles';
import { useTableShadow } from './hooks/useTableShadow';

export interface Props {
    tableRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const BoxShadow = ({ tableRef }: Props) => {
    const { shadowSize, hasShadow } = useTableShadow({ tableRef });

    return (
        <Shadow
            style={{
                width: `${shadowSize.width}px`,
                opacity: hasShadow ? 1 : 0,
            }}
        />
    );
};
