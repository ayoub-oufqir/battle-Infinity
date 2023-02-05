import BEP20Token from "../assets/images/BEP20-token.svg";
import TenbillionToken from "../assets/images/10billion-token.svg";
import IBATUtilityToken from "../assets/images/IBAT-utility-token.svg";
import telegramImgPng from "../assets/images/telegram-dark-icon.svg";

const TokenomicsSection = () => {
  return (
    <section className="pt-10 py-14">
      <div className="about-sec-title-div md:mb-14 pb-10">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-3 ">TOKENOMICS</h2>
        <hr className="sec-title-hr" />
      </div>
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
        <div>
          <img src={BEP20Token} alt="BEP20 Token" className="mx-auto" />
          <h4 className="font-bold text-2xl">BEP-20</h4>
          <p className="text-2xl text-blue-200">BSC Token</p>
        </div>
        <div>
          <img
            src={TenbillionToken}
            alt="Ten billion Token"
            className="mx-auto"
          />
          <h4 className="font-bold text-2xl">10 BILLION</h4>
          <p className="text-2xl text-blue-200">Total Supply</p>
        </div>
        <div>
          <img
            src={IBATUtilityToken}
            alt="IBAT Utility Token"
            className="mx-auto"
          />
          <h4 className="font-bold text-2xl">$IBAT</h4>
          <p className="text-2xl text-blue-200">Utility Token</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xl mt-8 md:mt-16 text-blue-300">
          The total maximum supply of IBAT tokens is 10,000,000,000 (10
          Billion). 
          <br />
          IBAT tokens are based on the BEP20 smart contract standard
          and run on the Binance Smart Chain.
        </p>
        <div className="flex justify-center items-center mt-14">
          <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
            Buy $IBAT Now
          </button>
          <button className="text-xl font-bold  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
            <span>➜</span>
            JOIN TELEGRAM
            <img src={telegramImgPng} alt="telegram-dark-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
