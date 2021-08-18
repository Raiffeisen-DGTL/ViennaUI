# Pagination

Компонент пагинации. Используется для создания многостраничных списков, таблиц, слайдеров.

# Импорт

```
import { Pagination } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | 'm' \| 'l' \| 's' \| undefined | 'm' | Размер компонента |
| align | 'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| undefined | false | Выравнивание по горизонтали |
| pageSize\* | number | false | Количество элементов на одной странице |
| initialPageIndex | number \| undefined | false | Индекс текущей страницы (начинается с 0) |
| totalItemsCount\* | number | false | Общее количество элементов |
| currentPageNeighboursCount | number \| undefined | false | Количество кнопок-пэйджеров, которые нужно рендерить по соседству от текущего пэйджера, когда показываются кнопки с эллипсисами (jumpers) |
| onChange\* | (event: React.FormEvent | null, data: { pageIndex: number; pageSize: number }) => void | false | Коллбэк. Вызывается при изменении страницы В этом методе нужно описывать логику показа элементов в зависимости от страницы и размера страницы @param pageIndex - индекс новой страницы @param pageSize - количество элементов на странице |

## Использование

```
<Pagination pageSize={25} totalItemsCount={500} onChange={() => ''} />
```

## Размеры

##### Свойство `size`

Доступны размеры `m` (по умолчанию), `l`, `s`.

## Общее количество для отображения

##### Свойство `totalItemsCount`

Свойство задает общее количество элементов.

```
<Pagination totalItemsCount={500}/>
```

## Количество элементов на одной странице

##### Свойство `pageSize`

Свойство задает количество элементов для отображения на странице. Влияет на количество страниц, опираясь на значение `totalItemsCount`

```
<Pagination pageSize={25} totalItemsCount={500}/>
```

## Начальная страница

##### Свойство `initialPageIndex`

Свойство задает номер активной начальной страницы. По умолчанию `0`.

```
<Pagination initialPageIndex={4} pageSize={25} totalItemsCount={500}/>
```
