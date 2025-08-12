# Tour
## Импорт

```
import { Tour } from 'vienna-ui';
``` 



# Tour

Компонент используется для проведения гайда или онбординга по интрефейсу.
В качестве базового компонента выступает Popover, который может послужить заменой, если тур состоит из одного шага, и кнопки не нужны.

Используется в качестве базового компонента онбординга, разделенного на шаги. Можно использовать в качестве единственного шага.



```
    {() => {
        const [showTour, setShowTour] = React.useState(false);
        const steps = [
            {
                selector: '.start-tour',
                highlightedSelectors: [],
                type: 'accent',
                content: {
                    title: 'Начнем знакомиться?',
                    description: 'Это accent',
                },
                backButtonText: 'Позже',
                nextButtonText: 'Начнем',
            },
            {
                selector: '.fist-step',
                content: {
                    title: 'Title 1',
                    description: 'description 1',
                    image: 'https://insider-test.raiffeisen.ru/uploads/article/11320/previews/detail.jpg?1725975927224',
                },
                maskRadius: 8,
                onEnter: () => {
                    console.log('ENTER');
                },
                onLeave: () => {
                    console.log('LEAVE');
                },
            },
            {
                selector: '.second-step',
                content: {
                    title: 'Title 2',
                    description: 'description 2',
                },
                maskRadius: 8,
                position: 'right'
            },
            {
                selector: '.third-step',
                type: 'accent',
                content: {
                    title: 'Title 3',
                    description: 'description 3',
                },
                position: 'left',
            },
            {
                selector: '.fourth-step',
                content: {
                    title: 'Title 4',
                    description: 'description 4',
                },
                position: 'bottom'
            },
            {
                selector: '.fifth-step',
                content: {
                    title: 'Title 5',
                    description: 'description 5',
                },
                onLeave: () => {
                    console.log('CLOSE TOUR');
                },
                position: 'left'
            },
        ];
        return (
            <div>
                <Tour
                    isOpen={showTour}
                    steps={steps}
                    onChangeIsOpen={(val) => setShowTour(val)}
                />
                <Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
                    <Button className={'start-tour'} onClick={() => setShowTour(true)}>Show tour</Button>
                    <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
                        <Logotype className='fist-step' size='s' style={{ alignSelf: 'flex-end' }} />
                        <Logotype className='second-step' size='m' style={{ alignSelf: 'flex-start' }} />
                        <Logotype className='third-step' size='l' style={{ alignSelf: 'flex-end' }} />
                        <Logotype className='fourth-step' size='xl' style={{ alignSelf: 'flex-start' }} />
                        <Logotype className='fifth-step' size='xxl' style={{ alignSelf: 'center' }} />
                    </Flex>
                </Flex>
            </div>
        );
    }}
```

## Использование

### Разметка

Для удобства написания селекторов, необходимо задать html-атрибуты (например className) компонентам, которые будут являться шагами тура:

```
<Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
    <Button className='start-tour'>Запустить</Button>
    <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
        <Logotype className='fist-step' size='s' style={{ alignSelf: 'flex-end' }} />
        <Logotype className='second-step' size='m' style={{ alignSelf: 'flex-start' }} />
        <Logotype className='third-step' size='l' style={{ alignSelf: 'flex-end' }} />
        <Logotype className='fourth-step' size='xl' style={{ alignSelf: 'flex-start' }} />
        <Logotype className='fifth-step' size='xxl' style={{ alignSelf: 'center' }} />
    </Flex>
</Flex>
```

###  Конфигурация шагов тура

Далее необходимо описать шаги тура. Для этого создаем массив (пример можно посмотреть выше в песочнице), элементы которого имеют следующий тип:
```
interface StepType {
    selector: string | Element; // селектор к которому будет применяться Popover
    content: {
        title?: ReactNode;
        description?: ReactNode;
        image?: string;
    }; // содержимое Popover
    type?: 'primary' | 'accent'; // дизайн отображения Popover
    position?: 'top' | 'right' | 'bottom' | 'left' | 'center' | [number, number]; // поизиционирование Popover
    width?: string; // ширина Popover
    highlightedSelectors?: string[]; // селекторы, которые будут включены в highlight область
    mutationObservables?: string[]; // селекторы к которым будет применяться MutationObserver для обновления highlight области
    resizeObservables?: string[]; // селекторы к которым будет применяться ResizeObserver для обновления highlight области
    onEnter?: (clickProps: ClickProps, elem: Element | null) => void; // колбэк открытия шага
    onLeave?: (clickProps: ClickProps, elem: Element | null) => void; // колбэк закрытия шага
    nextButtonText?: string | null; // текст для кнопки "Далее" (если null, то кнопка не отображается)
    backButtonText?: string | null; // текст для кнопки "Назад" (если null, то кнопка не отображается)
    hideCross?: boolean; // скрыть крестик в Popover
    maskRadius?: number; // радиус у маски в оверлее
}

interface ClickProps {
    isOpen: boolean;
    currentStep: number;
    steps: StepType[];
    nextStep?: number | null;
}
```
### Компонент Tour

Управление туром происходит через компонент Tour

Список свойств компонента:

```
steps?: StepType[]; // конфигурация шагов тура
defaultOpen?: boolean; // открыть тур по умолчанию
startAt?: number; // начальный шаг
closeByFade?: boolean; // закрытие тура по оверлею
onChangeIsOpen?: (value: boolean) => void; // колбэк изменения показа тура
onChangeCurrentStep?: (value: number) => void; // колбэк изменения шага тура
afterOpen?: (target: Element | null) => void; // колбэк после открытия тура
beforeClose?: (target: Element | null) => void; // колбэк перед закрытием тура
onClosePopover?: () => void; // колбэк нажатия на крестик поповера
padding?: number | number[]; // отступы для popover от маски
localization?: {
   'ds.tour.skip': 'Пропустить',
   'ds.tour.next': 'Далее',
   'ds.tour.back': 'Назад',
   'ds.tour.start': 'Начать обучение',
   'ds.tour.end': 'Завершить',
   'ds.tour.step': (current, all) => `Шаг ${current} из ${all}`,
}; // локализация
maskId?: string; // идентификатор для маски в svg (overlay) нужен при пересечении идентификаторов
clipId?: string; // идентификатор для clipPath в svg (overlay) нужен при пересечении идентификаторов
```

## Пример реализации с модальным окном

```
{() => {
    const [showModal, setShowModal] = React.useState(false);
    const [showTour, setShowTour] = React.useState(false);
    const show = () => setShowTour(true);
    const steps = [
        {
            selector: '.start-tour2',
            highlightedSelectors: [],
            type: 'accent',
            content: {
                title: 'Начнем знакомиться?',
                description: 'Это accent',
            },
            backButtonText: 'Позже',
            nextButtonText: 'Начнем',
        },
        {
            selector: '.fist-step2',
            content: { title: 'Title 1', description: 'description 1', image: 'https://insider-test.raiffeisen.ru/uploads/article/11320/previews/detail.jpg?1725975927224' },
            maskRadius: 8,
            onEnter: () => console.log('ENTER'),
            onLeave: () => console.log('LEAVE'),
        },
        {
            selector: '.second-step2',
            content: { title: 'Title 2', description: 'description 2' },
            maskRadius: 8,
            position: 'right'
        },
        {
            selector: '.third-step2',
            type: 'accent',
            content: { title: 'Title 3', description: 'description 3' },
            position: 'left',
        },
        {
            selector: '.fourth-step2',
            content: { title: 'Title 4', description: 'description 4' },
            position: 'bottom',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
        {
            selector: '.modal-step',
            content: { title: 'Modal', description: 'modal description' },
            position: 'bottom',
            onLeave: () => {
                setShowTour(false);
                setShowModal(false);
            },
        },
        {
            selector: '.fifth-step2',
            content: { title: 'Title 5', description: 'description 5' },
            position: 'left',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
    ];
    return (
        <div>
            <Tour
                isOpen={showTour}
                steps={steps}
                onChangeIsOpen={(val) => setShowTour(val)}
                beforeClose={() => console.log('beforeClose')}
                afterOpen={() => console.log('afterOpen')}
            />
            <Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
                <Button className={'start-tour2'} onClick={show}>Show tour</Button>
                <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
                    <Logotype className='fist-step2' size='s' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='second-step2' size='m' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='third-step2' size='l' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='fourth-step2' size='xl' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='fifth-step2' size='xxl' style={{ alignSelf: 'center' }} />
                </Flex>
            </Flex>
            <Modal isOpen={showModal} closeByFade={false} hideCloseIcon={true} closeByEscape={false} onAfterOpen={show} onPreDispose={show}>
                <Modal.Layout className='modal-step'>
                    <Modal.Head align={'center'}>
                        <Modal.Title>Modal Header</Modal.Title>
                        <Modal.SubTitle>Subheading text</Modal.SubTitle>
                    </Modal.Head>
                    <Modal.Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Groups>
                            <Button size='l' design='outline'>
                                Button example
                            </Button>
                            <Button size='l' design='accent'>
                                Button example
                            </Button>
                        </Groups>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        </div>
    );
}}
```

## Локализация

```
    {() => {
        const [showTour, setShowTour] = React.useState(false);
        const steps = [
            {
                selector: '.start-tour3',
                highlightedSelectors: [],
                type: 'accent',
                content: {
                    title: 'Let\'s start?',
                    description: 'Это accent',
                },
            },
            {
                selector: '.fist-step3',
                content: {
                    title: 'Title 1',
                    description: 'description 1',
                    image: 'https://insider-test.raiffeisen.ru/uploads/article/11320/previews/detail.jpg?1725975927224',
                },
                maskRadius: 8,
                onEnter: () => {
                    console.log('ENTER');
                },
                onLeave: () => {
                    console.log('LEAVE');
                },
            },
            {
                selector: '.second-step3',
                content: {
                    title: 'Title 2',
                    description: 'description 2',
                },
                maskRadius: 8,
                position: 'right'
            },
            {
                selector: '.third-step3',
                type: 'accent',
                content: {
                    title: 'Title 3',
                    description: 'description 3',
                },
                position: 'left',
            },
        ];
        return (
            <div>
                <Tour
                    isOpen={showTour}
                    steps={steps}
                    localization={{
                        'ds.tour.skip': 'Skip',
                        'ds.tour.next': 'Next',
                        'ds.tour.back': 'Back',
                        'ds.tour.start': 'Start',
                        'ds.tour.end': 'Complete',
                        'ds.tour.step': (current, all) => `Step ${current} of ${all}`,
                    }}
                    onChangeIsOpen={(val) => setShowTour(val)}
                />
                <Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
                    <Button className={'start-tour3'} onClick={() => setShowTour(true)}>Show tour</Button>
                    <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
                        <Logotype className='fist-step3' size='s' style={{ alignSelf: 'flex-end' }} />
                        <Logotype className='second-step3' size='m' style={{ alignSelf: 'flex-start' }} />
                        <Logotype className='third-step3' size='l' style={{ alignSelf: 'flex-end' }} />
                    </Flex>
                </Flex>
            </div>
        );
    }}
```

## Установка data-testid

Атрибут `data-testid` можно передать для overlay, для кнопок назад-вперед, для иконки закрытия. Передается пропс  `testId?: { overlay?: string, popoverBackStepBtn?: string; popoverNextStepBtn?: string, closeIcon?: string }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultTourTestId: TourProps['testId'] = {
    overlay: 'tour_overlay',
    closeIcon: 'tour-popover_close-icon',
    popoverBackStepBtn: 'tour_back-step-button',
    popoverNextStepBtn: 'tour_next-step-button',
};
```

```
{() => {
    const [showModal, setShowModal] = React.useState(false);
    const [showTour, setShowTour] = React.useState(false);
    const show = () => setShowTour(true);
    const steps = [
        {
            selector: '.start-tour4',
            highlightedSelectors: [],
            type: 'accent',
            content: {
                title: 'Начнем знакомиться?',
                description: 'Это accent',
            },
            backButtonText: 'Позже',
            nextButtonText: 'Начнем',
        },
        {
            selector: '.fist-step4',
            content: { title: 'Title 1', description: 'description 1', image: 'https://insider-test.raiffeisen.ru/uploads/article/11320/previews/detail.jpg?1725975927224' },
            maskRadius: 8,
            onEnter: () => console.log('ENTER'),
            onLeave: () => console.log('LEAVE'),
        },
        {
            selector: '.second-step4',
            content: { title: 'Title 2', description: 'description 2' },
            maskRadius: 8,
            position: 'right'
        },
        {
            selector: '.third-step4',
            type: 'accent',
            content: { title: 'Title 3', description: 'description 3' },
            position: 'left',
        },
        {
            selector: '.fourth-step4',
            content: { title: 'Title 4', description: 'description 4' },
            position: 'bottom',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
        {
            selector: '.fifth-step4',
            content: { title: 'Title 5', description: 'description 5' },
            position: 'left',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
         {
            selector: '.fifth-step4',
            content: { title: 'Title 5', description: 'description 5' },
            position: 'left',
            onLeave: ({ nextStep }) => {
                if (nextStep === 5) {
                    setShowTour(false);
                    setShowModal(true);
                }
            },
        },
    ];
    return (
        <div>
            <Tour
                isOpen={showTour}
                steps={steps}
                testId={{ overlay: 'tour_overlay', popoverBackStepBtn: 'tour_back-step-button', popoverNextStepBtn: 'tour_next-step-button', closeIcon: 'tour-popover_close-icon' }}
                onChangeIsOpen={(val) => setShowTour(val)}
                beforeClose={() => console.log('beforeClose')}
                afterOpen={() => console.log('afterOpen')}
            />
            <Flex direction={'column'} alignItems={'flex-start'} gap={'s16'} style={{ width: '100%', padding: '24px' }}>
                <Button className={'start-tour4'} onClick={show}>Show tour</Button>
                <Flex direction={'column'} gap={'s16'} style={{ width: '100%' }}>
                    <Logotype className='fist-step4' size='s' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='second-step4' size='m' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='third-step4' size='l' style={{ alignSelf: 'flex-end' }} />
                    <Logotype className='fourth-step4' size='xl' style={{ alignSelf: 'flex-start' }} />
                    <Logotype className='fifth-step4' size='xxl' style={{ alignSelf: 'center' }} />
                </Flex>
            </Flex>
        </div>
    );
}}
```