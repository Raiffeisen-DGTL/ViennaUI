# Link

Компонент ссылка.


## Импорт

```
import { Link } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [AnchorHTMLAttributes<HTMLAnchorElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1935)

Prop | Type | Default | Description
--- | --- | --- | ---
design | 'accent' \| 'accent-underline' \| 'primary' \| 'secondary' | 'accent' | 
size | 's' \| 'm' \| 'l' | 'm' | 
loading | boolean \| undefined | false | 
disabled | boolean \| undefined | false | 
href | string \| undefined | false |


## Использование

```jsx
<Link design='accent' href='https://google.com'>
    Accent link
</Link>
```

## Использование с React Router

Вы можете использовать компонент совместно с React Router.

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'vienna-ui';

export default (props) => (
    <Link {...props} as={RouterLink} to='/episodes'>
        Link
    </Link>
);
```

## Размеры
##### Свойство `size`

Ссылки поддерживают 3 варианта размера: `s`, `m` (по умолчанию) и `l`

## Ссылки с иконками

```jsx
<Link design='accent'>
    <LeftArrow /> Назад
</Link>
```

#### Гайдлайны

Размер иконки внутри ссылки должен соотвествовать размеру самой ссылки, то есть внутри ссылки размера `s` должна использоваться иконка размера `s`.

## Неактивное состояние
##### Свойство `disabled`

```jsx
<Link design='accent' href='#' disabled>
    Accent link
</Link>
```
## Состояние загрузки
##### Свойство `loading`

```jsx
<Link design='accent' href='#' size='s' loading>
    Accent link
</Link>
```
