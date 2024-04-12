

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| delimiter | "." \| "," \| undefined |  | Разделитель разряда |
| value | number \| undefined |  | Текущее значение |
| noInput | boolean \| undefined |  | Скрывает поле ввода |
| onPointerUp | ((event: any) => void) \| undefined |
| onChange | (InputEvent<FormEvent<HTMLInputElement>> & ((value: unknown) => void)) \| undefined |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| max |number \| undefined |
| min |number \| undefined |
| step |number \| undefined |

# InputSlider

Компонент, который пригодится для выбора значения из диапозона, но с возможностью ввести конкретное значение как в стандартное поле ввода. Используется для выбора значений в калькуляторе, когда пользователю важнее попробовать разные значения, чем получить конкретный разультат Компонент являеется оберткой над `InputNumber` и, как следствие `Input`. Подробнее о наследованных свойствах смотрите у компонента `Input`;


```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
        };
        return (
            <InputSlider
                mask='V $'
                lazy={false}
                blocks={{ V: { mask: Number } }}
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
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
        };
        return (
            <Groups design={'vertical'}>
                <InputSlider
                    size='xs'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    size='s'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    size='xl'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
        };
        return (
            <Groups design='vertical'>
                <InputSlider
                    design='material'
                    size='xs'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    design='material'
                    size='s'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    design='material'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    design='material'
                    size='xl'
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

#### Динамическая маска

```
    {() => {
        const [value, setValue] = React.useState(1);
        const [mask, setMask] = React.useState('V год');
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
            const str = String(parseInt(data.value));
            switch(str[str.length - 1 ]){
                case 'N':
                    setMask('V');
                    return;
                case '1':
                    setMask('V год');
                    return;
                case '2':
                case '3':
                case '4':
                    setMask('V года');
                    return
                default:
                    setMask('V лет');
                    return;
            }
        };
        return (
            <Groups>
                <InputSlider
                    mask={mask}
                    lazy={false}
                    min={1}
                    max={100}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={1}>1 год</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 лет</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

## Состояния

```
    {() => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
        };
        return (
            <Groups>
                <InputSlider
                    disabled
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
                <InputSlider
                    invalid
                    mask='V $'
                    lazy={false}
                    blocks={{ V: { mask: Number } }}
                    onChange={changeHandler}
                    value={value}
                    postfix='15%'>
                    <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                    <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                    <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
                </InputSlider>
            </Groups>
        );
    }}
```

## Засечки

```
    {() => {
        const [value, setValue] = React.useState(25);
        return (
            <Groups>
                <InputSlider onChange={(e, d) => setValue(d.value)} value={value}>
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
                <InputSlider onChange={(e, d) => setValue(d.value)} min={1} max={5} value={value} />
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
                <InputSlider onChange={(e, d) => setValue(d.value)} min={800} max={800000} value={value} />
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
                <InputSlider onChange={(e, d) => setValue(d.value)} step={100} max={10000} value={value} />
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
        const changeHanlder = React.useCallback((e, d) => {
            setValue(d.value);
            setStep(parseInt(d.value / 10) || 1);
            if (d.value > 500) {
                setInvalid(true);
            } else {
                setInvalid(false);
            }
        }, []);
        return (
            <Groups>
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
            </Groups>
        );
    }}
```

## Без поля ввода

```
    {() => {
        const [value, setValue] = React.useState(0);
        const changeHanlder = React.useCallback((e, d) => {
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
        const changeHanlder = React.useCallback((e, d) => {
            setValue(d.value);
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
        const changeHanlder = React.useCallback((e, d) => {
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
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}
                />
                <InputSlider
                    noInput
                    size='s'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}
                />
                <InputSlider
                    noInput
                    size='l'
                    design='material'
                    onChange={changeHanlder}
                    min={1}
                    max={3}
                    value={value}
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}>
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
                        <Tooltip design='dark' content='FaceSmile'>
                            FaceSmile
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
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}>
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
                        <Tooltip design='dark' content='FaceSmile'>
                            FaceSmile
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
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}
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
                    prefix={<FaceSad />}
                    postfix={<FaceSmile />}
                />
            </Groups>
        );
    }}
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
        const changeHanlder = React.useCallback((e, d) => {
            setValue(d.value);
        }, []);
        return (
            <Groups design='vertical' style={{ height: '50px' }}>
                <ThemeProvider theme={theme}>
                    <InputSlider noInput size='l' design='material' onChange={changeHanlder} value={value} />
                </ThemeProvider>
            </Groups>
        );
    }}
```