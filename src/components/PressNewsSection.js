import TopFiveNewCryptocurrencies from "../assets/images/Top-Five-New-Cryptocurrencies.svg";
import BinanceTradingValuesAreOnTheUpHeader from "../assets/images/Binance-trading-values-are-on-the-up-header.svg";
import shouldInvestBattleTnfinityImg from "../assets/images/should-invest-battle-infinity-img.svg";
import UrvashiRautelaIrfanPathanCelebrateIBATNew from "../assets/images/Urvashi-Rautela-Irfan-Pathan-celebrate-IBAT-new.jpg";
import Cryptocurrency from "../assets/images/Cryptocurrency.svg";
import BIGainsMomentumWithNewlyLaunchedToken from "../assets/images/BI-gains-momentum-with-newly-launched-token-1-300x169.jpg";
const PressNewsSection = () => {
  return (
    <section className="pt-0 md:p-10 p-6">
      <div className="about-sec-title-div md:mb-14 pb-10">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-3 ">PRESS NEWS</h2>
        <hr className="sec-title-hr" />
      </div>
      <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={TopFiveNewCryptocurrencies}
            alt="Top Five New Cryptocurrencies"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={BinanceTradingValuesAreOnTheUpHeader}
            alt="Binance Trading Values Are On The UpHeader"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={shouldInvestBattleTnfinityImg}
            alt="Top Five New Cryptocurrencies"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={UrvashiRautelaIrfanPathanCelebrateIBATNew}
            alt="Urvashi Rautela Irfan Pathan Celebrate IBAT New"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={Cryptocurrency}
            alt="Cryptocurrency"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
        <div className="flex items-center text-left bg-blue-900 rounded-md">
          <img
            src={BIGainsMomentumWithNewlyLaunchedToken}
            alt="BIGains Momentum With Newly Launched Token"
            className="w-3/6 p-4"
          />
          <div className="py-2">
            <p className="text-base md:text-xl font-bold">
              The Top Five New Cryptocurrencies for 2022: BudBlockz, Stepn &
              More
            </p>
            <a
              href="https://coinpedia.org/information/the-top-five-new-cryptocurrencies-for-2022-budblockz-stepn-more/"
              className="text-base md:text-xl font-bold text-blue-400"
            >
              source: coinpedia.org
            </a>
          </div>
        </div>
      </div>
      <button className="text-2xl font-bold bg-transparent py-3 px-10 rounded-md border-blue-300 border-2 mt-10 md:mt-16">
        SHOW ALL
      </button>
    </section>
  );
};

export default PressNewsSection;
