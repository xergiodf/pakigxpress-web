const packageStatus = [
  { value: 'waitingPackage', label: 'Waiting for package' },
  { value: 'originWarehouse', label: 'At origin warehouse' },
  { value: 'transit', label: 'In transit' },
  { value: 'arrived', label: 'Arrived at destination warehouse' },
  { value: 'pickedUp', label: 'Picked up' }
]

const paymentStatus = [
  { value: 'invoiced', label: 'Invoiced' },
  { value: 'paymentReceived', label: 'Payment received' }
]

export default { packageStatus, paymentStatus }
