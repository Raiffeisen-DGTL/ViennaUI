import React from 'react';
import { Module } from '../../types';

export interface FooterConfig {
    templates: React.ReactNode;
}

export const FooterModule: Module = {
    name: 'footer',
    initConfig: ({ child }): FooterConfig => {
        return {
            templates: child,
        };
    },
};
