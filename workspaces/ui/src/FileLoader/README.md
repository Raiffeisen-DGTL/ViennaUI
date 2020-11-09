# FileLoader

Компонент для загрузки файлов с помошью Drag'n'Drop.

## Импорт

```
import { FileLoader } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | false |
| name | string \| undefined | false |
| ref | string \| undefined | false | Указывает на нативный компонент `input[type=file]` |
| content | ReactNode | false | Первая строка поля или любой контент |
| subContent | ReactNode | false | Вторая строка поля |
| multiple | boolean \| undefined | true | Поддержка множественного выбора файлов |
| maxSizeByte | number \| undefined | false | Максимальный размер каждого файла в байтах |
| invalid | boolean \| undefined | false | Состояние ошибки |
| disabled | boolean \| undefined | false | Неактивное состояние |
| onChange | ((event: any, files: FCCFile[], errorFiles: FCCFileError[]) => void) \| undefined | false | Событие onChange |

## Свойства Файла / File Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| file | { id?: string; url?: string; date: string | Date; progress?: number; disabled?: boolean; closable?: boolean; loading?: boolean } \| undefined | false | Файл |
| altText | string \| undefined | false |
| invalid | boolean \| undefined | false | Состояние ошибки |
| disabled | boolean \| undefined | false | Неактивное состояние |
| closable | boolean \| undefined | false | Возможность закрытия |
| progress | number \| undefined | false | Процент загрузки |
| loading | number \| undefined | false | Состояние загрузки |
| extension | string \| undefined | false | Расширение |
| accept | string \| undefined | false | Перечесление через запятую поддерживаемых форматов и/или MIME типов \*/ |

## Использование

Компонент состоит из родительского контейнера `FileLoader` и контейнеров для файлов `FileLoader.File`.

> Компонент является контролируемым. Событие `onChange` - возвращает новые полученые компонентом после взаимодействия с пользователем файлы. Для отображения списка файлов их надо передать как дочерние компоненты `FileLoader.File` внутрь `FileLoader`. Так как компонент является управляемым стоит самостоятельно следить за списком файлов на наличие дублей или иных проблем, компонент лишь отфельтрует передаваемые данные по размеру и типу.

`ref` следует применять для получения доступа к методу `click`, с целью ручного открытия диалога выбора файлов. Не используйте встроенное значение `value` нативного компонента `input`, по соображениям безопасности вы не можете задать, изменить или удалить входящий в него объект `FileList`, подробнее об этом написано в `MDN`. Так же не стоит использовать это свойство для получения информации о текущих файлах готовых к отправке, пологайтесь на собственный стейт.

`FileLoader.File` генерирует два события `onClose` и `onClick`, а принимает `file` описываемый интерфейсом `FCCFile` расширяющим обычный `File`

Для файлов с `MIME` типом `image/*` будет автоматически сгенерирована иконка с картинкой взятой из поля `url` объета файла

#### Вариант по умолчанию - множественный выбор, любые типы файлов

```jsx
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
```

## Состояние ошибки
##### Свойство `invalid`

Свойство `invalid` - окрашивает текст переданый в `children` (файлов) в красный цвет.

```jsx
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
```

## Неактивное состояние
##### Свойство `disabled`

Свойство `disabled` - блокирует события `onClose` и `onClick`.

```jsx
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
```

## Множественный выбор
##### Свойство `multiple`

Свойство аналогично нативному атрибуту - `true` или `false` в зависимости доступности загрузки нескольких или одного файлов.

```jsx
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
```

## Расширение файла(ов)
##### Свойство `accept`

Свойство аналогично нативному атрибуту - перечесление через `,`.

```jsx
<FormField>
    <FileLoader accept='.png, .jpg, .jpeg' onChange={changeHandler} content={'Перетащите файлы'}>
        {files.map((f, i) => (
            <FileLoader.File key={i} file={f} onClick={() => imageModal(f.url)} />
        ))}
    </FileLoader>
</FormField>
```

## Максимальный размер файла 
##### Свойство `maxSizeByte`

Устанавливает максимально допустимый размер файла в байтах

```jsx
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
```

## Основной контент в поле
##### Свойство `content`

```jsx
const [files, setFiles] = React.useState([]);
const ref = React.useRef(null);
const changeHandler = React.useCallback(
    (e, newFiles) => {
        setFiles([...files, ...newFiles]);
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
return (
    <FormField>
        <FileLoader ref={ref} onChange={changeHandler} content={content}>
            {files.map((f, i) => (
                <FileLoader.File key={i} file={f} />
            ))}
        </FileLoader>
    </FormField>
);
```

## Поле с дополнительным контентом
##### Свойство `subContent`

```jsx
<FormField>
    <FileLoader subContent='JPG, GIF, PNG, PDF или ZIP, до 150kb' onChange={changeHandler}>
        {files.map((f, i) => (
            <FileLoader.File key={i} file={f} onDelete={deleteHandler} />
        ))}
    </FileLoader>
</FormField>
```

## Состояние ошибки в файле
##### Свойство `FileLoader.File`, `invalid`

```jsx
<FormField>
    <FileLoader ref={ref} onChange={changeHandler}>
        {files.map((f, i) => (
            <FileLoader.File key={i} file={f} invalid>
                При загрузке возникла ошибка. Удалите файл и попробуйте снова
            </FileLoader.File>
        ))}
    </FileLoader>
</FormField>
```

## Обработка ошибок в файлах
##### Свойство `FileLoader.File`, `onChange`

```jsx
const [files, setFiles] = React.useState([]);
const changeHandler = React.useCallback((e, newFiles, newErrorFiles) => {
    setFiles((state) => [...state, ...newFiles]);
    newErrorFiles.forEach(({ file, errors }) => {
        const textErrors = [errors.accept && 'Некорректный формат.', errors.maxSizeByte && 'Некорректный размер.']
            .filter(Boolean)
            .join(' ');

        console.error(`Ошибка при загрузке файла ${file.name}. ${textErrors}`);
    });
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
                    <FileLoader.File key={i} file={f} />
                ))}
            </FileLoader>
        </FormField>
    </>
);
```

## Состояние загрузки
##### Свойство `loading`

```jsx
<FormField>
    <FileLoader ref={ref} onChange={changeHandler} content={content} subContent={subContent}>
        {files.map((f, i) => (
            <FileLoader.File key={i} file={f} onDelete={deleteHandler} progress={f.progress} loading={f.loading} />
        ))}
    </FileLoader>
</FormField>
```
