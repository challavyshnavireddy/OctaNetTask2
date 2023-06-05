import React, { useState } from "react";
// import { IoIosRefresh, IoMdDoneAll } from "react-icons/io";
export const TododList = ({ todolist, deleteHandler }) => {
  // const [icon, setIcon] = useState( new Array(todolist.length).fill(<IoIosRefresh />)
  // );

  // const getsetIcon = (index) => {
  //   const newIcon=[...icon]
  //   newIcon[index]=<IoMdDoneAll/>
  //   setIcon(newIcon)
  // };
  {
    if (todolist.length === 0) {
      return <h3 className="t mt-5">NO Tasks Yet...!!</h3>;
    } else {
      return (
        <div className="m-5">
          <h3 className="t">Your Tasks :</h3>
          <div className="m">
            {todolist.map((todo, index) => (
              <div key={index}>
                <h5 className="text">
                  {/* {icon[index]}  */}
                  {todo} &nbsp; &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(index)}
                  >
                    DELETE
                  </button>{" "}
                  
                  &nbsp; &nbsp; &nbsp;{" "}
                  {/* <button
                    className="btn btn-primary"
                    onClick={() => getsetIcon(index)}
                  >
                    DONE
                  </button> */}

                </h5>{" "}
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};
