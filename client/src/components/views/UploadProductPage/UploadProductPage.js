import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Contenaintes = [
  { key: 1, value: "Asia" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Africa" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UploadProductPage(props) {
  const [TitelValue, setTitelValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContenaintValue, setContenaintValue] = useState(1);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitelValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onContenaintesSelectChange = (event) => {
    setContenaintValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitelValue ||
      !DescriptionValue ||
      !PriceValue ||
      !ContenaintValue ||
      !Images
    ) {
      alert("Please Fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitelValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      continents: ContenaintValue,
    };
    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully uploaded!");
        props.history.push("/");
      } else {
        alert("Failed to upload product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Travel Product</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* { dorp zone} */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />

        <label>Title</label>
        <Input onChange={onTitleChange} value={TitelValue}></Input>

        <br />
        <br />

        <label>Description</label>
        <TextArea
          onChange={onDescriptionChange}
          value={DescriptionValue}
        ></TextArea>

        <br />
        <br />

        <label>Price($)</label>
        <Input
          onChange={onPriceChange}
          value={PriceValue}
          type="number"
        ></Input>
        <br />
        <br />
        <select onChange={onContenaintesSelectChange}>
          {Contenaintes.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
