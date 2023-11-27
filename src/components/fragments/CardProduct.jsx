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

const BannerProduct = () => {
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
        <h2 className="text-[#FFCD29] font-bold text-base">
          Intensive Bootcamp
        </h2>
        <h1 className="text-[#ffffff] font-bold text-xl mt-[9px]">
          Programming Laravel
        </h1>
        <p className="text-[#ffffff] font-normal text-xs">
          (Getting Started with Laravel 9)
        </p>
      </div>
    </section>
  );
};

const DescriptionProduct = () => {
  return (
    <div className="w-[352px] px-[24px]">
      <h5 className="text-xl font-bold mt-[20px]">Programming Laravel</h5>
      <p className="text-base font-bold">Getting Started with Laravel 9</p>
      <div className="mt-[32px] flex flex-row justify-end">
        <s className="mx-[12px] file:font-bold text-gray-400 text-base">
          Rp. 600.000
        </s>
        <p className="font-bold text-[#0ACF83] text-xl pl-1">RP. 400.000</p>
      </div>
    </div>
  );
};

CardProduct.BannerProduct = BannerProduct;
CardProduct.DescriptionProduct = DescriptionProduct;
