import React from 'react';
import { Story, Meta } from 'storybook';
import { Radio, RadioProps } from './Radio';
import { Groups } from '../Groups';

export default {
    title: 'Development/Radio',
    component: Radio,
} as Meta;

export const Overview: Story<RadioProps> = (args) => {
    const [state, setState] = React.useState('');

    return (
        <Groups>
            {Array.from(Array(4)).map((_, i) => {
                const id = (i + 1).toString();

                return (
                    <Radio
                        key={id}
                        checked={state === id}
                        name='group1'
                        value={id}
                        onChange={({ value }) => setState(value)}>
                        {'Radio #' + id}
                    </Radio>
                );
            })}
        </Groups>
    );
};

export const WithAdaptive: Story<RadioProps> = (args) => {
    return (
        <Radio disabled size={{ m: 'm', s: 'l' }} {...args}>
            Check
        </Radio>
    );
};

WithAdaptive.storyName = 'Адаптив';

export const ViewOnly: Story<RadioProps> = (args) => {
    return (
        <>
            <Groups>
                {Array.from(Array(4)).map((_, i) => {
                    const id = (i + 1).toString();

                    return (
                        <Radio viewOnly key={id} checked={'2' === id} name='group1' value={id}>
                            {'Radio #' + id}
                        </Radio>
                    );
                })}
            </Groups>
            <Groups>
                {Array.from(Array(4)).map((_, i) => {
                    const id = (i + 1).toString();
                    const checked = '2' === id;
                    if (checked) {
                        return (
                            <Radio viewOnly key={id} checked={checked} name='group1' value={id}>
                                {'Radio #' + id}
                            </Radio>
                        );
                    }
                    return '';
                })}
            </Groups>
            <Groups>
                {Array.from(Array(4)).map((_, i) => {
                    const id = (i + 1).toString();
                    const checked = '2' === id;
                    if (checked) {
                        return (
                            <Radio viewOnly viewOnlyDisableIcon key={id} checked={checked} name='group1' value={id}>
                                {'Radio #' + id}
                            </Radio>
                        );
                    }
                    return '';
                })}
            </Groups>
        </>
    );
};

export const RadioInvalid: Story<RadioProps> = (args) => {
    const [state, setState] = React.useState('');

    return (
        <Groups>
            {Array.from(Array(4)).map((_, i) => {
                const id = (i + 1).toString();

                return (
                    <Radio
                        key={id}
                        checked={state === id}
                        invalid
                        name='group1'
                        value={id}
                        onChange={({ value }) => setState(value)}>
                        {'Radio #' + id}
                    </Radio>
                );
            })}
        </Groups>
    );
};
