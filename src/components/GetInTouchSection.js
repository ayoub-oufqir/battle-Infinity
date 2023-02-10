import telegramImg from "../assets/images/telegram-dark.svg";
import facebookImg from "../assets/images/facebook-dark.svg";
import youtubeImg from "../assets/images/youtube-dark.svg";
import instagramImg from "../assets/images/instagram-dark.svg";
import discordImg from "../assets/images/discord-dark.svg";
import twitterImg from "../assets/images/twitter-dark.svg";

const GetInTouchSection = () => {
  return (
    <section className="pt-10 py-14 md:p-6">
      <div className="about-sec-title-div md:pb-14 pb-6">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-3 ">GET IN TOUCH</h2>
        <hr className="sec-title-hr" />
      </div>
      <div className="contact-div grid md:grid-cols-2 gap-x-2 gap-y-6 md:w-3/5 w-11/12 mx-auto">
        <div>
        <input type="text" placeholder="NAME" className="text-blue-400 text-lg rounded-md font-bold bg-transparent border-blue-400 border-opacity-50	 mb-4 p-3 w-11/12"/>
        <input type="email" placeholder="EMAIL" className="text-blue-400 text-lg rounded-md font-bold bg-transparent border-blue-400 border-opacity-50	mb-4 p-3 w-11/12"/>
        <input type="tel" placeholder="PHONE" className="text-blue-400 text-lg rounded-md font-bold bg-transparent border-blue-400 border-opacity-50	 mb-4 p-3 w-11/12"/>
        </div>
        <textarea placeholder="MESSAGE" className="text-blue-400 text-lg rounded-md font-bold bg-transparent border-blue-400 border-opacity-50 mb-4 p-3 w-11/12 mx-auto"></textarea>
      </div>
      <button className="text-2xl font-bold bg-transparent py-3 px-10 rounded-md border-blue-300 border-2 mt-10 md:mt-16">
        SUBMIT
      </button>
      <div className="mt-10">
        <p className="text-2xl">Visit us on our social channels!</p>
        <ul className="flex justify-center items-center gap-2 md:gap-5 py-5">
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
    </section>
  );
};

export default GetInTouchSection;
