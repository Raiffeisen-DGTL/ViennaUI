# Timer

Комопнент таймера, обновляющий свое содержимое с заданным интервалом.

## Импорт

```
import { Timer, useInterval } from 'vienna-ui';
```

## Свойства / Props

| Prop           | Type                                                             | Default | Description            |
| -------------- | ---------------------------------------------------------------- | ------- | ---------------------- |
| start          | number \| undefined                                              | 0       | Начальное значения     |
| step           | number \| undefined                                              | 1       |
| stop           | number \| undefined                                              | false   | Конечное значение      |
| delay          | number \| undefined                                              | 1000    | Интервал обновления    |
| countdown      | boolean \| undefined                                             | false   |
| allowNegatives | boolean \| undefined                                             | false   | Отрицательные значения |
| onChange       | ((count: number, id?: string \| undefined) => void) \| undefined | false   |
| onStop         | ((count: number, id?: string \| undefined) => void) \| undefined | false   |

## Использование

`<Timer />`

## Использование как render function

По умолчанию таймер будет отображать внутри себя текущую итерацию в виде текста без всяких обёрток. В дополнение к этому, в содержимое компонента можно передать render-функцию, которая в аргументах будет принимать номер итерации и `id` компонента и возвращать содержимое для компонента.

```
<Timer id='simple-timer'>
    {(tick, id) => (
        <div style={{ color: '#808185' }}>
            <div>Timer id: '{id}'</div>
            <div>Current tick: {tick}</div>
        </div>
    )}
</Timer>
```

## Интервал обновления

##### Свойство `delay`

Интервал обновления можно колнтролировать с помощью параметра `delay`. Интервал укаазыватеся в милисекунщах, значение по умолчанию равно 1000 (1с). Установка `delay` в null остановит таймер.

```
<Groups design='vertical'>
    <Timer delay={500} />
    <Timer />
</Groups>
```

## Начальное и конечное значения

##### Свойство `start`

##### Свойство `stop`

С помощью парасемтров `start` / `stop` можно установить начальное и конечное значения таймера.

`<Timer start={100} stop={110} />`

## Шаг

##### Свойство `step`

Шагом таймера можно управлять с помощью параметра `step`.

`<Timer step={100} />`

## Режим обратного отсчета

##### Свойство `countdown`

С помощью флага `countdown` можно переключить таймер в режим обратного отсчёта.

`<Timer start={50} countdown />`

## Отрицательные значения

##### Свойство `allowNegatives`

По умолчанию таймер обратного отсчета остановится при достижении 0. Разрешить переход в отрицательное множество, можно с помощью флага `allowNegatives`.

`<Timer start={10} countdown allowNegatives />`

## Date and Time

> Так как под капотом используется setInterval, все его ограничения распросраняются на работу компонента. В частности возможный браузерный тротлинг при работе в неактивной вкладке.
>
> Поэтому, для отображения текущего времени, нельзя полагаться на номер итерации таймера. Необходимо на каждой итерации получать текущее время с помощью объекта `Date`

`` <Timer>{() => `Current time: ${new Date().toLocaleTimeString()}`}</Timer> ``

## useInterval

В дополнение к самому компоненту Дизайн-Система экспрортирует хук `useInterval`, являющийся оберткой над нативным `setInterval`.

Так же как и в компоненте, при передаче `null` в `delay` таймер остановится.

```
{() => {
    const [count, update] = React.useState(0);
    const [stoped, stop] = React.useState(false);
    useInterval(
        () => {
            update(count + 1);
        },
        stoped ? null : 1000
    );
    return (
        <Groups>
            <div>{count}</div>
            <Button size='s' onClick={() => stop(!stoped)}>
                Start / Stop timer
            </Button>
        </Groups>
    );
}}
```

## Event handlers

##### Свойство `onChange`

##### Свойство `onStop`

Обратботчики событий таймера иимеют единую сигнатуру, первым параметром передается текущая итерация таймера, вторым – идентификатор элемента.

Обработчик `onChange` вызыватеся в каждую итерацию таймера.

`` <Timer id='on-change' onChange={(tick, id) => console.log(`tick: ${tick}, timer id: ${id}`)} /> ``

Если для таймера задано условие остановки (дефолтный 0 для таймеров обратного отсчёта или явно переданый параметр `stop`), то при остановки таймера будет также вызыван обработчик `onStop`.

`` <Timer id='on-stop' stop={10} onStop={(tick, id) => console.log(`tick: ${tick}, timer id: ${id}`)} /> ``
