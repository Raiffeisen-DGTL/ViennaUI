## Содержание

1. [Миграция доки для компонентов](#миграция-доки-для-компонентов)
    * [Актуализировать `stories`](#актуализировать-stories)
    * [Скопировать `.mdx`-файл](#скопировать-mdx-файл)
    * [Заменить компоненты `Meta` и `Playground` в `.mdx`-файле](#заменить-компоненты-meta-и-playground-в-mdx-файле)
2. [Миграция TSX-страниц](#миграция-tsx-страниц)
3. [Миграция MDX-страниц](#миграция-mdx-страниц)

## Миграция доки для компонентов


Все, что относится к новой витрине на `Storybook`, находится в `src/showcase`. Для перевода `.mdx`-документации из `docz` в `storybook` необходимо:

### Актуализировать `stories`

### Перевести стори на новую типизацию

* Импортировать и использовать `StoryObj` и `Meta` из `@storybook/react`. К `StoryObj` необходимо добавить пересечение с интерфейсом `ScopedStory` для типизации `scope`
    ```typescript
        type Story = StoryObj<typeof Button> & ScopedStory;
    ```
* Поменять `title` с `Development/...` на `Компоненты/...` для отображения в сайдбаре
* Расписать `argTypes` и `parameters.controls` в `Meta`. Это необходимо сделать вручную, так как Storybook по умолчанию втягивает все пропсы, в том числе нерелевантные
* Добавить поля `args` и `render` в самой `story`. Функция `render` необходима для работы `Playground`, добавьте ее даже если в `story` нет никакой логики
* Добавить `scope`. Он необходим для  работы `Playground` и хранит в себе ссылки на внешние переменные - как на сам компонент, так и на все остальное. Наиболее часто используемые переменные можно вынести в `defaultScope` и передавать к каждой `story`, расширяя при необходимости:
    
    ```typescript
        const defaultScope = {
            Button,
            Groups,
        };

        export const Overview: Story = {
            /// ...
        };

        Overview.scope = defaultScope;
    ```

    или

    ```typescript
        Overview.scope = {
            ...defaultScope,
            anyOtherScopeValue
        };
    ```


* Добавить `story` c темизацией. Укажите тэг `hidden`, чтобы `story` не появлялась в сайдбаре
    ```typescript
        export const WithTheme: Story = {
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

        WithTheme.scope = { ...defaultScope, ThemeProvider };
    ```
* Заалайнить `story` с примерами из документации: создать новые `story` с примерами (если требуется использовать их с `Playground`) и удалить дубли и неактуальные `story`. Существующие, но не отраженные в документации `story` так же можно добавить в `.mdx`-файл и описать
<br/>

> <br/>
> Не используйте import aliases в .stories-файлах
> 
> <br/>

<br/>

<details>
<summary>Полный пример кода</summary>

Было:

```typescript
import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { ForwardArrowRightIcon as ForwardArrowRight, ViolinIcon as Violin, AttachIcon as Attach } from 'vienna.icons';
import { Button, ButtonProps } from './Button';
import { Groups } from '../Groups';

export default {
    title: 'Development/Button',
    component: Button,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl']
        },
    }
} as Meta;

export const Overview: Story<ButtonProps> = (args) => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => setLoading((p) => !p);
    const ref = React.useRef(null);
    return (
        <Groups>
            <Button forwardedRef={ref} design='accent' loading={loading} onClick={handleClick} {...args}>
                Click me
            </Button>
        </Groups>
    );
};


```

Стало:

```typescript
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ThemeProvider } from 'vienna.ui-primitives';
import { Button } from './Button';
import { Groups } from '../Groups';
import { ScopedStory } from '../Utils';
import ButtonDocs from './Button.mdx';

type Story = StoryObj<typeof Button> & ScopedStory;

const defaultScope = {
    Button,
    Groups,
};

export default {
    title: 'Компоненты/Button',
    component: Button,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        square: {
            control: 'boolean',
        },
    },
    parameters: {
        controls: {
            include: ['design', 'size', 'grid', 'loading', 'disabled', 'square'],
        },
        docs: {
            page: ButtonDocs,
        },
    },
} as Meta;

export const Overview: Story = {
    args: {
        design: 'accent',
        children: 'Click me',
    },
    render: (args) => {
        return <Button {...args} />;
    },
};
Overview.scope = defaultScope;

export const WithTheme: Story = {
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
WithTheme.scope = { ...defaultScope, ThemeProvider };

```

 </details>

<br/>

### Скопировать `.mdx`-файл 

Копируем `.mdx`-файл с документацией компонента из `techhub` в соответствующую папку в `atlant` и подключаем его в `story`. Файл импортируется дефолтным импортом и устанавливается в `Meta` следующим образом:

```typescript
import { Meta } from '@storybook/react';
import ButtonDocs from './Button.mdx';

export default {
    title: 'Компоненты/Button',
    component: Button,
    /// ...
    parameters: {
        /// ...
        docs: {
            page: ButtonDocs,
        },
    },
} as Meta;
```

<br/>

### Заменить компоненты `Meta` и `Playground` в `.mdx`-файле

Для storybook-окружения были созданы компоненты `DocsMeta` и `Playground`, аналогичные тем, что использовались в `techhub`.

### <u>DocsMeta</u>

Является аналогом `Meta`, содержит табы и служебные HOC-и для страницы документации.

```typescript
interface DocsMeta extends React.PropsWithChildren {
    componentName: string;
    themedStory?: React.ReactElement & ScopedStory;
    controlsCanvas?: React.ReactNode;
    design?: string;
}
```

| prop    | Описание | 
| -------- | ------- | 
| `componentName`  | имя компонента по названию файла
| `themedStory` | `story` c темизацией 
| `controlsCanvas` | Storybook Canvas с историей для вкладки `Свойства` (Можно использовать `Overview`)
| `figmaLink` | ссылка на Figma


Использование в файле документации (в отличие от `Meta`, в `DocsMeta` нужно передать все тело `.mdx`-файла):

```typescript
    import { Canvas } from '@storybook/addon-docs';
    import { DocsMeta } from '../showcase/';
    import * as ButtonStories from './Button.stories';

    <DocsMeta
        componentName="Button"
        themedStory={ButtonStories.WithTheme}
        controlsCanvas={<Canvas of={ButtonStories.Overview} />}
        figmaLink="url-to-figma"
    >
        /// MDX body
    </DocsMeta>
```

### <u>Playground</u>

Является полным аналогом `Playground` из `techhub`, создает виджет с песочницей на основе переданной `story`. Для корректной работы `Playground` необходимо актуализировать `story`, которые будут в него передаваться ([подробнее](#актуализировать-stories)).

Использование в файле документации:

```typescript
    import { Playground } from '../showcase/';
    import * as ButtonStories from './Button.stories';

    <Playground>{ButtonStories.Overview}</Playground>
```

# Миграция TSX-страниц

Для миграции TSX-страницы необходимо обернуть компонент страницы в `story`, а также указать тэги `no-test` и `!autodocs`. Управление расположением страницы в сайдбаре осуществляется через поле `title` в `Meta`.

```typescript
import React from 'react';
import { Meta } from '@storybook/react';

import { Contribute as ContributePage } from './Contribute';

export default {
    title: 'Контрибьютеры',
    component: ContributePage,
    tags: ['no-test', '!autodocs'],
} as Meta;

export const Contribute = {
    render: () => <ContributePage />,
};
```

# Миграция MDX-страниц

Для добавления `.mdx`-файла в качестве отдельной страницы в Storybook достаточно положить его в `src/showcase/pages` или любую подпапку внутри. Парсер Storybook читает `.mdx`-файлы по паттерну `'../src/showcase/pages/**/*.mdx'` (см. `.storybook/main.ts`).