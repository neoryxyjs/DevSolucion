import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Corum Fragancias',
    description: 'Tienda online de perfumes con más de 10,000 productos, carrito de compras avanzado y sistema de recomendaciones.',
    image: '/portfolio/corum-fragancias.png',
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
    title: 'Solución de Salud',
    description: 'Plataforma dedicada a orientar clientes en la selección de isapres con CRM interno avanzado. Sistema completo con estadísticas en tiempo real, generación automática de reportes Excel desde bases de datos y gestión de leads con seguimiento completo.',
    image: '/portfolio/soluciondesalud.png',
    link: '',
    tags: ['Web App', 'CRM', 'Dashboard', 'React', 'Node.js', 'PostgreSQL', 'Excel Export', 'Analytics', 'Leads Management'],
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section 
      className="py-24 bg-gradient-to-b from-gray-50 to-white" 
      id="portfolio"
      aria-label="Portafolio de proyectos"
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
                onClick={() => setSelectedProject(project)}
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

      {/* Modal de detalles del proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                <div className="relative h-64 md:h-96 overflow-hidden">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="ml-auto"
                      >
                        <ExternalLink className="h-6 w-6 text-cyan-600 hover:text-cyan-700 transition-colors" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 text-sm px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Ver Proyecto
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
