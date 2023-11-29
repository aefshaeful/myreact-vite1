/* eslint-disable react/prop-types */
export default function CardProduct(props) {
  const { children } = props;
  return (
    <section className="w-[352px]">
      <div className="bg-[#f2f2f8] h-[293px] rounded-[20px] shadow-md">
        {children}
      </div>
      {/* <div className="bg-[#f1f1f1] h-[164px] px-24 flex flex-row rounded-b-[20px]"> Lah</div>      */}
    </section>
  );
}

const BannerProduct = ({ courseType = "Bootcamp", title, description }) => {
  return (
    <section className="bg-[#152a46] w-[352px] h-[129px] flex flex-row rounded-t-[20px]">
      <div className="w-[129px] h-[129px] rounded-tl-[20px] rounded-bl-[20px]">
        <img
          className="h-[113px] w-[75px] mt-[16px] ml-[28px]"
          src="/images/person.png"
          alt="product"
        />
      </div>
      <div className="w-[223px] h-[129px] flex flex-col justify-center items-start">
        <h2 className="text-[#FFCD29] font-bold text-base">{courseType}</h2>
        <h1 className="text-[#ffffff] font-bold text-xl mt-[9px]">{title}</h1>
        <p className="text-[#ffffff] font-normal text-xs">{description}</p>
      </div>
    </section>
  );
};

const DescriptionProduct = ({ courseType, title, description, price, discount, addShoopingCart }) => {
  return (
    <div className="w-[352px] px-[24px]">
      <h5 className="text-xl font-bold mt-[20px]">{title}</h5>
      <p className="text-base font-bold">{description}</p>
      <div className="mt-[10px] flex flex-row justify-end">
        {discount ? (
          <>
            <s className="mx-[8px] file:font-bold text-[#152A46] text-base">
              Rp {price.toLocaleString("id-ID")}
            </s>
            <p className="font-bold text-[#0ACF83] text-xl">
              Rp {(price - discount).toLocaleString("id-ID")}
            </p>
          </>
        ) : (
          <p className="font-bold text-[#0ACF83] text-xl">
            Rp {price.toLocaleString("id-ID")}
          </p>
        )}
      </div>
      <button
        onClick={() => addShoopingCart({ courseType, title, description, price, discount })}
        className="mt-[8px] w-full bg-[#0ACF83] h-[40px] rounded-[10px] text-white font-bold text-base hover:bg-[#2980b9] focus:outline-none focus:ring focus:border-[#3498db] transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

CardProduct.BannerProduct = BannerProduct;
CardProduct.DescriptionProduct = DescriptionProduct;
