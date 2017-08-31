import React from 'react';

function List(props) {
  let data = props.data;

  const listItems = data.map((data, index) =>
    <li key={index}>
      <strong>{data['name']}</strong>
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
        if(data['changing_table']) {
          return <i className="fa fa-fw fa-child" aria-hidden="true"></i>;
        }
      })()}
    </li>
  );

  return (
    <div className="pepo-list">
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
