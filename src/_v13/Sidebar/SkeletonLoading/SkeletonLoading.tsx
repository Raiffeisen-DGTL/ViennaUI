import React from 'react';

import { Skeleton } from '@/Skeleton';
import { SidebarDesign, SkeletonLoadingConfig } from '../types';
import {
    CollapseContainer,
    Container,
    FooterContainer,
    ItemContainer,
    SkeletonPlaceholder,
} from './SkeletonLoading.styles';

const WIDTHS = [69, 100, 69, 100, 90, 79, 69, 90, 79, 90, 69, 90];

const getItemWidth = (i: number, shouldShrink: boolean) => WIDTHS[i % WIDTHS.length] - (shouldShrink ? 10 : 0) + '%';

interface SkeletonLoadingProps extends SkeletonLoadingConfig {
    design: SidebarDesign;
    collapsed?: boolean;
}

export const SkeletonLoading = ({
    design,
    collapsed,
    itemCount = 11,
    itemIcon = false,
    collapseIcon = false,
    footer = false,
}: SkeletonLoadingProps) => {
    return (
        <>
            {collapseIcon && (
                <CollapseContainer $collapsed={collapsed}>
                    <Skeleton mode={design} design='square' />
                </CollapseContainer>
            )}

            <Container>
                {Array.from(Array(itemCount)).map((_, i) => (
                    <ItemContainer key={i} $collapsed={collapsed}>
                        {itemIcon && <Skeleton mode={design} design='square' />}

                        {collapsed && !itemIcon && <SkeletonPlaceholder />}

                        {!collapsed && <Skeleton mode={design} design='line' width={getItemWidth(i, itemIcon)} />}
                    </ItemContainer>
                ))}
            </Container>

            {footer && (
                <FooterContainer $collapsed={collapsed}>
                    <Skeleton mode={design} size='l' design={collapsed ? 'square' : 'line'} width='62%' />
                    <Skeleton mode={design} size='l' design={collapsed ? 'square' : 'line'} width='74%' />
                </FooterContainer>
            )}
        </>
    );
};
