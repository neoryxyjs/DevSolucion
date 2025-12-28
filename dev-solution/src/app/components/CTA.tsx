import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  project: string;
}

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    watch,
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuración de EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_rm2ciqp';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rzm0exk';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'lPZndZfWBBmeIUSrK';

      // Verificar que las credenciales estén configuradas
      if (!serviceId || serviceId === 'YOUR_SERVICE_ID' || 
          !templateId || templateId === 'YOUR_TEMPLATE_ID' || 
          !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('Las credenciales de EmailJS no están configuradas. Por favor, configura las variables de entorno.');
      }

      // Template parameters para EmailJS
      // Estos nombres deben coincidir exactamente con las variables del template
      const templateParams = {
        // Para el Subject: "Contact Us: {{title}}"
        title: data.name,
        // Para el From Name: {{name}}
        name: data.name,
        // Para el Reply To: {{email}}
        email: data.email,
        // Para el contenido del email (mantenemos los originales también)
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'No proporcionado',
        message: data.project,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      clearErrors(); // Limpiar todos los errores
      reset(); // Limpiar el formulario
      
      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      
      // Mensaje de error más específico
      let errorMsg = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o escríbenos directamente.';
      
      if (error?.text) {
        errorMsg = `Error: ${error.text}`;
      } else if (error?.message) {
        errorMsg = error.message;
      } else if (error?.status) {
        errorMsg = `Error ${error.status}: No se pudo enviar el correo. Verifica tu configuración de EmailJS.`;
      }
      
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
      
      // Resetear el mensaje de error después de 7 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-24 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 relative overflow-hidden" 
      id="contacto"
      aria-label="Formulario de contacto"
    >
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
            
            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700"
              >
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-red-700"
              >
                <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">
                    Error al enviar el mensaje
                  </p>
                  <p className="text-xs text-red-600">
                    {errorMessage || 'Por favor, verifica que las credenciales de EmailJS estén configuradas correctamente o escríbenos directamente a devsolutionchile@gmail.com'}
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Tu nombre"
                  className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { 
                    required: 'El nombre es requerido',
                    minLength: {
                      value: 2,
                      message: 'El nombre debe tener al menos 2 caracteres'
                    }
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', { 
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  placeholder="+569 000 000 000"
                  className="w-full"
                  {...register('phone')}
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Cuéntanos sobre tu proyecto <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Describe brevemente tu idea o proyecto..."
                  rows={4}
                  className={`w-full ${errors.project ? 'border-red-500' : ''}`}
                  {...register('project', { 
                    required: 'Por favor, describe tu proyecto',
                    minLength: {
                      value: 10,
                      message: 'La descripción debe tener al menos 10 caracteres'
                    }
                  })}
                />
                {errors.project && (
                  <p className="text-red-500 text-xs mt-1">{errors.project.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-6 group shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              También puedes escribirnos a <span className="text-cyan-600">devsolutionchile@gmail.com</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
