import telegramImg from "../assets/images/telegram-dark.svg";
import facebookImg from "../assets/images/facebook-dark.svg";
import youtubeImg from "../assets/images/youtube-dark.svg";
import instagramImg from "../assets/images/instagram-dark.svg";
import discordImg from "../assets/images/discord-dark.svg";
import twitterImg from "../assets/images/twitter-dark.svg";
// import PlaceholderImg from "../assets/images/LBank-image2.png";
import telegramImgPng from "../assets/images/telegram-dark-icon.svg";

const AboutSection = () => {
  return (
    <section className="md:py-14 py-6 md:px-6 px-3 lg:px-20">
      <div className="about-sec-title-div mb-14">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-4">
          ABOUT BATTLE INFINITY
        </h2>
        <hr className="sec-title-hr" />
      </div>
      <div className="about-sec-content flex flex-wrap flex-col sm:flex-row items-center justify-center text-left">
        <div className="md:w-3/6 w-11/12 ">
          <p className="text-lg text-center md:text-left">
            Battle infinity is a gaming platform where our ecosystem hosts
            multiple P2E battle games integrated with the Metaverse world called
            'The Battle Arena'. In the Battle Infinity world gamers are not only
            able to play and battle, but can also enjoy the immersive experience
            in the Metaverse world. In the Battle Arena, you can interact,
            perform, watch, explore, and more in a virtual world.
          </p>
          <div className="md:flex md:justify-center md:items-center">
            <p className="font-bold md:text-xl md:mr-4 md:mt-0 mt-8 text-lg  text-center">JOIN US ON:</p>
            <ul className="flex md:justify-center md:items-center mx-auto md:gap-5 gap-1 py-5 w-fit">
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={telegramImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={discordImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={twitterImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={youtubeImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={facebookImg} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/battleinfinity"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={instagramImg} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="text-xl font-bold bg-btnBlue-50 lg:py-4 lg:px-5 py-2 px-3 rounded-sm border-blue-400 border-2 mr-4">
              Stake $IBAT
            </button>
            <button className="text-xl font-bold  lg:py-4 lg:px-5 py-2 px-3 rounded-sm  mr-4 flex items-center justify-center gap-3">
              <span>➜</span>
              JOIN TELEGRAM
              <img src={telegramImgPng} alt="telegram-dark-icon" />
            </button>
          </div>
        </div>
        <div className="md:w-3/6 w-11/12 pt-9 md:pt-0">
          <iframe
            // width={'90%'}
            // height={315}
            className="mx-auto aspect-video lg:w-7/12 w-11/12"
            title="Youtube video"
            src="https://www.youtube.com/embed/lenr7yfMHqs"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
