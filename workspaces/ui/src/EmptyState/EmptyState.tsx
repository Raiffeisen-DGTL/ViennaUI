import React, { useMemo } from 'react';
import { Spinner } from '../Spinner';
import { Box, Content, Row, Actions, Title, Description } from './EmptyState.styles';

export type EmptyStateProps = Props & HTMLAttributeProps;

interface Props {
    /** Состояние загрузки. true, если отображать spinner */
    loading?: boolean;
}

interface HTMLAttributeProps {
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
}

interface Children {
    Title: React.FC;
    Description: React.FC;
    Actions: React.FC;
}

export const EmptyState: React.FC<EmptyStateProps> & Children = (props): JSX.Element => {
    const { loading, children, ...attrs } = props;

    const content = useMemo(() => {
        return React.Children.map(children, (item, index) => <Row key={index}>{item}</Row>);
    }, [children]);

    return (
        <Box {...attrs}>
            <Content>
                {loading && (
                    <Row>
                        <Spinner />
                    </Row>
                )}
                {content}
            </Content>
        </Box>
    );
};

EmptyState.displayName = 'EmptyState';
EmptyState.defaultProps = {
    loading: false,
};
EmptyState.Title = Title;
EmptyState.Description = Description;
EmptyState.Actions = Actions;

export default EmptyState;
