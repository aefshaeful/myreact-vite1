import { useSelector } from "react-redux";

const CartList = () => {
  const { items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.product);
  return (
    <>
      <div className="px-4 sm:px-0">
        <h3 className="text-xl font-bold leading-7 text-gray-900">
          Order summary
        </h3>
      </div>
      <div className="mt-6">
        <div className="flow-root flex-col bg-white px-4">
          {items && items.length > 0 ? (
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => {
                const productItem = products.find(
                  (productItem) => productItem.id === item.id
                );
                return (
                  <li key={productItem?.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={productItem?.image}
                        alt=""
                        className="object-cover object-center"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3>
                            <a href="#">{productItem?.title}</a>
                          </h3>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-500 pt-2">Qty {item.qty}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-sm font-medium pt-1">
                          ${" "}
                          {item.qty *
                            productItem?.price.toLocaleString("en-US", {
                              styles: "currency",
                              currency: "USD",
                            })}
                        </p>

                        <div className="">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <span className="text-gray-500 px-2">|</span>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;
