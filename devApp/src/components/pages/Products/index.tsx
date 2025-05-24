import { Grid, Stack, TextField } from "@mui/material";

import PageBanner from "../../shared/PageBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductType } from "./type";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import IconBtn from "../../common/IconBtn";
import ProgressBar from "../../shared/Footer/ProgressBar";
import Loader from "../../shared/Loader";
import Product from "./Product";
import { useDebounce } from "../../../utils/useDebounce";

const Products: React.FC = () => {
  const [ProductsList, setProductsList] = useState<ProductType[]>([]);
  const [pageLength, setPageLength] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    getProducts();

    setInterval(() => {
      setValue((val) => val + 0.1);
    }, 20);
  }, []);

  useEffect(() => {
    if (debouncedValue && query !== "") {
      getSpecificProducts();
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (ProductsList.length > 0) {
      const n: number = ProductsList.length / 10;
      const pageItem = Array.from({ length: n }, (_, index) => index + 1);
      setPageLength(pageItem);
    }
  }, [ProductsList]);

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
          <ProgressBar value={value} onComplete={() => setSuccess(true)} />
          <Stack className="text-center">
            {success ? "Complete!" : "Loading..."}
          </Stack>
        </Grid>
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
        <Grid size={12}>
          {ProductsList?.length > 0 && (
            <Stack
              className="pagination"
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <IconBtn
                IconComponent={FaRegArrowAltCircleLeft}
                onClick={() => selectPageHandler(page - 1)}
                iconClass={page > 1 ? "" : "disable"}
              />

              {pageLength &&
                pageLength.map((_, i) => {
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
              <IconBtn
                IconComponent={FaRegArrowAltCircleRight}
                onClick={() => selectPageHandler(page + 1)}
                iconClass={page < ProductsList?.length / 10 ? "" : "disable"}
              />
            </Stack>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
