# Badge

For displaying statuses and labels. It's actual for tables and lists.


## Imports

```
import { Badge } from 'vienna-ui';
```

## Props

Prop | Type | Default | Description
--- | --- | --- | ---
color | "paris10" \| "paris30" \| "miami10" \| "miami30" \| "dubai10" \| "dubai30" \| "nice10" \| "nice30" \| "seattle05" \| "seattle10" \| undefined | false |
size | "s" \| "m" \| "l" \| undefined | 'm' | Available sizes
grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| undefined | |
forwardedRef | any |  | Reference on element
clickable | boolean \| undefined | false | Flag controls opportunity of clicking on component

## Usage

```jsx harmony
<Badge>Badge text</Badge>
```

## Usage with Icon

Badge can be used with any content such as Icon.

```jsx
<Badge color='paris10'>
    <Clip size='s' /> Badge text
</Badge>
```

## Sizes

Badge has base sizes: `s`, `m` (default) or `l`

## Limiting by width

Grid property is used for setting max width.

```jsx
<Badge size='s' grid={1}>
    Badge text
</Badge>
```
