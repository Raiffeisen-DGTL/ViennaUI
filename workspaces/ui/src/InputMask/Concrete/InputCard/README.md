# InputCard

Компонент ввода номера банковской карты в формате `NNNN NNNN NNNN NNNN` является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
const [value, setValue] = React.useState('');
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputCard value={value} onChange={changeHandler} />;
```
