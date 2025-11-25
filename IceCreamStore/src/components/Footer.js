export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          FrostBite
        </h2>
        <p className="text-gray-500 mb-8">
          Premium ice cream for premium moments.
        </p>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} FrostBite Ice Cream. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
