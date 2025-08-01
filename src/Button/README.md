# Button

Используйте кнопки для наиболее важных действий, которые пользователи видят в продукте. Например, "Зарегистрироваться" или "Создать документ".

## Импорт

```
import { Alert } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | ButtonDesign \| undefined  |
| size | ResponsiveProp<'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' |  | Размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| undefined  |
| square | boolean \| undefined |
| pressed | boolean \| undefined |
| loading | boolean \| undefined |
| ref | Ref<HTMLButtonElement> \| undefined |

## HTMLAttributes
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| disabled | boolean \| undefined  |

## Использование

```jsx
<Button design='accent'>Accent</Button>
```

## Использование <Playground preview of={Button}>

```
    <Groups>
        <Button design='accent'>Accent</Button>
        <Button design='primary'>Primary</Button>
        <Button design='outline'>Outline</Button>
        <Button design='critical'>Critical</Button>
        <Button design='outline-critical'>Outline critical</Button>
        <Button design='ghost'>Ghost</Button>
        <Button design='ghost-accent'>Ghost accent</Button>
        <Button design='white'>White</Button>
    </Groups>
```

## Использование с React Router (5.x)

Вы можете использовать компонент совместно с React Router (5.x).

```jsx
import { useHistory } from 'react-router-dom';
import { Button } from 'vienna.ui';

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

## Внешний вид и размеры

#### Accent

Используйте кнопку `Accent` для действий, требующих максимальное внимание. Допускается использовать одну акцентную кнопку на экране.

```
    <Button size='xs' design='accent'>
        Default
    </Button>
    <Button size='s' design='accent'>
        Default
    </Button>
    <Button size='m' design='accent'>
        Default
    </Button>
    <Button size='l' design='accent'>
        Default
    </Button>
    <Button size='xl' design='accent'>
        Default
    </Button>
    <Button size='xxl' design='accent'>
        Default
    </Button>
    <Button design='accent' loading>
        Loading
    </Button>
    <Button design='accent' disabled>
        Disabled
    </Button>
```


#### Primary

Используйте кнопку `Primary` для действий, требующих среднее внимание.

```
    <Button size='xs' design='primary'>
        Default
    </Button>
    <Button size='s' design='primary'>
        Default
    </Button>
    <Button size='m' design='primary'>
        Default
    </Button>
    <Button size='l' design='primary'>
        Default
    </Button>
    <Button size='xl' design='primary'>
        Default
    </Button>
    <Button size='xxl' design='primary'>
        Default
    </Button>
    <Button design='primary' loading>
        Loading
    </Button>
    <Button design='primary' disabled>
        Disabled
    </Button>
```


#### Outline

Используйте кнопку `Outline` для действий, требующих наименьшее внимание.

```
    <Button size='xs' design='outline'>
        Default
    </Button>
    <Button size='s' design='outline'>
        Default
    </Button>
    <Button size='m' design='outline'>
        Default
    </Button>
    <Button size='l' design='outline'>
        Default
    </Button>
    <Button size='xl' design='outline'>
        Default
    </Button>
    <Button size='xxl' design='outline'>
        Default
    </Button>
    <Button design='outline' loading>
        Loading
    </Button>
    <Button design='outline' disabled>
        Disabled
    </Button>
```


#### Critical

Используйте кнопку `Critical` для действий, требующих максимальное внимание в негативных кейсах.

```
    <Button size='xs' design='critical'>
        Default
    </Button>
    <Button size='s' design='critical'>
        Default
    </Button>
    <Button size='m' design='critical'>
        Default
    </Button>
    <Button size='l' design='critical'>
        Default
    </Button>
    <Button size='xl' design='critical'>
        Default
    </Button>
    <Button size='xxl' design='critical'>
        Default
    </Button>
    <Button design='critical' loading>
        Loading
    </Button>
    <Button design='critical' disabled>
        Disabled
    </Button>
```

#### Outline-critical

Используйте кнопку `Outline Critical` для действий, требующих наименьшее внимание в негативных кейсах.

```
    <Button size='xs' design='outline-critical'>
        Default
    </Button>
    <Button size='s' design='outline-critical'>
        Default
    </Button>
    <Button size='m' design='outline-critical'>
        Default
    </Button>
    <Button size='l' design='outline-critical'>
        Default
    </Button>
    <Button size='xl' design='outline-critical'>
        Default
    </Button>
    <Button size='xxl' design='outline-critical'>
        Default
    </Button>
    <Button design='outline-critical' loading>
        Loading
    </Button>
    <Button design='outline-critical' disabled>
        Disabled
    </Button>
```


#### Ghost

Используйте кнопку `Ghost` для действий, требующих наименьшее внимание.

```
    <Button size='xs' design='ghost'>
        Default
    </Button>
    <Button size='s' design='ghost'>
        Default
    </Button>
    <Button size='m' design='ghost'>
        Default
    </Button>
    <Button size='l' design='ghost'>
        Default
    </Button>
    <Button size='xl' design='ghost'>
        Default
    </Button>
    <Button size='xxl' design='ghost'>
        Default
    </Button>
    <Button design='ghost' loading>
        Loading
    </Button>
    <Button design='ghost' disabled>
        Disabled
    </Button>
```


#### Ghost accent

Используйте кнопку `Ghost accent` для действий, требующих наименьшее внимание.

```
    <Button size='xs' design='ghost-accent'>
        Default
    </Button>
    <Button size='s' design='ghost-accent'>
        Default
    </Button>
    <Button size='m' design='ghost-accent'>
        Default
    </Button>
    <Button size='l' design='ghost-accent'>
        Default
    </Button>
    <Button size='xl' design='ghost-accent'>
        Default
    </Button>
    <Button size='xxl' design='ghost-accent'>
        Default
    </Button>
    <Button design='ghost-accent' loading>
        Loading
    </Button>
    <Button design='ghost-accent' disabled>
        Disabled
    </Button>
```


#### White

Используйте кнопку `White` для фонов, отличных от белого (светлых цветов).

```
    <Button size='xs' design='white'>
        Default
    </Button>
    <Button size='s' design='white'>
        Default
    </Button>
    <Button size='m' design='white'>
        Default
    </Button>
    <Button size='l' design='white'>
        Default
    </Button>
    <Button size='xl' design='white'>
        Default
    </Button>
    <Button size='xxl' design='white'>
        Default
    </Button>
    <Button design='white' loading>
        Loading
    </Button>
    <Button design='white' disabled>
        Disabled
    </Button>
</Playground>

## Ссылка как кнопка

Есть передасть кнопке свойство `href`, вместо тэга `<button>` будет отображаться стилизованный под кнопоку тэг `<a>`

<Playground>
    <Button href='/' design='accent'>
        Home
    </Button>
    <Button design='primary' href='http://google.com' target='_blank'>
        Google
    </Button>
```


## Кнопки с иконками

```
    <Button>
        <Back /> Назад
    </Button>
    <Button>
        Вперед <ForwardArrowRight />
    </Button>
    <Button>
        <Screw /> Вперед <ForwardArrowRight />
    </Button>
```

#### Опциональные иконки

```
    {() => {
        let showIcon = false;
        return(
            <Button grid={2}>
               {showIcon ? <Back/> : null}
               Назад
            </Button>);}
    }
```

#### Гайдлайны

Для всех размеров кнопок используются иконки дефолтного размера `m` (20px). Исключение составляют кнопки размера `xs`, для которых используются иконки размера `s` (16px).

```
    <Button size='xs'>
        <Logo size='s' /> XS
    </Button>
    <Button size='s'>
        <Logo /> S
    </Button>
    <Button size='m'>
        <Logo /> M
    </Button>
    <Button size='l'>
        <Logo /> L
    </Button>
    <Button size='xl'>
        <Logo /> XL
    </Button>
    <Button size='xxl'>
        <Logo /> XXL
    </Button>
```

#### Квадратные кнопки

Передав кнопке параметр `square` можно установить ширину равную ее высоте. Это может быть полезно, если кнопка содержит в себе одну только иконку. Обратите внимание, что гайдлайны по соотношению размера кнопки и иконки из параграфа выше распрастроняются и на этот вид кнопок.

```
    <Button size='xs' square>
        <Logo size='s' />
    </Button>
    <Button size='s' square>
        <Logo />
    </Button>
    <Button size='m' square>
        <Logo />
    </Button>
    <Button size='l' square>
        <Logo />
    </Button>
    <Button size='xl' square>
        <Logo />
    </Button>
    <Button size='xxl' square>
        <Logo />
    </Button>
```


## Ограничение по сетке

Свойство `grid` позволяет растянуть кнопку по сетке

```
    <Button design='primary' grid={0}>
        auto
    </Button>
    <Button design='primary' grid={1}>
        1
    </Button>
    <Button design='primary' grid={2}>
        2
    </Button>
    <Button design='primary' grid={3}>
        3
    </Button>
    <Button design='primary' grid={4}>
        4
    </Button>
    <Button design='primary' grid={5}>
        5
    </Button>
    <Button design='primary' grid={6}>
        6
    </Button>
    <Button design='primary' grid={7}>
        7
    </Button>
    <Button design='primary' grid={8}>
        8
    </Button>
    <Button design='primary' grid={9}>
        9
    </Button>
    <Button design='primary' grid={10}>
        10
    </Button>
    <Button design='primary' grid={11}>
        11
    </Button>
    <Button design='primary' grid={12}>
        12
    </Button>
```


## Ограничение по длине

Если компоненту необходимо задать определенную ширину в колонке/блоке, текст может зарезаться.

```
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