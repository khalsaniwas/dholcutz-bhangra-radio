import React from 'react';

const Player = props => {
  const iframeHtml = '<iframe src="https://beta.dholcutzradio.com/public/dholcutz_bhangra_radio/embed" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 150px; border: 0;"></iframe>';
  const iframe = () => {
    return {
      __html: iframeHtml
    }
  };


  return (
    <div className="player" dangerouslySetInnerHTML={iframe()} />
  );
};

export default Player