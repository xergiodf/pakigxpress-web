import React, { Fragment } from 'react';
import NavContainer from '../NavContainer';
import FooterContainer from '../FooterContainer';

const Dashboard = () => (
  <Fragment>
    <NavContainer />
    <div className="main-container">
      <section className="page-title pb16 pt64">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="uppercase mb0">My Account</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="feature feature-1 boxed">
                <div className="text-left">
                  <h4 className="mb0">Account Info</h4>
                  <a href="/">Edit Info</a>
                  <ul className="mt32">
                    <li>John Doe</li>
                    <li>jdoe@gmail.com</li>
                    <li>305.305.3050</li>
                    <li>123 Main St</li>
                    <li>Miami Beach FL 33141</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-1 boxed" style={{ minHeight: '300px' }}>
                <div className="text-center mt48">
                  <h4 className="mb32">Calculate an Order</h4>
                  <form
                    className="form-email"
                    data-success="Thanks for your submission, we will be in touch shortly."
                    data-error="Please fill all fields correctly."
                  >
                    <a
                      style={{ width: '100%' }}
                      className="btn btn-lg btn-filled"
                      href="calculate.html"
                    >
                      Calculate An Order
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-1 boxed" style={{ minHeight: '300px' }}>
                <div className="text-center mt48">
                  <h4 className="mb32">Start an Order</h4>
                  <form
                    className="form-email"
                    data-success="Thanks for your submission, we will be in touch shortly."
                    data-error="Please fill all fields correctly."
                  >
                    <a
                      style={{ width: '100%' }}
                      className="btn btn-lg btn-filled"
                      href="new-order.html"
                    >
                      Start A New Order
                    </a>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="feature feature-1 boxed">
                <div className="text-left left">
                  <button className="btn btn-lg btn-filled right">In Transit</button>
                  <h4>
                    <b>Order #:</b> NEV12345678 |<b>Orig Tracking #:</b> ZXY234JAK52V
                  </h4>
                  <ul className="list-inline">
                    <li>
                      <h5>
                        <b>Destination:</b> Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Est Arrival:</b> 12/21/2018
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Pickup Location:</b> 123 Main St Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Orig Tracking #:</b> ZXY234JAK52V
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Payment:</b> Pending
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="feature feature-1 boxed">
                <div className="text-left left">
                  <button className="btn btn-lg btn-filled right">Waiting For Sipment</button>
                  <h4>
                    <b>Order #:</b> NEV12345678 |<b>Orig Tracking #:</b> ZXY234JAK52V
                  </h4>
                  <ul className="list-inline">
                    <li>
                      <h5>
                        <b>Destination:</b> Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Est Arrival:</b> 12/21/2018
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Pickup Location:</b> 123 Main St Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Payment:</b> Pending
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="feature feature-1 boxed">
                <div className="text-left left">
                  <button className="btn btn-lg btn-filled right">Picked Up</button>
                  <h4>
                    <b>Order #:</b> NEV12348295 |<b>Orig Tracking #:</b> ZXY234JAK52V
                  </h4>
                  <ul className="list-inline">
                    <li>
                      <h5>
                        <b>Destination:</b> Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Pickup Location:</b> 123 Main St Nevis
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Orig Tracking #:</b> ZXY2323234552V
                      </h5>
                    </li>
                    <li>
                      <h5>
                        <b>Payment:</b> Paid
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterContainer />
    </div>
  </Fragment>
);

export default Dashboard;
