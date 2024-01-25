import React, { PropsWithChildren } from 'react';

export const Settings: React.FC<PropsWithChildren> = (props) => {
    return <>{props.children}</>;
};

Settings.displayName = 'Settings';
