import React from 'react';
import { Module, TableData } from '../../types';
import { reactNodeIsComponent } from '@/Utils';
import { Settings, SettingsProps } from './Settings';

export interface SettingsConfig {
    template: React.ReactNode;
    testId?: SettingsProps['testId'];
}

export const SettingsModule: Module<SettingsConfig, undefined, TableData> = {
    name: 'settings',
    initConfig: ({ child }): SettingsConfig => {
        const testId = reactNodeIsComponent(child, Settings) ? child.props.testId : undefined;
        return {
            template: child,
            testId,
        };
    },
};
