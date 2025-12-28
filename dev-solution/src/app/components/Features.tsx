import { motion } from 'motion/react';
import { CircleCheck } from 'lucide-react';

const features = [
  {
    title: 'Tecnología de Vanguardia',
    description: 'Utilizamos las últimas tecnologías y frameworks para garantizar aplicaciones modernas y escalables.',
  },
  {
    title: 'Diseño Responsivo',
    description: 'Todos nuestros proyectos funcionan perfectamente en cualquier dispositivo y tamaño de pantalla.',
  },
  {
    title: 'Soporte Continuo',
    description: 'Brindamos soporte técnico y mantenimiento continuo para asegurar el éxito a largo plazo.',
  },
  {
    title: 'Entrega a Tiempo',
    description: 'Cumplimos con los plazos establecidos sin comprometer la calidad del producto final.',
  },
  {
    title: 'Código Limpio',
    description: 'Escribimos código mantenible y bien documentado siguiendo las mejores prácticas de la industria.',
  },
  {
    title: 'Seguridad Avanzada',
    description: 'Implementamos las mejores prácticas de seguridad para proteger tus datos y los de tus usuarios.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nos comprometemos con la excelencia en cada proyecto que desarrollamos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 group p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="flex-shrink-0"
              >
                <CircleCheck className="h-6 w-6 text-green-400 mt-1" />
              </motion.div>
              <div>
                <h3 className="text-xl mb-2 group-hover:text-cyan-400 transition-colors font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-3xl text-center mb-12">Nuestro Proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Analizamos tus necesidades' },
              { step: '02', title: 'Diseño', desc: 'Creamos el prototipo' },
              { step: '03', title: 'Desarrollo', desc: 'Construimos la solución' },
              { step: '04', title: 'Lanzamiento', desc: 'Desplegamos tu proyecto' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block text-6xl bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4"
                >
                  {item.step}
                </motion.div>
                <h4 className="text-xl mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
