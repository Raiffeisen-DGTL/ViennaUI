# InputAccount

Компонент ввода номера счета в формате `_____.___._.___________` является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
const [value, setValue] = React.useState('');
const changeHandler = React.useCallback((e, data) => setValue(data.value), []);
return <InputAccount value={value} onChange={changeHandler} />;
```
