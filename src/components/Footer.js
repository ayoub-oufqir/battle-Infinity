const Footer = () => {
    return ( 
        <section className="bg-black py-10">
            <div>
                <ul className="font-bold flex flex-col md:flex-row justify-center gap-3 md:gap-6 text-white">
                    <li> <a href="http://localhost:3000/">PRODUCTS</a></li> 
                    <li> <a href="http://localhost:3000/">TOKENOMICS</a></li> 
                    <li> <a href="http://localhost:3000/">ROADMAP</a></li> 
                    <li> <a href="http://localhost:3000/">WHITEPAPER</a></li> 
                    <li> <a href="http://localhost:3000/">PRESS</a></li> 
                    <li> <a href="http://localhost:3000/">TEAM</a></li> 
                    <li> <a href="http://localhost:3000/">CONTACT</a></li> 
                </ul>
            </div>
            <p className="text-blue-300 py-4">Disclaimer: Your investment may go down as well as up in value. Cryptocurrency is not regulated in the UK.</p>
            <p className="text-slate-300">Copyright © 2023 - All rights reserved by BATTLE INFINITY</p>
        </section>
     );
}
 
export default Footer;