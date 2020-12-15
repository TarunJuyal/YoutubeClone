import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
  const user = useSelector((state) => state.user);
  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>Categories</span>}>
          <Menu.Item key="filmAndAnimation">
            <Link to="/category/filmAndAnimation">Film & Animation</Link>
          </Menu.Item>
          <Menu.Item key="music">
            <Link to="/category/music">Music</Link>
          </Menu.Item>
          <Menu.Item key="gaming">
            <Link to="/category/gaming">Gaming</Link>
          </Menu.Item>
          <Menu.Item key="sports">
            <Link to="/category/sports">Sports</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu title={<span>Categories</span>}>
          <Menu.Item key="filmAndAnimation">
            <Link to="/category/filmAndAnimation">Film & Animation</Link>
          </Menu.Item>
          <Menu.Item key="music">
            <Link to="/category/music">Music</Link>
          </Menu.Item>
          <Menu.Item key="gaming">
            <Link to="/category/gaming">Gaming</Link>
          </Menu.Item>
          <Menu.Item key="sports">
            <Link to="/category/sports">Sports</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="subscription">
          <Link to="/subscription">Subscriptions</Link>
        </Menu.Item>
        <Menu.Item key="liked">
          <Link to="/likedVideos">Liked Videos</Link>
        </Menu.Item>
        <Menu.Item key="my-uploads">
          <Link to="/myUploads">My Uploads</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
