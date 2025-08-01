import React from 'react';
import styled from 'styled-components';
import { Screen } from 'vienna.ui-primitives';
import { useModal } from './ModalHook';
import { Button } from '../Button';
import { Groups } from '../Groups';

export const confirmModal = async (message: string) => {
    return new Promise((resolve) => {
        const [open, close] = useModal(
            <Screen style={{ minWidth: '600px' }}>
                <Screen.Head>
                    <Screen.Title>Требуется подтверждение</Screen.Title>
                </Screen.Head>
                <Screen.Body>{message}</Screen.Body>
                <Screen.Footer>
                    <Groups>
                        <Button size='l' design='outline' onClick={() => close('Нажали "Отмена"')}>
                            Отмена
                        </Button>
                        <Button size='l' design='accent' onClick={() => close('Нажали "Ок"')}>
                            Ок
                        </Button>
                    </Groups>
                </Screen.Footer>
            </Screen>,
            resolve,
            { closeByEscape: false }
        );
        open();
    });
};

export const Demo = styled.div``;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-size: cover;
`;
