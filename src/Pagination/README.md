# Pagination

Компонент пагинации. Используется для создания многостраничных списков, таблиц, слайдеров.

# Импорт

```
import { Pagination } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | 'm' \| 'l' \| 's' \| undefined |  | Размер компонента |
| align | 'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| undefined |  | Выравнивание по горизонтали |
| pageSize\* | number |  | Количество элементов на одной странице |
| initialPageIndex | number \| undefined |  | Индекс текущей страницы (начинается с 0) |
| totalItemsCount\* | number |  | Общее количество элементов |
| currentPageNeighboursCount | number \| undefined |  | Количество кнопок-пэйджеров, которые нужно рендерить по соседству от текущего пэйджера, когда показываются кнопки с эллипсисами (jumpers) |
| onChange\* | (event: FormEvent<Element> \| null, data: { pageIndex: number; pageSize: number}) => void | | Коллбэк. Вызывается при изменении страницы В этом методе нужно описывать логику показа элементов в зависимости от страницы и размера страницы @param pageIndex - индекс новой страницы @param pageSize - количество элементов на странице |
| currentPage | number \| undefined|
| hasNextPage | boolean \| undefined|



```
    <Pagination pageSize={25} totalItemsCount={500} onChange={() => ''} />
```

## Использование

## Используйте свойство `hasNextPage: boolean` для управления стрелкой вперёд.

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
        const handlePageChange = (event, { pageIndex, pageSize }) => {
            setState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize) });
        };
        return (
            <>
                <ul>
                    {state.items.map((item) => {
                        return <li key={item.id}>{item.id}</li>;
                    })}
                </ul>
                <Pagination pageSize={pageSize} totalItemsCount={totalItemsCount} onChange={handlePageChange} />
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
        const handlePageChange = (event, { pageIndex, pageSize }) => {
            setState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize), pageSize });
        };
        const handleSelect = (event, data) => {
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
                <Groups justifyContent={'space-between'} alignItems={'stretch'}>
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

## Размеры

```
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(event, data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'s'}
    />
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(event, data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'m'}
    />
    <Pagination
        pageSize={10}
        totalItemsCount={100}
        onChange={(event, data) => {
            console.log(data.pageIndex, data.pageSize);
        }}
        size={'l'}
    />
```
