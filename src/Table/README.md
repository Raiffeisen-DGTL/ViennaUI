# Table

Компонент таблицы

## Импорт

```
import { Table } from 'vienna-ui';
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| service | TableServiceFactory \| undefined | | Функция-конструктор табличного сервиса |
| size | 's' \| 'm' \| 'l' | | Размер таблицы |
| noHeader | boolean \| undefined |  | Флаг отключающий отображение заголовка таблицы |
| noRowDivider | boolean \| undefined |  | Флаг отключающий отображение разделителей строк |
| maxHeight | string \| undefined |  | Максимальная высота таблицы |
| minHeight | string \| undefined | |
| noOverflow | boolean \| undefined | |
| sort | { field: string; direction: 'asc' \| 'desc'} \| undefined | |
| selected | any[] \| undefined |  | Массив выбранных строк |
| state | TableState \| undefined |  | Свойство для уроавления внутренним состоянием таблицы |
| disableCheckboxSelectAll | boolean \| undefined | | Массив данных |
| data | any[] \| undefined |  | Массив данных |
| filter | FilterState \| undefined |  | |
| dataKey | ((item: any, index: number) => string) \| undefined |  |
| onFilter | ((data?: Record<string, any> \| undefined) => void) \| undefined |  | 
| initState | TableState \| ((state: TableState) => TableState) \| undefined |  | 
| onUpdate | ((newState: TableState, id: string) => void) \| undefined |  | 
| onInit | (({ service, state }: { service: TableService; state: TableState }) => void) \| undefined |  | 
| onClickShowAllColumns | (() => void) \| undefined |  | 
| disableSelectAll | boolean \| undefined |  | Флаг, отключщающий отображение чекбокса выбора всех строк в таблице |
| pinnableColumns | boolean \| undefined |  | Флаг, включающий функциональность закрепленных колонок |
| onStateUpdate | (newState: TableState) => void \| undefined |  | Обработчик изменения состояния таблицы |
| onRowClick | ((event: MouseEvent<HTMLElement, MouseEvent>, data: Record<string, any>) => void) \| undefined |  | Обработчик одинарного клика по строке таблицы |
| onRowDoubleClick | (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void \| undefined |  | Обработчик двойного клика по строке таблицы |
| onSort | ((event?: FormEvent<Element> \| undefined, data?: { field: string; direction: SortDirection } \| undefined) => void) \|  |  | Обработчик сортировки данных таблицы |
| onSelect | ((event: FormEvent<Element>, data: any) => void) \| undefined |  | Обработчик выбора элемента данных таблицы |
| onScroll | ((event: UIEvent<HTMLElement, UIEvent>) => void)  \| undefined |  | Обработчик прокрутки внутреннего контейнера таблицы |
| onServiceInit | (service: TableService) => void \| undefined |  | Обработчик инициализации табличного сервиса |
| localization | Localization<TableLocalization, undefined> \| undefined | | Локализация |
| margin | Whitespace \| undefined | |
| marginTop | Whitespace \| undefined | |
| marginBottom | Whitespace \| undefined | |
| marginLeft | Whitespace \| undefined | |
| marginRight | Whitespace \| undefined | |
| marginHorizontal | Whitespace \| undefined | |
| marginVertical | Whitespace \| undefined | |
| m | Whitespace \| undefined | |
| mt | Whitespace \| undefined | |
| mb | Whitespace \| undefined | |
| ml | Whitespace \| undefined | |
| mr | Whitespace \| undefined | |
| mx | Whitespace \| undefined | |
| my | Whitespace \| undefined | |
| padding | Whitespace \| undefined | |
| paddingTop | Whitespace \| undefined | |
| paddingBottom | Whitespace \| undefined | |
| paddingLeft | Whitespace \| undefined | |
| paddingRight | Whitespace \| undefined | |
| paddingHorizontal | Whitespace \| undefined | |
| paddingVertical | Whitespace \| undefined | |
| p | Whitespace \| undefined | |
| pt | Whitespace \| undefined | |
| pb | Whitespace \| undefined | |
| pl | Whitespace \| undefined | |
| pr | Whitespace \| undefined | |
| px | Whitespace \| undefined | |
| py | Whitespace \| undefined | |

## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| data | any[] \| undefined | |
| className | string \| undefined | |
| role | string \| undefined | |
| spellCheck | boolean \| undefined | |
| tabIndex | number \| undefined | |
| selected | any[] \| undefined | |

## Column Props

| Prop      | Type                                       | Default   | Description                               |
| --------- | ------------------------------------------ | --------- | ----------------------------------------- |
| id        | string                                     |       | Идентификатор колонки                     |
| title     | ReactNode \| undefined                     |  | Заголовок колонки                         |
| align     | "left" \| "right" \| "center" \| undefined |  | Выравнивание содержимого колонки          |
| width     | string \| undefined                        |  | Ширина колонки                            |
| truncate  | boolean \| undefined                       |  | Флаг обрезания содержимого колонки        |
| noWrap    | boolean \| undefined                       |  | Флаг запрещающий перенос строки в колонке |
| hidden    | boolean \| undefined                       |  | Флаг невидимости колонки                  |
| resizable | boolean \| undefined                       |  | Флаг доступности изменения ширины колонки |
| sortable  | boolean \| undefined                       |  | Флаг доступности сортировки колонки       |
| draggable | boolean \| undefined                       |  | Флаг доступности переноса колонки         |
| pinned    | boolean \| undefined                       |  | Флаг закрепленности колонки               |
| groupId    | string  \| undefined                       |  | Флаг закрепленности колонки  
| filter    | ReactNode  \| undefined                      |  | Флаг закрепленности колонки  
| forceIconVisibility    | boolean  \| undefined                       |  


## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | |
| title | ReactNode | |
| width | string \| undefined | |
| hidden | boolean \| undefined | |
| draggable | boolean \| undefined | |


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

```
    <Table data={ComponentHelpers.Table.data} size='s'>
        <Table.Column id='id' title='#' />
        <Table.Column id='firstName' title='First Name' />
        <Table.Column id='lastName' title='Last Name' />
        <Table.Column id='position' title='Position' />
        <Table.Column id='phone' title='Phone' />
    </Table>
```

#### Data key

Для корректной работы у каждого элемета данных таблицы должен быть уникальный ключ. Этот ключ, в частности, будет использоваться ка кзначение атрибуты key при отрисовки строк таблицы, а так же для других фич таблицы, работающих с элементами данных (например, раскрывающиеся строки). По умолчанию, таблица в качестве такого ключа ожидает наличие в жлементе data поля с именем id. Это поведение можно изменить с помощью аттрибута dataKey. В данный атрибут передается функция, которая принимает объект данных item и возвращает уникальный ключ для этого объекта.

```
    {() => {
        const dataWithNoIds = [
            {
                firstName: 'John',
                lastName: 'Doe',
                position: 'Software Engineer',
                phone: '9163456789',
                nickname: 'Stubborn D',
                login: '@stubd',
            },
            {
                firstName: 'Johnnie',
                lastName: 'Walker',
                position: 'Software Engineer',
                phone: 'none',
                nickname: 'Possessive W',
                login: 'possw',
            },
            {
                firstName: 'James',
                lastName: 'Jameson',
                position: 'CTO',
                phone: '916456789',
                nickname: 'Strident J',
                login: 'strj',
            },
        ];
        return (
            <Table data={dataWithNoIds} dataKey={(item) => `${item.firstName} ${item.lastName}`}>
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
    }}
```

#### Размеры

Компонент размера регулируетcя с помощью аттрибута `size`, поддерживается 4 размера: `xs`, `s`, `m` и `l`. Значение по умолчаниию: `s`.

```
    <React.Fragment>
        <div style={{ marginBottom: '8px' }}>Extra small</div>
        <Table data={ComponentHelpers.Table.data} size='xs'>
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
        <div style={{ marginTop: '16px', marginBottom: '8px' }}>Small</div>
        <Table data={ComponentHelpers.Table.data} size='s'>
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
        <div style={{ marginTop: '16px', marginBottom: '8px' }}>Medium</div>
        <Table data={ComponentHelpers.Table.data} size='m'>
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
        <div style={{ marginTop: '16px', marginBottom: '8px' }}>Large</div>
        <Table data={ComponentHelpers.Table.data} size='l'>
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
    </React.Fragment>
```

#### Max height

С помощью параметра `maxHeight` можно контролировать максимальную высоту таблицы.

```
    <Table data={ComponentHelpers.Table.fullData} maxHeight='330px'>
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

#### No header

Передав флаг `noHeader` можно спрятать шапку таблицы.

```
    <Table data={ComponentHelpers.Table.data} noHeader>
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

#### Row dividers

Передав флаг `noRowDivider` можно убрать разделители строк

```
    <Table data={ComponentHelpers.Table.data} noRowDivider>
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

#### Column width and noWrap

Ширину колонок можно контролировать с помощью аттрибута `width` у компонента 'Column'. При этом с помощью аттрибута `noWrap` можно запретить перенос строки для значений данной колонки.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#' width='10px'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' width='100%'>
            {(person) => `${person.firstName} ${person.lastName}`}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' width='110px'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

#### Column align

Выравниванием значений в столбце можно управлят с помощью аттрибута `align`. При этом заголовок колонки всегда выравнивается по левому краю.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#' width='10px'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' width='100%' align='center'>
            {(person) => `${person.firstName} ${person.lastName}`}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' align='right' width='150px'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

#### Truncate

С помощью флага `truncate` можно обрезать занчение ячейки и добавить многоточие. При этом полный текст будет добавлен в `title` ячейки.

Обратите внимание, что ширина ячейки в этом случае должна быть задана явно.

Для сокращения текста в заголовке столбца, используйте `title?: React.ReactNode`, таким образом вы сможете задать для него любые стили.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' width='160px' truncate>
            {(person) => {
                const postfix = person.id === '0' ? 'with very long name' : '';
                return `${person.firstName} ${postfix}`;
            }}
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

#### Table Footer

В дополнение к `Column` компонент таблицы экспортирует под-компонент `Footer`, который позволяет задать футер таблицы.

```
    <Table data={ComponentHelpers.Table.data}>
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
        <Table.Footer id='footer'>
            <Link design='accent'>
                <AddRing /> Добавить данные
            </Link>
        </Table.Footer>
    </Table>
```

#### ActionsColumn, ActionIcon and ActionsListIcon

Компонент также экспортирует под-компонент иконки действия над строкой `ActionIcon` и под-компонент иконки списка действий `ActionsListIcon` и под-комопнент колонки для иконок действия `ActionsColumn`. Обе эти иконки невидимы по умолчанию и отображаются только при наведении на строку.

При этом размер используемых в `ActionIcon` иконок зависит от размера таблицы. В таблице размера `s` используются иконки размера `xs`, при размере `m` и `s` используются иконки размера `s`. Размер иконки в `ActionsListIcon` изменяется автоматически самим компонентом таблицы.

```
    <Table data={ComponentHelpers.Table.data}>
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
        <Table.ActionsColumn id='actions' width='110px'>
            {() => (
                <Groups size='xs'>
                    <Table.ActionIcon title='Edit'>
                        <Edit size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionIcon title='Delete'>
                        <TrashDelete size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionsListIcon title='More'>
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

```
    <Table>
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
        <EmptyState loading>
            <EmptyState.Title>Загружаем данные</EmptyState.Title>
            <EmptyState.Description>Мы загружаем данные таблицы, очень скоро они будут готовы.</EmptyState.Description>
        </EmptyState>
    </Table>
```

###### Ошибка

```
    <Table>
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
        <EmptyState>
            <RoundIcon color='nice10'>
                <CloseCancelX />
            </RoundIcon>
            <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
            <EmptyState.Description>Что-то пошло не так и мы уже работаем над этим.</EmptyState.Description>
        </EmptyState>
    </Table>
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
            'ds.table.settings.selectAll.fullData': [
                'Select all rows',
                'in the table',
                'All rows',
                'on the page are selected',
            ],
            'ds.table.settings.selectAll.onPage': [
                'Select all rows',
                'on the page',
                'All rows',
                'in the table are selected',
            ],
        };
        return (
            <Table data={ComponentHelpers.Table.data} minHeight='200px' localization={enUS}>
                <Table.SelectAll fullData={ComponentHelpers.Table.fullData} />
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

#### Динамическая локализация

В проп `localization` можно так же передать функцию, которая будет для каждого с лейбла вызываться с его ключем и должна будет вернуть его необходимое значение. Это может быть удобно для использования с локализационными фреймворками, например i18n.

```
    {() => {
        const enUS = {
            'ds.table.filter.sortUp': 'Sort ASC',
            'ds.table.filter.sortDown': 'Sort Desc',
            'ds.table.settings': 'Settings',
            'ds.table.settings.groupBy': 'Group by',
            'ds.table.settings.columnSearch': 'Search...',
            'ds.table.settings.hideAllColumns': 'Hide all',
            'ds.table.settings.showAllColumns': 'Show all',
        };
        const localize = (key) => enUS[key];
        return (
            <Table data={ComponentHelpers.Table.data} minHeight='200px' localization={localize}>
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

## Whitespace

Так же компонент наследует margin-аттрибуты компонента `Whitespace` для управления внешними отступами карточки. Подробнее про эти атрибуты можно почитать на странице компонента [Whitespace](/components/whitespace)

```
    {() => {
        return (
            <Table data={ComponentHelpers.Table.data} marginTop='s5' mb='s6'>
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
    }}
```

## Interactive

```
    {() => {
        // copying global data
        const smallData = ComponentHelpers.Table.data;
        const bigData = ComponentHelpers.Table.fullData;
        // pagination
        const pageSize = 10;
        const paginate = (page, pageSize) => {
            return bigData.slice(page * pageSize, (page + 1) * pageSize);
        };
        const initData = () => {
            return paginate(0, pageSize);
        };
        // state
        const [dataset, setData] = React.useState(initData());
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState(false);
        // event handlers
        const showLoading = () => {
            setData([]);
            setError(false);
            setLoading(true);
        };
        const showError = () => {
            setData([]);
            setLoading(false);
            setError(true);
        };
        const showData = () => {
            setData(initData());
            setLoading(false);
            setError(false);
        };
        const handlePageChange = (event, { pageIndex, pageSize }) => {
            const data = paginate(pageIndex, pageSize);
            setData(data);
        };
        // markup
        return (
            <div>
                <Groups style={{ margin: '10px' }}>
                    <Button onClick={showData}>Data</Button>
                    <Button design='accent' onClick={showLoading}>
                        Loading
                    </Button>
                    <Button design='critical' onClick={showError}>
                        Error
                    </Button>
                </Groups>
                <Table data={dataset}>
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
                        {(person) => (
                            <Badge color='miami30' size='s'>
                                {person.position}
                            </Badge>
                        )}
                    </Table.Column>
                    <Table.Column id='phone' title='Phone'>
                        {(person) => person.phone}
                    </Table.Column>
                    <Table.ActionsColumn id='actions' width='110px'>
                        {(person) => (
                            <Groups size='xs'>
                                <Table.ActionIcon title='Edit'>
                                    <Edit size='xs' />
                                </Table.ActionIcon>
                                <Table.ActionIcon title='TrashDelete'>
                                    <TrashDelete size='xs' />
                                </Table.ActionIcon>
                                <Table.ActionsListIcon title='More'>
                                    <DropList float='end'>
                                        <DropList.Item>Edit</DropList.Item>
                                        <DropList.Item>Move</DropList.Item>
                                        <DropList.Item>Delete</DropList.Item>
                                    </DropList>
                                </Table.ActionsListIcon>
                            </Groups>
                        )}
                    </Table.ActionsColumn>
                    {!loading && !error && (
                        <Table.Footer id='footer'>
                            <Groups justifyContent='space-between'>
                                <Link design='accent'>
                                    <AddRing /> Добавить данные
                                </Link>
                                <Pagination
                                    size='s'
                                    pageSize={pageSize}
                                    totalItemsCount={bigData.length}
                                    onChange={handlePageChange}
                                />
                            </Groups>
                        </Table.Footer>
                    )}
                    {dataset.length === 0 && loading && (
                        <EmptyState loading>
                            <EmptyState.Title>Загружаем данные</EmptyState.Title>
                            <EmptyState.Description>
                                Мы загружаем данные таблицы, очень скоро они будут готовы.
                            </EmptyState.Description>
                        </EmptyState>
                    )}
                    {dataset.length === 0 && error && (
                        <EmptyState>
                            <RoundIcon color='nice10'>
                                <CloseCancelX />
                            </RoundIcon>
                            <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
                            <EmptyState.Description>
                                Что-то пошло не так и мы уже работаем над этим.
                            </EmptyState.Description>
                        </EmptyState>
                    )}
                </Table>
            </div>
        );
    }}
```

#### Редактирование строки

```
    {() => {
        const [editRecord, setEditRecord] = React.useState(undefined);
        const edit = (id) => setEditRecord(ComponentHelpers.Table.data[id]);
        const isEditMode = (id) => editRecord && editRecord.id === id;
        const changeHandler = (id, key, value) => {
            const obj = { ...editRecord, [key]: value.value };
            setEditRecord(obj);
        };
        const save = (id) => {
            ComponentHelpers.Table.data[id] = editRecord;
            setEditRecord(undefined);
        };
        const cancel = () => {
            setEditRecord(undefined);
        };
        return (
            <Table data={ComponentHelpers.Table.data} size='m'>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => (
                        <>
                            {isEditMode(person.id) && (
                                <Input
                                    size='s'
                                    value={editRecord.firstName}
                                    onChange={(e, value) => changeHandler(person.id, 'firstName', value)}
                                />
                            )}
                            {!isEditMode(person.id) && person.firstName}
                        </>
                    )}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => (
                        <>
                            {isEditMode(person.id) && (
                                <Input
                                    size='s'
                                    value={editRecord.lastName}
                                    onChange={(e, value) => changeHandler(person.id, 'lastName', value)}
                                />
                            )}
                            {!isEditMode(person.id) && person.lastName}
                        </>
                    )}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {({ id, position }) => (
                        <>
                            {isEditMode(id) && (
                                <Select
                                    size='s'
                                    value={editRecord.position}
                                    onSelect={(e, value) => changeHandler(id, 'position', value)}>
                                    <Select.Option>Software Engineer</Select.Option>
                                    <Select.Option>PM</Select.Option>
                                    <Select.Option>CTO</Select.Option>
                                </Select>
                            )}
                            {!isEditMode(id) && position}
                        </>
                    )}
                </Table.Column>
                <Table.Column id='level' title='Level'>
                    {({ id, level }) => (
                        <>
                            {isEditMode(id) && (
                                <Select
                                    size='s'
                                    value={editRecord.level}
                                    onSelect={(e, value) => changeHandler(id, 'level', value)}>
                                    <Select.Option>1</Select.Option>
                                    <Select.Option>2</Select.Option>
                                    <Select.Option>3</Select.Option>
                                </Select>
                            )}
                            {!isEditMode(id) && (
                                <Badge color='miami30' size='s'>
                                    {level}
                                </Badge>
                            )}
                        </>
                    )}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.ActionsColumn id='actions' width='90px' align='right'>
                    {({ id }) => (
                        <>
                            {isEditMode(id) && (
                                <Groups size='xs'>
                                    <Table.ActionIcon title='Save' onClick={() => save(id)}>
                                        <Checkmark size='xs' />
                                    </Table.ActionIcon>
                                    <Table.ActionIcon title='Cancel' onClick={() => cancel()}>
                                        <CloseCancelX size='xs' />
                                    </Table.ActionIcon>
                                </Groups>
                            )}
                            {!isEditMode(id) && (
                                <Table.ActionIcon onClick={() => edit(id)}>
                                    <Edit size='xs' />
                                </Table.ActionIcon>
                            )}
                        </>
                    )}
                </Table.ActionsColumn>
            </Table>
        );
    }}
```

#### Редактирование колонки

```
    {() => {
        const [editColumn, setEditColumn] = React.useState(undefined);
        const edit = (columnName) => setEditColumn(columnName);
        const isEditMode = (columnName) => editColumn === columnName;
        const [editRecords, setEditRecords] = React.useState({});
        const changeHandler = (id, key, value) => {
            const obj = editRecords.id || {};
            obj[key] = value.value;
            setEditRecords({ ...editRecords, [id]: obj });
        };
        const save = () => {
            for (let [key, value] of Object.entries(editRecords)) {
                ComponentHelpers.Table.data[key] = { ...ComponentHelpers.Table.data[key], ...value };
            }
            setEditRecords({});
            cancelEdit();
        };
        const cancelEdit = () => {
            setEditColumn(undefined);
        };
        return (
            <>
                <Groups clean style={{ marginBottom: '10px' }}>
                    {!editColumn && (
                        <>
                            <Button onClick={() => edit('level')}>Reassign levels</Button>
                            <Button onClick={() => edit('position')}>Reassign Positions</Button>
                        </>
                    )}
                    {editColumn && (
                        <>
                            <Button design='accent' onClick={save}>
                                Save
                            </Button>
                            <Button design='ghost' onClick={cancelEdit}>
                                Cancel
                            </Button>
                        </>
                    )}
                </Groups>
                <Table data={ComponentHelpers.Table.data} size='m'>
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
                        {({ id, position }) => (
                            <>
                                {isEditMode('position') && (
                                    <Select
                                        size='s'
                                        value={editRecords[id] ? editRecords[id].position : position}
                                        onSelect={(e, value) => changeHandler(id, 'position', value)}>
                                        <Select.Option>Software Engineer</Select.Option>
                                        <Select.Option>PM</Select.Option>
                                        <Select.Option>CTO</Select.Option>
                                    </Select>
                                )}
                                {!isEditMode('position') && position}
                            </>
                        )}
                    </Table.Column>
                    <Table.Column id='level' title='Level'>
                        {({ id, level }) => (
                            <>
                                {isEditMode('level') && (
                                    <Select
                                        size='s'
                                        value={editRecords[id] ? editRecords[id].level : level}
                                        onSelect={(e, value) => changeHandler(id, 'level', value)}>
                                        <Select.Option>1</Select.Option>
                                        <Select.Option>2</Select.Option>
                                        <Select.Option>3</Select.Option>
                                    </Select>
                                )}
                                {!isEditMode('level') && (
                                    <Badge color='miami30' size='s'>
                                        {level}
                                    </Badge>
                                )}
                            </>
                        )}
                    </Table.Column>
                    <Table.Column id='phone' title='Phone'>
                        {(person) => person.phone}
                    </Table.Column>
                </Table>
            </>
        );
    }}
```

## Раскрывающиеся строки

С помощью комопнента `ExpandingRow` можно добавить в таблицу функционал раскрывающихся строк.

```
    <Table data={ComponentHelpers.Table.data}>
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

```
    {() => {
        const expanded = ['0'];
        const onExpand = (e, data) => {
            console.log(data);
        };
        return (
            <Table data={ComponentHelpers.Table.data}>
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
                <Table.ExpandingRow allowMultiple onExpand={onExpand} expandedRow={expanded} data-test='text'>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        );
    }}
```

## Изменение ширины колонки

Передав комопненту Table.Column флаг `resizable`, можно включить изменение ширины колонки.

Также вы можете передать свойство `maxContent`, тем самым переключив режим отображения контейнера таблицы с width: 100% на width: max-content, что позволит корректно управлять ресайзом при большом числе колонок, выходящих за пределы вьюпорта.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' resizable>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' resizable>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' resizable>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

## Перенос колонок

Переда комопненту Table.Column флаг `draggable`, можно разрешить перенос колонки.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' draggable>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' draggable>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' draggable>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' draggable>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

## Соритровка значений в колонке

Переда комопненту Table.Column флаг `sortable`, можно включить сортировку значений колонки. При этом таблице должен быть передан обратботчик `onSort`, который отсортирует массив данных. Также с помощью атрибута `sort` можно управлять изначальным состоянием сортировки в таблице.

```
    {() => {
        const [data, setData] = React.useState(ComponentHelpers.Table.data);
        const onSort = (e, { field, direction }) => {
            const dir = direction === 'desc' ? 1 : -1;
            if (field) {
                let newData = [...data].sort(function (a, b) {
                    let nameA = a[field].toUpperCase();
                    let nameB = b[field].toUpperCase();
                    let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                    return result * dir;
                });
                setData(newData);
            }
        };
        return (
            <Table data={data} onSort={onSort} sort={{ field: 'firstName', direction: 'desc' }}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' sortable>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' sortable>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' sortable>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        );
    }}
```

## Фильтрация значений в таблице

С помощью атрибута `filter` у компонента `Table.Column` можно управлять контролами фильтрации значений таблицы. Для упрощения реализации фильтрации таблица экспортирует дополнительные под-компоненты `InputFilter` и `SelectFilter`?, которые являются обертками над нативными компонентами дизайн-системы и поддерживают все их свойства. Также с помощью атрибута `filter` у родительского комопнента `Table` можно управлять изначальным состоянием фильтрации в таблице.

```
    {() => {
        const [filter, setFilter] = React.useState();
        const [sort, setSort] = React.useState();
        const onSort = (_, data) => {
            setSort(data);
        };
        const onFilter = (data) => {
            setFilter(Object.assign({}, data));
        };
        const data = (function () {
            let data = ComponentHelpers.Table.data;
            if (filter) {
                data = data.filter((i) => {
                    let filtered = true;
                    if (filtered && filter.firstName) {
                        const re = new RegExp(filter.firstName, 'i');
                        filtered = filtered && i.firstName.search(re) !== -1;
                    }
                    if (filtered && filter.firstName) {
                        const re = new RegExp(filter.lastName, 'i');
                        filtered = (filtered && !filter.lastName) || i.lastName.search(re) !== -1;
                    }
                    if (filtered && filter.position) {
                        filtered = filtered && i.position === filter.position;
                    }
                    return filtered;
                });
            }
            if (sort) {
                const { field, direction } = sort;
                const dir = direction === 'desc' ? 1 : -1;
                data = data.sort((a, b) => {
                    let nameA = a[field].toUpperCase();
                    let nameB = b[field].toUpperCase();
                    let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                    return result * dir;
                });
            }
            return data;
        })();
        return (
            <Table data={data} onSort={onSort} onFilter={onFilter} minHeight='200px' filter={{ firstName: 'Jane' }}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' sortable filter={<Table.InputFilter />}>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' sortable filter={<Table.InputFilter />}>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column
                    id='position'
                    title='Position'
                    filter={
                        <Table.SelectFilter>
                            <Select.Option>PM</Select.Option>
                            <Select.Option>Software Engineer</Select.Option>
                        </Table.SelectFilter>
                    }>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        );
    }}
```

#### Кастомные контроллы для фильтрации

Для реализации кастомных фильтров в атрибут `filter` можно передать render-функцию, которая в качестве аргумента получит метод установки значения фильтра.

```
    {() => {
        const [filter, setFilter] = React.useState();
        const onFilter = (data) => {
            setFilter(Object.assign({}, data));
        };
        const data = (function () {
            let data = ComponentHelpers.Table.data;
            if (filter) {
                data = data.filter((i) => {
                    return !filter.position || i.position === filter.position;
                });
            }
            return data;
        })();
        return (
            <Table data={data} onFilter={onFilter} minHeight='200px'>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column
                    id='position'
                    title='Position'
                    filter={(setFilter) => (
                        <Groups design='vertical'>
                            <Link design='accent' onClick={() => setFilter()}>
                                None
                            </Link>
                            <Link design='accent' onClick={() => setFilter('PM')}>
                                PM
                            </Link>
                            <Link design='accent' onClick={() => setFilter('Software Engineer')}>
                                Software Engineer
                            </Link>
                        </Groups>
                    )}>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        );
    }}
```

## События клика и двойного клика по строке

При клике на строку `onRowClick` или двойном клике `onRowDoubleClick`, обработчики возвращают объект со всеми данными строки таблицы

```
    {() => {
        return (
            <Table data={ComponentHelpers.Table.data} onRowClick={console.log} onRowDoubleClick={console.log}>
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
    }}
```

#### Column Group

С помощью компонента `ColumnGroup` можно колонки объединять в группы и задавать заголовок группы, цвет. Для дополнительного акцента на группе колонок можно использовать цветовой фон для заголовка группы из палитры Secondary / Basic с кодом цвета 10 ('miami10', 'sochi10', 'paris10', 'tokyo10', 'dubai10', 'nice10').

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.ColumnGroup title='Group 1' id='g1'>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name'>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name'>
                {(person) => person.lastName}
            </Table.Column>
        </Table.ColumnGroup>
        <Table.ColumnGroup title='Group 2' id='g2' color='tokyo10'>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table.ColumnGroup>
    </Table>
```

## Выбор строк

Передав компоненту обработчик `onSelect` можно включить режим выбора строк в таблице. При каждом клике на чекбокс выбора строки данный обработчик будет вызываться с 2мя параметрами: нативным событием и объектом `data`, в котором будут поля: `item` – объект данных, который был выбран, `isChecked`, флаг выбранности чекбокса, `isSelectedAll` – флаг клика по чекбоксу выбора всех строк в таблице (при этом `item` будет равен `null`).

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log}>
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

#### Selected

С помощью аттрибута `selected`, в который передается список объектов данных, можно контролировать начально состояние выбранных строк.

```
    <Table
        data={ComponentHelpers.Table.data}
        onSelect={console.log}
        selected={[ComponentHelpers.Table.data[0], ComponentHelpers.Table.data[3]]}>
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

#### disableSelectAll

Передав флаг `disableSelectAll` можно убрать чекбокс выбора всех строк.

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log} disableSelectAll>
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

#### SelectAll

Также таблица экспортирует компонент `Table.SelectAll`, позволяющий управлять выбранными данными при паджинировании данных. При этом при выборе каждой опции будет вызван обработчик `onSelect` с флагом `isSelectedAll` равным `true` и флагом `isSelectedFullData` равным true, если выбраны все строки в таблице и false – если нет.

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log}>
        <Table.SelectAll fullData={ComponentHelpers.Table.fullData} />
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

## Бесконечный скролл

С помощью обработчика `onScroll` можно реализовать функционал бесконечного скролла, вместо обычной паджинации.

```
    {() => {
        const bigData = ComponentHelpers.Table.fullData;
        const pageSize = 10;
        const paginate = (page, pageSize) => {
            return bigData.slice(0, page * pageSize);
        };
        const [currentPage, setCurrentPage] = React.useState(1);
        const [dataset, setData] = React.useState(paginate(currentPage, pageSize));
        const onScroll = React.useCallback((e) => {
            const { scrollTop, offsetHeight, scrollHeight } = e.target;
            if (scrollTop + offsetHeight + 10 > scrollHeight) {
                setCurrentPage(page => page + 1);
                setData(paginate(currentPage, pageSize));
            }
        });
        return (
            <Table data={dataset} onScroll={onScroll} maxHeight='350px'>
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
    }}
```

## GroupBy

С помощью компонента `Table.GroupBy` можно сгруппировать строки в таблице.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />
        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
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

#### GroupBy with selection

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log}>
        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
        <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />
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

## Закрепленные колонки

Флаг `pinnableColumns` включает режим закрепленных колонок. Этот флаг включает закрепление для систменых колонок выбора и раскрытия строк. В дополнение к этому, для закрепления пользователеской колонки, ей можно передать флаг `pinned`.  
Если на странице есть две таблицы с закрепленными колонками, необходимо указывать разный `id` у закрепленных колонок. Иначе отступ для закрепленной колонки из первой таблицы будет перезаписан отступом со второй таблицы.

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log} pinnableColumns>
        <Table.Column id='id' title='#' pinned>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' pinned>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' pinned>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName1' title='First Name'>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName1' title='Last Name'>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position1' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone1' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName2' title='First Name'>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName2' title='Last Name'>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position2' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone2' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName3' title='First Name'>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName3' title='Last Name'>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position3' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone3' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
        <Table.ExpandingRow>
            {(person) => (
                <span>
                    {person.lastName} {person.firstName}
                </span>
            )}
        </Table.ExpandingRow>
    </Table>
```

## Table service

Для управления всеми изменениями своего состояния таблица использует объект tableService. Этот объект реализует методы для изменения состояния каждой фичи внутри таблицы. При этом таблица дает возможность как передать функцию конструктор табличного сервиса – для изменения дефолтного поведения, так и экспортировать сервис наружу, для управления состоянием таблицы из вне. Для упрощения этих изменений ДС экспортирует как саму функцию-конструктор сервиса `tableService` так и его интерейс `TableService`.

#### Управление состоянием

Обработчик `onInit` позволяет экспортировать сервис и с помощью него управлять состоянием таблицы во внешнем контексте.

```
    {() => {
        let tableService;
        return (
            <div>
                <Groups style={{ margin: '10px' }}>
                    <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], true)}>
                        Select row 0
                    </Button>
                    <Button onClick={() => tableService.toggleExpandingRow('1')}>Expand row 1</Button>
                    <Button onClick={() => tableService.hideColumn('phone')}>Hide phone column</Button>
                </Groups>
                <Table
                    data={ComponentHelpers.Table.data}
                    onInit={({ service }) => {
                        tableService = service;
                    }}
                    onSelect={console.log}>
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
    }}
```

#### Переопределение сервиса

C помощью аттрибуте `service` можно передать свою функцию=конструктор табличного сервиса. При этом можно использовать дефолтный конструктор `tableService` для переиспользования дефолтного поведения.

```
    {() => {
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
            <Table data={ComponentHelpers.Table.data} service={customService}>
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
                <Table.ExpandingRow>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        );
    }}
```

#### Установка цвета у строк через сервис

С помощью сервиса есть возможность задать цвет у строк в таблице. Для это реализовано несколько методов:
* `setColoredRowsItem` - устанавливает цвет у конкретной строки, в метод передается объект с данными строки и цвета:
    
    ```
    tableService.setColoredRowsItem({
        id: '0',
        color: '#E1F5EB'
    })
    ```

    Где `id` - это `Data key` элемента данных таблицы или `id` по умолчанию, `color` - значение цвета, которое будет установлено в css свойство `background-color` для каждой ячейки этой строки
* `setColoredRows` - устанавливает цвет у нескольких строк, в метод передается массив объектов:
    ```
    tableService.setColoredRows([
        {
            id: '1',
            color: '#FFE3E1',
        },
        {
            id: '2',
            color: '#E1F5EB'
        }
    ])
    ```
* `getColoredRows` - возвращает массив объектов с данными строки и цвета:
    ```
    tableService.getColoredRows() // [{ id: '1', color: '#FFE3E1' }, { id: '2', color: '#E1F5EB' }]
    ```
* `getColoredRowColor` - Возвращает значение цвета конкретной строки или undefined, если цвет не задан. В метод передается `id`:
    ```
    tableService.getColoredRowColor('0') // '#E1F5EB' или undefined если цвет не задан
    ```
* `removeColoredRowsItem` - очищает цвет у конкретной строки, в метод передается `id`:
    ```
    tableService.removeColoredRowsItem('0')
    ```
* `removeAllColoredRows` - очищает цвет у всех строк:
    ```
    tableService.removeAllColoredRows()
    ```
* `toggleColoredRow` - вспомогательный метод для установки/очистки цвета строки, работает по принципу `toggle`:
    ```
    tableService.toggleColoredRow({
        id: '0',
        color: '#FFE9DC'
    })
    ```
    Пример реализации ниже.
* `toggleSingleColoredRow` - работает по аналогии как и `toggleColoredRow`, но устанавливает цвет только для одной строки, остальные очищаются (по принципиу радио группы, с возможностью убрать выбранное значение):
    ```
    tableService.toggleSingleColoredRow({
        id: '0',
        color: '#FFE9DC'
    })
    ```

```
    {() => {
        let tableService;
        React.useEffect(() => {
            tableService.setColoredRowsItem({
                id: '0',
                color: '#E1F5EB'
            });
            tableService.setColoredRows([
                {
                    id: '1',
                    color: '#FFE3E1',
                },
                {
                    id: '2',
                    color: '#E1F5EB',
                }
            ]);
        }, []);
        return (
            <div>
                <Groups style={{ margin: '10px' }}>
                    <Button onClick={() => tableService.removeAllColoredRows()}>Удалить цвет со все строк</Button>
                    <Button onClick={() => tableService.removeColoredRowsItem('0')}>Удалить цвет с первой строки</Button>
                </Groups>
                <Table
                    data={ComponentHelpers.Table.data}
                    onInit={({ service }) => {
                        tableService = service;
                    }}
                    onRowClick={((e, d) => {
                        tableService.toggleColoredRow({
                            id: d.id,
                            color: '#FFE9DC',
                        })
                    })}
                >
                    <Table.Column id="id" title="#" />
                    <Table.Column id="firstName" title="First Name" />
                    <Table.Column id="lastName" title="Last Name" />
                    <Table.Column id="position" title="Position" />
                    <Table.Column id="phone" title="Phone" />
                </Table>
            </div>
        );
    }}
```

## Table settings

С помощью компонента `Table.Settings` можно управлять настройками таблицы. В дополнение таблица экспортирует компонет `Table.ColumnsSettings` для изменения настроек колонок и компоненты `Table.GroupingSettings` и `Table.GroupingSettings.Item` для управления группировкой таблицы. При этом внутри `Table.GroupingSettings.Item` переиспользуется компонет `Table.GroupBy` с тем же интерфейсом.

```
    <Table data={ComponentHelpers.Table.data}>
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
        <Table.Settings>
            <Table.ColumnsSettings />
            <Table.GroupingSettings onGroupBy={console.log}>
                <Table.GroupingSettings.Item id='none' name='None' />
                <Table.GroupingSettings.Item id='position' name='By position'>
                    <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
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
```

#### Columns settings

Компонент `Table.ColumnsSettings` поддерживает поиск по колонкам, включающийся флагом `searchable`, и опцию скрытия/показа всех колонок, которая включается флагом `hideShowAll`.

```
    <Table data={ComponentHelpers.Table.data}>
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
        <Table.Settings>
            <Table.ColumnsSettings searchable hideShowAll />
        </Table.Settings>
    </Table>
```

## Пример работы Table Expanding Row с CustomWrapper

```
    {() => {
        const customWrapper = ({ children, tableConfig, noHover }) => {
            const { size } = tableConfig.base.settings;
            return (
                    <>
                        {children.map((person, idx) => (
                            <Table.Row noHover={noHover} key={idx}>
                                <Table.Td size={size} />
                                <Table.Td size={size}>{person.id}</Table.Td>
                                <Table.Td size={size}>{person.firstName}</Table.Td>
                                <Table.Td size={size}>{person.lastName}</Table.Td>
                                <Table.Td size={size}>{person.position}</Table.Td>
                                <Table.Td size={size}>{person.phone}</Table.Td>
                            </Table.Row>
                        ))}
                    </>
            );
        };
        return (
            <Table data={ComponentHelpers.Table.data}>
                <Table.Column id='id' title='#' resizable>
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
                <Table.ExpandingRow allowMultiple customWrapper={customWrapper}>
                    {(person) => [person, person]}
                </Table.ExpandingRow>
            </Table>
        );
    }}
```
