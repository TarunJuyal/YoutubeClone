import React from "react";
import { Menu, Input,Avatar,Typography } from "antd";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../../actions/userActions";
import { UploadOutlined, SearchOutlined } from "@ant-design/icons";

const SubMenu=Menu.SubMenu;
const { Text }=Typography;

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  const handleSearch = (e) => {
    let search = e.target.value;
    window.location.href = `/search/${search}`;
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="searchBar">
          <Input
            onPressEnter={handleSearch}
            placeholder="Search"
            suffix={<SearchOutlined />}
            size="middle"
          ></Input>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="searchBar">
          <Input
            onPressEnter={handleSearch}
            placeholder="Search"
            suffix={<SearchOutlined />}
            size="middle"
          ></Input>
        </Menu.Item>
        <Menu.Item key="upload">
          <Link to="/video/upload">
            <UploadOutlined style={{ fontSize: "1rem" }} />
            <span>Upload</span>
          </Link>
        </Menu.Item>
        <SubMenu  title={<Avatar src={user.userData && user.userData.image}></Avatar>} >
          <Menu.Item key="changePassword">
            <Link to="/changePassword">Change Password</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <a onClick={logoutHandler}>Logout</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
