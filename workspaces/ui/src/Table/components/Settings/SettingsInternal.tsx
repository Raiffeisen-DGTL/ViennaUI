import React from 'react';
import { Popover, Button, Text } from 'vienna-ui';
import { Settings1 } from 'vienna.icons';
import { ThemeProvider } from 'vienna.ui-primitives';
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

    return (
        <Box size={size}>
            <ThemeProvider theme={theme}>
                <Popover
                    anchor='bottom'
                    header={
                        <Text size='xxl' weight='bold'>
                            Настройка таблицы
                        </Text>
                    }
                    content={children}
                    width={288}
                    noClose>
                    <Button design='ghost' size='xs'>
                        <Settings1 size='m' />
                    </Button>
                </Popover>
            </ThemeProvider>
        </Box>
    );
};

export default SettingsInternal;
