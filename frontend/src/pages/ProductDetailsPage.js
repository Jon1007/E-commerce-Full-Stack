import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return <p>This is the ProductDetailsPage</p>;
};

export default ProductDetailsPage;
