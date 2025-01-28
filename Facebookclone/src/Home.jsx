import React from "react";

const Home = () => {
  return (
    <div className="facebook-clone bg-gray-100 h-screen">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook Logo"
            className="h-8"
          />
          <input
            type="text"
            placeholder="Search Facebook"
            className="border rounded-full px-4 py-2 w-64"
          />
        </div>
        <div className="flex items-center gap-6">
          <button>🏠</button>
          <button>📹</button>
          <button>🎮</button>
          <button>🔔</button>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </header>

      {/* Main Body */}
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 shadow-md">
          <ul className="space-y-4">
            <li>👤 Friends</li>
            <li>📄 Feeds</li>
            <li>👥 Groups</li>
            <li>🛒 Marketplace</li>
            <li>🎥 Videos</li>
            <li>💾 Saved</li>
            <li>🕒 Memories</li>
          </ul>
        </aside>

        {/* Feed Section */}
        <main className="flex-1 p-4">
          <div className="bg-white p-4 rounded shadow-md">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full border rounded px-4 py-2"
            />
            <div className="flex justify-around mt-4">
              <button>🎥 Live Video</button>
              <button>📷 Photo/Video</button>
              <button>🎞️ Reel</button>
            </div>
          </div>
          <div className="mt-4">
            {/* Stories */}
            <div className="flex space-x-4 overflow-x-scroll">
              <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center">
                Story 1
              </div>
              <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center">
                Story 2
              </div>
              <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center">
                Story 3
              </div>
            </div>

            {/* Posts */}
            <div className="bg-white p-4 mt-4 rounded shadow-md">
              <p>Post Content #1</p>
            </div>
            <div className="bg-white p-4 mt-4 rounded shadow-md">
              <p>Post Content #2</p>
            </div>
          </div>
        </main>

        {/* Contacts Sidebar */}
        <aside className="w-1/4 bg-white p-4 shadow-md">
          <h2 className="font-bold">Contacts</h2>
          <ul className="space-y-4">
            <li>🟢 Anju Malviya</li>
            <li>🟢 Nazia Khan</li>
            <li>🟢 Kirti Tomar</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Home;
