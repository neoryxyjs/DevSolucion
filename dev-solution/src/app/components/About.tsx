import { motion } from 'motion/react';
import { Target, Users, Award, Rocket } from 'lucide-react';
import { Card } from './ui/card';

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Transformar ideas innovadoras en soluciones digitales exitosas que impulsen el crecimiento de nuestros clientes.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Rocket,
    title: 'Visión',
    description: 'Ser el socio tecnológico de confianza para empresas que buscan destacar en el mundo digital con soluciones de clase mundial.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Comprometidos con la excelencia en cada proyecto, utilizando las mejores prácticas y tecnologías de vanguardia.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Users,
    title: 'Compromiso',
    description: 'Trabajamos de cerca con nuestros clientes para entender sus necesidades y entregar soluciones que superen expectativas.',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function About() {
  return (
    <section 
      className="py-24 bg-gradient-to-b from-gray-50 to-white" 
      id="sobre-nosotros"
      aria-label="Sobre nosotros"
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
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo de desarrolladores apasionados por crear soluciones digitales 
            que marquen la diferencia. Con años de experiencia en el desarrollo de software, 
            ayudamos a empresas a alcanzar sus objetivos digitales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full text-center hover:shadow-xl transition-all duration-300 border-0 bg-white group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Transformar tu Negocio?
          </h3>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en nosotros para llevar sus ideas al siguiente nivel digital.
          </p>
          <motion.a
            href="#contacto"
            className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

