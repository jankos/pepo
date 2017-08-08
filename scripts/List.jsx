import React from 'react';

function List(props) {
  const data = props.data;
  const listItems = data.map((data, index) =>
    <li key={index}>{data['Tualetes adrese Rīgā']}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
