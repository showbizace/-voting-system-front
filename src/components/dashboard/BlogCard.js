import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import user1 from "../../../assets/images/backgrounds/u2.jpg";
import user2 from "../../../assets/images/backgrounds/u3.jpg";
import user3 from "../../../assets/images/backgrounds/u4.jpg";

const blogs = [
  {
    img: user1,
    title: "Vote for this pretty wohman",
    subtitle: "All you need is click vote button bellow! and see result",
    btncolor: "error",
  },
  {
    img: user2,
    title: "Vote for this white shirt guy",
    subtitle: "All you need is click vote button bellow! and see result",
    btncolor: "warning",
  },
  {
    img: user3,
    title: "Vote for this yellow bike guy2",
    subtitle: "All you need is click vote button bellow! and see result",
    btncolor: "error",
  },
];

const BlogCard = () => {
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
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
