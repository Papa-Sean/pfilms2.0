import React from 'react';
import { useState } from 'react';

const WriteSitcomForm = ({ plot1, plot2, plot3, selectedShow }) => {
  const [plot1Text, setPlot1Text] = useState('');
  const [plot2Text, setPlot2Text] = useState('');
  const [plot3Text, setPlot3Text] = useState('');
  const handlePlot1Text = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handlePlot1Text}>
      <div className="collapse collapse-plus bg-primary">
        <input
          type="radio"
          name="my-accordion-3"
          defaultChecked
        />
        <div className="collapse-title text-xl font-medium text-center">
          {plot1}
        </div>
        <div className="collapse-content">
          <textarea
            value={plot1Text}
            onChange={(e) => setPlot1Text(e.target.value)}
            placeholder=""
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
      </div>
      <div className="collapse collapse-plus bg-primary">
        <input
          type="radio"
          name="my-accordion-3"
        />
        <div className="collapse-title text-xl font-medium text-center">
          {plot2}
        </div>
        <div className="collapse-content">
          <textarea
            value={plot2Text}
            onChange={(e) => setPlot2Text(e.target.value)}
            placeholder=""
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>{' '}
        </div>
      </div>
      <div className="collapse collapse-plus bg-primary">
        <input
          type="radio"
          name="my-accordion-3"
        />
        <div className="collapse-title text-xl font-medium text-center">
          {plot3}
        </div>
        <div className="collapse-content">
          <textarea
            value={plot3Text}
            onChange={(e) => setPlot3Text(e.target.value)}
            placeholder=""
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>{' '}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-accent btn-block capitalize mt-4"
      >
        Submit your show
      </button>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary btn-block"
        onClick={() => document.getElementById('my_modal_4').showModal()}
      >
        Click here to see your show!
      </button>
      <dialog
        id="my_modal_4"
        className="modal"
      >
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Your Episode of {selectedShow}</h3>
          <p className="py-4">A-plot: {plot1Text}</p>
          <p className="py-4">B-plot: {plot2Text}</p>
          <p className="py-4">C-plot: {plot3Text}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </form>
  );
};

export default WriteSitcomForm;
