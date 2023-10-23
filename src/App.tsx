// src/App.tsx
import PostList from "./components/PostList";

import { Provider } from 'react-redux';
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostList />
      </Provider>
    </div>
  );
}

export default App;
