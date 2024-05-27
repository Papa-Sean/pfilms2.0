import { SectionTitle } from '../components';
import paradizoT from '../assets/paradizoT.png';

const Store = () => {
  return (
    <sections className="h-full pb-72 pt-8">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-12 pt-4">
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
      <section className="grid place-content-center pt-4">
        <a
          href="https://www.paradizofilms.com/store/p/style-01-ej5na-mltbp"
          target="_blank"
          rel="noreferrer"
          className="card lg:w-96 w-48 items-center shadow-xl hover:shadow-2xl transition duration-500 pt-8"
        >
          <figure className="px-2 ">
            <img
              src={paradizoT}
              alt="Paradizo T"
              className="rounded-xl lg:h-64 lg:w-64 h-32 w-32 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title tracking-wider pb-2">Buy now for $25</h2>
          </div>
        </a>
      </section>
    </sections>
  );
};

export default Store;
