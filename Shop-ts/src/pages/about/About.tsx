import SectionTitle from "../../components/section-title/SectionTitle"
import styled from "styled-components"
import BannerAbout from "../../components/banner/BannerAbout"
import FunFact from "../../components/FunFact"

const About = styled.div`
    padding-top:20rem;
`

export default ()=>{
    return <About>

            <SectionTitle/>
            <BannerAbout/>
            <FunFact/>

    </About>
} 