import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../Button/Button';
import { Drawer } from '../Drawer';

describe('Drawer', () => {
    const onClick = jest.fn();
    const onClose = jest.fn();

    const component = (
        <>
            <Drawer isOpen testId={{ btnClose: 'btnClose' }} onClose={onClose}>
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                        <Drawer.SubTitle>Drawer SubHeader</Drawer.SubTitle>
                    </Drawer.Head>
                    <Drawer.Body>Drawer body</Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={onClick}>Close</Button>
                    </Drawer.Footer>
                </Drawer.Layout>
            </Drawer>
        </>
    );

    it('should  call onclose when click close button', async () => {
        render(component);
        const closeBtn = screen.getByRole('button', { name: /Close/i });

        await userEvent.click(closeBtn);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should  call onclose when click enter on close icon', async () => {
        const { getByTestId } = render(component);
        const closeIcon = getByTestId('btnClose');
        await userEvent.click(closeIcon);

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
