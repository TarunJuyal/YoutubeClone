import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "../hoc/auth";
import { LoadingOutlined } from "@ant-design/icons";


const LandingPage = React.lazy(()=>import("./views/LandingPage/LandingPage"));
const LoginPage = React.lazy(()=>import("./views/LoginPage/LoginPage"));
const RegisterPage = React.lazy(()=>import("./views/RegisterPage/RegisterPage"));
const NavBar = React.lazy(()=>import("./views/NavBar/NavBar"));
const UploadVideoPage = React.lazy(()=>import("./views/UploadVideoPage/UploadVideoPage"));
const DetailVideoPage = React.lazy(()=>import("./views/DetailVideoPage/DetailVideoPage"));
const SubscriptionPage = React.lazy(()=>import("./views/SubscriptionPage/SubscriptionPage"));
const CategoryPage = React.lazy(()=>import("./views/CategoryPage/CategoryPage"));
const SearchPage = React.lazy(()=>import("./views/SearchPage/SearchPage"));
const LikedVideosPage = React.lazy(()=>import("./views/LikedVideosPage/LikedVideosPage"));
const NotFoundPage = React.lazy(()=>import("./views/NotFoundPage/NotFoundPage"));
const ProfilePage = React.lazy(()=>import("./views/ProfilePage/ProfilePage"));
const RequestPasswordChangePage = React.lazy(()=>import("./views/ChangePasswordPage/RequestPasswordChangePage"));
const ResetPasswordPage = React.lazy(()=>import("./views/ChangePasswordPage/ResetPasswordPage"));
const MyUploadsPage = React.lazy(()=>import("./views/MyUploads/MyUploads"));

function App() {
  return (
    <Suspense fallback={<div className="app"><LoadingOutlined style={{ fontSize: "4rem" }} /></div>}>
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
