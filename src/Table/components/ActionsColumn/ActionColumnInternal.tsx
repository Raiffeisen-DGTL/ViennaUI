import React, { FC, Fragment } from 'react';
import { ActionsColumn, HoveringActionsWrapper } from './ActionColumnInternal.styles';
import { BoxStyled } from '../../../Utils/styled';
import { PropsTd } from '../TableBody/TableBody.styles';

export interface Props extends Omit<BoxStyled<typeof ActionsColumn, PropsTd>, 'valign'> {
    shrinkActionsColumn?: boolean;
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
    const {
        children,
        align,
        hasRightDivider,
        pinned,
        size,
        noWrap,
        truncate,
        valign,
        width,
        shrinkActionsColumn,
        ...attrs
    } = props;

    const Wrapper = shrinkActionsColumn ? HoveringActionsWrapper : Fragment;

    return (
        <ActionsColumn
            {...attrs}
            $hasRightDivider={hasRightDivider}
            $align={align}
            $noWrap={noWrap}
            $pinned={pinned}
            $size={size}
            $truncate={truncate}
            $valign={valign}
            $width={shrinkActionsColumn ? '0px' : width}
            $shrinkActionsColumn={shrinkActionsColumn}>
            <Wrapper>{children}</Wrapper>
        </ActionsColumn>
    );
};
