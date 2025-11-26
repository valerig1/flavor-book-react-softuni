export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 flex flex-col justify-center items-center space-y-4">

        {/* Copyright */}
        <div className="text-center">
          <p>© {new Date().getFullYear()} FlavorBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
