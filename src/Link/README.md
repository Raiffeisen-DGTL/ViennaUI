# Link

Компонент ссылка.

## Импорт

```
import { Link } from 'vienna-ui';
```

## Свойства / Props


| Prop     | Type                                                       | Default  | Description |
| -------- | ---------------------------------------------------------- | -------- | ----------- |
| design   | 'accent' \| 'accent-underline' \| 'primary' \| 'secondary' |  |
| size     | ResponsiveProp<'s' \| 'm' \| 'l', Breakpoints> \| undefined
| loading  | boolean \| undefined                                       |     |
| disabled | boolean \| undefined                                       |     |
| color   | 'brand-accent' \| 'brand-on-accent' \| 'brand-white' \| 'brand-primary' \| 'brand-on-primary' \| 'brand-wildsand' \| 'seattle01' \| 'seattle05' \| 'seattle10' \| 'seattle30' \| 'seattle60' \| ... 168 more ... \| undefined                                        |     |

## Link

Компонент ссылка.


```
    <Groups>
        <Link design='accent' href='https://google.com'>
            Accent link
        </Link>
        <Link design='accent-underline' href='https://google.com'>
            Accent underline link
        </Link>
        <Link design='primary' href='https://google.com' target='_blank'>
            Primary link
        </Link>
        <Link design='secondary' target='_blank' href='https://google.com'>
            Secondary link
        </Link>
    </Groups>
```

## Внешний вид

Для корректной работы нужно, чтобы компонент Link принимал в children текст либо span и есть свойство `color`
для установки цвета ссылки

```
    <Link design='accent' href='https://google.com'>
        Accent link
    </Link>
    <Link design='accent-underline' href='https://google.com'>
        Accent underline link
    </Link>
    <Link design='primary' href='https://google.com' target='_blank'>
        Primary link
    </Link>
    <Link design='secondary' target='_blank' href='https://google.com'>
        Secondary link
    </Link>
    <Link design='accent' color='geneva120' href='https://google.com'>
        Accent geneva link
    </Link>
    <Link design='accent' color='nice120' href='https://google.com'>
        Accent nice link
    </Link>
    <Link design='accent' color='seoul120' href='https://google.com'>
        Accent seoul link
    </Link>
```

## Использование с React Router

Вы можете использовать компонент совместно с React Router.

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@fcc/ui';

export default (props) => (
    <Link {...props} as={RouterLink} to='/episodes'>
        Link
    </Link>
);
```

## Размеры

Ссылки поддерживают 3 варианта размера: `s`, `m` и `l`

```
    <Link href='#' size='s'>
        Small
    </Link>
    <Link href='#' size='m'>
        Medium
    </Link>
    <Link href='#' size='l'>
        Large
    </Link>
```

## Ссылки с иконками

```
    <Link design='accent'>
        <Back /> Назад
    </Link>
    <Link design='primary'>
        Вперед <ForwardArrowRight />
    </Link>
    <Link design='secondary'>
        <Screw />
        <span>Вперед</span>
        <ForwardArrowRight />
    </Link>
```

## Гайдлайны

Размер иконки внутри ссылки должен соотвествовать размеру самой ссылки, то есть внутри ссылки размера `s` должна использоваться иконка размера `s`.

```
    <Link size='s'>
        <Logo size='s' /> Small
    </Link>
    <Link size='m'>
        <Logo /> Medium
    </Link>
    <Link size='l'>
        <Logo size='l' /> Large
    </Link>
```

## Ссылки из одной иконки

```
    <Link design='accent'>
        <Back />
    </Link>
    <Link design='primary'>
        <Logo />
    </Link>
    <Link design='secondary'>
        <Screw />
    </Link>
    <Link design='accent'>
        <ForwardArrowRight />
    </Link>
```

## Состояния

#### Disabled

```
    <Link design='accent' href='#' disabled>
        Accent link
    </Link>
    <Link design='accent-underline' href='#' disabled>
        Accent underline link
    </Link>
    <Link design='primary' href='#' disabled>
        Primary link
    </Link>
    <Link design='secondary' href='#' disabled>
        Secondary link
    </Link>
    <Link design='secondary' href='#' disabled>
        <Screw />
        Screw
    </Link>
    <Link design='primary' href='#' disabled>
        <ForwardArrowRight />
    </Link>
```

#### Loading

```
    <Link design='accent' href='#' size='s' loading>
        Accent link
    </Link>
    <Link design='accent-underline' href='#' size='s' loading>
        Accent underline link
    </Link>
    <Link design='primary' href='#' size='m' loading>
        Primary link
    </Link>
    <Link design='secondary' href='#' size='l' loading>
        Secondary link
    </Link>
    <Link design='secondary' loading>
        <Screw />
        Screw
    </Link>
    <Link design='primary' href='#' loading>
        <ForwardArrowRight />
    </Link>
```

#### Адаптив

Для компонента Link, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    <Link size={{ base: 's', s: 'm', m: 'l' }}>Link</Link>
```