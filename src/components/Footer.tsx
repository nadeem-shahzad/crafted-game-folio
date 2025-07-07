
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alex Chen</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Passionate game developer creating immersive experiences that bring joy to players worldwide.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                📧
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                💼
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                🐱
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Game Development</li>
              <li>Mobile Games</li>
              <li>PC Games</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>C# / C++</li>
              <li>Mobile Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Alex Chen. All rights reserved. Built with ❤️ for gaming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
