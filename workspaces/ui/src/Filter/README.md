# Filter

Компонент для отображения значений фильтров

## Импорт

```
import { Filter } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop   | Type                              | Default      | Description   |
| ------ | --------------------------------- | ------------ | ------------- |
| design | 'primary' \| 'ghost' \| undefined | 'primary'    | Дизайн        |
| size   | 'm' \| undefined                  | 'm'          | Размеры       |
| align  | 'horizontal' \| 'vertical'        | 'horizontal' | Выравниевание |

## Свойства элемента / Filter Item

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | 'primary' \| 'ghost' \| undefined | 'primary' | Дизайн |
| size | 'm' \| undefined | 'm' | Размеры |
| onDelete | (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent) => void | false | Обработчик удаления |
| maxWidth | number \| undefined | false | Максимальная ширина |
| tabIndex | number \| undefined | false | Порядок табуляции |
| tabIndex | boolean \| undefined | false | Системное свойство для подсветки при табуляции |

Свойства наследуются от GroupsProps компонента 'Groups'

## Использование

Компонент состоит из родительского контейнера `Filter` и дочерних элементов `Filter.Item`.

```
{() => {
   const [state, setState] = React.useState({ a: true, b: true, c: true });
   return (
       <Groups>
           <Button design='accent' onClick={() => setState({ a: true, b: true, c: true })}>
               Reset
           </Button>
           <Filter>
               {state.a && (
                   <Filter.Item onDelete={() => setState((old) => ({ ...old, ...{ a: false } }))}>Пол</Filter.Item>
               )}
               {state.b && (
                   <Filter.Item maxWidth={100} onDelete={() => setState((old) => ({ ...old, ...{ b: false } }))}>
                       Рост очень высокий
                   </Filter.Item>
               )}
               {state.c && (
                   <Filter.Item onDelete={() => setState((old) => ({ ...old, ...{ c: false } }))}>Вес</Filter.Item>
               )}
           </Filter>
       </Groups>
   );
}}
```
