import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import {  RegisterFormikPage, FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, DynamicForm } from '../03-forms/pages';
import logo from '../logo.svg';

export const Navigation = () => (
  <Router>
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
          </li>
          <li>
            <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup-page" activeClassName="nav-active" exact>Formik Yup Page</NavLink>
          </li>
          <li>
            <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
          </li>
          <li>
            <NavLink to="/formik-abstractation" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
          </li>
          <li>
            <NavLink to="/formik-register" activeClassName="nav-active" exact>Register Formik</NavLink>
          </li>
          <li>
            <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/formik-basic">
          <FormikBasicPage />
        </Route>
        <Route path="/formik-yup-page">
          <FormikYupPage />
        </Route>
        <Route path="/formik-components">
          <FormikComponents />
        </Route>
        <Route path="/formik-abstractation">
          <FormikAbstractation />
        </Route>
        <Route path="/formik-register">
          <RegisterFormikPage />
        </Route>
        <Route path="/dynamic-form">
          <DynamicForm />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </div>
  </Router>
)

