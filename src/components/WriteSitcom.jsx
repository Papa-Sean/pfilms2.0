import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import WriteSitcomForm from './WriteSitcomForm';

const aPlotsList = [
  'Lost wallet',
  'Two dates show up at the same restaurant',
  'Parents come to town',
];
const bPlotsList = [
  'Ex calls',
  'A friend form college comes to town',
  'Going to the beach',
];
const cPlotsList = [
  'Go visit grandparents',
  'No date for Valentines Day',
  'New business opportunity',
];

const WriteSitcom = ({ selectedShow }) => {
  const [plot1, setPlot1] = useState('');
  const [plot2, setPlot2] = useState('');
  const [plot3, setPlot3] = useState('');
  const setPlotsState = () => {
    const plotA = aPlotsList[Math.floor(Math.random() * aPlotsList.length)];
    const plotB = bPlotsList[Math.floor(Math.random() * bPlotsList.length)];
    const plotC = cPlotsList[Math.floor(Math.random() * cPlotsList.length)];
    setPlot1(plotA);
    setPlot2(plotB);
    setPlot3(plotC);
  };
  useEffect(() => {
    setPlotsState();
  }, []);

  return (
    <>
      <SectionTitle text="Write your show below:" />
      <WriteSitcomForm
        plot1={plot1}
        plot2={plot2}
        plot3={plot3}
        selectedShow={selectedShow}
      />
    </>
  );
};

export default WriteSitcom;
