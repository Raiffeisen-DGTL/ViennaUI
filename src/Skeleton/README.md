# Skeleton

## Импорт

```
import { Skeleton } from 'vienna-ui';
``` 
## SkeletonProps

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | `'line' \| 'block' \| 'square' \| 'circle'` | — |  |
| size | `SkeletonSize` | — |  |
| height | `string` | — |  |
| width | `string` | — |  |
| disableAnimation | `boolean` | — |  |
| mode | `SkeletonMode` | — |  |


# Skeleton

Используется для отображения временных заполнителей (заглушек) во время загрузки контента



```
    <Skeleton design="line" size="l"></Skeleton>
```

## Внешний вид и размеры

#### Line

Используется для имитации текстовых блоков, кнопок, инпутов и других элементов.
Принимает свойство `size` со значениями `'s' | 'm' | 'l' | 'xl'` (значение по умолчанию `m`) и свойство `width?: string`.

```
    <Groups design="vertical">
        <Skeleton design="line" size="s"></Skeleton>
        <Skeleton design="line" size="m"></Skeleton>
        <Skeleton design="line" size="l"></Skeleton>
        <Skeleton design="line" size="xl"></Skeleton>
    </Groups>
```

#### Block

Свободная форма с возможностью настраивать как ширину (`width?: string`), так и высоту (`height: string`).
Она используется для имитации областей с изображениями, а также для областей, не требующих высокой детализации.

```
    <Skeleton design="block" height="75px" width="300px"></Skeleton>
```

#### Square

Квадратная форма с фиксированнной шириной и высотой. Принимает свойство `size` со значениями `'s' | 'm' | 'l' | 'xl'` (значение по умолчанию `m`).

```
    <Groups>
        <Skeleton design="square" size="s"></Skeleton>
        <Skeleton design="square" size="m"></Skeleton>
        <Skeleton design="square" size="l"></Skeleton>
        <Skeleton design="square" size="xl"></Skeleton>
    </Groups>
```

#### Circle

Круглая форма с фиксированнной шириной и высотой. Принимает свойство `size` со значениями `'s' | 'm' | 'l' | 'xl'` (значение по умолчанию `m`).

```
    <Groups>
        <Skeleton design="circle" size="s"></Skeleton>
        <Skeleton design="circle" size="m"></Skeleton>
        <Skeleton design="circle" size="l"></Skeleton>
        <Skeleton design="circle" size="xl"></Skeleton>
    </Groups>
```

## Темная тема

В компоненте есть возможность использовать темную тему. Для этого необходимо передать свойство `mode` со значением `'dark'`. По умолчанию значение `'light'`.

```
   <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#2B2D33',
            padding: '50px',
        }}>
        <Skeleton  design='line' size='s' mode='dark' width='80%'></Skeleton>
        <Skeleton  design='circle' size='l' mode='dark'></Skeleton>
        <Skeleton  design='square' size='l' mode='dark'></Skeleton>
        <Skeleton  design='block' height='50px' mode='dark' width='80%'></Skeleton>
    </div>
```

## Отключение анимации

Анимацию можно отключить, передав свойство `disableAnimation`.

```
    <Skeleton design="block" height="75px" disableAnimation></Skeleton>
```

## `useDeferredLoading`

Для обеспечения качественного UX и во избежание видимых глазу скачков рекомендуется отображать Skeleton не менее 500 милисекунд. Для удобства реализации такого поведения `vienna-ui` экспортирует хук `useDeferredLoading`, который принимает стейт загрузки и время задержки (500ms по умолчанию) и возвращает адаптированный стейт загрузки - состояние не переключится раньше, чем истечет период задержки, по истечению периода возвращаемое значение будет соответствовать оригинальному стейту. 

```
    {() => {
        const [isLoading, setIsLoading] = React.useState(true);
        const [delay, setDelay] = React.useState(500);
        const deferredLoading = useDeferredLoading({ isLoading, timeout: delay });
        return (
            <React.Fragment>
                <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Button design='accent' onClick={() => setIsLoading(true)}>
                        Начать загрузку
                    </Button>
                    <Button design='primary' onClick={() => setIsLoading(false)}>
                        Остановить загрузку
                    </Button>
                    {[500, 1800, 6000].map((timeout) => (
                        <Radio
                            value={timeout.toString()}
                            checked={delay === timeout}
                            onChange={({ value }) => setDelay(+value)}>
                            {timeout + "ms"}
                        </Radio>
                    ))}
                     {deferredLoading ? (
                        <Skeleton design='block' height="100px" width="100%" />
                    ) : (
                        <CardVersatile title='Я карточка' design='gray'>
                            с контентом
                        </CardVersatile>
                    )}
                </div>
            </React.Fragment>
        );
    }}
```

## Использование Skeleton в UserProfile

```
    {() => {
        const [isLoading, setIsLoading] = React.useState(true);
        const handleChange = ({value}) => {
            setIsLoading(!value);
        }
        return (
            <>
                <Switcher
                    checked={!isLoading}
                    onChange={handleChange}
                    size='l'
                    style={{marginBottom: '20px'}}
                />
                {isLoading ? (
                    <Groups design="vertical">
                        <Flex gap="s4" alignItems="center">
                            <Skeleton design="circle" size="l"></Skeleton>
                            <Flex direction={'column'} gap="s3">
                            <Skeleton design="line" size="s" width="616px"></Skeleton>
                            <Skeleton design="line" size="s" width="402px"></Skeleton>
                            </Flex>
                        </Flex>
                        <Flex gap="s4" alignItems="center">
                            <Skeleton design="circle" size="l"></Skeleton>
                            <Flex direction={'column'} gap="s3">
                            <Skeleton design="line" size="s" width="616px"></Skeleton>
                            <Skeleton design="line" size="s" width="402px"></Skeleton>
                            </Flex>
                        </Flex>
                        <Flex gap="s4" alignItems="center">
                            <Skeleton design="circle" size="l"></Skeleton>
                            <Flex direction={'column'} gap="s3">
                            <Skeleton design="line" size="s" width="616px"></Skeleton>
                            <Skeleton design="line" size="s" width="402px"></Skeleton>
                            </Flex>
                        </Flex>
                        <Skeleton design="block" height="40px" width="132px"></Skeleton>
                        </Groups>) :
                    (<Groups design="vertical">
                           <UserProfile
                                photo='https://www.raiffeisen.ru/static/common/Digital_Marketing/Abstract/Abstract2.webp'
                                name='Super User Name'
                                description='Some Description'
                                >
                            </UserProfile>
                            <UserProfile
                                photo='https://www.raiffeisen.ru/static/common/Digital_Marketing/Abstract/Abstract2.webp'
                                name='Super User Name'
                                description='Some Description'
                                >
                            </UserProfile>
                            <UserProfile
                                photo='https://www.raiffeisen.ru/static/common/Digital_Marketing/Abstract/Abstract2.webp'
                                name='Super User Name'
                                description='Some Description'
                                >
                            </UserProfile>
                            <Button design='accent' size='l'>This is button</Button>
                    </Groups>
                )}
            </>
        );
    }}
```

## Примеры сборок

##### Сборка таблицы

```
    <Flex direction={'column'} gap='s4'>
        <Flex gap='s3' paddingLeft='36px'>
            <Flex.Item basis='267px'>
                <Skeleton design='line' size='s' width='59.7%'></Skeleton>
            </Flex.Item>
            <Flex.Item basis='71px'>
                <Skeleton design='line' size='s' width='71.8%'></Skeleton>
            </Flex.Item>
            <Flex.Item basis='320px'>
                <Skeleton design='line' size='s' width='76.6%'></Skeleton>
            </Flex.Item>
            <Flex.Item basis='267px'>
                <Skeleton design='line' size='s' width='59.7%'></Skeleton>
            </Flex.Item>
        </Flex>
        <Flex gap='s3'>
            <Skeleton design='square' size='m'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
            <Skeleton design='line' size='m' width='71px'></Skeleton>
            <Skeleton design='line' size='m' width='320px'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
        </Flex>
        <Flex gap='s3'>
            <Skeleton design='square' size='m'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
            <Skeleton design='line' size='m' width='71px'></Skeleton>
            <Skeleton design='line' size='m' width='320px'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
        </Flex>
        <Flex gap='s3'>
            <Skeleton design='square' size='m'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
            <Skeleton design='line' size='m' width='71px'></Skeleton>
            <Skeleton design='line' size='m' width='320px'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
        </Flex>
        <Flex gap='s3'>
            <Skeleton design='square' size='m'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
            <Skeleton design='line' size='m' width='71px'></Skeleton>
            <Skeleton design='line' size='m' width='320px'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
        </Flex>
        <Flex gap='s3'>
            <Skeleton design='square' size='m'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
            <Skeleton design='line' size='m' width='71px'></Skeleton>
            <Skeleton design='line' size='m' width='320px'></Skeleton>
            <Skeleton design='line' size='m' width='269.5px'></Skeleton>
        </Flex>
    </Flex>
```

##### Сборка карточек

```
    <Flex direction={'column'} gap='s8'>
        <Flex>
            <Skeleton design='line' width='769px'></Skeleton>
        </Flex>
        <Flex gap='s8'>
            <Flex gap='s4' direction={'column'}>
                <Flex gap='s4'>
                    <Skeleton design='square' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' width='240px' size='s'></Skeleton>
                        <Skeleton design='line' width='173px' size='s'></Skeleton>
                    </Flex>
                </Flex>
                <Skeleton design='block' width='300px' height='160px'></Skeleton>
            </Flex>
            <Flex gap='s4' direction={'column'}>
                <Flex gap='s4'>
                    <Skeleton design='square' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' width='240px' size='s'></Skeleton>
                        <Skeleton design='line' width='173px' size='s'></Skeleton>
                    </Flex>
                </Flex>
                <Skeleton design='block' width='300px' height='160px'></Skeleton>
            </Flex>
            <Flex gap='s4' direction={'column'}>
                <Flex gap='s4'>
                    <Skeleton design='square' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' width='240px' size='s'></Skeleton>
                        <Skeleton design='line' width='173px' size='s'></Skeleton>
                    </Flex>
                </Flex>
                <Skeleton design='block' width='300px' height='160px'></Skeleton>
            </Flex>
        </Flex>
        <Flex gap='s2'>
            <Skeleton design='line' width='190px' size='l'></Skeleton>
            <Skeleton design='line' width='190px' size='l'></Skeleton>
        </Flex>
    </Flex>
```