import React from "react";

export const TododList = ({ todolist, deleteHandler }) => {
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
                  ✯{todo}{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandler(index)}
                  >
                    DELETE
                  </button>
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
