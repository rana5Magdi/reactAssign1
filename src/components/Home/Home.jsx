
import image from '../../assets/avataaars.svg'


export function Home() {

    return <>
       
       <div className="home d-flex justify-content-center align-items-center">
       <div className='text-center'>
        <img className='mb-3' src={image} alt="" />
       <div className='pt-4'>
       <h2 className='fw-bolder mb-3 fs-1 text-uppercase'>start Framework</h2>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='line me-3'></div>
        <i className="fa-solid fa-star"></i>
        <div className='line ms-3'></div>
        </div>
       </div>
        <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
       </div>
      

    </>


}