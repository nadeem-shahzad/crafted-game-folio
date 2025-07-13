
-- Create projects table to store all project data
CREATE TABLE public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    detailed_description TEXT,
    image_url TEXT,
    project_icon_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    tags TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read projects (for public portfolio)
CREATE POLICY "Anyone can view projects" ON public.projects
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to manage projects (admin access)
CREATE POLICY "Authenticated users can manage projects" ON public.projects
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert your existing projects into the database
INSERT INTO public.projects (title, category, description, detailed_description, image_url, project_icon_url, demo_url, tags, features) VALUES
('Galactic Acres Idle Clicker - Web3', 'Idle Clicker', 'A Web3 idle simulation game set in space where players manage a sanctuary of alien species.', 'Galactic Acres is a Web3 idle simulation game where players build and manage a sanctuary for alien species, exploring the cosmos and collecting resources.', '/lovable-uploads/galactic-acres.png', '/lovable-uploads/galactic-acres-icon.png', 'https://play.google.com/store/apps/details?id=com.goodgaming.galactic', '{"Web3", "Simulation", "Idle", "Strategy", "Unity", "C#", "Firebase", "Google Play", "Game Analytics", "Monetization"}', '{"Web3 integration with blockchain assets", "Idle gameplay mechanics for casual players", "Resource management and strategy elements", "Unique alien species with special abilities", "Cross-platform play"}'),

('Trace | Leave A Trace', 'Messaging App', 'A location-based social media app for sharing geo-tagged videos and exploring the world around you.', 'Location-based social media platform for sharing experiences through geo-tagged content.', '/lovable-uploads/trace.png', '/lovable-uploads/trace-icon.png', 'https://apps.apple.com/us/app/trace-leave-a-trace/id6450400543', '{"Social", "Geo-Location", "iOS", "Firebase", "Swift", "SwiftUI", "Unity", "C#"}', '{"Share geo-tagged videos", "Explore nearby content", "Real-time messaging", "User profiles and privacy controls", "Push notifications"}'),

('Matty the Water Molecule', 'Educational Game', 'Educational game teaching children about water molecules through engaging gameplay.', 'Interactive educational experience designed to teach children about science through fun gameplay mechanics.', '/lovable-uploads/matty.png', '/lovable-uploads/matty-icon.png', 'https://www.engagingeverystudent.com/matty/', '{"Education", "Kids", "Science", "Unity", "C#"}', '{"Interactive water molecule puzzles", "Fun facts about science", "Kid-friendly graphics", "Progress tracking", "Mini-games for learning"}'),

('AR-Ways', 'AR App', 'Augmented reality app allowing users to place digital content in real-world locations.', 'Innovative AR application that bridges digital and physical worlds through location-based content.', '/lovable-uploads/arway.png', '/lovable-uploads/arway-icon.png', 'https://play.google.com/store/apps/details?id=com.nextechar.armaps', '{"Augmented Reality", "AR", "Maps", "Navigation", "Unity", "C#"}', '{"Place digital objects in AR", "Real-world location mapping", "Navigation assistance", "Customizable AR content", "Cross-device support"}');
