import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chips } from '../Chips';

describe('Chips', () => {
    const handler = jest.fn();

    const component = (
        <Chips onClick={handler} onPressEnter={handler}>
            <Chips.Item id='1' tabIndex={0}>
                First
            </Chips.Item>
            <Chips.Item id='2' tabIndex={0}>
                Second
            </Chips.Item>
            <Chips.Item id='3' tabIndex={0}>
                Third
            </Chips.Item>
        </Chips>
    );

    beforeEach(() => {
        handler.mockClear();
    });

    it('should change focus when press tab key', async () => {
        render(component);

        const [first, second, third] = screen.getAllByRole('option');

        expect(document.body).toHaveFocus();
        await userEvent.tab();
        expect(first).toHaveFocus();
        await userEvent.tab();
        expect(second).toHaveFocus();
        await userEvent.tab();
        expect(third).toHaveFocus();
        await userEvent.tab();
        expect(document.body).toHaveFocus();
    });

    it('shouldn`t change focus when press tab key and items haven`t tabindex', async () => {
        const componentWithoutTabindex = (
            <Chips>
                <Chips.Item id='1'>First</Chips.Item>
                <Chips.Item id='2'>Second</Chips.Item>
            </Chips>
        );

        render(componentWithoutTabindex);

        expect(document.body).toHaveFocus();
        await userEvent.tab();
        expect(document.body).toHaveFocus();
    });

    it('should call onclick when click to item', async () => {
        render(component);

        const chip = screen.getByRole('option', { name: /Second/i });

        await userEvent.click(chip);
        const [firstArg] = handler.mock.calls[0];

        expect(handler).toHaveBeenCalledTimes(1);
        expect(firstArg.target).toBe(chip);
        expect(firstArg.target.id).toBe('2');
    });

    it('should call onclick when press enter', async () => {
        render(component);
        const chip = screen.getByRole('option', { name: /First/i });

        await userEvent.tab();
        expect(chip).toHaveFocus();
        await userEvent.keyboard('[Enter]');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should call onclick when press space bar', async () => {
        render(component);

        const chip = screen.getByRole('option', { name: /First/i });

        await userEvent.tab();

        expect(chip).toHaveFocus();

        await userEvent.keyboard('[Space]');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should have checkbox roles when set ones to chips items', () => {
        const componentWithMultiActive = (
            <Chips active={['2', '3']} onClick={handler}>
                <Chips.Item id='1' tabIndex={0} role='checkbox'>
                    First
                </Chips.Item>
                <Chips.Item id='2' tabIndex={0} role='checkbox'>
                    Second
                </Chips.Item>
                <Chips.Item id='3' tabIndex={0} role='checkbox'>
                    Third
                </Chips.Item>
            </Chips>
        );

        render(componentWithMultiActive);

        const chips = screen.getAllByRole('checkbox');

        expect(chips).toHaveLength(3);
    });
});
