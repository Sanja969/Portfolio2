import { FooterContainer } from "./footer.styles";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <FooterContainer>
      <Typewriter
        
        onInit={(typewriter)=> {

        typewriter
        
        .typeString("Visit my repositories on GitHub ")
        .pauseFor(1000)
        .typeString("and check for all my publiced project.")
        .start()
        }}
        />
        <a href="https://github.com/Sanja969?tab=repositories">&gt;&gt; Repo</a>
        <h6>Copyright @Sanja969</h6>
    </FooterContainer>
  )
}

export default Footer;