import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, Corum Fragancias',
    company: 'Corum Fragancias',
    content: 'DevSolution transformó completamente nuestro negocio. La tienda online superó todas nuestras expectativas y las ventas han aumentado un 300% desde el lanzamiento. El equipo es muy profesional y siempre están disponibles para ayudarnos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director, MiNegocio',
    company: 'MiNegocio',
    content: 'El sistema de gestión de citas ha revolucionado nuestra operación. El dashboard es intuitivo y las estadísticas en tiempo real nos ayudan a tomar mejores decisiones. Solo esperamos que algunas funcionalidades avanzadas estén disponibles más rápido.',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Ana Martínez',
    role: 'Gerente de Operaciones',
    company: 'Solución de Salud',
    content: 'La plataforma de orientación de isapres con CRM ha sido fundamental para nuestro crecimiento. La generación automática de reportes Excel nos ahorra horas de trabajo semanal. Excelente servicio y atención al cliente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          );
        } else if (i === fullStars && hasHalfStar) {
          return (
            <div key={i} className="relative h-5 w-5">
              <Star className="h-5 w-5 fill-gray-200 text-gray-200 absolute" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          );
        } else {
          return (
            <Star key={i} className="h-5 w-5 fill-gray-200 text-gray-200" />
          );
        }
      })}
      <span className="ml-2 text-sm font-bold text-gray-700 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export function Testimonials() {
  return (
    <section 
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      aria-label="Testimonios de clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de clientes satisfechos que confiaron en nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden group">
                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/30 to-teal-100/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon with gradient */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-sm" />
                  <Quote className="h-8 w-8 text-cyan-500 relative z-10" />
                </div>
                
                {/* Star rating */}
                <div className="mb-6">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Testimonial content */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base relative z-10">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg overflow-hidden ring-2 ring-white shadow-lg">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover" 
                          loading="lazy"
                        />
                      ) : (
                        testimonial.name.charAt(0)
                      )}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-xs text-cyan-600 font-semibold mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

