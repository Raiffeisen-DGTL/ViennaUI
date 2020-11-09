import React from 'react';
import {
    Box,
    CircleSVG,
    CircleProgress,
    Line,
    Progress,
    CircleBack,
    CircleBox,
    CircleContent,
} from './Progressbar.styles';
import { Loading } from './Loading';

interface Props {
    view?: 'line' | 'circle';
    size?: 's' | 'm' | 'l';
    color?:
        | 'moscow100'
        | 'osaka100'
        | 'accent'
        | 'geneva100'
        | 'oslo120'
        | 'seattle140'
        | 'oslo100'
        | 'miami100'
        | 'sochi100'
        | 'paris100'
        | 'tokyo100'
        | 'dubai100'
        | 'nice100';
    // design is depricated property
    design?: 'red' | 'orange' | 'yellow' | 'green' | 'darkBlue' | 'darkGray' | 'lightBlue';
    value: number;
    /** Shows loading state, if view is 'line' */
    loading?: boolean;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type ProgressbarProps = Props & HTMLAttributeProps;

export const Progressbar: React.FC<ProgressbarProps> = (props: React.PropsWithChildren<ProgressbarProps>) => {
    const { size, view, color, design, value, children, loading, ...attrs } = props;

    // Маппинг старых значений цвета на новые. Удалить по окончанию поддержки старых значений цветов
    const designToColorMapping = {
        red: 'moscow100',
        orange: 'osaka100',
        yellow: 'accent',
        green: 'geneva100',
        darkBlue: 'oslo120',
        darkGray: 'seattle140',
        lightBlue: 'oslo100',
    };

    // Функция для маппинга старых значений цвета на новые. Удалить по окончанию поддержки старых значений цветов
    const getColor = () => {
        if (design) {
            // eslint-disable-next-line no-console
            console.warn(
                `Свойство design устарело. В следующих версиях ДС оно будет удалено. Пожалуйста, используйте вместо него свойство color.`
            );

            return designToColorMapping[design];
        }

        return color;
    };

    switch (view) {
        case 'circle': {
            return (
                <CircleBox {...attrs}>
                    <CircleSVG size={size}>
                        <CircleBack size={size} />
                        {/* Для того чтобы удалить поддержку старых цветов нужно заменить color={getColor()} на color={color} */}
                        <CircleProgress size={size} color={getColor()} value={value} />
                    </CircleSVG>
                    {children && <CircleContent size={size}>{children}</CircleContent>}
                </CircleBox>
            );
        }
        case 'line':
        default: {
            return (
                <Box {...attrs} size={size}>
                    <Line />
                    {/* Для того чтобы удалить поддержку старых цветов нужно заменить color={getColor()} на color={color} */}
                    <Progress width={value > 100 ? 100 : value} color={getColor()}>
                        {loading && <Loading />}
                    </Progress>
                </Box>
            );
        }
    }
};

Progressbar.displayName = 'Progressbar';
Progressbar.defaultProps = {
    view: 'line',
    size: 'm',
    color: 'oslo120',
};

export default Progressbar;
