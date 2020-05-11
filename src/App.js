import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import Home from './components/Home';

import { Layout, Menu } from 'antd';
import Icon, {
  HomeOutlined,
  EditOutlined
} from '@ant-design/icons';

// Images
import logo from './assets/images/logo.png';

const { Content, Sider } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    title: "Home",
    icon: () => <HomeOutlined />
  },
  {
    path: "/create",
    component: () => <div>Test</div>,
    title: "Create",
    icon: () => <EditOutlined />
  }
];

const App = () => {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Sider width={200} className="site-layout-background side-bar">
            <img className="logo-image" src={logo} alt="Logo" />
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map((route, i) => (
                <Menu.Item key={i}>
                  <Icon component={route.icon} />
                  <span>{route.title}</span>
                  <Link to={route.path} />
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
