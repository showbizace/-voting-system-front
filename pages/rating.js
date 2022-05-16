import React, { useState } from "react";
import { Grid, Rating, Box, Typography } from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import FeatherIcon from "feather-icons-react";
import AiFillHeart from "feather-icons-react";
import AiOutlineHeart from "feather-icons-react";
import { styled } from "@mui/material/styles";

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

const votes = [
  { option: "Yes", votes: 0 },
  { option: "No", votes: 0 },
];

const styledVote = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const Ratings = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [vote, setVote] = useState(votes);
  const handleVote = (v) => {
    const { voting } = vote;
    const newVotes = voting.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setVote({ voting: newVotes });
  };
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Basic rating">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">unc</Typography>
              <styledVote
                name="customized-color"
                defaultValue={2}
                getlabeltext={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                precision={0.5}
                icon={<AiFillHeart fontSize="inherit" />}
                emptyicon={<AiOutlineHeart fontSize="inherit" />}
              />
              <Typography component="legend">Read only</Typography>
              <Rating name="read-only" value={value} readOnly />
              <Typography component="legend">Disabled</Typography>
              <Rating name="disabled" value={value} disabled />
              <Typography component="legend">No rating given</Typography>
              <Rating name="no-value" value={null} />
            </Box>
          </BaseCard>
        </Grid>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Hover Feedback">
            <Rating
              name="votting-system-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
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
            {value !== null && (
              <Box>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </BaseCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Ratings;
