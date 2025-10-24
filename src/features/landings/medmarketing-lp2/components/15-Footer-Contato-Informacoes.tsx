import React from 'react';
import { Mail, Shield, FileText } from 'lucide-react';
import { mainImages } from '@/assets/index';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Logo e Descrição */}
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src={mainImages.lefferSaudeTechPreto}
              alt="Leffer Saúde Tech - Marketing Médico com IA"
              className="h-20 w-auto filter brightness-0 invert"
            />
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-xl mb-1">
                Leffer Saúde Tech
              </p>
              <p className="text-gray-400 font-semibold text-base">
                Líder em Inteligência Artificial<br />
                para Marketing Médico no Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div className="text-center mb-12 pb-12 border-b border-gray-700">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full mb-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400 font-semibold text-sm">Contato:</span>
          </div>
          <p className="text-blue-400 font-bold text-lg">
            contato@leffertech.com
          </p>
        </div>

        {/* Disclaimers */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-start gap-3 mb-6">
              <Shield className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  <strong className="text-white">Aviso importante:</strong> Os resultados podem variar 
                  de médico para médico. Os depoimentos apresentados são reais, mas não garantem 
                  os mesmos resultados para todos os usuários. O sucesso depende de fatores como 
                  frequência de uso, especialidade médica e estratégias aplicadas.
                </p>
                
                <p className="text-gray-400 text-xs leading-relaxed">
                  Este produto é comercializado com apoio da <strong className="text-white">Hotmart</strong>. 
                  A plataforma não faz controle editorial prévio dos produtos comercializados, e todos os 
                  conceitos emitidos são de responsabilidade do Produtor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Links e Copyright */}
        <div className="text-center border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              Políticas de Privacidade
            </a>
            <span className="hidden md:inline text-gray-600">•</span>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              Termos de Uso
            </a>
          </div>
          
          <div className="text-gray-500 text-sm space-y-2">
            <p className="font-semibold">
              © 2025 Leffer Group. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              CNPJ: 58.891.984/0001-88
            </p>
          </div>
        </div>

        {/* Badge Final */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600 text-green-400 px-6 py-3 rounded-full text-xs font-bold">
            <Shield className="w-4 h-4" />
            100% VALIDADO CFM • MARKETING MÉDICO ÉTICO
          </div>
        </div>

      </div>
    </footer>
  );
}
