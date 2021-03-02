# Tabs

Группа кнопок на панели действия, которая позволяет отображать скрытый контент. Табы организовывают контенти позволяют перемещаться между связанными группами контента, которые находятся на одном уровне. Набор кнопок, которые помогают переключаться между скрытым контентом на странице. Выбранная вкладка показывает, какой контент отображается на странице,а неактивные вкладки — какой контент пользователь получит при нажатии.

## Импорт

```
import { Tabs } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | "accent" \| "primary" \| undefined | "accent" | Дизайн |
| size | "l" \| "m" \| "s" \| undefined | "l" | Размеры |
| value | any | false | Выбранный таб (совпадает с value `Tabs.Tab`) |
| resizeble | boolean \| undefined | false | Включает или отключает изменение размера по умолчанию включено |
| comparator | ((value: any, tabValue: any) => boolean) \| undefined | false | Функция сравнения, которая определяет активный элемент |
| onChange | ((event: FormEvent, value: any) => void) \| undefined | false | Обработчик события при переключении таба |
| localization | [TabsLocalization](../Tabs/localization.ts) | defaultTabsLocalization | Локализация |

## Свойства вкладки / Tab Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop     | Type                 | Default | Description                                             |
| -------- | -------------------- | ------- | ------------------------------------------------------- |
| disabled | boolean \| undefined | false   | Неактивность вкладки                                    |
| value    | string \| undefined  | false   | Значение вкладки                                        |
| active   | string \| undefined  | false   | Активность таба (если не прокидывать значение в `Tabs`) |

## Использование

Компонент состоит из родительского контейнера `Tabs` и дочерних вкладок `Tabs.Tab`.

> Компонент является контролируемым, то есть чтобы отобразить выбранную вкладку, необходимо получить ее значение через обработчик `onChange` и прокинуть в `value`.

Автоматически сокращается если не влезает в размеры экрана, расчет позиции ведется по границам `window` или `родительского элемента` при заданном `width`.

```{() => {
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

## Дизайн

##### Свойство `design`

Представлен в двух дизайнах `accent` (по умолчанию) и `primary`

```
<Tabs design='primary' >
    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
</Tabs>
```

## Размер

##### Свойство `size`

Компонент имеет стандартные размеры `l` (по умолчанию), `m`, `s`.

## Активный Tab

##### Свойство `value`, `active`

Активный таб задается через свойство `value` компонента `Tabs`.

```
<Tabs value='Счета'>
    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
</Tabs>
```

Активный Tab можно задать явно, передав в него значение active. Например если вы используете `react-router-dom`, то в active можно пердать функцию `useRouteMatch`.

```
<Tabs>
    <Tabs.Tab active={true}>
        Счета
    </Tabs.Tab>
    <Tabs.Tab>Операции</Tabs.Tab>
</Tabs>
```

## Функция сравнения

##### Свойство `comparator`

В Tabs можно передать функцию `comporator`, в которой реализовать логику сравнения активного таба.

```{() => {
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

## Адаптивность под размер

##### Свойство `resizeble`

Чтобы убрать автоматическое "схлопывание" вкладок, нужно передать свойство `resizeble={false}`.

```
<Tabs resizeble={false}>
    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
</Tabs>
```

## Неактивная вкладка

##### Свойство `disabled`

Чтобы установить таб как неактивный (события клика не будут срабатывать), нужно передать свойство `disabled`.

```
<Tabs disabled>
    <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
    <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
</Tabs>
```
