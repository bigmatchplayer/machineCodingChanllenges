import React from "react";

const checkBoxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      let newState = {
        ...prev,
        [node.id]: isChecked,
      };

      const updateChild = (node) => {
        node.children.forEach((ele, index) => {
          newState[ele.id] = isChecked;

          if (ele.children) {
            updateChild(ele);
          }
        });
      };

      updateChild(node);

      //if all the children is checked then checked parent also

      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkboxesData.forEach((ele) => verifyChecked(ele));

      return newState;
    });
  };
};

const NestedCheckboxesMain = () => {
  return <div></div>;
};

export default NestedCheckboxesMain;
