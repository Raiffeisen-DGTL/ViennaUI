# CssGrid

Компонент для создания CSS Grid, поддерживает все css-свойства css гридов.

## Импорт

```
import { CssGrid } from 'vienna-ui';
```

## Иcпользование 
```
     <CssGrid
        height='450px'
        templateColumns='100px auto 100px'
        templateRows='50px 40% 40% 50px'
        templateAreas={[
            'header header header',
            'sidebar content toolbar',
            'sidebar content2 toolbar',
            'footer footer2 footer3',
        ]}>
        <CssGrid.Item area='header'>
           header
        </CssGrid.Item>
        <CssGrid.Item area='sidebar'>
           sidebar
        </CssGrid.Item>
        <CssGrid.Item area='content'>
          content
        </CssGrid.Item>
        <CssGrid.Item area='content2'>
          content 2
        </CssGrid.Item>
        <CssGrid.Item area='toolbar'>
           toolbar
        </CssGrid.Item>
        <CssGrid.Item area='footer'>
          footer
        </CssGrid.Item>
        <CssGrid.Item area='footer2'>
            footer 2
        </CssGrid.Item>
        <CssGrid.Item area='footer3'>
            footer 3
        </CssGrid.Item>
    </CssGrid>
```
