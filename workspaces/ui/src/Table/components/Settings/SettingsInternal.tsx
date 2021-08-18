import React from 'react';
import { Popover, Button, Text } from 'vienna.ui';
import { Settings } from 'vienna.icons';
import { ThemeProvider } from 'vienna.ui-primitives';
import { useTableLocalization } from '../Context';
import { Box } from './SettingsInternal.styles';

interface SettingsInternalProps {
    size;
    children: React.ReactNode;
}

const theme = {
    popover: {
        message: {
            custom: {
                padding: '24px',
            },
        },
    },
};

export const SettingsInternal: React.FC<SettingsInternalProps> = (props) => {
    const { size, children } = props;

    const localize = useTableLocalization();

    return (
        <Box size={size}>
            <ThemeProvider theme={theme}>
                <Popover
                    anchor='bottom'
                    header={
                        <Text size='xxl' weight='bold'>
                            {localize('ds.table.settings')}
                        </Text>
                    }
                    content={children}
                    width={288}
                    noClose>
                    <Button design='ghost' size='xs' data-id='table-settings-button'>
                        <Settings size='m' />
                    </Button>
                </Popover>
            </ThemeProvider>
        </Box>
    );
};

export default SettingsInternal;
