## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| delimiter | "." \| "," |  | Разделитель разряда |
| value | number \| undefined |  | Текущее значение |
| noInput | boolean \| undefined |  | Скрывает поле ввода |
| onPointerUp | ((event: MouseEvent \| TouchEvent) => void) \| undefined |  | Событие onPointerUp для перехвата момента отпускания слайдера/полоски/тегов обрабатывает мышь и касания |
| onChange | (value: number \| null) => void |  | Обработчик изменения значения |
| max | number \| undefined |  | Максимальное значение default = 100 |
| min | number \| undefined |  | Минимальное значение default = 0 |
| step | number \| undefined |  | Шаг инкремента default = 1 |
| scale | number \| undefined |  | Количество знаков после запятой default = 0 |
| children | ReactNode \| undefined |  | Засечки |
| testId | InputSliderTestId \| undefined |  | Идентификатор для тестирования |
| maskOptions | InputMaskProps['maskOptions'] \| undefined |  | Опции маски |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| max | number \| undefined |
| min | number \| undefined |
| step | number \| undefined |

# InputSlider

Компонент, который пригодится для выбора значения из диапозона, но с возможностью ввести конкретное значение как в стандартное поле ввода. Используется для выбора значений в калькуляторе, когда пользователю важнее попробовать разные значения, чем получить конкретный разультат Компонент являеется оберткой над `InputNumber` и, как следствие `Input`. Подробнее о наследованных свойствах смотрите у компонента `Input`;



```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e));
        };
        return (
            <InputSlider
                min={20}
                max={100}
                lazy={false}
                onChange={changeHandler}
                value={value}
                postfix='15%'>
                <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
                <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
            </InputSlider>
        );
    }}
```

## Внешний вид

Дизайн, размеры и другие настройки полностью идентичны компоненту Input. Для использования необходимо ознакомится с работой IMask.

#### Особенности

-   линия кликабельна по всей длине (onChange)
-   теги кликабельны (onChange)
-   на ползунок можно перейти `Tab` из поля ввода и перемещать клавишами `влево` и `вправо` (onChange)
-   при ручном перетаскивании ползунка фокусируется поле ввода
-   если ползунок перетаскивается мышью у него отключается `transition`
-   за исключением дополнительных свойств элемент наследуется от `InputNumber`

## Дизайн

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    size='xs'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    size='s'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    size='m'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    size='xl'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    design='material'
                    size='xs'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    design='material'
                    size='s'
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    design='material'
                    size="m"
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    design='material'
                    size="xl"
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

## Состояния

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    disabled
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e) || 0);
        };
        return (
                <InputSlider
                    invalid
                    lazy={false}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

## Засечки

```
    {() => {
        const [value, setValue] = React.useState(25);
        return (
            <Groups>
                <InputSlider onChange={(e) => setValue(e || 0)} value={value}>
                    <InputSlider.Tag val={0}>0</InputSlider.Tag>
                    <InputSlider.Tag val={10}>10</InputSlider.Tag>
                    <InputSlider.Tag val={25}>25</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

## Минимальное значение

```
    {() => {
        const [value, setValue] = React.useState(1);
        return (
            <Groups>
                <InputSlider onChange={(e) => setValue(e)} min={1} max={5} value={value} />
            </Groups>
        );
    }}
```

#### Диапазон значений

```
    {() => {
        const [value, setValue] = React.useState(800);
        return (
            <Groups>
                <InputSlider onChange={(e) => setValue(e)} min={800} max={800000} value={value} />
            </Groups>
        );
    }}
```

#### Шаг ползунка

```
    {() => {
        const [value, setValue] = React.useState(0);
        return (
            <Groups>
                <InputSlider onChange={(e) => setValue(e)} step={100} max={10000} value={value} />
            </Groups>
        );
    }}
```

## Изменения шага ползунка по тегам

```
    {() => {
        const [value, setValue] = React.useState(1);
        const [step, setStep] = React.useState(1);
        const [invalid, setInvalid] = React.useState(false);
        const changeHanlder = React.useCallback((e) => {
            setValue(e);
            setStep(parseInt(e / 10) || 1);
            if (e > 500) {
                setInvalid(true);
            } else {
                setInvalid(false);
            }
        }, []);
        return (
                <InputSlider
                    onChange={changeHanlder}
                    invalid={invalid}
                    min={1}
                    max={1000}
                    step={step}
                    value={value}
                    postfix={`st:${step}`}>
                    <InputSlider.Tag val={1}>0</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                    <InputSlider.Tag val={200}>200</InputSlider.Tag>
                    <InputSlider.Tag val={300}>300</InputSlider.Tag>
                    <InputSlider.Tag val={400}>400</InputSlider.Tag>
                    <InputSlider.Tag val={500}>500</InputSlider.Tag>
                    <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
                </InputSlider>
        );
    }}
```

## Без поля ввода

```
    {() => {
        const [value, setValue] = React.useState(0);
        const changeHanlder = React.useCallback((d) => {
            setValue(d.value);
        }, []);
        return (
            <Groups design='vertical'>
                <InputSlider size='l' noInput design='material' onChange={changeHanlder} max={1000} value={value}>
                    <InputSlider.Tag val={0}>0</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                    <InputSlider.Tag val={200}>200</InputSlider.Tag>
                    <InputSlider.Tag val={300}>300</InputSlider.Tag>
                    <InputSlider.Tag val={400}>400</InputSlider.Tag>
                    <InputSlider.Tag val={500}>500</InputSlider.Tag>
                    <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
                </InputSlider>
                <InputSlider size='s' noInput design='material' onChange={changeHanlder} max={1000} value={value}>
                    <InputSlider.Tag val={0}>0</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                    <InputSlider.Tag val={200}>200</InputSlider.Tag>
                    <InputSlider.Tag val={300}>300</InputSlider.Tag>
                    <InputSlider.Tag val={400}>400</InputSlider.Tag>
                    <InputSlider.Tag val={500}>500</InputSlider.Tag>
                    <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    size='l'
                    disabled
                    noInput
                    design='material'
                    onChange={changeHanlder}
                    max={1000}
                    value={value}>
                    <InputSlider.Tag val={0}>0</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                    <InputSlider.Tag val={200}>200</InputSlider.Tag>
                    <InputSlider.Tag val={300}>300</InputSlider.Tag>
                    <InputSlider.Tag val={400}>400</InputSlider.Tag>
                    <InputSlider.Tag val={500}>500</InputSlider.Tag>
                    <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    size='s'
                    disabled
                    noInput
                    design='material'
                    onChange={changeHanlder}
                    max={1000}
                    value={value}>
                    <InputSlider.Tag val={0}>0</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100</InputSlider.Tag>
                    <InputSlider.Tag val={200}>200</InputSlider.Tag>
                    <InputSlider.Tag val={300}>300</InputSlider.Tag>
                    <InputSlider.Tag val={400}>400</InputSlider.Tag>
                    <InputSlider.Tag val={500}>500</InputSlider.Tag>
                    <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

## Комплексное применение

```
    {() => {
        const [value, setValue] = React.useState(4);
        const str = 'RAIFFEISEN';
        const changeHanlder = React.useCallback((e) => {
            setValue(e);
        }, []);
        return (
            <Groups design='vertical'>
                <div>
                    <span>{str.split('').slice(0, value).join('')}</span>
                    <span>.RU</span>
                </div>
                <InputSlider noInput design='material' onChange={changeHanlder} min={1} max={11} value={value}>
                    <InputSlider.Tag val={1}>R</InputSlider.Tag>
                    <InputSlider.Tag val={2}>A</InputSlider.Tag>
                    <InputSlider.Tag val={3}>I</InputSlider.Tag>
                    <InputSlider.Tag val={4}>F</InputSlider.Tag>
                    <InputSlider.Tag val={5}>F</InputSlider.Tag>
                    <InputSlider.Tag val={6}>F</InputSlider.Tag>
                    <InputSlider.Tag val={7}>E</InputSlider.Tag>
                    <InputSlider.Tag val={8}>I</InputSlider.Tag>
                    <InputSlider.Tag val={9}>S</InputSlider.Tag>
                    <InputSlider.Tag val={10}>E</InputSlider.Tag>
                    <InputSlider.Tag val={11}>N</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

## С иконками

```
    {() => {
        const [value, setValue] = React.useState(1);
        const changeHanlder = React.useCallback((d) => {
            setValue(d.value);
        }, []);
        return (
            <Groups design='vertical'>
                <InputSlider
                    noInput
                    size='l'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}
                />
                <InputSlider
                    noInput
                    size='s'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}
                />
                <InputSlider
                    noInput
                    size='l'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}>
                    <InputSlider.Tag val={1}>
                        <Tooltip design='dark' content='sad'>
                            sad
                        </Tooltip>
                    </InputSlider.Tag>
                    <InputSlider.Tag val={2}>
                        <Tooltip design='dark' content='neutral'>
                            neutral
                        </Tooltip>
                    </InputSlider.Tag>
                    <InputSlider.Tag val={3}>
                        <Tooltip design='dark' content='FaceSmileIcon'>
                            FaceSmileIcon
                        </Tooltip>
                    </InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    noInput
                    size='l'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}>
                    <InputSlider.Tag val={1}>
                        <Tooltip design='dark' content='sad'>
                            sad
                        </Tooltip>
                    </InputSlider.Tag>
                    <InputSlider.Tag val={2}>
                        <Tooltip design='dark' content='neutral'>
                            neutral
                        </Tooltip>
                    </InputSlider.Tag>
                    <InputSlider.Tag val={3}>
                        <Tooltip design='dark' content='FaceSmileIcon'>
                            FaceSmileIcon
                        </Tooltip>
                    </InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    noInput
                    size='l'
                    disabled
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}
                />
                <InputSlider
                    noInput
                    size='s'
                    disabled
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSadIcon />}
                    postfix={<FaceSmileIcon />}
                />
            </Groups>
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
    <InputSlider
        min={20}
        max={100}
        value={50}
        viewOnly
        postfix='15%'>
        <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
        <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
        <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
    </InputSlider>
```

## Кастомизация

```
    {() => {
        const [value, setValue] = React.useState(30);
        const theme = {
            inputSlider: {
                custom: {
                    circle: {
                        background: '#fff',
                        boxShadow: `
                            0 0 20px 15px #fff,
                            0 0 50px 30px #f0f,
                            0 0 75px 45px #0ff;
                            `,
                        '&:focus, &:hover': {
                            background: '#fff',
                        },
                    },
                    lineFront: {
                        borderColor: '#fff',
                        background: '#fff',
                        boxShadow: `
                            0 0 10px 7.5px #fff,
                            0 0 25px 15px #f0f,
                            0 0 37.5px 22.5px #0ff;
                            `,
                    },
                    lineBack: {
                        'border-bottom-color': '#000',
                        background: '#000',
                        boxShadow: `
                            0 0 10px 7.5px #000,
                            0 0 25px 15px #f0f,
                            0 0 37.5px 22.5px #0ff;
                            `,
                    },
                },
            },
        };
        const changeHandler = React.useCallback((value) => {
            setValue(value);
        }, []);
        return (
            <Groups design='vertical' style={{ height: '50px' }}>
                <ThemeProvider theme={theme}>
                    <InputSlider noInput size='l' design='material' onChange={changeHandler} value={value} />
                </ThemeProvider>
            </Groups>
        );
    }}
```


## Установка data-testid

Атрибут `data-testid` можно передать для линии и для круга. Передается с помощью пропса `testId?: { circle?: string; line?: string; }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultInputSliderTestId: InputSliderTestId = {
    circle: 'input-slider_circle',
    line: 'input-slider_line',
};
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e) => {
            setValue(parseInt(e));
        };
        return (
            <InputSlider
                min={20}
                max={100}
                lazy={false}
                onChange={changeHandler}
                value={value}
                postfix='15%'
                testId={{circle: 'circle', line: 'line'}}>
                <InputSlider.Tag val={20}>20 $</InputSlider.Tag>
                <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
            </InputSlider>
        );
    }}
```