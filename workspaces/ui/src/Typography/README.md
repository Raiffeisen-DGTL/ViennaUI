# Typography

Компонент для отображения текста. Cписок компонентов:

-   Компоненты `Heading`, `H1`, `H2`, `H3`, `H4` и `H5` используются для заголовков
-   Компоненты `Text`, `P` и `Span` используются для текстов

## Импорт

```
import { Heading, H1, H2, H3, H4, H5, Text, P, Span } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | "m" |
| color | "brand-accent" \| "brand-white" \| "brand-primary" \| "geneva100" \| "moscow100" \| "osaka100" \| "seattle01" \| "seattle05" \| "seattle10" \| "seattle30" \| "seattle60" \| "seattle100" \| "seattle120" \| "seattle140" \| "currentColor" \| undefined | "brand-primary" |
| margin | "xs" \| "s" \| "m" \| "l" \| "xl" \| "none" \| "xxs" \| "xxl" \| undefined | false |
| uppercase | boolean \| undefined | false | Флаг, управляющий написанием контента заглавными буквами |

# Заголовки

##### Компоненты `Heading`, `H1`, `H2`, `H3`, `H4`, `H5`

## Использование

```
<Heading>Условия обработки персональных данных</Heading>
<H1>Условия обработки персональных данных</H1>
<H2>Условия обработки персональных данных</H2>
<H3>Условия обработки персональных данных</H3>
<H4>Условия обработки персональных данных</H4>
<H5>Условия обработки персональных данных</H5>
```

## Цвет

##### Свойство `color`

Свойство `color` имеет значения `brand-accent`, `brand-white`, `brand-primary`, `geneva100`, `moscow100`, `osaka100`, `seattle01`, `seattle05`, `seattle10`, `seattle20`, `seattle40`, `seattle60`, `seattle80`, `seattle90`.

```
<H1 color='brand-accent'>Условия обработки персональных данных</H1>
```

#### Цвет по умолчанию

##### Свойство `color='currentColor'`

Так же свойство `color` поддерживает значение `currentColor`, которое позволяет установить значение цвета типографики в одноименное значение.

```
<div style={{ color: 'steelblue' }}>
    <H1 color='currentColor'>Условия обработки персональных данных</H1>
</div>
```

## Отступы

##### Свойство `margin`

Компоненты `Heading`, `H1`, `H2`, `H3`, `H4` и `H5` не имеет отступов по-умолчанию. Сейчас можно вручную задавать отступы через свойство `margin`, которое имеет размеры `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```
<H1 margin='xl'>Условия обработки персональных данных</H1>
```

# Текст

##### Компоненты `Text`, `P`, `Span`

## Использование

Компоненту `Text` по-умолчанию задан тип `span` и размер `m`.

```
<Text>
    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
    «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
</Text>
<P>
    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
    «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
</P>
<Span>
    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
    «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
</Span>
```

## Цвет

##### Свойство `color`

Свойство `color` имеет значения `brand-accent`, `brand-white`, `brand-primary`, `geneva100`, `moscow100`, `osaka100`, `seattle01`, `seattle05`, `seattle10`, `seattle30`, `seattle60`, `seattle100`, `seattle120`, `seattle140`.

```
<P>
    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
    «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
</P>
```

#### Цвет по умолчанию

##### Свойство `color='currentColor'`

Так же свойство `color` поддерживает значение `currentColor`, которое позволяет установить значение цвета типографики в одноименное значение.

```
<div style={{ color: 'steelblue' }}>
    <Span color='currentColor'>
        Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
        «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
    </Span>
</div>
```

## Отступы

##### Свойство `margin`

Компоненты `Text`, `P` и `Span` не имеет отступов по-умолчанию. Сейчас можно вручную задавать отступы через свойство `margin`, которое имеет размеры `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`.

```
<P size='xxl' margin='xxl'>
    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
    «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
</P>
```
