import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
        <form>
            <input onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} type="text" placeholder='search here' className="bg-gray-700 text-white border-none outline-none px-6 tracking-wider rounded-md py-2 w-[400px]" />
        </form>
    </div>
  )
}

export default Search