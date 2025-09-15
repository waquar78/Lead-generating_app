import { useGetLeadsQuery, useDeleteLeadMutation } from '../api/api';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { data, isLoading } = useGetLeadsQuery();
  const [deleteLead] = useDeleteLeadMutation();
 
 
  const handleDelete = async (id) => {
    try {
      await deleteLead(id).unwrap();
      toast.success("Lead deleted!");
    } catch (error) {
      toast.error("Failed to delete lead!");
    }
  };

  if (isLoading) return <p className="text-center mt-20">Loading...</p>;

  const leads = data?.leads ;

  
  return (
    <div className="max-w-5xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Dashboard</h1>

      {leads.length === 0 ? (
        <p className="text-center text-gray-500">No leads found.</p>
      ) : (
        <>
          {/* Mobile view (Cards) */}
          <div className="grid gap-4 sm:hidden">
            {leads.map((lead) => (
              <div key={lead._id} className="bg-white shadow rounded-lg p-4 border">
                <p className="font-semibold">Name: <span className="font-normal">{lead.name}</span></p>
                <p className="font-semibold">Email: <span className="font-normal">{lead.email}</span></p>
                <p className="font-semibold">Contact: <span className="font-normal">{lead.contact}</span></p>
                <p className="font-semibold">Message: <span className="font-normal">{lead.message}</span></p>
                <button
                  onClick={() => handleDelete(lead._id)}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet view (Table) */}
          <div className="hidden sm:block">
            <table className="w-full border-collapse border rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Contact</th>
                  <th className="border p-2">Message</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="text-center">
                    <td className="border p-2">{lead.name}</td>
                    <td className="border p-2">{lead.email}</td>
                    <td className="border p-2">{lead.contact}</td>
                    <td className="border p-2">{lead.message}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleDelete(lead._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
