import React, { useState, useEffect } from "react";
import "./Product.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Product() {
  const [data, setData] = useState([]);

  const getProducts = () => {
    fetch(
      "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("val =", data);
        setData(data).catch((err) => console.log(err));
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container style={{ padding: "50px" }}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search the Products"
            aria-label="Search the Products"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Container>

      <Container>
        <h2 style={{ textAlign: "center" }}>Products</h2>

        <div className="d-flex align-content-start flex-wrap">
          {data &&
            data.map((item, id) => {
              return (
                <Card
                  className="w-[220px] inline-block p-20  cursor-pointer hover:scale-105 ease-in-out duration-300 "
                  style={{ width: "18rem", padding: "10px", margin: "10px" }}
                >
                  <Card.Img variant="bottom" src={item.imageURL} />

                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title key={id}>{item.name}</Card.Title>
                    <Card.Text>Rs {item.price}</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Product;
