import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import UploadVideoPage from "./views/UploadVideoPage/UploadVideoPage";
import DetailVideoPage from "./views/DetailVideoPage/DetailVideoPage";
import SubscriptionPage from "./views/SubscriptionPage/SubscriptionPage";
import CategoryPage from "./views/CategoryPage/CategoryPage";
import SearchPage from "./views/SearchPage/SearchPage";
import LikedVideosPage from "./views/LikedVideosPage/LikedVideosPage";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import RequestPasswordChangePage from "./views/ChangePasswordPage/RequestPasswordChangePage";
import ResetPasswordPage from "./views/ChangePasswordPage/ResetPasswordPage";
import MyUploadsPage from "./views/MyUploads/MyUploads";

function App() {
  return (
    <Suspense fallback={<div>Loading.... </div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route
            exact
            path="/video/upload"
            component={Auth(UploadVideoPage, true)}
          ></Route>
          <Route
            exact
            path="/category/:categoryName"
            component={Auth(CategoryPage, null)}
          ></Route>
          <Route
            exact
            path="/search/:searchString"
            component={Auth(SearchPage, null)}
          ></Route>
          <Route
            exact
            path="/video/:videoId"
            component={Auth(DetailVideoPage, null)}
          ></Route>
          <Route
            exact
            path="/channel/:profileId"
            component={Auth(ProfilePage, null)}
          ></Route>
          <Route
            exact
            path="/reset/:token"
            component={Auth(ResetPasswordPage, null)}
          ></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route
            exact
            path="/register"
            component={Auth(RegisterPage, false)}
          ></Route>
          <Route
            exact
            path="/subscription"
            component={Auth(SubscriptionPage, true)}
          ></Route>
          <Route
            exact
            path="/likedVideos"
            component={Auth(LikedVideosPage, true)}
          ></Route>
          <Route
            exact
            path="/myUploads"
            component={Auth(MyUploadsPage, true)}
          ></Route>
          <Route
            exact
            path="/forgotPassword"
            component={Auth(RequestPasswordChangePage, false)}
          ></Route>
          <Route
            exact
            path="/changePassword"
            component={Auth(RequestPasswordChangePage, true)}
          ></Route>
          <Route
            exact
            path="/notFound"
            component={Auth(NotFoundPage, null)}
          ></Route>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Redirect to="/notFound"></Redirect>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
