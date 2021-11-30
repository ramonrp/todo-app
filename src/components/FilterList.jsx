const FilterList = (props) => {
  const { setFilter } = props;
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => setFilter("non filter")}>all</button>
        </li>
        <li>
          <button onClick={() => setFilter(false)}>active</button>
        </li>
        <li>
          <button onClick={() => setFilter(true)}>completed</button>
        </li>
      </ul>
    </div>
  );
};

export { FilterList };
