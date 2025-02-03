import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#50ACE1] to-[#2D9CDB] text-white flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Copyyt</h1>
          <p className="text-lg mb-8">
            Seamlessly copy and share text across your devices with ease.
            Simplify your workflow and stay productive wherever you are.
          </p>
          <div className="space-x-4">
            <a
              href="/privacy-policy"
              className="bg-white text-[#2D9CDB] font-bold py-2 px-6 rounded-lg shadow hover:bg-gray-100"
            >
              View Privacy Policy
            </a>
            <a
              href="#features"
              className="bg-[#2682B6] text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-[#174E6E]"
            >
              Explore Features
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-white text-gray-900 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Copyyt?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Cross-Device Sync</h3>
              <p>
                Easily transfer text between your laptop, desktop, or any other
                device effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
              <p>
                Your text is encrypted and never stored permanently. We value
                your privacy.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fast and Reliable</h3>
              <p>
                Experience lightning-fast text sharing without interruptions or
                delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#2D9CDB] text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8">
            Install the Copyyt browser extension today and take your
            productivity to the next level.
          </p>
          <a
            href="#get-started"
            className="bg-white text-[#2D9CDB] font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-100"
          >
            Install Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F3449] text-gray-400 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Copyyt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
