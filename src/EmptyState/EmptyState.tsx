import React, { useMemo, FC, Fragment, ComponentType } from 'react';
import { Spinner, SpinnerProps } from '../Spinner';
import { Box, Content, Row, Actions, Title, Image, Description, Column, BoxProps } from './EmptyState.styles';
import { BoxStyled } from '../Utils/styled';
import { isProperKey } from '../Utils';

type InnerComponent = React.ReactComponentElement<ComponentType>;
export type EmptyStateAlignment = 'center' | 'left';
export type EmptyStateDirection = 'vertical' | 'horizontal';

interface EmptyStateComponents {
    Title: typeof Title;
    Description: typeof Description;
    Image: typeof Image;
    Actions: typeof Actions;
}

const mapComponentNameForGridArea = { IconContainer: Image.displayName };
const componentsWithSmallMargin = [Title.displayName];

export interface EmptyStateProps extends Omit<BoxStyled<typeof Box, object>, keyof BoxProps> {
    /** Состояние загрузки. true, если отображать spinner */
    loading?: boolean;
    /** Выравнивание текста: по центру / по левому краю */
    alignment?: EmptyStateAlignment;
    /** Направление: вертикальное / горизонтальное */
    direction?: EmptyStateDirection;
    /** Опции лоадера */
    spinnerProps?: SpinnerProps;
}

export const EmptyState: FC<EmptyStateProps> & EmptyStateComponents = (props) => {
    const { alignment = 'center', direction = 'vertical', spinnerProps, children, loading = false, ...attrs } = props;

    const isHorizontalDirection = direction === 'horizontal';
    const isLeftAlignment = alignment === 'left' || isHorizontalDirection;

    const content = useMemo(() => {
        // первая колонка для image / icon, вторая колонка для остальных компонентов
        const columns: [InnerComponent[], InnerComponent[]] = [[], []];

        // распределяем по колонкам, чтобы сделать горизонтальный режим
        React.Children.forEach(children as InnerComponent[], (item) => {
            const type = item?.type;
            const displayName =
                String(type) === 'img'
                    ? Image.displayName
                    : (item as { type?: { displayName: string } })?.type?.displayName;

            if (item && displayName) {
                const componentName = isProperKey(mapComponentNameForGridArea, displayName)
                    ? (mapComponentNameForGridArea[displayName] ?? displayName)
                    : displayName;

                const isSmallMargin = componentsWithSmallMargin.includes(componentName);

                columns[componentName === Image.displayName ? 0 : 1].push(
                    <Row $isSmallMargin={isSmallMargin}>{item}</Row>
                );
            }
        });

        return columns
            .filter((rows) => rows.length > 0)
            .map((rows, rowIndex) => (
                <Column key={rowIndex}>
                    {rows.map((item, columnIndex) => (
                        <Fragment key={columnIndex}>{item}</Fragment>
                    ))}
                </Column>
            ));
    }, [children]);

    return (
        <Box $isLeftAlignment={isLeftAlignment} $isHorizontalDirection={isHorizontalDirection} {...attrs}>
            <Content>
                {loading && (
                    <Row>
                        <Spinner size='xl' color='primary' {...spinnerProps} />
                    </Row>
                )}
                {content}
            </Content>
        </Box>
    );
};

EmptyState.displayName = 'EmptyState';
EmptyState.Title = Title;
EmptyState.Description = Description;
EmptyState.Image = Image;
EmptyState.Actions = Actions;
