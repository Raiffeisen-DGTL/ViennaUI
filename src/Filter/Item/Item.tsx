import React, { FC } from 'react';
import { CloseCancelX } from '@fcc/icons';
import { Box, PropsBox, Label, Icon } from './Item.styles';
import { withTabFocusState } from '../../Utils';
import { BoxStyled } from '../../Utils/styled';

export interface ItemProps extends BoxStyled<typeof Box, PropsBox> {
    /** Дизайн */
    design?: PropsBox['$design'];
    /** Размер */
    size?: PropsBox['$size'];
    /** Событие при щелчке на крестик */
    onDelete?: (e: any) => void;
    /** Максимальная длина */
    maxWidth?: number;
    /** Порядок табуляции */
    tabIndex?: number;
}

interface PropInternal extends ItemProps {
    isFocusStateVisible: boolean;
}

export const Item: FC<ItemProps> = withTabFocusState<HTMLDivElement, PropInternal>((props) => {
    const {
        children,
        size = 'm',
        design = 'primary',
        onDelete,
        maxWidth,
        isFocusStateVisible,
        tabIndex = 1,
        ...attrs
    } = props;
    return (
        <Box {...(attrs as {})} $size={size} $design={design}>
            <Label $maxWidth={maxWidth}>{children}</Label>
            <Icon
                $isFocusStateVisible={isFocusStateVisible}
                tabIndex={tabIndex}
                onClick={onDelete}
                onKeyDown={onDelete}>
                <CloseCancelX size='s' />
            </Icon>
        </Box>
    );
});

Item.displayName = 'Item';
