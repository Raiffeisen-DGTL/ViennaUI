import React from 'react';
import { SelectHide, SelectOpenDown } from 'vienna.icons';
import { ExpanderTd, ExpanderIcon } from './ExpanderCell.styles';

export interface ExpanderCellProps {
    isRowExpanded?: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const ExpanderCell: React.FC<ExpanderCellProps> = ({ onClick, isRowExpanded }) => {
    return (
        <ExpanderTd onClick={onClick}>
            <ExpanderIcon>{isRowExpanded ? <SelectHide /> : <SelectOpenDown />}</ExpanderIcon>
        </ExpanderTd>
    );
};
