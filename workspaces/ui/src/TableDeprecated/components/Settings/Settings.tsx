import React from 'react';

export interface SettingsProps {
    children?: React.ReactNode;
}

export const Settings: React.FC<SettingsProps> = (props) => {
    return <>{props.children}</>;
};

Settings.displayName = 'Settings';
export default Settings;
