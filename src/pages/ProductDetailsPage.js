import {useParams} from "react-router-dom";

const ProductDetailsPage = () => {
  const {id} = useParams()
  console.log(id)

  return <p>This is a home ProductDetailsPage</p>;
};

export default ProductDetailsPage;
