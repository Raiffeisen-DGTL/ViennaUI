import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/dom';

// Timeoute increase for screenshot
jest.setTimeout(30000);

// Fix
// > Warning: useLayoutEffect does nothing on the server,
// > because its effect cannot be encoded into the server renderer's output format.
React.useLayoutEffect = React.useEffect;

configure({
    testIdAttribute: 'data-marker',
});
