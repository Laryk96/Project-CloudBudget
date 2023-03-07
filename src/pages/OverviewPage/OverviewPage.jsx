import Accent from 'components/Sections/Accent';
import Contact from 'components/Sections/Contact';
import Description from 'components/Sections/Description';
import Features from 'components/Sections/Features';
import Main from 'components/Sections/Main';
import Technology from 'components/Sections/Technology';

const Overview = () => {
  return (
    <main>
      <Main />
      <Description />
      <Features />
      <Technology />
      <Accent />
      <Contact />
    </main>
  );
};

export default Overview;
