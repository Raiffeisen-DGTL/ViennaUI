# UserProfile

Компонент для визуальной идентификации пользователя и компаний.

## Импорт

```
import { UserProfile } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLAnchorElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop        | Type                            | Default | Description                          |
| ----------- | ------------------------------- | ------- | ------------------------------------ |
| size        | ResponsiveProp<'xs' \| 's' \| 'm', B extends void ? Breakpoints : B> \| undefined |    |
| Item        | FC<Props<Breakpoints>> \| undefined             |    |                             |
| description | string \| undefined             |   | Подзаголовок                         |
| photo       | string \| undefined             |    | URL изображения                      |
| to          | string \| undefined             |    | URL ресурса для перехода на страницу |
| align       | "left" \| "right" \| undefined  |    | Выравнивание текста и изображения    |

## HTMLAttributes 👇


| Prop        | Type                            | Default | Description                          |
| ----------- | ------------------------------- | ------- | ------------------------------------ |
| name        | string \| undefined |


## Использование

Используется в разных компонентах от шапки до карточек. Компонент состоит из родительского компонента `UserProfile` и дочернего `UserProfile.Item`. `UserProfile.Item` необходим в тех случаях, если при клике на родительский компонент нужно отобразить меню.


```
    <UserProfile
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```

## Внешний вид

Используется в разных компонентах от шапки до карточек. Компонент может использоваться только с аватаром, без текстового описания.

```
    <UserProfile
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```

#### Без фотографии

Если у аватара нет или не загрузилась фотография, то вместо нее используется компонент `RoundIcon`. В таком случае символ берется с первой буквы имени пользователя или используется иконка.

```
    <UserProfile name='Super User Name' description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile name='Super User Name'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```

#### Выравнивание справа

В некоторых случаях, может пригодится выравнивание справа через свойство `align`.

```
    <UserProfile align='right' name='Super User Name' description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile align='right' name='Super User Name'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile align='right'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```

#### Профиль как ссылка

```
    <UserProfile to='https://home.raiffeisen.ru' name='Super User Name' description='Some Description' />
    <UserProfile to='https://home.raiffeisen.ru' name='Super User Name' />
    <UserProfile to='https://home.raiffeisen.ru' />
```

#### Размеры

Компонент поддерживает размеры `xs`, `s` и `m` (по-умолчанию).

```
    <UserProfile
        size='m'
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile
        size='s'
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
    <UserProfile
        size='xs'
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```

#### Адаптив

Для компонента UserProfile, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    <UserProfile
        photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
        name='Super User Name'
        size={{ belowS: 'xs', s: 's', m: 'm' }}
        description='Some Description'>
        <UserProfile.Item>Профиль</UserProfile.Item>
        <UserProfile.Item>Товары</UserProfile.Item>
        <UserProfile.Item>Предложения</UserProfile.Item>
        <UserProfile.Item>Выход</UserProfile.Item>
    </UserProfile>
```