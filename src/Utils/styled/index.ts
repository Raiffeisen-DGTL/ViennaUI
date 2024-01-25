import { ComponentProps, FC } from 'react';
import { ExecutionProps } from 'styled-components';

export type BoxStyled<Box extends FC<Props>, Props extends object> = ExecutionProps &
    Omit<ComponentProps<Box>, keyof Props>;
