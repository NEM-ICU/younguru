import React from 'react'

const Root = () => {
  return (
      <div>
          <div>sidebar</div>
          <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
          </nav>
    </div>
  )
}

export default Root