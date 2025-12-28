import { Code, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl text-white">DevSolution</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transformamos ideas en soluciones digitales exitosas. 
              Especialistas en e-commerce, aplicaciones web y móviles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">E-commerce</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Aplicaciones Web</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Apps Móviles</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:devsolutionchile@gmail.com" 
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  devsolutionchile@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/56949238082" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +569 4923 8082
                </a>
              </li>
              <li>Santiago, Chile</li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/solution_devs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-purple-500/50"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevSolution. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
