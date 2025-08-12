# Highlight

## Импорт

```
import { Highlight } from 'vienna-ui';
``` 


# Highlight

Компонент для выделения текста по подстроке. `Highlight` предназначен для подсветки определенных частей текста, что полезно для поиска и выделения ключевых слов или фраз в интерфейсе. Он позволяет легко интегрировать функциональность подсветки в различные элементы интерфейса, такие как списки, текстовые блоки и другие компоненты.



```
    {() => {
        return (
            <Highlight query={'знач'}>Значение</Highlight>
        );
    }}
```

## Использование

В компоненте есть свойство `query` по которому осуществяется поиск подстроки. В качестве `children` компонент принимает `ReactNode` с любой вложенностью

```
    {() => {
        return (
            <Highlight query={'знач'}>
                <ul>
                    <li>Значение 1</li>
                    <li>Значение 2</li>
                    <li><strong>Значение 3</strong></li>
                </ul>
            </Highlight>
        );
    }}
```

#### Управление подсветкой

Для кастомного управления подсветкой используется свойство `compare`, которое имеет тип `(text: string, search: string) => { parts: string[]; compare: (text: string, search: string) => boolean; }`.

Внутри компонента мы проходим по всем его нодам и извлекаем строки, которые передаются в функцию `compare` в качестве первого аргумента. Вторым аргументом является поисковая строка.

Чтобы реализовать подсветку, мы разбиваем строку на части, которые затем сравниваются с помощью отдельной функции. Функция в свойстве `compare` должна возвращать объект с двумя свойствами: `parts` (разбитая строка типа `string[]`) и `compare` (функция для сравнения частей с поисковой строкой, тип `(text: string, search: string) => boolean`).

```
    {() => {
        const compare = (text, search) => {
            const reg = new RegExp('[0-9]');
            const searchOnlyNumbers = search.replace(new RegExp('\\\D', 'g'), '');
            let parts = [text];
            let matchedString = '';
            let searchIndex = 0;
            for (const char of text) {
                if (searchIndex >= searchOnlyNumbers.length && matchedString) {
                    parts = [matchedString, text.replace(matchedString, '')];
                    break; // Выход из цикла, если все найдено
                } else if (reg.test(char)) {
                    if (char === searchOnlyNumbers[searchIndex]) {
                        matchedString += char;
                        searchIndex++;
                    } else {
                        break; // Прерывание, если символ не совпадает
                    }
                } else {
                    matchedString += char; // Добавление символа к совпадению
                }
            }
            return { parts, compare: (part) => part === matchedString };
        };
        return (
            <Highlight query={'7999'} compare={compare}>
                <ul>
                    <li>+7 999 999 90 90</li>
                    <li>+7 (999) 999-90-90</li>
                    <li>+7 950 999-90-90</li>
                </ul>
            </Highlight>
        );
    }}
```

#### Выделение жирным шрифтом

Стандартное выделение желтым цветом можно заменить на жирный шрифт, для этого достаточно передать проп  `style?: 'accentColor' | 'boldText'` со значением `boldText`

```
    {()=>{
         return (
         <Highlight query={'знач'} style={'boldText'}>
                <ul>
                    <li>Значение 1</li>
                    <li>Значение 2</li>
                </ul>
            </Highlight>
         )
    }}
```