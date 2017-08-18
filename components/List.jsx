import React from 'react';

function List(props) {
  let data = props.data;
  for(let a = 0; a < data.length; a++) {
    data[a]['address'] = data[a]['Tualetes adrese Rīgā'];
    data[a]['open'] = data[a]['Darba Laiks'];
    data[a]['disabled'] = data[a]['Cilvēkiem ar kustību traucējumiem'] == 'jā' ? true : false;
    data[a]['changing_table'] = data[a]['Bērnu pārtinamie galdiņi'] == 'jā' ? true : false;
    delete(data[a]['Tualetes adrese Rīgā']);
    delete(data[a]['Darba Laiks']);
    delete(data[a]['Cilvēkiem ar kustību traucējumiem']);
    delete(data[a]['Bērnu pārtinamie galdiņi']);
  }
  const listItems = data.map((data, index) =>
    <li key={index}>
      <strong>{data['address']}</strong>
      &nbsp;
      <em>{data['open']}</em>
      &nbsp;
      {(() => {
        if(data['disabled']) {
          return <i className="fa fa-fw fa-wheelchair" aria-hidden="true"></i>;
        }
      })()}
      &nbsp;
      {(() => {
        if(data['changing_tadisabledble']) {
          return <i className="fa fa-fw fa-child" aria-hidden="true"></i>;
        }
      })()}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
