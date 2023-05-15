import React from "react";
import "./App.css";

function Pricing(){
  return(
    <div className="container">
      <header>
    
          <div className="align-text-center w-75 my-4 mx-auto">
            <h1>Pricing Cart</h1>
     </div>
      </header>
      <main>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h5 classname="fw-normal">Free</h5>
                <h4 className="fw-normal">
                  $0/<small className="text-muted fw-light">month</small>
                </h4>
      
            <div className="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Single User</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>5GB Storage</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Unlimited Public Projects</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Community Access</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Unlimited Private Projects</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Email Support</li>
                <li class="list-group-item" > <i class="fa fa-close"></i>Live Support</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Dedicated Phone Support</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Free Subdomain</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Monthly Status Reports</li>
              </ul>
              <br/>
              <button className="btn btn-lg text-white btn-secondary w-100 btn-outline-success">Button</button>
            </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h5 classname="fw-normal">Plus</h5>
                <h4 className="fw-normal">
                  $9/<small className="text-muted fw-light">month</small>
                </h4>
       
            <div className="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Single User</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>5GB Storage</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Unlimited Public Projects</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Community Access</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Unlimited Private Projects</li>
                <li class="list-group-item"> <i class=" fa fa-check-square-o"></i>Email Support</li>
                <li class="list-group-item" > <i class="fa fa-check-square-o"></i>Live Support</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Dedicated Phone Support</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Free Subdomain</li>
                <li class="list-group-item"> <i class="fa fa-close"></i>Monthly Status Reports</li>
              </ul>
              <br/>
              <button className="btn btn-lg text-white btn-secondary w-100 btn-outline-success">Button</button>
            </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <h5 classname="fw-normal">Pro</h5>
                <h4 className="fw-normal">
                  $49/<small className="text-muted fw-light">month</small>
                </h4>
        
            <div className="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Single User</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>5GB Storage</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Unlimited Public Projects</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Community Access</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Unlimited Private Projects</li>
                <li class="list-group-item"> <i class=" fa fa-check-square-o"></i>Email Support</li>
                <li class="list-group-item" > <i class="fa fa-check-square-o"></i>Live Support</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Dedicated Phone Support</li>
                <li class="list-group-item"><i class="fa fa-check-square-o"></i>Free Subdomain</li>
                <li class="list-group-item"> <i class="fa fa-check-square-o"></i>Monthly Status Reports</li>
              </ul>
              <br/>
          <button className="btn btn-lg text-white btn-secondary w-100 btn-outline-success">Button</button>
    
            </div>
              </div>
            </div>
          </div> 

        </div>
      </main>
    </div>
  )
}

export default Pricing;