# Header

Компонент шапки приложения.

## Импорт

```
import { Header } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "m" \| "l" \| undefined | "m" | Размеры |
| logoHref | string \| undefined | false | Ссылка для лого |
| shadow | boolean \| undefined | true | Свойство для отображения тени |
| fixed | boolean \| undefined | false | Свойство для фиксации Header |
| items | ReactElement \| undefined | false | Принимает Header.Items для отображения элементов |
| search | ReactNode \| undefined | false | Принмает поле для поиска |
| logo | ReactNode \| undefined | false | Заменяет лого |
| disabledContent | boolean \| undefined | false |
| isOpen | boolean \| undefined | false | Состояние открытие мобильного меню/контента |
| mobileBelow | number \| undefined | 1 | Брейкпоинт для мобильной версии |
| mobileMenu | ((obj: { items: ReactNode; onClose?: (() => void) \| undefined; }) => ReactNode) \| undefined | false |
| onOpen | (() => void) \| undefined | false | Функция открытия мобильного меню/контента |
| onClose | (() => void) \| undefined | false | Функция закрытия мобильного меню/контента |

## Свойства элементов / Items Props

| Prop           | Type                              | Default  | Description                 |
| -------------- | --------------------------------- | -------- | --------------------------- |
| align          | 'bottom' \| 'center' \| undefined | 'bottom' | Выравнивание по вертикали   |
| justifyContent | string \| undefined               | 'center' | Выравнивание по горизонтали |

## Использование

Компонент состоит из родительского компонента `Header` и дочерних компонентов `Header.Items`, `Header.Item`.

> Дочерние компоненты `Header.Items`, `Header.Item` необходимо прередать через свойство `items`.

```jsx
{
    () => {
        const items = [
            { value: 'score', label: 'Счета' },
            { value: 'operations', label: 'Операции' },
            { value: 'requisites', label: 'Реквизиты' },
        ];
        const [state, setState] = React.useState({ value: 'score' });
        const handleChange = (e, value) => setState({ value });
        return (
            <Header
                size='m'
                items={
                    <Header.Items onChange={handleChange} value={state.value}>
                        {items.map(({ value, label }) => (
                            <Header.Item key={value} value={value} label={label} />
                        ))}
                    </Header.Items>
                }
                action={
                    <Button size='s' design='accent'>
                        Открыть
                    </Button>
                }
            />
        );
    };
}
```

## Элементы

##### Коммпонент `Header.Items`

##### Коммпонент `Header.Item`

Используйте свойство `items` для передачи компонентов `Header.Items` и `Header.Item` для отображения табов или листа.

```jsx
{
    () => {
        const items = [
            { value: 'score', label: 'Счета' },
            { value: 'operations', label: 'Операции' },
            { value: 'requisites', label: 'Реквизиты' },
        ];
        const [state, setState] = React.useState({ value: 'score' });
        const handleChange = (e, value) => setState({ value });
        const handleSearch = () => {};
        return (
            <Header
                items={
                    <Header.Items design='primary' onChange={handleChange} value={state.value}>
                        {items.map(({ value, label }) => (
                            <Header.Item key={value} value={value} label={label} />
                        ))}
                    </Header.Items>
                }
            />
        );
    };
}
```

## Тень

##### Свойство `shadow`

У компоненты Header есть свойство `shadow`, которое управляет тенью компоненты. По умолчанию `true`.

```jsx
<Header shadow={false} size='l' />
```

## Выравнивание пунктов шапки

##### Свойство `align`

##### Свойство `justifyContent`

```jsx
<Header
    size='l'
    items={
        <Header.Items
            align='bottom'
            justifyContent='flex-start'
            design='primary'
            onChange={handleChange}
            value={state.value}>
            {items.map(({ value, label }) => (
                <Header.Item key={value} value={value} label={label} />
            ))}
        </Header.Items>
    }
/>
```

## Размер

##### Свойство `size`

Доступны размеры: `s`, `m` (по умолчанию), `l`.

```jsx
<Header
    size='l'
    items={
        <Header.Items design='primary' onChange={handleChange} value={state.value}>
            {items.map(({ value, label }) => (
                <Header.Item key={value} value={value} label={label} />
            ))}
        </Header.Items>
    }
/>
```

## Search

##### Свойство `search`

Используйте свойство `search` для передачи компоненты поиска в Header.

```jsx
{
    () => {
        const [state, setState] = React.useState({ value: '', suggests: [] });
        const handleChange = (e, data) => {
            const mock = [
                'Райффайзен банк',
                'Райффайзен IT',
                'Иванов Иван Иванович',
                'Иванов Иван Петрович',
                'Ивановская область',
                'Рамблер',
            ];
            const regexp = new RegExp(`^${data.value.toUpperCase()}`);
            const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
            setState({ value: data.value, suggests: temp });
        };
        const handleSelect = (e, data) => {
            setState({ value: data.value });
        };
        const SearchProps = {
            onChange: handleChange,
            value: state.value,
            onSelect: handleSelect,
            suggests: state.suggests,
            size: 's',
        };
        const searchItem = ({ props, suggest, value }) => <div style={{ color: 'red' }}>{suggest}</div>;
        return (
            <Header
                search={<Search {...SearchProps}>{searchItem}</Search>}
                action={
                    <Button size='s' design='accent'>
                        Открыть
                    </Button>
                }
            />
        );
    };
}
```

## Отображение логотипа

##### Свойство `logoHref`

Используйте `logoHref` для передачи адреса на главную страницу.

```jsx
<Header logoHref='https://www.raiffeisen.ru/' />
```

Так же можно применить свойтсво `logo`, если нужно изменить логотип.

> `logo` не отображается при `size = s`.

```jsx
<Header logo={<Logotype collapsed />} />
```

## Content

К каждому `Header.Item` можно добавить дочерние элементы, которые будут отображатся при раскрытии пунктов меню.

```jsx
{
    () => {
        const [state, setState] = React.useState({ value: '1' });
        const handleChange = (e, value) => setState({ value });
        const handleSearch = () => {};
        const [isOpen, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
            <>
                <Header
                    isOpen={isOpen}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    items={
                        <Header.Items
                            align='center'
                            justifyContent='flex-start'
                            onChange={handleChange}
                            value={state.value}>
                            <Header.Item key='1' value='1' label={<span>Счета</span>}>
                                <div
                                    style={{
                                        maxWidth: 700,
                                        width: '100%',
                                        height: 150,
                                        backgroundColor: '#E6F6F8',
                                        border: '1px dashed #00A5BC',
                                    }}>
                                    Счета
                                </div>
                            </Header.Item>
                            <Header.Item key='2' value='2' label={<span>Операции</span>} />
                            <Header.Item key='3' value='3' label={<span>Реквизиты</span>}>
                                <div
                                    style={{
                                        maxWidth: 700,
                                        width: '100%',
                                        height: 150,
                                        backgroundColor: '#E6F6F8',
                                        border: '1px dashed #00A5BC',
                                    }}>
                                    Реквизиты
                                </div>
                            </Header.Item>
                        </Header.Items>
                    }
                />
                <div style={{ backgroundColor: 'white', padding: 16, marginTop: 16 }}>
                    Райффайзенбанк — российский коммерческий банк, дочерний банк австрийской банковской группы
                    Raiffeisen Bank International. Полное наименование — Акционерное общество «Райффайзенбанк».
                    Штаб-квартира находится в Москве. Банковская группа в Австрии была основана в 1927 году под
                    названием Genossenschaftliche Zentralbank. Слово Райффайзен появилось в названии в 1989 году в честь
                    Фридриха Вильгельма Райффайзена (1818—1888). Первое дочернее общество Raiffeisen в Восточной Европе
                    было открыто в 1987 году. В России банк начал работу в 1996 году[1]. До объединения с российским
                    Импэксбанком носил название «Райффайзенбанк Австрия».В начале 2006 года Райффайзенбанк приобрёл
                    Импэксбанк; после приобретения Raiffeisen заявил, что стал крупнейшей иностранной банковской группой
                    в России. Объединённый банк начал свою работу с 26 ноября 2007 года.В мае 2013 года банк объединил
                    сеть собственных банкоматов с сетью банкоматов ЮниКредит Банка[2]. В июне 2016 банк объединил сеть
                    собственных банкоматов с сетью банкоматов Бинбанка[3].
                </div>
            </>
        );
    };
}
```

## Управление подменю

##### Свойство `disabledContent`

С помощью этого свойства можно заблокировать раскрытие подменю, даже если оно задано явно в дочерних элементах.

```jsx
{
    () => {
        const [state, setState] = React.useState({ value: 'score' });
        const handleChange = (e, value) => setState({ value });
        const handleSearch = () => {};
        return (
            <Header
                disabledContent
                items={
                    <Header.Items
                        align='center'
                        justifyContent='flex-start'
                        onChange={handleChange}
                        value={state.value}>
                        <Header.Item key='1' value='1' label={<span>Счета</span>}>
                            <div
                                style={{
                                    width: 700,
                                    height: 150,
                                    backgroundColor: '#E6F6F8',
                                    border: '1px dashed #00A5BC',
                                }}>
                                Счета
                            </div>
                        </Header.Item>
                        <Header.Item key='2' value='2' label={<span>Операции</span>} />
                        <Header.Item key='3' value='3' label={<span>Реквизиты</span>}>
                            <div
                                style={{
                                    width: 700,
                                    height: 150,
                                    backgroundColor: '#E6F6F8',
                                    border: '1px dashed #00A5BC',
                                }}>
                                Реквизиты
                            </div>
                        </Header.Item>
                    </Header.Items>
                }
                content={({ value }) => data[value]}
            />
        );
    };
}
```

## Кнопки действий

##### Свойство `action`

##### Свойство `isMobile`

Используйте свойство `action` для дополнительных кнопок.

`action` может принимать функцию, в которую приходит свойство `isMobile`.

`isMobile` указывает на адаптивность компонента `Header`. Относительно `isMobile` можно менять компоненты в `action`.

```jsx
{
    () => {
        const actionContent = ({ isMobile }) =>
            isMobile ? (
                <Passport size='m' />
            ) : (
                <Groups design='horizontal'>
                    <Passport size='m' />
                    <Button size='s' design='accent'>
                        {' '}
                        Открыть{' '}
                    </Button>
                    <Button size='s'> Закрыть </Button>
                </Groups>
            );
        return <Header action={actionContent} />;
    };
}
```

## Адаптивный Header

##### Свойство `mobileBelow`

C помощью `mobileBelow` можно задать порог перехода (breakpoint) в мобильное представление.

> Компонента Header адаптируется к разрешению экрана. `items` будут открываться на весь экран списком, а `search` будет заменять весь `Header`.

```jsx
{
    () => {
        const [state, setState] = React.useState({ value: '1' });
        const handleChange = (e, value) => {
            setState({ value });
        };
        const [isOpen, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
            <>
                <Header
                    isOpen={isOpen}
                    onOpen={handleOpen}
                    onClose={handleClose}
                    mobileBelow={100000}
                    items={
                        <Header.Items design='primary' onChange={handleChange} value={state.value}>
                            <Header.Item key='1' value='1' label={<span>Счета</span>}>
                                <div
                                    style={{
                                        maxWidth: 700,
                                        height: 150,
                                        backgroundColor: '#E6F6F8',
                                        border: '1px dashed #00A5BC',
                                    }}>
                                    Счета
                                </div>
                            </Header.Item>
                            <Header.Item key='2' value='2' label={<span>Операции</span>}></Header.Item>
                            <Header.Item key='3' value='3' label={<span>Реквизиты</span>}>
                                <div
                                    style={{
                                        maxWidth: 700,
                                        height: 150,
                                        backgroundColor: '#E6F6F8',
                                        border: '1px dashed #00A5BC',
                                    }}>
                                    Реквизиты
                                </div>
                            </Header.Item>
                        </Header.Items>
                    }
                    action={<Passport size='m' />}
                />
                <div style={{ backgroundColor: 'white', padding: 16, marginTop: 16 }}>
                    Райффайзенбанк — российский коммерческий банк, дочерний банк австрийской банковской группы
                    Raiffeisen Bank International. Полное наименование — Акционерное общество «Райффайзенбанк».
                    Штаб-квартира находится в Москве. Банковская группа в Австрии была основана в 1927 году под
                    названием Genossenschaftliche Zentralbank. Слово Райффайзен появилось в названии в 1989 году в честь
                    Фридриха Вильгельма Райффайзена (1818—1888). Первое дочернее общество Raiffeisen в Восточной Европе
                    было открыто в 1987 году. В России банк начал работу в 1996 году[1]. До объединения с российским
                    Импэксбанком носил название «Райффайзенбанк Австрия».В начале 2006 года Райффайзенбанк приобрёл
                    Импэксбанк; после приобретения Raiffeisen заявил, что стал крупнейшей иностранной банковской группой
                    в России. Объединённый банк начал свою работу с 26 ноября 2007 года.В мае 2013 года банк объединил
                    сеть собственных банкоматов с сетью банкоматов ЮниКредит Банка[2]. В июне 2016 банк объединил сеть
                    собственных банкоматов с сетью банкоматов Бинбанка[3].
                </div>
            </>
        );
    };
}
```
