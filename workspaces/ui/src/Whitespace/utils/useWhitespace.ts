import { WithWhitespace, WithMargin, WithPadding } from './types';
import { parseProperty } from './utils';

const marginsMap = {
    margin: 'margin',
    marginHorizontal: ['margin-left', 'margin-right'],
    marginVertical: ['margin-top', 'margin-bottom'],
    marginTop: 'margin-top',
    marginBottom: 'margin-bottom',
    marginLeft: 'margin-left',
    marginRight: 'margin-right',

    // aliases
    m: 'margin',
    mx: ['margin-left', 'margin-right'],
    my: ['margin-top', 'margin-bottom'],
    mt: 'margin-top',
    mb: 'margin-bottom',
    ml: 'margin-left',
    mr: 'margin-right',
};

const paddingsMap = {
    padding: 'padding',
    paddingHorizontal: ['padding-left', 'padding-right'],
    paddingVertical: ['padding-top', 'padding-bottom'],
    paddingTop: 'padding-top',
    paddingBottom: 'padding-bottom',
    paddingLeft: 'padding-left',
    paddingRight: 'padding-right',

    // aliases
    p: 'padding',
    px: ['padding-left', 'padding-right'],
    py: ['padding-top', 'padding-bottom'],
    pt: 'padding-top',
    pb: 'padding-bottom',
    pl: 'padding-left',
    pr: 'padding-right',
};

const useProps = (map, props) => {
    return Object.keys(map)
        .map((key) => parseProperty(map[key], props[key]))
        .filter(Boolean)
        .join('');
};

export const useMargin = (props: WithMargin) => {
    return useProps(marginsMap, props);
};

export const usePadding = (props: WithPadding) => {
    return useProps(paddingsMap, props);
};

export const useWhitespace = (props: WithWhitespace) => {
    return useMargin(props).concat(usePadding(props));
};
