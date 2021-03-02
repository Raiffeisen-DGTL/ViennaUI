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
| size        | "xs" \| "s" \| "m" \| undefined | false   |
| name        | string \| undefined             | false   | Заголовок                            |
| description | string \| undefined             | false   | Подзаголовок                         |
| photo       | string \| undefined             | false   | URL изображения                      |
| to          | string \| undefined             | false   | URL ресурса для перехода на страницу |
| align       | "left" \| "right" \| undefined  | false   | Выравнивание текста и изображения    |

## Использование

Используется в разных компонентах от шапки до карточек. Компонент состоит из родительского компонента `UserProfile` и дочернего `UserProfile.Item`. `UserProfile.Item` необходим в тех случаях, если при клике на родительский компонент нужно отобразить меню.

```
<UserProfile
    photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
    name='Super User Name'
    description='Some Description'
>
    <UserProfile.Item>Профиль</UserProfile.Item>
    <UserProfile.Item>Товары</UserProfile.Item>
    <UserProfile.Item>Предложения</UserProfile.Item>
    <UserProfile.Item>Выход</UserProfile.Item>
</UserProfile>
```

Компонент может использоваться только с аватаром, без текстового описания. Если у аватара нет или не загрузилась фотография, то вместо нее используется компонент `RoundIcon`. В таком случае символ берется с первой буквы имени пользователя или используется иконка.

```
<UserProfile name='Super User Name' description='Some Description'>
    <UserProfile.Item>Профиль</UserProfile.Item>
    <UserProfile.Item>Товары</UserProfile.Item>
    <UserProfile.Item>Предложения</UserProfile.Item>
    <UserProfile.Item>Выход</UserProfile.Item>
</UserProfile>
```

## Заголовок

##### Свойство `name`

Основной текст (имя/наименование) задается через свойство `name`.

```
<UserProfile name='Super User Name' />
```

## Подзаголовок

##### Свойство `description`

Описание/подзаголовок задается через свойство `description`.

```
<UserProfile name='Super User Name' description='Some Description' />
```

## Выравнивание

##### Свойство `align`

В некоторых случаях, может пригодится выравнивание справа через свойство `align`.

```
<UserProfile align='right' name='Super User Name' description='Some Description'>
    <UserProfile.Item>Профиль</UserProfile.Item>
    <UserProfile.Item>Товары</UserProfile.Item>
    <UserProfile.Item>Предложения</UserProfile.Item>
    <UserProfile.Item>Выход</UserProfile.Item>
</UserProfile>
```

## Профиль как ссылка

##### Свойство `to`

```
<UserProfile to='https://home.raiffeisen.ru' name='Super User Name' description='Some Description' />
```

## Размеры

##### Свойство `size`

Компонент поддерживает размеры `xs`, `s` и `m` (по-умолчанию).
