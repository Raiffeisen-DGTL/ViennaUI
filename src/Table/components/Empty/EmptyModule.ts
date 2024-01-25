import React from 'react';
import { Module } from '../../types';

export interface EmptyConfig {
    templates: React.ReactNode;
}

export const EmptyModule: Module = {
    name: 'empty',
    initConfig: ({ child }): EmptyConfig => {
        return {
            templates: child,
        };
    },
};
