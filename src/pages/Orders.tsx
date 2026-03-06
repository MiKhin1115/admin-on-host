const mockOrders = [
  { id: 'ORD-001', customer: 'John Doe', merchant: 'Tech Gadgets Store', amount: '$129.99', status: 'Delivered', date: '2023-10-27' },
  { id: 'ORD-002', customer: 'Jane Smith', merchant: 'Urban Apparel', amount: '$45.00', status: 'Processing', date: '2023-10-27' },
  { id: 'ORD-003', customer: 'Bob Johnson', merchant: 'Fresh Foods Market', amount: '$85.50', status: 'Shipped', date: '2023-10-26' },
  { id: 'ORD-004', customer: 'Alice Brown', merchant: 'Tech Gadgets Store', amount: '$599.00', status: 'Pending', date: '2023-10-26' },
  { id: 'ORD-005', customer: 'Charlie Davis', merchant: 'Urban Apparel', amount: '$120.00', status: 'Delivered', date: '2023-10-25' },
];

const Orders = () => {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Orders Information</h1>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold' }}>Recent Orders</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              placeholder="Search orders..." 
              style={{
                padding: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                fontSize: '0.875rem'
              }}
            />
          </div>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Merchant</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td style={{ fontWeight: '500', color: '#3b82f6' }}>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.merchant}</td>
                  <td style={{ fontWeight: '500' }}>{order.amount}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor: 
                        order.status === 'Delivered' ? '#d1fae5' : 
                        order.status === 'Processing' ? '#dbeafe' : 
                        order.status === 'Shipped' ? '#fef3c7' : '#f3f4f6',
                      color:
                        order.status === 'Delivered' ? '#065f46' : 
                        order.status === 'Processing' ? '#1e40af' : 
                        order.status === 'Shipped' ? '#92400e' : '#374151',
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ color: '#6b7280', fontSize: '0.875rem' }}>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
