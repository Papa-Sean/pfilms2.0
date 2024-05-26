import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import SectionTitle from './SectionTitle';

const carouselImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  return (
    <div className="grid lg:h-full lg:justify-center lg:grid-cols-2 gap-24 items-center mt-4 pt-36">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Paradizo Films
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Just a bunch of good dudes in good moods here bringing you the latest
          takes on movies and Pop-Culture as well as short form content with
          much more to come! Head over to our YouTube page or click below to
          find out more about us!
        </p>
        <div className="mt-10 flex flex-cols-2 gap-x-6 ">
          <Link
            to="/about"
            className="btn btn-primary"
          >
            About Paradizo
          </Link>
          <Link
            to="/shows"
            className="btn btn-primary"
          >
            Our Shows
          </Link>
        </div>
      </div>
      <div className="lg:hidden ">
        <SectionTitle text="Swipe to see what we do:" />
      </div>
      <div className=" h-[20rem] carousel carousel-center p-4 space-x-4 bg-primary rounded-box pb24">
        {carouselImages.map((image) => {
          return (
            <div
              key={image}
              className="carousel-item"
            >
              <img
                src={image}
                className="rounded-box h-full w-full object-cover"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
