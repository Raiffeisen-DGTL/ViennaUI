# Pagination

Компонент пагинации. Используется для создания многостраничных списков, таблиц, слайдеров.

# Импорт

```
import { Pagination } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `PropsBox['$size']` | — | Размер компонента |
| align | `PropsBox['$align']` | — | Выравнивание по горизонтали |
| pageSize | `number` | — | Количество элементов на одной странице |
| initialPageIndex | `number` | — | Индекс текущей страницы (начинается с 0) |
| totalItemsCount | `number` | — | Общее количество элементов |
| currentPageNeighboursCount | `number` | — | Количество кнопок-пэйджеров, которые нужно рендерить по соседству от текущего пэйджера |
| currentPage | `number` | — | Текущий номер страницы |
| hasNextPage | `boolean` | — | Показывает, будут ли еще страницы. Если true, стрелка вправо активна |
| testId | `{ arrowPrev?: string; arrowNext?: string; separator?: string; page?: (page: number) => string; }` | — |  |
| onChange | `(data: { pageIndex: number; pageSize: number }, event: React.FormEvent \| null) => void` | — | Коллбэк. Вызывается при изменении страницы |


# Pagination

Компонент пагинации. Используется для создания многостраничных списков, таблиц, слайдеров, и т.д. Он позволяет пользователям перемещаться по страницам в таблицах, списках, по компонентам карточек и слайдам.



```
    <Pagination pageSize={25} totalItemsCount={500} onChange={() => ''} />
```

## Использование

Основные свойства для использования компонента:
- pageSize - количество элементов на одной странице (тип number)
- totalItemsCount - общее количество элементов (тип number)

## Используйте свойство `hasNextPage: boolean` для управления стрелкой вперёд.

Атрибут `hasNextPage` позволяет заблокировать стрелку вперед.

```
    {() => {
        const totalItemsCount = 100;
        const pageSize = 10;
        const items = Array.from(Array(totalItemsCount).keys()).map((index) => ({
            id: 'Item - ' + index.toString(),
        }));
        const getPagedItems = (current, pageSize) => {
            return items.slice(current * pageSize, (current + 1) * pageSize);
        };
        const [state, setState] = React.useState({ page: 0, items: getPagedItems(0, pageSize) });
        const handlePageChange = ({ pageIndex, pageSize }) => {
            setState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize) });
        };
        return (
            <>
                <ul>
                    {state.items.map((item) => {
                        return <li key={item.id}>{item.id}</li>;
                    })}
                </ul>
                <Pagination pageSize={pageSize} totalItemsCount={totalItemsCount} onChange={handlePageChange} hasNextPage={false} />
            </>
        );
    }}
```

## Использование c Select для изменения количества элементов на странице

```
    {() => {
        const totalItemsCount = 1000;
        const items = Array.from(Array(totalItemsCount).keys()).map((index) => ({
            id: 'Item - ' + index.toString(),
        }));
        const getPagedItems = (current, pageSize) => {
            return items.slice(current * pageSize, (current + 1) * pageSize);
        };
        const [state, setState] = React.useState({ pageSize: 10, page: 0, items: getPagedItems(0, 10) });
        const handlePageChange = ({ pageIndex, pageSize }) => {
            setState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize), pageSize });
        };
        const handleSelect = (data) => {
            const pageSize = +data.value;
            setState({ page: state.page, items: getPagedItems(state.page, pageSize), pageSize });
        };
        return (
            <>
                <ul>
                    {state.items.map((item) => {
                        return <li key={item.id}>{item.id}</li>;
                    })}
                </ul>
                <Groups justifyContent={'space-between'}>
                    <div>
                        <Pagination
                            initialPageIndex={0}
                            pageSize={state.pageSize}
                            totalItemsCount={totalItemsCount}
                            onChange={handlePageChange}
                        />
                    </div>
                    <div>
                        <Select
                            placeholder='Выберите значение'
                            value={state.pageSize.toString()}
                            onSelect={handleSelect}>
                            <Select.Option value='10' />
                            <Select.Option value='20' />
                            <Select.Option value='50' />
                            <Select.Option value='100' />
                        </Select>
                    </div>
                </Groups>
            </>
        );
    }}
```

## Размеры (свойство size)

В компоненте представлены следующие размеры - 's' | 'm' | 'l'. По умолчанию используется размер 'm'.

```
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'s'}
    />
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'m'}
    />
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'l'}
    />
```

## Выравнивание по горизонтали (свойство align)

Пагинацию есть возможность выравнивать по горизонтали, за это отвечает свойство `align` (тип `'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'`).

```
    <Pagination pageSize={25} totalItemsCount={500} align={'center'} />
```

## Управление количеством кнопок выбора страниц

Свойство `currentPageNeighboursCount` (тип number) определяет, сколько кнопок выбора страниц будет отображаться рядом с текущим номером страницы, когда используются кнопки с эллипсисами.

```
    <Pagination currentPage={5} pageSize={25} totalItemsCount={500} currentPageNeighboursCount={1} />
```

## Установка data-testid

Атрибут `data-testid` можно передать для стрелочки вперед-назад, разделителя  и номера страницы. Передается пропс `testId?: { arrowPrev?: string; arrowNext?: string; separator?: string; page?: (page: number) => string; }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultPaginationTestId: PaginationProps['testId'] = {
    container: 'pagination_container',
    arrowPrev: 'pagination_arrow-prev',
    arrowNext: 'pagination_arrow-next',
    separator: 'pagination_separator',
    page: (page: number) => `pagination_page-${page}`,
};
```

```
    <Pagination pageSize={25} totalItemsCount={500} onChange={() => ''} testId={{ arrowPrev: 'Pagination.Prev', arrowNext: 'Pagination.Next', separator: 'Pagination.Separator', page: (page) => `Pagination.Page.${page}`}} />
```