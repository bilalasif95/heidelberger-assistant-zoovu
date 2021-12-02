export default {
  container: {
    "& .product-image": {
      maxWidth: "200px",
      margin: [0, "auto"],
      "& img": {
        width: "100%",
        height: "auto",
      },
    },
    "& .product-header": {
      width: "100%",
    },
    "& .product-name, &.product-price": {
      marginTop: "10px",
    },
  },
};
