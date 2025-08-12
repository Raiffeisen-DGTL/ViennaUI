# Divider

## Импорт

```
import { Divider } from 'vienna-ui';
``` 

## DividerProps

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'s' \| 'm'` | — |  |
| color | `string` | — |  |
| orientation | `'horizontal' \| 'vertical'` | — |  |


# Divider

Стилизированный элемент &lt;hr&gt;.

Помогает разделить группы связанных элементов или разбить плотный контент.

Однако его не следует использовать, если элементы можно разделить обычным отступом —
злоупотребление разделителями приведет к тому, что они потеряют свою ценность и создадут ненужный визуальный шум.




```
    {() => {
        return <Divider />;
    }}
```

## Внешний вид

Имеет два размера: s и m.

Заполняет всю ширину контентной области.

В divider можно передать любой цвет, однако старайтесь придерживаться целевых решений,
это цвета `seattle10` и `seattle30`

```
    {() => {
        return(
            <div style={{ width: "100%"}}>
                <Divider size={'s'} />
                <Divider size={'m'} />
            </div>
        )
    }}
```

### Вертикальный Divider

Может быть уместен, чтобы разорвать ненужную визуальную сязь между элементами интерфейса.

```
    {() => {
        return(
            <div style={{ width: "100%", display: "flex", height: "100px"}}>
              <P> S: 1px Seattle10 </P>
                <Divider size={'s'} orientation={'vertical'} />
              <P>M: 2px Seattle10 </P>
                <Divider size={'m'} orientation={'vertical'} />
            </div>
        )
    }}
```

### Цвет

За цвет divider отвечает свойство `color` (имеет тип string)

```
    {() => {
        return <Divider color="#FEE600" />;
    }}
```

## Ориентация

За ориентацию отвечает свойство `orientation`, его значение по умолчанию 'horizontal'.

### Горизонтальный divider
```

    {() => {
        return(
            <div>
                    <Groups>
                        <IconContainer size="s" color="sochi10">
                            <ManPersonIcon />
                        </IconContainer>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h5 style={{margin: 0}} > Твердислав Николаевич Пьянка</h5>
                            <P  color='seattle100'> Администратор</P>
                        </div>
                    </Groups>
                    <Divider />
                     <Groups>
                        <IconContainer size="s" color="sochi10">
                            <ManPersonIcon />
                        </IconContainer>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h5 style={{margin: 0}}> Анатолий Петрович Непонятых</h5>
                            <P  color='seattle100'> Оператор </P>
                         </div>
                    </Groups>
            </div>
        )
    }}
```

### Вертикальный divider

```
    {() => {
        return(
            <div>
                <h4>Общая оценка практик</h4>
                <div style={{ display: "flex", width: "400px"}}>
                    <div>
                        <Groups><IconContainer size='s' color="miami10"><CheckmarkIcon/></IconContainer> <P>TBD</P></Groups>
                        <Groups><IconContainer size='s' color="seattle10"><InProgressIcon/></IconContainer><P>Autotests</P> </Groups>
                        <Groups><IconContainer size='s' color="seattle10"><InProgressIcon/></IconContainer> <P>DR-tests</P> </Groups>
                    </div>
                    <Divider size={'s'} orientation={'vertical'} />
                    <div>
                        <Groups> <IconContainer size='s' color="miami10"><CheckmarkIcon/></IconContainer> <P>Code review</P> </Groups>
                        <Groups> <IconContainer size='s' color="miami10"><CheckmarkIcon/></IconContainer>  <P>Monitoring</P> </Groups>
                        <Groups> <IconContainer size='s' color="miami10"><CheckmarkIcon/></IconContainer>  <P>Logging</P>  </Groups>
                    </div>
                </div>
                </div>
        )
    }}
```