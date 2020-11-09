# Alarm

Short notifications. It's used for main navigation and push-notification section (bell on the header).


## Imports

```
import { Alarm } from 'vienna-ui';
```

## Props

Prop | Type | Default | Description
--- | --- | --- | ---
design | "critical" \| "warning" \| "success" \| "accent" \| "neutral" \| "disabled" \| undefined | false |
position | "relative" \| "absolute" \| undefined | false |
top | string \| undefined | false | The top property participates in specifying the vertical position of a positioned element. Depends on position property
bottom | string \| undefined | false | The bottom property participates in specifying the vertical position of a positioned element. Depends on position property
left | string \| undefined | false | The left property participates in specifying the horizontal position of a positioned element. Depends on position property
right | string \| undefined | false | The right property participates in specifying the horizontal position of a positioned element. Depends on position property

## Usage

```
<Alarm design='success' />
```
