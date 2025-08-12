# Progressbar

Компонент индикации прогресса информирует пользователя о состоянии текущих процессов в интерфейсе.

Может быть использован для:

-   Отображения статуса загрузки страницы, процесса или конкретного файла в интерфейсе
-   Отображения прогресса пользователя по выполнению задачи. В данном случае рекомендуем рассмотреть применение компонента Stepper, он может лучше подойти для такой задачи.

## Импорт

```
import { Progressbar } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| view | "line" \| "circle" \| undefined |  | Тип отображения: прямая или окружность |
| size | "s" \| "m" \| "l" \| undefined |  |
| color | "accent" \| "moscow100" \| "osaka100" \| "geneva100" \| "oslo120" \| "seattle140" \| "oslo100" \| "miami100" \| "sochi100" \| "paris100" \| "tokyo100" \| "dubai100" \| "nice100" \| undefined |  |
| value| number \| undefined |  | Значение загрузки |
| indeterminate| boolean \| undefined |
| loading | boolean \| undefined |  | Отображается анимация на заполненной полосе компонента. Доступно только для view='line' |

## HTMLAttributes 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| width | number \| undefined |

# Progressbar

Компонент состояния прогресса. Компонент может использоваться в следующих случаях:

-   прогресс заполнения короткой заявки, профиля, анкеты (когда не хочется использовать Stepper)
-   таймер, обратный отсчет времени



```
    <Progressbar value={34} />
```

## Внешний вид

```
    <Groups design='vertical'>
        <Progressbar value={34} />
        <Groups>
            <Progressbar value={76} color='moscow100' view='circle' />
            <Progressbar value={46} color='geneva100' view='circle' />
            <Progressbar value={16} color='accent' view='circle' />
        </Groups>
    </Groups>
```

## Режим отображения

Progressbar имеет 2 режима отображения **view**: **line** (линейный - по умолчанию) и **circle** (круглый)

```
    <Progressbar value={34} />
    <Progressbar value={76} view='circle' />
```

## Размеры

Доступны 3 размера для каждого из дизайнов: **s**, **m** (по умолчанию), **l**

```
    <Groups design='vertical'>
        <Progressbar size='s' value={34} />
        <Progressbar size='m' value={34} />
        <Progressbar size='l' value={34} />
        <Groups>
            <Progressbar view='circle' size='s' value={34} />
            <Progressbar view='circle' size='m' value={34} />
            <Progressbar view='circle' size='l' value={34} />
        </Groups>
    </Groups>
```

## Цвет

Доступны следующие значения свойства **color**: **moscow100**, **osaka100**, **accent**, **geneva100**, **oslo120**, **seattle140**, **oslo100**, **miami100**, **sochi100**, **paris100**, **tokyo100**, **dubai100**, **nice100**.

```
    <Groups design='vertical'>
        <Progressbar color='moscow100' value={34} />
        <Progressbar color='osaka100' value={34} />
        <Progressbar color='accent' value={34} />
        <Progressbar color='geneva100' value={34} />
        <Progressbar color='oslo120' value={34} />
        <Progressbar color='seattle140' value={34} />
        <Progressbar color='oslo100' value={34} />
        <Progressbar color='miami100' value={34} />
        <Progressbar color='sochi100' value={34} />
        <Progressbar color='paris100' value={34} />
        <Progressbar color='tokyo100' value={34} />
        <Progressbar color='dubai100' value={34} />
        <Progressbar color='nice100' value={34} />
        <Groups>
            <Progressbar color='moscow100' view='circle' value={34} />
            <Progressbar color='osaka100' view='circle' value={34} />
            <Progressbar color='accent' view='circle' value={34} />
            <Progressbar color='geneva100' view='circle' value={34} />
            <Progressbar color='oslo120' view='circle' value={34} />
            <Progressbar color='seattle140' view='circle' value={34} />
            <Progressbar color='oslo100' view='circle' value={34} />
            <Progressbar color='miami100' view='circle' value={34} />
            <Progressbar color='sochi100' view='circle' value={34} />
            <Progressbar color='paris100' view='circle' value={34} />
            <Progressbar color='tokyo100' view='circle' value={34} />
            <Progressbar color='dubai100' view='circle' value={34} />
            <Progressbar color='nice100' view='circle' value={34} />
        </Groups>
    </Groups>
```

## Состояние неопределённости

Устанавливается с помощью свойства `indeterminate`

```
    <Groups design='vertical'>
        <Progressbar indeterminate />
        <Groups>
            <Progressbar indeterminate view='circle' size='s' color='moscow100' />
            <Progressbar indeterminate view='circle' size='m' color='geneva100' />
            <Progressbar indeterminate view='circle' size='l' color='accent' />
        </Groups>
    </Groups>
```

## Состояние загрузки

Устанавливается с помощью свойства `loading`. Доступно только для `view='line'`

```
    <Groups design='vertical'>
        <Progressbar loading color='moscow100' value={64} />
        <Progressbar loading color='osaka100' value={32} />
        <Progressbar loading color='accent' value={64} />
        <Progressbar loading color='geneva100' value={32} />
        <Progressbar loading color='oslo120' value={64} />
        <Progressbar loading color='seattle140' value={64} />
        <Progressbar loading color='oslo100' value={32} />
        <Progressbar loading color='miami100' value={16} />
        <Progressbar loading color='sochi100' value={8} />
        <Progressbar loading color='paris100' value={8} />
        <Progressbar loading color='tokyo100' value={8} />
        <Progressbar loading color='dubai100' value={16} />
        <Progressbar loading color='nice100' value={32} />
    </Groups>
```

## Контент

В Progressbar со значением **view** равным **circle**, можно передать контент внутрь компонента

```
    <Progressbar view='circle' size='l' value={34}>
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>34%</div>
    </Progressbar>
    <Progressbar view='circle' size='l' value={34}>
        <ComponentHelpers.Progressbar.Image />
    </Progressbar>
```