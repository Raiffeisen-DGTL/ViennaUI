import React from 'react';
import type { CloseCancelXIconProps } from 'vienna.icons';
import { CloseButton } from './Close.styles';

type CloseProps = Pick<CloseCancelXIconProps, 'onClick'> & { isAccent: boolean };

export const Close = ({ isAccent, onClick }: CloseProps) => {
    return <CloseButton $isAccent={isAccent} onClick={onClick} />;
};
