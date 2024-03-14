# Button

Используйте кнопки для наиболее важных действий, которые пользователи видят в продукте. Например, "Зарегистрироваться" или "Создать документ".

## Импорт

```
import { Alert } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | 'primary' \| 'accent' \| 'critical' \| 'outline' \| 'outline-critical' \| 'ghost' | 'primary' | Дизайн |
| size | 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' | 'm' | Размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 | false |
| square | boolean | false |
| loading | boolean | false |
| forwardedRef | any | false |
| value | string \| undefined | false |
| type | 'button' \| 'submit' \| 'reset' \| 'menu' \| undefined | 'button' |
| onClick | ((event: FormEvent) => void) \| undefined | false |
| onFocus | ((event: FormEvent) => void) \| undefined | false |
| onBlur | ((event: FormEvent) => void) \| undefined | false |
| onKeyUp | ((event: FormEvent) => void) \| undefined | false |
| onKeyDown | ((event: FormEvent) => void) \| undefined | false |
| onMouseUp | ((event: FormEvent) => void) \| undefined | false |
| onMouseDown | ((event: FormEvent) => void) \| undefined | false |
| onMouseEnter | ((event: FormEvent) => void) \| undefined | false |
| onMouseOut | ((event: FormEvent) => void) \| undefined | false |
| onMouseLeave | ((event: FormEvent) => void) \| undefined | false |

## Использование

```jsx
<Button design='accent'>Accent</Button>
```

## Использование с React Router (5.x)

Вы можете использовать компонент совместно с React Router (5.x).

```jsx
import { useHistory } from 'react-router-dom';
import { Button } from 'vienna-ui';

export default () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/path-to-page');
    };

    return (
        <Button design='accent' onClick={handleClickButton}>
            Button
        </Button>
    );
};
```

## Разммер

##### Свойство `size`

Доступные размеры: `xs`, `s`, `m` (по умолчанию), `l`, `xl`, `xxl`

## Дизайн

##### Свойство `design`

Используйте кнопку `accent` для действий, требующих максимальное внимание. Допускается использовать одну акцентную кнопку на экране. Используйте кнопку `primary` для действий, требующих среднее внимание. Используйте кнопку `outline` для действий, требующих наименьшее внимание. Используйте кнопку `critical` для действий, требующих максимальное внимание в негативных кейсах. Используйте кнопку `outline-critical` для действий, требующих наименьшее внимание в негативных кейсах. Используйте кнопку `ghost` для действий, требующих наименьшее внимание.

```jsx
<Button size='xs' design='accent'>
    Default
</Button>
```

#### Кнопки с иконками

```jsx
<Button>
    <LeftArrow /> Назад
</Button>
```

#### Гайдлайны

Для всех размеров кнопок используются иконки дефолтного размера `m` (20px). Исключение составляют кнопки размера `xs`, для которых используются иконки размера `s` (16px).

## Кнопка как ссылка

##### Свойство `href`

Есть передасть кнопке свойство `href`, вместо тэга `<button>` будет отображаться стилизованный под кнопоку тэг `<a>`

```jsx
<Button href='/' design='accent'>
    Home
</Button>
```

## Квадратные кнопки

##### Свойство `square`

Передав кнопке параметр `square` можно установить ширину равную ее высоте. Это может быть полезно, если кнопка содержит в себе одну только иконку. Обратите внимание, что гайдлайны по соотношению размера кнопки и иконки из параграфа выше распрастроняются и на этот вид кнопок.

```jsx
<Button square>
    <Logo size='s' />
</Button>
```

## Ограничение по сетке

##### Свойство `grid`

Свойство `grid` позволяет растянуть кнопку по сетке

```jsx
<Button design='primary' grid={3}>
    3
</Button>
```

#### Ограничение по длине

Если компоненту необходимо задать определенную ширину в колонке/блоке, текст может обрезаться.

```jsx
<Button size='s' grid={1}>
    Button Text
</Button>
<Button size='m' grid={2}>
    Super Button Text
</Button>
<Button size='l' grid={3}>
    Super Button Text Awesome Amazing
</Button>
```
