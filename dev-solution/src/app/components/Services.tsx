import { motion } from 'motion/react';
import { ShoppingCart, Code, Smartphone, Globe, Palette, Zap } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online completas con pasarelas de pago, gestión de inventario y experiencias de compra optimizadas.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Aplicaciones Web',
    description: 'Aplicaciones web escalables y responsivas con las últimas tecnologías como React, Node.js y bases de datos modernas.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android con interfaces intuitivas.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Code,
    title: 'Desarrollo a Medida',
    description: 'Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseños modernos y experiencias de usuario cautivadoras que convierten visitantes en clientes.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Optimización',
    description: 'Mejoramos el rendimiento y la velocidad de tus aplicaciones existentes para mejores resultados.',
    color: 'from-amber-500 to-orange-500',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group cursor-pointer hover:scale-105 hover:-translate-y-2">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:shadow-xl group-hover:shadow-cyan-500/50`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-4 text-gray-900 group-hover:text-cyan-600 transition-colors font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
