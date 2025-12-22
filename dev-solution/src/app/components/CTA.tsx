import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 relative overflow-hidden" id="contacto">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-white">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
              Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad. 
              Obtén una consulta gratuita y un presupuesto personalizado sin compromiso.
            </p>
            <ul className="space-y-4 text-cyan-50">
              {[
                'Respuesta en menos de 24 horas',
                'Presupuesto personalizado gratuito',
                'Asesoramiento técnico sin costo',
                'Soporte durante todo el proyecto',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-400" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl mb-6 text-gray-900">
              Solicita tu Consulta Gratuita
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+569 000 000 000"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm mb-2 text-gray-700">
                  Cuéntanos sobre tu proyecto
                </label>
                <Textarea
                  id="project"
                  placeholder="Describe brevemente tu idea o proyecto..."
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-6 group shadow-lg"
              >
                Enviar Solicitud
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              También puedes escribirnos a <span className="text-cyan-600">contacto@devsolution.com</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
