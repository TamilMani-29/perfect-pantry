import React from 'react'

const LogoutButton = () => {
  return (
    <div className="logout-btn">
      <form action="/logout" method="POST">
        <button className="logout" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
}

export default LogoutButton