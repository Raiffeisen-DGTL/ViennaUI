import { ResponsiveProp } from '@/Utils/responsiveness';
import { generateSizeBySize, SizeType } from '@/Utils';
import { ViewOnlyProps } from '@/ViewOnly/ViewOnly';

export const getViewOnlySize = (size?: ResponsiveProp<SizeType>): ViewOnlyProps['size'] => {
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
