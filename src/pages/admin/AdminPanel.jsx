import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../adminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin">
      <div class="row g-2">
        <div className="col-12 cardAdd rounded-2">
          <h2 className="text-center p-1 ">Add new car</h2>
          <div className="row">
            <div className="col-sm-9">
              <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Title
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="col-3">
              <div class="input-group mb-2">
                <span class="input-group-text">$</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Image URL
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text">description</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary ">Add</div>
          </div>
        </div>
        <div class="col-12 cardAdd rounded-2">2 of 3</div>
        <div class="col-12 cardAdd rounded-2">3 of 3</div>
      </div>
    </div>
  );
};

export default AdminPanel;
