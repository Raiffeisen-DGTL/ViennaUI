# Bankcard
## Импорт

```
import { Bankcard } from 'vienna-ui';
```

# Bankcard

Банковские карточки, которым можно выбрать любой размер.

```
    <Bankcard type={'cashbackAll'} width={250} />
```



## Внешний вид

Компонент позволяет пользователям легко считать, о какой карте идет речь в вашем интерфейсе.

```
    <Bankcard type={'cashbackAll'} width={250} />
```

## Размеры

Можно задать любой размер, высота рассчитается автоматически в зависимости от ширины.

```
    <Bankcard width={300} type={'cashbackAll'} />
```

## Состояния

Компонент подсвечивается при наведении мышкой и выделяется при помощи tab, также есть неактивное (disabled) состояние.

```
    <Bankcard disabled type={'cashbackAll'} width={250} />
```

## Дизайн

Дизайн из брендбука Райффайзен банка

##### Дебетовые

Кэшбек-карта "МИР"

```
    <Bankcard type={'cashbackMir'} width={250} />
```

Дебетовая карта "МИР"

```
    <Bankcard type={'mir'} width={250} />
```

Детская дебетовая карта

```
    <Bankcard type={'childCard'} width={250} />
```

##### Кредитные

Gold Package

```
    <Bankcard type={'goldPackage'} width={250} />
```

110 дней

```
    <Bankcard type={'days110'} width={250} />
```

Кэшбек на всё

```
    <Bankcard type={'cashbackAll'} width={250} />
```

##### SME

Карта "Бизнес 24/7" Оптимальная

```
    <Bankcard type={'business24'} width={250} />
```

Карта "Бизнес 24/7" Суперноль. Корпоративная карта

```
    <Bankcard type={'business24Super0'} width={250} />
```

Командировки 24/7

```
    <Bankcard type={'travel24'} width={250} />
```

##### Архивные

Зарплатная карта Plus Gold

```
    <Bankcard type={'salaryPlusGold'} width={250} />
```

Золотая карта UnionPay

```
    <Bankcard type={'goldUnionPay'} width={250} />
```

Visa Classic Travel

```
    <Bankcard type={'visaClassicTravel'} width={250} />
```

#### Custom

Можно задать любое изображение карточки, передав соответствующую ссылку в проп src.

```
    <Bankcard
        src={
            'https://cdn-rf.raiffeisen.ru/ds/img/icon-container/mock-image.jpg'
        }
        width={250}
    />
```

#### Icon

Также в качестве изображения можно задать любую иконку из @fcc/ui

```
    <Bankcard icon={<RoubleIcon />} width={250} />
```