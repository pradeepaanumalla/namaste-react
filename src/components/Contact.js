import React from "react";
const Contact=()=>{
    return (
        <div className="contactus">
            <h4 role="heading" className="font-bold m-4 p-4" >Contact us </h4>
            <form>
                <input className="border border-black p-2 m-2 block" type="text" placeholder="Name" />
                <input className="border border-black p-2 m-2 block" type="text" placeholder="Message" />
                <button role="button" className="bg-gray-100 rounded-lg border border-black p-2 m-2 block">Submit</button>
            </form>
        </div>
    )
}
export default Contact;