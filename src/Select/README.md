# Select

Компонент предназначен для выбора одного элемента из выпадающего списка.

## Импорт

```
import { Select } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | `string` | — | ID компонента |
| prefix | `ReactNode` | — | Значение отображаемое перед компонентом |
| postfix | `Postfix` | — | Значение отображаемое после компонента |
| placeholder | `string` | — | Значение, отображаемое, если ничего не выбрано |
| className | `string` | — | Название стиля для компонента |
| tabIndex | `number` | — | Порядок получения фокуса |
| invalid | `boolean` | — | Компонент отображается как ошибочный |
| value | `T` | — | Выбранный элемент |
| inputValue | `string` | — |  |
| templateValue | `ReactNode` | — | Шаблон отображения выбранного элемента |
| smartPlaceholder | `ReactNode` | — |  |
| size | `ResponsivePropSizeType, B>` | — | Размеры |
| design | `DesignType` | — | Дизайн |
| maxListHeight | `number` | — | Максимальная высота выпадающего списка |
| maxListWidth | `number` | — | Максимальная ширина выпадающего списка |
| onSelect | `OnChangeHandler<T \| undefined, React.MouseEvent \| React.KeyboardEvent>` | — | Обработчик события при выборе элемента списка |
| editable | `ReactNode \| ChildrenFunc` | — | Отображает input при фокусе |
| fitOptions | `boolean` | — | Выравнивает содержимое списка по ширине |
| valueToString | `ValueToStringType<T>` | — | Определяет, какое значение выводить в селекте |
| compare | `CompareType<T>` | — | Определяет, как сравнивать объекты для подсветки |
| fixed | `boolean` | — |  |
| ref | `React.Ref<HTMLDivElement>` | — |  |
| inputRef | `React.RefObject<HTMLInputElement>` | — |  |
| dropdownPortal | `HTMLElement \| React.MutableRefObjectHTMLElement \| null> \| null` | — |  |
| clearButton | `boolean` | — | Показывает кнопку очистки |
| selectFirstOnEnter | `boolean` | — | onSelect будет вызываться с первым элементом по Enter |
| controlsRef | `React.MutableRefObjectSelectServiceType \| null>` | — | Ref для программного focus/blur |
| onClear | `() => void` | — | Обработчик кнопки очистки |
| showAddButton | `boolean` | — | Показать кнопку "Добавить" |
| addButtonOnClick | `() => void` | — | Обработчик клика по кнопке "Добавить" |

## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| className | string \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |
| style | CSSProperties \| undefined | |
| name | string \| undefined | |
| pattern | string \| undefined | |
| maxLength | number \| undefined | |
| autoComplete | string \| undefined | |
| autoCorrect | string \| undefined | |
| autoFocus | boolean \| undefined | |
| max | (number & Date) \| undefined | |
| placeholder | string \| undefined | |
| min | (number & Date) \| undefined | |
| disabled |boolean \| undefined |


# Select

Компонент предназначен для выбора одного элемента из выпадающего списка.

Используется:
- Формы: Хорошо подходит для форм, где требуется выбрать один вариант из небольшого списка (5-15 пунктов)
- Фильтрация: Может использоваться для выбора критериев фильтрации или сортировки данных.
- Настройки: Позволяет выбрать предустановленные настройки или параметры, например, валюту.
- Переключение состояния: Может использоваться для изменения состояния или отображения контента в зависимости от выбранного варианта.



```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Использование

Размеры: `xs`, `s`, `m`, `l`, `xl` и `xxl`

Свойства дизайна размера и состояния идентичны компоненту `Input`. Предусмотрено автомотическое позиционирование выпадающего списка.

Компонент полностью управляемый, по умолчанию работает с массивом строк или объектами у которых есть поле `value`.

Массив передается в свойство `options`, а выбранный элемент в `value`.

По умолчанию список раскрывается при фокусе, это можно отключить установив свойство `openWhenFocus` в значение `false`.

Открытие и закрытие списка происходит по клавишам `Enter` и `Esacape` соответственно.

<ComponentHelpers.Select.Warn>
    <WarningRingIcon size='xl' />
    <div>
        При использовании допускается единовремнно указывать либо <span>options</span>, либо передавать{' '}
        <span>дочерние элементы</span>
    </div>
</ComponentHelpers.Select.Warn>

## Дизайн

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                design='material'
                placeholder='Выберите значение'
                value={value}
                maxListHeight={300}
                fitOptions={false}
                onChange={(d) => console.log(d)}
                onSelect={handleSelect}>
                <Select.Option>Значение Значение Значение Значение Значение 1</Select.Option>
                <Select.Option>Значение Значение Значение Значение 2</Select.Option>
                <Select.Option>Значение Значение Значение Значение Значение 3</Select.Option>
                <Select.Option>Значение Значение Значение Значение Значение Значение Значение 4</Select.Option>
                <Select.Option>Значение Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Размеры

Доступные размеры `xs`, `s`, `m`, `l`, `xl` и `xxl`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Groups design='vertical'>
                <Select size='xs' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='s' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='m' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='l' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='xl' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select size='xxl' placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </Groups>
        );
    }}
```

Доступные размеры `xs`, `s`, `m`, `l`, `xl` и `xxl` в дизайне `material`.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Groups design='vertical'>
                <Select
                    design='material'
                    size='xs'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='s'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='m'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='l'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='xl'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
                <Select
                    design='material'
                    size='xxl'
                    placeholder='Выберите значение'
                    value={value}
                    onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </Groups>
        );
    }}
```

#### Состояние ошибки

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select invalid placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select design='material' invalid placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Состояние disabled

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select disabled placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

Дизайн `material`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select design='material' disabled placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Простое применение (статическое)

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option value='Значение 1' />
                <Select.Option value='Значение 2' />
                <Select.Option value='Значение 3' />
                <Select.Option value='Значение 4' />
                <Select.Option value='Значение 5' />
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option value={{ value: 'Значение 1' }} />
                <Select.Option value={{ value: 'Значение 2' }} />
                <Select.Option value={{ value: 'Значение 3' }} />
                <Select.Option value={{ value: 'Значение 4' }} />
                <Select.Option value={{ value: 'Значение 5' }} />
            </Select>
        );
    }}
```

<ComponentHelpers.Select.Info>
    <WarningRingIcon size='xl' />
    <div>
        По умолчанию компонент работает со строками или объектами в которых есть поле <span>value</span>, если
        стандартная ситуация невозможна то можно воспользоваться свойством <span>valueToString</span>, которое указывает
        по какому значению сравнивать и отображать, как выбранное
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                placeholder='Выберите значение'
                valueToString={(item) => item && item.text}
                compare={(item) => item && item.name}
                value={value}
                onSelect={handleSelect}>
                <Select.Option value={{ name: 'Значение 1', text: 'Значение 1 - сложное' }} />
                <Select.Option value={{ name: 'Значение 2', text: 'Значение 2 - сложное' }} />
                <Select.Option value={{ name: 'Значение 3', text: 'Значение 3 - сложное' }} />
                <Select.Option value={{ name: 'Значение 4', text: 'Значение 4 - сложное' }} />
                <Select.Option value={{ name: 'Значение 5', text: 'Значение 5 - сложное' }} />
            </Select>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                placeholder='Выберите значение'
                valueToString={(item) => item && item.name}
                value={value}
                onSelect={handleSelect}>
                <Select.Option value={{ name: 'Значение 1' }} />
                <Select.Option value={{ name: 'Значение 2' }} />
                <Select.Option value={{ name: 'Значение 3' }} />
                <Select.Option value={{ name: 'Значение 4' }} />
                <Select.Option value={{ name: 'Значение 5' }} />
            </Select>
        );
    }}
```

## Простое применение (динамическое)

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([]);
        const handleSelect = ({ value }) => setValue(value);
        React.useEffect(() => {
            setTimeout(() => {
                setOptions(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
            }, 15000);
        }, []);
        return <Select placeholder='Выберите значение' options={options} value={value} onSelect={handleSelect} />;
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
        const handleSelect = ({ value }) => setValue(value);
        React.useEffect(() => {
            setTimeout(() => {
                setOptions( ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5'] );
            }, 15000);
        }, []);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                {options.map((item, index) => (
                    <Select.Option key={index}>{item}</Select.Option>
                ))}
            </Select>
        );
    }}

```

## Бесконечные списки

Свойства `options` как `callback`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        const getOptions = React.useCallback((options) => {
            if (options.length) {
                return options.concat([`Значение ${options.length + 1}`]);
            } else {
                return ['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6'];
            }
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                options={getOptions}
                maxListHeight={150}
                onSelect={handleSelect}
            />
        );
    }}
```

`options` как `Promise`

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        const getOptions = (options) => {
            if (options.length) {
                return Promise.resolve(options.concat([`Значение ${options.length + 1}`]));
            } else {
                return Promise.resolve([
                    'Значение 1',
                    'Значение 2',
                    'Значение 3',
                    'Значение 4',
                    'Значение 5',
                    'Значение 6',
                ]);
            }
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                options={getOptions}
                maxListHeight={150}
                onSelect={handleSelect}
            />
        );
    }}
```

Если элементы переданы, как дочерние

<ComponentHelpers.Select.Info>
    <WarningRingIcon size='xl' />
    <div>
        Также тут продемонстрирован вариант предачи в качестве дочернего элемента <span>функции</span>, которая
        принимает следующие праметры : <span>props, currentIndex, Option</span>
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { name: 'Значение 1' },
            { name: 'Значение 2' },
            { name: 'Значение 3' },
            { name: 'Значение 4' },
            { name: 'Значение 5' },
            { name: 'Значение 6' },
        ]);
        const handleSelect = ({ value }) => setValue(value);
        const handleScroll = (e, data) => {
            const { height, scrollTop, scrollHeight } = data
            if (height + scrollTop > scrollHeight - 10) {
                options.push({ name: `Элемент ${options.length}` })
                setOptions(options)
            }
        }
        return (
            <Groups design='vertical'>
                <Select
                    placeholder='Выберите значение'
                    valueToString={(item) => item && item.name}
                    value={value}
                    maxListHeight={150}
                    onScroll={handleScroll}
                    onSelect={handleSelect}>
                    {({ props, currentIndex, Option }) =>
                        options.map((s, i) => (
                            <Option key={i} value={s}>
                                {s.name}
                            </Option>
                        ))
                    }
                </Select>
            </Groups>
        );
    }}
```

## Кастомизация

<ComponentHelpers.Select.Warn>
    <WarningRingIcon size='xl' />
    <div>
        Далее представлены некоторые способы изменения внешнего вида компонента, перед использованием рекомендуется
        проконсультироваться с дизайнером, возможно стоит пересмотреть дизайн
    </div>
</ComponentHelpers.Select.Warn>

<ComponentHelpers.Select.Warn>
    <WarningRingIcon size='xl' />
    <div>
        Далее и везде при использовании иконок нужно придерживаться правила:
        <div>
            <span>l</span> - селект => <span>m</span> иконка.
        </div>
        <div>
            <span>s</span> - селект => <span>s</span> иконка.
        </div>
    </div>
</ComponentHelpers.Select.Warn>

Для изменения дизайна всех частей компонента можно использовать поле `custom` при переопределении шаблона, также для компонента `Option` предусмотрено свойство `custom` переопределяюще стили напрямую.

#### Изменение иконки компонента

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
            postfix={{ up: <ViolinIcon /> }}
            placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Различное состояние для закрытого и открытого списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                postfix={{ up: <FaceNeutralIcon />, down: <FaceSmileIcon /> }}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Добавление префиксной иконки

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select prefix={<TaskDoneIcon />} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Изменение иконки выделенного элемента списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option icon={<TheaterOutIcon />}>Значение 1</Select.Option>
                <Select.Option icon={<ViolinIcon />}>Значение 2</Select.Option>
                <Select.Option icon={<BustIcon />}>Значение 3</Select.Option>
                <Select.Option icon={<ToPayIcon />}>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

#### Изменение содержимого элемента списка

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1' },
            { value: 'Значение 2', sub: 'Дополнение 2' },
            { value: 'Значение 3', sub: 'Дополнение 3' },
            { value: 'Значение 4', sub: 'Дополнение 4' },
            { value: 'Значение 5', sub: 'Дополнение 5' },
        ]);
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option value={i} key={index}>
                        <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />
                    </Select.Option>
                ))}
            </Select>
        );
    }}
```

#### Использование неоднородных элементов и блокировка

<ComponentHelpers.Select.Info>
    <WarningRingIcon size='xl' />
    <div>
        Обратите внимание на свойство <span>disabled</span> у элемента списка, оно делает его недоступным к выбору
    </div>
</ComponentHelpers.Select.Info>

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
            { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
            { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
            { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <ViolinIcon /> },
            { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <BustIcon /> },
            { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
            { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
        ]);
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option disabled={i.disabled} value={i} key={index}>
                        {i.type === 'custom' && <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />}
                        {i.type === 'icon' && (
                            <ComponentHelpers.Select.CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />
                        )}
                        {i.type === 'default' && i.value}
                    </Select.Option>
                ))}
            </Select>
        );
    }}
```

#### Изменение отображения выбранного элемента

Используется свойство `templateValue` : `JSX.Element`

```javascript
export const Template = styled.div`
    display: flex;
    align-options: center;
    justify-content: space-between;
    width: 100%;
`;
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            { value: 'Значение 1', sub: 'Дополнение 1', type: 'custom' },
            { value: 'Значение 2', sub: 'Дополнение 2', type: 'default' },
            { value: 'Значение 3', sub: 'Дополнение 3', type: 'default' },
            { value: 'Значение 4', sub: 'Дополнение 4', type: 'icon', icon: <ViolinIcon /> },
            { value: 'Значение 5', sub: 'Дополнение 5', type: 'icon', icon: <BustIcon /> },
            { value: 'Значение 6', sub: 'Дополнение 6', type: 'custom', disabled: true },
            { value: 'Значение 7', sub: 'Дополнение 7', type: 'default' },
        ]);
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                valueToString={(item) => item && item.value}
                placeholder='Выберите значение'
                value={value}
                templateValue={
                    value && (
                        <ComponentHelpers.Select.Template>
                            <div>{value.value}</div>
                            <div>{value.sub}</div>
                        </ComponentHelpers.Select.Template>
                    )
                }
                onSelect={handleSelect}>
                {options.map((i, index) => (
                    <Select.Option disabled={i.disabled} value={i} key={index}>
                        {i.type === 'custom' && <ComponentHelpers.Select.CustomItem value={i.value} sub={i.sub} />}
                        {i.type === 'icon' && (
                            <ComponentHelpers.Select.CustomItemWithIcon icon={i.icon} value={i.value} sub={i.sub} />
                        )}
                        {i.type === 'default' && i.value}
                    </Select.Option>
                ))}
            </Select>
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
        const [value, setValue] = React.useState();
        const controlsRef = React.useRef(null);
        const [options] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5']);
        const handleSelect = ({ value }) => setValue(value);
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
                    <Select
                        fixed
                        maxListHeight={150}
                        controlsRef={controlsRef}
                        placeholder='Выберите значение'
                        options={options}
                        value={value}
                        onSelect={handleSelect}
                    />
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
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}
                onToggle={console.log}
            >
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Как сравниваются значения и свойство compare

По умолчанию для подсветки выбранного элемента используется сравнение с переданным в value значением в следующем порядке:

-   по ссылке
-   с результатом метода compare
-   с результатом метода valueToString

В отличие от `valueToString` назначение которого - сравнение и вывод строки результата, метод compare следует применять когда фактические значения могут совпадать, но их же нужно и выводить.

Например есть пользовтели с полным совпадением по `ФИО`, но с разными `ID` - вывести надо имя но сравнивать будем по ID. `Compare`следует также использовать если сравнение по `ссылке` не возможно так как список всевремя мутирует.

## Свойство editable

Свойство `editable` позволяет вводить текст в поле поиска компонента. При его включении становится доступным свойство `onChange` которое возвращает введеную строку. При этом поле ввода является дочерним от `iMask`

`Начните вводить 'Данные' или 'Значение'`

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState(['Значение 1',
      'Значение 2',
      'Значение 3',
      'Значение 4',
      'Значение 5',
      'Данные 1',
      'Данные 2',
      'Данные 3',
      'Данные 4',
      'Данные 5']);
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = React.useCallback(({ value }) => {
            const mock = [
                'Значение 1',
                'Значение 2',
                'Значение 3',
                'Значение 4',
                'Значение 5',
                'Данные 1',
                'Данные 2',
                'Данные 3',
                'Данные 4',
                'Данные 5',
            ];
            setOptions([...mock.filter((i) => i.startsWith(value))]);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                editable
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState(['Значение 1',
      'Значение 2',
      'Значение 3',
      'Значение 4',
      'Значение 5',
      'Данные 1',
      'Данные 2',
      'Данные 3',
      'Данные 4',
      'Данные 5']);
        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5'
        ];
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = ({ value }) => {
            setOptions([...mock.filter((i) => i.startsWith(value))]);
        };
        return (
            <Groups design='vertical'>
                <Select
                    design='material'
                    placeholder='Выберите значение'
                    value={value}
                    editable
                    onChange={changeHandler}
                    onFocus={() => console.log('focus 2')}
                    onBlur={() => console.log('blur 2')}
                    options={options}
                    onSelect={handleSelect}
                />
                <Select
                    placeholder='Выберите значение'
                    value={value}
                    onFocus={() => console.log('focus')}
                    onBlur={() => console.log('blur')}
                    editable
                    onChange={changeHandler}
                    onSelect={handleSelect}>
                    {options.map((o, idx) => (
                        <Select.Option key={idx}>{o}</Select.Option>
                    ))}
                </Select>
            </Groups>
        );
    }}
```

## Значение вне списка

Бывает что требуется предоставить пользователю возможность сохранить то значение что сейчас введено, даже если отсутствует сопоставление в списке

- Обратите внимание что такое использование компонента является контекстно-некорректным, попробуйте решить проблему по другому или воспользоваться компонентом `Search`

```
    {() => {
        const mock = [
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5',
        ];
        const [options, setOptions] = React.useState(mock);
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = ({ value }) => {
            setValue(value);
            setOptions([...mock.filter((i) => i.startsWith(value))]);
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                inputValue={value}
                editable
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

## Маска

Включение маски в поле ввода

```
    {() => {
        const mock = ['1234-1234', '1234-5678', '1234-0000', '1234-9876', '1234-4321'];
        const [options, setOptions] = React.useState(mock);
        const [value, setValue] = React.useState('1234-0000');
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = ({ value }) => {
            setValue(value);
            setOptions([...mock.filter((i) => i.startsWith(value))]);
        };
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                mask={'{1234}-0000'}
                editable
                inputValue={value}
                onFocus={() => console.log('focus 1')}
                onBlur={() => console.log('blur 1')}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}></Select>
        );
    }}

```

## Спиннер

```
    {() => {
        const [value, setValue] = React.useState();
        const [loading, setLoading] = React.useState(false);
        const timerRef = React.useRef(null);
        const handleSelect = React.useCallback(({ value }) => {
            setValue(value);
            setLoading(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => setLoading(false), 1000);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}
                postfix={loading ? { up: <Spinner/ > }: undefined}
                >
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Свойство fixed

Для отображения выпадающего списка поверх контейнера с `overflow: hidden`, можно добавить фиксированное позиционирование с помощью свойства `fixed`. Обратите внимание, что это приведет к фиксации выпадающего списка в определенном месте вне зависимости от скролла страницы.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '300px',
                    height: '100px',
                    border: '1px solid',
                }}>
                <div style={{ width: '500px', height: '300px' }}>
                    <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                        <Select fixed placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                            <Select.Option>Значение 1</Select.Option>
                            <Select.Option>Значение 2</Select.Option>
                            <Select.Option>Значение 3</Select.Option>
                            <Select.Option>Значение 4</Select.Option>
                            <Select.Option>Значение 5</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }}
```

## Изменение размеров выпадающего списка

За управление размерами отвечают следующие свойства:
- fitOptions (тип boolean) растягивает выпадающий список по ширине родителя, по умолчанию `true`;
- maxListHeight (тип number) ограничивает высоту выпадающего списка в пикселях;
- maxListWidth (тип number) ограничивает ширину выпадающего списка в пикселях;

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Groups design='vertical'>
                <div style={{ width: '100px' }}>
                    <Select fitOptions={false} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                        <Select.Option>Значение 1</Select.Option>
                        <Select.Option>Значение очень длииное 2</Select.Option>
                        <Select.Option>Значение 3</Select.Option>
                        <Select.Option>Значение 4</Select.Option>
                        <Select.Option>Значение 5</Select.Option>
                    </Select>
                </div>
                <Select maxListWidth={250} maxListHeight={100} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                    <Select.Option>Значение 1</Select.Option>
                    <Select.Option>Значение очень длииное 2</Select.Option>
                    <Select.Option>Значение 3</Select.Option>
                    <Select.Option>Значение 4</Select.Option>
                    <Select.Option>Значение 5</Select.Option>
                </Select>
            </Groups>
        );
    }}
```

## Свойство fitOptions с fixed

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '300px',
                    height: '100px',
                    border: '1px solid',
                }}>
                <div style={{ width: '500px', height: '300px' }}>
                    <div style={{ position: 'absolute', left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}>
                        <Select
                            fixed
                            fitOptions={false}
                            maxListWidth={400}
                            placeholder='Выберите значение'
                            value={value}
                            onSelect={handleSelect}>
                            <Select.Option>Значение 1</Select.Option>
                            <Select.Option>Значение 2</Select.Option>
                            <Select.Option>Значение 3</Select.Option>
                            <Select.Option>Значение 4</Select.Option>
                            <Select.Option>Значение 5</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        );
    }}
```

## Кнопка очистки заполненного поля

Свойство `clearButton` добавляет кнопку очистки заполненного поля (кнопка очистки отображается в состояниях с выбранным вариантом)

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} clearButton onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Интерактивный элемент списка

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                    <Button onClick={console.log} design='accent' size='xs'>
                        Кнопка
                    </Button>
                </Groups>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
                <Groups __nowrap__ alignItems='center' height='full' justifyContent='center'>
                    <Button onClick={console.log} design='accent' size='xs'>
                        Кнопка
                    </Button>
                </Groups>
            </Select>
        );
    }}
```

#### Элементы списка с кнопками

```
    {() => {
    const [value, setValue] = React.useState(undefined);
        const [options, setOptions] = React.useState(['Значение 1', 'Значение 2', 'Значение 3', 'Значение 4', 'Значение 5', 'Значение 6']);
        const handleSelect = ({ value: selectedValue }) => {
            if (selectedValue && options.includes(selectedValue)) {
                setValue(selectedValue);
            }
        };
        const handleOptionClick = (e, value) => {
            e.stopPropagation();
            setOptions(options.filter(option => option !== value));
        };
        React.useEffect(() => {
            if (value !== undefined && !options.includes(value)) {
                setValue(undefined);
            }
        }, [options, value]);
        const renderOption = (value) => (
            <Select.Option key={value} value={value}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '500px' }}>
                    {value}
                    <CloseCancelXIcon onMouseDown={(e) => handleOptionClick(e, value)} />
                </div>
            </Select.Option>
        );
        return (
            <Select maxListWidth={550} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                {options.map((option) => renderOption(option))}
            </Select>
        );
    }}
```

#### Адаптив

Для компонента Select, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                size={{ base: 's', s: 'xs', m: 'xl' }}
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Содержимое опции в несколько строк

По умолчанию значения опций отображаются в одну строку, и если текст слишком длинный, он будет обрезан троеточием. Чтобы изменить это поведение есть свойство `wrapLine`, которое позволяет вывести текст целиком в несколько строк.

```
    {() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                onSelect={handleSelect}>
                <Select.Option wrapLine>
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                    Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1 Значение 1
                </Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```

## Реф на input при editable

Есть свойство `inputRef`, которое отвечает за реф на input в Select при указанном `editable`.

```
    {() => {
        const inputRef = React.useRef(null);
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5'
        ]);
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = React.useCallback((data) => {
            const mock = [
                'Значение 1',
                'Значение 2',
                'Значение 3',
                'Значение 4',
                'Значение 5',
                'Данные 1',
                'Данные 2',
                'Данные 3',
                'Данные 4',
                'Данные 5',
            ];
            setOptions([...mock.filter((i) => i.startsWith(data.value))]);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                editable
                inputRef={inputRef}
                onFocus={() => console.log('inputref', inputRef)}
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

## Локализация

Для того чтобы локализовать селект, необходимо передать в localization объект локализации

```
{
    'ds.select.empty': 'Нет элементов для отображения',
}
```

```
    {() => {
        return (
            <Select
                placeholder='Choose option'
                localization={{'ds.select.empty': 'List is empty'}}
            />
        );
    }}
```

## Возможность триггерить вызов onSelect с выбранным значением

За возможность триггерить вызов onSelect с выбранным значением отвечает свойство `selectFirstOnEnter`. Если данное свойство установлено, то onSelect будет вызываться с первым элементом из списка по нажатию на Enter. Если выбран другой элемент из списка - с ним будет вызываться onSelect. По умолчанию значение false.

```
    {() => {
        const [value, setValue] = React.useState();
        const [options, setOptions] = React.useState([
            'Значение 1',
            'Значение 2',
            'Значение 3',
            'Значение 4',
            'Значение 5',
            'Данные 1',
            'Данные 2',
            'Данные 3',
            'Данные 4',
            'Данные 5'
        ]);
        const handleSelect = ({ value }) => setValue(value);
        const changeHandler = React.useCallback(({ value }) => {
            const mock = [
                'Значение 1',
                'Значение 2',
                'Значение 3',
                'Значение 4',
                'Значение 5',
                'Данные 1',
                'Данные 2',
                'Данные 3',
                'Данные 4',
                'Данные 5',
            ];
            setOptions([...mock.filter((i) => i.startsWith(value))]);
        }, []);
        return (
            <Select
                placeholder='Выберите значение'
                value={value}
                selectFirstOnEnter
                onChange={changeHandler}
                options={options}
                onSelect={handleSelect}
            />
        );
    }}
```

## Использование коллбэка для кнопки очистки значения

Когда необходимо добавить дополнительную логику при очистке значения - передайте коллбэк с помощью свойства `onClear`.

```
    {() => {
    const [value, setValue] = React.useState('');
    const handleSelect = ({ value }) => setValue(value);
    const addLogic = () => {
        console.log('do some logic here');
    };
    return (
        <Select
            placeholder='Выберите значение'
            value={value}
            onSelect={handleSelect}
            clearButton
            onClear={addLogic}>
            <Select.Option>Значение 1</Select.Option>
            <Select.Option>Значение 2</Select.Option>
            <Select.Option>Значение 3</Select.Option>
            <Select.Option>Значение 4</Select.Option>
            <Select.Option>Значение 5</Select.Option>
        </Select>
    );
    }}
```

## Состояние ViewOnly

Это состояние используется, когда нужно показать значение поля без возможности изменения.
Может использоваться для построения форм, которые находятся в режиме просмотра, где все поля заполнены, но не доступны для редактирования.

Свойства:

- viewOnly - состояние `ViewOnly` (тип boolean);
- viewOnlyText - текст значения (тип ReactNode);

```
    <Select
        viewOnly
        placeholder='Выберите значение'
        value={'Значение 1'}
        options={[]}
    />
```

## Кнопка «Добавить»

Если пользователь сам заполняет справочник, а каждая запись имеет дополнительные поля, добавьте внизу выпадающего списка пункт «Добавить», чтобы пользователь мог быстро перейти к созданию новой записи.
При клике на этот пункт можно открывать модальное окно, drawer или отдельную страницу.

Список свойств для работы с кнопкой:

- showAddButton - показать кнопку (тип `boolean`)
- addButtonOnClick - обработчик события клика по кнопке «Добавить» (тип `() => void`)

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
        const [value, setValue] = React.useState();
        const [isOpen, setIsOpen] = React.useState(false);
        const [inputValue, setInputValue] = React.useState('');
        const inputRef = React.useRef(null);
        const handleSelect = ({ value }) => setValue(value);
        const handleAddButtonClick = () => {
            setIsOpen(true);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            const newOption = { id: Date.now(), label: inputValue };
            setOptions((prev) => [...prev, newOption]);
            setIsOpen(false);
            setInputValue('');
            setValue(newOption);
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
                <Select
                    options={options}
                    value={value}
                    name={'add-button'}
                    placeholder={'Выберите значение'}
                    showAddButton
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

Атрибут `data-testid` можно передать значения опции, контейнера, инпута, дроплиста, текущей опции, плейсхолдера, префикса, постфикса, опции. 

Пропс `testId?: {container, input, droplist, current, placeholder, prefix, postfix, option}`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultSelectTestId: SelectTestId = {
    container: 'select_container',
    input: 'select_input',
    droplist: 'select_droplist',
    current: 'select_current',
    placeholder: 'select_placeholder',
    prefix: 'select_prefix',
    postfix: 'select_postfix', // 'part'
    option: (val: string | React.ReactNode) => `select_option-${val?.toString() ?? ''}`,
};
```

```
{() => {
        const [value, setValue] = React.useState();
        const handleSelect = ({ value }) => setValue(value);
        return (
            <Select testId={{container: 'test-id-container', input: 'test-id-input', droplist: 'test-id-droplist', current: 'test-id-current', placeholder: 'test-id-placeholder', prefix: 'test-id-prefix', postfix: 'test-id-postfix'}} placeholder='Выберите значение' value={value} onSelect={handleSelect}>
                <Select.Option testId={(val) => `test-id-${val}`}>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        );
    }}
```