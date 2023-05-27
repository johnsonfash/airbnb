import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOutletContext } from 'react-router-dom';
import img from '../assets/image-1.png'
import PreloadImage from '../components/media/preloadImage';

function IndexPage() {
  const { toggleDetail } = useOutletContext<{ toggleDetail: () => void }>()

  return (
    <div>
      <div className="d-flex flex-wrap align-items-stretch">
        {
          Array(10).fill(0).map((_, i) =>
            <div className="p-3 col-12 col-sm-6 col-md-4 col-xl-3" key={i}>
              <div className="pointer rounded-4 overflow-hidden">
                <div className='position-relative'>
                  <div onClick={toggleDetail}>
                    <PreloadImage src={img} lg={200} />
                  </div>
                  <button className="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className='p-3'>
                  <h5 className='fw-bold my-0'>Whitefish Estate</h5>
                  <small>White, Montana, United States</small>
                  <div className='d-flex mt-5 align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                      <h6 className='my-0 fw-bold'>$10,000</h6>
                      <span className="d-inline-block ms-1">/ night</span>
                    </div>
                    <div><FontAwesomeIcon icon={faStar} /> <span className='d-inline-block'>5.0</span> </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default IndexPage;
