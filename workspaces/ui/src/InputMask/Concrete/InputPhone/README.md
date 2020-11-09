# InputPhone

Компонент ввода телефона является частным случаем [`InputMask`](../../) с предустановленным значением `mask`

```jsx
<InputPhone value={'4959191242'} />
```

По умолчанию

-   маска настроена для России.

-   включена поддержка `8` и `+7` для телефонов Росиии

#### Вариант с предустановленой частью номера

```jsx
<InputPhone value={value} mask={'+{7} (495) 000-00-00'} onChange={handleChange} />
```

#### Вариант со сложной маской телефона

```jsx
<InputPhone value={value} mask={'+{42} (000) {234}-00-00'} onChange={handleChange} />
```

#### Вариант с передачей кастомного замещающего символа

```jsx
<InputPhone value={value} mask={'+{42} (000) {234}-00-00'} placeholderChar={'#'} onChange={handleChange} />
```
