# EmptyState

Компонент "Пустое состояние". Компонент предназначен для использования в таких случаях, когда: результаты поиска отсутствуют, нет контента, ошибка загрузки, состояние загрузки. Компонент также можно использовать для отображения состояния успешного выполнения действий, если не предусмотрен уникальный success page.

## Импорт

```
import { EmptyState } from 'vienna-ui';
```

## Свойства / Props

| Prop    | Type                 | Default | Description                                        |
| ------- | -------------------- | ------- | -------------------------------------------------- |
| loading | boolean \| undefined |    | Состояние загрузки. true, чтобы отобразить spinner |
| spinnerProps | SpinnerProps<Breakpoints>  \| undefined |
| direction | EmptyStateDirection \| undefined |    |  |
| alignment | EmptyStateAlignment \| undefined |    |  |
| children | ReactNode \| undefined |



# EmptyState

Компонент "Пустое состояние".

Используйте компонент пустого состояния интерфейса в таких случаях, когда: результаты поиска отсутствуют, нет контента, ошибка загрузки, состояние загрузки. Компонент также можно использовать для отображения состояния успешного выполнения действий, если не предусмотрен уникальный success page.



```
    <EmptyState>
        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Импорт
            </Button>
            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
```

## Внешний вид

Содержимое компонента передается как дочерние элементы, которые определены `EmptyState.Image`, `EmptyState.Title`, `EmptyState.Description`, `EmptyState.Actions` - изображение, заголовок, контент сообщения, действия для пользователя соответственно

```
    <EmptyState>
        <EmptyState.Image src='https://cdn-rf.raiffeisen.ru/ds/img/empty-state/mock-image.png' />
        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Импорт
            </Button>
            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
```

## Позиционирование компонента
Компонент заполняет все пространство в родительском контейнере и по умолчанию позиционируется по центру (вертикально и горизонтально)

```
    <EmptyState>
        <EmptyState.Title>Оформите карту</EmptyState.Title>
        <EmptyState.Description>
            Чтобы получить выгодный кэшбэк, больше не нужно расплачиваться за бензин одной картой, а за авиабилеты —
            другой. С картой #всёсразу кэшбэк начисляется за любые покупки.
        </EmptyState.Description>
        <EmptyState.Actions direction='row'>
            <Button design='accent' size='l'>
                Оформить
            </Button>
            <Button design='ghost' size='l'>
                Позвонить
            </Button>
        </EmptyState.Actions>
    </EmptyState>
```

## Добавление иконки
Иконку нужно добавлять внутрь `IconContainer`

```
    <EmptyState>
        <IconContainer type='squircle' color='seattle05' size='xxl'>
            <DocumentIcon />
        </IconContainer>
        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Импорт
            </Button>
            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
```

## Отображение загрузки
Для отображения состояния загрузки нужно передать параметр `loading`

```
    {() => {
        const [isLoading, setLoading] = React.useState(true);
        const onToggle = () => setLoading((prevState) => !prevState);
        return (
            <EmptyState loading={isLoading}>
                <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
                <EmptyState.Description>
                    Чтобы список появился, импортируйте файл Excel или создайте платеж
                </EmptyState.Description>
                <EmptyState.Actions direction='row'>
                    <Button design='primary' size='l'>
                        Импорт
                    </Button>
                    <Button design='ghost' size='l' onClick={onToggle}>
                        {!isLoading ? 'Начать загрузку' : 'Прекратить загрузку'}
                    </Button>
                </EmptyState.Actions>
            </EmptyState>
        );
    }}
```

## Выравнивание по левому краю

```
    {() => {
        const [alignment, setAlignment] = React.useState('left');
        const [isImageShown, setImageShown] = React.useState(true);
        const onToggleAlignment = () => {
            setAlignment((prevState) => (prevState === 'center' ? 'left' : 'center'));
        };
        const onToggleImage = () => {
            setImageShown((prevState) => !prevState);
        };
        return (
            <EmptyState alignment={alignment}>
                {isImageShown && <EmptyState.Image src='https://cdn-rf.raiffeisen.ru/ds/img/empty-state/mock-image.png' />}
                <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
                <EmptyState.Description>
                    Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
                </EmptyState.Description>
                <EmptyState.Actions>
                    <Button design='primary' size='l' onClick={onToggleAlignment}>
                        Выровнять по {alignment === 'center' ? 'левому краю' : 'центру'}
                    </Button>
                    <Button design='ghost' size='l' onClick={onToggleImage}>
                        {isImageShown ? 'Спрятать' : 'Показать'} изображение
                    </Button>
                </EmptyState.Actions>
            </EmptyState>
        );
    }}
```

## Изменение стилей заголовка

```
    <EmptyState>
        <EmptyState.Title weight='normal' size='l'>
            Рублевых платежей нет
        </EmptyState.Title>
        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
    </EmptyState>
```

## Изменение направления кнопок

```
    {() => {
        const [direction, setDirection] = React.useState('row');
        const changeDirection = (value) => () => setDirection(value);
        return (
            <EmptyState>
                <EmptyState.Title>Ничего не найдено</EmptyState.Title>
                <EmptyState.Description>
                    Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
                </EmptyState.Description>
                <EmptyState.Actions direction={direction}>
                    <Button design='primary' size='l' onClick={changeDirection('column')}>
                        Вертикально
                    </Button>
                    <Button design='ghost' size='l' onClick={changeDirection('row')}>
                        Горизонтально
                    </Button>
                </EmptyState.Actions>
            </EmptyState>
        );
    }}
```

## Горизонтальное выравнивание

Для свойства `direction` можно указать занчение 'horizontal' для горизонтального выравнивания.

```
    <EmptyState direction='horizontal'>
        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>
        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Импорт
            </Button>
            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
```