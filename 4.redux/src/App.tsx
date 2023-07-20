import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button variant="secondary">hi</Button>
    </div>
  );
}

export default App;
