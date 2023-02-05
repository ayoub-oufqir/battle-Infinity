import battleStaking from "../assets/images/battle-staking.png";

const ProductsSection = () => {
  return (
    <section className="pt-10 py-14">
      <div className="about-sec-title-div">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-6 ">PRODUCTS</h2>
        <hr className='sec-title-hr'/>
      </div>
      <div className="about-sec-content flex flex-col flex-wrap sm:flex-row items-center justify-center text-left mt-10 md:mt-0">
        <div className="md:w-3/6 w-10/12">
        <p className="font-bold text-blue-500 md:pr-12 md:pl-14 lg:pl-28">$IBAT</p>
          <div className="flex items-center md:pl-14 lg:pl-28 md:pr-12 gap-4">
            <p className="text-3xl font-bold">Battle Staking</p>
            <span className="px-3 py-1 bg-blue-300 font-bold text-lg rounded-md">LIVE</span>
          </div>
          <p className="md:pl-14 lg:pl-28 md:pr-12  text-lg font-semibold text-blue-100 my-8">
            Users can stake their holdings by depositing and locking them for a
            period of time. Stakers will also receive extra benefits for other
            activities they perform on the platform.
          </p>
          <div className="md:pl-14 lg:pl-28 md:pr-12 flex items-center mt-4">
            <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
              Stake $IBAT
            </button>
            <button className="text-xl font-bold  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
              <span>➜</span>
              BUY $IBAT
            </button>
          </div>
        </div>
        <div className="md:w-3/6 w-10/12 mt-10 md:mt-0">
          <img
            src={battleStaking}
            alt="battle Staking"
            className="mx-auto h-3/6"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
