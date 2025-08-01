import { DSLocalizationProps } from '../Localization';

export interface TabsLocalization {
    'ds.tabs.rest'?: string;
}

export type TabsLocalizationProps = DSLocalizationProps<TabsLocalization>;

export const defaultTabsLocalization: Required<TabsLocalization> = {
    'ds.tabs.rest': 'Еще...',
};
