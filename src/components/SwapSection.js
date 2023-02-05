import battleSwap from "../assets/images/battle-swap.png";
import telegramImgPng from "../assets/images/telegram-dark-icon.svg";

const SwapSection = () => {
  return (
    <section className="pb-6">
      <div className="about-sec-content flex flex-wrap flex-col-reverse sm:flex-row items-center justify-center text-left">
        <div className="md:w-3/6 w-11/12 pt-9 md:pt-0">
          <img src={battleSwap} alt="battle Swap" className="mx-auto h-3/6" />
        </div>
        <div className="md:w-3/6 w-11/12">
          <p className="font-bold text-blue-500 md:pr-12 md:pl-14 lg:pl-28">
            $IBAT
          </p>
          <div className="flex items-center md:pl-14 lg:pl-28 md:pr-12 gap-4">
            <p className="text-3xl font-bold">Battle Swap</p>
            <span className="px-3 py-1 bg-blue-300 font-bold text-lg rounded-md">
              LIVE
            </span>
          </div>
          <p className="md:pl-14 lg:pl-28 md:pr-12  text-lg font-semibold text-blue-100 my-8">
            A decentralized exchange that works like a bank entity on our
            platform. It enables new users to buy IBAT tokens directly and also
            convert their winning rewards to another currency. Battle Swap is
            integrated with the marketplace, game store, and arena, which makes
            the platform's overall in-game app experience smoother, faster, and
            hassle-free.
          </p>
          <div className="md:pl-14 lg:pl-28 md:pr-12 flex items-center mt-4">
            <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
              GO TO SWAP
            </button>
            <button className="text-xl font-bold  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
              <span>➜</span>
              JOIN TELEGRAM
              <img src={telegramImgPng} alt="telegram-dark-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwapSection;
