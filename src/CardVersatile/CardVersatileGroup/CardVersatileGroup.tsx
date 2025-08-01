import React, { RefAttributes } from 'react';
import { CardVersatile, CardVersatileProps } from '../CardVersatile';
import { GroupBox, GroupBoxProps } from './CardVersatileGroup.styles';
import { BoxStyled } from '../../Utils/styled';

type CardVersatilePropsWithRef = CardVersatileProps & RefAttributes<HTMLDivElement>;
export interface CardVersatileGroupProps extends BoxStyled<typeof GroupBox, GroupBoxProps> {
    list: CardVersatilePropsWithRef[];
    design?: CardVersatileProps['design'];
}

export const CardVersatileGroup = ({ list, design }: CardVersatileGroupProps) => {
    return (
        <GroupBox $design={design}>
            {list.map((cardItem, index) => (
                <CardVersatile key={index} {...cardItem} design={design} />
            ))}
        </GroupBox>
    );
};
