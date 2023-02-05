import poweredLogo1 from '../assets/images/powered-logo1.svg'
import poweredLogo2 from '../assets/images/powered-logo2.svg'
import poweredLogo3 from '../assets/images/powered-logo3.svg'
import poweredLogo4 from '../assets/images/powered-logo4.svg'
import poweredLogo5 from '../assets/images/powered-logo5.svg'
import auditLogo1 from '../assets/images/audit-logo1.svg'
import auditLogo2 from '../assets/images/audit-logo2.svg'

const SponsorsSection = () => {
  return (
    <section className="pt-10 py-14 md:p-20">
      <div className="about-sec-title-div md:pb-14 pb-6">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-3 ">
        POWERED BY
        </h2>
        <hr className="sec-title-hr" />
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-center md:gap-10 gap-4 mx-auto'>
        <img src={poweredLogo1} alt="powered Logo 1" />
        <img src={poweredLogo2} alt="powered Logo 2" />
        <img src={poweredLogo3} alt="powered Logo 3" />
        <img src={poweredLogo4} alt="powered Logo 4" />
        <img src={poweredLogo5} alt="powered Logo 5" />
      </div>
      <div className="about-sec-title-div md:pb-14 py-10 ">
        <h2 className="about-sec-title text-3xl md:text-4xl lg:text-5xl font-bold pb-3 ">
        AUDITS
        </h2>
        <hr className="sec-title-hr" />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 mx-auto'>
        <img src={auditLogo1} alt="audit Logo 1" />
        <img src={auditLogo2} alt="audit Logo 2" />
      </div>
    </section>
  );
};

export default SponsorsSection;
