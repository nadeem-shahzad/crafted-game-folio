
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const testimonials = [
    {
      name: "Saleem Basit",
      role: "Lead Game Developer at Earthfactor Pvt Ltd",
      avatar: "photo-1487058792275-0ad4aaf24ca7",
      content: "Excellent Work. I was extremely impressed with Nadeem's work on my game. He consistently delivered high-quality code, met deadlines, and was always open to feedback and suggestions. The game's performance is smooth, the graphics are stunning, and the gameplay is engaging. Nadeem demonstrated a deep understanding of Unity and mobile game development best practices. I would highly recommend him to anyone looking for a talented and reliable Unity developer."
    },
    {
      name: "Paul Krieg",
      role: "Project Owner",
      avatar: "photo-1500673922987-e212871fec22",
      content: "Absolutely impressed with Nadeem's creation, Treasure Sweeper! The game's innovative twist on Minesweeper, coupled with its engaging design and seamless interface, showcases Nadeem's exceptional talent in game development. The incorporation of the treasure theme adds a layer of excitement, making it a standout experience. Kudos to Nadeem for sharing these skills with the gaming community—I can't wait to see more of their imaginative creations in the future! 🌟"
    },
    {
      name: "Dillon Powers",
      role: "CEO at NPlays",
      avatar: "photo-1526374965328-7f61d4dc18c5",
      content: "Nadeem is very professional and went above and beyond to make sure my project needs were met. He was always quick with his communication and took time to understand the product and what I was trying to achieve and I think that really helped bring things to life. Thanks Nadeem!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            💬 Testimonials
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what industry professionals say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card p-6 rounded-2xl hover:shadow-lg transition-all duration-700 hover:-translate-y-1 border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://images.unsplash.com/${testimonial.avatar}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
