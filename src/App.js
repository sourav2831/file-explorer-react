import { useMemo } from "react";
import { SAMPLE_FILE } from "./constants";
import { insertFile } from "./utils";
import Folder from "./Folder";
import "./index.css";

function App() {
  const modifiedSampleFile = useMemo(() => {
    let obj = { id: 0, name: "root", isDir: true, items: [] };
    SAMPLE_FILE.forEach((file) => {
      obj = insertFile(obj, file);
    });
    return obj;
  }, []);
  return (
    <div className="App">
      <Folder fileStructure={modifiedSampleFile} />
    </div>
  );
}

export default App;
