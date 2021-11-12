import React from 'react'

export default function Contactus() {
    return (
        <div className="container rounded-lg ">
        <div className="row">
        <div className="col-lg-6 mx-auto">
            <div className="bg-white rounded text-center ">
            <h4 className="mb-80">Contact Form</h4>
            <form  className="row">
                <div className="col-12 text-dark">
                <input type="text" id="name" name="name" placeholder="Full Name" class="form-control px-0 mb-4"/>
                </div>
                <div claclassNamess="col-md-6">
                <input type="email" id="email" name="email" placeholder="Email Address" class="form-control px-0 mb-4"/>
                </div>
                <div className="col-12">
                <textarea name="message" id="message" className="form-control px-0 mb-4"
                    placeholder="Type Message Here"></textarea>
                </div>
                <div className="col-lg-6 col-10 mx-auto">
                <button className="btn btn-dark  w-100">send</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    

</div>
    )
}
