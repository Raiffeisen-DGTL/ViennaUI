import React from 'react';
import { Story, Meta } from 'storybook';
import { Tooltip, TooltipProps } from './Tooltip';
import { Input } from '../Input';
import { ThemeProvider } from 'styled-components';
import { Groups } from '../Groups';
import { ITrigger } from '@/Trigger';
import { Button } from '@/Button';

export default {
    title: 'Development/Tooltip',
    component: Tooltip,
} as Meta;

export const Overview: Story<TooltipProps<HTMLInputElement>> = (args) => {
    const [state, setState] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setState(false);
        });
    }, []);

    return (
        <div style={{ margin: '200px' }}>
            <Tooltip<HTMLInputElement>
                action='click'
                design='dark'
                offset={[0, 0]}
                visible={state}
                placement={'top'}
                content='tooltip'
                onVisibleChange={(event) => setState(event)}
                {...args}>
                {(ref) => <Input ref={ref} />}
            </Tooltip>
        </div>
    );
};

export const TooltipWithDelay: Story<TooltipProps<HTMLInputElement>> = (args) => {
    const [state, setState] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setState(false);
        });
    }, []);

    return (
        <Tooltip
            action='hover'
            mouseLeaveDelay={3000}
            mouseEnterDelay={2000}
            design='success'
            offset={[0, 0]}
            visible={state}
            placement={'bottom'}
            content='tooltip'
            onVisibleChange={(event) => setState(event)}
            {...args}>
            {(ref) => <Input ref={ref} />}
        </Tooltip>
    );
};

const theme = {
    tooltip: {
        custom: {
            backgroundColor: '#4fbeff',
        },
        wrapper: {
            custom: {
                border: '1px solid #4fbeff',
                borderRadius: '4px',
            },
        },
        arrow: {
            design: {
                light: {
                    background: '#4fbeff',
                    color: '#4fbeff',
                },
            },
        },
    },
};

export const TooltipWithTheme: Story<TooltipProps<HTMLSpanElement>> = (args) => {
    return (
        <ThemeProvider theme={theme}>
            <Tooltip content='tooltip' {...args}>
                {(ref) => <span ref={ref}>tooltip on span</span>}
            </Tooltip>
        </ThemeProvider>
    );
};

TooltipWithTheme.storyName = 'Tooltip with theme';

export const TooltipWithPosition: Story<TooltipProps<HTMLSpanElement>> = () => {
    const [state, setState] = React.useState({
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    });
    return (
        <Groups design='vertical'>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    border: '1px solid gray',
                    margin: '20px',
                }}>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div style={{ width: '100px', position: 'absolute', top: 0, left: 0 }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            left: 'calc(50% - 50px)',
                            top: 0,
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div style={{ width: '100px', position: 'absolute', top: 0, right: 0 }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            left: 'calc(50% - 50px)',
                            bottom: 0,
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            left: 0,
                            top: 'calc(50% - 40px)',
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            top: 'calc(50% - 40px)',
                            right: 0,
                        }}>
                        <Input />
                    </div>
                </Tooltip>
                <Tooltip design='dark' width={300} content={state.value} placement='auto'>
                    <div
                        style={{
                            width: '100px',
                            position: 'absolute',
                            top: 'calc(50% - 40px)',
                            left: 'calc(50% - 50px)',
                        }}>
                        <Input />
                    </div>
                </Tooltip>
            </div>
        </Groups>
    );
};

TooltipWithPosition.storyName = 'Точное позиционирование';

export const ManyTooltips: Story<TooltipProps<HTMLDivElement>> = () => {
    return (
        <Groups>
            {[...Array(500)].map((_, i) => (
                <Tooltip content='tooltip' placement='bottom' action='hover' design={'dark'}>
                    <div style={{ border: '1px solid red', width: 30, height: 30 }} />
                </Tooltip>
            ))}
        </Groups>
    );
};
ManyTooltips.storyName = 'Много тултипов';

export const OpenTooltip: Story<TooltipProps<HTMLDivElement>> = (args) => {
    const [state, setState] = React.useState(false);
    const ref = React.useRef<ITrigger>(null);
    return (
        <>
            <Groups>
                <Button onClick={() => ref.current?.open()}>Open</Button>
                <Button onClick={() => ref.current?.close()}>Close</Button>
            </Groups>
            <div style={{ marginTop: '60px', width: '200px' }}>
                <Tooltip<HTMLInputElement>
                    ref={ref}
                    action='click'
                    design='dark'
                    offset={[0, 0]}
                    visible={state}
                    placement={'top'}
                    content='tooltip'
                    onVisibleChange={(event) => setState(event)}
                    {...args}>
                    {(ref) => <Input ref={ref} />}
                </Tooltip>
            </div>
        </>
    );
};
