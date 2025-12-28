import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

type ProjectType = 'ecommerce' | 'webapp' | 'mobile' | 'custom';
type Complexity = 'simple' | 'medium' | 'complex';

const projectTypes = {
  ecommerce: { name: 'E-commerce', base: 1500, multiplier: 1.2 },
  webapp: { name: 'Aplicación Web', base: 2000, multiplier: 1.5 },
  mobile: { name: 'App Móvil', base: 2500, multiplier: 1.8 },
  custom: { name: 'Solución Personalizada', base: 3000, multiplier: 2.0 },
};

const complexityMultipliers = {
  simple: 1.0,
  medium: 1.5,
  complex: 2.5,
};

export function BudgetCalculator() {
  const [projectType, setProjectType] = useState<ProjectType | ''>('');
  const [complexity, setComplexity] = useState<Complexity | ''>('');
  const [features, setFeatures] = useState<string[]>([]);
  const [estimatedBudget, setEstimatedBudget] = useState<number | null>(null);

  const featureOptions = [
    'Dashboard/Analytics',
    'Sistema de Pagos',
    'Autenticación de Usuarios',
    'Chat/Mensajería',
    'Notificaciones Push',
    'Integración con APIs',
    'Multi-idioma',
    'Panel de Administración',
  ];

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const calculateBudget = () => {
    if (!projectType || !complexity) return;

    const project = projectTypes[projectType];
    const complexityMult = complexityMultipliers[complexity];
    const featuresMult = 1 + (features.length * 0.15);
    
    const baseBudget = project.base * complexityMult * featuresMult;
    const finalBudget = baseBudget * project.multiplier;
    
    setEstimatedBudget(Math.round(finalBudget));
  };

  return (
    <section 
      className="py-24 bg-gradient-to-b from-white to-gray-50"
      aria-label="Calculadora de presupuesto"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Calculadora de Presupuesto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtén una estimación aproximada del costo de tu proyecto
          </p>
        </motion.div>

        <Card className="p-8 md:p-12 bg-white shadow-xl">
          <div className="space-y-8">
            {/* Tipo de Proyecto */}
            <div>
              <label className="block text-lg font-semibold mb-4 text-gray-900">
                Tipo de Proyecto
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(projectTypes).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setProjectType(key as ProjectType)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      projectType === key
                        ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{value.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complejidad */}
            <div>
              <label className="block text-lg font-semibold mb-4 text-gray-900">
                Complejidad del Proyecto
              </label>
              <div className="grid grid-cols-3 gap-4">
                {(['simple', 'medium', 'complex'] as Complexity[]).map((comp) => (
                  <button
                    key={comp}
                    onClick={() => setComplexity(comp)}
                    className={`p-4 rounded-lg border-2 transition-all capitalize ${
                      complexity === comp
                        ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {comp === 'simple' ? 'Simple' : comp === 'medium' ? 'Media' : 'Compleja'}
                  </button>
                ))}
              </div>
            </div>

            {/* Características */}
            <div>
              <label className="block text-lg font-semibold mb-4 text-gray-900">
                Características Adicionales
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {featureOptions.map((feature) => (
                  <button
                    key={feature}
                    onClick={() => toggleFeature(feature)}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      features.includes(feature)
                        ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón Calcular */}
            <Button
              onClick={calculateBudget}
              disabled={!projectType || !complexity}
              className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calcular Presupuesto
            </Button>

            {/* Resultado */}
            {estimatedBudget && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 border-2 border-cyan-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Presupuesto Estimado</h3>
                    <p className="text-gray-600">Aproximación basada en tus selecciones</p>
                  </div>
                </div>
                <div className="text-5xl font-bold text-cyan-600 mb-4">
                  ${estimatedBudget.toLocaleString('es-CL')} CLP
                </div>
                <p className="text-sm text-gray-600">
                  * Este es un presupuesto estimado. Para una cotización precisa, contáctanos y analizaremos tu proyecto en detalle.
                </p>
              </motion.div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}

