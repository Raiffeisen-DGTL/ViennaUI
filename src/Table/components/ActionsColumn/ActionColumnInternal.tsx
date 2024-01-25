import React, { FC } from 'react';
import { ActionsColumn } from './ActionColumnInternal.styles';
import { BoxStyled } from '../../../Utils/styled';
import { PropsTd } from '../TableBody/TableBody.styles';

interface Props extends Omit<BoxStyled<typeof ActionsColumn, PropsTd>, 'valign'> {
    align?: PropsTd['$align'];
    hasRightDivider?: PropsTd['$hasRightDivider'];
    noWrap?: PropsTd['$noWrap'];
    pinned?: PropsTd['$pinned'];
    size?: PropsTd['$size'];
    truncate?: PropsTd['$truncate'];
    valign?: PropsTd['$valign'];
    width?: PropsTd['$width'];
}

export const ActionsColumnInternal: FC<Props> = (props) => {
    const { children, align, hasRightDivider, noWrap, pinned, size, truncate, valign, width, ...attrs } = props;
    return (
        <ActionsColumn
            {...(attrs as {})}
            $hasRightDivider={hasRightDivider}
            $align={align}
            $noWrap={noWrap}
            $pinned={pinned}
            $size={size}
            $truncate={truncate}
            $valign={valign}
            $width={width}>
            {children}
        </ActionsColumn>
    );
};
