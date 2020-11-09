import React, { HTMLAttributes } from 'react';
import { Box, ImageLayer } from './Avatar.styles';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    /** Если src недоступен, отобразится то, что лежит в children */
    children?: React.ReactNode;
    /** Доступные размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    /** Ссылка на изображение */
    src?: string;
    /** Смещение изображения по горизонтали */
    align?: 'left' | 'center' | 'right';
    /** Смещение изображения по вертикали */
    valign?: 'top' | 'center' | 'bottom';
}

export const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
    const { src, children, align = 'center', valign = 'center', size = 'm', ...attrs } = props;

    return (
        <Box size={size} {...attrs}>
            {children}
            <ImageLayer src={src} align={align} valign={valign} />
        </Box>
    );
};

Avatar.defaultProps = {
    size: 'm',
    align: 'center',
    valign: 'center',
};

Avatar.displayName = 'Avatar';
export default Avatar;
