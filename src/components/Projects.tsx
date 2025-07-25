import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

  const projects = [
      {
      title: "Galactic Acres Idle Clicker - Web3",
      category: "Idle Clicker",
      image: "/lovable-uploads/galactic-acres.png", 
        projectIcon: "/lovable-uploads/galactic-acres-icon.png",
      description: "A Web3 idle simulation game set in space where players manage a sanctuary of alien species.",
      tags: ["Web3", "Simulation", "Idle", "Strategy", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
      detailedDescription: "Galactic Acres is a Web3 idle simulation game where players build and manage a sanctuary for alien species, exploring the cosmos and collecting resources.",
      features: [
            "Web3 integration with blockchain assets",
            "Idle gameplay mechanics for casual players",
            "Resource management and strategy elements",
            "Unique alien species with special abilities",
            "Cross-platform play"
        ],
        links: {
                demo: "https://play.google.com/store/apps/details?id=com.goodgaming.galactic",
                github: null
      }
},

    {
      title: "Horse Racing - Multiplayer",
      category: "Multiplayer Simulation Game",
      image: "/lovable-uploads/horseracing.png",
      projectIcon: "/lovable-uploads/horseracing-icon.png",
      description: "A competitive real-time horse racing simulator featuring breeding, customization, and tactical gameplay.",
      tags: ["Multiplayer", "Simulation", "Racing", "Strategy", "Breeding"],
      detailedDescription: "Horse Racing - Multiplayer is a real-time competitive horse racing simulator where players manage elite stables and race against others around the globe. With deep breeding mechanics, strategic race tactics, and full customization, this game delivers a dynamic and immersive experience. Players can breed genetically diverse horses, race across unique tracks, and climb the leaderboards while managing resources and competing in events.",
      features: [
        "Real-time PvP races with up to 12 players",
        "Advanced breeding system with genetic inheritance",
        "Tactical racing: manage stamina, apply jockey strategies, and adapt to track conditions",
        "Multiple racetracks with distinct layouts and weather variations",
        "Extensive customization: horses, jockeys, silks, and stables",
        "Progression system with unlockable content and global leaderboards",
        "Live events and regular content updates to retain engagement"
      ],
      techStack: ["Unity", "Photon Fusion", "Firebase", "PlayFab", "C#", "Mirror (optional fallback)"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.playsportgames.horseracing",
        github: null
      }
    },
    {
      title: "Immutabattle RPG",
      category: "Web3 RPG Game",
      image: "/lovable-uploads/immutable.png",
      projectIcon: "/lovable-uploads/immutable-icon.png",
      description: "A blockchain-integrated RPG where players earn, own, and trade NFT-based weapons and gear through immersive quest-driven gameplay.",
      tags: ["Web3", "RPG", "NFT", "Blockchain", "Unity", "Immutable"],
      detailedDescription: "Immutabattle RPG is a next-gen role-playing game that blends traditional RPG mechanics with blockchain ownership. Built using Unity and the Immutable SDK, players explore a fantasy world, earn NFT weapons and armor through quests, and engage in a player-driven economy using battle tokens. Featuring real asset ownership, crafting systems, and a live NFT auction house, this game brings Web3 innovation to immersive gameplay.",
      features: [
        "NFT Integration using Immutable blockchain — true ownership of weapons and armor",
        "Battle Token Economy — earn, trade, or withdraw cryptocurrency rewards",
        "Crafting & Burning System — forge NFT weapons and burn for resources",
        "Live Auction House — players list NFT gear, accept bids, or sell instantly",
        "Quest-Based Gameplay Loop — dynamic missions with NFT and token rewards",
        "Secure Wallet Linking — safe blockchain onboarding and asset management"
      ],
      techStack: ["Unity", "C#", "Immutable SDK", "Web3.js", "Metamask Integration", "Custom UI/UX for Blockchain"],
      links: {
        demo: "https://drive.google.com/file/d/1gbwsnbUApQhmuJoOIODsZl_kuMZLy5Ke/view?usp=sharing",
        github: null
      }
    },
    {
      title: "Amerikano - Multiplayer Card Game",
      category: "Multiplayer Card Game",
      image: "/lovable-uploads/amerikano.png",
      projectIcon: "/lovable-uploads/amerikano-icon.png",
      description: "A fast-paced multiplayer Rummy-style card game with strategic depth and exciting gameplay.",
      tags: ["Multiplayer", "Card Game", "Rummy", "Strategy", "Photon PUN2"],
      detailedDescription: "Amerikano is a unique and addicting multiplayer card game derived from the Rummy family, allowing up to 4 players to compete in real time. With a 106-card deck (two standard decks plus jokers), players aim to be the first to form valid sets and sequences. Built with Photon PUN2 for smooth, real-time online matches, the game challenges memory, logic, and card strategy, all wrapped in an elegant UI. Its blend of competitive mechanics and social fun makes it perfect for casual and serious players alike.",
      features: [
        "Real-time multiplayer gameplay for up to 4 players",
        "Built with Photon PUN2 for stable networking and low latency",
        "Classic Rummy-style rules with unique twists",
        "Engaging UI/UX with card animations and sound effects",
        "Dynamic matchmaking and private room creation",
        "Custom avatars and profile systems",
        "Cross-platform support (Android and upcoming WebGL)"
      ],
      techStack: ["Unity", "C#", "Photon PUN2", "Firebase", "Google Play Services"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.amerikano.legends.classic.cardgames",
        github: null
      }
    },
    {
      title: "Water Color Puzzle – Sort Game",
      category: "Casual Puzzle Game",
      image: "/lovable-uploads/water-sort.png",
      projectIcon: "/lovable-uploads/water-sort-icon.png",
      description: "A relaxing and addictive color-sorting puzzle game with 1000+ levels to challenge your brain.",
      tags: ["Puzzle", "Sorting", "Casual", "Color Match", "Relaxing"],
      detailedDescription: "Water Sort Puzzle is a fun and brain-training color-matching game where players must sort colored liquids into individual glasses until all colors are separated. With simple tap-to-pour mechanics and hundreds of levels, this visually pleasing game is perfect for casual play. It combines minimal UI, smooth visual effects, and shader-driven liquid animations for an engaging experience. No time limits, no penalties — just pure, satisfying puzzle-solving.",
      features: [
        "Implemented dynamic level generation system supporting over 1000 puzzles using ScriptableObjects and runtime pooling",
        "Developed fluid sorting logic with stack-based state tracking for undo/retry functionality",
        "Created a modular glass interaction system with single-tap input using Unity’s new Input System",
        "Utilized Shader Graph to create smooth water fill animations and color blending effects",
        "Integrated AdMob for interstitial and rewarded ads, with frequency capping and fallback logic",
        "Implemented Game Analytics tracking for level progression, user retention, and ad behavior",
        "Added level restart, undo, and soft hint system to improve user engagement",
        "Optimized performance for low-end Android devices using lightweight rendering and object pooling"
      ],
      techStack: ["Unity", "C#", "Shader Graph", "AdMob", "Game Analytics"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.starstudio.water.color.sort.puzzle.game", // Add Play Store link if available
        github: null
      }
    },
    {
      title: "Checkmated King",
      category: "Strategy Puzzle",
      image: "/lovable-uploads/checkmated-king.png",
      projectIcon: "/lovable-uploads/checkmated-king-icon.png",
      description: "A strategic twist on classic chess where you play as the King to counter enemy attacks and reclaim your kingdom.",
      tags: ["Chess", "Strategy", "Puzzle", "Single-player"],
      detailedDescription: "Checkmated King reimagines traditional chess by putting players in control of the King as the main protagonist. Instead of protecting the King, players lead him through a series of challenging puzzle levels against invading forces. Each stage introduces new pieces and mechanics, blending tactical decision-making with progressive difficulty to create a unique and compelling experience. With clean visuals, intuitive mechanics, and clever AI, this title offers a fresh, strategic journey for chess and puzzle lovers alike.",
      features: [
        "Designed modular level system with progressive difficulty and piece unlocking logic",
        "Implemented custom chess-based grid movement and attack system for dynamic gameplay",
        "Built enemy AI with adaptive difficulty using state machines for piece strategy variation",
        "Used Shader Graph to develop distinct visual effects for moves, attacks, and board transitions",
        "Integrated touch-friendly, drag-and-drop input for mobile chess mechanics",
        "Developed a lightweight save/load system for level progress tracking",
        "Implemented rewarded ads and interstitials using AdMob with user-friendly pacing",
        "Tracked user engagement, level drop-offs, and move patterns via Game Analytics integration"
      ],
      techStack: ["Unity", "C#", "Shader Graph", "AdMob", "Game Analytics"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.nplays.checkmatedking",
        github: null
      }
    },
    {
      title: "Solar System Simulator 3D",
      category: "Educational Space Simulation",
      image: "/lovable-uploads/solar-simulator.png",
      projectIcon: "/lovable-uploads/solar-simulator-icon.png",
      description: "An immersive and educational 3D space exploration simulator that brings the wonders of the solar system to life.",
      tags: ["Simulation", "Space", "Education", "3D", "Science"],
      detailedDescription: "Solar System Simulator 3D offers a visually stunning and scientifically accurate journey through space. It combines high-fidelity visuals, realistic celestial mechanics, and educational content to create an immersive experience. Players can explore planets, moons, and cosmic phenomena while learning fascinating astronomy facts in an intuitive and engaging way. Designed for both casual players and space enthusiasts, it provides a deep space experience with interactive learning.",
      features: [
        "Crafted a real-time solar system simulation using Unity’s physics engine with accurate orbital mechanics and gravity calculations",
        "Developed scalable 3D planet rendering system using LOD and Shader Graph for atmospheric, lighting, and eclipse effects",
        "Implemented user-driven spacecraft navigation with dynamic camera controls, free-fly mode, and orbital perspectives",
        "Integrated educational content system with expandable trivia and fun facts per celestial body using a modular data structure",
        "Customizable simulation controls including time scale, camera zoom, and orbital trails",
        "Optimized celestial body textures and lighting for low-end and high-end Android devices",
        "Integrated AdMob for non-intrusive rewarded ads tied to trivia unlocks and visual upgrades",
        "Implemented Game Analytics for tracking exploration paths, user session length, and planet visit frequencies"
      ],
      techStack: ["Unity", "C#", "Shader Graph", "AdMob", "Game Analytics"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.nplays.universeplanetsimulator", // Add Play Store link when available
        github: null
      }
    },
    {
      title: "Stack The Pixels - Daily Enigma",
      category: "Multiplayer Puzzle Game",
      image: "/lovable-uploads/stack-the-pixels.png",
      projectIcon: "/lovable-uploads/stack-the-pixels-icon.png",
      description: "A mysterious and engaging multiplayer puzzle game combining match-3 mechanics with immersive communication and gameplay effects.",
      tags: ["Multiplayer", "Match-3", "Puzzle", "Voice Chat", "Ably", "Photon"],
      detailedDescription: "Daily Enigma is an innovative multiplayer puzzle experience where up to 100 players can compete in real time. The game combines traditional match-3 mechanics with unique social features like distance-based voice chat powered by Photon Voice. Built for engaging, large-scale multiplayer gameplay using Ably's real-time communication framework, Daily Enigma also features custom shader effects for enhanced visual feedback and atmosphere.",
      features: [
        "Multiplayer support for up to 100 concurrent players",
        "Classic match-3 mechanics with a competitive twist",
        "Photon Voice Chat with distance-based audio proximity",
        "Built on Ably for scalable, real-time multiplayer",
        "Custom shader effects for immersive visual feedback",
        "Leaderboard and daily challenges for player retention"
      ],
      techStack: ["Unity", "C#", "Ably", "Photon PUN2", "Photon Voice", "Shader Graph / HLSL"],
      links: {
        demo: "https://play.google.com/store/apps/details?id=com.novospir.dailyenigma",
        github: null
      }
    },
    {
      "title": "Trace | Leave A Trace",
      "category": "Messaging App",
      image: "/lovable-uploads/trace.png",
      projectIcon: "/lovable-uploads/trace-icon.png",
      "description": "A location-based social media app for sharing geo-tagged videos and exploring the world around you.",
      "tags": ["Social", "Geo-Location", "iOS", "Firebase", "Swift", "SwiftUI","Unity","C#"],
      features: [
        "Share geo-tagged videos",
        "Explore nearby content",
        "Real-time messaging",
        "User profiles and privacy controls",
        "Push notifications"
      ],
      "links": {
        "demo": "https://apps.apple.com/us/app/trace-leave-a-trace/id6450400543",
        "github": null
      }
    },
    {
  "title": "Matty the Water Molecule",
  "category": "Educational Game",
  "image": "/lovable-uploads/matty.png",
      projectIcon: "/lovable-uploads/matty-icon.png",
  "description": "Educational game teaching children about water molecules through engaging gameplay.",
  "tags": ["Education", "Kids", "Science","Unity","C#"],
      features: [
        "Interactive water molecule puzzles",
        "Fun facts about science",
        "Kid-friendly graphics",
        "Progress tracking",
        "Mini-games for learning"
      ],
      "links": {
    "demo": "https://www.engagingeverystudent.com/matty/",
    "github": null
  }
},
    {
  "title": "AR-Ways",
  "category": "AR App",
  "image": "/lovable-uploads/arway.png",
      projectIcon: "/lovable-uploads/arway-icon.png",
  "description": "Augmented reality app allowing users to place digital content in real-world locations.",
  "tags": ["Augmented Reality", "AR", "Maps", "Navigation","Unity","C#"],
      features: [
        "Place digital objects in AR",
        "Real-world location mapping",
        "Navigation assistance",
        "Customizable AR content",
        "Cross-device support"
      ],
      "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nextechar.armaps",
    "github": null
  }
},
    {
  "title": "Hide N Seek - Hunt Challenge",
  "category": "Arcade Puzzle",
  "image": "/lovable-uploads/hidenseek.png",
      projectIcon: "/lovable-uploads/hidenseek-icon.png",
  "description": "Classic hide and seek gameplay reimagined with object transformation and monster hunters.",
  "tags": ["Puzzle", "Action", "Unity", "C#", "Firebase", "Google Play", "Game Analytics", "Monetization"],
      features: [
        "Object transformation mechanics",
        "Monster hunter mode",
        "Multiple levels and challenges",
        "Leaderboards",
        "In-game rewards"
      ],
      "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hide.and.seek.game",
    "github": null
  }
},{
  "title": "DIY Fidget Toy Maker",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/toymaker.png",
      projectIcon: "/lovable-uploads/toymaker-icon.png",
  "description": "Craft your own fidget toys in 3D for a relaxing and creative experience.",
  "tags": ["DIY", "Simulation", "ASMR", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
      features: [
        "3D fidget toy crafting",
        "ASMR sound effects",
        "Customization options",
        "Relaxing gameplay",
        "Share creations"
      ],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.dobroapps.popit.maker",
    "github": null
  }
},
    {
  "title": "Pop It 3D DIY ASMR",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/popit.png",
      projectIcon: "/lovable-uploads/popit-icon.png",
  "description": "Pop fidget toys in 3D with satisfying ASMR sounds for stress relief and casual play.",
  "tags": ["ASMR", "Relaxation", "Casual", "Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
      features: [
        "3D pop it toys",
        "Satisfying ASMR audio",
        "Stress relief gameplay",
        "Unlockable designs",
        "Daily challenges"
      ],
      "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.pop.it.asmr.relaxing.games",
    "github": null
  }
},
{
  "title": "Hacker Simulator 3D",
  "category": "Simulation",
  "image": "/lovable-uploads/hacker.png",
  projectIcon: "/lovable-uploads/hacker-icon.png",
  "description": "Become a virtual hacker in this simulator, mastering stealth and digital tactics.",
  "tags": ["Simulation", "Hacking", "Strategy","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  features: [
    "Realistic hacking missions",
    "Stealth gameplay",
    "Upgradeable skills",
    "Multiple hacking tools",
    "Story mode"
  ],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.hacker.simulator.game",
    "github": null
  }
},
{
  "title": "PC Simulator 3D",
  "category": "Simulation",
  "image": "/lovable-uploads/pcsim.png",
  projectIcon: "/lovable-uploads/pcsim-icon.png",
  "description": "Learn PC building with realistic components, software installation, and troubleshooting.",
  "tags": ["Simulation", "Education", "Tech","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  features: [
    "Realistic PC building",
    "Component selection",
    "Software installation",
    "Troubleshooting scenarios",
    "Tutorial mode"
  ],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.pc.simulator.game",
    "github": null
  }
},
{
  "title": "House Flipper 3D - Home Design",
  "category": "Simulation",
  "image": "/lovable-uploads/houseflipper.png",
  projectIcon: "/lovable-uploads/houseflipper-icon.png",
  "description": "Renovate, restore, and decorate homes in this simulation and puzzle-based house flipper game.",
  "tags": ["Simulation", "Puzzle", "Design","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  features: [
    "Home renovation gameplay",
    "Interior design options",
    "Puzzle-based challenges",
    "Property upgrades",
    "Sell renovated homes"
  ],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargamesstudios.house.flip.real.estate.game",
    "github": null
  }
}, {
  "title": "Sneaker Paint 3D",
  "category": "Casual Simulation",
  "image": "/lovable-uploads/sneakerart.png",
  projectIcon: "/lovable-uploads/sneakerart-icon.png",
  "description": "Unleash your creativity by painting and customizing sneakers in this art simulation game.",
  "tags": ["Art", "Simulation", "Customization","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
      features: [
        "Sneaker painting tools",
        "Custom design gallery",
        "Unlockable colors and patterns",
        "Share designs",
        "Creative challenges"
      ],
      "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.nexttechgamesstudios.sneaker.paint.game",
    "github": null
  }
},
{
  "title": "Fill The Closet",
  "category": "Casual Puzzle - Sort",
  "image": "/lovable-uploads/fillthecloset.png",
  projectIcon: "/lovable-uploads/fillthecloset-icon.png",
  "description": "Sort clothes by size, type, and color in this ASMR-inspired closet organizing game.",
  "tags": ["ASMR", "Sorting", "Relaxation","Unity","C#","Firebase","Google Play","Game Analytics","Monetization"],
  features: [
    "Clothes sorting puzzles",
    "ASMR sound effects",
    "Organize by color and type",
    "Progressive difficulty",
    "Unlockable closet themes"
  ],
  "links": {
    "demo": "https://play.google.com/store/apps/details?id=com.kunhargames.fill.the.closet.organizer3d",
    "github": null
  }
},
  ];

  const openProjectModal = (project) => {
    console.log('Opening project modal for:', project.title);
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    console.log('Closing project modal');
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  const openAllProjectsModal = () => {
    setIsAllProjectsModalOpen(true);
  };

  const closeAllProjectsModal = () => {
    setIsAllProjectsModalOpen(false);
  };

  const handleViewDetails = (project) => {
    setIsAllProjectsModalOpen(false);
    openProjectModal(project);
  };

  return (
    <>
      <section 
        id="projects" 
        className="py-20 px-4 bg-muted/30 dark:bg-muted/20"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎮 My Work
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my latest game development projects that showcase my skills and creativity.
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            <div className="overflow-x-auto">
              <div className="flex gap-6 pb-4 px-4 min-w-max">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`flex-none w-80 bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 group border cursor-pointer ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
                    }}
                    onClick={() => {
                      console.log('Card clicked for:', project.title);
                      openProjectModal(project);
                    }}
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.projectIcon}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.log('Image failed to load:', project.projectIcon);
                          console.log('Project:', project.title);
                        }}
                        onLoad={() => {
                          console.log('Image loaded successfully:', project.projectIcon);
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('View Details clicked for:', project.title);
                            openProjectModal(project);
                          }}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold transform scale-90 group-hover:scale-100 shadow-lg"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-orange-500 font-medium mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            <Button 
              onClick={openAllProjectsModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
      />

      {/* All Projects Modal */}
      <Dialog open={isAllProjectsModalOpen} onOpenChange={setIsAllProjectsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">All Projects</DialogTitle>
          </DialogHeader>
          
          <ScrollArea className="h-[70vh] pr-4">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => handleViewDetails(project)}
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.projectIcon}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                      <span className="text-sm text-orange-500 font-medium">{project.category}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('View Details from modal clicked for:', project.title);
                        handleViewDetails(project);
                      }}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transition-all duration-200"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="flex justify-center pt-4 border-t">
            <Button 
              onClick={closeAllProjectsModal}
              variant="outline"
              className="px-6 py-2 hover:scale-105 transition-all duration-200"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Projects;
