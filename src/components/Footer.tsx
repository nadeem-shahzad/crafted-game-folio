
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted text-muted-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Nadeem Shahzad</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Passionate game developer creating immersive experiences that bring joy to players worldwide.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                🎮
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                🕹️
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                🎲
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Game Development</li>
              <li>Mobile Games</li>
              <li>PC Games</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Unity</li>
              <li>Android / IOs / Web / Console / PC</li>
              <li>Roblox</li>
              <li>C# / C++ / LUA</li>
              <li>Mobile Game Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Nadeem Shahzad. All rights reserved. Built with ❤️ for gaming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
