import { Grid, Stack } from "@mui/material";
import TypoGraphy from "../../common/TypoGraphy";

interface Props {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  shippingInformation: string;
  availabilityStatus: string;
}

const Product: React.FC<Props> = ({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
  category,
  brand,
  shippingInformation,
  availabilityStatus,
}) => {
  const getOriginalPrice = (
    discountPercent: number,
    discountedAmount: number
  ): number => {
    return discountedAmount / (1 - discountPercent / 100);
  };

  return (
    <>
      <Grid size={4} className="ProductCard" key={id}>
        <Stack className="imgWrapper">
          <img src={thumbnail} alt={title} />
        </Stack>
        <Stack>
          <TypoGraphy variant="h4">{title}</TypoGraphy>
        </Stack>
        <Stack className="price" direction={"row"} display={"flex"}>
          <Stack className="mr-2 buyPrice">
            <TypoGraphy variant="body1" typeClass="semi-bold-font">
              ${price}
            </TypoGraphy>
          </Stack>
          <Stack className="mr-2 line-through">
            <TypoGraphy variant="body1">
              {getOriginalPrice(discountPercentage, price).toFixed(2)}
            </TypoGraphy>
          </Stack>
          <Stack className="green500">
            <TypoGraphy variant="body1" typeClass="orange">
              {`${discountPercentage}% off`}
            </TypoGraphy>
          </Stack>
        </Stack>
        <Stack direction={"row"} display={"flex"}>
          <Stack className="mr-2" direction={"row"}>
            <TypoGraphy variant="body1">
              {"Category : "}
              {category}
            </TypoGraphy>
          </Stack>
          <Stack direction={"row"}>
            <TypoGraphy variant="body1">
              {"Brand : "}
              {brand}
            </TypoGraphy>
          </Stack>
        </Stack>
        <Stack className="shippingInfo">
          <TypoGraphy variant="body1">{shippingInformation}</TypoGraphy>
        </Stack>
        <Stack>
          <TypoGraphy variant="body1">
            <strong>{"Availability : "}</strong>
            {availabilityStatus}
          </TypoGraphy>
        </Stack>
      </Grid>
    </>
  );
};

export default Product;
