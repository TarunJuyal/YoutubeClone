import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Dropzone from "react-dropzone";
import { useSelector } from "react-redux";
import Axios from "axios";
import { Static_Content } from "../../config";

const { Title } = Typography;
const { TextArea } = Input;
const Private = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];
const Category = [
  { label: "Film & Animation" },
  { label: "Music" },
  { label: "Gaming" },
  { label: "Sports" },
];

function UploadVideoPage(props) {
  const user = useSelector((state) => state.user);
  const [title, settitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Privacy, setPrivacy] = useState(0);
  const [Categories, setCategories] = useState("Film & Animation");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [Thumbnail, setThumbnail] = useState("");

  const handleChangeTitle = (event) => {
    settitle(event.currentTarget.value);
  };

  const handleChangeDecsription = (event) => {
    setDescription(event.currentTarget.value);
  };

  const handleChangeOne = (event) => {
    setPrivacy(event.currentTarget.value);
  };

  const handleChangeTwo = (event) => {
    setCategories(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in First");
    }

    if (
      title === "" ||
      Description === "" ||
      Categories === "" ||
      FilePath === "" ||
      Duration === "" ||
      Thumbnail === ""
    ) {
      return alert("Please first fill all the fields");
    }
    const variables = {
      writer: user.userData._id,
      title: title,
      description: Description,
      privacy: Privacy,
      filePath: FilePath,
      category: Categories,
      duration: Duration,
      thumbnail: Thumbnail,
    };
    Axios.post("/api/video/uploadVideo", variables).then((response) => {
      if (response.data.success) {
        alert("Video uploaded succesfully!!");
        props.history.push("/");
      } else {
        alert("Failed To Upload Video!");
      }
    });
  };

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    Axios.post("/api/video/uploadFile", formData, config).then((response) => {
      if (response.data.success) {
        let variable = {
          filePath: response.data.filePath,
          fileName: response.data.fileName,
        };
        console.log(response.data.filePath);
        setFilePath(response.data.filePath);
        Axios.post("/api/video/thumbnail", variable).then((response) => {
          if (response.data.success) {
            setDuration(response.data.fileDuration);
            console.log(response.data.thumbsFilePath);
            setThumbnail(response.data.thumbsFilePath);
          } else {
            alert("Failed to make thumnail");
          }
        });
      }else if(response.data.typeConflict){
        alert(response.data.message);
      } else {
        alert("Failed to save video");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Video</Title>
      </div>

      <Form onSubmit={onSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <PlusOutlined style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>
          {Thumbnail && (
            <div>
              <img src={`${Static_Content}${Thumbnail}`} alt="Thumbnail" />
            </div>
          )}
        </div>

        <br />
        <br />
        <label>Title</label>
        <Input onChange={handleChangeTitle} value={title} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={handleChangeDecsription} value={Description} />
        <br />
        <br />

        <select onChange={handleChangeOne}>
          {Private.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <select onChange={handleChangeTwo}>
          {Category.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadVideoPage;
