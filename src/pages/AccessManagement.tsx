import { useState } from 'react';
import { Check, X } from 'lucide-react';

const mockRequests = [
  { id: 1, name: 'Tech Gadgets Store', email: 'contact@techstore.com', date: '2023-10-25' },
  { id: 2, name: 'Fresh Foods Market', email: 'hello@freshfoods.net', date: '2023-10-26' },
  { id: 3, name: 'Urban Apparel', email: 'support@urbanapparel.co', date: '2023-10-27' },
];

const AccessManagement = () => {
  const [requests, setRequests] = useState(mockRequests);

  const handleApprove = (id: number) => {
    // In a real app, this would make an API call
    console.log(`Approved merchant ${id}`);
    setRequests(requests.filter(req => req.id !== id));
  };

  const handleReject = (id: number) => {
    // In a real app, this would make an API call
    console.log(`Rejected merchant ${id}`);
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Merchant Access Management</h1>
      
      <div className="card">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '1rem' }}>Pending Requests</h2>
        
        {requests.length === 0 ? (
          <p style={{ color: '#6b7280', padding: '2rem 0', textAlign: 'center' }}>No pending requests at the moment.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Merchant Name</th>
                  <th>Email</th>
                  <th>Date Requested</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(request => (
                  <tr key={request.id}>
                    <td style={{ fontWeight: '500' }}>{request.name}</td>
                    <td>{request.email}</td>
                    <td>{request.date}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          onClick={() => handleApprove(request.id)}
                          style={{ 
                            backgroundColor: '#10b981', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.25rem',
                            padding: '0.4rem 0.75rem'
                          }}
                        >
                          <Check size={16} /> Approve
                        </button>
                        <button 
                          onClick={() => handleReject(request.id)}
                          style={{ 
                            backgroundColor: '#ef4444', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.25rem',
                            padding: '0.4rem 0.75rem'
                          }}
                        >
                          <X size={16} /> Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessManagement;
