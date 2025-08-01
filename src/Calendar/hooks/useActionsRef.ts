import React, { useImperativeHandle } from 'react';
import { useCalendarContext } from '../Context';
import { FocusActions, ViewMode } from '../types';
import { getButtonMap } from './utils';

interface Props {
    ref?: React.MutableRefObject<FocusActions>;
    viewMode: ViewMode;
}

export const useActionsRef = ({ ref, viewMode }: Props) => {
    const { footerButtonNodes, setFocusedHeader, setFocusedGrid, setFocusedFooter } = useCalendarContext();

    useImperativeHandle(ref, () => ({
        setFocusHeader: () => {
            setFocusedHeader(getButtonMap(viewMode)[0]);
        },
        setFocusGrid: () => {
            setFocusedGrid(0);
        },
        setFocusFooter: () => {
            const hasTodayButton = !!footerButtonNodes.current.todayButton;

            if (hasTodayButton) {
                setFocusedFooter('todayButton');
            }
        },
    }));
};
