# Avatar

Component is for visual user identification. It's used in sort of components like Header or Card.

## Imports

```
import { Avatar } from 'vienna-ui';
```

## Props

| Prop     | Type                                           | Default | Description                                |
| -------- | ---------------------------------------------- | ------- | ------------------------------------------ |
| children | ReactNode                                      | false   | If src is unavailable, children are showed |
| size     | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | false   | Available sizes                            |
| align    | "left" \| "center" \| "right" \| undefined     | false   | Horizontally component aligning            |
| valign   | "center" \| "top" \| "bottom" \| undefined     | false   | Vertically component aligning              |

## Usage

```
<Avatar src={ImageURL} />
```

## Sizes

Avatar has base sizes: `xs`, `s`, `l`, `m` (default) & `xl`

## Usage with RoundIcon

If src isn't passed or image isn't displayed, children content is showed.

```jsx
import { Avatar } from 'vienna-ui';
import { RoundIcon } from 'vienna-ui';

<Avatar src='https://bad.url.to.avatar/avatar.png' size='xl'>
    <RoundIcon size='xl' color='nice10'>
        B
    </RoundIcon>
</Avatar>;
```
