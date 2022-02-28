import {useState} from 'react'


function SearchForm() {
    const [search, setSearch] = useState('')
    const handleClick = () => {
        console.log(search)
    }

    // const searchCard = (event) => {
    //     event.preventDefault()
    //     console.log('button clicked', event.target)
    // }

    return (
      <>
      {/* <form onSubmit={searchCard}>
          <input />
          <button type="search">Search</button>
      </form> */}
      <input 
      type="text" 
      placeholder="Search" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      </>
    )
  }
  
  export default SearchForm;