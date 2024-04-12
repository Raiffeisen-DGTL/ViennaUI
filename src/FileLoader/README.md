# FileLoader

Компонент для загрузки файлов с помошью Drag'n'Drop.

## Импорт

```
import { FileLoader } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined |  |
| name | string \| undefined |  |
| ref | Ref<HTMLInputElement> \| undefined |  | Указывает на нативный компонент `input[type=file]` |
| content | ReactNode |  | Первая строка поля или любой контент |
| subContent | ReactNode |  | Вторая строка поля |
| multiple | boolean \| undefined |  | Поддержка множественного выбора файлов |
| maxSizeByte | number \| undefined |  | Максимальный размер каждого файла в байтах |
| invalid | boolean \| undefined |  | Состояние ошибки |
| disabled | boolean \| undefined |  | Неактивное состояние |
| onChange | ((event: any, files: FCCFile[], errorFiles: FCCFileError[]) => void) \| undefined |  | Событие onChange |
| localization | Localization<CalendarLocalization, undefined> \| undefined |

## Свойства Файла / File Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| file | FCCFile | Файл |
| altText | string \| undefined | |
| invalid | boolean \| undefined |  | Состояние ошибки |
| disabled | boolean \| undefined |  | Неактивное состояние |
| closable | boolean \| undefined |  | Возможность закрытия |
| progress | number \| undefined |  | Процент загрузки |
| loading | number \| undefined |  | Состояние загрузки |
| extension | string \| undefined |  | Расширение |
| accept | string \| undefined |  | Перечесление через запятую поддерживаемых форматов и/или MIME типов \*/ |
| onClick | ((file: FCCFile) => void) \| undefined |
| onDelete | ((file: FCCFile) => void) \| undefined |

## Использование

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
                    <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                ))}
            </FileLoader>
        );
    }}
```

Компонент является полностью `управляемым`.

Событие `onChange` - возвращает новые полученые компонентом после взаимодействия с пользователем файлы. Для отображения списка файлов их надо передать как дочерние компоненты `FileLoader.File` внутрь `FileLoader`.

`ref` - указывает на нативный компонент `input[type=file]` - его следует применять для получения доступа к методу `click`, с целью ручного открытия диалога выбора файлов. Не используйте встроенное значение `value` нативного компонента `input`, по соображениям безопасности вы не можете задать, изменить или удалить входящий в него объект `FileList`, подробнее об этом написано в `MDN`. Так же не стоит использовать это свойство для получения информации о текущих файлах готовых к отправке, пологайтесь на собственный стейт.

Свойства `multiple`, `disabled`, `accept` - аналогичны нативному `input`, `maxSizeByte` - устанавливает допустимый размер файла в байтах

`FileLoader.File` - генерирует два события `onClose` и `onClick`, а принимает `file` описываемый интерфейсом `FCCFile` расширяющим обычный `File`

-   `onClose` - генерируется по щелчку на иконку крестика или по нажатию `Enter`, когда она в фокусе, или по нажатию `Backspace/Delete` когда в фокусе имя файл
-   `onClick` - генерируется по щелчку на имя файла или по нажатию на `Enter`, когда оно в фокусе

-   Свойства `progress` и `loading` служат для передачи процента загрузки и отображения полосы загрузки соответственно
-   Свойство `disabled` - блокирует события `onClose` и `onClick`;
-   Свойство `closable` - блокирует отображение иконки крестика и событие `onClose`;
-   Свойство `children` или дочерние элементы - замещают вывод даты и размера файла, используются для информирования о состоянии;
-   Свойство `invalid` - окрашивает текст переданый в `children` в красный цвет;

Так как компонент является управляемым стоит самостоятельно следить за списком файлов на наличие дублей или иных проблем, компонент лишь отфильтрует передаваемые данные по размеру и типу.

Для файлов с `MIME` типом `image/*` будет автоматически сгенерирована иконка с картинкой взятой из поля `url` объета файла

Возможные варианты работы указаны ниже

#### Вариант по умолчанию - множественный выбор, любые типы файлов

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
                    <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                ))}
            </FileLoader>
        );
    }}
```

#### Состояние invalid

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader invalid onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
                <FormField.Message color='critical' align='center'>
                    Пожалуйста, загрузите файл. Поле не может быть пустым.
                </FormField.Message>
            </FormField>
        );
    }}
```

#### Состояние disabled

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader disabled onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с ограничением на один файл

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader multiple={false} onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с выбором допустимого типа файлов и обработчик событий клика по имени файла

```
    {() => {
        const imageModal = (url) => {
            const [open, close] = useModal(
                <Modal.CustomLayout>
                    <div
                        style={{
                            width: '320px',
                            height: '240px',
                            background: `url(${url}) center`,
                            margin: '24px auto',
                            backgroundSize: 'cover',
                        }}
                    />
                </Modal.CustomLayout>
            );
            open();
        };
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader accept='.png, .jpg, .jpeg' onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onClick={() => imageModal(f.url)} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с ограничением по размеру файлов

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader
                    maxSizeByte={1024 * 1024 * 2}
                    onChange={changeHandler}
                    content={'Перетащите файлы'}
                    subContent={'< 2Мб'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с кастомным содержанием поля

###### Вариант со ссылкой

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const ref = React.useRef(null);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
        const content = (
            <>
                Перетащите файлы сюда или{'\u00A0'}
                <Link onClick={() => ref.current.click()} design='accent'>
                    загрузите документы
                </Link>
            </>
        );
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        return (
            <FormField>
                <FileLoader ref={ref} onChange={changeHandler} content={content} subContent={subContent}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

###### Вариант с кнопкой

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const ref = React.useRef(null);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
        const content = (
            <>
                Перетащите или{'\u00A0'}
                <Button onClick={() => ref.current.click()} design='outline'>
                    загрузите документы
                </Button>
            </>
        );
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        return (
            <FormField>
                <FileLoader ref={ref} onChange={changeHandler} content={content} subContent={subContent}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с отображением ошибок в файлах

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const ref = React.useRef(null);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
        const content = (
            <>
                Перетащите или{'\u00A0'}
                <Button onClick={() => ref.current.click()} design='outline'>
                    загрузите документы
                </Button>
            </>
        );
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        return (
            <FormField>
                <FileLoader ref={ref} onChange={changeHandler} content={content} subContent={subContent}>
                    {files.map((f, i) => (
                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} invalid>
                            При загрузке возникла ошибка. Удалите файл и попробуйте снова
                        </FileLoader.File>
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с обработкой ошибок в файлах

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback((e, newFiles, newErrorFiles) => {
            setFiles((state) => [...state, ...newFiles]);
            newErrorFiles.forEach(({ file, errors }) => {
                const textErrors = [
                    errors.accept && 'Некорректный формат.',
                    errors.maxSizeByte && 'Некорректный размер.',
                ]
                    .filter(Boolean)
                    .join(' ');
                Notifier.error({
                    title: `Ошибка при загрузке файла`,
                    message: `Файл ${file.name}. ${textErrors}`,
                });
            });
        }, []);
        const deleteHandler = React.useCallback((file) => {
            setFiles((state) => state.filter((f) => f !== file));
        }, []);
        return (
            <>
                <Notifications service={Notifier} />
                <FormField>
                    <FileLoader
                        onChange={changeHandler}
                        content='Перетащите файлы'
                        accept='.png, .jpg, .jpeg'
                        maxSizeByte={1024}
                        subContent='PNG, JPG или JPEG, до 1kb'>
                        {files.map((f, i) => (
                            <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                        ))}
                    </FileLoader>
                </FormField>
            </>
        );
    }}
```

#### Вариант с отображением состояния загрузки

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const ref = React.useRef(null);
        const interval = React.useRef(null);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
        const content = (
            <>
                Перетащите файлы сюда или{'\u00A0'}
                <Link onClick={() => ref.current.click()} design='accent'>
                    загрузите документы
                </Link>
            </>
        );
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        React.useEffect(() => {
            if (interval.current) {
                clearInterval(interval.current);
            }
            interval.current = setInterval(() => {
                if (files.length) {
                    for (file of files) {
                        if (file.progress < 100) {
                            file.loading = true;
                            file.progress += 1;
                            setFiles([...files]);
                        } else {
                            file.loading = false;
                            setFiles([...files]);
                        }
                    }
                    if (files.every((file) => file.progress === 100)) {
                        clearInterval(interval.current);
                        setFiles([...files]);
                    }
                }
            }, 200);
        }, [files.length]);
        return (
            <FormField>
                <FileLoader ref={ref} onChange={changeHandler} content={content} subContent={subContent}>
                    {files.map((f, i) => (
                        <FileLoader.File
                            key={i}
                            file={f}
                            onDelete={deleteHandler}
                            progress={f.progress}
                            loading={f.loading}
                        />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с заранее переданными файлами (например с сервера)

```
    {() => {
        if (typeof window === 'undefined') {
            return null;
        }
        const base64ToArrayBuffer = (base64) => {
            const binary_string = atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i in bytes) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        };
        const buffer = base64ToArrayBuffer(
            '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'
        );
        const array = new Uint8Array(buffer);
        const file = new File([array], 'file 3.png', { type: 'image/png' });
        const [files, setFiles] = React.useState([
            { url: '1', date: new Date().toISOString(), size: 2048, name: 'file 1.doc' },
            { url: '2', date: new Date().toISOString(), size: 500, name: 'file 2.zip' },
            {
                url: URL.createObjectURL(file),
                date: new Date().toISOString(),
                size: file.size,
                name: file.name,
                type: 'image/png',
            },
        ]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File key={f.url} file={f} onDelete={deleteHandler} />
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Вариант с управлением подписью через children в заранее переданных файлах

```
    {() => {
        if (typeof window === 'undefined') {
            return null;
        }
        const base64ToArrayBuffer = (base64) => {
            const binary_string = atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i in bytes) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        };
        const buffer = base64ToArrayBuffer(
            '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'
        );
        const array = new Uint8Array(buffer);
        const file = new File([array], 'file 3.png', { type: 'image/png' });
        const [files, setFiles] = React.useState([
            { url: '1', date: new Date().toISOString(), size: 2048, name: 'file 1.doc' },
            {
                url: '2',
                date: new Date().toISOString(),
                size: 500,
                name: 'file 2.zip',
                description: 'будет видно, если передано в children',
            },
            {
                url: URL.createObjectURL(file),
                date: new Date().toISOString(),
                name: 'file.zip',
                type: 'image/png',
            },
        ]);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
            <FormField>
                <FileLoader onChange={changeHandler} content={'Перетащите файлы'}>
                    {files.map((f, i) => (
                        <FileLoader.File
                            key={f.url}
                            file={f}
                            onDelete={deleteHandler}
                            altText='описание для файлов не имеющих date или size'>
                            {f.description}
                        </FileLoader.File>
                    ))}
                </FileLoader>
            </FormField>
        );
    }}
```

#### Полезная информация

Для того что бы нарисовать картинку якобы пришедшую с сервера использовалась конструкция преобразования `base64` в `массив байт` и создание файла через конструктор `File`

```javascript
const base64ToArrayBuffer = (base64) => {
    const binary_string = atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i in bytes) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};
const buffer = base64ToArrayBuffer(
    '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'
);
const array = new Uint8Array(buffer);
const file = new File([array], 'file 3.png', { type: 'image/png' });
```

## Плашка File

```
    {() => {
        return (
            <Groups design='vertical'>
                <FileLoader.File
                    file={{ url: '1', date: new Date().toISOString(), size: 2048, name: 'file 1.doc' }}
                    closable={false}
                />
                <FileLoader.File
                    file={{ url: '1', date: new Date(), size: 2048, name: 'file 1.doc' }}
                    closable={false}
                />
                <FileLoader.File
                    file={{ url: '1', size: 2048, name: 'file 1.doc' }}
                    altText={'Файл загружен'}
                    closable={false}
                />
                <FileLoader.File
                    file={{ url: '1', size: 2048, name: 'file 1' }}
                    altText={'Файл загружен'}
                    closable={false}
                    extension={'pdf'}
                />
            </Groups>
        );
    }}
```

## FileLoader в модальном окне

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const [show, setShow] = React.useState(false);
        const ref = React.useRef(null);
        const changeHandler = React.useCallback(
            (e, newFiles) => {
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
        const content = (
            <>
                Перетащите файлы сюда или{'\u00A0'}
                <Link onClick={() => ref.current.click()} design='accent'>
                    загрузите документы
                </Link>
            </>
        );
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        return (
            <Groups design='vertical'>
                <Button onClick={() => setShow(true)}>Open</Button>
                <Modal isOpen={show} onClose={() => setShow(false)}>
                    <Modal.Layout>
                        <Modal.Head>
                            <Modal.Title>Загрузите файлы</Modal.Title>
                        </Modal.Head>
                        <Modal.Body>
                            <FormField>
                                <FileLoader
                                    ref={ref}
                                    onChange={changeHandler}
                                    content={content}
                                    subContent={subContent}>
                                    {files.map((f, i) => (
                                        <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
                                    ))}
                                </FileLoader>
                            </FormField>
                        </Modal.Body>
                    </Modal.Layout>
                </Modal>
            </Groups>
        );
    }}
```