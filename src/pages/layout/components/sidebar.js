import { Pane } from 'evergreen-ui';
import AppContext from '../../../context';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <AppContext.Consumer>
      {(context) => (
        <Pane flexDirection="column" className="sidebar-wrapper">
          <Pane display="flex" className="sidebar-header px-3 py-2">
            <Pane className="logo flex-grow">LogoImg</Pane>
            <Pane className="menu-icon">
              Menu
            </Pane>
          </Pane>

          <Pane display="flex" flexDirection="column" className="px-3 py-2">
            <Link to="/lead">
              <Pane className={`p-2 rounded-md cursor-pointer mb-1 hover:bg-purple-100 ${context.activeMenu === 'lead' ? 'bg-purple-200': ''}`}>
                Quản lý cơ hội
              </Pane>
            </Link>

            <Link to="/processing">
              <Pane className={`p-2 rounded-md cursor-pointer mb-1 hover:bg-purple-100 ${context.activeMenu === 'processing' ? 'bg-purple-200': ''}`}>
                Xử lý cơ hội
              </Pane>
            </Link>
            
            <Link to="/">
              <Pane className={`p-2 rounded-md cursor-pointer mb-1 hover:bg-purple-100 ${context.activeMenu === 'order' ? 'bg-purple-200': ''}`}>
                Phiếu khám
              </Pane>
            </Link>

            <Link to="/">
              <Pane className={`p-2 rounded-md cursor-pointer mb-1 hover:bg-purple-100 ${context.activeMenu === 'service' ? 'bg-purple-200': ''}`}>
                Dịch vụ
              </Pane>
            </Link>
          </Pane>
        </Pane>
      )}
    </AppContext.Consumer>
  );
}

export default Sidebar;
