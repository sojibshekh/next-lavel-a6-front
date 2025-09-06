import AbboutBanner from "@/components/modules/aboutpage/AbboutBanner";
import Mission from "@/components/modules/aboutpage/Mission";
import Team from "@/components/modules/aboutpage/Team";
import Vission from "@/components/modules/aboutpage/Vission";


const About = () => {
    return (
        <div>
            <AbboutBanner></AbboutBanner>
           <Mission></Mission>
           <Vission></Vission>

           <Team></Team>
        </div>
    );
};

export default About;