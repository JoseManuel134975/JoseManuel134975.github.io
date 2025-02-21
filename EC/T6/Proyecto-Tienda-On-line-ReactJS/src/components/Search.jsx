import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export default function Search() {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setTextValue(event.target.value);
    navigate(`/Products?search=${event.target.value}`);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate(`/Products?search=${textValue}`);
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit} inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleOnChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
