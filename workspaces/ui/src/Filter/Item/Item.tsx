import React from 'react';
import { Close } from 'vienna.icons';
import { Box, Label, Icon } from './Item.styles';
import { withTabFocusState } from '../../Utils';

export interface Props {
    [x: string]: any;
    /** Дизайн */
    design?: 'primary' | 'ghost';
    /** Размер */
    size?: 'm';
    /** Событие при щелчке на крестик */
    onDelete?: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent) => void;
    /** Максимальная длина */
    maxWidth?: number;
    /** Порядок табуляции */
    tabIndex?: number;
    /** Системное свойство для подсветки при табуляции */
    isFocusStateVisible?: boolean;
}

export const Item: React.FC<React.PropsWithChildren<Props>> = withTabFocusState(
    (props: React.PropsWithChildren<Props>) => {
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
            <Box size={size} design={design} {...attrs}>
                <Label maxWidth={maxWidth}>{children}</Label>
                <Icon
                    isFocusStateVisible={isFocusStateVisible}
                    tabIndex={tabIndex}
                    onClick={onDelete}
                    onKeyDown={onDelete}>
                    <Close size='s' />
                </Icon>
            </Box>
        );
    }
);

Item.displayName = 'Item';
export default Item;
