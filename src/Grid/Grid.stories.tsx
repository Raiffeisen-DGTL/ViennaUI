import React from 'react';
import { Story, Meta } from 'storybook';
import { Grid } from './Grid';
import { GridDemo, GridTallDemo } from './Grid.styles';

export default {
    title: 'Development/Grid',
    component: Grid.Row,
} as Meta;

type GridProps = typeof Grid;

export const Overview: Story<GridProps> = (args) => {
    return (
        <>
            <Grid.Row {...args}>
                <Grid.Col size={2}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col size={2}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col size={2}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
            </Grid.Row>
        </>
    );
};
export const Offset: Story<GridProps> = (args) => {
    return (
        <>
            <Grid.Row {...args}>
                <Grid.Col offset={11} size={1}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col offset={10} size={2}>
                    <GridDemo>2</GridDemo>
                </Grid.Col>
                <Grid.Col offset={9} size={3}>
                    <GridDemo>3</GridDemo>
                </Grid.Col>
                <Grid.Col offset={8} size={4}>
                    <GridDemo>4</GridDemo>
                </Grid.Col>
                <Grid.Col offset={7} size={5}>
                    <GridDemo>5</GridDemo>
                </Grid.Col>
                <Grid.Col offset={6} size={6}>
                    <GridDemo>6</GridDemo>
                </Grid.Col>
                <Grid.Col offset={5} size={7}>
                    <GridDemo>7</GridDemo>
                </Grid.Col>
                <Grid.Col offset={4} size={8}>
                    <GridDemo>8</GridDemo>
                </Grid.Col>
                <Grid.Col offset={3} size={9}>
                    <GridDemo>9</GridDemo>
                </Grid.Col>
                <Grid.Col offset={2} size={10}>
                    <GridDemo>10</GridDemo>
                </Grid.Col>
                <Grid.Col offset={1} size={11}>
                    <GridDemo>11</GridDemo>
                </Grid.Col>
            </Grid.Row>
        </>
    );
};

Offset.storyName = 'С отступами';
export const Valign: Story<GridProps> = (args) => {
    return (
        <>
            <Grid.Row {...args}>
                <Grid.Col size={6}>
                    <GridTallDemo>Tall column</GridTallDemo>
                </Grid.Col>
                <Grid.Col size={6}>
                    <GridDemo>2</GridDemo>
                </Grid.Col>
            </Grid.Row>
        </>
    );
};
Valign.storyName = 'Выравнивание колонок по вертикали';

export const OrderedColumns: Story<GridProps> = () => {
    return (
        <>
            <Grid.Row>
                <Grid.Col order={1} size={6}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col order={2} size={6}>
                    <GridDemo>2</GridDemo>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col order={2} size={6}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col order={1} size={6}>
                    <GridDemo>2</GridDemo>
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col order={{ xs: 1, l: 2 }} size={6}>
                    <GridDemo>1</GridDemo>
                </Grid.Col>
                <Grid.Col order={{ xs: 2, l: 1 }} size={6}>
                    <GridDemo>2</GridDemo>
                </Grid.Col>
            </Grid.Row>
        </>
    );
};
OrderedColumns.storyName = 'Упорядоченные колонки';
