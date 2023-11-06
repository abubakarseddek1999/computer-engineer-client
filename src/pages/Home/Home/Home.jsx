import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/FAQ";
import Services from "../Services/Services";
import Opinion from "../opinion/Opinion";
import WorkShop from "../workshop/WorkShop";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <WorkShop></WorkShop>
           <Opinion></Opinion>
           <Faq></Faq>
           <Contact></Contact>
           
            
        </div>
    );
};

export default Home;