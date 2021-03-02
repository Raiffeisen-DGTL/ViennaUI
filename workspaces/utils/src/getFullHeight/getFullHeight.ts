export const getFullHeight = (elem) => {
    let elmHeight = 0;
    let elmMargin = 0;
    if (document?.defaultView) {
        elmHeight = elem.offsetHeight;
        elmMargin =
            parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-top'), 10) +
            parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-bottom'), 10);
    }

    return elmHeight + elmMargin;
};

export default getFullHeight;
