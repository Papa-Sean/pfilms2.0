import { SectionTitle } from '../components';

const About = () => {
  return (
    <section className="h-4/5 pt-32">
      <SectionTitle text="about us" />
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-12">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Paradizo
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Films
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto pb-96">
        Paradizo Films is the brainchild of Metro Detroit's own Joseph Naman.
        Think of him like a digital filmmaking Joumana because he is EVERYWHERE!
        Joseph is a filmmaker, comedian and renaissance man creating
        opportunities for himself and other creators in the digital space.
        Paradizo Films currently creates short films, long format podcasts and
        social media content. Recently Paradizo ventured into live show
        production with its first LIVE comedy show where comics had an
        opportunity to tape their sets to use for future show submissions. Stay
        tuned for more as Joseph and his Paradizo affiliates continue to stay on
        the cutting edge of content!
      </p>
    </section>
  );
};

export default About;
