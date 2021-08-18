import React from 'react';
import { Module } from '../../types';

export interface SettingsConfig {
    template: React.ReactNode;
}

export const SettingsModule: Module = {
    name: 'settings',
    initConfig: ({ child }): SettingsConfig => {
        return {
            template: child,
        };
    },
};
