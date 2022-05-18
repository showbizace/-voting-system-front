import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import user1 from "../../../assets/images/backgrounds/u2.jpg";
import user2 from "../../../assets/images/backgrounds/u3.jpg";
import user3 from "../../../assets/images/backgrounds/u4.jpg";

const generateVotes = () => {
  return Math.floor(Math.random() * 50 + 15);
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const blogs = [
  {
    id: 1,
    img: user1,
    title: "Vote for this pretty wohman",
    subtitle: "All you need is click vote button bellow! and see result",
    votes: generateVotes(),
    rating: 0,
    btncolor: "error",
  },
  {
    id: 2,
    img: user2,
    title: "Vote for this white shirt guy",
    subtitle: "All you need is click vote button bellow! and see result",
    votes: generateVotes(),
    rating: 0,
    btncolor: "warning",
  },
  {
    id: 3,
    img: user3,
    title: "Vote for this yellow bike guy2",
    subtitle: "All you need is click vote button bellow! and see result",
    votes: generateVotes(),
    rating: 0,
    btncolor: "error",
  },
];

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ products: blogs });
    console.log(this.state.products);
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
      <BlogCard
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

const BlogCard = (props) => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  useEffect(() => {
    // setValue(blogs.rating);
  });

  const addVote = () => {
    // handleUpVote(blogs.id);
  };

  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image src={blog.img} alt="img" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <IconButton onClick={addVote} sx={{}}>
                  <FeatherIcon icon="chevron-up" width="20" height="20" />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: "h4.fontSize",
                    fontWeight: "500",
                  }}
                >
                  {blog.votes}
                </Typography>
                <Rating
                  name="feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(blog.rating);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyicon={
                    <FeatherIcon
                      icon="star"
                      style={{ opacity: 0.55 }}
                      fontSize="inherit"
                    />
                  }
                />
                {/* {value !== null && (
                  <Box>{labels[hover !== -1 ? hover : blog.rating]}</Box>
                )} */}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
