import { add, remove } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const Card = ({ products, type }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    // dispatch
    dispatch(add(item));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      {products.map((item) => (
        <div
          className="container card w-full bg-base-100 shadow-xl"
          key={item.id}
        >
          <figure className="">
            <img
              src={item.image}
              width={200}
              height={200}
              className="object-contain h-60 w-96 hover:scale-125 transition duration-500 cursor-pointer "
              alt="product"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>$ {item.price}</p>
            <p>{item.category}</p>
            <div className="card-actions justify-end">
              {type == "Add" ? (
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
              ) : type == "Remove" ? (
                <button
                  className="btn btn-error text-white btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              ) : (
                <button className="btn btn-secondary btn-sm"></button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
