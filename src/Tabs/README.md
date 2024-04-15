# Tabs

Группа кнопок на панели действия, которая позволяет отображать скрытый контент. Табы организовывают контенти позволяют перемещаться между связанными группами контента, которые находятся на одном уровне. Набор кнопок, которые помогают переключаться между скрытым контентом на странице. Выбранная вкладка показывает, какой контент отображается на странице,а неактивные вкладки — какой контент пользователь получит при нажатии.

## Импорт

```
import { Tabs } from 'vienna-ui';
```

## Свойства / Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "accent" \| "primary" \| undefined |  | Дизайн |
| size | "l" \| "m" \| "s" \| undefined | | Размеры |
| value | unknown |  | Выбранный таб (совпадает с value `Tabs.Tab`) |
| resizeble | boolean \| undefined |  | Включает или отключает изменение размера по умолчанию включено |
| comparator | ((value: any, tabValue: any) => boolean) \| undefined |  | Функция сравнения, которая определяет активный элемент |
| onChange | ((event: FormEvent<HTMLDivElement>, value: unknown) => void) \| undefined |  | Обработчик события при переключении таба |
| localization | Localization<TabsLocalization, undefined> \| undefined
| Локализация |

## Использование

```
    <Tabs value='Реквизиты' onChange={() => ''}>
        <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
        <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
        <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
        <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
        <Tabs.Tab value='Аресты' disabled>
            Аресты
        </Tabs.Tab>
    </Tabs>
```

## Внешний вид

Представлен в двух дизайнах `accent` и `primary`, и в трех размерах `l`, `m`, `s`

-   По-умолчанию дизайн `accent` и размер `l`
-   Автоматически сокращается если не влезает в размеры экрана, расчет позиции ведется по границам `window` или `родительского элемента` при заданном `width`

#### Accent

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Tabs value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```
#### Primary

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Tabs design='primary' value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```

## Размеры

Размер можно задать если передать props `size`

#### Размер `l`

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Tabs value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```

#### Размер `m`

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Tabs size='m' value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```

#### Размер `s`

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Tabs size='s' value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```

## Растяжение по высоте

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <div style={{ height: '150px' }}>
                <Tabs design='primary' size='s' value={state.value} onChange={handleChange}>
                    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                    <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                    <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                    <Tabs.Tab value='Аресты' disabled>
                        Аресты
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }}
```

## Uncontrolled

Активный Tab можно задать явно, передав в него значение active. Например если вы используете `react-router-dom`, то в active можно пердать функцию `useRouteMatch`

```
    {() => {
        return (
            <Tabs>
                <Tabs.Tab active={true} value='Счета'>
                    Счета
                </Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```

## Value как объект

В Tabs можно передать функцию comporator, в которой реализовать логику сравнения активного таба.

```
    {() => {
        const [state, setState] = React.useState({ url: '/operations' });
        const handleChange = (e, value) => setState(value);
        const comparator = (value, tabValue) => value.url === tabValue.url;
        return (
            <Tabs value={state} comparator={comparator} onChange={handleChange}>
                <Tabs.Tab value={{ url: '/account' }}>Счета</Tabs.Tab>
                <Tabs.Tab value={{ url: '/operations' }}>Операции</Tabs.Tab>
                <Tabs.Tab value={{ url: '/requisites' }}>Реквизиты</Tabs.Tab>
                <Tabs.Tab value={{ url: '/overdraft' }}>Овердрафт</Tabs.Tab>
            </Tabs>
        );
    }}
```

## Отключить подстройку под размер

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        return (
            <div style={{ height: '150px' }}>
                <Tabs design='primary' size='s' value={state.value} onChange={handleChange} resizeble={false}>
                    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                    <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                    <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                    <Tabs.Tab value='Аресты' disabled>
                        Аресты
                    </Tabs.Tab>
                </Tabs>
            </div>
        );
    }}
```

## Локализация

Используйте свойство `localization` для управления локализацией

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = (e, value) => setState({ value });
        const enUs = {'ds.tabs.rest': 'Other...'};
        return (
            <Tabs localization={enUs} value={state.value} onChange={handleChange} resizeble>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        );
    }}
```