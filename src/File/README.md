# File

## Импорт

```
import { File } from 'vienna-ui';
``` 



# File

Компонент для отображения информации по файлу



```
    {() => {
        return (
            <File
                file={{ url: '1', size: 2048, name: 'file 1' }}
                altText={'Файл загружен'}
                closable={false}
                extension={'pdf'}
            />
        );
    }}
```

## Использование

#### События onDelete и onClick

Компонент принимает `file` описываемый интерфейсом `FCCFile` расширяющим обычный `File`.
- `onDelete` - генерируется по щелчку на иконку крестика или по нажатию `Enter`, когда она в фокусе, или по нажатию `Backspace/Delete` когда в фокусе имя файл
- `onClick` - генерируется по щелчку на имя файла или по нажатию на `Enter`, когда оно в фокусе.

```
export interface FCCFile extends Partial<File> {
    id?: string;
    url?: string;
    date?: string | Date;
    progress?: number;
    disabled?: boolean;
    closable?: boolean;
    loading?: boolean;
}
```

```
    {() => {
        const [files, setFiles] = React.useState([
            {
                url: '1',
                date: new Date('01.01.2023').toISOString(),
                size: 2048,
                name: 'file 1.jpeg',
            },
            {
                url: '2',
                date: new Date('01.01.2023').toISOString(),
                size: 500,
                name: 'file 2.zip',
            },
        ]);
        const deleteHandler = (file) => {
            setFiles(files.filter((f) => f !== file));
        };
        const handleClick = (file) => {
            alert(`File ${file.name} clicked!`);
        }
        return (
            <Groups>
                {files.map((f) => (
                    <File
                        key={f.url}
                        file={f}
                        onDelete={deleteHandler}
                        onClick={handleClick}
                    />
                ))}
            </Groups>
        );
    }}
```

#### Отображение полосы загрузки

Свойства `progress` и `loading` служат для передачи процента загрузки и отображения полосы загрузки соответственно.

```
    <File
        file={{
            url: '10',
            date: new Date().toISOString(),
            size: 2048,
            name: 'file 12.doc',
        }}
        progress={10}
        closable={false}
        loading
    />
```

#### Disabled состояние

Свойство `disabled` - блокирует события `onDelete` и `onClick`;

```
    <File
        file={{ url: '1', date: new Date(), size: 2048, name: 'file 1.doc' }}
        disabled
    />
```

#### Возможность удаления файла

Свойство `closable` со значением true включает иконку крестика.

```
    <File
        file={{ url: '1', date: new Date(), size: 2048, name: 'file 1.doc' }}
        closable
    />
```

#### Добавление анимации

Свойство `animate` - добавляет анимацию при появлении/сокрытии компонента (по умолчанию, `true`).

```
{() => {
    const [item, setItem] = React.useState({
        file: {
            id: new Date().getMilliseconds().toString(),
            name: 'Анимированный.jpeg',
        },
        animation: true,
    });
    const rerender = () => {
        setItem({
            file: {
                id: new Date().getMilliseconds().toString(),
                name: 'Анимированный.jpeg',
            },
            animation: true,
        });
    };
    const handleDelete = () => {
        setItem(null);
    };
    return (
        <Groups design='vertical'>
            {item !== null && <File key={item.file.id} {...item} onDelete={handleDelete} />}
            <Button onClick={rerender}>{item === null ? 'Render' : 'Rerender'}</Button>
        </Groups>
    );
}
}
```

#### Дочерние элементы

Свойство `children` или дочерние элементы - замещают вывод даты и размера файла, используются для информирования о состоянии.

```
    <File
        file={{ url: '1', size: 2048, name: 'file 1.doc' }}
            closable={false}
            description={'Описание файла'}
            >Информация</File>
```

#### Описание файла

Свойство `description` - описание файла.

```
    <File
        file={{
            url: '1',
            date: new Date('01.01.2023').toISOString(),
            size: 2048,
            name: 'file 1.jpeg',
            }}
        description={'Неправильный тип файла'}
        closable={false}
        animate={false}
        extension={'pdf'}
        invalid
    />
```

#### Валидация

Свойство `invalid` - окрашивает текст переданый в `children` или в `description` в красный цвет.

```
    <File
        file={{
            url: '1',
            size: 2048,
            name: 'file 1.jpeg',
        }}
        closable={false}
        altText={'Файл не поддерживается'}
        invalid
    >Неправильный тип файла</File>
```

#### Добавление ссылки

Свойство `hasNameLink` - добавляет ссылку, которая указана в свойстве `file.url`.

```
    <File
        file={{
            url: 'https://ds.raiffeisen.ru/components/file',
            size: 2048,
            name: 'file 1.jpeg',
        }}
        hasNameLink
    >Информация</File>
```

#### Возможность скачивания файла по ссылке

Свойство `download` - добавляет возможность при клике на название скачать файл по имеющейся ссылке c названием, указанным в download

```
    <File
        file={{ url: 'https://ds.raiffeisen.ru/components/file', date: new Date(), size: 2048, name: 'file 1.doc' }}
        download='https://ds.raiffeisen.ru/components/file'
    />
```


Для файлов с `MIME` типом `image/*` будет автоматически сгенерирована иконка с картинкой взятой из поля `url` объета файла.

```
    {() => {
        return (
            <Groups design="vertical">
                <File
                    file={{
                      url: '1',
                      date: new Date().toISOString(),
                      size: 2048,
                      name: 'file 1.doc',
                    }}
                    closable={false}
                />
                <File
                    file={{ url: '1', date: new Date(), size: 2048, name: 'file 1.doc' }}
                    closable={false}
                />
                <File
                    file={{
                        url: '1',
                        date: new Date('01.01.2023').toISOString(),
                        size: 2048,
                        name: 'file 1.jpeg',
                    }}
                    description={'Неправильный тип файла'}
                    closable={false}
                    animate={false}
                    extension={'pdf'}
                    invalid
                />
                <File
                    file={{
                        url: '1',
                        size: 2048,
                        name: 'file 1.jpeg',
                    }}
                    closable={false}
                    altText={'Файл не поддерживается'}
                    invalid
                >Неправильный тип файла</File>
                <File
                    file={{
                        url: '1',
                        date: new Date('01.01.2023').toISOString(),
                        size: 2048,
                        name: 'file 1.jpeg',
                    }}
                    description={'Неправильный тип файла'}
                    closable={false}
                    animate={false}
                    extension={'pdf'}
                    invalid
                    hideAltTextOnError
                />
            </Groups>
        );
    }}
```

## Использование вместе с FileLoader

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (newFiles) => {
                setFiles([...files, ...newFiles]);
            },
            [files]
        );
        const deleteHandler = React.useCallback(
            (file) => {
                setFiles(files.filter((f) => f !== file));
            },
            [files]
        );
        return (
            <FileLoader onChange={changeHandler} content={'Перетащите файлы'}>
                {files.map((f, i) => (
                    <File key={i} file={f} onDelete={deleteHandler} />
                ))}
            </FileLoader>
        );
    }}
```

## Пример асинхронной валидации при удалении
Свойство `confirmDeleteHandler` - валидация удаления принимает `FCCFile`, возвращает `boolean`, может быть асинхронной.
Cвойство `hideAltTextOnError` - скрывает информацию о файле в случае ошибки.

```
    {() => {
        const [sending, setSending] = React.useState(false);
        const confirmDeleteHandler = React.useCallback(() => {
            setSending(true);
            return new Promise((res, rej) => setTimeout(() => {
                res('');
            }, 2000))
                .then(() => {
                    return true;
                })
                .catch(() => {
                    return false;
                })
                .finally(() => {
                    setSending(false);
                });
        }, []);
        return (
            <Groups design="vertical">
                <File
                  file={{
                    url: '1',
                    date: new Date().toISOString(),
                    size: 2048,
                    name: 'file 1.doc',
                  }}
                  confirmDelete={confirmDeleteHandler}
                  disabled={sending}
                  hideAltTextOnError
                  onDelete={() => {}}
                />
            </Groups>
        );
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки, названия файла и иконки закрытия. Передается с помощью пропса `testId?: {
    icon?: string;
    name?: string;
    cross?: string;
}`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultFileTestId: FileProps['testId'] = {
    icon: 'file_icon',
    name: 'file_name',
    cross: 'file_cross',
};
```

```
{() => {
    return (
        <File
            file={{ url: '1', size: 2048, name: 'file 1' }}
            altText={'Файл загружен'}
            closable={false}
            extension={'pdf'}
            testId={{icon: 'icon-test', name: 'name-test', cross: 'cross-test'}}
        />
    );
}}
```