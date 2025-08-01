import React, { PropsWithChildren, ReactElement } from 'react';
import { Card, StyledImage, IconWrapper } from './Bankcard.styles';
import { BoxStyled } from '../Utils/styled';
import { CardPath } from './CardPath';

export type CardType =
    | 'visaClassicTravel'
    | 'mir'
    | 'childCard'
    | 'salaryPlusGold'
    | 'goldUnionPay'
    | 'cashbackMir'
    | 'days110'
    | 'goldPackage'
    | 'cashbackAll'
    | 'business24'
    | 'business24Super0'
    | 'travel24';

export interface BankcardProps extends BoxStyled<typeof Card, object> {
    disabled?: boolean;
    type?: CardType;
    icon?: ReactElement;
    alt?: string;
    src?: string;
    width?: number;
}

export const Bankcard: React.FC<PropsWithChildren<BankcardProps>> = ({
    children,
    disabled = false,
    type,
    icon,
    alt,
    src,
    width,
    ...attrs
}) => {
    const getSizedIcon = (icon: ReactElement) => {
        return React.cloneElement(icon, { size: width ? width / 3 : 's' });
    };

    return (
        <Card {...attrs} tabIndex={disabled ? -1 : 0} $disabled={disabled} $icon={icon} $width={width}>
            {src || type ? (
                <StyledImage alt={alt} src={type ? CardPath[type] : src} />
            ) : icon ? (
                <IconWrapper>{getSizedIcon(icon)}</IconWrapper>
            ) : (
                children
            )}
        </Card>
    );
};

Bankcard.displayName = 'Bankcard';
