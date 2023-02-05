import TokenImage from "../assets/images/ecosystem-heart.svg";
const IbatSection = () => {
  return (
    <section className="text-center">
      <div className="md:w-3/6 mx-auto">
        <img src={TokenImage} alt="PlaceholderImg" className=" mx-auto h-3/6" />
      </div>
      <div className="md:w-3/6 mx-auto">
        <h2 className="text-4xl font-bold">$IBAT</h2>
        <p className="text-3xl mb-8 text-sky-200 font-normal">The Heart of the Ecosystem</p>
        <p className="text-xl p-6 ">IBAT token effectively removes all the boundaries between traditional GAMING AND THE METAVERSE/blockchain by connecting both. The IBAT TOKEN design and implementation make the user experience seamless and efficient, removing barriers to entry around usability. It is a utility token that runs on the Binance Smart chain network based on the BEP-20 protocol. It is a respository of value for assets, objects, characters etc. on the gaming platform.</p>
      </div>
    </section>
  );
};

export default IbatSection;
