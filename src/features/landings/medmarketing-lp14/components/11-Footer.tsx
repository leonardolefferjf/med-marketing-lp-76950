import React from 'react';
import { Mail, FileText, Lock, Building } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-black">Leffer Saúde Tech</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Soluções de marketing médico com inteligência artificial
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-black">Contato</h3>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Email: suporte@medmarketingai.com.br
            </p>
            <p className="text-gray-400 text-sm">
              Atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>

          {/* Legal */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-black">Legal</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-800 pt-8">
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-2">Aviso Legal Importante</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Os resultados podem variar de acordo com o uso da plataforma, especialidade médica, região de atuação e dedicação do profissional. O MedMarketingAI+ é uma ferramenta de auxílio ao marketing médico e não garante resultados específicos. Todo conteúdo gerado deve ser revisado pelo médico antes da publicação. O profissional é o único responsável pelo conteúdo publicado em suas redes sociais.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-bold text-white">Compliance CFM:</span> O MedMarketingAI+ fornece validação automática baseada na Resolução CFM 2.336/2023 e boas práticas de ética médica. No entanto, a responsabilidade final pelo cumprimento das normas do CFM é do médico usuário. Recomendamos sempre consultar o Código de Ética Médica e as resoluções específicas do seu Conselho Regional.
            </p>
          </div>

          {/* Payment Partner */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-2">Pagamento processado com segurança por:</p>
            <p className="text-2xl font-black text-white">HOTMART</p>
            <p className="text-gray-400 text-xs mt-1">Plataforma líder em produtos digitais no Brasil</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Leffer Saúde Tech. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              MedMarketingAI+ é uma marca registrada da Leffer Saúde Tech.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
