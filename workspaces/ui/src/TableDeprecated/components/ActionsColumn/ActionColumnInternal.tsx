import React from 'react';
import { ActionsColumn } from './ActionColumnInternal.styles';

export const ActionsColumnInternal = (props) => {
    const { children, item, ...attrs } = props;
    return <ActionsColumn {...attrs}>{children(item)}</ActionsColumn>;
};
