import React, { ReactNode, isValidElement, FC, Fragment, Children, cloneElement } from 'react';
import { Box, Item, PropsBox } from './Groups.styles';
import { BoxStyled } from '../Utils/styled';

export interface GroupsProps extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox['$design'];
    size?: PropsBox['$size'];
    height?: PropsBox['$height'];
    alignItems?: PropsBox['$alignItems'];
    justifyContent?: PropsBox['$justifyContent'];
    clean?: boolean;
}

export const Groups: FC<GroupsProps> = ({
    children,
    design = 'horizontal',
    size = 'm',
    height = 'auto',
    clean = false,
    alignItems = 'center',
    justifyContent = 'flex-start',
    ...attrs
}) => {
    const items = Children.toArray(children);

    const list = clean
        ? items
              .reduce<ReactNode[]>((result, item: ReactNode) => {
                  if (isValidElement(item)) {
                      if (item.type === Fragment) {
                          if (item.props.children) {
                              result.push(...Children.toArray(item.props.children));
                          }
                      } else {
                          result.push(item);
                      }
                  }

                  return result;
              }, [])
              .map((item: ReactNode, index) => {
                  if (isValidElement(item)) {
                      return cloneElement(item, { key: `.$.${index}` });
                  }

                  return null;
              })
        : items;

    return (
        <Box
            {...(attrs as {})}
            $design={design}
            $size={size}
            $height={height}
            $alignItems={alignItems}
            $justifyContent={justifyContent}>
            {Children.map(list, (child: ReactNode) =>
                child ? (
                    <Item $design={design} $size={size}>
                        {child}
                    </Item>
                ) : null
            )}
        </Box>
    );
};

Groups.displayName = 'Groups';
