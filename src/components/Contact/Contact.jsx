
export function Contact() {






    return <>

        <div className="contact mb-4">
        <div className='pt-5 text-center mb-3'>
            <h2 className='fw-bolder mb-3 fs-1 text-uppercase'>conatct section</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='line me-3'></div>
                <i className="fa-solid fa-star"></i>
                <div className='line ms-3'></div>
            </div>
        </div>


        <form className=" w-50 mx-md-auto p-3 mt-5 ">
            <label className=" position-relative top-0 __top  " htmlFor="username">userName:</label>
            <input type="text" id="username" placeholder="userName" className="w-100  border-0 border-bottom p-3 rounded-2 position-relative"/>

            <label className="position-relative top-0 __top" htmlFor="userage">userAge:</label>
            <input type="text" id="userage" placeholder="userAge" className="w-100  border-0 border-bottom p-3 rounded-2 position-relative" />

            <label className="position-relative top-0 __top" htmlFor="useremail">userEmail:</label>
            <input type="email" id="useremail" placeholder="userEmail" className="w-100  border-0 border-bottom p-3 rounded-2 position-relative"/>

            <label className="position-relative top-0 __top" htmlFor="userpassword">userPassword:</label>
            <input type="password" id="userpassword" placeholder="userPassword" className="w-100  border-0 border-bottom p-3 rounded-2 position-relative"/>

            <button className="btn me-auto mt-4 text-white">send Message</button>
        </form>
        </div>
    </>
}