import React, { ReactElement, ReactNode } from 'react';
import { SizeType } from '../types';
import { ResponsiveProp } from '../responsiveness';
import { generateSizeBySize } from '../generateSizeBySize';

export interface Postfix {
    up: ReactNode;
    down?: ReactNode;
}

export * from './useSelect';

export const reactNodeHasNowrap = <T>(elem: ReactNode | T): elem is ReactElement<{ __nowrap__: boolean }> => {
    return React.isValidElement(elem)
        ? Boolean((elem as ReactElement<{ __nowrap__?: boolean }>).props?.__nowrap__)
        : false;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const omitNoWrapProp = <T extends { __nowrap__?: boolean }>({ __nowrap__, ...props }: T) => props;

export const getDropListSizeBySelectSize = (
    size?: ResponsiveProp<SizeType>
): ResponsiveProp<SizeType<'s' | 'm' | 'l'>> => {
    return generateSizeBySize<SizeType, SizeType<'s' | 'm' | 'l'>>(size, (size) => {
        switch (size) {
            case 'xs':
                return 's';
            case 'xl':
            case 'xxl':
                return 'l';
            default:
                return 'm';
        }
    });
};

export const getIcon = (flag: boolean, icons: Postfix, size: ResponsiveProp<SizeType>, randomKey: boolean = true) => {
    const icon = flag ? icons.up : (icons.down ?? icons.up);
    return React.cloneElement(icon as ReactElement, { size, ...(randomKey && { key: Math.random() }) });
};
