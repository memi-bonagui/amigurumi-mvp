import axios from "axios";

import "./App.css";

function App() {
  const testFetch = async () => {
    // because of our proxy in vite.config, we can now fetch directly to "/api"
    const response = await axios.get("/api");
    console.log(response);
  };

  testFetch();
  return (
    <>
      <h1>anfakjfnkan</h1>
    </>
  );
}

export default App;
