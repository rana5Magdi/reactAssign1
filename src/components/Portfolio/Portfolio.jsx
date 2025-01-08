import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
const Portfolio = () => {


  
  







  return (
    <>
      <div className="portfolio mb-4">

        <div className='pt-4 text-center pt-5 mb-3'>
          <h2 className='fw-bolder mb-3 fs-1 text-uppercase'>portfolio component</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img1} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img2} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img3} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img1} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img2} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className='position-relative box'>
                <img className='rounded-3 w-100' src={img3} alt="" />
                <div className='position-absolute top-0 bottom-0 start-0 end-0 overlay d-flex align-items-center justify-content-center'>
                <i className="fa-solid fa-plus plus"></i>
                </div>
              </div>
            </div>
            
        </div>
          </div>
        </div>




       


    
    </>
  )
}

export default Portfolio
