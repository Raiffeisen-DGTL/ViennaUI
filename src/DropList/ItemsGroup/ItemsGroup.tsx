import React, { PropsWithChildren, ReactElement, forwardRef, isValidElement } from 'react';
import { Subheader } from './ItemsGroup.styles';
import { ItemProps } from '../Item';
import { Breakpoints, ResponsiveProp } from '../../Utils/responsiveness';

export interface ItemsGroupProps<B = Breakpoints> extends PropsWithChildren {
    label: string;
    size?: ResponsiveProp<'s' | 'm' | 'l', B>;
}

const ItemsGroupInternal = <B,>(
    { children, label, size }: ItemsGroupProps<B>,
    ref: React.ForwardedRef<HTMLDivElement>
) => (
    <div ref={ref}>
        <Subheader
            $size={size}
            onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
            }}>
            {label}
        </Subheader>
        {React.Children.map(children as ReactElement[], (child: ReactElement<ItemProps>) =>
            isValidElement(child) ? React.cloneElement(child, { size }) : null
        )}
    </div>
);

export const ItemsGroup = forwardRef(ItemsGroupInternal) as (<B = Breakpoints>(
    props: ItemsGroupProps<B> & React.RefAttributes<HTMLDivElement>
) => ReturnType<typeof ItemsGroupInternal>) & {
    displayName?: string;
};

ItemsGroup.displayName = 'ItemsGroup';
