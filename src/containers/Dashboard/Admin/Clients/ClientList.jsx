import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { filterArray, sortArray } from '../../../../helpers/util'
import Modal from '../../../../components/Modal/'
import NewOrder from '../../../NewOrder'

class ClientList extends PureComponent {
  static propTypes = {
    clients: PropTypes.shape({
      data: PropTypes.array,
    }),
  }

  state = {
    showModal: false,
    clientId: null,
    clients: this.tableData,
  }

  get tableData() {
    const { data } = this.props.clients
    return data.slice(0)
  }

  /**
   * @description Open/Close modal
   * @returns { Void }
   */
  handleClientNewOrder = clientId => {
    this.setState({ showModal: !this.state.showModal, clientId })
  }

  /**
   * @description Filters the clients based on the search text
   */
  handleSearch = term => {
    const data = this.tableData
    this.setState({ clients: filterArray(data, term) })
  }

  handleSort = opt => {
    const data = this.tableData
    this.setState({ clients: sortArray(data, opt) })
  }

  render() {
    const columns = [
      {
        Header: 'Customer #',
        accessor: 'id',
        Cell: ({ value }) => `${value.toString(16)}`,
      },
      { Header: 'Full Name', accessor: 'full_name' },
      { Header: 'Phone', accessor: 'phone' },
      { Header: 'Address Line 1', accessor: 'address_1' },
      { Header: 'Address Line 2', accessor: 'address_2' },
      {
        id: 'city-state-zip',
        Header: 'City / State / ZIP',
        accessor: obj => ({
          id: obj.id,
          city: obj.city,
          state: obj.state,
          zip: obj.zip,
        }),
        Cell: ({ value }) => `${value.city} / ${value.state} / ${value.zip}`,
      },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ value }) => (
          <button
            className="btn btn-sm btn-filled"
            onClick={() => this.handleClientNewOrder(value)}
          >
            New Order
          </button>
        ),
      },
    ]
    return (
      <Fragment>
        <hr />
        <div className="row">
          <div className="col-md-2">
            <h4>Customers</h4>
          </div>
          <div className="col-md-10">
            <form>
              <div className="col-md-6">
                <input
                  className="mb0"
                  type="text"
                  placeholder="Search"
                  onChange={e => this.handleSearch(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select onChange={e => this.handleSort(e.target.value)}>
                  <option selected="" value="Default">
                    Sort By
                  </option>
                  <option value="CUST_AZ">Customer A-Z</option>
                  <option value="CUST_ZA">Customer Z-A</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <ReactTable
              columns={columns}
              data={this.state.clients}
              defaultPageSize={10}
            />
          </div>
        </div>
        <Modal
          size="large"
          visible={this.state.showModal}
          onRequestToClose={() => this.handleClientNewOrder(null)}
          closeKeys={['esc']}
        >
          <NewOrder
            id={this.state.clientId}
            onSubmit={() => this.setState({ showModal: false })}
          />
        </Modal>
      </Fragment>
    )
  }
}

export default ClientList
