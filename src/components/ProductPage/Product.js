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
  const [searchData, setSearchData] = useState(data);

  const getProducts = () => {
    fetch(
      "https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("value", data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
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
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
          <Button variant="outline-secondary" id="button-addon2">
            Filter
          </Button>
        </InputGroup>
      </Container>

      <Container>
        <h2 style={{ textAlign: "center" }}>Products</h2>

        <div className="d-flex align-content-start flex-wrap">
          {data
            .filter((item) => {
              if (searchData == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return item;
              } else if (
                item.gender.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return item;
              } else if (
                item.color.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return item;
              } else if (
                item.type.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, key) => {
              return (
                <Card
                  className="w-[220px] inline-block p-20  cursor-pointer hover:scale-105 ease-in-out duration-300 "
                  style={{ width: "18rem", padding: "10px", margin: "10px" }}
                >
                  <Card.Img variant="bottom" src={item.imageURL} />

                  <Card.Body style={{ textAlign: "center" }} key={key}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.color} - {item.gender} - {item.type}
                    </Card.Text>
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
