import data from "./Data.json";

const FileExplorer = () => {
  return (
    <div>
      {data.map((ele) => {
        return <div>{ele.name}</div>;
      })}
    </div>
  );
};

export default FileExplorer;
