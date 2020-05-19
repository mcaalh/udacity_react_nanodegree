import React from 'react'

const ListItems = () => {
    return <div>
        <ol className="item-list">
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>;
}

export default ListItems
