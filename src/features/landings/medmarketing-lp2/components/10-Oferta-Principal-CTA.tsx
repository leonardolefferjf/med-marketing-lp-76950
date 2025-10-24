import React, { useEffect, useState } from 'react';
import { 
  Sparkles, Shield, Clock, Check, CreditCard, 
  Lock, TrendingUp, Award, X 
} from 'lucide-react';

export default function OfferSection() {
  const [currentDate, setCurrentDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    crm: '',
    estado: ''
  });

  useEffect(() => {
    // Data de expiração - final do dia de hoje
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    const dateString = today.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);

    // Countdown
    const updateCountdown = () => {
      const now = new Date();
      const distance = today.getTime() - now.getTime();

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Marcar tempo de carregamento da página para cálculo de sessão
    if (!sessionStorage.getItem('page_load_time')) {
      sessionStorage.setItem('page_load_time', Date.now().toString());
    }

    return () => clearInterval(interval);
  }, []);

  const handleCheckout = () => {
    setShowCheckoutModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowCheckoutModal(false);
    document.body.style.overflow = '';
  };

  const handleSubmit = async () => {
    // Validação básica
    if (!formData.nome || !formData.email || !formData.crm || !formData.estado) {
      alert('Preencha todos os campos.');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('E-mail inválido.');
      return;
    }

    // Funções utilitárias para captura de dados
    const getUTMParams = () => {
      const params = new URLSearchParams(window.location.search);
      return {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        utm_id: params.get('utm_id') || ''
      };
    };

    const getAdTrackingData = () => {
      const params = new URLSearchParams(window.location.search);
      return {
        gclid: params.get('gclid') || '',
        fbclid: params.get('fbclid') || '',
        msclkid: params.get('msclkid') || '',
        ttclid: params.get('ttclid') || '',
        twclid: params.get('twclid') || '',
        li_fat_id: params.get('li_fat_id') || ''
      };
    };

    const getBrowserData = () => ({
      user_agent: navigator.userAgent || '',
      language: navigator.language || '',
      platform: navigator.platform || '',
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      is_mobile: /Mobi|Android/i.test(navigator.userAgent),
      cookies_enabled: navigator.cookieEnabled
    });

    const getSessionData = () => {
      const sessionStart = sessionStorage.getItem('page_load_time') || Date.now().toString();
      const timeOnPage = Math.round((Date.now() - parseInt(sessionStart)) / 1000);
      
      return {
        time_on_page: timeOnPage,
        scroll_depth: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) || 0,
        session_id: sessionStorage.getItem('session_id') || `sess_${Date.now()}`,
        is_returning_visitor: localStorage.getItem('visitor_id') ? true : false,
        visitor_id: localStorage.getItem('visitor_id') || `visitor_${Date.now()}`
      };
    };

    const getTrafficSource = () => {
      const referrer = document.referrer;
      let source = 'direct';
      let medium = 'none';
      
      if (referrer) {
        if (referrer.includes('google.')) { source = 'google'; medium = 'organic'; }
        else if (referrer.includes('facebook.') || referrer.includes('fb.')) { source = 'facebook'; medium = 'social'; }
        else if (referrer.includes('instagram.')) { source = 'instagram'; medium = 'social'; }
        else if (referrer.includes('youtube.')) { source = 'youtube'; medium = 'video'; }
        else if (referrer.includes('whatsapp')) { source = 'whatsapp'; medium = 'social'; }
        else if (referrer.includes('telegram')) { source = 'telegram'; medium = 'social'; }
        else { source = 'referral'; medium = 'referral'; }
      }
      
      return { traffic_source: source, traffic_medium: medium };
    };

    // Persistir dados de sessão
    const sessionData = getSessionData();
    sessionStorage.setItem('session_id', sessionData.session_id);
    localStorage.setItem('visitor_id', sessionData.visitor_id);

    // Construir URL do Hotmart com dados
    const hotmartBase = 'https://pay.hotmart.com/S100265658M?off=1g27admk&checkoutMode=10&offDiscount=DESCONTO&bid=1761005463938';
    const hotmartURL = `${hotmartBase}&name=${encodeURIComponent(formData.nome)}&email=${encodeURIComponent(formData.email)}`;

    // Preparar dados para o webhook
    const webhookUrl = 'https://n8n.leonardoleffer.top/webhook/ad3490b1-6449-4617-8cad-14320bef79ac';
    const payload = {
      // Dados básicos do formulário
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      crm: formData.crm.trim(),
      estado: formData.estado.trim(),
      produto: 'MedMarketing 4.0',
      
      // Dados temporais
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      
      // Dados de página e navegação
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer || '',
      
      // UTMs completos
      ...getUTMParams(),
      
      // IDs de tracking de anúncios
      ...getAdTrackingData(),
      
      // Dados do navegador/dispositivo
      ...getBrowserData(),
      
      // Dados de sessão e comportamento
      ...getSessionData(),
      
      // Análise automática de tráfego
      ...getTrafficSource(),
      
      // Dados comerciais da oferta
      offer_price: 997,
      original_price: 1994,
      discount_amount: 997,
      discount_percentage: 50,
      currency: 'BRL',
      
      // Dados do checkout Hotmart
      hotmart_offer_code: 'S100265658M',
      hotmart_affiliate_code: '1g27admk',
      discount_coupon: 'DESCONTO',
      checkout_url: hotmartURL,
      
      // Metadata adicional
      origin: 'landing_page',
      form_version: 'v2.0',
      conversion_point: 'checkout_modal',
      device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
    };

    // Enviar dados para n8n (sem bloquear o redirecionamento)
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true // Garante envio mesmo após redirecionamento
    }).catch(error => console.error('Erro ao enviar dados:', error));

    // Redirecionar imediatamente para o Hotmart
    window.location.href = hotmartURL;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section 
      id="oferta-section" 
      className="oferta-section bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 uppercase shadow-lg animate-pulse">
            <Sparkles className="w-5 h-5" />
            OFERTA ESPECIAL LIMITADA
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Garanta Seu Acesso{' '}
            <span className="bg-white px-3 py-1 rounded-lg inline-block">Vitalício</span>{' '}
            Agora
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-3xl mx-auto font-bold">
            165 Assistentes de IA + Bônus Exclusivos
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-8 mb-12 shadow-2xl">
          <div className="text-center mb-6">
            <Clock className="w-12 h-12 text-red-400 mx-auto mb-3" />
            <h3 className="text-xl md:text-2xl font-black mb-2">
              Oferta Expira em:
            </h3>
            <p className="text-gray-400 text-sm">
              {currentDate} às 23:59
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Horas</div>
            </div>
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Minutos</div>
            </div>
            <div className="bg-red-600 rounded-xl p-4 text-center">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Segundos</div>
            </div>
          </div>
        </div>

        {/* Oferta Principal */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-green-600 mb-8">
          
          {/* Preço Antigo Riscado */}
          <div className="text-center mb-8">
            <div className="text-gray-500 text-xl md:text-2xl line-through mb-2">
              De R$ 1.994
            </div>
            <div className="text-red-600 font-black text-lg md:text-xl mb-4">
              75% OFF - Apenas Hoje
            </div>
          </div>

          {/* Preço Atual */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 mb-8 text-center">
            <div className="text-lg md:text-xl font-bold mb-2">
              Por apenas
            </div>
            <div className="text-6xl md:text-8xl font-black mb-4">
              R$ 997
            </div>
            <div className="text-xl md:text-2xl font-bold mb-4">
              ou 12x de R$ 103
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold text-sm md:text-base">
              <Award className="w-5 h-5" />
              ACESSO VITALÍCIO • Pague 1x, use para sempre
            </div>
          </div>

          {/* Economia */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-8 text-center">
            <div className="text-yellow-700 font-black text-2xl md:text-3xl mb-2">
              Você Economiza R$ 1.497
            </div>
            <p className="text-gray-700 font-semibold">
              E nunca mais paga nada • Zero mensalidades
            </p>
          </div>

          {/* O Que Está Incluso */}
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-6">
              O Que Você Recebe Hoje:
            </h3>
            
            <div className="space-y-3">
              {[
                '165 Assistentes de IA Especializados (R$ 1.994)',
                'Dashboard Organizador Completo (R$ 497)',
                'Validação CFM Automática (R$ 697)',
                'Bônus Comunidade Médica Vitalícia (R$ 997)',
                'Atualizações Gratuitas (R$ 497)',
                'Bônus MagicMed Prompts (R$ 497)',
                'Bônus Hotmart Tutor (R$ 397)'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-6 text-center mt-6">
              <div className="text-lg font-bold mb-2">Valor Total do Pacote:</div>
              <div className="text-4xl md:text-5xl font-black mb-2">R$ 5.576</div>
              <div className="text-xl font-bold">Seu preço hoje: R$ 997</div>
            </div>
          </div>

          {/* CTA Principal */}
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl md:text-3xl py-6 md:py-8 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all mb-6"
          >
            <div className="flex items-center justify-center gap-3">
              <CreditCard className="w-8 h-8" />
              GARANTIR MINHA VAGA AGORA
            </div>
          </button>

          {/* Selos de Confiança */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-semibold">100% Validado CFM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Pagamento Seguro</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Se por qualquer motivo você não estiver satisfeito, devolvemos{' '}
              <strong className="text-gray-900">100% do seu dinheiro</strong> em até 30 dias. Sem perguntas, sem burocracia.
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm mt-4">
              Risco ZERO para você
            </div>
          </div>
        </div>

      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-black text-center mb-4">
              Finalize Sua Compra
            </h3>
            
            <p className="text-gray-600 text-center mb-8">
              Preencha seus dados para um checkout personalizado na Hotmart
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-black font-semibold mb-2">Nome Completo *</label>
                <input 
                  type="text" 
                  placeholder="Seu nome completo" 
                  value={formData.nome} 
                  onChange={e => handleInputChange('nome', e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none" 
                  required 
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">E-mail *</label>
                <input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  value={formData.email} 
                  onChange={e => handleInputChange('email', e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none" 
                  required 
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">CRM *</label>
                <input 
                  type="text" 
                  placeholder="Número do CRM" 
                  value={formData.crm} 
                  onChange={e => handleInputChange('crm', e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none" 
                  required 
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">Estado *</label>
                <select 
                  value={formData.estado} 
                  onChange={e => handleInputChange('estado', e.target.value)} 
                  className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none" 
                  required
                >
                  <option value="">Selecione seu estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 text-lg rounded transition-colors mt-6"
              >
                FINALIZAR COMPRA NA HOTMART
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-4">
                <Shield className="w-4 h-4 text-blue-500" />
                Seus dados estão protegidos e seguros
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
