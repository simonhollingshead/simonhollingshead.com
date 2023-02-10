module.exports = {
    multipass: true,
    js2svg: { pretty: false },
    plugins: [
        'cleanupAttrs',
        'cleanupEnableBackground',
        'cleanupIds',
        { name: 'cleanupListOfValues', params: { floatPrecision: 0, leadingZero: false } },
        { name: 'cleanupNumericValues', params: { floatPrecision: 0, leadingZero: false } },
        'collapseGroups',
        'convertColors',
        'convertEllipseToCircle',
        { name: 'convertPathData', params: { floatPrecision: 0, transformPrecision: 0, noSpaceAfterFlags: true } },
        { name: 'convertShapeToPath', params: { convertArcs: true, floatPrecision: 0 } },
        'convertStyleToAttrs',
        { name: 'convertTransform', params: { degPrecision: 0, floatPrecision: 0, transformPrecision: 0, leadingZero: false } },
        { name: 'mergePaths', params: { floatPrecision: 0, noSpaceAfterFlags: true } },
        'mergeStyles',
        'minifyStyles',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        { name: 'removeAttrs', params: { attrs: "(style|font-.*)" } },
        'removeComments',
        'removeDesc',
        'removeDoctype',
        'removeEditorsNSData',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'removeEmptyText',
        'removeHiddenElems',
        'removeMetadata',
        'removeNonInheritableGroupAttrs',
        'removeOffCanvasPaths',
        'removeStyleElement',
        'removeTitle',
        { name: 'removeUnknownsAndDefaults', params: { keepAriaAttrs: false } },
        'removeUnusedNS',
        'removeUselessDefs',
        { name: 'removeUselessStrokeAndFill',  params: { removeNone: true }},
        'removeViewBox',
        'removeXMLProcInst',
        'reusePaths',
        'sortAttrs',
        'sortDefsChildren',
    ],
}