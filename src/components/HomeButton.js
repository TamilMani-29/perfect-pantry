import React from 'react'

const HomeButton = () => {
  return (
    <div className="back-home">
      <form action="/">
        <button type="submit" className="home-btn">
          Back To Home
        </button>
      </form>
    </div>
  );
}

export default HomeButton