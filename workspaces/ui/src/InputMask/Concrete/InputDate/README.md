# InputDate

Компонент ввода даты является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
const [value, setValue] = React.useState('');
return <InputDate value={value} onChange={(e, data) => setValue(data.value)} />;
```

## Варианты отображения

Вариант предустановленной маски устанавливается свойством `type`

#### Дата / `type - не задано`

```jsx
const [value, setValue] = React.useState('');
return <InputDate value={value} onChange={(e, data) => setValue(data.value)} />;
```

#### Дата и время / `type = datetime`

```jsx
const [value, setValue] = React.useState('');
return <InputDate type='datetime' value={value} onChange={(e, data) => setValue(data.value)} />;
```

#### Время / `type = time`

```jsx
const [value, setValue] = React.useState('');
return <InputDate type='time' value={value} onChange={(e, data) => setValue(data.value)} />;
```

## Передача значения

В качестве допустимых значений компонент принимает строку или объект `Date`

#### Строка

```jsx
const [value, setValue] = React.useState('22.02.1988 09:30');
return <InputDate type='datetime' value={value} onChange={(e, data) => setValue(data.value)} />;
```

#### Объект Date

```jsx
const [value, setValue] = React.useState(new Date());
return <InputDate type='datetime' value={value} onChange={(e, data) => setValue(data.value)} />;
```

## Диапазон допустимых дат

```jsx
const [value, setValue] = React.useState();
const handleChange = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return <InputDate value={value} onChange={handleChange} min={new Date(2020, 5, 1)} max={new Date(2020, 5, 15)} />;
```
