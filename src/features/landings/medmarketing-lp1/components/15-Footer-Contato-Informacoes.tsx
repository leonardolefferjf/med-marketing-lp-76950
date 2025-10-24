import React from 'react';
import { mainImages } from '@/assets/index';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo e Descrição */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src={mainImages.lefferSaudeTechPreto}
              alt="Leffer Saúde Tech"
              className="h-20 w-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-700 font-semibold text-lg">
                Líder em Inteligência Artificial<br />
                para Saúde no Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div className="mb-8">
          <p className="text-gray-700 font-semibold mb-2">Contato:</p>
          <p className="text-blue-600 font-semibold">contato@leffertech.com</p>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-300 pt-8">
          <div className="text-gray-600 text-sm leading-relaxed space-y-4 mb-6">
            <p>
              <strong>Aviso importante:</strong> Os resultados podem variar de pessoa para pessoa. Os depoimentos apresentados são reais, mas não garantem os mesmos resultados para todos os usuários.
            </p>
            
            <p>
              Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados.
            </p>
          </div>
          
          {/* Links e Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Políticas de Privacidade
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2025 Leffer Group. Todos os direitos reservados.<br />
            CNPJ: 58.891.984/0001-88
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
