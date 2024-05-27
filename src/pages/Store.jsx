import { SectionTitle } from '../components';
import paradizoT from '../assets/paradizoT.png';

const Store = () => {
  return (
    <sections className="lg:h-5/6 pb-8 mt-16">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-12 pt-16">
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
      <SectionTitle text="Buy A T-Shirt and support the boiz!" />
      <a
        href="https://www.paradizofilms.com/store/p/style-01-ej5na-mltbp"
        target="_blank"
        rel="noreferrer"
        className="card flex shadow-xl hover:shadow-2xl transition duration-500"
      >
        <figure className="px-4 pt-12">
          <img
            src={paradizoT}
            alt="Paradizo T"
            className="rounded-xl h-64 w-64 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title tracking-wider">Buy now for $25</h2>
        </div>
      </a>
    </sections>
  );
};

export default Store;
