import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  return <h1>hello product details {router.query.id}</h1>;
};

export default ProductDetails;
