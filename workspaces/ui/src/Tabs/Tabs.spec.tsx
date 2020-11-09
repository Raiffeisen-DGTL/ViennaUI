import React from 'react';
import { Tabs } from './index';

it('Tabs', () => {
    const tabs = snapshot.shallow(
        <Tabs value={'Счета'}>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab)).toMatchSnapshot();
    expect(tabs.find(Tabs.Tab)).toHaveLength(6);
    expect(tabs.find(Tabs.Tab).first().prop('active')).toEqual(true);
});

it.todo('Tabs, Tab disabled');

it('Tabs таб "Еще.."', () => {
    Tabs.prototype.offsetWidth = jest.fn(() => {
        return 100;
    });

    const tabs = snapshot.shallow(
        <Tabs>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab).last().text()).toEqual('Еще... <Down />');
    expect(tabs.find(Tabs.Tab)).toMatchSnapshot();
});

it('Tabs переключение табов', () => {
    const handleChange = jest.fn();

    const tabs = snapshot.mount(
        <Tabs value={'Счета'} onChange={handleChange}>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );
    tabs.find(Tabs.Tab).at(2).simulate('click');

    expect(tabs.find(Tabs.Tab).first().prop('active')).toEqual(true);
    expect(handleChange).toBeCalled();
});

it('Tabs value: Не задан', () => {
    const tabs = snapshot.shallow(
        <Tabs>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );
    expect(tabs.find(Tabs.Tab)).toHaveLength(6);
    tabs.find(Tabs.Tab).forEach((tab) => expect(tab.prop('active')).toBeFalsy());
});

it('Tabs value: Строка', () => {
    const tabs = snapshot.shallow(
        <Tabs value={'Овердрафт'}>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab).at(3).prop('active')).toEqual(true);
});

it('Tabs value: Объект с использованием comparator', () => {
    const tabs = snapshot.shallow(
        <Tabs value={{ url: '/operations' }} comparator={(value, tabValue) => value.url === tabValue.url}>
            <Tabs.Tab value={{ url: '/account' }}>Счета</Tabs.Tab>
            <Tabs.Tab value={{ url: '/operations' }}>Операции</Tabs.Tab>
            <Tabs.Tab value={{ url: '/requisites' }}>Реквизиты</Tabs.Tab>
            <Tabs.Tab value={{ url: '/overdraft' }}>Овердрафт</Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab).at(1).prop('active')).toEqual(true);
    expect(tabs.find(Tabs.Tab).at(0).prop('active')).toBeFalsy();
});

it('Задание активного таба явно в Tab', () => {
    const tabs = snapshot.shallow(
        <Tabs>
            <Tabs.Tab active>Счета</Tabs.Tab>
            <Tabs.Tab>Операции</Tabs.Tab>
            <Tabs.Tab>Реквизиты</Tabs.Tab>
            <Tabs.Tab>Овердрафт</Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab).first().prop('active')).toEqual(true);
});

it('Tab active приоритетней Tabs value', () => {
    const tabs = snapshot.shallow(
        <Tabs value={'Овердрафт'}>
            <Tabs.Tab active value='Счета'>
                Счета
            </Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
        </Tabs>
    );

    expect(tabs.find(Tabs.Tab).first().prop('active')).toEqual(true);
    expect(tabs.find(Tabs.Tab).at(3).prop('active')).toEqual(true);
});
