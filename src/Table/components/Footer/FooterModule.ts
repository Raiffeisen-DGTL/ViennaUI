import React from 'react';
import { Module, TableData } from '../../types';

export interface FooterConfig {
    templates: React.ReactNode;
}

export const FooterModule: Module<FooterConfig, undefined, TableData> = {
    name: 'footer',
    initConfig: ({ child }): FooterConfig => {
        return {
            templates: child,
        };
    },
};
