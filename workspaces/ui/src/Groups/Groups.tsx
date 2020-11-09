import React, { HTMLAttributes } from 'react';
import { Box, Item } from './Groups.styles';

export interface GroupsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    children?: React.ReactNode;
    design?: 'horizontal' | 'vertical';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    height?: 'full' | 'auto';
    alignItems?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'stretch'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'self-start'
        | 'self-end'
        | 'baseline';
    justifyContent?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around';
    clean?: boolean;
}

export const Groups: React.FC<GroupsProps> = (props): JSX.Element => {
    const { children, design, size, height, clean = false, ...attrs } = props;
    const items = React.Children.toArray(children);

    const list = clean
        ? items
              .reduce<React.ReactNode[]>((result, item: any) => {
                  if (item.type === React.Fragment) {
                      if (item.props.children) {
                          result.push(...React.Children.toArray(item.props.children));
                      }
                  } else {
                      result.push(item);
                  }

                  return result;
              }, [])
              .map((item: any, index) => {
                  return React.cloneElement(item, { key: `.$.${index}` });
              })
        : items;

    return (
        <Box {...attrs} design={design} size={size} xheight={height}>
            {React.Children.map(list, (child: React.ReactNode) => (
                <Item design={design} size={size}>
                    {child}
                </Item>
            ))}
        </Box>
    );
};

Groups.defaultProps = {
    design: 'horizontal',
    size: 'm',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    clean: false,
};

Groups.displayName = 'Groups';
export default Groups;
