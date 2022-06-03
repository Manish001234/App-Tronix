import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Checkout = () => {

  const navigate = useNavigate()

//   const [ formData , setFormData] = React.useState({
//     firstName : "",
//     lastName : "",
//     address :"",
//     country : "",
//     state:""
// })

// const HandleChange = (e) => {

//   const {id,value} = e.target;
//   setFormData({...formData , [id] : value})
// }
const handleSubmit=(e)=>{
  e.preventDefault();
      navigate("/Payment")
  // console.log("hello",formData)
//   if(formData.firstName !== "" && formData.lastName !== ""  && formData.address !== ""  ){
//     navigate("/Payment")
// }
}


    const state = useSelector((store)=>store.item)
    var total = 0;
    const itemList=(item)=>{
      let a = item.price.split(",").join("");
        total=total+(+a)*item.quantity;    
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h5 className="my-0">{item.title}</h5>
            </div>
            <span className="text-muted">₹ {a} <b>({item.quantity})</b></span>
          </li>
        )
    }
  return (
    <>
      <div className="container  my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Order Summery</span>
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
           {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>Rs {total}</strong>
              </li>
            </ul>

            <form className="card p-2" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3 ">Billing address</h4>
            <form className="needs-validation" onSubmit={handleSubmit} >
              <div className="row g-3">
                {/* <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    // required 
                    
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div> */}

                {/* <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    // required 
                    // onChange={HandleChange}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div> */}

           

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required  placeholder="1234 Main St"
                    // onChange={HandleChange}
                   
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite" 
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country"  required>
                    <option value="">Choose...</option>
                    <option> India </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state"  required>
                    <option value="">Choose...</option>
                    <option>Hyderabad</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
               {/* <Link to={"/Payment"}>
               <button className="w-100 btn btn-outline-primary btn-lg" type="submit">
                Continue to Payment
              </button>
               </Link> */}
               <input  className="w-100 btn btn-outline-primary btn-lg" type="submit" value="submit" onSubmit={handleSubmit} />
              
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Checkout;
