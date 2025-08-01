import React from 'react';
import { CloseCancelXIcon } from 'vienna.icons';
import { Box, PropsBox, Label, Icon } from './Item.styles';
import { withTabFocusState } from '../../Utils';
import { BoxStyled } from '../../Utils/styled';

export const defaultFilterItemTestId: ItemProps['testId'] = {
    cross: 'filter-item_cross',
};

export interface ItemProps extends BoxStyled<typeof Box, PropsBox> {
    /** Дизайн */
    design?: PropsBox['$design'];
    /** Размер */
    size?: PropsBox['$size'];
    /** Событие при щелчке на крестик */
    onDelete?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
    ) => void /** Максимальная длина */;
    maxWidth?: number;
    /** Порядок табуляции */
    tabIndex?: number;
    testId?: {
        cross?: string;
    };
}

interface PropInternal extends ItemProps {
    isFocusStateVisible: boolean;
}

export const Item = withTabFocusState<HTMLDivElement, PropInternal>((props) => {
    const {
        children,
        size = 'm',
        design = 'primary',
        onDelete,
        maxWidth,
        isFocusStateVisible,
        tabIndex = 1,
        testId = defaultFilterItemTestId,
        ...attrs
    } = props;

    return (
        <Box {...attrs} $size={size} $design={design}>
            <Label $maxWidth={maxWidth}>{children}</Label>
            <Icon
                $isFocusStateVisible={isFocusStateVisible}
                tabIndex={tabIndex}
                data-testid={testId?.cross}
                onClick={onDelete}
                onKeyDown={onDelete}>
                <CloseCancelXIcon size='s' />
            </Icon>
        </Box>
    );
});

Item.displayName = 'Item';
