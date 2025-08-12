# Result
## Импорт

```
import { Result } from 'vienna-ui';
``` 


# Result

Компонент, ограничивающий доступ к странице продукта, сервиса в целом.
Принимает в качестве свойств:
- до трех кнопок `actions`;
- `imageSrc` - содержит путь к изображению;
- `errorText` - опциональное текстовое свойство;
- `title` - текстовое свойство;
- `description` - опциональное текстовое свойство;




```
    {() => {
        const actionButtons = (
            <>
                <Button design='accent' size='xl'>
                    Первая кнопка
                </Button>
                <Button design='ghost' size='xl'>
                    Вторая кнопка
                </Button>
                <Button design='ghost' size='xl'>
                    Третья кнопка
                </Button>
            </>
        );
        const title = 'Заголовок в две строки максимум, иначе вы нарушаете правила';
        const description = 'Подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки';
        return (
             <Result
                imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
                actions={actionButtons}
                errorText='Код ошибки'
                title={title}
                description={description}
            />
        );
    }}
```

```
    {() => {
        const actionButtons = (
            <>
                <Button design='accent' size='xl'>
                    Вернуться назад
                </Button>
                <Button design='ghost' size='xl'>
                    На главную
                </Button>
            </>
        );
        const title = 'Страницы по этой ссылке нет';
        const description = 'Возможно, ее не существует или в адресе есть ошибка';
        return (
            <Result
                imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_404.png'
                actions={actionButtons}
                errorText='Ошибка 404'
                title={title}
                description={description}
            />
        );
    }}
```