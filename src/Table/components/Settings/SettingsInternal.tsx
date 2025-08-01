import React, { PropsWithChildren, ReactNode, useRef, useState } from 'react';
import { SettingsIcon } from 'vienna.icons';
import { border } from 'vienna.tokens';
import { ThemeProvider } from 'vienna.ui-primitives';
import { Popover } from '../../../Popover';
import { Text } from '../../../Typography';
import { Box, SettingsBackground } from './SettingsInternal.styles';
import { Alarm, Button, Flex, ITrigger } from '../../..';
import { TableSize } from '../../types';
import { SettingsProps } from './Settings';

export const defaultTableSettingsTestId: SettingsProps['testId'] = {
    button: 'table_settings_button',
};

interface SettingsInternalProps {
    size: TableSize;
    showAlarm?: boolean;
    settingsTitle?: ReactNode;
    testId?: SettingsProps['testId'];
}

const theme = {
    popover: {
        message: {
            custom: {
                padding: '24px',
                borderRadius: border.radius.xl,
            },
        },
    },
};

export const SettingsInternal: React.FC<PropsWithChildren<SettingsInternalProps>> = (props) => {
    const { size, showAlarm, children, settingsTitle, testId = defaultTableSettingsTestId } = props;
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement & ITrigger>(null);
    const handleButtonClick = () => {
        setVisible((prev) => !prev);
        visible && ref.current?.close();
    };
    const onClosePopover = () => setVisible(false);

    return (
        <Box $size={size}>
            <ThemeProvider theme={theme}>
                <Popover<HTMLButtonElement>
                    placement='bottom-end'
                    header={
                        settingsTitle && (
                            <Text size='xxl' weight='bold'>
                                {settingsTitle}
                            </Text>
                        )
                    }
                    content={children}
                    width={288}
                    ref={ref}
                    noClose
                    onClose={onClosePopover}>
                    {(ref) => (
                        <SettingsBackground>
                            <Button
                                forwardedRef={ref}
                                design='ghost'
                                size='xs'
                                data-id='table-settings-button'
                                data-testid={testId?.button}
                                onClick={handleButtonClick}>
                                <Flex>
                                    <SettingsIcon size='m' />
                                    {showAlarm && (
                                        <Alarm position={'absolute'} top={'-4px'} left={'16px'} design='accent' />
                                    )}
                                </Flex>
                            </Button>
                        </SettingsBackground>
                    )}
                </Popover>
            </ThemeProvider>
        </Box>
    );
};

export default SettingsInternal;
