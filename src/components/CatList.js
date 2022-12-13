import React from 'react'; // no longer necessary

import Cat from './Cat';

const CatList = (props) => {
  const genCatListJSX = (props) => {
    return props.catlist.map((cat) => {
      return (
        <ul>
          < Cat name={cat.name} personality={cat.personality} color={cat.color} caretaker={cat.caretaker} />
        </ul>
      )
    })
  }
  return <ul>{genCatListJSX(props)}</ul>
};




export default CatList;