import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'E-commerce Corum Fragancias',
    description: 'Tienda online de perfumes con más de 10,000 productos, carrito de compras avanzado y sistema de recomendaciones.',
    image: '/portfolio/corumfragancias.png',
    link: 'https://www.corumfragancias.cl/',
    tags: ['E-commerce', 'React', 'Node.js', 'GetNet', 'Tailwind CSS', 'PostgreSQL'],
    color: 'border-l-cyan-500',
  },
  {
    title: 'App de Gestión de Agenda de Citas',
    description: 'Sistema completo de gestión de agenda de citas con dashboard, reportes en tiempo real y módulos de facturación.',
    image: '/portfolio/minegocio-dashboard.png',
    tags: ['Web App', 'Dashboard', 'TypeScript', 'PostgreSQL', 'React Native', 'WhatsApp API', 'Mercado Pago'],
    color: 'border-l-teal-500',
  },
  {
    title: 'Plataforma de Reservas',
    description: 'Sistema de reservas online con calendario interactivo, pagos automáticos y notificaciones. Integrado con WhatsApp API y Mercado Pago.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjYyMzUyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['SaaS', 'API', 'React', 'MongoDB'],
    color: 'border-l-emerald-500',
  },
  {
    title: 'App Móvil de Recomendacion Economica y Financiera',
    description: 'App de Recomendacion Economica y Financiera con sistema de recomendaciones y notificaciones.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY2Mjc3ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'Kotlin', 'Firebase', 'Retrofit', 'Jetpack Compose', 'Kotlin Coroutines'],
    color: 'border-l-orange-500',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos exitosos que hemos desarrollado para nuestros clientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 ${project.color} group cursor-pointer`}
                onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
                      >
                        {tag}
                      </Badge>
                    ))}
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
