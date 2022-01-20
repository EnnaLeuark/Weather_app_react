import React from "react";

export default function citySearch() {
  return (
    <div className="citySearch">
      <div class="row">
        <div className="col-12">
          <div className="input-group citySearch">
            <form id="formInput">
              <input
                type="text"
                className="form-control"
                placeholder="Weather in"
                id="cityInput"
                aria-label="Weather in with two button addons"
                autocomplete="on"
              />
            </form>
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
            <button
              className="btn btn-outline-secondary"
              id="currentLocationButton"
              type="button"
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
