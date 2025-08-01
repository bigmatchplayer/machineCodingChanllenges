import { useEffect, useState } from "react";
import data from "./Data.json";

const List = ({ list, setData }) => {
  const openFolder = (e, id, list) => {
    const updateChildren = (list, id) => {
      return list.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            open: !ele.open,
          };
        }

        if (ele.children && ele.children.length > 0) {
          return {
            ...ele,
            children: updateChildren(ele.children, id),
          };
        }

        return ele;
      });
    };

    const array = updateChildren(list, id);
    console.log("array from func", array);
    setData(array);
  };

  // const openFolder = (e, id, list) => {
  //   const updateChildren = (list, id) => {
  //     const updateArray = list.map((ele, index) => {
  //       if (ele.id == id) {
  //         return {
  //           ...ele,
  //           open: !ele.open,
  //         };
  //       }

  //       if (ele.open == true && ele.children.length > 0) {
  //         return {
  //           ...ele,
  //           children: updateChildren(ele.children),
  //         };
  //       }
  //     });
  //     return updateArray;
  //   };
  //   const array = updateChildren(list, id);
  //   console.log("aray from func", array);
  //   setData(array);
  // };

  return (
    <div>
      {list.map((item, index, list) => {
        return (
          <div>
            <span
              style={
                item.isFolder ? { fontWeight: "700" } : { fontWeight: "200" }
              }
            >
              {" "}
              {item.name}
            </span>
            {item.isFolder && (
              <span
                data-name={item.name}
                onClick={(e) => openFolder(e, item.id, list)}
                style={{ marginLeft: "3px ", cursor: "pointer" }}
              >
                +
              </span>
            )}
            {item.children && item.open == true && (
              <div style={{ marginLeft: "10px" }}>
                <List list={item.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  const [fileData, setData] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  return (
    <div>
      <List list={fileData} setData={setData} />
    </div>
  );
};

export default FileExplorer;
