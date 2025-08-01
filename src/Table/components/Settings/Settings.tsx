import React, { ReactNode } from 'react';

export type SettingsProps = {
    /* Заголовок настроек таблицы (по умолчанию отсутствует) */
    settingsTitle?: ReactNode;
    children?: ReactNode | undefined;
    testId?: {
        button?: string;
    };
};
export const Settings = (props: SettingsProps) => {
    return <>{props.children}</>;
};

Settings.displayName = 'Settings';
