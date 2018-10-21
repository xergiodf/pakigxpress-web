import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ClientList = props => (
  <Fragment>
    <hr />
    <div className="row">
      <div className="col-md-2">
        <h4>Customers</h4>
      </div>
      <div className="col-md-10">
        <form>
          <div className="col-md-6">
            <input className="mb0" type="text" placeholder="Search" />
          </div>
          <div className="col-md-6">
            <select>
              <option selected="" value="Default">
                Sort By
              </option>
              <option value="Small">Customer A-Z</option>
              <option value="Medium">Customer Z-A</option>
              <option value="Larger">Oldest-Newest</option>
              <option value="Larger">Newest-Oldest</option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive table-bordered">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Customer #</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Address Line 1</th>
                <th>Address Line 2</th>
                <th>City / State / ZIP</th>
              </tr>
            </thead>
            <tbody>
              {props.clients.data.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.full_name}</td>
                  <td>{c.phone}</td>
                  <td>{c.address_1}</td>
                  <td>{c.address_2}</td>
                  <td>{`${c.city} / ${c.state} / ${c.zip}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Fragment>
)

ClientList.propTypes = {
  clients: PropTypes.shape({
    data: PropTypes.array,
  }),
}

export default ClientList
