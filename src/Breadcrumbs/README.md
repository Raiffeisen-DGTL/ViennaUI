# Breadcrumbs

Элемент навигации по приложению, сайту. Не должен перетягивать на себя внимание, максимально нейтральный, должен быть в одну строку.
Используйте компонент Breadcrumbs, если вложенность элементов составляет более 2 уровней. В противном случае можно использовать кнопку «Назад», которая должна вести на страницу, с которой пришел пользователь.

## Импорт

```
import { Breadcrumbs } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "m" \| "l" \| undefined |
| noHomeButton | boolean \| undefined |
| noBackButton | boolean \| undefined |
| onClickHome | ((e: any, data: { value: React.ReactNode; }) => void) \| undefined  | | Обработчик нажатия на кнопку "Домой" |
| localization | Localization<BreadcrumbsLocalization, undefined> \| undefined  | | Локализация |

## Option

#### React Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "m" \| "l" \| undefined |
| altText | string \| undefined |
| first | boolean \| undefined |
| preLast | boolean \| undefined |
| last | boolean \| undefined |
| value | any |
| onClick | ((e: any, data: { value: any; }) => void) \| undefined |





```
    <Breadcrumbs>
        <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
        <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
    </Breadcrumbs>
```

## Внешний вид

Для того чтобы компонент мог ужать текст при уменьшении можно задать альтернативный текст `altText`, иначе он будет сокращаться с обрезкой и добавлением `...`

```
    <Breadcrumbs>
        <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
        <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
    </Breadcrumbs>
```

## Размеры

Есть размеры - `s`, `m`, `l` (cтандартный размер - `m`).

```
    <Groups design='vertical'>
        <Breadcrumbs size='s'>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs size='m'>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs size='l'>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```

Если был совершен только один шаг, то он будет слегка видоизменен под кнопку `Назад`

```
    <Groups design='vertical'>
        <Breadcrumbs size='s'>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs size='m'>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs size='l'>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```

## Поведение

Поведение при сжатии с и без наличия `altText`

```
    <div style={{ width: '300px' }}>
        <Breadcrumbs>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    </div>
```

```
    <div style={{ width: '300px' }}>
        <Breadcrumbs>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    </div>
```

## Пример с onClick + onClickHome

Для работы с элементами достаточно обрабатывать их событие `onClick`, для случая нажатия на кнопку `Домой` используется событие `onClickHome`

```
    <Groups design='vertical'>
        <Breadcrumbs onClickHome={console.log}>
            <Breadcrumbs.Option onClick={console.log} value={{ data: 1 }} altText='Page 1'>
                Long Name Page 1
            </Breadcrumbs.Option>
            <Breadcrumbs.Option onClick={console.log} value={2} altText='Page 2'>
                Long Name Page 2
            </Breadcrumbs.Option>
            <Breadcrumbs.Option onClick={console.log} value='step 3' altText='Page 3'>
                Long Name Page 3
            </Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs>
            <Breadcrumbs.Option onClick={console.log} value={1} altText='Page 1'>
                Long Name Page 1
            </Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```

## Элементы являются простыми ссылками

Для работы с элементами достаточно обрабатывать их событие `onClick`, для случая нажатия на кнопку `Домой` используется событие `onClickHome`

```
    <Groups design='vertical'>
        <Breadcrumbs onClickHome={console.log}>
            <Breadcrumbs.Option href='' target='_blank' altText='open blank page'>
                Open blank page
            </Breadcrumbs.Option>
            <Breadcrumbs.Option href='http://ds.raiffeisen.ru' target='_blank' altText='DS'>
                Open DS in new window
            </Breadcrumbs.Option>
            <Breadcrumbs.Option href='http://ds.raiffeisen.ru' target='_self' altText='DS'>
                Open DS in some window
            </Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs>
            <Breadcrumbs.Option href='http://ds.raiffeisen.ru' altText='DS'>
                DS
            </Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```

## Свойство noBackButton и noHomeButton

```
    <Groups design='vertical'>
        <Breadcrumbs noHomeButton>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs noBackButton>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```

## Свойство withoutTooltip

При заданом свойстве `altText` и указаном `children` или при сжатии текста в опции будет появляться тултип.
За скрытие тултипа отвечает свойство `withoutTooltip` (тип boolean)

```
    <div style={{ width: '300px' }}>
        <Breadcrumbs>
            <Breadcrumbs.Option withoutTooltip>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option withoutTooltip>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option withoutTooltip>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    </div>
```

## Локализация

Есть возможность задавать текст через свойство localization

```
        <Breadcrumbs size='m' localization={{ 'ds.breadcrumbs.backTo': 'Вернуться к' }}>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
```

## Установка data-testid

Атрибут `data-testid` можно передать иконке "Домой", иконке "Назад", контейнеру и каждому элементу списка.
 Передается с помощью  пропса `testId: { home, homeIcon, back, backIconContainer, backIcon, page: (val: string) => `breadcrumbs_page-${val}`}`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultBreadcrumbsTestId: BreadcrumbsProps['testId'] = {
    home: 'breadcrumbs_home',
    homeIcon: 'breadcrumbs_home-icon',
    back: 'breadcrumbs_back',
    backIconContainer: 'breadcrumbs_back-icon-container',
    backIcon: 'breadcrumbs_back-icon',
    page: (val: string) => `breadcrumbs_page-${val}`,
};
```

```
   <Groups design='vertical'>
        <Breadcrumbs testId={{home: 'home-button', homeIcon: 'breadcrumbs_home-icon', back: 'breadcrumbs_back', backIconContainer: 'breadcrumbs_back-icon-container', backIcon: 'breadcrumbs_back-icon', page: (val) => `breadcrumbs_page-${val}`}}>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
        <Breadcrumbs>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
    </Groups>
```