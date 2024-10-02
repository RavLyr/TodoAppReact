function TODOList({todo}) {
  return <ol className="todo_list">
    {(todo && todo.length) > 0 ? (
      todo?.map((item, index) => <Item key={index} item={item} />)
    ) : (<p>Seems like your lazy today</p>)}
  </ol>;
}

function Item({ item }) {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
        <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}


export default TODOList;
