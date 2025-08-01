##### Alert

В компонентах Alert, если их встретишь в коде, замени свойство `compactBelow` на `compact`.

###### Пример:

Было:

```
    return (
        <Body>
            <Alert title="Успешно!" design="success">
                Информация об успешном результате действия
            </Alert>
            <Alert title="Успешно!" design="success" compactBelow>
                Информация об успешном результате действия
            </Alert>
            <Alert
                title="Успешно!"
                design="success"
                compactBelow={{ base: false, s: true, m: false }}
            >
                Я обычный текст успешно адаптированный
            </Alert>
        </Body>
    )
```

Стало:

```
    return (
        <Body>
            <Alert title="Успешно!" design="success">
                Информация об успешном результате действия
            </Alert>
            <Alert title="Успешно!" design="success" compact>
                Информация об успешном результате действия
            </Alert>
            <Alert
                title="Успешно!"
                design="success"
                compact={{ base: false, s: true, m: false }}
            >
                Я обычный текст успешно адаптированный
            </Alert>
        </Body>
    )
```

##### Notification

В компонентах Notifications, а так же в опциях методов классов Notifier и NotificationService, если их встретишь в коде, замени свойство `compactBelow` на `compact`.

###### Пример:

Было:

```
    const topLeft = new NotificationService()
    return (
        <Body>
            <Groups design="vertical">
                <Notifications valign="top" align="left" service={topLeft} />
                <Button
                    onClick={() =>
                        topLeft.plain({ message: 'Top left', compactBelow: true })
                    }
                >
                    Top left
                </Button>
                <Button
                    onClick={() =>
                        Notifier.plain({ message: 'Top center', compactBelow: true })
                    }
                >
                    Top center
                </Button>
        </Body>
    )
```

Стало:

```
    const topLeft = new NotificationService()
    return (
        <Body>
            <Groups design="vertical">
                <Notifications valign="top" align="left" service={topLeft} />
                <Button
                    onClick={() =>
                        topLeft.plain({ message: 'Top left', compact: true })
                    }
                >
                    Top left
                </Button>
                <Button
                    onClick={() =>
                        Notifier.plain({ message: 'Top center', compact: true })
                    }
                >
                    Top center
                </Button>
        </Body>
    )
```

##### Calendar

В компонентах Calendar, если их встретишь в коде, измени хендлер в `onChangeMonth`, удали в нем первый аргумент

###### Пример:

Было:

```
    const [calendarDate, setCalendarDate] = React.useState()
    const handleCalendarChangeMonth = React.useCallback((e, { date, value }) => {
        setCalendarDate(date)
    }, [])
    return (
        <Body>
            <Calendar date={calendarDate} mode="month" onChangeMonth={handleCalendarChangeMonth} />
        </Body>
    )
```

Стало:

```
    const [calendarDate, setCalendarDate] = React.useState()
    const handleCalendarChangeMonth = React.useCallback(({ date }) => {
        setCalendarDate(date)
    }, [])
    return (
        <Body>
            <Calendar date={calendarDate} mode="month" onChangeMonth={handleCalendarChangeMonth} />
        </Body>
    )
```

##### Datepicker

В компонентах Datepicker, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (
    event: FormEvent<HTMLInputElement> | Event | null,
    data: { value?: string; name?: string; isDisabled?: boolean; date?: Date }
) => void;`, стал `onChange: (args: {
    value: string,
    event: React.FormEvent<HTMLInputElement> | Event | null
    options: { name?: string; isDisabled?: boolean; date?: Date }
}) => void;`

###### Пример:

Было:

```
    const [datepickerValue, setDatepickerValue] = React.useState()
    const handleDatepickerChange = React.useCallback(
        (e, data) => setDatepickerValue(data.value),
        [],
    )
    return (
        <Body>
            <Datepicker value={datepickerValue} onChange={handleDatepickerChange} />
        </Body>
    )
```

Стало:

```
    const [datepickerValue, setDatepickerValue] = React.useState()
    const handleDatepickerChange = React.useCallback(
        (data) => setDatepickerValue(data.value),
        [],
    )
    return (
        <Body>
            <Datepicker value={datepickerValue} onChange={handleDatepickerChange} />
        </Body>
    )
```

##### DatepickerRange

В компонентах DatepickerRange, если их встретишь в коде, измени хендлер в `onChange `,  теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `(event: React.FormEvent<HTMLInputElement> | Event | null, data: { value?: string; valueAsDate: DateType; name?: string; isDisabled?: boolean }) => void`, стал `(args: {value: string, event: React.FormEvent<HTMLInputElement> | Event | null, options: { valueAsDate: DateType; name?: string; isDisabled?: boolean }}) => void;`

###### Пример:

Было:

```
    const [datepickerRangeValue, setDatepickerRangeValue] = React.useState()
    const handleDatepickerRangeChange = React.useCallback((e, data) => {
        setDatepickerRangeValue(data.value)
    }, [])
    return (
        <Body>
            <DatepickerRange value={datepickerRangeValue} onChange={handleDatepickerRangeChange} />
            <DatepickerRange isCalendarOpen />
            <DatepickerRange defaultDisplayedDate={new Date('2024-01-01')} />
            <DatepickerRange view="year_list" />
        </Body>
    )
```

Стало:

```
    const [datepickerRangeValue, setDatepickerRangeValue] = React.useState()
    const handleDatepickerRangeChange = React.useCallback((data) => {
        setDatepickerRangeValue(data.value)
    }, [])
    return (
        <Body>
            <DatepickerRange value={datepickerRangeValue} onChange={handleDatepickerRangeChange} />
            <DatepickerRange isCalendarOpen />
            <DatepickerRange defaultDisplayedDate={new Date('2024-01-01')} />
            <DatepickerRange view="year_list" />
        </Body>
    )
```

##### DateTimePicker

В компонентах DateTimePicker, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (e, data: { date: string; time: string }) => void;`, стал `onChange: (args: {
    value: { date: string; time: string },
    event: React.FormEvent<HTMLInputElement> | React.ChangeEvent | React.MouseEvent | React.KeyboardEvent | Event | null
    options: { name?: string }
}) => void;`

###### Пример:

Было:

```
    const [dateTimePickerValue, setDateTimePickerValue] = React.useState({
        date: '22.02.1988',
        time: '09:00',
    })
    const changeDateTimePickerHandler = React.useCallback((e, data) => setDateTimePickerValue(data), [])
    return (
        <Body>
            <DateTimePicker onChange={changeDateTimePickerHandler} value={dateTimePickerValue} />
            <DateTimePicker viewOnly value={new Date('2024-01-01T12:00')} />
        </Body>
    )
```

Стало:

```
    const [dateTimePickerValue, setDateTimePickerValue] = React.useState({
        date: '22.02.1988',
        time: '09:00',
    })
    const changeDateTimePickerHandler = React.useCallback((data) => setDateTimePickerValue(data.value), [])
    return (
        <Body>
            <DateTimePicker onChange={changeDateTimePickerHandler} value={dateTimePickerValue} />
            <DateTimePicker viewOnly value={new Date('2024-01-01T12:00')} />
        </Body>
    )
```

##### FileLoader

Если встретишь в коде компонент Fileloader.File, замени его на File, при этом необходимо будет его импортировать из vienna.ui
В компонентах Fileloader, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (event, files: FCCFile[], errorFiles: FCCFileError[]) => void;`, стал ` onChange: (args: {
    value: FCCFile[],
    event: React.ChangeEvent | React.DragEvent | ClipboardEvent,
    options: { errorFiles: FCCFileError[]; name?: string }
}) => void;`

###### Пример:

Было:

```
    const [fileloaderFiles, setFileloaderFiles] = React.useState([])
    const changeFilelloaderHandler = React.useCallback(
        (e, newFiles) => {
            setFileloaderFiles([...fileloaderFiles, ...newFiles])
        },
        [fileloaderFiles],
    )
    const deleteFileloaderHandler = React.useCallback(
        file => {
            setFileloaderFiles(fileloaderFiles.filter(f => f !== file))
        },
        [fileloaderFiles],
    )
    return (
        <Body>
            <FileLoader onChange={changeFilelloaderHandler} content={'Перетащите файлы'}>
                {fileloaderFiles.map((f, i) => (
                    <FileLoader.File key={i} file={f} onDelete={deleteFileloaderHandler} />
                ))}
            </FileLoader>
        </Body>
    )
```

Стало:

```
    const [fileloaderFiles, setFileloaderFiles] = React.useState([])
    const changeFilelloaderHandler = React.useCallback(
        ({ value: newFiles }) => {
            setFileloaderFiles([...fileloaderFiles, ...newFiles])
        },
        [fileloaderFiles],
    )
    const deleteFileloaderHandler = React.useCallback(
        file => {
            setFileloaderFiles(fileloaderFiles.filter(f => f !== file))
        },
        [fileloaderFiles],
    )
    return (
        <Body>
            <FileLoader onChange={changeFilelloaderHandler} content={'Перетащите файлы'}>
                {fileloaderFiles.map((f, i) => (
                    <FileLoader.File key={i} file={f} onDelete={deleteFileloaderHandler} />
                ))}
            </FileLoader>
        </Body>
    )
```

##### FileLoaderButton

В компонентах FileLoaderButton, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (event, files: FCCFile[], errorFiles: FCCFileError[]) => void;`, стал ` onChange: (args: {
    value: FCCFile[],
    event: React.ChangeEvent | React.DragEvent | ClipboardEvent,
    options: { errorFiles: FCCFileError[]; name?: string }
}) => void;`

###### Пример:

Было:

```
    const [fileLoaderButtonState, setFileLoaderButtonState] = React.useState([])
    const changeFileLoaderButtonHandler = React.useCallback(
        (e, newFiles, f) => {
            setFileLoaderButtonState([...fileLoaderButtonState, ...newFiles])
        },
        [fileLoaderButtonState],
    )
    return (
        <Body>
            <FileLoaderButton multiple onChange={changeFileLoaderButtonHandler}>
                Загрузить файл
            </FileLoaderButton>
        </Body>
    )
```

Стало:

```
    const [fileLoaderButtonState, setFileLoaderButtonState] = React.useState([])
    const changeFileLoaderButtonHandler = React.useCallback(
        ({ value: newFiles }) => {
            setFileLoaderButtonState([...fileLoaderButtonState, ...newFiles])
        },
        [fileLoaderButtonState],
    )
    return (
        <Body>
            <FileLoaderButton multiple onChange={changeFileLoaderButtonHandler}>
                Загрузить файл
            </FileLoaderButton>
        </Body>
    )
```

##### Monthpicker

В компонентах Monthpicker, если их встретишь в коде, измени хендлер в `onChange `,  теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `(event: FormEvent<HTMLInputElement> | Event | null, data: { value?: string; date?: Date; name?: string }) => void`, стал `(args: {value: string, event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | null, options: { date?: Date; name?: string }}) => void;`

###### Пример:

Было:

```
    const [monthpickerValue, setMonthpickerValue] = React.useState()
    const handleMonthpickerChange = React.useCallback((e, data) => setMonthpickerValue(data.date), [])
    return (
        <Body>
            <Monthpicker value={monthpickerValue} onChange={handleMonthpickerChange} />
            <Monthpicker isCalendarOpen={false} />
            <Monthpicker viewOnly value={new Date('2020-01-01')} />
        </Body>
    )
```

Стало:

```
    const [monthpickerValue, setMonthpickerValue] = React.useState()
    const handleMonthpickerChange = React.useCallback(({ value }) => setMonthpickerValue(value), [])
    return (
        <Body>
            <Monthpicker value={monthpickerValue} onChange={handleMonthpickerChange} />
            <Monthpicker isCalendarOpen={false} />
            <Monthpicker viewOnly value={new Date('2020-01-01')} />
        </Body>
    )
```

##### Badge

В компонентах Badge, если их встретишь в коде, удали свойство `clickable`

###### Пример:

Было:

```
    return (
        <Body>
            <Badge color="paris10">Badge text</Badge>
            <Badge color="paris30" clickable>Badge text</Badge>
            <Badge color="miami10">Badge text</Badge>
            <Badge color="miami30">Badge text</Badge>
            <Badge color="dubai10" clickable>Badge text</Badge>
        </Body>
    )
```

Стало:

```
    return (
        <Body>
            <Badge color="paris10">Badge text</Badge>
            <Badge color="paris30">Badge text</Badge>
            <Badge color="miami10">Badge text</Badge>
            <Badge color="miami30">Badge text</Badge>
            <Badge color="dubai10">Badge text</Badge>
        </Body>
    )
```

##### PaymentLogo

В компонентах PaymentLogo,  если их встретишь в коде, удали свойство `clickable`

###### Пример:

Было:

```
    return (
        <Body>
            <Groups>
                <PaymentLogo logo="mastercard" clickable />
                <PaymentLogo logo="mir" />
                <PaymentLogo logo="visa" clickable />
            </Groups>
        </Body>
    )
```

Стало:

```
    return (
        <Body>
            <Groups>
                <PaymentLogo logo="mastercard" />
                <PaymentLogo logo="mir" />
                <PaymentLogo logo="visa" />
            </Groups>
        </Body>
    )
```

##### Popover

В компонентах Popover, если их встретишь в коде, удали свойства `fontSize` и `fontWeight `

###### Пример:

Было:

```
    return (
        <Body>
            <Popover
                placement="right"
                action="click"
                header="This is header"
                content="Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla."
                fontSize={18}
                fontWeight={700}
            >
                {ref => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
            <Popover
                design="dark"
                placement="bottom"
                action="hover"
                header="This is header"
                content="Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla."
            >
                {ref => <Button forwardedRef={ref}>Hover me</Button>}
            </Popover>
        </Body>
    )
```

Стало:

```
    return (
        <Body>
            <Popover
                placement="right"
                action="click"
                header="This is header"
                content="Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla."
            >
                {ref => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
            <Popover
                design="dark"
                placement="bottom"
                action="hover"
                header="This is header"
                content="Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla."
            >
                {ref => <Button forwardedRef={ref}>Hover me</Button>}
            </Popover>
        </Body>
    )
```

##### Drawer

В компонентах Drawer,  если их встретишь в коде, переименуй свойство `onPreDespose` на `onPreDispose`

###### Пример:

Было:

```
    const [isDrawerOpen, setDrawerOpen] = React.useState(false)
    return (
        <Body>
            <Button onClick={() => setDrawerOpen(true)}>Show Drawer</Button>
            <Drawer
                isOpen={isDrawerOpen}
                onPreDespose={() => console.log('onPreDespose')}
                onClose={() => setDrawerOpen(false)}
            >
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                    </Drawer.Head>
                    <Drawer.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                        cursus sit amet dictum sit amet justo donec enim. Sit amet
                        porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                        lectus quam id leo in. Duis ut diam quam nulla porttitor massa.
                        Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse
                        faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna
                        nunc id cursus metus aliquam. In dictum non consectetur a erat
                        nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                        commodo viverra maecenas accumsan. Interdum velit euismod in
                        pellentesque massa placerat duis ultricies. Ac ut consequat
                        semper viverra nam libero justo. Dapibus ultrices in iaculis
                        nunc sed augue lacus viverra.
                    </Drawer.Body>
                </Drawer.Layout>
            </Drawer>
        </Body>
    )
```

Стало:

```
    const [isDrawerOpen, setDrawerOpen] = React.useState(false)
    return (
        <Body>
            <Button onClick={() => setDrawerOpen(true)}>Show Drawer</Button>
            <Drawer
                isOpen={isDrawerOpen}
                onPreDispose={() => console.log('onPreDispose')}
                onClose={() => setDrawerOpen(false)}
            >
                <Drawer.Layout>
                    <Drawer.Head>
                        <Drawer.Title>Enter SMS-code</Drawer.Title>
                    </Drawer.Head>
                    <Drawer.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                        cursus sit amet dictum sit amet justo donec enim. Sit amet
                        porttitor eget dolor morbi non. Ipsum consequat nisl vel pretium
                        lectus quam id leo in. Duis ut diam quam nulla porttitor massa.
                        Id volutpat lacus laoreet non. Etiam non quam lacus suspendisse
                        faucibus. Mollis aliquam ut porttitor leo a diam. Auctor urna
                        nunc id cursus metus aliquam. In dictum non consectetur a erat
                        nam at lectus. Facilisi cras fermentum odio eu feugiat. Risus
                        commodo viverra maecenas accumsan. Interdum velit euismod in
                        pellentesque massa placerat duis ultricies. Ac ut consequat
                        semper viverra nam libero justo. Dapibus ultrices in iaculis
                        nunc sed augue lacus viverra.
                    </Drawer.Body>
                </Drawer.Layout>
            </Drawer>
        </Body>
    )
```

##### Modal

В компонентах Modal, если их встретишь в коде, переименуй свойство `onPreDespose` на `onPreDispose` и переименуй свойство `stopBubling` на `stopBubbling`

###### Пример:

Было:

```
    const [isModalOpen, setModalOpen] = React.useState(false)
    const handleDispose = React.useCallback(
        () => console.log('end despose'),
        [],
      )
    return (
        <Body>
            <Button onClick={() => setModalOpen(true)}>Show modal</Button>
            <Modal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                stopBubling
                onPreDespose={handleDispose}
            >
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        </Body>
    )
```

Стало:

```
    const [isModalOpen, setModalOpen] = React.useState(false)
    const handleDispose = React.useCallback(
        () => console.log('end despose'),
        [],
      )
    return (
        <Body>
            <Button onClick={() => setModalOpen(true)}>Show modal</Button>
            <Modal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                stopBubbling
                onPreDispose={handleDispose}
            >
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        </Body>
    )
```

##### Input

В компонентах Input, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `(
    event: React.ChangeEvent<HTMLInputElement>
    data: {
        name?: string; 
        value: string;
    }
) => void;`, стал `(args:  {
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | null,
    options: { date?: Date; name?: string }
}) => void;`

###### Пример:

Было:

```
    const [inputValue, setInputValue] = React.useState('text')
    const handleInputChange = (e, data) => setInputValue(data.value)
    return (
        <Body>
            <Input placeholder="Введите текст" value={inputValue} onChange={handleInputChange} />
            <Input
                placeholder="Placeholder"
                design="outline"
                size="xs"
                postfix={'руб.'}
            />
            <Input
                placeholder="Placeholder"
                design="outline"
                size="s"
                postfix={'руб.'}
            />
        </Body>
    )
```

Стало:

```
    const [inputValue, setInputValue] = React.useState('text')
    const handleInputChange = (data) => setInputValue(data.value)
    return (
        <Body>
            <Input placeholder="Введите текст" value={inputValue} onChange={handleInputChange} />
            <Input
                placeholder="Placeholder"
                design="outline"
                size="xs"
                postfix={'руб.'}
            />
            <Input
                placeholder="Placeholder"
                design="outline"
                size="s"
                postfix={'руб.'}
            />
        </Body>
    )
```

##### InputPassword

В компонентах InputPassword, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `(
    event: React.ChangeEvent<HTMLInputElement>
    data: {
        name?: string; 
        value: string;
    }
) => void;`, стал `(args:  {
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | null,
    options: { date?: Date; name?: string }
}) => void;`

###### Пример:

Было:

```
    const [inputPasswordValue, setInputPasswordValue] = React.useState('text')
    const handleInputPasswordChange = (e, data) => setInputPasswordValue(data.value)
    return (
        <Body>
            <InputPassword placeholder="Введите текст" value={inputPasswordValue} onChange={handleInputPasswordChange} />
        </Body>
    )
```

Стало:

```
    const [inputPasswordValue, setInputPasswordValue] = React.useState('text')
    const handleInputPasswordChange = (data) => setInputPasswordValue(data.value)
    return (
        <Body>
            <InputPassword placeholder="Введите текст" value={inputPasswordValue} onChange={handleInputPasswordChange} />
        </Body>
    )
```

##### Textarea

В компонентах Textarea, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `(
    event: React.ChangeEvent<HTMLTextAreaElement>
    data: {
        name?: string; 
        value: string;
    }
) => void;`, стал `(args:  {
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLTextAreaElement> | null,
    options: { date?: Date; name?: string }
}) => void;`

###### Пример:

Было:

```
    const [textareaValue, setTextareaValue] = React.useState('text')
    const handleTextareaChange = (e, data) => setTextareaValue(data.value)
    return (
        <Body>
            <Textarea
                placeholder="Текстовое поле"
                maxLength={10}
                showCounter
                value={textareaValue}
                onChange={handleTextareaChange}
            />
            <Textarea viewOnly placeholder="Текстовое поле" value={'Какой-то текст'} />
        </Body>
    )
```

Стало:

```
    const [textareaValue, setTextareaValue] = React.useState('text')
    const handleTextareaChange = (data) => setTextareaValue(data.value)
    return (
        <Body>
            <Textarea
                placeholder="Текстовое поле"
                maxLength={10}
                showCounter
                value={textareaValue}
                onChange={handleTextareaChange}
            />
            <Textarea viewOnly placeholder="Текстовое поле" value={'Какой-то текст'} />
        </Body>
    )
```

##### InputMask

В компонентах InputMask, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string | number | null,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
    }
}) => void;`

###### Пример:

Было:

```
    const [inputMaskValue, setInputMaskValue] = React.useState()
    const changeInputMaskHandler = data => setInputMaskValue(data)
    return (
        <Body>
            <InputMask
                value={inputMaskValue}
                onChange={changeInputMaskHandler}
                maskOptions={{ mask: Number }}
            />
        </Body>
    )
```

Стало:

```
    const [inputMaskValue, setInputMaskValue] = React.useState()
    const changeInputMaskHandler = data => setInputMaskValue(data.value)
    return (
        <Body>
            <InputMask
                value={inputMaskValue}
                onChange={changeInputMaskHandler}
                maskOptions={{ mask: Number }}
            />
        </Body>
    )
```

##### InputAccount

В компонентах InputAccount, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputAccountValue, setInputAccountValue] = React.useState('')
    const changeInputAccountHandler = React.useCallback(data => setInputAccountValue(data), [])
    return (
        <Body>
            <InputAccount value={inputAccountValue} onChange={changeInputAccountHandler} />
        </Body>
    )
```

Стало:

```
    const [inputAccountValue, setInputAccountValue] = React.useState('')
    const changeInputAccountHandler = React.useCallback(data => setInputAccountValue(data.value), [])
    return (
        <Body>
            <InputAccount value={inputAccountValue} onChange={changeInputAccountHandler} />
        </Body>
    )
```

##### InputCard

В компонентах InputCard, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputCardValue, setInputCardValue] = React.useState('')
    const changeInputCardHandler = React.useCallback(data => setInputCardValue(data), [])
    return (
        <Body>
            <InputCard value={inputCardValue} onChange={changeInputCardHandler} />
        </Body>
    )
```

Стало:

```
    const [inputCardValue, setInputCardValue] = React.useState('')
    const changeInputCardHandler = React.useCallback(data => setInputCardValue(data.value), [])
    return (
        <Body>
            <InputCard value={inputCardValue} onChange={changeInputCardHandler} />
        </Body>
    )
```

##### InputPhone

В компонентах InputPhone, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputPhoneValue, setInputPhoneValue] = React.useState('')
    const handleInputPhoneChange = React.useCallback(data => setInputPhoneValue(data), [])
    return (
        <Body>
            <InputPhone value={inputPhoneValue} onChange={handleInputPhoneChange} size="l" />
        </Body>
    )
```

Стало:

```
    const [inputPhoneValue, setInputPhoneValue] = React.useState('')
    const handleInputPhoneChange = React.useCallback(data => setInputPhoneValue(data.value), [])
    return (
        <Body>
            <InputPhone value={inputPhoneValue} onChange={handleInputPhoneChange} size="l" />
        </Body>
    )
```

##### InputDate

В компонентах InputDate, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string | Date,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputDateValue, setInputDateValue] = React.useState('')
    const handleInputDateChange = React.useCallback(data => setInputDateValue(data), [])
    return (
        <Body>
            <InputDate value={inputDateValue} onChange={handleInputDateChange} />
        </Body>
    )
```

Стало:

```
    const [inputDateValue, setInputDateValue] = React.useState('')
    const handleInputDateChange = React.useCallback(data => setInputDateValue(data.value), [])
    return (
        <Body>
            <InputDate value={inputDateValue} onChange={handleInputDateChange} />
        </Body>
    )
```

##### InputDateRange

В компонентах InputDateRange, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: unknown, isComplete: boolean, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: string | null,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputDateRangeValue, setInputDateRangeValue] = React.useState('')
    const changeInputDateRangeHandler = React.useCallback(data => setInputDateRangeValue(data), [])
    return (
        <Body>
            <InputDateRange value={inputDateRangeValue} onChange={changeInputDateRangeHandler} />
        </Body>
    )
```

Стало:

```
    const [inputDateRangeValue, setInputDateRangeValue] = React.useState('')
    const changeInputDateRangeHandler = React.useCallback(data => setInputDateRangeValue(data.value), [])
    return (
        <Body>
            <InputDateRange value={inputDateRangeValue} onChange={changeInputDateRangeHandler} />
        </Body>
    )
```

##### InputDigital

В компонентах InputDigital, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: number | null | string, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: number | null | string,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputDigitalValue, setInputDigitalValue] = React.useState(null)
    const changeInputDigitalHandler = value => setInputDigitalValue(value)
    return (
        <Body>
            <InputDigital value={inputDigitalValue} onChange={changeInputDigitalHandler} />
        </Body>
    )
```

Стало:

```
    const [inputDigitalValue, setInputDigitalValue] = React.useState(null)
    const changeInputDigitalHandler = ({value}) => setInputDigitalValue(value)
    return (
        <Body>
            <InputDigital value={inputDigitalValue} onChange={changeInputDigitalHandler} />
        </Body>
    )
```

##### InputNumber

В компонентах InputNumber, если их встретишь в коде, измени хендлер в `onChange `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (value: number | null, unmaskedValue?: unknown) => void;`, стал ` onChange: (args: {
    value: number | null,
    options: {
        name?: string;
        isComplete: boolean;
        unmaskedValue?: unknown;
   	 }
}) => void;`

###### Пример:

Было:

```
    const [inputNumberValue, setInputNumberValue] = React.useState(23.4)
    const changeInputNumberHandler = React.useCallback(data => setInputNumberValue(data), [])
    return (
        <Body>
            <InputNumber onChange={changeInputNumberHandler} value={inputNumberValue} />
        </Body>
    )
```

Стало:

```
    const [inputNumberValue, setInputNumberValue] = React.useState(23.4)
    const changeInputNumberHandler = React.useCallback(data => setInputNumberValue(data.value), [])
    return (
        <Body>
            <InputNumber onChange={changeInputNumberHandler} value={inputNumberValue} />
        </Body>
    )
```

##### Multiselect

В компонентах Multiselect, если их встретишь в коде, замени их на MultiselectWithSearch, при этом необходимо будет добавить импорт из vienna.ui. И измени хендлер в `onSelect`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `onSelect: (e: FormEvent<HTMLInputElement>, data: { name?: string; value: any[]; }) => void; `, стал ` onSelect: (args: {
    value: any[],
    event: React.MouseEvent | React.KeyboardEvent
    options: { name?: string } 
}) => void;`

###### Пример:

Было:

```
const [multiselectValues, setMultiselectValues] = React.useState([])
const handleMultiselectSelect = (e, data) => {
    const index = multiselectValues.indexOf(data.value)
    if (index >= 0) {
        delete multiselectValues[index]
        setMultiselectValues([...multiselectValues.filter(val => val !== undefined)])
    } else {
        setMultiselectValues([...multiselectValues, data.value])
    }
}
return (
    <Body>
        <Multiselect
            placeholder="Выберите значение"
            values={multiselectValues}
            onSelect={handleMultiselectSelect}
        >
            <Multiselect.Option>Значение 1</Multiselect.Option>
            <Multiselect.Option>Значение большое 2</Multiselect.Option>
            <Multiselect.Option>Значение еще больше 3</Multiselect.Option>
            <Multiselect.Option>Знач. 4</Multiselect.Option>
            <Multiselect.Option>Значение 5</Multiselect.Option>
        </Multiselect>
    </Body>
)
```

Стало:

```
    const [multiselectValues, setMultiselectValues] = React.useState([])
    const handleMultiselectSelect = ({ value }) => {
        setMultiselectValues(value);
    }
    return (
        <Body>
            <MultiselectWithSearch
                placeholder="Выберите значение"
                values={multiselectValues}
                onSelect={handleMultiselectSelect}
            >
                <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение большое 2</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение еще больше 3</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Знач. 4</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 5</MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        </Body>
    )
```

##### Select

В компонентах Select, если их встретишь в коде, измени хендлер в `onSelect `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onSelect: (
event: FormEvent<HTMLInputElement>,
data: { name?: string; value?: string; originalValue?: string }
) => void;`, стал ` onSelect: (args: {
    value: any | undefined,
    event: React.MouseEvent | React.KeyboardEvent
    options: { name?: string }
}) => void;`, измени хендлер в `onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (
event: React.ChangeEvent,
data: { name?: string; value?: string; originalValue?: string }
) => void;`, стал ` onChange: (args: {
    value: string,
    event: React.ChangeEvent<HTMLInputElement>,
    options: { originalValue: string; name?: string } 
}) => void;`

###### Пример:

Было:

```
    const [selectValue, setSelectValue] = React.useState()
    const handleSelectSelect = (e, data) => setSelectValue(data.value)
    return (
        <Body>
            <Select
                placeholder="Выберите значение"
                value={selectValue}
                onChange={(e, d) => console.log(d)}
                onSelect={handleSelectSelect}
            >
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        </Body>
    )
```

Стало:

```
    const [selectValue, setSelectValue] = React.useState()
    const handleSelectSelect = (data) => setSelectValue(data.value)
    return (
        <Body>
            <Select
                placeholder="Выберите значение"
                value={selectValue}
                onChange={({value}) => console.log(value)}
                onSelect={handleSelectSelect}
            >
                <Select.Option>Значение 1</Select.Option>
                <Select.Option>Значение 2</Select.Option>
                <Select.Option>Значение 3</Select.Option>
                <Select.Option>Значение 4</Select.Option>
                <Select.Option>Значение 5</Select.Option>
            </Select>
        </Body>
    )
```

##### MultiselectWithSearch

В компонентах MultiselectWithSearch, если их встретишь в коде, измени хендлер в `onSelect`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `onSelect: (value: any[], name?: string) => void; `, стал ` onSelect: (args: {
    value: any[],
    event: React.MouseEvent | React.KeyboardEvent
    options: { name?: string } 
}) => void;`

###### Пример:

Было:

```
    const [multiselectValues, setMultiselectValues] = React.useState([])
    const handleMultiselectSelect = data => setMultiselectValues(data)
    return (
        <Body>
            <MultiselectWithSearch
                values={multiselectValues}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleMultiselectSelect}
            />
        </Body>
    )
```

Стало:

```
    const [multiselectValues, setMultiselectValues] = React.useState([])
    const handleMultiselectSelect = ({ value }) => setValues(value)
    return (
        <Body>
            <MultiselectWithSearch
                values={multiselectValues}
                options={[
                    'Значение 1',
                    'Значение большое 2',
                    'Значение еще больше 3',
                    'Знач. 4',
                    'Значение 5',
                    'Значение 6',
                    'Значение 7',
                    'Значение 8',
                    'Значение 9',
                    'Значение 10',
                ]}
                placeholder={'Выберите значение'}
                onSelect={handleMultiselectSelect}
            />
        </Body>
    )
```

##### Pagination

В компонентах Pagination, если их встретишь в коде, измени хендлер в ` onChange`, 1 и 2 аргументы изменены местами, был вот такой тип ` onChange: (event: React.FormEvent | null, data: { pageIndex: number; pageSize: number }) => void; `, стал ` onChange: (data: { pageIndex: number; pageSize: number }, event: React.FormEvent | null) => void; `

###### Пример:

Было:

```
    const totalItemsCount = 100
    const pageSize = 10
    const items = Array.from(Array(totalItemsCount).keys()).map(index => ({
        id: 'Item - ' + index.toString(),
    }))
    const getPagedItems = (current, pageSize) => {
        return items.slice(current * pageSize, (current + 1) * pageSize)
    }
    const [paginationState, setPaginationState] = React.useState({
        page: 0,
        items: getPagedItems(0, pageSize),
    })
    const handlePageChange = (event, { pageIndex, pageSize }) => {
        setPaginationState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize) })
    }
    return (
        <Body>
            <ul>
                {paginationState.items.map(item => {
                    return <li key={item.id}>{item.id}</li>
                })}
            </ul>
            <Pagination
                pageSize={pageSize}
                totalItemsCount={totalItemsCount}
                onChange={handlePageChange}
                hasNextPage={false}
            />
        </Body>
    )
```

Стало:

```
    const totalItemsCount = 100
    const pageSize = 10
    const items = Array.from(Array(totalItemsCount).keys()).map(index => ({
        id: 'Item - ' + index.toString(),
    }))
    const getPagedItems = (current, pageSize) => {
        return items.slice(current * pageSize, (current + 1) * pageSize)
    }
    const [paginationState, setPaginationState] = React.useState({
        page: 0,
        items: getPagedItems(0, pageSize),
    })
    const handlePageChange = ({ pageIndex, pageSize }) => {
        setPaginationState({ page: pageIndex, items: getPagedItems(pageIndex, pageSize) })
    }
    return (
        <Body>
            <ul>
                {paginationState.items.map(item => {
                    return <li key={item.id}>{item.id}</li>
                })}
            </ul>
            <Pagination
                pageSize={pageSize}
                totalItemsCount={totalItemsCount}
                onChange={handlePageChange}
                hasNextPage={false}
            />
        </Body>
    )
```

##### Search

В компонентах Search, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (
    event: FormEvent<HTMLInputElement>>,
    data?: { name?: string; value?: string; index: number }
) => void;`, стал ` onChange: (args: {
    value: string,
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | InputMaskEventType
    options: { index: number; name?: string } 
}) => void;`

###### Пример:

Было:

```
    const [searchState, setSearchValue] = React.useState({ value: '', suggests: [] })
    const handleSearchSelect = (e, data) => setSearchValue({ ...searchState, value: data.value })
    const handleSearchChange = (e, data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ]
        const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`)
        const temp =
            (data.value &&
                mock.filter(m => regexp.test(escape(m.toUpperCase())))) ||
            []
        setSearchValue({ value: data.value, suggests: temp })
    }
    return (
        <Body>
            <Search
                suggests={searchState.suggests}
                value={searchState.value}
                fitOptions={false}
                placeholder="Начните ввод"
                onChange={handleSearchChange}
                onSelect={handleSearchSelect}
            />
        </Body>
    )
```

Стало:

```
    const [searchState, setSearchValue] = React.useState({ value: '', suggests: [] })
    const handleSearchSelect = (data) => setSearchValue({ ...searchState, value: data.value })
    const handleSearchChange = (data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ]
        const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`)
        const temp =
            (data.value &&
                mock.filter(m => regexp.test(escape(m.toUpperCase())))) ||
            []
        setSearchValue({ value: data.value, suggests: temp })
    }
    return (
        <Body>
            <Search
                suggests={searchState.suggests}
                value={searchState.value}
                fitOptions={false}
                placeholder="Начните ввод"
                onChange={handleSearchChange}
                onSelect={handleSearchSelect}
            />
        </Body>
    )
```

##### Radio

В компонентах Radio, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (event: React.ChangeEvent<HTMLInputElement>, data?: { name?: string; value: string }) => void;`, стал ` onChange: (args: {
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
    options: { name?: string }
}) => void;`

###### Пример:

Было:

```
    const [radioState, setRadioState] = React.useState({ value: '2' })
    return (
        <Body>
            <Groups>
                <Radio
                    checked={radioState.value === '1'}
                    name="group0"
                    value="1"
                    onChange={(e, { value }) => setRadioState({ value })}
                >
                    Radio #1
                </Radio>
                <Radio
                    checked={radioState.value === '2'}
                    name="group0"
                    value="2"
                    onChange={(e, { value }) => setRadioState({ value })}
                >
                    Radio #2
                </Radio>
                <Radio
                    checked={radioState.value === '3'}
                    name="group0"
                    value="3"
                    onChange={(e, { value }) => setRadioState({ value })}
                >
                    Radio #3
                </Radio>
                <Radio
                    checked={radioState.value === '4'}
                    name="group0"
                    value="4"
                    onChange={(e, { value }) => setRadioState({ value })}
                >
                    Radio #4
                </Radio>
            </Groups>
        </Body>
    )
```

Стало:

```
    const [radioState, setRadioState] = React.useState({ value: '2' })
    return (
        <Body>
            <Groups>
                <Radio
                    checked={radioState.value === '1'}
                    name="group0"
                    value="1"
                    onChange={({ value }) => setRadioState({ value })}
                >
                    Radio #1
                </Radio>
                <Radio
                    checked={radioState.value === '2'}
                    name="group0"
                    value="2"
                    onChange={({ value }) => setRadioState({ value })}
                >
                    Radio #2
                </Radio>
                <Radio
                    checked={radioState.value === '3'}
                    name="group0"
                    value="3"
                    onChange={({ value }) => setRadioState({ value })}
                >
                    Radio #3
                </Radio>
                <Radio
                    checked={radioState.value === '4'}
                    name="group0"
                    value="4"
                    onChange={({ value }) => setRadioState({ value })}
                >
                    Radio #4
                </Radio>
            </Groups>
        </Body>
    )
```

##### Switcher

В компонентах Switcher, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `onChange: (event: ChangeEvent<HTMLInputElement>, data?: { name?: string; value: boolean }) => void;`, стал ` onChange: (args: {
    value: boolean,
    event: React.ChangeEvent<HTMLInputElement>
    options: { name?: string }
}) => void;`

###### Пример:

Было:

```
    const [switcherState, setSwitcherState] = React.useState(false)
    return (
        <Body>
            <Switcher checked={switcherState} onChange={(e, data) => setSwitcherState(data.value)}>
                Switcher #1
            </Switcher>
        </Body>
    )
```

Стало:

```
    const [switcherState, setSwitcherState] = React.useState(false)
    return (
        <Body>
            <Switcher checked={switcherState} onChange={(data) => setSwitcherState(data.value)}>
                Switcher #1
            </Switcher>
        </Body>
    )
```

##### Tabs

В компонентах Tabs, если их встретишь в коде, измени хендлер в ` onChange`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` onChange: (event: FormEvent<HTMLDivElement>, value: any) => void; `, стал ` onChange: (args: {
    value: any,
    event: React.MouseEvent
}) => void;`

###### Пример:

Было:

```
    const [tabsState, setTabsState] = React.useState({ value: 'Счета' })
    const handleTabsChange = (e, value) => setTabsState({ value })
    return (
        <Body>
            <Tabs value={tabsState.value} onChange={handleTabsChange}>
                <Tabs.Tab value="Счета">Счета</Tabs.Tab>
                <Tabs.Tab value="Операции">Операции</Tabs.Tab>
                <Tabs.Tab value="Реквизиты">Реквизиты</Tabs.Tab>
                <Tabs.Tab value="Овердрафт">Овердрафт</Tabs.Tab>
            </Tabs>
        </Body>
    )
```

Стало:

```
    const [tabsState, setTabsState] = React.useState({ value: 'Счета' })
    const handleTabsChange = ({ value }) => setTabsState({ value })
    return (
        <Body>
            <Tabs value={tabsState.value} onChange={handleTabsChange}>
                <Tabs.Tab value="Счета">Счета</Tabs.Tab>
                <Tabs.Tab value="Операции">Операции</Tabs.Tab>
                <Tabs.Tab value="Реквизиты">Реквизиты</Tabs.Tab>
                <Tabs.Tab value="Овердрафт">Овердрафт</Tabs.Tab>
            </Tabs>
        </Body>
    )
```

##### Toolbar

В компонентах Toolbar.Operation, если их встретишь в коде, измени хендлер в ` onClick`, поменяй местами 1 и 2 аргументы, был вот такой тип ` onClick?: (event: MouseEvent<HTMLDivElement>, data?: { id?: string; name?: string }) => void;`, стал ` onClick: (data: { id?: string; name?: string }, event: MouseEvent<HTMLDivElement>) => void;`

###### Пример:

Было:

```
    const toolbarOperationClickHandler = (_, { id }) => console.log('id', id);
    return (
        <Toolbar>
            <Toolbar.Operation id="action1" label={'Action 1'} />
            <Toolbar.Operation id="action2" label={'Action 2'} />
            <Toolbar.Operation id="action3" label={'Action 3'} />
        </Toolbar>
    )
```

Стало:

```
    const toolbarOperationClickHandler = ({ id }) => console.log('id', id);
    return (
        <Toolbar>
            <Toolbar.Operation id="action1" label={'Action 1'} />
            <Toolbar.Operation id="action2" label={'Action 2'} />
            <Toolbar.Operation id="action3" label={'Action 3'} />
        </Toolbar>
    )
```

##### Table

В компонентах Table,  если их встретишь в коде, в onInit изменился тип для свойства service из первого аргумента, теперь в методе `toggleSelectRow` 3 аргумента, первый остался прежним, второй, третий и четвертый объединились в объект и теперь идут вторым аргументом, а пятый стал третим, для наглядности был вот такой тип `toggleSelectRow: (item: any, isSelect: boolean, isIndeterminate?: boolean, isCheckboxDisabled?: boolean, onSuccess?: (state: TableState) => void) => void;`, стал `(item: any, data: { isSelect: boolean; isIndeterminate?: boolean; isCheckboxDisabled?: boolean; }, onSuccess?: (state: TableState) => void) => void;`, в связи с этим, измени `toggleSelectRow `, если встретишь его в коде.

Далее измени хендлер в `onRowClick`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void; `, стал ` (args: {
    value: Record<string, any>,
    event: React.MouseEvent<HTMLElement>
}) => void; `.

Далее измени хендлер в `onRowDoubleClick`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void; `, стал ` (args: {
    value: Record<string, any>,
    event: React.MouseEvent<HTMLElement>
}) => void; `.

Далее измени хендлер в `onSort`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` (event?: React.FormEvent, data?: { field: string; direction: SortDirection }) => void; `, стал ` (args: {
   value: { field: string; direction: SortDirection },
    event: React.FormEvent | undefined
}) => void; `.

Далее измени хендлер в `onSelect`, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип ` (event: React.FormEvent, data: any) => void;`, стал ` (args: {
   value: {
        item?: Record<string, any> | string | null;
        isChecked?: boolean;
        isRowIndeterminate?: boolean;
        isSelectedAll?: boolean;
        isSelectedFullData?: boolean;
    },
    event: React.FormEvent
}) => void; `.

В компонентах Table.ExpandingRow, если их встретишь в коде, измени хендлер в `onExpand `, теперь все данные приходят в первом аргументе в виде объекта, был вот такой тип `onExpand?: (e, data) => void;`, стал ` onExpand: (args: {
    value:Record<string, any>,
    event: React.MouseEvent<HTMLDivElement>
}) => void;`

В компонентах Table.GroupBy, если их встретишь в коде, измени хендлер в `onExpand `, поменяй местами 1 и 2 аргументы, был вот такой тип `onExpand?: (e: React.MouseEvent<HTMLElement>, id: string) => void;`, стал ` onExpand: (id: string, e: React.MouseEvent<HTMLElement>) => void;`

###### Пример для Table:

Было:

```
    let tableService;
    const [tableSort, setTableSort] = React.useState()
    const onTableSort = (_, data) => {
        setTableSort(data)
    }
    return (
        <div>
            <Groups bottoGap>
                <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], true)}>
                    Select row 0
                </Button>
                <Button onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], false, true)}>
                    Indeterminate row 0
                </Button>
                <Button
                    onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], false, false, true)}>
                    Disable row 0
                </Button>
                <Button
                    onClick={() => tableService.toggleSelectRow(ComponentHelpers.Table.data[0], false, false, false)}>
                    Enable row 0
                </Button>
                <Button onClick={() => tableService.toggleExpandingRow('1')}>Expand row 1</Button>
                <Button onClick={() => tableService.hideColumn('phone')}>Hide phone column</Button>
            </Groups>
            <Table
                data={ComponentHelpers.Table.data}
                onSort={onSort}
                onInit={({ service }) => {
                    tableService = service;
                }}
                onRowClick={(e, d) => {
                    tableService.toggleColoredRow({
                        id: d.id,
                        color: '#FFE9DC',
                    })
                }}
                onRowDoubleClick={(e, d) => {
                    tableService.toggleColoredRow({
                        id: d.id,
                        color: '#FFFFFF',
                    })
                }}
                onSelect={console.log}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.ExpandingRow>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        </div>
    );
```

Стало:

```
    let tableService;
    const [tableSort, setTableSort] = React.useState()
    const onTableSort = ({ value }) => {
        setSort(value)
    }
    return (
        <div>
            <Groups bottoGap>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(ComponentHelpers.Table.data[0], {
                            isSelect: true,
                        })
                    }>
                    Select row 0
                </Button>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(ComponentHelpers.Table.data[0], {
                            isIndeterminate: true,
                        })
                    }>
                    Indeterminate row 0
                </Button>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(ComponentHelpers.Table.data[0], {
                            isCheckboxDisabled: true,
                        })
                    }>
                    Disable row 0
                </Button>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(ComponentHelpers.Table.data[0], {
                            isCheckboxDisabled: false,
                        })
                    }>
                    Enable row 0
                </Button>
                <Button onClick={() => tableService.toggleExpandingRow('1')}>Expand row 1</Button>
                <Button onClick={() => tableService.hideColumn('phone')}>Hide phone column</Button>
            </Groups>
            <Table
                data={ComponentHelpers.Table.data}
                onSort={onSort}
                onInit={({ service }) => {
                    tableService = service;
                }}
                onRowClick={({value}) => {
                    tableService.toggleColoredRow({
                        id: value.id,
                        color: '#FFE9DC',
                    })
                }}
                onRowDoubleClick={({value}) => {
                    tableService.toggleColoredRow({
                        id: value.id,
                        color: '#FFFFFF',
                    })
                }}
                onSelect={console.log}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.ExpandingRow>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        </div>
    );
```

###### Пример для Table.ExpandingRow:

Было:

```
    const tableExpanded = ['0']
    const onTableExpand = (e, data) => {
        console.log(data)
    }
    return (
        <Table data={ComponentHelpers.Table.data}>
            <Table.Column id="id" title="#">
                {person => person.id}
            </Table.Column>
            <Table.Column id="firstName" title="First Name">
                {person => person.firstName}
            </Table.Column>
            <Table.Column id="lastName" title="Last Name">
                {person => person.lastName}
            </Table.Column>
            <Table.Column id="position" title="Position">
                {person => person.position}
            </Table.Column>
            <Table.Column id="phone" title="Phone">
                {person => person.phone}
            </Table.Column>
            <Table.ExpandingRow
                allowMultiple
                onExpand={onTableExpand}
                expandedRow={tableExpanded}
                data-test="text"
            >
                {person => (
                    <span>
            {person.lastName} {person.firstName}
          </span>
                )}
            </Table.ExpandingRow>
        </Table>
    )
```

Стало:

```
    const tableExpanded = ['0']
    const onTableExpand = ({ value }) => {
        console.log(value)
    }
    return (
        <Table data={ComponentHelpers.Table.data}>
            <Table.Column id="id" title="#">
                {person => person.id}
            </Table.Column>
            <Table.Column id="firstName" title="First Name">
                {person => person.firstName}
            </Table.Column>
            <Table.Column id="lastName" title="Last Name">
                {person => person.lastName}
            </Table.Column>
            <Table.Column id="position" title="Position">
                {person => person.position}
            </Table.Column>
            <Table.Column id="phone" title="Phone">
                {person => person.phone}
            </Table.Column>
            <Table.ExpandingRow
                allowMultiple
                onExpand={onTableExpand}
                expandedRow={tableExpanded}
                data-test="text"
            >
                {person => (
                    <span>
            {person.lastName} {person.firstName}
          </span>
                )}
            </Table.ExpandingRow>
        </Table>
    )
```

###### Пример для Table.GroupBy:

Было:

```
    const onTableGroupExpand = (e, data) => {
        console.log(data)
    }
    return (
        <Table data={ComponentHelpers.Table.data}>
            <Table.GroupBy
                id="pm"
                title="Project Managers"
                filter={item => item.position === 'PM'}
                onExpand={onTableGroupExpand}
            />
            <Table.GroupBy
                id="sde"
                title="SDE"
                filter={item => item.position === 'Software Engineer'}
                onExpand={onTableGroupExpand}
            />
            <Table.Column id="id" title="#">
                {person => person.id}
            </Table.Column>
            <Table.Column id="firstName" title="First Name" sortable>
                {person => person.firstName}
            </Table.Column>
            <Table.Column id="lastName" title="Last Name">
                {person => person.lastName}
            </Table.Column>
            <Table.Column id="position" title="Position" sortable>
                {person => person.position}
            </Table.Column>
            <Table.Column id="phone" title="Phone" sortable>
                {person => person.phone}
            </Table.Column>
        </Table>
    )
```

Стало:

```
    const onTableGroupExpand = (data, e) => {
        console.log(data)
    }
    return (
        <Table data={ComponentHelpers.Table.data}>
            <Table.GroupBy
                id="pm"
                title="Project Managers"
                filter={item => item.position === 'PM'}
                onExpand={onTableGroupExpand}
            />
            <Table.GroupBy
                id="sde"
                title="SDE"
                filter={item => item.position === 'Software Engineer'}
                onExpand={onTableGroupExpand}
            />
            <Table.Column id="id" title="#">
                {person => person.id}
            </Table.Column>
            <Table.Column id="firstName" title="First Name" sortable>
                {person => person.firstName}
            </Table.Column>
            <Table.Column id="lastName" title="Last Name">
                {person => person.lastName}
            </Table.Column>
            <Table.Column id="position" title="Position" sortable>
                {person => person.position}
            </Table.Column>
            <Table.Column id="phone" title="Phone" sortable>
                {person => person.phone}
            </Table.Column>
        </Table>
    )
```

