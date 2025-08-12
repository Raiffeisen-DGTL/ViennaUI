# Carousel

## Импорт

```
import { Carousel } from 'vienna-ui';
``` 


# Carousel

Интерактивный элемент интерфейса, позволяющий пользователям просматривать несколько элементов контента (например, изображения, текстовые блоки, карточки и т. д.) в одном и том же месте на экране.



```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    postfix={<Hint action='hover' header='Lorem ipsum dolor sit amet' content='Consectetur adipiscing elit' />}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```

# Внешний вид

В качестве элемента карусели можно передатть любой ReactNode. Элементы можно задать свойством  `items: RenderProps[]`, где

```js
export interface RenderProps {
    id: string;
    render: () => React.ReactNode;
}
```

## Заголовок

Заголовок задается опциональным пропом `header?: React.ReactNode`, туда можно передать любой компонент.
Также после заголовка можно добавить постфикс `postfix?: React.ReactNode`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    postfix={<Hint action='hover' header='Lorem ipsum dolor sit amet' content='Consectetur adipiscing elit' />}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```


##  Кнопки переключения

Кнопки переключения имеют два варианта дизайна `buttonDesign?: 'outline' | 'white`. Дизайн `white` нужен, если карусель расположена на сером фоне.
Когда список элементов карусели дошел до конца, кнопка co стрелкой «Вперед» возвращает элементы к началу списка. Для кнопок есть соответствующие обработчики `onClickPrev` и `onClickNext`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    postfix={<Hint action='hover' header='Lorem ipsum dolor sit amet' content='Consectetur adipiscing elit'/>}
    buttonDesign={'white'}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```

## Состояния карусели

### Fill

Карточки не имеют фиксированной ширины и автоматически подстраиваются под ширину контейнера по заданному количеству шагов.
Задается пропом  `carouselMode`, где для fill нужно передать `mode` и необязательный параметр `itemsVisible`: `{ mode: 'fill'; itemsVisible?: number }`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    carouselMode={{mode: 'fill', itemsVisible: 2}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```

### Fixed

Карточки всегда сохраняют свою ширину, не вместившиеся в контейнер карточки обрезаются.
Задается пропом `carouselMode`, где для fixed нужно передать `mode` и необязательный параметр `itemsWidth`:  `{ mode: 'fixed'; itemWidth?: number }`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    carouselMode={{mode: 'fixed', itemWidth: 400}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```


## Режимы смены контента

### Перелистывание по одному

По умолчанию карусель перелистывает все видимые элементы, но можно включить режим перелистывания по одному элементу карусели пропом `flipByOne`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    flipByOne
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```

### Перетаскивание

Можно включить перелистывание элементов путем перетаскивания пропом  `dragToFlip`

```
<Carousel
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    dragToFlip
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```

## Программное управление слайдером

Для программного управление слайдером есть свойство `controlsRef` имеет тип:

```
React.MutableRefObject<CarouselControlsRef | null>

interface CarouselControlsRef {
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
}
```

Через него есть возможность управлять каруселью извне компонента, например, вызывать пролистывание вперёд или назад, или переходить к определённому слайду.

Методы в `CarouselControlsRef`:

- `next()`: пролистывает карусель на следующий элемент или группу элементов;
- `prev()`: пролистывает карусель на предыдущий элемент или группу элементов;
- `goTo(index: number)`: перемещает карусель к элементу с указанным индексом.

Пример использования:

```tsx
const controlsRef = useRef<CarouselControlsRef>(null);

// Пролистнуть вперёд
controlsRef.current?.next();

// Перейти к элементу с индексом 2
controlsRef.current?.goTo(2);
```


## Установка data-testid

Атрибут `data-testid` можно передать для кнопок, трека и элементов карусели. Передается с помощью пропса `testId: { leftBtn, rightBtn, track, item }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultCarouselTestId: CarouselProps['testId'] = {
    leftBtn: 'carousel_left-button',
    rightBtn: 'carousel_right-button',
    track: 'carousel_track',
    item: (item: RenderProps) => `carousel_item-${item.id}`,
};
```

```
<Carousel
    testId={{leftBtn: 'carousel-left-button', rightBtn: 'carousel-right-button', track: 'carousel-track', item: (item) => `carousel-item-${item.id}`}}
    header={<H5>Lorem ipsum dolor sit amet</H5>}
    postfix={<Hint action='hover' header='Lorem ipsum dolor sit amet' content='Consectetur adipiscing elit' />}
    carouselMode={{mode: 'fill', itemsVisible: 3}}
    items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]} />
```