import { useGetPostsQuery } from "../app/api";

function PostList() {
  const { data, error } = useGetPostsQuery({});

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
