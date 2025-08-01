import React from 'react';
import { SidebarDesign, SidebarFooterItem } from '../types';
import { Item } from '../Item';
import { FooterIcon } from '../Item/Item.styles';

interface SidebarFooterItemInnerProps extends SidebarFooterItem {
    design?: SidebarDesign;
    collapsed?: boolean;
}

export const FooterItem = ({ icon, design, testId, ...attrs }: SidebarFooterItemInnerProps) => {
    const prefix = icon ? (
        <FooterIcon size='l' type='squircle' data-testid={testId?.footerIcon}>
            {icon}
        </FooterIcon>
    ) : undefined;

    return <Item {...attrs} design={design} prefix={prefix} draggable={false} isFooterItem testId={testId} />;
};
