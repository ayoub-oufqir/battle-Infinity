import SafeAndSecure from "../assets/images/Safe-AND-secure.svg";
import transactionFees from "../assets/images/transaction-fees.svg";
import StrongFanBase from "../assets/images/Strong-fan-base.svg";
import extraBenefitsIconNew from "../assets/images/extra-benefits-icon-new.svg";
import Accelerates from "../assets/images/Accelerates.svg";
import telegramImgPng from "../assets/images/telegram-dark-icon.svg";

const WhyIbatSection = () => {
  return (
    <section className="pb-14 pt-20 md:px-20 px-6">
      <div>
        <h2 className="font-bold text-4xl mb-14">WHY $IBAT?</h2>
      </div>
      <div className=" grid md:grid-cols-2 grid-flow-row gap-10 text-left text-blue-200">
        <div className="flex items-center gap-6">
          <img src={SafeAndSecure} alt="Safe And Secure" />
          <p className="text-2xl">Safe AND secure</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={transactionFees} alt="Safe And Secure" />
          <p className="text-2xl">
            50% transaction fees allocated to the global staking pool
          </p>
        </div>
        <div className="flex items-center gap-6">
          <img src={StrongFanBase} alt="Safe And Secure" />
          <p className="text-2xl">
            Strong fan base established on multiple social media platforms
            contributing to IBAT’s continuous growth
          </p>
        </div>
        <div className="flex items-center gap-6">
          <img src={extraBenefitsIconNew} alt="Safe And Secure" />
          <p className="text-2xl">Extra benefits for stakers</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={Accelerates} alt="Safe And Secure" />
          <p className="text-2xl">
            Accelerates the development and adoption of the ecosystem
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
          Stake $IBAT
        </button>
        <button className="text-xl font-bold  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
          <span>➜</span>
          JOIN TELEGRAM
          <img src={telegramImgPng} alt="telegram-dark-icon" />
        </button>
      </div>
    </section>
  );
};

export default WhyIbatSection;
