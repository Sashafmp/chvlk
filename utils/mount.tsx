
import { ThemeProvider } from 'emotion-theming';
import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import theme from '../src/themes/default';

configure({ adapter: new ReactSixteenAdapter() });

export default (tree: JSX.Element): any =>
  mount(
    <ThemeProvider theme={theme}>
      {tree}
    </ThemeProvider>
  );
