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
            <Drawer isOpen onClose={onClose}>
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

    xit('should  call onclose when click close button', () => {
        render(component);
        const closeIcon = screen.getByRole('button', { name: /Close/i });

        userEvent.click(closeIcon);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    xit('should  call onclose when click enter on close icon', () => {
        render(component);
        userEvent.keyboard('{enter}');

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
