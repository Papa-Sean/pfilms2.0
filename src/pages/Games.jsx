import React, { useEffect, useState } from 'react';
import { SectionTitle } from '../components';

const showList = [
  {
    id: 1,
    show: 'Friends',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Friends-logo.png',
  },
  {
    id: 2,
    show: 'Seinfeld',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Seinfeld_logo.svg',
  },
  {
    id: 3,
    show: "It's Always Sunny",
    image:
      'https://thepopbreak.com/wp-content/uploads/2023/07/its-always-sunny-in-philadelphia-season-16-key-art-scaled-e1685601470149.jpg',
  },
  {
    id: 4,
    show: 'Curb Your Enthusiasm',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Curb_Your_Enthusiasm.png',
  },
];
const plots = ['Plot1', 'Plot2', 'Plot3', 'Plot4', 'Plot5', 'Plot6'];

const Games = () => {
  const [selectedShow, setSelectedShow] = useState('');
  const [plot1, setPlot1] = useState('');
  const [plot2, setPlot2] = useState('');
  const [plot3, setPlot3] = useState('');

  if (selectedShow !== '') {
    return (
      <>
        <SectionTitle text={`Your ${selectedShow} Episode!`} />
      </>
    );
  }

  return (
    <>
      <SectionTitle text="Write your own sitcom like the Boiz!" />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 place-items-center mb-8 mt-8 gap-4">
        {showList.map((shows) => {
          return (
            <div
              className="card w-96 bg-base-100 shadow-xl"
              key={shows.id}
            >
              <figure className="px-10 pt-10">
                <img
                  src={shows.image}
                  alt={shows.show}
                  className="rounded-xl h-36 w-76"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button
                    key={shows.show}
                    value={shows.show}
                    onClick={() => setSelectedShow(shows.show)}
                    className="btn btn-primary btn-block p-4"
                  >
                    Start Writing
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Games;
