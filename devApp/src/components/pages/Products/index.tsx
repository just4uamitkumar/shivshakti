import { Grid, Stack } from "@mui/material";

import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductType } from "./type";
import TypoGraphy from "../../common/TypoGraphy";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Products: React.FC = () => {
  const [ProductsList, setProductsList] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    console.log(response?.data?.products);
    setProductsList(response?.data?.products);
  };

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= ProductsList.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <PageBanner title={"Products"} />

      <Grid className="container pb-4 pt-4" spacing={4} container>
        {ProductsList.length > 0 &&
          ProductsList.slice(page * 10 - 10, page * 10).map(
            (item: ProductType) => (
              <Grid size={6} className="ProductCard" key={item?.id}>
                <Stack className="imgWrapper">
                  <img src={item?.thumbnail} alt={item?.title} />
                </Stack>
                <Stack className="title">
                  <TypoGraphy variant="h4">{item?.title}</TypoGraphy>
                </Stack>
                <Stack className="price" direction={"row"} display={"flex"}>
                  <strong>{"Price : "}</strong>
                  <TypoGraphy variant="body1">{item?.price}</TypoGraphy>
                </Stack>
                <Stack className="price" direction={"row"} display={"flex"}>
                  <strong>{"Category : "}</strong>
                  <TypoGraphy variant="body1">{item?.category}</TypoGraphy>
                </Stack>
                <Stack className="Description">
                  <TypoGraphy variant="body1">{item?.description}</TypoGraphy>
                </Stack>
              </Grid>
            )
          )}
        <Grid size={12}>
          {ProductsList.length > 0 && (
            <Stack
              className="pagination"
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
            >
              <span
                onClick={() => selectPageHandler(page - 1)}
                className={page > 1 ? "" : "disable"}
              >
                <FaRegArrowAltCircleLeft />
              </span>

              {[...Array(ProductsList.length / 10)].map((_, i) => {
                return (
                  <span
                    key={i}
                    className={page === i + 1 ? "activePage" : ""}
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}

              <span
                onClick={() => selectPageHandler(page + 1)}
                className={
                  page < ProductsList.length / 10 ? "" : "disable"
                }
              >
                <FaRegArrowAltCircleRight />
              </span>
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
