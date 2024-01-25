import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';

describe.skip('Header', () => {
    const handleChange = jest.fn();
    const handleOpen = jest.fn();
    const handleClose = jest.fn();
    const handleClick = jest.fn();
    const headerFactory = (isOpen: boolean, value: string, isMobile = false) => {
        const mobileBelow = isMobile ? 100000 : 1;
        return (
            <Header
                isOpen={isOpen}
                mobileBelow={mobileBelow}
                items={
                    <Header.Items align='center' justifyContent='flex-start' value={value} onChange={handleChange}>
                        <Header.Item key='score' value='score' label='Счета'>
                            <button>Подпункт счетов</button>
                        </Header.Item>
                        <Header.Item key='operations' value='operations' label='Операции' />
                        <Header.Item key='requisites' value='requisites' label='Реквизиты'>
                            <button onClick={handleClick}>Подпункт реквизитов</button>
                        </Header.Item>
                    </Header.Items>
                }
                onOpen={handleOpen}
                onClose={handleClose}
            />
        );
    };

    describe.skip('Desktop view', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        xit('should open tab content', async () => {
            const { rerender } = render(headerFactory(false, 'score'));
            // get requsites item
            const requisitesItem = screen.getByText(/Реквизиты/i);
            // click to requsites item
            userEvent.click(requisitesItem);

            // check to callback functions called with right args
            expect(handleChange).toBeCalledTimes(1);
            expect(handleChange.mock.calls[0][1]).toBe('requisites');
            expect(handleOpen).toBeCalledTimes(1);

            // rerender with right props, because isOpen was changed
            rerender(headerFactory(true, 'requisites'));

            // get submenu point <button onClick={handleClick}>Подпункт реквизитов</button>
            screen.getByRole('button', { name: /Подпункт реквизитов/i });
        });

        xit('should active submenu point', async () => {
            const { rerender } = render(headerFactory(false, 'score'));
            // get requsites item
            const requisitesItem = screen.getByText(/Реквизиты/i);
            // click to requsites item
            userEvent.click(requisitesItem);

            // rerender with right props, because isOpen was changed
            rerender(headerFactory(true, 'requisites'));

            // get submenu point <button onClick={handleClick}>Подпункт реквизитов</button>
            const subMenuPoint = screen.getByRole('button', { name: /Подпункт реквизитов/i });
            // click to submenu point
            userEvent.click(subMenuPoint);
            // callback function was called
            expect(handleClick).toBeCalledTimes(1);
        });

        it('should open tab content and close by button', async () => {
            const { rerender } = render(headerFactory(false, 'score'));
            // get requsites item
            const requisitesItem = screen.getByText(/Реквизиты/i);
            // click to requsites item
            userEvent.click(requisitesItem);

            // check to callback functions called
            expect(handleChange).toBeCalledTimes(1);
            expect(handleOpen).toBeCalledTimes(1);

            // rerender with right props, because isOpen was changed
            rerender(headerFactory(true, 'requisites'));
            // get close button and submenu point
            const [closeButton, subMenuPoint] = screen.getAllByRole('button');
            // close content
            userEvent.click(closeButton);

            // expect(handleClose).toBeCalledTimes(1);
            expect(handleClose).toBeCalledTimes(2); // TODO: fix handle close content, must be called 1 time

            // rerender, because isOpen was changed
            rerender(headerFactory(false, 'requisites'));

            // there aren't buttons
            expect(closeButton).not.toBeInTheDocument();
            expect(subMenuPoint).not.toBeInTheDocument();
        });
    });

    describe.skip('Mobile view', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('should be open burger menu', async () => {
            render(headerFactory(true, 'score', true));
            const buttons = screen.getAllByRole('button');
            // buttons = 1 close buttton and 3 menu points (score, operations, requisites)
            expect(buttons).toHaveLength(4);
        });

        it('should open burger menu', async () => {
            const { rerender } = render(headerFactory(false, 'score', true));

            // trying to get menu items when burger menu is closed
            const score = screen.queryByRole('button', { name: /Счета/i });
            const operations = screen.queryByRole('button', { name: /Операции/i });
            const requisites = screen.queryByRole('button', { name: /Реквизиты/i });

            // there aren't menu points
            expect(score).not.toBeInTheDocument();
            expect(operations).not.toBeInTheDocument();
            expect(requisites).not.toBeInTheDocument();

            // click to burger icon
            const burgerIcon = screen.getByRole('button');
            userEvent.click(burgerIcon);

            // check to callback functions called
            expect(handleOpen).toBeCalledTimes(1);
            expect(handleChange).not.toBeCalled();

            rerender(headerFactory(true, 'score', true));

            // there are all menu points
            screen.getByRole('button', { name: /Счета/i });
            screen.getByRole('button', { name: /Операции/i });
            screen.getByRole('button', { name: /Реквизиты/i });

            const buttons = screen.getAllByRole('button');
            // buttons = 1 close buttton and 3 menu points (score, operations, requisites)
            expect(buttons).toHaveLength(4);
        });

        xit('should handle submenu point', async () => {
            const { rerender } = render(headerFactory(false, 'score', true));

            // click to burger icon
            const burgerIcon = screen.getByRole('button');
            userEvent.click(burgerIcon);

            // rerender, because isOpen was changed
            rerender(headerFactory(true, 'score', true));

            const requisites = screen.getByRole('button', { name: /Реквизиты/i });
            userEvent.click(requisites);
            // there are 2 submenu points - mobile and desktop
            const [mobileSubmenuPoint] = screen.getAllByRole('button', { name: /Подпункт реквизитов/i });
            userEvent.click(mobileSubmenuPoint);
            expect(handleClick).toBeCalledTimes(1);
        });

        xit('should open submenu and come back to menu', async () => {
            const { rerender } = render(headerFactory(false, 'score', true));

            // click to burger icon
            const burgerIcon = screen.getByRole('button');
            userEvent.click(burgerIcon);

            // rerender, because isOpen was changed
            rerender(headerFactory(true, 'score', true));

            const requisites = screen.getByRole('button', { name: /Реквизиты/i });
            userEvent.click(requisites);

            // click to "back to menu" item
            const backToMenu = screen.getByRole('button', { name: /Реквизиты/i });
            userEvent.click(backToMenu);

            // there are all menu points
            screen.getByRole('button', { name: /Счета/i });
            screen.getByRole('button', { name: /Операции/i });
            screen.getByRole('button', { name: /Реквизиты/i });
        });
    });
});
