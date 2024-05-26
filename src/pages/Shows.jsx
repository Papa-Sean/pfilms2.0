import React from 'react';
import { SectionTitle } from '../components';
import popular1 from '../assets/popular1.png';
import popular2 from '../assets/popular2.png';
import popular3 from '../assets/popular3.png';
import popular4 from '../assets/popular4.png';
import wae1 from '../assets/wae1.png';
import wae2 from '../assets/wae2.png';
import wae3 from '../assets/wae3.png';
import wae4 from '../assets/wae4.png';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import pboiz1 from '../assets/pboiz1.png';
import pboiz2 from '../assets/pboiz2.png';
import pboiz3 from '../assets/pboiz3.png';
import pboiz4 from '../assets/pboiz4.png';

const popularVideos = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=LJmd3KUufSQ',
    title: 'The PARADIZO BOIZ HATE Elvis!!! | Paradize on Earth',
    src: popular1,
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=x9uOdb1ewz0&t=7s',
    title: 'Interview with a Frankenstein',
    src: popular2,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=qK120p8royI',
    title: 'Has Seagal Gotten Worse? | The P Boiz Podcast',
    src: popular3,
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=HoEtCVKqzl4',
    title: "Call Me If You Get Lost, but it's only DJ DRAMA",
    src: popular4,
  },
];

const wae = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=HadqP5RCBpU',
    title: 'We wrote an episode of Seinfeld!',
    src: wae1,
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=vGZF5Tk8jXM',
    title: 'We wrote an episode of Friends!',
    src: wae2,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=WvMAFVvE7EY',
    title: 'We wrote another episode of Seinfeld!',
    src: wae3,
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=qbeYNUzNsuE',
    title: 'We wrote an episode of Community!',
    src: wae4,
  },
];

const news = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=rWVV97XN2W4&t=79s',
    title: 'Whats the deal with Taylor and Travis?? || Paradizo News',
    src: news1,
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=bZUiuHyHJ0Q',
    title: "Lions to the Superbowl? Jada's talking shit. || Paradizo News",
    src: news2,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=kzqY2qq67Gk',
    title: 'MCU in TROUBLE & New BEATLES SONG is TRASH || Paradizo News',
    src: news3,
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=pm8Tyq_qo7w&t=35s',
    title: 'The Paradizo Thanksgiving Special || Paradizo News',
    src: news4,
  },
];
const pboiz = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=-D43Ilw5lKk&t=3s',
    title: 'Exposing the dark secrets of Lawrence of Arabia',
    src: pboiz1,
  },
  {
    id: 2,
    url: 'https://www.youtube.com/watch?v=kFohm5zlAZU&t=72s',
    title: 'You wont believe this: Ishtar 1987 reaction',
    src: pboiz2,
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=uaG61UIJUks',
    title: 'Which Aladdin was better || The P Boiz Podcast',
    src: pboiz3,
  },
  {
    id: 4,
    url: 'https://www.youtube.com/watch?v=o8Dk2sZ3reg&t=26s',
    title: 'The Last Great Action Heros || The P Boiz Podcast',
    src: pboiz4,
  },
];

const Shows = () => {
  return (
    <>
      <SectionTitle text="Popular Paradizo Videos" />
      <div className="pt-12 grid gap-4 md:gird-cols-2 lg:grid-cols-4 pb-12">
        {popularVideos.map((video) => {
          const { id, url, title, src } = video;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="card w-full shadow-xl hover:shadow-2xl transition duration-500"
            >
              <figure className="px-4 pt-4">
                <img
                  src={src}
                  alt={title}
                  className="rounded-xl h-full w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title tracking-wider">{title}</h2>
              </div>
            </a>
          );
        })}
      </div>
      <SectionTitle text="We Wrote An Episode" />
      <div className="pt-12 grid gap-4 md:gird-cols-2 lg:grid-cols-4">
        {wae.map((video) => {
          const { id, url, title, src } = video;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="card w-full shadow-xl hover:shadow-2xl transition duration-500"
            >
              <figure className="px-4 pt-4">
                <img
                  src={src}
                  alt={title}
                  className="rounded-xl h-full w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title tracking-wider">{title}</h2>
              </div>
            </a>
          );
        })}
      </div>
      <SectionTitle text="Paradizo News" />
      <div className="pt-12 grid gap-4 md:gird-cols-2 lg:grid-cols-4">
        {news.map((video) => {
          const { id, url, title, src } = video;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="card w-full shadow-xl hover:shadow-2xl transition duration-500"
            >
              <figure className="px-4 pt-4">
                <img
                  src={src}
                  alt={title}
                  className="rounded-xl h-full w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title tracking-wider">{title}</h2>
              </div>
            </a>
          );
        })}
      </div>
      <SectionTitle text="The P Boiz Podcast" />
      <div className="pt-12 grid gap-4 md:gird-cols-2 lg:grid-cols-4">
        {pboiz.map((video) => {
          const { id, url, title, src } = video;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="card w-full shadow-xl hover:shadow-2xl transition duration-500"
            >
              <figure className="px-4 pt-4">
                <img
                  src={src}
                  alt={title}
                  className="rounded-xl h-full w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title tracking-wider">{title}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Shows;
