# Body

Используется как основной контейнер в приложении для установки типографики, шрифтов **Navigo** и **ALS Hauss**. Можно загружать локальные шрифты, а не с сайта, если прокинуть в Body проп localFonts. Также компонент содержит нормализацию основных стилей.

⚠️ Доступные начертания CSS свойства `font-weight` для **ALS Hauss** — `normal`, `500` и `bold`, для **Navigo** — `normal`.

## Импорт

```
import { Body } from 'vienna-ui';
```

## Использование

```
<Body>Content</Body>
```

## Шрифты

Компонент `Body` содержит исходные файлы шрифтов в директории `vienna.ui/src/Body/resources`. Вы можете подключить шрифты вручную в вашем проекте и не использовать компонент `Body`.


###### Шрифты ALS_Hauss

```
vienna-ui/src/Body/resources/ALS_Hauss-Bold.eot
vienna-ui/src/Body/resources/ALS_Hauss-Bold.woff
vienna-ui/src/Body/resources/ALS_Hauss-Bold.woff2
vienna-ui/src/Body/resources/ALS_Hauss-Medium.eot
vienna-ui/src/Body/resources/ALS_Hauss-Medium.woff
vienna-ui/src/Body/resources/ALS_Hauss-Medium.woff2
vienna-ui/src/Body/resources/ALS_Hauss-Regular.eot
vienna-ui/src/Body/resources/ALS_Hauss-Regular.woff
vienna-ui/src/Body/resources/ALS_Hauss-Regular.woff2
```

###### Шрифты Navigo

```
vienna-ui/src/Body/resources/Navigo-Bold-Web.eot
vienna-ui/src/Body/resources/Navigo-Bold-Web.woff
vienna-ui/src/Body/resources/Navigo-Bold-Web.woff2
```
