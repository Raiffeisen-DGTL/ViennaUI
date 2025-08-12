# Steps
## Импорт

```
import { Steps } from 'vienna-ui';
``` 



# Steps

Компонент навигации, который отображает прогресс по шагам.
В отличие от Stepper, позволяет вернуться на любой шаг.



```
    <Steps>
        <Steps.Step header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
```

## Внешний вид

Steps это компонент навигации, который помогает пользователям последовательно пройти по шагам.
Можно использовать, когда содержимое формы имеет определенную последовательность процессов, тогда можем разбить ее на несколько шагов,
чтобы упростить задачу и визуально отобразить связь между ними.

```
    <Steps>
        <Steps.Step header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
```

#### Размеры

Компонент имеет два размера: `s` и `m`

```
    <div style={{ width: '100%'}}>
    <Steps size='s' >
        <Steps.Step  header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
    <Steps size='m' >
        <Steps.Step  header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
    </div>
```

#### Состояния

  `progress` - Состояние при выборе шага

  `waiting` - Обычный вид шага, если необходимы условия для активации, можно указать в описании

  `finished` - Символизирует, что шаг выполнен

  `error` - Сообщает об ошибке пользователя или системы

```
        <Steps>
            <Steps.Step status='progress'  header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
            <Steps.Step status='error' header='Title' text='Subtitle' />
            <Steps.Step status='finished' header='Title' text='Subtitle' />
        </Steps>
```

#### Цветовые режимы

Активный шаг доступен в двух режимах `blue` и `black`. По умолчанию режим - `blue`.

```
    <div style={{ width: '100%'}}>
        <Steps mode='blue'>
            <Steps.Step  header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
        </Steps>
        <Steps mode='black'>
            <Steps.Step  header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
        </Steps>
    </div>
```

#### Анимация

Также можно включить анимацию активного шага пропом `enableAnimation`.

```
    <div style={{ width: '100%'}}>
        <Steps mode='blue' enableAnimation>
            <Steps.Step  header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
        </Steps>
        <Steps mode='blue'>
            <Steps.Step  header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
            <Steps.Step status='waiting' header='Title' text='Subtitle' />
        </Steps>
    </div>
```

#### Ориентация

Компоненту steps можно задать вертикальное или горизональное (по умолчанию) положение, передав проп `orientation`.

```
    <Steps orientation='vertical'>
        <Steps.Step header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
```

####  Без дивайдера

```
    <Steps noDivider>
        <Steps.Step header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
```

#### Обрезка длинного текста

Если заголовок слишком длинный, его можно скрыть пропом `truncateHeader`, при этом при наведении будет появляться тултип с полным текстом заголовка.

```
    <Steps>
        <Steps.Step header='VeryVeryVeryVeryVeryVeryVeryVeryVeryLongHeader' text='Subtitle' truncateHeader />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
        <Steps.Step status='waiting' header='Title' text='Subtitle' />
    </Steps>
```

#### Отключение ховера для шага

С помощью свойства `disabled` можно отключить ховер эффект для шага.

```
    <Steps>
        <Steps.Step  header='Title' text='Active hover' />
        <Steps.Step  header='Title' text='Disable hover' disabled />
        <Steps.Step  status='error' header='Title' text='Active hover' />
        <Steps.Step  status='error'  header='Title' text='Disable hover' disabled />
        <Steps.Step  status='waiting' header='Title' text='Active hover' />
        <Steps.Step  status='waiting'  header='Title' text='Disable hover' disabled />
        <Steps.Step  status='finished' header='Title' text='Active hover' />
        <Steps.Step  status='finished'  header='Title' text='Disable hover' disabled />
    </Steps>
```

#### Отображение тултипа для шага

 Для каждого шага можно отобразить тултип, за это отвечают свойства `showTooltip` и `tooltipText`.
 Этот функционал рекомендован, если у вас есть шаг со статусом 'waiting' и нужно пояснить, почему нельзя перейти на этот шаг.

```
    <Steps>
        <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} showTooltip disabled />
        <Steps.Step
             status={'waiting'}
            header={'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle'}
            text={'Subtitle'}
            showTooltip
            disabled
        />
        <Steps.Step
            status={'waiting'}
            header={'Title'}
            text={'Subtitle'}
            tooltipText='Действие недоступно'
            showTooltip
            disabled
        />
        <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} showTooltip disabled />
    </Steps>
```