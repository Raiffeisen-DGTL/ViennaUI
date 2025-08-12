# FeedbackSection

## Импорт

```
import { FeedbackSection } from 'vienna-ui';
``` 



# FeedbackSection

Раздел обратной сязи



```
    <FeedbackSection />
```

## Использование

Для реализации ассинхронности под капотом есть слушатель события отправки формы. В нем формируется Promise, внутри которого вызывается функция переданная в свойство `onSubmit`.

У функции есть 3 аргумента:

-   `data` - state формы
-   `resolve` - первый аргумент Promise
-   `reject` - второй аргумент Promise

При вызове функции `resolve` форма скрывается и выводится сообщение об успешной отправки формы.
При вызове функции `reject` форма остается в предыдущем состоянии (вывод сообщения об ошибке в компоненте не предусматривается)

```
    {() => {
        const handleSubmit = (data, resolve, reject) => {
            new Promise(res => setTimeout(() => res(''), 2000))
                .then(() => {
                    resolve('');
                })
                .catch(() => {
                    reject();
                });
        };
        return <FeedbackSection onSubmit={handleSubmit} />;
    }}
```

#### Управление состоянием

Для управления состоянием формы есть свойство `state` и имеет тип:

```
{
    useful: boolean | undefined;
    comment: string;
}
```

```
    {() => {
        return (
            <FeedbackSection
                state={{
                    useful: true,
                    comment: 'Все супер!'
                }}
            />
        );
    }}
```

#### Обработчики событий клика на кнопки Да/Нет

Для обработки событий клика по кнопкам можно использовать функции `onYesClick` и `onNoClick`

```
    {() => {
        return (
            <FeedbackSection
                onNoClick={() => {
                    console.log('no clicked');
                }}
                onYesClick={() => {
                    console.log('yes clicked');
                }}
            />
        );
    }}
```

#### Передача пропов textArea

Передать дополнительные свойства для поля комментария можно с помощью объекта `textareaProps?: TextareaPropsWithRef`

```
    {() => {
        return (
            <FeedbackSection
                textareaProps={{
                    maxRows: 2,
                    maxCounter: 30,
                    showCounter: true,
                    placeholder: 'Кастомный плейсходер'
                }}
            />
        );
    }}
```

#### Локализация:

Для редактирования текстов в форме, есть свойство `lang` и имеет тип:

```
{
    title?: string;
    textareaPositivePlaceholder?: string;
    textareaNegativePlaceholder?: string;
    textareaNegativeValidateMessage?: string;
    description?: string | React.ReactNode;
    buttonText?: string;
    successText?: string;
}
```

Тексты по умолчанию:

```
{
    title: 'Была ли статья полезна?',
    textareaPositivePlaceholder: 'А как сделать еще лучше?',
    textareaNegativePlaceholder: 'Чего не хватило?',
    textareaNegativeValidateMessage: 'Укажите комментарий',
    description: 'Эта форма — только для обратной связи. Не оставляйте здесь персональные данные или информацию об учетных записях.',
    buttonText: 'Отправить отзыв',
    successText: 'Спасибо, что делаете нас лучше!',
}
```

```
    {() => {
        return (
            <FeedbackSection
                lang={{
                    title: 'Пример измененного заголовка'
                }}
            />
        );
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для кнопки "Да", "Нет" и кнопки отправки. Передается с помощью пропса `testId?: { btnYes?: string; btnNo?: string; btnSubmit?: string}`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultFeedbackSectionTestId: FeedbackSectionProps['testId'] = {
    btnYes: 'feedback-section_btn-yes',
    btnNo: 'feedback-section_btn-no',
    btnSubmit: 'feedback-section_btn-submit',
};
```

```
    <FeedbackSection
        testId={{
            btnYes: 'btn-yes-test',
            btnNo: 'btn-no-test',
            btnSubmit: 'btn-submit-test'
        }}
    />
```