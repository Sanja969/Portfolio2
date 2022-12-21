/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from 'react';
import { LinksContainer, HeadLineContainer, HomeContainer } from './home.styles'
import StarLink from '../../components/link/link.component';
import theme from '../../assets/load_link.mp3';
import Typewriter from "typewriter-effect";
import { fetchQuoteStart } from '../../redux/quotes/quotes.actions';

const Home = () => {
  const quote = localStorage.getItem('quote');
  
  const Playit = () => {
  const audio = new Audio(theme);
  audio.play();
  }
  useEffect(() => {
    Playit()

  }, []);
  console.log(quote)
  return (
    <HomeContainer>
      <Typewriter
        onInit={(typewriter)=> {
        typewriter
          .typeString(quote)
          .start()
        }}
        />
      
      <HeadLineContainer>
        <img alt="sanja mandic" src="logo3.jpg" width="150" />
        <h2>SANJA MANDIC</h2>
        <p>JavaScript, NodeJS, React, Rest, Express, Ruby, Rails, PostgreSQL, MongoDB, Mechanical Enginering, PLC programming, Yoga.</p>
        <span>[ ] Software Developer</span><span><a href="https://goo.gl/maps/ihnFCVMHQVzMJH7F9">🌎 Serbia</a></span>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929350.343516021!2d18.66778515886544!3d44.19277734765292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1671408532075!5m2!1sen!2srs"
          width="150" height="112" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <LinksContainer>
          <StarLink text= "Projects" url="/portfolio" />
          <StarLink text= "Blogs" url="/portfolio/blogs" />
          <StarLink text= "Articles" url="/portfolio/articles" />
          <StarLink text= "GitHub" url="https://github.com/Sanja969?tab=repositories" />
          <StarLink text= "LinkedIn" url="https://www.linkedin.com/in/sanja-mandic-823995a2/" />
          <StarLink text= "Twitter" url="https://twitter.com/SanjaMandic42"  />
        </LinksContainer>
      </HeadLineContainer>
    </HomeContainer>

  );
}

export default Home;