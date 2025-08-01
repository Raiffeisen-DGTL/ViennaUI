import styled from 'styled-components';
import { header } from 'vienna.ui-theme';
import { Tabs } from '../../Tabs';
import { isProperKey } from '../../Utils';

interface PropsTab {
    $align?: string;
    $size?: string;
}

export const Tab = styled(Tabs.Tab)<PropsTab>`
    ${({ $size, $align }) => {
        if (!$align || !$size || !isProperKey(header.tab.align, $align)) return;

        const size = header.tab.align[$align].size;

        return size[$size as keyof typeof size];
    }}
`;
