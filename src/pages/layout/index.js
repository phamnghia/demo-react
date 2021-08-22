import { Pane } from 'evergreen-ui';

import Header from './components/header'
import Sidebar from './components/sidebar';

function MainLayout(props) {
  return (
    <Pane className="w-full">
      <Sidebar />

      <Pane className="main-content">
        <Header />

        <Pane className="view-content px-3">
          {props.children}
        </Pane>
      </Pane>
    </Pane>
  );
}

export default MainLayout;
