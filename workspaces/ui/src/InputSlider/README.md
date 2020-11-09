# InputSlider

Компонент, который пригодится для выбора значения из диапозона, но с возможностью ввести конкретное значение как в стандартное поле ввода. Используется для выбора значений в калькуляторе, когда пользователю важнее попробовать разные значения, чем получить конкретный разультат Компонент являеется оберткой над `InputNumber` и может быть перенастроен как обычный `InputMask`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| delimeterfalse | "." \| "," \| undefined | false | Разделитель разряда |
| valuefalse | number \| undefined | false | Текущее значение |
| noInputfalse | boolean \| undefined | false | Скрывает поле ввода |
| childrenfalse | ReactNode | false | Засечки |
| onPointerUpfalse | ((event: any) => void) \| undefined | false | Событие onPointerUp для перехвата момента отпускания слайдера/полоски/тегов обрабатывает мышь и касания |

```jsx
{
    () => {
        const [value, setValue] = React.useState(50);
        const changeHandler = (e, data) => {
            setValue(parseInt(data.value));
        };
        return (
            <InputSlider
                mask='V $'
                lazy={false}
                blocks={{ V: { mask: Number, min: 0, max: 100 } }}
                onChange={changeHandler}
                value={value}
                postfix='15%'>
                <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
                <InputSlider.Tag val={50}>50 $</InputSlider.Tag>
                <InputSlider.Tag val={100}>100 $</InputSlider.Tag>
            </InputSlider>
        );
    };
}
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

#### Динамическая маска

```jsx
const [value, setValue] = React.useState(1);
const [mask, setMask] = React.useState('V год');
const changeHandler = (e, data) => {
    setValue(parseInt(data.value));
    const str = String(parseInt(data.value));
    switch (str[str.length - 1]) {
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
            return;
        default:
            setMask('V лет');
            return;
    }
};
return (
    <InputSlider
        mask={mask}
        lazy={false}
        min={1}
        max={100}
        blocks={{ V: { mask: Number, min: 1, max: 100 } }}
        onChange={changeHandler}
        value={value}
        postfix='15%'>
        <InputSlider.Tag val={1}>1 год</InputSlider.Tag>
        <InputSlider.Tag val={100}>100 лет</InputSlider.Tag>
    </InputSlider>
);
```

## Засечки

```jsx
const [value, setValue] = React.useState(25);
return (
    <InputSlider onChange={(e, d) => setValue(d.value)} value={value}>
        <InputSlider.Tag val={0}>0</InputSlider.Tag>
        <InputSlider.Tag val={10}>10</InputSlider.Tag>
        <InputSlider.Tag val={25}>25</InputSlider.Tag>
        <InputSlider.Tag val={50}>50</InputSlider.Tag>
        <InputSlider.Tag val={100}>100</InputSlider.Tag>
    </InputSlider>
);
```

## Минимальное значение

```jsx
const [value, setValue] = React.useState(1);
return <InputSlider onChange={(e, d) => setValue(d.value)} min={1} max={5} value={value} />;
```

#### Диапазон значений

```jsx
const [value, setValue] = React.useState(800);
return <InputSlider onChange={(e, d) => setValue(d.value)} min={800} max={800000} value={value} />;
```

#### Шаг ползунка

```jsx
const [value, setValue] = React.useState(0);
return <InputSlider onChange={(e, d) => setValue(d.value)} step={100} max={10000} value={value} />;
```

## Изменения шага ползунка по тегам

```jsx
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
```

## Без поля ввода

```jsx
const [value, setValue] = React.useState(0);
const changeHanlder = React.useCallback((e, d) => {
    setValue(d.value);
}, []);
return (
    <InputSlider noInput design='material' onChange={changeHanlder} max={1000} value={value}>
        <InputSlider.Tag val={0}>0</InputSlider.Tag>
        <InputSlider.Tag val={100}>100</InputSlider.Tag>
        <InputSlider.Tag val={200}>200</InputSlider.Tag>
        <InputSlider.Tag val={300}>300</InputSlider.Tag>
        <InputSlider.Tag val={400}>400</InputSlider.Tag>
        <InputSlider.Tag val={500}>500</InputSlider.Tag>
        <InputSlider.Tag val={1000}>1000</InputSlider.Tag>
    </InputSlider>
);
```
