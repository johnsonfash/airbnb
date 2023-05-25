import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faBath,
  faBed,
  faBriefcase,
  faCalendarXmark,
  faCameraRetro,
  faCar,
  faDumpsterFire,
  faInfoCircle,
  faPersonCircleCheck,
  faPersonShelter,
  faPersonWalkingLuggage,
  faShield,
  faShower,
  faStar,
  faTv,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import img1 from "../../assets/image-1.png";
import img2 from "../../assets/image-2.png";
import img3 from "../../assets/image-3.png";
import user from "../../assets/profile.png";

function Detail({ open, toggle }: { open: boolean; toggle?: () => void }) {
  const [display, setdisplay] = useState(false);
  const [checkIn, setcheckIn] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [checkOut, setcheckOut] = useState(
    new Date().toISOString().substr(0, 10)
  );

  useEffect(() => {
    setdisplay(open);
  }, [open]);

  return (
    <div
      className={`${
        display ? "start-0" : ""
      }  w-100 d-flex z-index-3 detail-panel top-0 bottom-0 position-fixed`}
    >
      <div onClick={toggle} className="h-100 w-25 text-end p-4">
        <button className="btn btn-light rounded-circle">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="bg-white overflow-auto h-100 w-75 p-4 position-relative">
        <div className="d-flex align-items-stretch h-60">
          <div className="w-55 me-2 position-relative overflow-hidden rounded-4">
            <img src={img1} alt="" />
            <button className="btn rounded-4 btn-light position-absolute bottom-0 start-0 m-3">
              <small>View All Photos</small>
            </button>
          </div>
          <div className="w-45 ps-2 d-flex flex-column h-100">
            <div className="h-50 overflow-hidden mb-2 rounded-4">
              <img src={img2} alt="" />
            </div>
            <div className="h-50 w-100 rounded-4 overflow-hidden mt-2">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div>
          <button className="btn mt-3 bg-white border py-1">
            <span>🍷</span>
            <span className="d-inline-block ms-2">Superhost</span>
          </button>
        </div>
        <div className="d-flex pt-3 gap-4 position-relative">
          <div className="w-60">
            <div className="d-flex mt-2 justify-content-between align-items-center">
              <h3 className="fw-bold">Whitefish Estate</h3>
              <div>
                <button className="btn btn-light rounded-4">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </button>
                <button className="btn ms-2 btn-light rounded-4">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
            <div className="text-muted">Whitefish, Montana, United States</div>
            <div className="d-flex mt-3 pb-3 border-bottom">
              <div className="d-flex align-items-center me-4 p-2">
                <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                <span className="d-inline-block ms-2">16+ guests</span>
              </div>
              <div className="d-flex align-items-center me-4 p-2">
                <FontAwesomeIcon icon={faPersonShelter} />
                <span className="d-inline-block ms-2">8 bedrooms</span>
              </div>
              <div className="d-flex align-items-center me-4 p-2">
                <FontAwesomeIcon icon={faBed} />
                <span className="d-inline-block ms-2">8 beds</span>
              </div>
              <div className="d-flex align-items-center me-4 p-2">
                <FontAwesomeIcon icon={faBath} />
                <span className="d-inline-block ms-2">8 baths</span>
              </div>
            </div>
            <div className="d-flex border-bottom pb-5 gap-4 pt-2 my-4 justify-content-between align-items-center">
              <div className="w-33">
                <div className="display-7 min-w-4 min-h-4 d-inline-flex justify-content-center align-items-center rounded-circle text-danger bg-danger bg-opacity-10">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h5 className="mt-4">Dedicated workspace</h5>
                <div className="text-muted">
                  A private room with wifi that's well-suited for working.
                </div>
              </div>
              <div className="w-33">
                <div className="display-7 min-w-4 min-h-4 d-inline-flex justify-content-center align-items-center rounded-circle text-danger bg-danger bg-opacity-10">
                  <FontAwesomeIcon icon={faPersonCircleCheck} />
                </div>
                <h5 className="mt-4">Self check-in</h5>
                <div className="text-muted">
                  Check yourself in with the keypad.
                </div>
              </div>
              <div className="w-33">
                <div className="display-7 min-w-4 min-h-4 d-inline-flex justify-content-center align-items-center rounded-circle text-danger bg-danger bg-opacity-10">
                  <FontAwesomeIcon icon={faCalendarXmark} />
                </div>
                <h5 className="mt-4">Free cancellation before Jul 25</h5>
                <div className="text-muted">
                  A private room with wifi that's well-suited for working.
                </div>
              </div>
            </div>
            <div className="py-3">
              <h4 className="fw-bold">About this place</h4>
              <div className="text-muted">
                Enjoy a quiet getaway in this charming cottage renovated,
                designed and owned by Chip and Joanna Gaines. Originally the
                carriage house for Hillcrest Estate, this home includes one
                bathroom, one bath, an office nook and a private back patio.
                This makes it the perfect getaway for a party of two, or if
                you're stopping through town and need a restful place to
                retreat.
              </div>
              <h4 className="mt-4">The place</h4>
              <div>
                An open living, dining, and kitchen area provide ample room in
                this cozy cottage. French double
              </div>
              <div className="mt-4 pb-4 border-bottom">
                <span className="d-inline-block text-danger">Read more</span>
              </div>
            </div>
            <div className="py-4 border-bottom">
              <h4 className="mb-4 fw-bold">What this place offers</h4>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="col-4">
                  <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                  <span className="d-inline-block ms-2">Kitchen</span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                  <span className="d-inline-block ms-2">
                    Private patio or balcony
                  </span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                  <span className="d-inline-block ms-2">
                    Centrail air conditioning
                  </span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="col-4">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span className="d-inline-block ms-2">
                    Dedicated workspace
                  </span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faWifi} />
                  <span className="d-inline-block ms-2">Wifi</span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faDumpsterFire} />
                  <span className="d-inline-block ms-2">Heating</span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="col-4">
                  <FontAwesomeIcon icon={faTv} />
                  <span className="d-inline-block ms-2">55' 4k TV</span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faCar} />
                  <span className="d-inline-block ms-2">1 parking space</span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faCameraRetro} />
                  <span className="d-inline-block ms-2">Security cameras</span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="col-4">
                  <FontAwesomeIcon icon={faShower} />
                  <span className="d-inline-block ms-2">
                    Free dryer - in unit
                  </span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faShower} />
                  <span className="d-inline-block ms-2">
                    Free washer - in unit
                  </span>
                </div>
                <div className="col-4">
                  <FontAwesomeIcon icon={faShower} />
                  <span className="d-inline-block ms-2">Ceiling fans</span>
                </div>
              </div>
              <div className="text-danger d-inline-block">Read more</div>
            </div>
            <div className="py-4 border-bottom">
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <h4 className="fw-bold mt-2">Review</h4>
                <div>
                  <span className="d-inline-block">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="d-inline-block ms-2">5.0 - 124 reviews</span>
                </div>
              </div>
              <div className="p-4 border rounded-4">
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">Cleaniness</div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-100"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">5.0</div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">Accuracy</div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-98"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">4.9</div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">
                    Communication
                  </div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-96"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">4.8</div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">Location</div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-96"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">4.8</div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">Check-in</div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-96"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">4.8</div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="no-break w-25 d-inline-block">Value</div>
                  <div className="w-75 range-bar rounded-2 position-relative border">
                    <span className="d-inline-block rounded-2 position-absolute top-0 bottom-0 bg-danger w-84"></span>
                  </div>
                  <div className="no-break d-inline-block ms-2">4.2</div>
                </div>
              </div>
              <div className="d-flex flex-wrap my-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div className="w-50 p-2" key={i}>
                      <div className="p-3 border rounded-4">
                        <div className="d-flex mb-4">
                          <div className="max-w-3 me-3 min-h-3 border rounded-circle overflow-hidden">
                            <img src={user} alt="" />
                          </div>
                          <div>
                            <h5 className="mb-0 fw-bold">Steve</h5>
                            <div className="text-muted">March 2023</div>
                          </div>
                        </div>
                        <div>
                          Abbes's place was so wonderful and just what i needed.
                          It was the perfect escape with a great wood stove,
                          beautiful views, horses and nearby skiing. I'm so
                          greateful.
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="text-danger d-inline-block">View more</div>
            </div>

            <div className="py-4 border-bottom">
              <h4 className="fw-bold mt-2">Where you'll be</h4>
              <iframe
                className="overflow-hidden rounded-4 my-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31704.367470642122!2d3.4976001682787685!3d6.64121839265256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103beeb0ae5ff3cf%3A0x60f7cb2450a5e356!2sAgbala%2C%20Ikorodu%20104101%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1684982006666!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <h5 className="fw-bold">Whitefish, Montana, United States</h5>
              <div className="text-muted">
                The property, given its close proximity in the refreshing
                hillside of Tagaytay and clear blue beaches of Nesugbu, provides
                a quick escape from the hustle and bustle of city life.
              </div>
              <div className="my-4 text-danger d-inline-block">View more</div>
            </div>
            <div className="py-4 border-bottom">
              <h4 className="fw-bold mt-2">Host</h4>
              <div className="d-flex my-4 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="max-w-3 rounded-circle overflow-hidden me-3">
                    <img src={user} alt="" />
                  </div>
                  <div>
                    <h5 className="my-0">Hosted by Brenda</h5>
                    <small className="text-muted">Joined in August 2014</small>
                  </div>
                </div>
                <button className="btn border py-2 rounded-4 border-3">
                  Contact Host
                </button>
              </div>
              <div className="mb-4 d-flex">
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  <span className="d-inline-block ms-2">2,835 reviews</span>
                </div>
                <div className="mx-5">
                  <FontAwesomeIcon icon={faShield} />
                  <span className="d-inline-block ms-2">Identity verified</span>
                </div>
                <div>
                  <span>🍷</span>
                  <span className="d-inline-block ms-2">Superhost</span>
                </div>
              </div>
              <div className="text-muted">
                As a memeber of 4, living in Solana Beach for 25+ years, i love
                to help families enjoy our beautiful area. Vacations are special
                and we do our very best to make them affordable, enjoy...
              </div>
              <div className="my-4 text-danger d-inline-block">View more</div>
            </div>
          </div>
          <div className="w-40">
            <div className="sticky-top">
              <div className="p-4 bg-light rounded-4">
                <div className="d-flex mb-3 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <h4 className="my-0 fw-bold">$10,000</h4>{" "}
                    <span className="d-inline-block ms-1">/ night</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <span className="d-inline-block ms-2">5.0</span>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <div className="w-100">
                    <label className="text-muted">Check in</label>
                    <Input
                      type="date"
                      onChange={(e) => setcheckIn(e.target.value)}
                      value={checkIn}
                      className="bg-white mt-2"
                    />
                  </div>
                  <div className="w-100">
                    <label className="text-muted">Check Out</label>
                    <Input
                      onChange={(e) => setcheckOut(e.target.value)}
                      value={checkOut}
                      type="date"
                      className="bg-white mt-2"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="text-muted mb-2">Guests</label>
                  <Input type="select" className="bg-white">
                    <option value="">1 guest</option>
                    <option value="">2 guests</option>
                  </Input>
                </div>
                <div className="d-flex mt-5 mb-2 justify-content-between">
                  <div className="fw-bold">
                    6 nights <FontAwesomeIcon icon={faInfoCircle} />
                  </div>
                  <div>$2,199</div>
                </div>
                <div className="d-flex mb-2 justify-content-between">
                  <div className="fw-bold">
                    Cleaning fee <FontAwesomeIcon icon={faInfoCircle} />
                  </div>
                  <div>$85</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="fw-bold">
                    Airbnb service fee <FontAwesomeIcon icon={faInfoCircle} />
                  </div>
                  <div>$222</div>
                </div>
                <div className="d-flex mt-5 justify-content-between">
                  <div className="">
                    <h5 className="my-0 fw-bold">Total</h5>
                    <small className="text-muted">Before taxes</small>
                  </div>
                  <div>$2,606</div>
                </div>
                <button className="btn mt-4 rounded-4 py-2 btn-danger w-100">
                  Reserve
                </button>
              </div>
              <div className="p-4 mt-3 bg-light rounded-4 d-flex gap-4">
                <FontAwesomeIcon
                  icon={faGem}
                  className="display-5 text-danger"
                />
                <div>
                  <h5 className="my-0 fw-bold">This is a rare find</h5>
                  <div className="text-muted">
                    Kathlyn's place on Airbnb is usually fully booked.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
