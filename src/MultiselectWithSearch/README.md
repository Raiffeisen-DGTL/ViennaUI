# Multiselect

Компонент предназначен для выбора нескольких элементов из выпадающего списка.

## Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | `string` | — |  |
| prefix | `React.ReactNode` | — |  |
| postfix | `Postfix` | — |  |
| placeholder | `string` | — |  |
| className | `string` | — |  |
| tabIndex | `number` | — |  |
| invalid | `boolean` | — |  |
| values | `T[]` | — |  |
| size | `ResponsivePropSizeType, B>` | — |  |
| hideEmptyStateIcon | `boolean` | — |  |
| randomEmptyStateIcon | `boolean` | — |  |
| design | `DesignType` | — |  |
| maxListHeight | `number` | — |  |
| maxListWidth | `number` | — |  |
| onSelect | `OnChangeHandler<T[], React.MouseEvent \| React.KeyboardEvent>` | — |  |
| onSearch | `(value: string, name?: string) => void` | — |  |
| children | `React.ReactNode` | — |  |
| fitOptions | `boolean` | — |  |
| valueToString | `ValueToStringType<T>` | — |  |
| compare | `CompareType<T>` | — |  |
| highlightCompare | `NonNullableHighlightProps['compare']>` | — |  |
| highlightStyle | `NonNullableHighlightProps['style']>` | — |  |
| search | `SearchType` | — |  |
| disableSearch | `boolean` | — |  |
| disableSelectAll | `boolean` | — |  |
| disableReset | `boolean` | — |  |
| disableClearSearch | `boolean` | — |  |
| tagsWrap | `boolean` | — |  |
| hideCheckboxes | `NonNullable<OptionProps['hideCheckbox']>` | — |  |
| minViewItems | `number` | — |  |
| fixed | `boolean` | — |  |
| dropdownPortal | `HTMLElement \| React.MutableRefObjectHTMLElement \| null> \| null` | — |  |
| ref | `React.Ref<HTMLDivElement>` | — |  |
| testId | `{ tag?: (val: string) => string; option?: (val: string \| React.ReactNode) => string; search?: string; arrow?: string; }` | — |  |
| hideOptionsList | `boolean` | — |  |
| inputRef | `React.RefObject<HTMLInputElement>` | — |  |
| onAddValue | `(newValue: T) => void` | — |  |
| showCheckboxOnRight | `boolean` | — |  |
| showAddButton | `boolean` | — |  |
| addButtonDuplication | `boolean` | — |  |
| addButtonOnClick | `(searchString: string) => void` | — |  |


## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| className | string \| undefined | |
| tabIndex | number \| undefined | |
| name | string \| undefined | |
| placeholder | string \| undefined | |
| disabled | boolean \| undefined | |


# MultiselectWithSearch

Выпадающее меню для выбора одного или нескольких вариантов из большого диапазона с возможностью поиска по ним. Применяется в формах, может использоваться для фильтрации или сортировки, менять отображение контента. Когда нужно выбрать только один пункт из списка — используйте `Select`. Если выбор значения в форме состоит из небольшого количества вариантов, рассмотрите обычные чекбоксы.



```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Использование

Размеры: `xs`, `s`, `m`, `l`, `xl` и `xxl`.

Свойства дизайна, размера, состояния и темизация идентичны компоненту `Select`.

Компонент полностью управляемый, по умолчанию работает с массивом строк или объектами у которых есть поле `value`.

Массив передается в свойство `options`, а выбранные элементы в `values`.

По умолчанию список раскрывается при фокусе, это можно отключить установив свойство `openWhenFocus` в значение `false`.

Открытие и закрытие списка происходит по клавишам `Enter` и `Esacape` соответственно.

В компоненте так же есть возможность отключения поиска, за это отвечает свойство `disableSearch`

Список изменений:
- Переработано свойство `onSelect`, теперь в качестве первого аргумента передается массив выбранных опций;
- Убрали свойство `groupItems`;

## Простое применение (статическое)

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch size='xs' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch size='s' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch size='m' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch size='l' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch size='xl' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch size='xxl' values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

Значение как строка

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option value='Значение 1' />
                    <MultiselectWithSearch.Option value='Значение большое 2' />
                    <MultiselectWithSearch.Option value='Значение еще больше 3' />
                    <MultiselectWithSearch.Option value='Знач. 4' />
                    <MultiselectWithSearch.Option value='Значение 5' />
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

Значение как объект со свойством `value`

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch placeholder='Выберите значение' values={values} onSelect={handleSelect}>
                    <MultiselectWithSearch.Option value={{ value: 'Значение 1' }} />
                    <MultiselectWithSearch.Option value={{ value: 'Значение большое 2' }} />
                    <MultiselectWithSearch.Option value={{ value: 'Значение еще больше 3' }} />
                    <MultiselectWithSearch.Option value={{ value: 'Знач. 4' }} />
                    <MultiselectWithSearch.Option value={{ value: 'Значение 5' }} />
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

<ComponentHelpers.Select.Info>
    <WarningRingIcon size='xl' />
    <div>
        По умолчанию компонент работает со строками или объектами, в которых есть поле <span>value</span>, если
        стандартная ситуация невозможна, то можно воспользоваться коллбэком <span>valueToString</span>, который принимает объект айтема и возвращает строку для отображения
        в компоненте. Для корректной работы чекбоксов при таком сценарии также требуется передать коллбэк <span>compare</span>,
        по возвращаемому значению которого производится сравнение в чекбоксах
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch
                    placeholder='Выберите значение'
                    valueToString={(item) => item.name}
                    values={values}
                    compare={(item) => item.name}
                    onSelect={handleSelect}>
                    <MultiselectWithSearch.Option value={{ name: 'Значение 1' }}>Значение 1 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение большое 2' }}>Значение 2 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение еще больше 3' }}>
                        Значение 3 - сложное
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Знач. 4' }}>Значение 4 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение 5' }}>Значение 5 - сложное</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

## Вывод выбранных опций в несколько строк

По умолчанию выбранные опции выводятся в одну строку и при нехватке места сворачиваются в `Еще`.
Чтобы выводить выбранные опции в несколько строк, необходимо передать `true` в свойство `tagsWrap`, которое имеет тип `boolean`.

```
    {() => {
        const [values, setValues] = React.useState(['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5', 'Значение с длинным названием', 'Значение с еще более длинным названием']);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch placeholder='Выберите значение' values={values} tagsWrap onSelect={handleSelect}>
                    <MultiselectWithSearch.Option value={'Значение 1'} />
                    <MultiselectWithSearch.Option value={'Значение большое 2'} />
                    <MultiselectWithSearch.Option value={'Значение еще больше 3'} />
                    <MultiselectWithSearch.Option value={'Знач. 4'} />
                    <MultiselectWithSearch.Option value={'Значение 5'} />
                    <MultiselectWithSearch.Option value={'Значение с длинным названием'} />
                    <MultiselectWithSearch.Option value={'Значение с еще более длинным названием'} />
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

## Простое применение (динамическое)

```
    {() => {
        const [options, setOptions] = React.useState([]);
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        React.useEffect(() => {
            setTimeout(() => {
                setOptions(['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5']);
            }, 3000);
        }, []);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch
                    placeholder='Выберите значение'
                    options={options}
                    values={values}
                    design='material'
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Поиск

#### Функция поиска

Для кастомизации поиска есть свойство `search`, оно принимает функцию, которая имеет тип - `(name: ReactNode, searchString: string) => boolean;`

По умолчанию поиск реализован вот так:

```
const DefaultSearch = (name, searchString) => {
    if (typeof name === 'string') {
        return name.toLowerCase().includes(searchString.trim().toLowerCase());
    }
    if (React.isValidElement(name)) {
        const children = name.props.children;
        return DefaultSearch(children, searchString);
    }
    if (Array.isArray(name)) {
        return name.some((item) => DefaultSearch(item, searchString));
    }

    return false;
};
```

#### Обработчик события поиска

Для отслеживания изменения поиска есть свойство `onSearch`, оно принимает функцию, которая имеет тип - `(value: string, name: string) => void;`

Первый аргумент - строка поиска, второй - свойство `name` компонента

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        const handleSearch = (value, name) => console.log({ value, name });
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch
                    placeholder='Выберите значение'
                    name='select'
                    valueToString={(item) => item.name}
                    compare={(item) => item.name}
                    values={values}
                    onSelect={handleSelect}
                    onSearch={handleSearch}>
                    <MultiselectWithSearch.Option value={{ name: 'Значение 1' }}>Значение 1 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение большое 2' }}>Значение 2 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение еще больше 3' }}>
                        Значение 3 - сложное
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Знач. 4' }}>Значение 4 - сложное</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value={{ name: 'Значение 5' }}>Значение 5 - сложное</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
            </Groups>
        );
    }}
```

#### Отключение очистки поиска при выборе опции

По умолчанию поле поиска очищается при выборе опции, за отключение такого поведения отвечает свойство `disableClearSearch`

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                disableClearSearch
                onSelect={handleSelect}
            />
        );
    }}
```

## Функция сравнения

```
    {() => {
        const options = [
            { id: 0, value: 'Значение' },
            { id: 1, value: 'Значение' },
            { id: 2, value: 'Значение' },
            { id: 3, value: 'Значение' },
        ];
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch
                    placeholder='Выберите значение'
                    options={options}
                    values={values}
                    compare={(item) => item.id}
                    design='material'
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Программная установка и снятие фокуса

Начиная с 12 версии сделали программное управление фокусом через свойство `controlsRef`, которое имеет тип:
```
React.MutableRefObject<{
   focus: () => void;
   blur: () => void;
} | null>
```

```
    {() => {
        const [values, setValues] = React.useState([]);
        const controlsRef = React.useRef(null);
        const handleSelect = ({ value }) => setValues(value);
        const focus = () => controlsRef.current && controlsRef.current.focus();
        const blur = () => {
            focus();
            controlsRef.current && setTimeout(controlsRef.current.blur, 1000);
        };
        return (
            <>
                <Groups>
                    <Button design='accent' onClick={focus}>
                        Focus
                    </Button>
                    <Button design='primary' onClick={blur}>
                        Focus and Blur after sec
                    </Button>
                </Groups>
                <hr />
                <Groups design='vertical'>
                    <MultiselectWithSearch
                        placeholder='Выберите значение'
                        controlsRef={controlsRef}
                        values={values}
                        onSelect={handleSelect}
                    >
                        <MultiselectWithSearch.Option value={{ value: 'Значение 1' }} />
                        <MultiselectWithSearch.Option value={{ value: 'Значение большое 2' }} />
                        <MultiselectWithSearch.Option value={{ value: 'Значение еще больше 3' }} />
                        <MultiselectWithSearch.Option value={{ value: 'Знач. 4' }} />
                        <MultiselectWithSearch.Option value={{ value: 'Значение 5' }} />
                    </MultiselectWithSearch>
                </Groups>
            </>
        );
    }}
```

## Событие открытия/закрытия выпадающего списка

При открытиии/закрытии выпадающего списка коллбек, переданный в onToggle, вызывается с аргументом isShown,
соответсвующим новому состоянию компонента DropDown

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                onToggle={console.log}
            />
        );
    }}
```

## Бесконечные списки

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        const getOptions = React.useCallback((options) => {
            if (options.length) {
                return options.concat([`Значение ${options.length + 1}`]);
            } else {
                return ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'];
            }
        }, []);
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch
                    placeholder='Выберите значение'
                    options={getOptions}
                    values={values}
                    design='material'
                    maxListHeight={150}
                    onSelect={handleSelect}
                />
            </Groups>
        );
    }}
```

## Свойства prefix, postfix

Свойство `prefix` это слот для добавление контента в начале поля. Свойство `postfix` это слот позволяющий менять иконку стрелочки в конце поля.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                placeholder='Выберите значение'
                values={values}
                prefix={<FaceSmileIcon/>}
                postfix={{
                    up: <SelectHideClassicIcon/>,
                    down: <SelectOpenClassicIcon/>,
                }}
                onSelect={handleSelect}
            >
                <MultiselectWithSearch.Option value='Значение 1' />
                <MultiselectWithSearch.Option value='Значение большое 2' />
                <MultiselectWithSearch.Option value='Значение еще больше 3' />
                <MultiselectWithSearch.Option value='Знач. 4' />
                <MultiselectWithSearch.Option value='Значение 5' />
            </MultiselectWithSearch>
        );
    }}
```

## Свойство fixed

Для отображения выпадающего списка поверх контейнера с `overflow: hidden`, можно добавить фиксированное позиционирование с помощью свойства `fixed`. Обратите внимание, что это приведет к фиксации выпадающего списка в определенном месте вне зависимости от скролла страницы.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '350px',
                        height: '100px',
                        border: '1px solid',
                    }}>
                    <div style={{ width: '500px', height: '300px' }}>
                        <div style={{ position: 'absolute', left: '0', top: 'calc(50% - 20px)', width: '100%' }}>
                            <MultiselectWithSearch style={{ width: '100%' }} fixed values={values} placeholder={'Выберите значение'} onSelect={handleSelect}>
                                <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                                <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                                <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                                <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                                <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                            </MultiselectWithSearch>
                        </div>
                    </div>
                </div>
            </Groups>
        );
    }}
```

## Свойство minViewItems

Данное свойство предназначено для постоянного отображения выбранных табов, в то время как все остальные будут сворачиваться в `Еще`. Он имеет тип `number`, по умолчанию 0. При значении 0 табы сворачиваются в зависимости от доступного места в селекте.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                minViewItems={2}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Свойство maxListWidth

Свойство `maxListWidth` отвечает за максимальную ширину выпадающего списка в пикселях

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                maxListWidth={280}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Свойство fitOptions

По умолчанию выпадающий список растягивается по ширине селекта. За это поведение отвечает свойство `fitOptions` (тип boolean). Если передать значение `false` выпадающий список будет растягиваться по контенту.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                fitOptions={false}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Свойства disableSelectAll и disableReset

В выпадающем списке выводятся две вспомогательные кнопки "Выбрать все" и "Сбросить". За скрытие этих кнопок отвечают свойства `disableSelectAll` (для кнопки "Выбрать все") и `disableReset` (для кнопки "Сбросить"). Тип у обоих свойств `boolean`.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                disableSelectAll
                disableReset
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Свойство randomEmptyStateIcon

По умолчанию в состоянии empty state иконки выводятся случайным образом. За это поведение отвечает свойство `randomEmptyStateIcon` (тип boolean).

```
    <MultiselectWithSearch
        options={[]}
        placeholder={'Выберите значение'}
        randomEmptyStateIcon={false}
    />
```

## Интерактив

```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const handleSelect = (data) => setValue({ values: data.value });
        const checkAll = () => setValue({ values: ['Значение 1', 'Значение большое 2', 'Значение еще больше 3', 'Знач. 4', 'Значение 5'] });
        const uncheckAll = () => setValue({ values: [] });
        return (
            <Groups design='vertical'>
                <MultiselectWithSearch disableSelectAll disableReset placeholder='Выберите значение' values={[...state.values]} onSelect={handleSelect}>
                    <div __nowrap__="true" style={{height: '44px'}}>
                        <Groups alignItems="center" height="full" justifyContent="center">
                            <Button design="accent" size='xs' onClick={checkAll}>Выбрать все</Button>
                            <Button size='xs' onClick={uncheckAll}>Очистить</Button>
                        </Groups>
                    </div>
                    <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
            </Groups>
        );
    }}

```

## Локализация

Для того чтобы локализовать мультиселект, необходимо передать в `localization` функцию локализации

```
    {() => {
        const [state, setValue] = React.useState({ values: [] });
        const handleSelect = (data) => setValue({ values: data.value });
        const customLocalization = (key, context) => {
            if (key === 'ds.MultiselectWithSearch.extra') {
                return `${context.count} more`;
            }
            return 'List is empty';
        };
        return (
            <Groups design='vertical' style={{ width: '200px'}}>
                <MultiselectWithSearch disableSelectAll disableReset placeholder='Choose option' values={[...state.values]} onSelect={handleSelect} localization={customLocalization}>
                    <MultiselectWithSearch.Option>Option 1</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Option 2</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Option 3</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Opt. 4</MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>Option 5</MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch disableSelectAll placeholder='Choose option' localization={customLocalization}/>
            </Groups>
        );
    }}
```

## EmptyState без иконки

Свойство `hideEmptyStateIcon` отвечает за показ/скрытие иконки в empty state.

```
    {() => {
        const [values, setValues] = React.useState(['test']);
        const [options, setOptions] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch placeholder='Choose option' values={values} hideEmptyStateIcon onSelect={handleSelect} options={options} />
        );
    }}
```

## Отключение поиска
В компоненте имеется возможность отключения поиска, за это отвечает свойство disableSearch

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                disableSearch
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
            />
        );
    }}
```

## Содержимое опции в несколько строк

По умолчанию значения опций отображаются в одну строку, и если текст слишком длинный, он будет обрезан троеточием. Чтобы изменить это поведение есть свойство `wrapLine`, которое позволяет вывести текст целиком в несколько строк.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                placeholder='Выберите значение'
                values={values}
                onSelect={handleSelect}>
                <MultiselectWithSearch.Option wrapLine>
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 2</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 3</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 4</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        );
    }}
```


## Установка data-test-id

Атрибут data-test-id можно передать декларативно в jsx только обертке селекта и опциям(если они передаются в MultiselectWithSearch как children, а не в качестве массива - тогда см. далее).
Для установки атрибутов элементам `Tag, Search, Option` можно передать пропс `testId: {tag, search, option}`.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                values={values}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                testId={{
                    tag: (val) => `tag-${val}`,
                    option: (val) => `option-${val}`,
                    search: `search`
                }}>
                <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        )}}
```

## Использование без чекбоксов

В компоненте есть возможность отключения чекбоксов, за это отвечает свойство `hideCheckboxes`.
Также есть возможность отключить чекбокс у конкретной опции, за это отвечает свойство `hideCheckbox`.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design="vertical">
                <MultiselectWithSearch
                    values={values}
                    placeholder={'Выберите значение'}
                    onSelect={handleSelect}
                    >
                    <MultiselectWithSearch.Option hideCheckbox>
                        Значение 1
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option>
                        Значение большое 2
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option hideCheckbox>
                        Значение еще больше 3
                    </MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <MultiselectWithSearch
                    values={values}
                    hideCheckboxes
                    options={[
                        'Значение 1',
                        'Значение большое 2',
                        'Значение еще больше 3',
                        'Знач. 4',
                        'Значение 5',
                        'Значение 6',
                        'Значение 7',
                        'Значение 8',
                        'Значение 9',
                        'Значение 10',
                    ]}
                    placeholder={'Выберите значение'}
                    onSelect={handleSelect}
                />
            </Groups>
        )}}
```

## Кастомизация подсветки при поиске

Подсветку выполняет компонент Highlight. Его можно настроить с помощью свойства `highlightCompare`, которое передается в `compare` компонента Highlight. Подробнее читайте [здесь](/components/highlight#управление-подсветкой).

```
    {() => {
        const stringOnlyNumbers = (string) => string.replace(new RegExp('\\\D', 'g'), '');
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        const compare = (text, search) => {
            const searchOnlyNumbers = stringOnlyNumbers(search);
            let parts = [text];
            let matchedString = '';
            let searchIndex = 0;
            for (const char of text) {
                if (searchIndex >= searchOnlyNumbers.length && matchedString) {
                    parts = [matchedString, text.replace(matchedString, '')];
                    break; // Выход из цикла, если все найдено
                } else if (new RegExp('[0-9]').test(char)) {
                    if (char === searchOnlyNumbers[searchIndex]) {
                        matchedString += char;
                        searchIndex++;
                    } else {
                        break; // Прерывание, если символ не совпадает
                    }
                } else {
                    matchedString += char; // Добавление символа к совпадению
                }
            }
            return { parts, compare: (part) => part === matchedString };
        };
        return (
            <MultiselectWithSearch
                values={values}
                options={[
                    '+7 999 999 90 90',
                    '+7 (960) 999-90-90',
                    '+7 950 999-90-90',
                ]}
                placeholder={'Выберите значение'}
                search={(name, searchString) => stringOnlyNumbers(name).startsWith(stringOnlyNumbers(searchString))}
                highlightCompare={compare}
                onSelect={handleSelect}
            />
        )}}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <MultiselectWithSearch viewOnly values={['test1', 'test2']}/>
```

## Popover у тегов

Для добавления Popover тегам, у компонента MultiselectWithSearch.Option есть ряд свойств:

- popoverProps - объект свойств для компонента Popover;
- tagMouseOver - колбэк события mouseover у тега;
- tagMouseLeave - колбэк события mouseleave у тега;

```
    {() => {
    const options = [
       'Значение 1',
       'Значение 2',
       'Значение 3',
       'Значение 4',
    ];
    const [values, setValues] = React.useState([]);
    const handleSelect = ({ value }) => setValues(value);
    return (
        <MultiselectWithSearch
            values={values}
            placeholder={'Выберите значение'}
            onSelect={handleSelect}
        >
            {options.map((option) => (
                <MultiselectWithSearch.Option
                    key={option}
                    value={option}
                    popoverProps={{
                        action: 'hover',
                        noClose: true,
                        showPopoverWithArrow: true,
                        placement: 'bottom',
                        header: option,
                        content: 'Содержимое popover',
                    }}
                >{option}</MultiselectWithSearch.Option>
            ))}
        </MultiselectWithSearch>
    );
}}
```

## Отображение чекбокса справа

В компоненте есть возможность показать чекбокс справа - для этого нужно передать свойство `showCheckboxOnRight`.

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <Groups design='vertical'>
                <P>Пункты меню размером S</P>
                <MultiselectWithSearch
                    size='xs'
                    values={values}
                    placeholder={'Выберите значение'}
                    onSelect={handleSelect}
                    showCheckboxOnRight>
                    <MultiselectWithSearch.Option value='Значение 1'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='s' /> Значение 1
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение большое 2'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='s' /> Значение большое 2
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение еще больше 3'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='s' /> Значение еще больше 3
                        </div>
                    </MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <P>Пункты меню размером M</P>
                <MultiselectWithSearch
                    size='m'
                    values={values}
                    placeholder={'Выберите значение'}
                    onSelect={handleSelect}
                    showCheckboxOnRight>
                    <MultiselectWithSearch.Option value='Значение 1'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='m' /> Значение 1
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение большое 2'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='m' /> Значение большое 2
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение еще больше 3'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='m' /> Значение еще больше 3
                        </div>
                    </MultiselectWithSearch.Option>
                </MultiselectWithSearch>
                <P>Пункты меню размером L</P>
                <MultiselectWithSearch
                    size='xl'
                    values={values}
                    placeholder={'Выберите значение'}
                    onSelect={handleSelect}
                    showCheckboxOnRight>
                    <MultiselectWithSearch.Option value='Значение 1'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='l' /> Значение 1
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение большое 2'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='l' /> Значение большое 2
                        </div>
                    </MultiselectWithSearch.Option>
                    <MultiselectWithSearch.Option value='Значение еще больше 3'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaceSmileIcon size='l' /> Значение еще больше 3
                        </div>
                    </MultiselectWithSearch.Option>
                </MultiselectWithSearch>
            </Groups>
        )}}
```

## Добавление новых опций при вводе значения в строку поиска

Если передать в компонент функцию `onAddValue?: (newValue: T) => void;`, то при ввод значения в строку поиска и нажатии клавиши `enter`, это значение добавится в качестве тэга и в список опций.

```
    {() => {
        const defaultOptions = [
                { value: 'Значение 1' },
                  { value: 'Значение большое 2' },
                  { value: 'Значение еще больше 3' },
                  { value: 'Знач. 4' },
                  { value: 'Значение 5' }
                ];
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        const [options, setOptions] = React.useState(defaultOptions);
        const handleAddOption = (newOption) => {
            if (!options.includes(newOption) && !values.includes(newOption)) {
                setOptions((prev) => [...prev,  {value: newOption}]);
                setValues((prev) => [...prev,  {value: newOption}]);
            }
        };
        return (
            <MultiselectWithSearch
                values={values}
                options={options}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                onAddValue={handleAddOption}
            />
        );
    }}
```

## Возможность отключить выпадающий список

Чтобы выключить отображение выпадающего списка и иконки стрелки, нужно передать проп `hideOptionsList`

```
    {() => {
        const defaultOptions = [];
        const [values, setValues] = React.useState([]);
        const [options, setOptions] = React.useState(defaultOptions);
        const handleSelect = ({ value }) => setValues(value);
        const handleAddOption = (newOption) =>{
                if (!options.includes(newOption) && !values.includes(newOption)) {
                    setOptions((prev) => [...prev, {value: newOption}]);
                    setValues((prev) => [...prev,  {value: newOption}]);
            }
        };
        return (
            <MultiselectWithSearch
                hideOptionsList
                values={values}
                options={options}
                placeholder={'Выберите значение'}
                onSelect={handleSelect}
                onAddValue={handleAddOption}
            />
        );
    }}
```

## Кнопка «Добавить»

Если пользователь сам заполняет справочник, а каждая запись имеет дополнительные поля, добавьте внизу выпадающего списка пункт «Добавить», чтобы пользователь мог быстро перейти к созданию новой записи.
При клике на этот пункт можно открывать модальное окно, drawer или отдельную страницу.

Список свойств для работы с кнопкой:

- showAddButton - показать кнопку (тип `boolean`)
- addButtonDuplication - включить дублирование поисковой строки в кнопку «Добавить» (тип `boolean`)
- addButtonOnClick - обработчик события клика по кнопке «Добавить» (тип `(searchString: string) => void`)

```
    {() => {
        const [options, setOptions] = React.useState([
            {
                id: 1,
                label: 'Значение 1',
            },
            {
                id: 2,
                label: 'Значение 2',
            },
            {
                id: 3,
                label: 'Значение 3',
            },
            {
                id: 4,
                label: 'Значение 4',
            },
        ]);
        const [values, setValues] = React.useState([]);
        const [isOpen, setIsOpen] = React.useState(false);
        const [inputValue, setInputValue] = React.useState('');
        const inputRef = React.useRef(null);
        const handleSelect = ({ value }) => setValues(value);
        const handleAddButtonClick = (searchString) => {
            setInputValue(searchString);
            setIsOpen(true);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            const newOption = { id: Date.now(), label: inputValue };
            setOptions((prev) => [...prev, newOption]);
            setIsOpen(false);
            setInputValue('');
            setValues((prev) => [...prev, newOption]);
        };
        return (
            <div>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onAfterOpen={() => inputRef.current && inputRef.current.focus()}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Добавить опцию</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <form onSubmit={handleSubmit}>
                                <Groups design={'vertical'}>
                                    <Input
                                        ref={inputRef}
                                        placeholder={'Новое значение'}
                                        value={inputValue}
                                        required
                                        onChange={({ value }) => setInputValue(value)}
                                    />
                                    <Button type={'submit'} size='l' design='outline'>
                                        Сохранить
                                    </Button>
                                </Groups>
                            </form>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
                <MultiselectWithSearch
                    options={options}
                    values={values}
                    name={'add-button'}
                    placeholder={'Выберите значение'}
                    showAddButton
                    addButtonDuplication
                    valueToString={(opt) => opt.label}
                    compare={(opt) => String(opt.id)}
                    onSelect={handleSelect}
                    addButtonOnClick={handleAddButtonClick}
                />
            </div>
        );
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для опций, поиска мультиселекта. Передается с помощью пропса `testId?: {tag?: (val: string) => string; option?: (val: string | React.ReactNode) => string; search?: string; arrow?: string`}.

Также добавлены дефолтные значения для `testId`:

```
export const defaultMultiselectWithSearchTestId: MultiselectWithSearchProps['testId'] = {
    tag: (val: string) => `multiselect-with-search_tag-${val}`,
    option: (val: string | React.ReactNode) => `multiselect-with-search_option-${val?.toString() ?? ''}`,
    search: 'multiselect-with-search_search',
    arrow: 'multiselect-with-search_arrow', // 'part'
};
```

```
    {() => {
        const [values, setValues] = React.useState([]);
        const handleSelect = ({ value }) => setValues(value);
        return (
            <MultiselectWithSearch
                placeholder='Выберите значение'
                values={values}
                onSelect={handleSelect}
                testId={{arrow: 'arrow-test', search: 'search-test', option: 'option-test', tag: 'tag-test'}}>
                <MultiselectWithSearch.Option wrapLine>
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                </MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 2</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 3</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 4</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        );
    }}
```