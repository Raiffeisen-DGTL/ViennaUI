import styled from 'styled-components';
import { Tabs } from '../../Tabs';
import { getPresets } from '../../Utils/styling';

const tabPresets = getPresets('header.tab', {
    align: ({ $align, $size }) => `header.tab.align.${$align}.size.${$size}`,
});

interface PropsTab {
    $align?: string;
}

export const Tab = styled(Tabs.Tab)<PropsTab>`
    ${tabPresets.align}
`;
