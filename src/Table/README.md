# Table

Компонент таблицы

## Импорт

```
import { Table } from 'vienna-ui';
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | undefined |
| service | () => TableService | undefined | Функция-конструктор табличного сервиса |
| size | 's' \| 'm' \| 'l' | 's' | Размер таблицы |
| noHeader | boolean \| undefined | undefined | Флаг отключающий отображение заголовка таблицы |
| noRowDivider | boolean \| undefined | undefined | Флаг отключающий отображение разделителей строк |
| maxHeight | string \| undefined | undefined | Максимальная высота таблицы |
| selected | any[] \| undefined | undefined | Массив выбранных строк |
| state | TableState \| undefined | undefined | Своцство для уроавления внутренним состоянием таблицы |
| data | any[] \| undefined | false | Массив данных |
| disableSelectAll | boolean \| undefined | undefined | Флаг, отключщающий отображение чекбокса выбора всех строк в таблице |
| pinnableColumns | boolean \| undefined | undefined | Флаг, включающий функциональность закрепленных колонок |
| onStateUpdate | (newState: TableState) => void \| undefined | undefined | Обработчик изменения состояния таблицы |
| onRowClick | (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void \| undefined | undefined | Обработчик одинарного клика по строке таблицы |
| onRowDoubleClick | (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void \| undefined | undefined | Обработчик двойного клика по строке таблицы |
| onSort | (event: React.FormEvent, data: { field: string; direction: 'asc' | 'desc' }) => void \| undefined | undefined | Обработчик сортировки данных таблицы |
| onSelect | (event: React.FormEvent, data: any) => void \| undefined | undefined | Обработчик выбора элемента данных таблицы |
| onScroll | (event: React.FormEvent) => void \| undefined | undefined | Обработчик прокрутки внутреннего контейнера таблицы |
| onServiceInit | (service: TableService) => void \| undefined | undefined | Обработчик инициализации табличного сервиса |
| localization | [TableLocalization](../Table/localization.ts) | defaultTableLocalization | Локализация |

## Column Props

| Prop      | Type                                       | Default   | Description                               |
| --------- | ------------------------------------------ | --------- | ----------------------------------------- |
| id        | string                                     | none      | Идентификатор колонки                     |
| children  | ReactNode                                  | undefined | Render-функция содержимого колонки        |
| title     | ReactNode \| undefined                     | undefined | Заголовок колонки                         |
| align     | "left" \| "right" \| "center" \| undefined | undefined | Выравнивание содержимого колонки          |
| width     | string \| undefined                        | undefined | Ширина колонки                            |
| truncate  | boolean \| undefined                       | undefined | Флаг обрезания содержимого колонки        |
| noWrap    | boolean \| undefined                       | undefined | Флаг запрещающий перенос строки в колонке |
| hidden    | boolean \| undefined                       | undefined | Флаг невидимости колонки                  |
| resizable | boolean \| undefined                       | undefined | Флаг доступности изменения ширины колонки |
| sortable  | boolean \| undefined                       | undefined | Флаг доступности сортировки колонки       |
| draggable | boolean \| undefined                       | undefined | Флаг доступности переноса колонки         |
| pinned    | boolean \| undefined                       | undefined | Флаг закрепленности колонки               |

```jsx
{
    () => {
        // Здесь и далее в примерах используются данные приведенного ниже формата:
        const data = [
            {
                id: 0,
                firstName: 'John',
                lastName: 'Doe',
                position: 'Software Engineer',
                phone: '9163456789',
                nickname: 'Stubborn D',
                login: '@stubd',
            },
            {
                id: 1,
                firstName: 'Johnnie',
                lastName: 'Walker',
                position: 'Software Engineer',
                phone: 'none',
                nickname: 'Possessive W',
                login: 'possw',
            },
            {
                id: 2,
                firstName: 'James',
                lastName: 'Jameson',
                position: 'CTO',
                phone: '916456789',
                nickname: 'Strident J',
                login: 'strj',
            },
        ];
        return (
            <Table data={data}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        );
    };
}
```

#### Table.Column

Структура таблицы описывается с помощью компонента `Table.Column`. В `children` данного компонента передается функция, которая в параметре получает элемент массива данных и возвращает содержимое ячейки. При этом, если в качестве содержимого колонки используется значение объекта данных, то рендер-функцию можно не передавать. В этом случае `id` колонки будет использовано как ключ для поиска значения в объекте данных.

```jsx
<Table data={data} size='s'>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

что равносильно следующей записи:

```jsx
<Table data={data} size='s'>
    <Table.Column id='id' title='#'>
        {(person) => person.id}
    </Table.Column>
    <Table.Column id='firstName' title='First Name'>
        {(person) => person.firstName}
    </Table.Column>
    <Table.Column id='lastName' title='Last Name'>
        {(person) => person.lastName}
    </Table.Column>
    <Table.Column id='position' title='Position'>
        {(person) => person.position}
    </Table.Column>
    <Table.Column id='phone' title='Phone'>
        {(person) => person.phone}
    </Table.Column>
</Table>
```

#### Размеры

Компонент размера регулируетcя с помощью аттрибута `size`, поддерживается 3 размера: `s`, `m` и `l`. Значение по умолчаниию: `s`.

```jsx
<Table data={data} size='s'>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Max height

С помощью параметра `maxHeight` можно контролировать максимальную высоту таблицы.

```jsx
<Table data={data} maxHeight='330px'>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### No header

Передав флаг `noHeader` можно спрятать шапку таблицы.

```jsx
<Table data={data} noHeader>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Row dividers

Передав флаг `noRowDivider` можно убрать разделители строк

```jsx
<Table data={data} noRowDivider>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Column width and noWrap

Ширину колонок можно контролировать с помощью аттрибута `width` у компонента 'Column'. При этом с помощью аттрибута `noWrap` можно запретить перенос строки для значений данной колонки.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' width='10px' />
    <Table.Column id='name' title='Name' width='100%'>
        {(person) => `${person.firstName} ${person.lastName}`}
    </Table.Column>
    <Table.Column id='position' title='Position' noWrap />
    <Table.Column id='phone' title='Phone' width='110px' />
</Table>
```

#### Column align

Выравниванием значений в столбце можно управлят с помощью аттрибута `align`. При этом заголовок колонки всегда выравнивается по левому краю.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' width='10px' />
    <Table.Column id='name' title='Name' width='100%' align='center'>
        {(person) => `${person.firstName} ${person.lastName}`}
    </Table.Column>
    <Table.Column id='position' title='Position' noWrap />
    <Table.Column id='phone' title='Phone' align='right' width='150px' />
</Table>
```

#### Truncate

С помощью флага `truncate` можно обрезать занчение ячейки и добавить многоточие. При этом полный текст будет добавлен в `title` ячейки.

Обратите внимание, что ширина ячейки в этом случае должна быть задана явно.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='name' title='Name' width='160px' truncate>
        {(person) => `${person.firstName} ${person.lastName}`}
    </Table.Column>
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Table Footer

В дополнение к `Column` компонент таблицы экспортирует под-компонент `Footer`, который позволяет задат футер таблицы.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.Footer id='footer'>
        <Link design='accent'>
            <PlusRing /> Добавить данные
        </Link>
    </Table.Footer>
</Table>
```

#### ActionsColumn, ActionIcon and ActionsListIcon

Компонент также экспортирует под-компонент иконки действия над строкой `ActionIcon` и под-компонент иконки списка действий `ActionsListIcon` и под-комопнент колонки для иконок действия `ActionsColumn`. Обе эти иконки невидимы по умолчанию и отображаются только при наведении на строку.

При этом размер используемых в `ActionIcon` иконок зависит от размера таблицы. В таблице размера `s` используются иконки размера `xs`, при размере `m` и `s` используются иконки размера `s`. Размер иконки в `ActionsListIcon` изменяется автоматически самим компонентом таблицы.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.ActionsColumn id='actions' width='110px'>
        {() => (
            <Groups size='xs'>
                <Table.ActionIcon>
                    <Edit size='xs' />
                </Table.ActionIcon>
                <Table.ActionIcon>
                    <Trash size='xs' />
                </Table.ActionIcon>
                <Table.ActionsListIcon>
                    <DropList float='end'>
                        <DropList.Item>Edit</DropList.Item>
                        <DropList.Item>Move</DropList.Item>
                        <DropList.Item>Delete</DropList.Item>
                    </DropList>
                </Table.ActionsListIcon>
            </Groups>
        )}
    </Table.ActionsColumn>
</Table>
```

#### EmptyState

Таблица также позволяет передать в `children` компонент `EmptyState` для отображения сосояний загрузки, ошибки или отсутствия данных.

```jsx
<Table>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <EmptyState loading>
        <EmptyState.Title>Загружаем данные</EmptyState.Title>
        <EmptyState.Description>Мы загружаем данные таблицы, очень скоро они будут готовы.</EmptyState.Description>
    </EmptyState>
</Table>
```

###### Ошибка

```jsx
<Table>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <EmptyState>
        <RoundIcon color='nice10'>
            <Close />
        </RoundIcon>
        <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
        <EmptyState.Description>Что-то пошло не так и мы уже работаем над этим.</EmptyState.Description>
    </EmptyState>
</Table>
```

## Раскрывающиеся строки

С помощью комопнента `ExpandingRow` можно добавить в таблицу функционал раскрывающихся строк.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.ExpandingRow>
        {(person) => (
            <span>
                {person.lastName} {person.firstName}
            </span>
        )}
    </Table.ExpandingRow>
</Table>
```

#### Настройки выпадающей строки.

Передав в `ExpandingRow` флаг `allowMultiple`, можно разрешить раскрытие нескольких строк одрновременно. Также в компонент можно передать аттрибут `onExpand` для обработчика раскрытия строки и аттрибут `expandedRow`, для управления начальным стостоянием раскрытых строк. При этом, если передан флаг `allowMultiple`, `expandedRow` будет ожидать массив id строк, а если нет – то одно значение.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.ExpandingRow allowMultiple onExpand={console.log} expandedRow={['0']} data-test='text'>
        {(person) => (
            <span>
                {person.lastName} {person.firstName}
            </span>
        )}
    </Table.ExpandingRow>
</Table>
```

## Изменение ширины колонки

Переда комопненту Table.Column флаг `resizable`, можно включить изменение ширины колонки.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' resizable />
    <Table.Column id='lastName' title='Last Name' resizable />
    <Table.Column id='position' title='Position' resizable />
    <Table.Column id='phone' title='Phone' />
</Table>
```

## Перенос колонок

Переда комопненту Table.Column флаг `draggable`, можно разрешить перенос колонки.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' draggable />
    <Table.Column id='lastName' title='Last Name' draggable />
    <Table.Column id='position' title='Position' draggable />
    <Table.Column id='phone' title='Phone' />
</Table>
```

## Соритровка значений в колонке

Переда комопненту Table.Column флаг `sortable`, можно включить сортировку значений колонки. При этом таблице должен быть передан обратботчик `onSort`, который отсортирует массив данных.

```jsx
{
    () => {
        const onSort = (e, { field, direction }) => {
            const dir = direction === 'desc' ? 1 : -1;
            if (field) {
                data.sort(function (a, b) {
                    let nameA = a[field].toUpperCase();
                    let nameB = b[field].toUpperCase();
                    let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                    return result * dir;
                });
            }
        };
        return (
            <Table data={data} onSort={onSort}>
                <Table.Column id='id' title='#' />
                <Table.Column id='firstName' title='First Name' sortable />
                <Table.Column id='lastName' title='Last Name' sortable />
                <Table.Column id='position' title='Position' sortable />
                <Table.Column id='phone' title='Phone' />
            </Table>
        );
    };
}
```

## События клика и двойного клика по строке

При клике на строку `onRowClick` или двойном клике `onRowDoubleClick`, обработчики возвращают объект со всеми данными строки таблицы

```jsx
<Table data={data} onRowClick={console.log} onRowDoubleClick={console.log}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Column Group

С помощью компонента `ColumnGroup` можно колонки объединять в группы и задавать заголовок группы, цвет. Для дополнительного акцента на группе колонок можно использовать цветовой фон для заголовка группы из палитры Secondary / Basic с кодом цвета 10 ('miami10', 'sochi10', 'paris10', 'tokyo10', 'dubai10', 'nice10').

```jsx
<Table data={data}>
    <Table.ColumnGroup title='Group 1' id='g1'>
        <Table.Column id='id' title='#' />
        <Table.Column id='firstName' title='First Name' />
        <Table.Column id='lastName' title='Last Name' />
    </Table.ColumnGroup>
    <Table.ColumnGroup title='Group 2' id='g2' color='tokyo10'>
        <Table.Column id='position' title='Position' />
        <Table.Column id='phone' title='Phone' />
    </Table.ColumnGroup>
</Table>
```

## Выбор строк

Передав компоненту обработчик `onSelect` можно включить режим выбора строк в таблице. При каждом клике на чекбокс выбора строки данный обработчик будет вызываться с 2мя параметрами: нативным событием и объектом `data`, в котором будут поля: `item` – объект данных, который был выбран, `isChecked`, флаг выбранности чекбокса, `isSelectedAll` – флаг клика по чекбоксу выбора всех строк в таблице (при этом `item` будет равен `null`).

```jsx
<Table data={data} onSelect={console.log}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### Selected

С помощью аттрибута `selected`, в который передается список объектов данных, можно контролировать начально состояние выбранных строк.

```jsx
<Table data={data} onSelect={console.log} selected={[data[0], data[3]]}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### disableSelectAll

Передав флаг `disableSelectAll` можно убрать чекбокс выбора всех строк.

```jsx
<Table data={data} onSelect={console.log} disableSelectAll>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />
</Table>
```

#### SelectAll

Также таблица экспортирует компонент `Table.SelectAll`, позволяющий управлять выбранными данными при паджинировании данных. При этом при выборе каждой опции будет вызван обработчик `onSelect` с флагом `isSelectedAll` равным `true` и флагом `isSelectedFullData` равным true, если выбраны все строки в таблице и false – если нет.

```jsx
<Table data={data} onSelect={console.log}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.SelectAll fullData={fullData} />
</Table>
```

## Бесконечный скролл

С помощью обработчика `onScroll` можно реализовать функционал бесконечного скролла, вместо обычной паджинации.

```jsx
{
    () => {
        const bigData = fullData;
        const pageSize = 10;
        const paginate = (page, pageSize) => {
            return bigData.slice(0, page * pageSize);
        };
        const [dataset, setData] = React.useState(paginate(currentPage, pageSize));
        const onScroll = React.useCallback((e) => {
            const { scrollTop, offsetHeight, scrollHeight } = e.target;
            if (scrollTop + offsetHeight + 10 > scrollHeight) {
                currentPage += 1;
                setData(paginate(currentPage, pageSize));
            }
        });
        return (
            <Table data={dataset} onScroll={onScroll} maxHeight='350px'>
                <Table.Column id='id' title='#' />
                <Table.Column id='firstName' title='First Name' />
                <Table.Column id='lastName' title='Last Name' />
                <Table.Column id='position' title='Position' />
                <Table.Column id='phone' title='Phone' />
            </Table>
        );
    };
}
```

## GroupBy

С помощью компонента `Table.GroupBy` можно сгруппировать строки в таблице.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' />
    <Table.Column id='lastName' title='Last Name' />
    <Table.Column id='position' title='Position' />
    <Table.Column id='phone' title='Phone' />

    <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />
    <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
</Table>
```

## Закрепленные колонки

Флаг `pinnableColumns` включает режим закрепленных колонок. Этот флаг включает закрепление для систменых колонок выбора и раскрытия строк. В дополнение к этому, для закрепления пользователеской колонки, ей можно передать флаг `pinned`.

```jsx
<Table data={data} onSelect={console.log} pinnableColumns>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' pinned />
    <Table.Column id='lastName' title='Last Name' pinned />
    <Table.Column id='position' title='Position' pinned />
    <Table.Column id='phone' title='Phone' />
</Table>
```

## Table settings

С помощью компонента `Table.Settings` можно управлять настройками таблицы. В дополнение таблица экспортирует компонет `Table.ColumnsSettings` для изменения настроек колонок и компоненты `Table.GroupingSettings` и `Table.GroupingSettings.Item` для управления группировкой таблицы. При этом внутри `Table.GroupingSettings.Item` переиспользуется компонет `Table.GroupBy` с тем же интерфейсом.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' pinned />
    <Table.Column id='lastName' title='Last Name' pinned />
    <Table.Column id='position' title='Position' pinned />
    <Table.Column id='phone' title='Phone' />

    <Table.Settings>
        <Table.ColumnsSettings />
        <Table.GroupingSettings>
            <Table.GroupingSettings.Item name='None' />
            <Table.GroupingSettings.Item name='By position'>
                <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                <Table.GroupBy id='pm' title='PM' filter={(item) => item.position === 'PM'} />
            </Table.GroupingSettings.Item>
            <Table.GroupingSettings.Item name='By name'>
                <Table.GroupBy id='g1' title='Jane' filter={(item) => item.firstName === 'Jane'} />
                <Table.GroupBy id='g2' title='Johnnie' filter={(item) => item.firstName === 'Johnnie'} />
                <Table.GroupBy
                    id='g3'
                    title='Other'
                    filter={(item) => item.firstName !== 'Johnnie' && item.firstName !== 'Jane'}
                />
            </Table.GroupingSettings.Item>
        </Table.GroupingSettings>
    </Table.Settings>
</Table>
```

#### Columns settings

Компонент `Table.ColumnsSettings` поддерживает поиск по колонкам, включающийся флагом `searchable`, и опцию скрытия/показа всех колонок, которая включается флагом `hideShowAll`.

```jsx
<Table data={data}>
    <Table.Column id='id' title='#' />
    <Table.Column id='firstName' title='First Name' pinned />
    <Table.Column id='lastName' title='Last Name' pinned />
    <Table.Column id='position' title='Position' pinned />
    <Table.Column id='phone' title='Phone' />

    <Table.Settings>
        <Table.ColumnsSettings searchable hideShowAll />
    </Table.Settings>
</Table>
```

## Table service

Для управления всеми изменениями своего состояния таблица использует объект tableService. Этот объект реализует методы для изменения состояния каждой фичи внутри таблицы. При этом таблица дает возможность как передать функцию конструктор табличного сервиса – для изменения дефолтного поведения, так и экспортировать сервис наружу, для управления состоянием таблицы из вне. Для упрощения этих изменений ДС экспортирует как саму функцию-конструктор сервиса `tableService` так и его интерейс `TableService`.

#### Управление состоянием

Обработчик `onServiceInit` позволяет экспортировать сервис и с помощью него управлять состоянием таблицы во внешнем контексте.

```jsx
{
    () => {
        let service;
        return (
            <div>
                <Groups style={{ margin: '10px' }}>
                    <Button onClick={() => service.toggleSelectRow(data[0], true)}>Select row 0</Button>
                    <Button onClick={() => service.toggleExpandingRow('1')}>Expand row 1</Button>
                    <Button onClick={() => service.hideColumn('phone')}>Hide phone column</Button>
                </Groups>
                <Table
                    data={data}
                    onServiceInit={(s) => {
                        service = s;
                    }}
                    onSelect={console.log}>
                    <Table.Column id='id' title='#' />
                    <Table.Column id='firstName' title='First Name' pinned />
                    <Table.Column id='lastName' title='Last Name' pinned />
                    <Table.Column id='position' title='Position' pinned />
                    <Table.Column id='phone' title='Phone' />

                    <Table.ExpandingRow>
                        {(person) => (
                            <span>
                                {person.lastName} {person.firstName}
                            </span>
                        )}
                    </Table.ExpandingRow>
                </Table>
            </div>
        );
    };
}
```

#### Переопределение сервиса

C помощью аттрибуте `service` можно передать свою функцию=конструктор табличного сервиса. При этом можно использовать дефолтный конструктор `tableService` для переиспользования дефолтного поведения.

```jsx
{
    () => {
        const customService = (state, updateState, config, data) => {
            // get defult service object
            const baseService = tableService(state, updateState, config, data);
            //create custom handler for the row expanding
            const toggleExpandingRow = (rowId) => {
                // add custom behaviour
                console.log('rowId', rowId);
                // call base method to run defualt functionality
                baseService.toggleExpandingRow(rowId);
            };
            // return new object and overwrite toggleExpandingRow method
            return { ...baseService, toggleExpandingRow };
        };
        return (
            <Table data={data} service={customService}>
                Table.Column id='id' title='#' />
                <Table.Column id='firstName' title='First Name' pinned />
                <Table.Column id='lastName' title='Last Name' pinned />
                <Table.Column id='position' title='Position' pinned />
                <Table.Column id='phone' title='Phone' />
                <Table.ExpandingRow>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        );
    };
}
```

## Локализация

С помощью атрибута `localization` можно поменять значения лейблов в таблице, и в том числе перевести их на английский язык. Для упрощения этого процесса компонент экспортирует интерфейс `TableLocalization`, который определяет ключи всех строк, использующихся в таблице.

```
{() => {
    // docz playground doesn't allow to cast TableLocalization to this const, but in your code you will be able to do so.
    const enUS = {
        'ds.table.filter.sortUp': 'Sort ASC',
        'ds.table.filter.sortDown': 'Sort Desc',
        'ds.table.settings': 'Settings',
        'ds.table.settings.groupBy': 'Group by',
        'ds.table.settings.columnSearch': 'Search...',
        'ds.table.settings.hideAllColumns': 'Hide all',
        'ds.table.settings.showAllColumns': 'Show all',
    };
    return (
        <Table data={ComponentHelpers.Table.data} minHeight='200px' localization={enUS}>
            <Table.Column id='id' title='#' />
            <Table.Column id='firstName' title='First Name' sortable filter={<Table.InputFilter />} />
            <Table.Column id='lastName' title='Last Name' />
            <Table.Column id='position' title='Position' />
            <Table.Column id='phone' title='Phone' />
            <Table.Settings>
                <Table.ColumnsSettings searchable hideShowAll />
                <Table.GroupingSettings onGroupBy={console.log}>
                    <Table.GroupingSettings.Item id='none' name='None' />
                    <Table.GroupingSettings.Item id='position' name='By position'>
                        <Table.GroupBy
                            id='sde'
                            title='SDE'
                            filter={(item) => item.position === 'Software Engineer'}
                        />
                        <Table.GroupBy id='pm' title='PM' filter={(item) => item.position === 'PM'} />
                    </Table.GroupingSettings.Item>
                    <Table.GroupingSettings.Item id='name' name='By name'>
                        <Table.GroupBy id='g1' title='Jane' filter={(item) => item.firstName === 'Jane'} />
                        <Table.GroupBy id='g2' title='Johnnie' filter={(item) => item.firstName === 'Johnnie'} />
                        <Table.GroupBy
                            id='g3'
                            title='Other'
                            filter={(item) => item.firstName !== 'Johnnie' && item.firstName !== 'Jane'}
                        />
                    </Table.GroupingSettings.Item>
                </Table.GroupingSettings>
            </Table.Settings>
        </Table>
    );
}}
```
