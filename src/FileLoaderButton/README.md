# FileLoaderButton

Компонент для загрузки файлов с использованием кнопки.

## Импорт

```
import { FileLoaderButton } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| loading | boolean \| undefined |  | Состояние загрузки |
| maxSizeByte | number \| undefined |  | Максимальный размер каждого файла в байтах |
| onChange | ((event: any, files: FCCFile[], errorFiles: FCCFileError[]) => void) \| undefined |  |
| design | "critical" \| "accent" \| "primary" \| "outline" \| "outline-critical" \| "ghost" \| undefined |  | Дизайн |
| size | ResponsiveProp<"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl", Breakpoints> \| undefined |  | Размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \|  |  | Размещение в сетке (аналогично `Button`) |
| square | boolean \| undefined |  | Ширина равна высоте, если это возможно (аналогично `Button`) |
| accept | string \| undefined |
| multiple | boolean \| undefined |  | Поддержка множественного выбора файлов |
| maxFiles | number \| undefined |  |


# FileLoaderButton

Компонент для загрузки файлов.
По умолчанию можно выбрать только один файл.



## Использование

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            ({ value: newFiles }) => {
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
            <Groups>
                <FileLoaderButton accept='xls,xlsx' onChange={changeHandler}>
                    <DownloadIcon /> Загрузить файл
                </FileLoaderButton>
                {files[0] && (
                    <Groups>
                        {files[0].name}
                        <Link design='accent' onClick={() => setFiles([])}>
                            Отменить
                        </Link>
                    </Groups>
                )}
            </Groups>
        );
    }}
```


#### Множественный выбор файлов

С помощью свойства `multiple` можно задать множественный выбор файлов.

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            ({ value: newFiles }) => {
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
            <Groups>
                <FileLoaderButton multiple onChange={changeHandler}>
                    <DownloadIcon /> Загрузить файл
                </FileLoaderButton>
                {!!files.length && (
                    <Groups>
                        <div>Загружено файлов: {files.length}</div>
                        <Link design='accent' onClick={() => setFiles([])}>
                            Отменить
                        </Link>
                    </Groups>
                )}
            </Groups>
        );
    }}
```

#### Варианты вида

```
    <FileLoaderButton>
        <DownloadIcon /> Прикрепите документ
    </FileLoaderButton>
```

###### Состояние disabled

```
    <FileLoaderButton disabled>
        <DownloadIcon /> Прикрепите документ
    </FileLoaderButton>
```

###### Состояние загрузки

```
    <FileLoaderButton loading>
        <DownloadIcon /> Прикрепите документ
    </FileLoaderButton>
```

###### Поддерживаемые форматы файла

Свойство `accept` позволяет указать, файлы какого типа необходимо прикрепить.

```
    {() => {
        return (
            <Groups>
                <FileLoaderButton accept='xls,xlsx'>
                    <DownloadIcon /> Прикрепите документ
                </FileLoaderButton>
                <FileLoaderButton accept=".jpg, .jpeg, .png">
                    <DownloadIcon /> Прикрепите документ
                </FileLoaderButton>
                <FileLoaderButton accept='doc,.docx'>
                    <DownloadIcon /> Прикрепите документ
                </FileLoaderButton>
            </Groups>
        );
    }}
```

#### Вариант с обработкой ошибок в файлах

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(({ value: newFiles, options: { errorFiles: newErrorFiles } }) => {
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
        const deleteHandler = React.useCallback(
            (file) => {
                setFiles(files.filter((f) => f !== file));
            },
            [files]
        );
        return (
            <>
                <Notifications service={Notifier} />
                <Groups>
                <FileLoaderButton maxFiles={2} onChange={changeHandler} maxSizeByte={1024}>
                    <DownloadIcon /> Перетащите файлы
                </FileLoaderButton>
            </Groups>
            </>
        );
    }}
```

#### Использование свойств maxFiles и maxSizeByte

Свойство `maxFiles` ограничивает количество загружаемых файлов, а свойство `maxSizeByte` - ограничивает максимальный размер каждого файла в байтах.

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            ({ value: newFiles }) => {
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
            <Groups>
                <FileLoaderButton multiple onChange={changeHandler} maxFiles={2}>
                    <DownloadIcon /> Загрузить не больше 2 файлов
                </FileLoaderButton>
                {!!files.length && (
                    <Groups>
                        <div>Загружено файлов: {files.length}</div>
                        <Link design='accent' onClick={() => setFiles([])}>
                            Отменить
                        </Link>
                    </Groups>
                )}
                 <FileLoaderButton maxSizeByte={1024}>
                    <DownloadIcon /> Загрузите документ
                </FileLoaderButton>
            </Groups>
        );
    }}
```