import React from 'react';
import { Module, TableData } from '../../types';

export interface EmptyConfig {
    templates: React.ReactNode;
}

export const EmptyModule: Module<EmptyConfig, undefined, TableData> = {
    name: 'empty',
    initConfig: ({ child }): EmptyConfig => {
        return {
            templates: child,
        };
    },
};
