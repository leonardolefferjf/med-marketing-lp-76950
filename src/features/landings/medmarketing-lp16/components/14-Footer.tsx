import React from 'react';
import { mainImages } from '@/assets/index';
import { Mail, Phone, MapPin, Shield, Clock, Heart } from 'lucide-react';

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src={mainImages.logoMedMarketing}
              alt="MedMarketingAI+ Logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 mb-4">
              Automação completa de marketing médico. Mais de 1.200 médicos recuperaram suas vidas.
            </p>
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <Clock className="w-5 h-5" />
              <span>420h economizadas/ano</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:contato@medmarketingai.com.br" className="text-white hover:text-blue-400 transition-colors">
                    contato@medmarketingai.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a href="https://wa.me/5511999999999" className="text-white hover:text-blue-400 transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Endereço</p>
                  <p className="text-white">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="text-xl font-black text-white mb-4">Garantias</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Garantia 30 dias</p>
                  <p className="text-sm text-gray-400">100% dinheiro de volta</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Acesso vitalício</p>
                  <p className="text-sm text-gray-400">Sem mensalidades</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                <Heart className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Suporte humanizado</p>
                  <p className="text-sm text-gray-400">Resposta em 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Company Details */}
        <div className="mb-8">
          <h4 className="text-lg font-black text-white mb-3">Informações Legais</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="mb-1">
                <span className="font-bold text-gray-300">Razão Social:</span> MedMarketing AI Tecnologia Ltda
              </p>
              <p>
                <span className="font-bold text-gray-300">CNPJ:</span> 00.000.000/0001-00
              </p>
            </div>
            <div>
              <p className="mb-1">
                <span className="font-bold text-gray-300">Endereço:</span> Av. Paulista, 1000
              </p>
              <p>São Paulo - SP, CEP 01310-100</p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-yellow-900/20 rounded-xl p-6 mb-8 border border-yellow-800">
          <h4 className="text-lg font-black text-yellow-400 mb-3">Aviso Legal Importante</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <strong>Resultados:</strong> Os resultados de marketing médico variam conforme especialidade, região, consistência de uso e outros fatores. A economia de tempo de 420h/ano é baseada na média de uso entre usuários ativos comparado com tempo médio de marketing manual (9h/semana). Não garantimos resultados específicos de agendamentos ou faturamento.
            </p>
            <p>
              <strong>Ética Médica:</strong> O MedMarketingAI+ foi desenvolvido com base na Resolução CFM 2.336/2023 e boas práticas de marketing médico. No entanto, cada médico é responsável pelo conteúdo que publica e deve revisar tudo conforme seu julgamento profissional. A validação automática é uma ferramenta auxiliar, não substitui responsabilidade profissional.
            </p>
            <p>
              <strong>Tecnologia:</strong> Requer assinatura ativa do ChatGPT Plus (R$ 97/mês, cobrado diretamente pela OpenAI). Sistema funciona integrado ao ChatGPT. Funcionalidades podem sofrer alterações conforme atualizações da plataforma OpenAI.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MedMarketingAI+. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <span className="text-gray-700">•</span>
              <a href="#privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <span className="text-gray-700">•</span>
              <a href="#contrato" className="text-gray-400 hover:text-white transition-colors">
                Contrato de Licença
              </a>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-white" />
              <span className="font-black text-white">AUTOMAÇÃO 24/7</span>
              <span className="text-white">•</span>
              <span className="font-black text-white">MAIS TEMPO</span>
              <span className="text-white">•</span>
              <span className="font-black text-white">MAIS VIDA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
