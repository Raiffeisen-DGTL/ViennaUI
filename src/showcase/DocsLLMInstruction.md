## Содержание

1. Сейчас пришлю ряд инструкций, react, typescript, mdx, storybook, присылай ответы, code only.
2. Из кода ниже достань все содержимое компонента Playground и положи в story следующего формата: код должен помещаться в метод render() объекта story. Story должна называться Overview.
Пример:
```
<Playground preview of={Accordion}>
    <Accordion iconPosition='left'>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
        <Accordion.Item header='Accordion header'>
            <ComponentHelpers.Card.Demo style={{ width: '100%' }} />
        </Accordion.Item>
    </Accordion>
</Playground>
```

Тут следует пример кода со story:
```
export const WithTheme: StoryObj = {
    tags: ['hidden'],
    render: () => {
        const theme = {
            button: {},
        };

        return (
            <ThemeProvider theme={theme}>
                <Button design='accent'>Click me</Button>
            </ThemeProvider>
        );
    },
};
```

3. Добавь комментарии, чтобы было понятно, из какого Playground взят каждый пример.

4. Импортируй ScopedStory из Utils.
Выведи тип StoryObj. Сразу добавь тип <typeof Accordion> в переменную Story, добавь в тип Story пересечение с интерфейсом ScopedStory и используй ее во всех примерах.


5. Добавь в метаданные компонента title  Компоненты/... для отображения в сайдбаре.  Добавь argTypes и parameters.controls в Meta
Добавь в argTypes и в parameters.controls все нижеследующие свойства компонента (далее перечислить все свойства компонента).

6.  Добавь поле args, в примерах, где это необходимо.
Добавь scope. Создай объект `defaultScope` в начале файла Accordion.stories.tsx со story (сразу после переменной Story и после импортов), который будет содержать ссылку на компонент и на часто встречающиеся другие компоненты.  Присвой scope после каждого примера.
Например: ```Overview.scope = defaultScope;```

7. Добавь один пример story с темизацией, укажи тег hidden.

8. Удали дубли story.

9. Импортируй в story файл с помощью дефолтного импорта с названием компонента и с расширением .mdx.  Как в коде ниже:
```import AccordionDocs from './Accordion.mdx';```

10. Добавь файл с расширением .mdx  в метаданные `Meta` следующим образом: используй объект ```docs: {page:  }```

11. Cоздай файл с расширением `.mdx`. Импортируй дефолтным импортом все из story как ниже:
``` import * as AccordionStories from './Accordion.stories';```
- Используй в документации DocsMeta cо свойствами componentName, themedStory, controlsCanvas, figmaLink и импортируй `DocsMeta` как указано ниже:
```import { DocsMeta, Playground } from '../showcase/';```
- Свойство `controlsCanvas` сделай таким как в коде ниже:
 ```controlsCanvas={<Canvas of={AccordionStories.Overview} />}```
- Используй данную ссылку для figmaLink (тут ссылка).

12. Оберни все примеры компонентом DocsMeta. Внутрь DocsMeta в свойство themedStory добавь пример такой как ниже:
``` themedStory={AccordionStories.WithTheme}```


13. Теперь возьми содержимое каждого story из файла AccordionStories (подставить нужное) и положи его в файл документации с расширением .mdx внутрь каждого отдельного Playground следующего формата:
```<Playground>{AccordionStories.DifferentHeaders}</Playground>```
Убери метод render из примеров.
Answer:

14. Продолжай добавлять содержимое внутри файла Accordion.stories.tsx.
Достань все содержимое Playground и положи его в stories, как делал раньше.
Добавь название и описание из теххаба к каждому примеру внутри файла .mdx.
Оберни все это внутрь компонента DocsMeta.
* Добавь импорты внутри файла Accordion.mdx:
```
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    PureArgsTable,
    Stories,
    Controls,
    Source,
    Unstyled,
    Canvas,
    Meta,
    Story
} from '@storybook/addon-docs';
```