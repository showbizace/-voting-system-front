import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import props from "prop-types";
import FeatherIcon from "feather-icons-react";
import {
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Link,
  Box,
  Chip,
  Badge,
  Button,
} from "@mui/material";
import "../../layouts/header/seed";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({ products: Seed.products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  };
  handleProductDownVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  };
  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    const productComponents = this.state.products.map((product) => (
      <Product
        key={"product-" + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        profileUrl={product.profileUrl}
        disscuss={product.disscuss}
        votes={product.votes}
        avatar={product.avatar}
        author={product.author}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        offVote={this.handleProductDownVote}
        posted={product.posted}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  constructor(porps) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleMore = () => {
    console.log("print");
    this.setState({
      showMore: (prev) => !prev,
    });
  };
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };
  handleDownVote = () => {
    this.props.offVote(this.props.id);
  };

  render() {
    return (
      <Grid container sx={{ maxWidth: "100%" }}>
        <Card sx={{ width: "100%", display: "flex", padding: "0px" }}>
          <Image
            alt="img"
            width={200}
            height={100}
            src={this.props.disscuss}
            style={{ objectFit: "cover" }}
          />
          <CardContent sx={{ width: "100%", height: "180px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  mt: 1,
                  mb: 2,
                  width: "70%",
                }}
              >
                <Chip
                  sx={{
                    mr: 2,
                    pl: "4px",
                    pr: "4px",
                    backgroundColor:
                      this.props.votes <= 5
                        ? "error.main"
                        : this.props.votes <= 15
                        ? "secondary.main"
                        : this.props.votes <= 50
                        ? "primary.main"
                        : "success.main",
                    color: "#fff",
                  }}
                  size="small"
                  label={
                    this.props.votes <= 5
                      ? "Poor"
                      : this.props.votes <= 15
                      ? "Suggested"
                      : this.props.votes <= 50
                      ? "Medium"
                      : "Very Well"
                  }
                />
                <Link href={this.props.profileUrl} underline="none">
                  {this.props.title}
                </Link>
                <Typography sx={{ mt: 3 }}>{this.props.description}</Typography>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "160px",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "right",
                    gap: "8px",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "15px", fontWeight: "50" }}>
                      {this.props.author}
                    </Typography>
                    <Typography sx={{ fontSize: "9px", fontWeight: "50" }}>
                      {this.props.posted}
                    </Typography>
                  </Box>
                  <Image
                    className="ui avatar image"
                    alt="img"
                    width={35}
                    height={35}
                    style={{ borderRadius: "50%" }}
                    src={this.props.avatar}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "min-content",
                  }}
                >
                  <IconButton onClick={this.handleUpVote} sx={{ p: "5px" }}>
                    <FeatherIcon icon="chevron-up" width="25" height="25" />
                  </IconButton>
                  <Badge
                    color="success"
                    badgeContent={this.props.votes}
                  ></Badge>
                  <IconButton onClick={this.handleDownVote} sx={{ p: "5px" }}>
                    <FeatherIcon icon="chevron-down" width="25" height="25" />
                  </IconButton>
                </Box>
                {/* <Button onClick={() => this.handleMore}>read more</Button> */}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
export default ProductList;
