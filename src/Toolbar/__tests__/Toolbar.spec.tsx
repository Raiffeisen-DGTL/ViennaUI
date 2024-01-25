import React from 'react';
import { Screw } from '@fcc/icons';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toolbar } from '../index';

describe('Toolbar', () => {
    it('should pass any props', () => {
        const props = {
            className: 'className',
            id: 'id',
            title: 'title',
        };

        const component = (
            <Toolbar {...props}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
                <Toolbar.Operation label={'Option 4'} />
            </Toolbar>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });

    xit('should onClick on operation when click', () => {
        const fn = jest.fn();
        render(<Toolbar.Operation id={'id'} name={'name'} icon={<Screw />} label={'Action 5'} onClick={fn} />);

        const operation = screen.getByRole('button');
        userEvent.click(operation);

        expect(fn).toHaveBeenCalledWith(expect.any(Object), { id: 'id', name: 'name' });
    });

    xit('should check the functionality of hover to the operation', () => {
        render(
            <Toolbar.Operation label={'Action 3'} data-marker='action'>
                <Toolbar.Operation label={'Option 1'} data-marker='option' />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
        );

        const action = screen.getByTestId('action');
        const option = screen.queryByTestId('option');
        expect(option).not.toBeInTheDocument();

        userEvent.hover(action);
        expect(screen.queryByTestId('option')).toBeInTheDocument();

        userEvent.unhover(action);
        expect(screen.queryByTestId('option')).not.toBeInTheDocument();
    });

    xit('should check the functionality of hover for nested operation', () => {
        render(
            <Toolbar.Operation label={'Action 3'} data-marker='action'>
                <Toolbar.Operation label={'Option 1'} data-marker='option'>
                    <Toolbar.Operation label={'Option A'} data-marker='option-a' />
                    <Toolbar.Operation label={'Option B'} />
                </Toolbar.Operation>
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
        );

        const action = screen.getByTestId('action');

        userEvent.hover(action);
        const option = screen.getByTestId('option');

        userEvent.hover(option);
        expect(screen.queryByTestId('option-a')).toBeInTheDocument();

        userEvent.unhover(option);
        userEvent.unhover(action);
        expect(screen.queryByTestId('option')).not.toBeInTheDocument();
        expect(screen.queryByTestId('option-a')).not.toBeInTheDocument();
    });

    it('should check that the functionality of click works with "loading" and "disabled" props', () => {
        const fn1 = jest.fn();
        const fn2 = jest.fn();
        const fn3 = jest.fn();

        render(
            <>
                <Toolbar.Operation
                    label={'Option 1'}
                    onClick={fn1}
                    data-testid='option-1'
                    id={'id1'}
                    name={'name1'}
                    loading
                />
                <Toolbar.Operation
                    label={'Option 2'}
                    onClick={fn2}
                    data-testid='option-2'
                    id={'id2'}
                    name={'name3'}
                    disabled
                />
                <Toolbar.Operation label={'Option 3'} onClick={fn3} data-testid='option-3' id={'id3'} name={'name3'} />
            </>
        );

        const option1 = screen.getByTestId('option-1');
        const option2 = screen.getByTestId('option-2');
        const option3 = screen.getByTestId('option-3');

        fireEvent.click(option1);
        expect(fn1).not.toHaveBeenCalled();

        fireEvent.click(option2);
        expect(fn2).not.toHaveBeenCalled();

        fireEvent.click(option3);
        expect(fn3).toHaveBeenCalled();
    });
});
