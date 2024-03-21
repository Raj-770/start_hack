export const MentorBooking = ({mentors}: {mentors: any}) => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-6">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <img
            className="w-full h-48 object-cover"
            src={mentor.imageUrl}
            alt={mentor.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{mentor.name}</div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Book a Session
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
