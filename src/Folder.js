import { useState } from "react";

function Folder({ fileStructure }) {
  const [expand, setExpand] = useState(false);

  if (fileStructure.isDir) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder">
          <span>📁 {fileStructure.name}</span>
          {fileStructure.items.length ? (
            <div className="plus-minus-container">
              <span onClick={() => setExpand(true)}>+</span>
              <span onClick={() => setExpand(false)}>-</span>
            </div>
          ) : (
            <div />
          )}
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {fileStructure.items.map((exp) => {
            return <Folder key={exp.id} fileStructure={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {fileStructure.name}</span>;
  }
}

export default Folder;
