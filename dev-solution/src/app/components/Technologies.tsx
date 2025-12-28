import { motion } from 'motion/react';
import { 
  Code2, Database, Smartphone, Globe, 
  Palette, Zap, Shield, Cloud 
} from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: Palette,
    techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    icon: Code2,
    techs: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Bases de Datos',
    icon: Database,
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    techs: ['React Native', 'Kotlin', 'Swift', 'Flutter', 'Ionic'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    techs: ['AWS', 'Vercel', 'Docker', 'Git', 'CI/CD'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Herramientas',
    icon: Zap,
    techs: ['GitHub', 'Figma', 'Postman', 'Jira', 'Slack'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export function Technologies() {
  return (
    <section 
      className="py-24 bg-slate-900 text-white"
      aria-label="Tecnologías que utilizamos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Utilizamos las herramientas y frameworks más modernos para crear soluciones de alta calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tech.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                {tech.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {tech.techs.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-slate-700 text-gray-300 rounded-md text-sm hover:bg-cyan-600 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

