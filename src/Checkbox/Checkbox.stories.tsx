import React from 'react';
import { Story, Meta } from 'storybook';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Groups } from '../Groups';

export default {
    title: 'Development/Checkbox',
    component: Checkbox,
} as Meta;

export const Overview: Story<CheckboxProps> = (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox checked={checked} onChange={()=>setChecked(!checked)} size={'l'} {...args}>
            Checkbox
        </Checkbox>
    );
};

export const MultipleCheckboxes: Story<CheckboxProps> = () => {
    const [state, setState] = React.useState({
        checked: false,
        checked2: true,
        checked3: false,
    });
    return (
        <Groups>
            <Checkbox checked={state.checked} onChange={(e) => setState({ ...state, checked: !!e.target.value })}>
                Checkbox
            </Checkbox>
            <Checkbox checked={state.checked2} onChange={(e) => setState({ ...state, checked2: !!e.target.value })}>
                Checkbox
            </Checkbox>
            <Checkbox checked={state.checked3} onChange={(e) => setState({ ...state, checked3: !!e.target.value })}>
                Checkbox
            </Checkbox>
        </Groups>
    );
};
MultipleCheckboxes.storyName = 'Группа чекбоксов';

export const WithAdaptive: Story<CheckboxProps> = (args) => {
    return (
        <Checkbox size={{ s: 's', m: 'm', l: 'l' }} {...args}>
            Checkbox
        </Checkbox>
    );
};

WithAdaptive.storyName = 'Пример адаптива';

export const PlaywrightWithCases: Story<CheckboxProps> = (args) => {
    return (
        <Groups>
            <Checkbox size={'s'} />
            <Checkbox name='checkbox' invalid />
            <Checkbox active />
            <Checkbox disabled />
            <Checkbox disabled checked />
            <Checkbox checked size={'m'}>
                Checkbox
            </Checkbox>
            <Checkbox size={'l'}>Checkbox</Checkbox>
        </Groups>
    );
};

PlaywrightWithCases.storyName = 'Для тестирования';
