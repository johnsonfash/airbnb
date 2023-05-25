import { useEffect, useState } from "react";
import { Input } from "reactstrap";

function Filter({ open }: { open: boolean }) {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    setdisplay(open);
  }, [open]);

  return (
    <div
      className={`${display ? "end-0" : ""
        } filter-panel position-fixed shadow-lg z-index-1 px-3 pb-0 pt-3 bg-white`}
    >
      <div className="d-flex border-bottom pt-2 pb-3 align-items-center justify-content-between">
        <h5 className="my-0 fw-bold">Filter</h5>
        <button className="btn text-danger py-0">
          <small>Clear All</small>
        </button>
      </div>
      <div className="fw-bold mt-3">Price range</div>
      <small className="text-muted">The average high price is $133</small>
      <div className="d-flex mt-2 gap-3 justify-content-between align-items-center">
        <div>
          <label>
            <small className="text-muted">Min Price</small>
          </label>
          <input type="text" placeholder="$" className="form-control mt-2" />
        </div>
        <div>
          <label>
            <small className="text-muted">Max Price</small>
          </label>
          <input type="text" placeholder="$" className="form-control mt-2" />
        </div>
      </div>
      <div className="mt-4 pb-3 border-bottom">
        <div className="fw-bold my-3">Type of places</div>
        <div className="d-flex mb-3">
          <div className="min-w-1 me-2">
            <Input type="checkbox" id="entire-place" />
          </div>
          <label htmlFor="entire-place">
            <div>Entire Place</div>
            <small>A place all to yourself</small>
          </label>
        </div>
        <div className="d-flex mb-3">
          <div className="min-w-1 me-2">
            <Input type="checkbox" id="prive-room" />
          </div>
          <label htmlFor="prive-room">
            <div>Private Room</div>
            <small>
              Your own room in a home or hotel, plus some shared common spaces.
            </small>
          </label>
        </div>
        <div className="d-flex mb-2">
          <div className="min-w-1 me-2">
            <Input type="checkbox" id="shared-room" />
          </div>
          <label htmlFor="shared-room">
            <div>Shared Room</div>
            <small>
              A sleeping place and common areas that they be shared with others.
            </small>
          </label>
        </div>
      </div>
      <div className="mt-3 pb-3 border-bottom">
        <div className="fw-bold my-3">Rooms, beds, and bath</div>
        {["Bedrooms", "Beds", "bathrooms"].map((item, i) => (
          <div key={i}>
            <small className="fw-bold">{item}</small>
            <div className="d-flex justify-content-between mt-2 mb-3">
              <button className="btn btn-dark min-w-3 max-w-3 d-inline-flex justify-content-center rounded-5 border">
                Any
              </button>
              <button className="btn btn-light min-w-3 max-w-3 mx-1 rounded-5 border">
                1
              </button>
              <button className="btn btn-light min-w-3 max-w-3 mx-1 rounded-5 border">
                2
              </button>
              <button className="btn btn-light min-w-3 max-w-3 mx-1 rounded-5 border">
                3
              </button>
              <button className="btn btn-light min-w-3 max-w-3 mx-1 rounded-5 border">
                4
              </button>
              <button className="btn btn-light min-w-3 max-w-3 mx-1 rounded-5 border">
                5+
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky-bottom bg-white z-index-1 py-4 border-top">
        <button disabled className="btn btn-danger rounded-3 w-100">Show 86 Homes</button>
      </div>
    </div>
  );
}

export default Filter;
