# Table

Компонент таблицы

## Импорт

```
import { Table } from 'vienna-ui';
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| data | `T[]` | — |  |
| size | `TableSize` | — |  |
| valign | `TableValign` | — |  |
| noHeader | `boolean \| undefined` | — |  |
| noRowDivider | `boolean \| undefined` | — |  |
| maxHeight | `string \| undefined` | — |  |
| minHeight | `string \| undefined` | — |  |
| noOverflow | `boolean \| undefined` | — |  |
| disableSelectAll | `boolean \| undefined` | — |  |
| disableCheckboxSelectAll | `boolean \| undefined` | — |  |
| disableCheckboxes | `boolean \| undefined` | — |  |
| maxContent | `boolean \| undefined` | — |  |
| pinnableColumns | `boolean \| undefined` | — |  |
| selected | `T[]` | — |  |
| sort | `{ field: string; direction: SortDirection; } \| undefined` | — |  |
| filter | `FilterState<T> \| undefined` | — |  |
| dataKey | `((item: T, index: number) => string) \| undefined` | — |  |
| onRowClick | `OnChangeHandler<T \| GroupTitleInterface<T>, React.MouseEventHTMLElement>, null>` | — |  |
| onRowItemClick | `OnChangeHandler<T, React.MouseEventHTMLElement>, null>` | — |  |
| onRowGroupClick | `OnChangeHandler<GroupTitleInterface<T>, React.MouseEventHTMLElement>, null>` | — |  |
| onRowDoubleClick | `OnChangeHandler<T \| GroupTitleInterface<T>, React.MouseEventHTMLElement>, null>` | — |  |
| onRowRightClick | `OnChangeHandler<T, React.MouseEventHTMLElement>, null>` | — |  |
| onSort | `OnChangeHandler<{ field: string; direction: SortDirection; }, React.FormEvent \| undefined, null>` | — |  |
| onFilter | `((data?: T) => void) \| undefined` | — |  |
| onSelect | `OnChangeHandlerTableOnSelectData<T>, React.FormEvent, null>` | — |  |
| onScroll | `((event: React.UIEventHTMLElement>) => void) \| undefined` | — |  |
| initState | `TableState<T> \| ((state: TableState<T>) => TableState<T>)` | — |  |
| state | `TableState<T>` | — |  |
| service | `TableServiceFactory<T>` | — |  |
| onUpdate | `(newState: TableState<T>, id: ModuleName \| string) => void` | — |  |
| onInit | `({ service: TableService<T>, state: TableState<T> }) => void` | — |  |
| expandedRow | `boolean \| undefined` | — |  |
| filterExpandingRow | `(item: T) => boolean` | — |  |
| onExpand | `() => void \| undefined` | — |  |
| onClickShowAllColumns | `() => void \| undefined` | — |  |
| enableCancelSort | `boolean \| undefined` | — |  |
| noBorderBottom | `boolean \| undefined` | — |  |
| noBorderBottomForLastRow | `boolean \| undefined` | — |  |
| isError | `boolean \| undefined` | — |  |
| isLoading | `boolean \| undefined` | — |  |
| isEmpty | `boolean \| undefined` | — |  |
| indeterminate | `boolean \| undefined` | — |  |
| indeterminated | `T[]` | — |  |
| disableCheckboxRow | `T[]` | — |  |
| noWrap | `boolean` | — |  |
| columns | `ColumnProps<T>[]` | — |  |
| showSettingsAlarm | `boolean` | — |  |
| testId | `{ row?: (val: string) => string; cell?: (row: string, col: string) => string; }` | — |  |
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

## ColumnProps

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | `string` | — |  |
| children | `ReactNode \| ((data: T, index: number) => ReactNode)` | — |  |
| title | `ReactNode` | — |  |
| titleHint | `string` | — |  |
| titleSettings | `ReactNode` | — |  |
| align | `'left' \| 'center' \| 'right'` | — |  |
| width | `string \| undefined` | — |  |
| minWidth | `string \| undefined` | — |  |
| truncate | `boolean \| undefined` | — |  |
| noWrap | `boolean \| undefined` | — |  |
| hidden | `boolean \| undefined` | — |  |
| resizable | `boolean \| undefined` | — |  |
| sortable | `boolean \| undefined` | — |  |
| draggable | `boolean \| undefined` | — |  |
| pinned | `boolean \| undefined` | — |  |
| groupId | `string \| undefined` | — |  |
| filter | `ReactNode \| ((setFilter: (value?: unknown) => void) => ReactNode) \| undefined` | — |  |
| forceIconVisibility | `boolean \| undefined` | — |  |
| monospaceFont | `boolean \| undefined` | — |  |
| onClick | `(event: React.MouseEvent) => void \| undefined` | — |  |
| disableHide | `boolean` | — |  |
| leftBorder | `boolean` | — |  |
| cropText | `boolean` | — |  |
| wordBreak | `React.CSSProperties['wordBreak']` | — |  |


## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string | |
| title | ReactNode | |
| width | string \| undefined | |
| hidden | boolean \| undefined | |
| draggable | boolean \| undefined | |



# Table

Компонент таблицы



```
    {() => {
        // Здесь и далее в примерах используются данные приведенного ниже формата:
        const data = [
            {
                id: '0',
                level: '1',
                firstName: 'Joseph',
                lastName: 'Doe',
                position: 'Software Engineer',
                phone: '9163456789',
            },
            {
                id: '1',
                level: '2',
                firstName: 'Jane',
                lastName: 'Doe',
                position: 'PM',
                phone: '9163456780',
            },
            {
                id: '2',
                level: '3',
                firstName: 'Johnnie',
                lastName: 'Walker',
                position: 'Software Engineer',
                phone: 'none',
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
    }}
```

## Использование

```
    {() => {
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
            </Table>
        );
    }}
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

Для корректной работы у каждого элемента данных таблицы должен быть уникальный ключ. Этот ключ, в частности, будет использоваться как значение атрибута `key` при отрисовке строк таблицы, а так же для других фич таблицы, работающих с элементами данных, например, раскрывающиеся строки. По умолчанию таблица в качестве такого ключа ожидает наличие в элементе массива `data` поля с соответсвующим `id`. Это поведение можно изменить с помощью атрибута dataKey. В данный атрибут передается функция, которая принимает объект данных item и возвращает уникальный ключ для этого объекта.

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

Высота строки регулируетcя с помощью атрибута `size`, поддерживается 4 размера: `xs`, `s`, `m` и `l`. Значение по умолчаниию: `s`.

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

#### Максимальная высота таблицы

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

#### Скрытие шапки таблицы

Передав флаг `noHeader`, можно спрятать шапку таблицы.

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

#### Режим без разделителей строк

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

#### Ширина колонок и запрет переноса строки

Ширину колонок можно контролировать с помощью атрибута `width` у компонента `Column`. При этом с помощью флага `noWrap` можно запретить перенос строки для значений данной колонки.

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

#### Минимальная ширина колонок таблицы

Свойство `minWidth` устанавливает минимальную ширину колонке. Работает так же со свойством resizable.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#' width='50px'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' width='300px' minWidth='200px' resizable>
            {(person) => `${person.firstName} ${person.lastName}`}
        </Table.Column>
        <Table.Column id='position' title='Position'>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

#### Использование флага noWrap для всей таблицы

С помощью флага `noWrap` можно запретить перенос строки для значений всей таблицы.

```
    <Table data={ComponentHelpers.Table.data} noWrap>
        <Table.Column id='id' title='#' width='10px'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' width='100%'>
            {(person) => `${person.firstName} ${person.lastName}`}
        </Table.Column>
        <Table.Column id='position' title='Position'>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' width='110px'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

#### Выравнивание значений в колонке

Выравниванием значений в столбце можно управлять с помощью атрибута `align`. Будет выравниваться шапка, содержимое и окно фильтрации в колонке.

```
    {() => {
        const [filter, setFilter] = React.useState({});
        const [sort, setSort] = React.useState();
        const onSort = ({value}) => {
            setSort(value);
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
                    if (filtered && filter.lastName) {
                        const re = new RegExp(filter.lastName, 'i');
                        filtered = (filtered && !filter.lastName) || i.lastName.search(re) !== -1;
                    }
                    if (filtered && filter.position) {
                        const re = new RegExp(filter.position, 'i');
                        filtered = (filtered && !filter.position) || i.position.search(re) !== -1;
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
            <Table data={data} onSort={onSort} onFilter={onFilter} minHeight='200px'>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' sortable forceIconVisibility filter={<Table.InputFilter />}>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' sortable forceIconVisibility align='center' filter={<Table.InputFilter />}>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column
                    id='position'
                    title='Position'
                    forceIconVisibility
                    sortable
                    align='right'
                    filter={<Table.InputFilter />}>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone' >
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        );
    }}
```

#### Управление браузерной подсказкой в th

По умолчанию подсказка формируется из свойства `title` в Table.Column, если туда передана строка.
А также есть отдельное свойство `titleHint` с типом `string`. У него приоритет выше, чем у `title`.
Т.е. если в `title` передана строка и указано свойство `titleHint`, подсказка будет выводиться из `titleHint`.
Можно скрыть браузерный тултип, передав пустую строку - titleHint="".

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='name' title='Name' titleHint='Full name'>
            {(person) => `${person.firstName} ${person.lastName}`}
        </Table.Column>
        <Table.Column id='position' title={<span>Person Position</span>} titleHint='Position'>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

#### Обрезка значения в ячейке

С помощью флага `truncate` можно обрезать значение ячейки и добавить многоточие. При этом полный текст будет добавлен в `title` ячейки.

Обратите внимание, что ширина ячейки в этом случае должна быть задана явно.

Для сокращения текста в заголовке столбца, используйте `title?: React.ReactNode`, таким образом вы сможете задать для него любые стили.

Также для переноса очень длинного текста можно передать свойство `wordBreak` для колонки.

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

#### Футер таблицы

В дополнение к `Column` компонент таблицы экспортирует подкомпонент `Footer`, который позволяет задать футер таблицы.

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
                <AddRingIcon /> Добавить данные
            </Link>
        </Table.Footer>
    </Table>
```

#### ActionsColumn, ActionIcon and ActionsListIcon

Компонент также экспортирует подкомпонент иконки действия над строкой `ActionIcon`, подкомпонент иконки списка действий `ActionsListIcon` и подкомопнент колонки для иконок действия `ActionsColumn`. Обе эти иконки невидимы по умолчанию и отображаются только при наведении на строку.

При этом размер используемых в `ActionIcon` иконок зависит от размера таблицы. В таблице размера `s` используются иконки размера `xs`, при размере `m` и `s` используются иконки размера `s`. Размер иконки в `ActionsListIcon` изменяется автоматически самим компонентом таблицы.

У компонента `ActionIcon` есть такие свойства:
- disabled
- isAlwaysVisible - иконки будут видимы по умолчанию и отображаются всегда
- color - любой цвет из палитры как в `IconContainer`
- tooltipTextForDisabled - возможность кастомизации текста тултипа при disabled
- loading - для отображения спиннера при дизейбл состоянии, без тултипа

При малом количестве строк в таблице рекомендуем использовать свойство `fixed` для корректного отображения `DropList` при нажатии на `ActionsListIcon`.

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
        <Table.ActionsColumn id='actions' width='110px' >
            {() => (
                <Groups size='xs'>
                    <Table.ActionIcon title='Edit' disabled tooltipTextForDisabled='Редактирование невозможно'>
                        <EditIcon size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionIcon title='Delete' isAlwaysVisible color="nice10">
                        <TrashDeleteIcon size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionsListIcon title='More' loading>
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

Либо можно передать компоненту состояние ошибки/загрузки/пустой таблицы флагами `isError/isLoading/isEmpty`. Дефолтные состояния не будут отображаться,
если передан `EmptyState` даже при наличии соответсвтующего флага.

```
    <Table isError>
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

#### Проблема с кастомным EmptyState в качестве отдельного компонента

Чтобы передать в таблицу отдельный компонент с EmptyState, необходимо обернуть его в `Table.EmptyState`

```
{() => {
    const EmptyStateComponent = () => {
        return (
            <EmptyState>
                <IconContainer color='oslo10'>
                    <SearchIcon />
                </IconContainer>
                <EmptyState.Title>Кастомный заголовок экрана загрузки</EmptyState.Title>
                <EmptyState.Description>Кастомное описание</EmptyState.Description>
            </EmptyState>
        );  };
    return (
        <Table data={[]}>
            <Table.Column id="id" title="#">
                {person => person.id}
            </Table.Column>
            <Table.Column id="firstName" title="First Name">
                {person => person.firstName}
            </Table.Column>
            <Table.Column id="lastName" title="Last Name">
                {person => person.lastName}
            </Table.Column>
            <Table.Column id="position" title="Position">
                {person => person.position}
            </Table.Column>
            <Table.Column id="phone" title="Phone">
                {person => person.phone}
            </Table.Column>
            <Table.EmptyState>
                <EmptyStateComponent/>
            </Table.EmptyState>
        </Table>
    )
}}
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

В проп `localization` можно так же передать функцию, которая будет для каждого лейбла вызываться с его ключем и должна будет вернуть его необходимое значение. Это может быть удобно для использования с локализационными фреймворками, например i18n.

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

## Управление внешними отступами

Также компонент наследует margin-атрибуты компонента `Whitespace` для управления внешними отступами карточки. Подробнее про эти атрибуты можно почитать на странице компонента [Whitespace](/components/whitespace)

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

## Интерактивный режим

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
        const handlePageChange = ({ pageIndex, pageSize }) => {
            const data = paginate(pageIndex, pageSize);
            setData(data);
        };
        // markup
        return (
            <div>
                <Groups bottomGap>
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
                                    <EditIcon size='xs' />
                                </Table.ActionIcon>
                                <Table.ActionIcon title='TrashDelete'>
                                    <TrashDeleteIcon size='xs' />
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
                                    <AddRingIcon /> Добавить данные
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
                            <IconContainer color='nice10'>
                                <CloseCancelXIcon />
                            </IconContainer>
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
                                    onChange={(value) => changeHandler(person.id, 'firstName', value)}
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
                                    onChange={(value) => changeHandler(person.id, 'lastName', value)}
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
                                    onSelect={(value) => changeHandler(id, 'position', value)}>
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
                                    onSelect={(value) => changeHandler(id, 'level', value)}>
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
                                        <CheckmarkIcon size='xs' />
                                    </Table.ActionIcon>
                                    <Table.ActionIcon title='Cancel' onClick={() => cancel()}>
                                        <CloseCancelXIcon size='xs' />
                                    </Table.ActionIcon>
                                </Groups>
                            )}
                            {!isEditMode(id) && (
                                <Table.ActionIcon onClick={() => edit(id)}>
                                    <EditIcon size='xs' />
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
                                        onSelect={(value) => changeHandler(id, 'position', value)}>
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
                                        onSelect={(value) => changeHandler(id, 'level', value)}>
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

#### Настройки выпадающей строки

Передав в `ExpandingRow` флаг `allowMultiple`, можно разрешить раскрытие нескольких строк одновременно. Также в компонент можно передать атрибут `onExpand` для обработчика раскрытия строки и атрибут `expandedRow`, для управления начальным состоянием раскрытых строк. При этом, если передан флаг `allowMultiple`, `expandedRow` будет ожидать массив id строк, а если нет – то одно значение.

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


#### `noBorderBottom`

У раскрывающихся строк можно отключить бордер между самой строкой и ее контентом в открытом состоянии - за это отвечает проп `noBorderBottom`.

```
    {() => {
        const expanded = ['0'];
        const onExpand = (e, data) => {
            console.log(data);
        };
        return (
            <Table data={ComponentHelpers.Table.data} noBorderBottom>
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

#### Фильтрация раскрывающихся строк

Передав в `Table` функцию `filterExpandingRow`, можно отфильтровать строки в которых не должен выполняться функционал раскрывающихся строк.

Первым аргументом в функцию передается элемент массива из свойства `data`, а сама функция должна возвращать булевое значение.

Где `true` - выполнять функционал, `false` - нет.

```
    <Table data={ComponentHelpers.Table.data} filterExpandingRow={(person) => person.id !== '1'}>
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

#### Пример работы раскрывающейся строки с CustomWrapper
Для того, чтобы контент раскрывающейся строки не был по умолчанию обернут в строку с единственной ячейкой, например, когда нужно расположить строки под строками, можно использовать собственную обертку.

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

Передав комопненту Table.Column флаг `draggable`, можно разрешить перенос колонки.
Колонки можно переносить через drag&drop заголовков столбцов или в настройках таблицы.

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

## Сортировка

#### Стандартная сортировка значений в колонке

Передав компоненту Table.Column флаг `sortable`, можно включить сортировку значений колонки.
У таблицы есть стандартная функция сортировки, где можно настроить направление сортировки по возрастанию или по убыванию, передав для этого название столбца для сортировки и параметр direction в sort: `sort={{ field: 'firstName', direction: "desc" }}`
Сортировка осуществляется только по строковым значением, если у вас объект, то используйте кастомную сортировку.
Также с помощью свойства `sort` можно управлять изначальным состоянием сортировки в таблице.

<ComponentHelpers.Select.Info style={{marginBottom: '30px'}}>
    <WarningRingIcon size='xl' />
    <div>
        Свойство <span>sort</span> определяет изначальное состояние сортировки таблицы при инициализации компонента.
        Для программного изменения сортировки используйте методы сервиса <a href="/components/table#table-service">tableService</a>: <span>getSortColumn</span>, <span>setSortColumn</span> и <span>resetSort</span>.
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [data, setData] = React.useState(ComponentHelpers.Table.data);
        return (
            <Table data={data} sort={{ field: 'firstName', direction: "desc" }}>
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

#### Кастомная сортировка значений в колонке
Стандартную функцию сортировки можно переопределить, передав проп `onSort`.

```
    {() => {
        const [data, setData] = React.useState(ComponentHelpers.Table.data);
        const onSort = ({value: { field, direction }}) => {
            const dir = direction === "desc" ? -1 : 1;
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
            <Table data={data} onSort={onSort} sort={{ field: 'firstName', direction: "desc" }}>
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

#### Сортировка внутри группы
Значения сортируются внутри группы, не меняя порядок самих групп.

```
    {() => {
        return (
                <Table data={ComponentHelpers.Table.data}>
                    <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />
                    <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                    <Table.Column id='id' title='#'>
                        {(person) => person.id}
                    </Table.Column>
                    <Table.Column id='firstName' title='First Name' sortable>
                        {(person) => person.firstName}
                    </Table.Column>
                    <Table.Column id='lastName' title='Last Name'>
                        {(person) => person.lastName}
                    </Table.Column>
                    <Table.Column id='position' title='Position' sortable>
                        {(person) => person.position}
                    </Table.Column>
                    <Table.Column id='phone' title='Phone' sortable>
                        {(person) => person.phone}
                    </Table.Column>
                </Table>
        )
    }}
```

#### Отмена сортировки значений в колонке по 3 клику

Передав комопненту Table флаг `enableCancelSort`, можно отменить сортировку значений колонки по 3 клику.

```
    {() => {
        const [data, setData] = React.useState(ComponentHelpers.Table.data);
        const onSort = ({value:  { field, direction }}) => {
            if (field && direction === "none") {
                setData(ComponentHelpers.Table.data);
                return;
            }
            const dir = direction === "desc" ? -1 : 1
            if (field) {
                let newData = [...data].sort(function(a, b) {
                    let nameA = a[field].toUpperCase()
                    let nameB = b[field].toUpperCase()
                    let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0
                    return result * dir
                })
                setData(newData)
            }
        };
        return (
            <Table data={data} onSort={onSort} sort={{ field: 'firstName', direction: "none"}} enableCancelSort>
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

#### Программный сброс сортировки

Для программного сброса сортировки используйте метод `resetSort` из `tableService`.

```
    {() => {
        let tableService;
        const [data, setData] = React.useState(ComponentHelpers.Table.data);
        const [sort, setSort] = React.useState(undefined);
        const onSort = ({ value }) => {
            const { direction } = value;
            const field = value.field;
            if (direction !== 'none') {
                const dir = direction === 'desc' ? -1 : 1;
                const newData = [...data].sort(function (a, b) {
                    const valueA = a[field];
                    const prettyValueA = typeof valueA === 'string' ? valueA.toUpperCase() : valueA;
                    const valueB = b[field];
                    const prettyValueB = typeof valueB === 'string' ? valueB.toUpperCase() : valueB;
                    const result = prettyValueA < prettyValueB ? -1 : prettyValueA > prettyValueB ? 1 : 0;
                    return result * dir;
                });
                setData(newData);
                setSort({ field, direction });
            } else {
                setData(ComponentHelpers.Table.data);
                setSort(undefined);
            }
        };
        return (
            <Groups design="vertical">
                <Button
                    onClick={() => {
                        tableService.resetSort();
                    }}>
                    Clear sort
                </Button>
                <Table
                    data={data}
                    onSort={onSort}
                    sort={sort}
                    onInit={({ service }) => {
                        tableService = service;
                    }}>
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
            </Groups>
        );
    }}
```

## Фильтрация значений в таблице

С помощью атрибута `filter` у компонента `Table.Column` можно управлять контролами фильтрации значений таблицы.
Для упрощения реализации фильтрации таблица экспортирует дополнительные подкомпоненты `InputFilter` | `SelectFilter` | `DatePickerFilter` | `DatePickerRangeFilter`,
которые являются обертками над нативными компонентами дизайн-системы и поддерживают все их свойства.
Также с помощью атрибута `filter` у родительского комопнента `Table` можно управлять изначальным состоянием фильтрации в таблице.
В окне фильтрации сортируемой колонки, при повторном выборе направления сортировки, происходит её отмена.
Проп forceIconVisibility позволяет сделать иконку фильтрации видимой всегда, а не только при наведении.

```
    {() => {
        const dataWithDates = ComponentHelpers.Table.data.map(function(item,index) {
            return {...item, date: `22.07.202${index}`, dateRange: `1${index}.07.2024`}
        });
        const defaultFilterValue = { firstName: 'Jane' };
        const [filter, setFilter] = React.useState(defaultFilterValue);
        const [sort, setSort] = React.useState();
        const onSort = (_, data) => {
            setSort(data);
        };
        const onFilter = (data) => {
            setFilter(Object.assign({}, data));
        };
        const data = (function () {
            let data = dataWithDates;
            if (filter) {
                data = data.filter((i) => {
                    let filtered = true;
                    if (filtered && filter.date) {
                        const re = new RegExp(filter.date, 'i');
                        filtered = filtered && i.date.search(re) !== -1;
                    }
                    if (filtered && filter.dateRange) {
                        const getDate = (arg) => parse(arg, 'dd.MM.yyyy', new Date());
                        const range = filter.dateRange.split(' - ');
                        const rangeStart = getDate(range[0]).getTime();
                        const rangeEnd = getDate(range[1]).getTime();
                        const value = getDate(i.dateRange).getTime();
                        filtered = value > rangeStart && value < rangeEnd;
                    }
                    if (filtered && filter.firstName) {
                        const re = new RegExp(filter.firstName, 'i');
                        filtered = filtered && i.firstName.search(re) !== -1;
                    }
                    if (filtered && filter.lastName) {
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
            <Table data={data} onSort={onSort} onFilter={onFilter} minHeight='200px' filter={defaultFilterValue}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' sortable forceIconVisibility filter={<Table.InputFilter />}>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' sortable forceIconVisibility filter={<Table.InputFilter />}>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column
                    id='date'
                    title='Date'
                    sortable
                    filter={<Table.DatePickerFilter />}
                    forceIconVisibility>
                    {(person) => person.date}
                </Table.Column>
                <Table.Column
                    id='dateRange'
                    title='Date range'
                    sortable
                    filter={<Table.DatePickerRangeFilter />}
                    forceIconVisibility>
                    {(person) => person.dateRange}
                </Table.Column>
                <Table.Column
                    id='position'
                    title='Position'
                    forceIconVisibility
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

#### Фильтрация внутри группы

Фильтруем по значениям в группе. Если в группе нет подходящих под фильтрацию значений, то скрываем ее.

```
    {() => {
    const [filter, setFilter] = React.useState()
    const onFilter = data => {
        setFilter(Object.assign({}, data));
    }
    const data = (function() {
        let data = ComponentHelpers.Table.data;
        if (filter) {
        data = data.filter(i => {
            let filtered = true;
            if (filtered && filter.firstName) {
                const re = new RegExp(filter.firstName, 'i');
                filtered = filtered && i.firstName.search(re) !== -1;
            }
            if (filtered && filter.position) {
                filtered = filtered && i.position === filter.position;
            }
            return filtered;
        })
        }
        return data
    })();
    return (
        <>
            <Table
                data={data}
                onFilter={onFilter}
            >
                 <Table.GroupBy
                    id="sde"
                    title="SDE"
                    filter={item => item.position === "Software Engineer"}
                />
                <Table.GroupBy
                    id="pm"
                    title="Project Managers"
                    filter={item => item.position === "PM"}
                />
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column
                    id='firstName'
                    title='First Name'
                    width='300px'
                    resizable
                    filter={
                        <Table.SelectFilter>
                            <Select.Option>Joseph</Select.Option>
                            <Select.Option>Johnnie</Select.Option>
                            <Select.Option>Jane</Select.Option>
                            <Select.Option>James</Select.Option>
                            <Select.Option>John</Select.Option>
                        </Table.SelectFilter>
                    }>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column
                    id='lastName'
                    title='Last Name'
                    width='300px'
                    resizable>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' filter={
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
        </>
    );
    }}
```

## События клика по строке

При клике на строку `onRowClick`, двойном клике `onRowDoubleClick` или клике правой кнопкой мыши `onRowRightClick`, обработчики возвращают объект со всеми данными строки таблицы.

```
    {() => {
        return (
            <Table data={ComponentHelpers.Table.data} onRowClick={console.log} onRowDoubleClick={console.log} onRowRightClick={console.log}>
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

#### Объединение колонок в группы

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

Передав компоненту обработчик `onSelect` можно включить режим выбора строк в таблице. При каждом клике на чекбокс выбора строки данный обработчик будет вызываться с 2мя параметрами: нативным событием и объектом `data`, в котором будут поля: `item` – объект данных, который был выбран, `isChecked` - флаг выбранности чекбокса, `isSelectedAll` – флаг клика по чекбоксу выбора всех строк в таблице (при этом `item` будет равен `null`) и флаг `isRowIndeterminate` - сообщающий добавлено ли состояние indeterminate чекбоксам в строке таблицы.
Также с помощью флага `pinnableColumns` можно закрепить колонку с чекбоксами. Область клика - вся ячейка, содержащая checkbox.

```
    <Table data={ComponentHelpers.Table.data} pinnableColumns onSelect={console.log}>
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

#### Управление начальным состоянием выбранных строк

С помощью атрибута `selected`, в который передается список объектов данных, можно контролировать начальное состояние выбранных строк.

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

#### Disable чекбоксов

##### Disable всех чекбоксов

Чтобы задизейблить все чекбоксы в таблице, нужно передать проп `disableCheckboxes`.

```
    <Table
        data={ComponentHelpers.Table.data}
        disableCheckboxes
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

##### Disable некоторых чекбоксов

Чтобы задизейблить определенные чекбоксы в таблице, нужно передать массив строк в проп `disableCheckboxRow`.
Также это можно сделать через сервис `toggleSelectRow`. Пример использования можно посмотреть в разделе Table service.

```
    <Table
        data={ComponentHelpers.Table.data}
        disableCheckboxRow={[ComponentHelpers.Table.data[0], ComponentHelpers.Table.data[3]]}
        onSelect={console.log}
    >
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

#### Состояние indeterminate

Свойство `indeterminate` позволяет добавить состояние `indeterminate` чекбоксам в таблице.
Чтобы добавить состояние определенным строкам, нужно передать массив строк свойству indeterminated.
Также это можно сделать через сервис `toggleSelectRow`. Пример использования можно посмотреть в разделе Table service.

```
    <Table
        data={ComponentHelpers.Table.data}
        onSelect={console.log}
        indeterminate
        indeterminated={[ComponentHelpers.Table.data[3], ComponentHelpers.Table.data[4]]}
    >
        <Table.SelectAll fullData={ComponentHelpers.Table.data} />
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

#### Удаление чекбокса выбора строк

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

#### Управление данными при пагинации

Также таблица экспортирует компонент `Table.SelectAll`, позволяющий управлять выбранными данными при пагинации.
При этом при выборе каждой опции будет вызван обработчик `onSelect` с флагом `isSelectedAll` равным `true` и флагом `isSelectedFullData` равным true, если выбраны все строки в таблице и false – если нет.
Если выбраны все строки на странице - отображается блок с возможностью выбора встрех строк в таблице.
Если выбраны все строки в таблице - отображается блок с возможностью сброса выбора всех строк.

```
    {()=> {
        const pageSize = 10;
        const paginate = (page, pageSize) => {
            return ComponentHelpers.Table.fullData.slice(page * pageSize, (page + 1) * pageSize);
        };
        const initData = () => {
            return paginate(0, pageSize);
        };
        const [dataset, setData] = React.useState(initData());
        const handlePageChange = ({ pageIndex, pageSize }) => {
            const data = paginate(pageIndex, pageSize);
            setData(data);
        };
        return(
            <Table data={dataset} onSelect={console.log}>
                <Table.SelectAll fullData={ComponentHelpers.Table.fullData}/>
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
                    <Pagination
                        size='s'
                        pageSize={pageSize}
                        totalItemsCount={ComponentHelpers.Table.fullData.length}
                        onChange={handlePageChange}
                    />
                </Table.Footer>
            </Table>);
    }}
```

#### Сортировка всеx строк таблицы с пагинацией

Чтобы сортировать или фильтровать всю таблицу с пагинацией, а не отдельные страницы, необходимо прокинуть в таблицу свойства `pageSize` и `currentPage`,
а также в `data` передать все строки таблицы.

```
    {()=> {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = React.useState(0);
    const handlePageChange = ({ pageIndex }) => {
        setCurrentPage(pageIndex);
    };
    return (
        <Table
            currentPage={currentPage}
            pageSize={pageSize}
            data={ComponentHelpers.Table.fullData}         
          >
            <Table.Column id='id' title='#' sortable>
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
            <Table.Footer id='footer'>
                <Pagination
                    size='s'
                    pageSize={pageSize}
                    totalItemsCount={ComponentHelpers.Table.fullData.length}
                    currentPage={currentPage}
                    onChange={handlePageChange}
                />
            </Table.Footer>
        </Table>);
    }}
```

## Бесконечный скролл

С помощью обработчика `onScroll` можно реализовать функциональность бесконечного скролла вместо обычной паджинации.

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

##  Группировка строк

С помощью компонента `Table.GroupBy` можно сгруппировать строки в таблице.

```
    {() => {
        return (
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
        )
    }}
```

#### Группировка строк с выбором

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

#### Раскрытие групп

Передав параметр `expandable`, можно сделать группу раскрываемой.
Изначальное состояние задается параметром `expandedDefault` (по умолчанию - true).

Если при группировке возможно попадание строк более чем в одну группу,
передайте кастомную функцию `dataKey` чтобы избежать ошибку, вызванную одинаковыми ключами элементов.

```
    <Table data={ComponentHelpers.Table.data} dataKey={(item) => `${item.id}-${item.groupId}`}>
        <Table.GroupBy id='pm'
                       title='Project Managers'
                       filter={(item) => item.position === 'PM'}
                       onExpand={console.log}
                       expandable
        />
        <Table.GroupBy id='sde'
                       title='SDE'
                       filter={(item) => item.position === 'Software Engineer'}
                       onExpand={console.log}
                       expandable
        />
        <Table.GroupBy id="doe"
                       title="Names Doe"
                       filter={item => item.lastName === 'Doe'}
                       expandable
                       expandedDefault={false}
        />
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

Флаг `pinnableColumns` включает режим закрепленных колонок для системных колонок выбора и раскрытия строк. В дополнение к этому, для закрепления пользовательской колонки ей можно передать флаг `pinned`.
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
        <Table.Column id='position'>
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
        <Table.Column id='position1' title='Position'>
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
        <Table.Column id='position2' title='Position'>
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
        <Table.Column id='position3' title='Position'>
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

Для управления всеми изменениями своего состояния таблица использует объект `tableService`. Этот объект реализует методы для изменения состояния каждой фичи внутри таблицы. При этом таблица дает возможность как передать функцию-конструктор табличного сервиса – для изменения дефолтного поведения, так и экспортировать сервис наружу, для управления состоянием таблицы извне. Для упрощения этих изменений ДС экспортирует как саму функцию-конструктор сервиса `tableService`, так и его интерейс `TableService`.

#### Управление состоянием

Обработчик `onInit` позволяет экспортировать сервис и с помощью него управлять состоянием таблицы во внешнем контексте. Если вы используете внешний стейт таблицы, для его инициализации и обновления вместо `onInit` пользуйтесь `onUpdate`.

```
    {() => {
        let tableService;
        return (
            <div>
                <Groups bottoGap>
                    <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0],  { isSelect: true })}>
                        Select row 0
                    </Button>
                    <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], { isIndeterminate: true })}>
                        Indeterminate row 0
                    </Button>
                    <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0],  { isCheckboxDisabled: true })}>
                        Disable row 0
                    </Button>
                    <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0],  { isCheckboxDisabled: false })}>
                        Enable row 0
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

C помощью атрибута `service` можно передать свою функцию-конструктор табличного сервиса. При этом можно использовать дефолтный конструктор `tableService` для переиспользования дефолтного поведения.

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

С помощью сервиса есть возможность задать цвет у строк в таблице. Для этого реализовано несколько методов:
* `setColoredRowsItem` - устанавливает цвет у конкретной строки. В метод передается объект с данными строки и цвета:

  ```
  tableService.setColoredRowsItem({
      id: '0',
      color: '#E1F5EB'
  })
    ```

Где `id` - это `Data key` элемента данных таблицы или `id` по умолчанию, `color` - значение цвета, которое будет установлено в css свойство `background-color` для каждой ячейки этой строки.
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
* `getColoredRowColor` - возвращает значение цвета конкретной строки или undefined, если цвет не задан. В метод передается `id`:
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
Пример реализации ниже:
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
                <Groups bottomGap>
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

#### Раскрыть/свернуть все раскрывающиеся строки

Метод toggleExpandingAllRows позволяет раскрыть/свернуть все раскрывающиеся строки

```
    {() => {
        let tableService;
        return (
            <div>
                <Groups bottomGap>
                    <Button onClick={() => tableService.toggleExpandingAllRows()}>Toggle all rows</Button>
                </Groups>
                <Table
                    data={ComponentHelpers.Table.data}
                    onInit={({ service }) => {
                        tableService = service;
                    }}
                >
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
                    <Table.ExpandingRow allowMultiple>
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

#### Раскрыть/свернуть все группы

Метод toggleExpandingAllGroups позволяет раскрыть/свернуть все раскрывающиеся группы.
При передаче expandable группа будет раскрыта по-умолчанию,
чтобы сделать ее свернутой по-умолчанию, передайте expandedDefault={false}

```
    {() => {
        let tableService;
        return (
            <div>
                <Groups bottomGap>
                    <Button onClick={() => tableService.toggleExpandingAllGroups()}>Toggle all groups</Button>
                </Groups>
                <Table
                    data={ComponentHelpers.Table.data}
                    onInit={({ service }) => {
                        tableService = service;
                    }}
                >
                    <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} expandable/>
                    <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} expandable/>
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
            </div>
        );
    }}
```

#### Закрепить/открепить колонку

Метод togglePinnedColumn позволяет закрепить/открепить выбранную колонку

```
{() => {
    let tableService;
    return (
        <div>
            <Groups style={{ margin: '10px' }}>
                <Button onClick={() => tableService.togglePinnedColumn('firstName')}>Pin firstName</Button>
                <Button onClick={() => tableService.togglePinnedColumn('lastName')}>Pin lastName</Button>
            </Groups>
            <Table
                indeterminate
                data={ComponentHelpers.Table.data}
                onInit={({ service }) => {
                    tableService = service;
                }}
                pinnableColumns
            >
                <Table.Column id='id' title='#' pinned width="300px" >
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' width="300px">
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' width="300px" >
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' width="300px" >
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone' width="300px" >
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        </div>
    );
}}
```

#### Скрытие/показ строк таблицы

Для скрытия/показа строк таблицы есть следующие методы:

- hideRow - скрыть строку, имеет тип `(id: string) => void`, где `id` - это свойство dataKey таблицы
- showRow - показать строку, имеет тип `(id: string) => void`, где `id` - это свойство dataKey таблицы
- hideAllRows - скрыть все строки, имеет тип `() => void`
- showAllRows - показать все строки, имеет тип `() => void`

```
{() => {
    let tableService;
    return (
        <div>
            <Groups style={{ marginBottom: '10px' }}>
                <Button onClick={() => tableService.hideRow('0')}>Hide first row</Button>
                <Button onClick={() => tableService.showRow('0')}>Show first row</Button>
                <Button onClick={() => tableService.hideAllRows()}>Hide all rows</Button>
                <Button onClick={() => tableService.showAllRows()}>Show all rows</Button>
            </Groups>
            <Table
                data={ComponentHelpers.Table.data}
                onInit={({ service }) => {
                    tableService = service;
                }}
            >
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
        </div>
    );
}}
```

## Настройки таблицы

С помощью компонента `Table.Settings` можно управлять настройками таблицы. В дополнение таблица экспортирует компонет `Table.ColumnsSettings` для изменения настроек колонок и компоненты: `Table.GroupingSettings` и `Table.GroupingSettings.Item` для управления группировкой таблицы. При этом внутри `Table.GroupingSettings.Item` переиспользуется компонет `Table.GroupBy` с тем же интерфейсом.
В `Table` можно передать проп `showSettingsAlarm`, который включает `alarm` рядом со значком настроек.

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

#### Настройки колонок

Компонент `Table.ColumnsSettings` поддерживает поиск по колонкам, включающийся флагом `searchable`, опцию скрытия/показа всех колонок, которая включается флагом `hideShowAll` и флаг `ignoredColumnsIds` может скрыть некоторые колонки по переданному id.
Также есть возможность изменить названия колонок в `Table.ColumnsSettings`. Для этого в `Table.Column` есть свойство `titleSettings`, которое имеет тип `ReactNode`. В настройках можно также управлять порядком для колонок, имеющим атрибут draggable  и пропом `disableHide` отключать возможность скрывать колонки.
Поиск в настройках может осуществляться по свойству `title` или по свойству `titleSettings`.

```
    <Table data={ComponentHelpers.Table.data}>
       <Table.Column id='id' title='#' titleSettings='#' width={'35px'}>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' titleSettings='Name' title='First Name' draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' titleSettings='Surname' title='Last Name' draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' titleSettings='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Settings>
                <Table.ColumnsSettings searchable />
            </Table.Settings>
    </Table>
```

#### Фильтрация колонок для ColumnsSettings

В компонент `Table.ColumnsSettings` можно передать в свойстве `ignoredColumnsIds` массив идентификаторов колонок, которые не будут отображаться в ColumnsSettings. Полезно использовать это свойство для случаев, если у вас есть "технические" колонки не несущие бизнес смысла сами по себе, а лишь помогающие отобразить информацию в таблице.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='parity'>
            {(person) => Number(person.id) % 2 === 0 ? 'even' : 'odd'}
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
        <Table.Settings>
            <Table.ColumnsSettings ignoredColumnsIds={['id', 'parity']} />
        </Table.Settings>
    </Table>
```

## Обновление таблицы при изменении children

```
    {() => {
        const [extraColumns, setExtraColumns] = React.useState([]);
        const handleClick = () => {
            setExtraColumns((prev) => {
                const index = prev.length + 1;
                return [
                    ...prev,
                    <Table.Column id={`phone ${index}`} title={`Phone ${index}`} key={index}>
                        {(person) => person.phone}
                    </Table.Column>
                ];
            })
        };
        return (
            <Groups design='vertical'>
                <Table data={ComponentHelpers.Table.data}>
                    <Table.Column id='id' title='#'>
                        {(person) => person.id}
                    </Table.Column>
                    <Table.Column id='firstName' title='First Name' width='300px' resizable>
                        {(person) => person.firstName}
                    </Table.Column>
                    <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                        {(person) => person.lastName}
                    </Table.Column>
                    <Table.Column id='position' title='Position'>
                        {(person) => person.position}
                    </Table.Column>
                    {extraColumns.map(column => column)}
                </Table>
                <Groups justifyContent='center'>
                    <Button onClick={handleClick}>Добавить столбец</Button>
                </Groups>
            </Groups>
        );
    }}
```

## Моноширинный шрифт в колонках

С помощью пропа `monospaceFont` можно добавить моноширинный шрифт к числовым значениям колонки таблицы.

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
        <Table.Column id='phone' title='Phone' monospaceFont>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

## Возможность убрать подчеркивание последней строки

С помощью свойства `noBorderBottomForLastRow` можно убрать нижнюю границу последней строки таблицы.

```
    <Table data={ComponentHelpers.Table.data} noBorderBottomForLastRow>
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
        <Table.Column id='phone' title='Phone' >
            {(person) => person.phone}
        </Table.Column>
    </Table>
```


## Возможность передачи колонок таблицы как проп

С помощью пропа columns можно передать колонки таблицы.

```
    {() => {
        const columns = [{
            id: 'id',
            title: '#'
        }, {
            id: 'firstName',
            title: 'First Name'
        }, {
            id: 'lastName',
            title: 'Last Name'
        }, {
            id: 'position',
            title: 'Position'
        }, {
            id: 'phone',
            title: 'Phone'
        }];
        return (
            <Table data={ComponentHelpers.Table.data} columns={columns}/>
        );
    }}
```


## Установка data-test-id

Атрибут data-test-id можно передать декларативно в jsx только обертке таблицы.
Для установки атрибутов строкам и ячейкам таблицы можно передать пропс `testId: {row, cell, container, emptyState, cell, button, search}`.

Также добавлены дефолтные значения для `testId`:
```
export const defaultTableTestId: TableProps['testId'] = {
    container: 'table_container',
    emptyState: 'table_empty-state',
    row: (val: string) => `table_row-${val}`,
    cell: (row: string, col: string) => `table_cell-${row}-${col}`,
};
```
```
export const defaultTableColumnsSettingsTestId: СolumnsSettingsTestId = {
    search: 'table_column-settings_search',
};
```
```
export const defaultTableSettingsTestId: SettingsProps['testId'] = {
    button: 'table_settings_button',
};
```
```
export const defaultTableHeaderTestId: TableHeaderProps['testId'] = {
    cell: (id: string) => `table-header_cell-${id}`,
};

```

```
    <Table
        data={ComponentHelpers.Table.data}
        testId={{
            row: (row) => row,
            cell: (row, col) => `${row}-${col}`,
            container: 'table_container',
            emptyState: 'table_empty-state',
        }}
    >
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
        <Table.Column id='phone' title='Phone' monospaceFont>
            {(person) => person.phone}
        </Table.Column>
    </Table>
```

## Возможность покраски левого бордера в колонке таблицы

С помощью параметра `leftBorder` можно покрасить левый бордер колнки таблицы. Используется для реализации таймлайна.

```
    <Table data={ComponentHelpers.Table.fullData} maxHeight='330px'>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' leftBorder>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' leftBorder>
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

## Возможность отключить свойство overflow

Булевое свойство `noOverflow` определяет, что делать с содержимым таблицы, если оно не влезает в размеры. По умолчанию свойство принимает значение `undefined` и в верстке отображается `overflow: auto` - означает, что контент будет доступен для прокрутки, а иначе не будет.

```
    <Table data={ComponentHelpers.Table.data} noOverflow>
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
                    <Table.ActionIcon title='Edit' disabled tooltipTextForDisabled='Редактирование невозможно'>
                        <EditIcon size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionIcon title='Delete' isAlwaysVisible color="nice10">
                        <TrashDeleteIcon size='xs' />
                    </Table.ActionIcon>
                    <Table.ActionsListIcon title='More' loading>
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

## Обрезка текста внутри колонки

С помощью параметра `cropText` можно обрезать контент, чтобы он не переносился на соседние ячеки в узкой колонке.

```
    <Table data={ComponentHelpers.Table.fullData} maxHeight='330px'>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' cropText width="50px">
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' cropText width="30px">
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

## Заголовок настроек таблицы

С помощью параметра `settingsTitle` можно добавить заголовок для настроек таблицы.

```
    <Table data={ComponentHelpers.Table.data}>
        <Table.Column id='id' title='#'>
                {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name'>
                {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' resizable>
                {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position'>
                {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
        </Table.Column>
        <Table.Settings settingsTitle='Настройка таблицы'>
            <Table.ColumnsSettings />
            <Table.GroupingSettings>
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

## Отключение резервации места для ActionsColumn

С помощью свойства `shrinkActionsColumn` можно отключить резервацию места для колонки `ActionsColumn` внутри таблицы.

```
<Table data={ComponentHelpers.Table.data} maxHeight='350px' noWrap pinnableColumns>
  <Table.Column id="id" title="#" width={'35px'} pinned>
        {person => person.id}
  </Table.Column>
  <Table.Column id="firstName" width={'200px'} title="First Name" pinned resizable>
        {person => person.firstName}
  </Table.Column>
  <Table.Column id="lastName" width={'110px'} title="Last Name" pinned resizable>
        {person => person.lastName}
  </Table.Column>
  <Table.Column id="position" title="Position">
        {person => person.position}
  </Table.Column>
  <Table.Column id='phone' title='Phone' noWrap draggable>
        {(person) => person.phone}
    </Table.Column>
    <Table.Column id='position2' title='Position2' noWrap draggable>
        {(person) => person.position}
    </Table.Column>
    <Table.Column id='phone2' title='Phone2' noWrap draggable>
        {(person) => person.phone}
    </Table.Column>
    <Table.Column id='position3' title='Position3' draggable noWrap resizable>
        {(person) => person.position}
    </Table.Column>
    <Table.Column id='phone3' title='Phone3' draggable resizable>
        {(person) => person.phone}
    </Table.Column>
    <Table.Column id='position4' title='Position4' resizable>
        {(person) => person.position}
    </Table.Column>
    <Table.Column id='phone4' title='Phone4' resizable>
        {(person) => person.phone}
    </Table.Column>
    <Table.Column id='phone5' title='Phone4' resizable>
        {(person) => person.phone}
    </Table.Column>
  <Table.ActionsColumn id="actions" shrinkActionsColumn>
    {() => (
      <>
        <Table.ActionIcon
          title="Edit"
          disabled
          tooltipTextForDisabled="Редактирование невозможно"
        >
          <EditIcon size="xs" />
        </Table.ActionIcon>
        <Table.ActionIcon title="Delete" color="nice10">
          <TrashDeleteIcon size="xs" />
        </Table.ActionIcon>
        <Table.ActionsListIcon title="More" loading>
          <DropList float="end">
            <DropList.Item>Edit</DropList.Item>
            <DropList.Item>Move</DropList.Item>
            <DropList.Item>Delete</DropList.Item>
          </DropList>
        </Table.ActionsListIcon>
      </>
    )}
  </Table.ActionsColumn>
</Table>
```

## Выбор строк с группировкой без выбора группы

С помощью свойства `selectable` можно управлять возможностью скрывать `checkbox` внутри GroupBy.

```
    <Table data={ComponentHelpers.Table.data} onSelect={console.log} disableCheckboxRow={[ComponentHelpers.Table.data[2]]}>
        <Table.GroupBy id='sde' title='SDE' selectable={false} expandable filter={(item) => item.position === 'Software Engineer'} />
        <Table.GroupBy id='pm' title='Project Managers' selectable={false} expandable filter={(item) => item.position === 'PM'} />
        <Table.Column id='id' title='#' pinned>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' noWrap>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName1' title='First Name 1' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName1' title='Last Name 1 ' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position1' title='Position 1' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone1' title='Phone 1' noWrap>
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

## Использование внешнего стейта таблицы

Если вам необходим внешний стейт таблицы, например, для сохранения и извлечения состояния из `local storage`, используйте пропсы `state` и `onUpdate`. Не инициализируйте стейт через `onInit`.

```
    {() => {
    const [tableState, setTableState] = React.useState(() => {
        const extState = localStorage.getItem('extTableState');
        return extState ? JSON.parse(extState) : undefined
    });
    return (
        <Table
            data={ComponentHelpers.Table.data}
            sort={{ field: 'firstName', direction: SortDirection.Desc }}
            state={tableState}
            onUpdate={(state) => {
                localStorage.setItem('extTableState', JSON.stringify(state));
                setTableState(state);
            }}
            onSelect={console.log}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' sortable draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' sortable draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' sortable draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
    }
}
```