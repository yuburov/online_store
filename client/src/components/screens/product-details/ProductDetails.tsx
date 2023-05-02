import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/interfaces/product.interface";
import Meta from "@/ui/Meta";
import Button from "@/ui/button/Button";
import ProductRating from "@/ui/catalog/product-item/ProductRating";
import Layout from "@/ui/layout/Layout";
import { FC, Fragment, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
  const { items } = useCart();
  const { removeFromCart, addToCart, changeQuantity } = useActions();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? product.images.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === product.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  const currentElement = items.find(
    (cartItem) => cartItem.product.id === product.id
  );
 
  return (
    <Meta title="Home">
      <Layout>
        <Fragment>
          <div className="flex items-center justify-around">
            <div className="max-w-[500px] h-[600px] w-full m-auto relative group py-12 px-4">
              <div
                style={{
                  backgroundImage: `url(${product.images[currentIndex]})`,
                }}
                className="w-full h-full animate-scaleIn rounded-2xl bg-center bg-cover duration-500"
              ></div>
              <div
                className="hidden group-hover:block absolute top-[50%] -translate-x-
               translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20
                text-white cursor-pointer"
              >
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div
                className="hidden group-hover:block absolute top-[50%] -translate-x-0
               translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20
                text-white cursor-pointer"
              >
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {product.images.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`${
                      currentIndex === slideIndex && "text-primary"
                    } text-2xl cursor-pointer`}
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>

            <div className="ml-10">
              <h3 className="text-6xl">{product.name}</h3>
              <p className="text-dark_gray mb-3">Product # {product.id}</p>

              <hr />

              <div className="m-3">
                <ProductRating product={product} />
              </div>
              <hr />
              <div className="m-1">
                <p className="font-bold text-4xl">${product.price}</p>
             
                <Button
                  type="button"
                  id="cart_btn"
                  size="lg"
                  className="my-5"
                  onClick={() =>
                    currentElement
                      ? removeFromCart({ id: currentElement.id })
                      : addToCart({
                          product,
                          quantity: 1,
                          price: product.price,
                        })
                  }
                >
                  {currentElement ? 'Remove from Cart' : 'Add to Cart'}
                </Button>
              </div>
              <hr />
              <h4 className="mt-2">Description:</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </Fragment>
      </Layout>
    </Meta>
  );
};

export default ProductDetails;
