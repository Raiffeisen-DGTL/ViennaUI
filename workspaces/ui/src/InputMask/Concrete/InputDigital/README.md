# InputDigital

Компонент ввода произвольного набора цифр является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
const [value, setValue] = React.useState('');
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputDigital value={value} onChange={changeHandler} />;
```
