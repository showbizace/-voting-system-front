import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import props from "prop-types";
import { Grid } from "@mui/material";

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
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  constructor(porps) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };
  render() {
    return (
      <Grid item xs={12} lg={12}>
        <div className="item">
          <div className="image">
            <Image
              className="ui avatar image"
              alt="img"
              width={100}
              height={100}
              src={this.props.disscuss}
            />
          </div>
          <div className="middle aligned content">
            <div className="header">
              <a onClick={this.handleUpVote}>
                <i className="large caret up icon" />
              </a>
              {this.props.votes}
            </div>
            <div className="description">
              <a href={this.props.profileUrl}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className="extra">
              <span>Submitted by:</span>
              <Image
                className="ui avatar image"
                alt="img"
                width={50}
                height={50}
                src={this.props.avatar}
              />
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}
export default ProductList;
