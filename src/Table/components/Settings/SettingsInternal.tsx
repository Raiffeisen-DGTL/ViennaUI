import React, { PropsWithChildren } from 'react';
import { Settings } from '@fcc/icons';
import { ThemeProvider } from '@fcc/ui-primitives';
import { Popover } from '../../../Popover';
import { Button } from '../../../Button';
import { Text } from '../../../Typography';
import { useTableLocalization } from '../Context';
import { Box } from './SettingsInternal.styles';

interface SettingsInternalProps {
    size: any;
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

export const SettingsInternal: React.FC<PropsWithChildren<SettingsInternalProps>> = (props) => {
    const { size, children } = props;
    const localize = useTableLocalization();
    return (
        <Box $size={size}>
            <ThemeProvider theme={theme}>
                <Popover<HTMLButtonElement>
                    placement='auto'
                    header={
                        <Text size='xxl' weight='bold'>
                            {localize('ds.table.settings')}
                        </Text>
                    }
                    content={children}
                    width={288}
                    noClose>
                    {(ref) => (
                        <Button forwardedRef={ref} design='ghost' size='xs' data-id='table-settings-button'>
                            <Settings size='m' />
                        </Button>
                    )}
                </Popover>
            </ThemeProvider>
        </Box>
    );
};

export default SettingsInternal;
