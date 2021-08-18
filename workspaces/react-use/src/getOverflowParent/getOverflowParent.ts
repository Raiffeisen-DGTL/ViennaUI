const getParents = (pNode, parents) => {
    if (pNode.parentNode === null) {
        return parents;
    }

    return getParents(pNode.parentNode, parents.concat([pNode]));
};

const style = (pNode, prop) => getComputedStyle(pNode, null).getPropertyValue(prop);
const overflow = (pNode) => style(pNode, 'overflow') + style(pNode, 'overflow-y') + style(pNode, 'overflow-x');
const scroll = (pNode) => /(hidden)/.test(overflow(pNode));

export const getOverflowParent = (node, getAll?: boolean): any => {
    /* eslint-disable consistent-return */
    const scrollParent = (pNode) => {
        if (!(pNode instanceof HTMLElement || pNode instanceof SVGElement)) {
            return;
        }

        const parents = getParents(pNode.parentNode, []);

        for (const parent of parents) {
            if (scroll(parent)) {
                return parent;
            }
        }

        return document?.scrollingElement ?? document?.documentElement;
    };

    if (!getAll) {
        return scrollParent(node);
        /* eslint-enable consistent-return */
    }

    const result: any[] = [];
    let elem = node;
    do {
        elem = scrollParent(elem);
        if (elem) {
            result.push(elem);
        }
    } while (elem && elem !== document?.documentElement);

    return result;
};
