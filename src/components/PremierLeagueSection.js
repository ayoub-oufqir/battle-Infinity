import battleStaking from "../assets/images/IBAT-premeir-league.png";
import telegramImgPng from '../assets/images/telegram-dark-icon.svg'

const PremierLeagueSection = () => {
    return ( 
        <section className="pt-10">
      <div className="about-sec-content flex flex-wrap flex-col sm:flex-row items-center justify-center text-left">
        <div className="md:w-3/6 w-11/12">
          <p className="font-bold text-blue-500 md:pr-12 md:pl-14 lg:pl-28">Fantasy Sports</p>
          <div className="flex items-center md:pl-14 lg:pl-28 md:pr-12 gap-4">
            <p className="text-3xl font-bold">IBAT Premier League</p>
            <span className="px-2 py-1 border-blue-300 border-2 font-bold text-lg rounded-md text-blue-300">COMING SOON</span>
          </div>
          <p className="md:pl-14 lg:pl-28 md:pr-12  text-lg font-semibold text-blue-100 my-8">
          IBAT Premier League is the world’s first decentralized blockchain NFT-Based fantasy sports game integrated with metaverse, where the user can build their own strategic team and battle with others all around the world and earn.
          </p>
          <div className="md:pl-14 lg:pl-28 md:pr-12 flex items-center mt-4">
            <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
              Stake $IBAT
            </button>
            <button className="text-xl  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
                <span>➜</span> 
                <span className="font-bold">JOIN TELEGRAM</span>
                <img src={telegramImgPng} alt="telegram-dark-icon" />
            </button>
          </div>
        </div>
        <div className="md:w-3/6 w-11/12 pt-9 md:pt-0">
          <img
            src={battleStaking}
            alt="battle Staking"
            className="mx-auto h-3/6"
          />
        </div>
      </div>
    </section>
     );
}
 
export default PremierLeagueSection;