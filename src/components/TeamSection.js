import suresh from '../assets/images/suresh.svg'
import jagjeet from '../assets/images/jagjeet.svg'
import vinay from '../assets/images/vinay.svg'
import prashant from '../assets/images/prashant.svg'
import chitra from '../assets/images/chitra.svg'
import ajeet from '../assets/images/ajeet.svg'
import abhinay from '../assets/images/abhinay.svg'
import rishita from '../assets/images/rishita.svg'
import {AiFillLinkedin} from 'react-icons/ai'
const TeamSection = () => {
    return ( 
        <section className='bg-slate-800 text-white pb-14 px-40'>
            <h2 className="font-bold text-4xl mb-14 pt-10">MEET THE TEAM</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                <div className='flex flex-col'>
                    <img src={suresh} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>SURESH JOSHI</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>CO-FOUNDER</p>
                </div>
                <div className='flex flex-col'>
                    <img src={jagjeet} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>JAGJEET JENA</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>CEO</p>
                </div>
                <div className='flex flex-col'>
                    <img src={vinay} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>VINAY CHHABRA</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>CTO</p>
                </div>
                <div className='flex flex-col'>
                    <img src={prashant} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>PRASHANT RAO</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>CDO & CCO</p>
                </div>
                <div className='flex flex-col'>
                    <img src={chitra} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>CHITRA MOKTALI</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>HEAD OF OPERATIONS</p>
                </div>
                <div className='flex flex-col'>
                    <img src={ajeet} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>AJEET GILL</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>LEAD DEV</p>
                </div>
                <div className='flex flex-col'>
                    <img src={abhinay} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>ABHINAY CHHABRA</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>GRAPHIC DESIGNER</p>
                </div>
                <div className='flex flex-col'>
                    <img src={rishita} alt="suresh img" className='drop-shadow-team mb-4 w-5/6 mx-auto'/>
                    <div className='flex items-center justify-center gap-2'>
                    <h4 className='font-bold text-2xl'>RISHITA MITRA</h4>
                    <AiFillLinkedin className='text-2xl text-blue-300'/>
                    </div>
                    <p className='text-lg text-blue-300'>CONTENT WRITER</p>
                </div>
            </div>
        </section>
     );
}
 
export default TeamSection;