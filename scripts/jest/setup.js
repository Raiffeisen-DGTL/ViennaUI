import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getCSS } from 'jest-styled-components/src/utils';
import css from 'css'; // from jest-styled-components

// Make Enzyme functions available in all test files without importing.
Enzyme.configure({ adapter: new Adapter() });

// Snapshot API
global.snapshot = {
    shallow: Enzyme.shallow, // shallow support all lifecycle
    render: Enzyme.render, // render only calls render but renders all children
    mount: Enzyme.mount, // mount support all lifecycle
};
