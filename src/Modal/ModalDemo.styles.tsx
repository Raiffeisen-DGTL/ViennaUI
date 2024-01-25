import React from 'react';
import styled from 'styled-components';
import { Screen } from '@fcc/ui-primitives';
import { useModal } from './ModalHook';
import { Button } from '../Button';
import { Groups } from '../Groups';

export const confirmModal = async (message) => {
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
            resolve
        );
        open();
    });
};

export const Demo = styled.div``;

export const DemoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
`;

export const ContentArea = styled.div`
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 212px;

    background: #f8f8f8;

    font-family: ALS Hauss;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    text-align: center;

    color: #808185;
    opacity: 0.4;

    box-sizing: border-box;
`;

export const Image = styled.div`
    width: 100%;
    height: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-size: cover;
`;
