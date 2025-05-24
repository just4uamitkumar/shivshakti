import { Grid, TextField } from "@mui/material";

import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductType } from "./type";
import Loader from "../../shared/Loader";
import Product from "./Product";
import { useDebounce } from "../../../utils/useDebounce";
import Pagination from "./Pagination";

const Products: React.FC = () => {
  const [ProductsList, setProductsList] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (debouncedValue && query !== "") {
      getSpecificProducts();
    }
  }, [debouncedValue]);

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    setProductsList(response?.data?.products);
    setLoading(false);
  };

  const getSpecificProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}&limit=100`
    );
    setProductsList(response?.data?.products);
    setLoading(false);
  };

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= ProductsList?.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <PageBanner title={"Products"} />

      <Grid className="container pb-4 pt-4" spacing={3} container>
        <Grid size={12}>
          <TextField
            value={query}
            variant="outlined"
            type="text"
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setQuery(e.target.value)}
          />
        </Grid>
        {loading ? (
          <Loader />
        ) : (
          ProductsList?.length > 0 &&
          ProductsList?.slice(page * 10 - 10, page * 10)?.map(
            (item: ProductType) => (
              <Product
                id={item?.id}
                title={item?.title}
                thumbnail={item.thumbnail}
                price={item.price}
                discountPercentage={item.discountPercentage}
                category={item.category}
                brand={item.brand}
                shippingInformation={item.shippingInformation}
                availabilityStatus={item.availabilityStatus}
              />
            )
          )
        )}
        {ProductsList?.length > 0 && (
          <Grid size={12}>
            <Pagination
              ProductsList={ProductsList}
              selectPageHandler={selectPageHandler}
              page={page}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Products;
