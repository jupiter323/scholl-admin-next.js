import React from 'react';

export const formatTimeLoggedIn = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return (
    <React.Fragment>
      { hours !== 0 && (
        <React.Fragment>
          <b className="text-large">{hours}</b>
          <span className="text-small">hrs </span>
        </React.Fragment>
      )}
      { minutes !== 0 && (
        <React.Fragment>
          <b className="text-large">{minutes}</b>
          <span className="text-small">min</span>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export const formatVideoWatched = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return (
    <React.Fragment>
      { hours !== 0 && (
        <React.Fragment>
          <b className="text-large">{hours}</b>
          <span className="text-small">hrs </span>
        </React.Fragment>
      )}
      { minutes !== 0 && (
        <React.Fragment>
          <b className="text-large">{minutes}</b>
          <span className="text-small">min</span>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}