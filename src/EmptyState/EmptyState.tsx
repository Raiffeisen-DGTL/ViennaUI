import React, { useMemo, FC } from 'react';
import { Spinner, SpinnerProps } from '../Spinner';
import { Box, Content, Row, Actions, Title, Description } from './EmptyState.styles';
import { BoxStyled } from '../Utils/styled';

export interface EmptyStateProps extends BoxStyled<typeof Box, {}> {
    /** Состояние загрузки. true, если отображать spinner */
    loading?: boolean;
    spinnerProps?: SpinnerProps;
}

export const EmptyState: FC<EmptyStateProps> & {
    Title: typeof Title;
    Description: typeof Description;
    Actions: typeof Actions;
} = (props) => {
    const { loading = false, spinnerProps, children, ...attrs } = props;

    const content = useMemo(() => {
        return React.Children.map(children, (item, index) => (item ? <Row key={index}>{item}</Row> : null));
    }, [children]);

    return (
        <Box {...attrs}>
            <Content>
                {loading && (
                    <Row>
                        <Spinner {...spinnerProps} />
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
EmptyState.Actions = Actions;
