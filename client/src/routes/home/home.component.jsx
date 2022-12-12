/* eslint-disable jsx-a11y/iframe-has-title */
import { LinksContainer, HeadLineContainer, HomeContainer } from './home.styles'
import StarLink from '../../components/link/link.component';

const Home = () => {
  return (
    <HomeContainer>
      <HeadLineContainer>
        <img alt="sanja mandic" src="logo3.jpg" width="150" />
        <h2>SANJA MANDIC</h2>
        <p>JavaScript, NodeJS, React, Rest, Expres, Ruby, Rails, PostgreSQL, MongoDB, Mechanical Enginering, PLC programming, Yoga.</p>
        <span>[ ] Software Developer</span><span><a href="https://goo.gl/maps/ihnFCVMHQVzMJH7F9">🌎 Serbia</a></span>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929546.2169708987!2d18.667828795899393!3d44.188836576945086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1670858378171!5m2!1sen!2srs"
          width="150" height="112" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <LinksContainer>
          <StarLink text= "Projects" url="/portfolio" />
          <StarLink text= "GitHub" />
          <StarLink text= "LinkedIn" />
          <StarLink text= "Twitter" />
          <StarLink text= "Blog" />
        </LinksContainer>
      </HeadLineContainer>
    </HomeContainer>

  );
}

export default Home;