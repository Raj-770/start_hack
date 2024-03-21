export const WorkspaceBooking = ({workspaces}: {workspaces: any}) => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-6">
      {workspaces.map((workspace) => (
        <div
          key={workspace.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <img
            className="w-full h-48 object-cover"
            src={workspace.imageUrl}
            alt={workspace.title}
          />
          <div className="px-6 py-4 flex flex-col items-center justify-center">
            <div className="font-bold text-xl mb-2">{workspace.title}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
