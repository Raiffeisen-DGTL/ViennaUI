# Checkbox

Компонент для выбора нескольких значений из множества

## Импорт

```
import { Checkbox } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLLabelElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | false | Отображаемый лейбл |
| ref | ((instance: HTMLInputElement \| null) => void) \| RefObject \| null \| undefined | false | Сcылка на нативный элемент input, доступна после отрисовки |
| size | "s" \| "m" \| "l" \| undefined | "m" | Размеры |
| invalid | boolean \| undefined | false | Компонент отображается как ошибочный если true |
| indeterminate | boolean \| undefined | false | Частично выбранный чекбокс. Нельзя использовать совместно с checked |
| onBlur | CheckboxEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при потере фокуса компонентом |
| onFocus | CheckboxEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при получении фокуса компонентом |
| onChange | CheckboxEvent<FocusEvent<HTMLInputElement>> \| undefined | false | Обработчик события при клике на компонент |
| checked | boolean \| undefined | false | Статус выбранного значения |
| disabled | boolean \| undefined | false |
| name | string \| undefined | false |

## Использование

В качестве дочернего элемента передается label для checkbox.

> Компонент является контролируемым, то есть чтобы отобразить чтобы отобразить выбранные элементы, необходимо получить ее значение через обработчик `onChange` и прокинуть проверку в `checked`.

```jsx
{
    () => {
        const [state, setState] = React.useState({ checked: false, checked2: true, indeterminate: true });
        return (
            <Checkbox checked={state.checked} onChange={(e, { value }) => setState({ ...state, checked: value })}>
                Checkbox
            </Checkbox>
        );
    };
}
```

## Выбранный элемент

##### Свойство `checked`

```
<Checkbox checked>
    Content
</Checkbox>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `s`, `m` (по умолчанию) и `l`.

## Состояния

##### Свойство `disabled`, `invalid`

Компонент имеет состояние `disabled` и `invalid`

```jsx
<Checkbox disabled />
<Checkbox invalid />
```

## Частично выбранный чекбокс

##### Свойство `indeterminate`

Частично выбранный чекбокс. Применяется если в интерфейсе необходимо использование группы чекбоксов. Если часть из них выбрана, то применяется состояние частично выбранного чекбокса у родительского компонента.

```jsx
<Checkbox indeterminate>Label</Checkbox>
```
