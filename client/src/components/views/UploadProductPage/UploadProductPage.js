import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";

const { Title } = Typography;
const { TextArea } = Input;

const Contenaintes = [
  { key: 1, value: "Asia" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Africa" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antactica" },
];

function UploadProductPage() {
  const [TitelValue, setTitelValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContenaintValue, setContenaintValue] = useState(1);
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

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "rem" }}>
        <Title level={2}> Upload Travel Product</Title>
      </div>

      <Form onSubmit>
        {/* { dorp zone} */}
        <FileUpload />
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
        <Button onclick>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
