import React from 'react'

function Searchbar() {
  return (
    <form onSubmit={e=>e.preventDefault()}>
        <input type='text'/>
    </form>
  )
}

export default Searchbar