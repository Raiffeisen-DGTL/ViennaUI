# FileLoaderButton

Компонент для загрузки файлов с использованием кнопки.

## Импорт

```
import { FileLoaderButton } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| loading | boolean \| undefined | false | Состояние загрузки |
| maxSizeByte | number \| undefined | false | Максимальный размер каждого файла в байтах |
| onChange | ((event: any, files: FCCFile[], errorFiles: FCCFileError[]) => void) \| undefined | false |
| design | "critical" \| "accent" \| "primary" \| "outline" \| "outline-critical" \| "ghost" \| undefined | false | Дизайн |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false | Размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| undefined | false | Размещение в сетке (аналогично `Button`) |
| square | boolean \| undefined | false | Ширина равна высоте, если это возможно (аналогично `Button`) |
| forwardedRef | any | false |
| multiple | boolean \| undefined | true | Поддержка множественного выбора файлов |
| value | string \| undefined | false |
| onClick | ((event: FormEvent) => void) \| undefined | false |
| onFocus | ((event: FormEvent) => void) \| undefined | false |
| onBlur | ((event: FormEvent) => void) \| undefined | false |
| onKeyUp | ((event: FormEvent) => void) \| undefined | false |
| onKeyDown | ((event: FormEvent) => void) \| undefined | false |
| onMouseUp | ((event: FormEvent) => void) \| undefined | false |
| onMouseDown | ((event: FormEvent) => void) \| undefined | false |
| onMouseEnter | ((event: FormEvent) => void) \| undefined | false |
| onMouseOut | ((event: FormEvent) => void) \| undefined | false |
| onMouseLeave | ((event: FormEvent) => void) \| undefined | false |

## Использование

Компонент в качестве дочернего элемента принимает контент для кнопки, по которой будет вызвано диалоговое окно для загрузки файлов.

> Компонент является контролируемым. Событие `onChange` - возвращает новые полученные компонентом после взаимодействия с пользователем файлы. Так как компонент является управляемым стоит самостоятельно следить за списком файлов на наличие дублей или иных проблем, компонент лишь отфельтрует передаваемые данные по размеру и типу.

#### Вариант по умолчанию - множественный выбор, любые типы файлов

```jsx
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
```

## Состояние ошибки
##### Свойство `invalid`

```jsx
<FileLoaderButton invalid onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```

## Неактивное состояние 
##### Свойство `disabled`

```jsx
<FileLoaderButton disabled onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```

## Множественный выбор
##### Свойство `multiple`

Свойство аналогично нативному атрибуту - `true` или `false` в зависимости доступности загрузки нескольких или одного файлов.

```jsx
<FileLoaderButton multiple={false} onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```

## Расширение файла(ов)
##### Свойство `accept`

Свойство аналогично нативному атрибуту - перечесление через `,`.

```jsx
<FileLoaderButton accept='.png, .jpg, .jpeg' onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```

## Максимальный размер файла
##### Свойство `maxSizeByte`

Устанавливает максимально допустимый размер файла в байтах

```jsx
<FileLoaderButton maxSizeByte={1024} onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```

## Состояние загрузки
##### Свойство `loading`

```jsx
<FileLoaderButton loading onChange={changeHandler}>
    <Download /> Загрузить файл
</FileLoaderButton>
```
