
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at Epic Games",
      avatar: "photo-1487058792275-0ad4aaf24ca7",
      content: "Alex delivered an exceptional game that exceeded our expectations. His attention to detail and technical expertise is outstanding."
    },
    {
      name: "Michael Chen",
      role: "Lead Designer at Unity",
      avatar: "photo-1500673922987-e212871fec22",
      content: "Working with Alex was a pleasure. He brought our vision to life with creativity and professionalism."
    },
    {
      name: "Emily Davis",
      role: "CEO at GameStudio",
      avatar: "photo-1526374965328-7f61d4dc18c5",
      content: "Alex's games consistently achieve high ratings and player engagement. He's our go-to developer for challenging projects."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
              className="bg-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
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
