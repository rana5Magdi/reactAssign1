

const Footer = () => {
  return (
    <>
   <footer>
 
        <div className="row m-4">
            <div className="col-md-4 p-3">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 p-3">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex justify-content-center align-items-center">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-globe"></i>
                </div>
            </div>
            <div className="col-md-4 p-3">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        
    
   
   </footer>
   <div className="end">
            <p className="text-center">Copyright © Your Website 2021</p>
        </div>
  
    
    </>
  )
}

export default Footer
