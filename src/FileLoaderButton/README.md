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


## Использование

Компонент в качестве дочернего элемента принимает контент для кнопки, по которой будет вызвано диалоговое окно для загрузки файлов.

> Компонент является контролируемым. Событие `onChange` - возвращает новые полученные компонентом после взаимодействия с пользователем файлы. Так как компонент является управляемым стоит самостоятельно следить за списком файлов на наличие дублей или иных проблем, компонент лишь отфельтрует передаваемые данные по размеру и типу.

#### Вариант по умолчанию - множественный выбор, любые типы файлов
```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles, f) => {
                setFiles(newFiles);
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
                    <Download /> Загрузить файл
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

## Использование

#### Множественный выбор файлов

```
    {() => {
        const [files, setFiles] = React.useState([]);
        const changeHandler = React.useCallback(
            (e, newFiles, f) => {
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
                    <Download /> Загрузить файл
                </FileLoaderButton>
                {!!files.length && (
                    <Groups>
                        Загружено файлов: {files.length}
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
    {() => {
        return (
            <Groups>
                <FileLoaderButton>
                    <Download /> Прекрепите документ
                </FileLoaderButton>
                <FileLoaderButton disabled>
                    <Download /> Прекрепите документ
                </FileLoaderButton>
                <FileLoaderButton loading>
                    <Download /> Прекрепите документ
                </FileLoaderButton>
                <FileLoaderButton accept='xls,xlsx' design='accent'>
                    Загрузить таблицу .xls
                </FileLoaderButton>
            </Groups>
        );
    }}
```