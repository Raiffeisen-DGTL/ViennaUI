# InputNumber

Компонент ввода вещественных чисел является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

Компонент ввода чисел, делитель дробных частей по умолчанию - точка.

```jsx
const [value, setValue] = React.useState(23.4);
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputNumber onChange={changeHandler} value={value} />;
```

#### Количество символов после запятой / `scale`

```jsx
const [value, setValue] = React.useState(0);
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputNumber onChange={changeHandler} value={value} scale={1} />;
```

#### Разделение на разряды / `thousandsSeparator`

определяет символ который будет стоять между разрядами

```jsx
const [value, setValue] = React.useState('');
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputNumber onChange={changeHandler} value={value} scale={2} thousandsSeparator='' />;
```
