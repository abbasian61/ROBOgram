import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './nav/navbar_container';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';
import PhotoFeedContainer from './photo_feed/photo_feed_container';
import UserProfileContainer from './user_profile/user_profile_container';
import ModalContainer from './modal/modal_container';
import PhotoDetailContainer from './photo_detail/photo_detail_container';
import EditUserContainer from './edit_user/edit_user_container';

const App = () => (
  <div>
    <ModalContainer />
    <header>
      <NavbarContainer />
    </header>

    <Switch>
      <Route exact path='/users/:id' component={ UserProfileContainer }/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/users/:id/edit" component={EditUserContainer} />
      <ProtectedRoute exact path="/photos/:id" component={PhotoDetailContainer} />
      <ProtectedRoute path="/" component={PhotoFeedContainer} />
    </Switch>


    <section className="main-footer">
      <div>
        Project by Kingsley Liao
      </div>

      <footer>
        <a href="https://github.com/kingsleyliao"><i className="fa fa-github" aria-hidden="true"></i></a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/kingsleyliao/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
      </footer>
    </section>
  </div>
);

export default App;
