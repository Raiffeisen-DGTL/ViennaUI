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


# Tabs

Группа кнопок на панели действия, которая позволяет отображать скрытый контент. Табы организовывают контент и позволяют перемещаться между связанными группами контента, которые находятся на одном уровне.

Набор кнопок, который помогает переключаться между скрытым контентом на странице. Выбранная вкладка показывает, какой контент отображается на странице, а неактивные вкладки — какой контент пользователь получит при нажатии.



```
{() => {
    const [state, setState] = React.useState({value: 'Счета' });
    const handleChange = ({ value }) => setState({value});
    return (
        <Tabs value={state.value} onChange={handleChange}>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
        </Tabs>
    );
    }}
```

## Внешний вид

Представлен в двух дизайнах `accent` и `primary`.

-   По умолчанию дизайн `accent`;
-   Автоматически сокращается если не влезает в размеры экрана, расчет позиции ведется по границам `window` или `родительского элемента` при заданном `width`;

#### Accent

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = ({ value }) => setState({value});
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
        const handleChange = ({ value }) => setState({value});
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

Размер можно задать, передав props `size`. Компонент представлен в трех размерах `l`, `m`, `s` (по умолчанию размер `l`).

#### Размер `l`

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = ({ value }) => setState({value});
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
        const handleChange = ({ value }) => setState({value});
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
        const handleChange = ({ value }) => setState({value});
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

## Подсветка активного Tab

Активный Tab можно задать явно, передав в него значение active. Например если вы используете `react-router-dom`, то в active можно передать функцию `useRouteMatch`

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

## Функция сравнения активного Tab

В Tabs можно передать функцию comporator, в которой реализовать логику сравнения активного таба.

```
    {() => {
        const [state, setState] = React.useState({ url: '/operations' });
        const handleChange = ({ value }) => setState(value);
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

## Локализация

Используйте свойство `localization` для управления локализацией

```
    {() => {
        const [state, setState] = React.useState({ value: 'Операции' });
        const handleChange = ({ value }) => setState({value});
        const enUs = {'ds.tabs.rest': 'Other...'};
        return (
            <Tabs localization={enUs} value={state.value} onChange={handleChange}>
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

## Tabs в выпадающем списке

Если необходимо, чтобы не вмещающееся содержимое в табы сворачивалось в выпадающий список "Еще..." - укажите свойство resizable.

```
{() => {
    const [state, setState] = React.useState({ value: 'Item 1' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    const comparator = React.useCallback((value, tabValue) => value === tabValue, []);
    return (
            <Tabs value={state.value} comparator={comparator} onChange={handleChange} resizable>
                <Tabs.Tab value='Item 1'>Item 1</Tabs.Tab>
                <Tabs.Tab value='Item 2'>Item 2</Tabs.Tab>
                <Tabs.Tab value='Item 3'>Item 3</Tabs.Tab>
                <Tabs.Tab value='Item 4'>Item 4</Tabs.Tab>
                <Tabs.Tab value='Item 5'>Item 5</Tabs.Tab>
                <Tabs.Tab value='Item 6'>Item 6</Tabs.Tab>
                <Tabs.Tab value='Item 7'>Item 7</Tabs.Tab>
                <Tabs.Tab value='Item 8'>Item 8</Tabs.Tab>
                <Tabs.Tab value='Item 9'>Item 9</Tabs.Tab>
                <Tabs.Tab value='Item 10'>Item 10</Tabs.Tab>
                <Tabs.Tab value='Item 11'>Item 11</Tabs.Tab>
                <Tabs.Tab value='Item 12'>Item 12</Tabs.Tab>
                <Tabs.Tab value='Item 13'>Item 13</Tabs.Tab>
                <Tabs.Tab value='Item 14'>Item 14</Tabs.Tab>
                <Tabs.Tab value='Item 15'>Item 15</Tabs.Tab>
                <Tabs.Tab value='Item 16'>Item 16</Tabs.Tab>
                <Tabs.Tab value='Item 17'>Item 17</Tabs.Tab>
                <Tabs.Tab value='Item 18'>Item 18</Tabs.Tab>
                <Tabs.Tab value='Item 19'>Item 19</Tabs.Tab>
                <Tabs.Tab value='Item 20'>Item 20</Tabs.Tab>
            </Tabs>
    );
    }}
```

## Растяжение по высоте

Когда нужно растянуть Tabs по высоте - можно включить свойство `alignMiddle`.

```
{() => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    return (
        <div style={{ height: '150px' }}>
            <Tabs value={state.value} onChange={handleChange} alignMiddle>
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

## Обработчик события

Обработчик события `onChange` нужен при переключении таба.

```
{() => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    return (
        <div>
            <Tabs value={state.value} onChange={handleChange}>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            </Tabs>
        </div>
    );
    }}
```

## Состояние disabled

Свойство `disabled` может быть применено к отдельному табу.

```
{() => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    return (
        <div>
            <Tabs value={state.value} onChange={handleChange}>
                <Tabs.Tab disabled value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab disabled value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab disabled value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            </Tabs>
        </div>
    );
}}
```