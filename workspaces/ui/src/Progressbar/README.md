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
| view | "line" \| "circle" \| undefined | "line" | Тип отображения: прямая или окружность |
| size | "s" \| "m" \| "l" \| undefined | "m" |
| color | "accent" \| "moscow100" \| "osaka100" \| "geneva100" \| "oslo120" \| "seattle140" \| "oslo100" \| "miami100" \| "sochi100" \| "paris100" \| "tokyo100" \| "dubai100" \| "nice100" \| undefined | "oslo120" |
| value\* | number | 0 | Значение загрузки |
| loading | boolean \| undefined | false | Отображается анимация на заполненной полосе компонента. Доступно только для view='line' |

## Использование

```
<Progressbar value={34} />
```

## Использование с доченими компонентами

В Progressbar со значением `view` равным `circle`, можно передать контент внутрь компонента

```
<Progressbar view='circle' size='l' value={34}>
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>34%</div>
</Progressbar>
<Progressbar view='circle' size='l' value={34}>
    <Image />
</Progressbar>
```

## Режим отображения

##### Свойство `view`

Progressbar имеет 2 режима отображения `view`: `line` (линейный - по умолчанию) и `circle` (круглый)

```
<Progressbar value={34} />
<Progressbar value={76} view='circle' />
```

## Размеры

##### Свойство `size`

Доступны 3 размера для каждого из дизайнов: `s`, `m` (по умолчанию), `l`

## Дизайн

##### Свойство `design`

Доступны следующие значения свойства `color`: `moscow100`, `osaka100`, `accent`, `geneva100`, `oslo120`, `seattle140`, `oslo100`, `miami100`, `sochi100`, `paris100`, `tokyo100`, `dubai100`, `nice100`.

```
<Progressbar color='moscow100' value={34} />
<Progressbar color='moscow100' view='circle' value={34} />
```

## Режим загрузки

##### Свойство `loading`

Устанавливается с помощью свойства `loading`. Доступно только для `view='line'`

```
<Progressbar loading value={64} />
```
