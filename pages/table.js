import { Grid } from "@mui/material";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import ProductList from "../src/components/dashboard/votes";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default Tables;
