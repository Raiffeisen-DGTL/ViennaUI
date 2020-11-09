# InputDateRange

Компонент ввода периода между двумя датами в формате `ДД.ММ.ГГГГ - ДД.ММ.ГГГГ` является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
const [value, setValue] = React.useState('');
const changeHanlder = React.useCallback((e, data) => {
    setValue(data.value);
}, []);
return <InputDateRange value={value} onChange={changeHanlder} />;
```
