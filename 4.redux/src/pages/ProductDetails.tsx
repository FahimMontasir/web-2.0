import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useSingleProductQuery } from '@/redux/api/apiSlice';
import { IProduct } from '@/types/globalTypes';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  // //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  const { data: product, isLoading, error } = useSingleProductQuery(id);
  console.log(error);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button>Add to cart</Button>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
