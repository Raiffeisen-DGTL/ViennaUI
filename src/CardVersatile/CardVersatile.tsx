import React, { forwardRef, Ref, ReactNode, RefAttributes } from 'react';
import { ChevronIcon } from 'vienna.icons';
import { color } from 'vienna.tokens';
import {
    Box,
    BoxTop,
    BoxTopLeft,
    BoxTopContent,
    BoxTopRight,
    BoxHeading,
    BoxHeadingInfo,
    BoxHint,
    BoxInfo,
    BoxBottom,
    Title,
    Subtitle,
    Info,
    ExtraInfo,
    type BoxProps,
} from './CardVersatile.styles';
import { BoxStyled } from '../Utils/styled';
import { Hint, type HintProps } from '../Hint';
import { Counter, type CounterProps } from '../Counter';
import { Badge, type BadgeProps } from '../Badge';
import { Divider } from '../Divider';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { CardVersatileGroup } from './CardVersatileGroup/CardVersatileGroup';

export interface CardVersatileProps extends Omit<BoxStyled<typeof Box, BoxProps>, 'title'> {
    title: ReactNode;
    subtitle?: ReactNode;
    design?: BoxProps['$design'];
    icon?: IconContainerProps;
    iconSlot?: ReactNode;
    hint?: HintProps;
    counter?: CounterProps;
    badge?: Omit<BadgeProps, 'ref'>;
    extraText?: ReactNode;
    info?: string;
    topRightSlot?: ReactNode;
    disableDivider?: boolean;
    hasInteractive?: boolean;
    selected?: boolean;
    children?: ReactNode;
}

function CardInternal(
    {
        children,
        title,
        subtitle,
        design = 'shadow',
        icon,
        iconSlot,
        hint,
        counter,
        badge,
        extraText,
        info,
        topRightSlot,
        disableDivider,
        hasInteractive,
        selected,
        ...attrs
    }: CardVersatileProps,
    ref: Ref<HTMLDivElement>
) {
    const extraContent = () => {
        if (typeof extraText === 'string') {
            return (
                <ExtraInfo>
                    {extraText}
                    <ChevronIcon size={24} color={color.primary.seattle.c60} />
                </ExtraInfo>
            );
        }

        return extraText;
    };

    return (
        <Box {...attrs} ref={ref} $design={design} $hasInteractive={hasInteractive} $selected={selected}>
            <BoxTop>
                {(icon || iconSlot) && <BoxTopLeft>{icon ? <IconContainer {...icon} /> : iconSlot}</BoxTopLeft>}
                <BoxTopContent>
                    <BoxHeading>
                        <Title>{title}</Title>
                        {hint && (
                            <BoxHint>
                                <Hint {...hint} />
                            </BoxHint>
                        )}
                        {counter && <Counter design={'critical'} {...counter} />}
                        {badge && (
                            <div>
                                <Badge color={'miami10'} size={'s'} {...badge} />
                            </div>
                        )}
                        {extraText !== undefined && <BoxHeadingInfo>{extraContent()}</BoxHeadingInfo>}
                    </BoxHeading>
                    {(subtitle || info) && (
                        <BoxInfo>
                            {subtitle && <Subtitle>{subtitle}</Subtitle>}
                            {info && <Info>{info}</Info>}
                        </BoxInfo>
                    )}
                </BoxTopContent>
                {topRightSlot && <BoxTopRight>{topRightSlot}</BoxTopRight>}
            </BoxTop>
            {!disableDivider && <Divider color={color.primary.seattle.c30} />}
            {children && <BoxBottom>{children}</BoxBottom>}
        </Box>
    );
}

export const CardVersatile = forwardRef(CardInternal) as unknown as ((
    props: CardVersatileProps & RefAttributes<HTMLDivElement>
) => React.ReactElement) & {
    displayName: string;
    Group: typeof CardVersatileGroup;
};

CardVersatile.Group = CardVersatileGroup;

CardVersatile.displayName = 'CardVersatile';
