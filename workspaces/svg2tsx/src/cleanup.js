const SVGO = require('svgo');

/**
 * Create instance SVGO
 */
const svgo = new SVGO({
    full: true,
    plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { removeViewBox: false },
        { cleanupEnableBackground: true },
        { convertStyleToAttrs: true },
        { convertColors: true },
        { convertPathData: true },
        { convertTransform: true },
        { removeUnknownsAndDefaults: true },
        { removeNonInheritableGroupAttrs: true },
        { removeUselessStrokeAndFill: true },
        { removeUnusedNS: true },
        { cleanupIDs: true },
        { cleanupNumericValues: true },
        { cleanupListOfValues: true },
        { moveElemsAttrsToGroup: true },
        { moveGroupAttrsToElems: true },
        { collapseGroups: true },
        { removeRasterImages: true },
        { mergePaths: true },
        { convertShapeToPath: true },
        { convertEllipseToCircle: true },
        { sortAttrs: true },
        { removeDimensions: false },
        { sortAttrs: true },
        { sortDefsChildren: true },
        { reusePaths: true },
        { minifyStyles: true },
        { inlineStyles: true },
        { removeXMLNS: false },
    ],
});

/**
 * Clean up SVG by content
 *
 * @param {string} svg SVG string
 * @returns {string} Returns
 */
module.exports = async function cleaner(svg) {
    try {
        return await svgo.optimize(svg);
    } catch (error) {
        return error;
    }
};
