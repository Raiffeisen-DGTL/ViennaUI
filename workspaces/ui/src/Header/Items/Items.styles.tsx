import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Tabs } from '../../Tabs';

const tabPresets = getPresets('header.tab', {
    align: ({ align, size }) => `header.tab.align.${align}.size.${size}`,
});

export const Tab: any = styled(Tabs.Tab)`
    ${tabPresets.align}
`;

export const SearchContainer = styled.div`
    padding: 16px;
    background-color: white;
`;
