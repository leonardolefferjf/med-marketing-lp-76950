import React, { useEffect, useState } from 'react';
import { 
  Sparkles, Shield, Clock, Check, CreditCard, 
  Lock, TrendingUp, Award, X, Users, Zap,
  Star, ArrowRight, AlertCircle, DollarSign
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
      className="oferta-section bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-16 md:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header - OTIMIZADO */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full text-xs font-bold mb-6 uppercase shadow-lg animate-pulse">
            <AlertCircle className="w-4 h-4 animate-bounce" />
            Última Chance • Oferta Expira Hoje
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 px-4">
            Garanta Seu Acesso{' '}
            <span className="bg-white px-3 py-2 rounded-lg inline-block">
              Vitalício
            </span>{' '}
            Agora
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-900 leading-relaxed max-w-3xl mx-auto font-bold mb-6">
            165 Assistentes de IA + R$ 1.891 em Bônus Exclusivos
          </p>

          {/* Social Proof Inline - NOVO */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-900">
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-bold">1.247 médicos usando</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="font-bold">4.9/5.0 avaliação</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-bold">100% CFM</span>
            </div>
          </div>
        </div>

        {/* Countdown Timer - OTIMIZADO */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl p-6 md:p-8 mb-12 shadow-2xl border-4 border-red-600">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full mb-4">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm">OFERTA TERMINA EM</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black mb-2">
              ⚠️ Última Chance para Pegar os Bônus
            </h3>
            <p className="text-gray-400 text-sm">
              Após {currentDate} às 23:59, perde R$ 1.891 em bônus
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto mb-6">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 text-center border-2 border-red-400">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Horas</div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 text-center border-2 border-red-400">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Minutos</div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 text-center border-2 border-red-400">
              <div className="text-4xl md:text-5xl font-black mb-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase font-bold">Segundos</div>
            </div>
          </div>

          {/* Progress bar visual - NOVO */}
          <div className="bg-gray-800 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 h-full transition-all duration-1000"
              style={{ 
                width: `${100 - ((timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds) / 86400) * 100}%` 
              }}
            ></div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Tempo restante para garantir oferta vitalícia
          </p>
        </div>

        {/* Oferta Principal - OTIMIZADO */}
        <div className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl border-4 border-green-600 mb-8">
          
          {/* Badge "Mais Popular" - NOVO */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              <Star className="w-5 h-5" />
              Plano Mais Escolhido por Médicos
            </div>
          </div>

          {/* Preço Visual Stack - OTIMIZADO */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-black text-base inline-block">
                🔥 75% OFF • SÓ HOJE
              </span>
            </div>
            <div className="text-gray-400 text-2xl md:text-3xl line-through mb-2">
              De R$ 1.994
            </div>
            <div className="text-gray-500 text-lg mb-4">
              + R$ 497/mês (se fosse assinatura)
            </div>
          </div>

          {/* Preço Atual - OTIMIZADO */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 md:p-10 mb-8 text-center shadow-2xl">
            <div className="text-base md:text-lg font-bold mb-2 text-green-100">
              Pagamento Único • Acesso Vitalício
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl md:text-5xl font-black">R$</span>
              <span className="text-7xl md:text-9xl font-black">997</span>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-6 text-green-100">
              ou 12x de R$ 83,08 sem juros
            </div>
            <div className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-black text-sm md:text-base shadow-lg">
              <Zap className="w-5 h-5" />
              NUNCA MAIS PAGA NADA • R$ 0/mês para sempre
            </div>
          </div>

          {/* Economia Destacada - OTIMIZADO */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-4 border-yellow-600 rounded-xl p-6 mb-8 text-center">
            <div className="text-gray-900 font-black text-3xl md:text-4xl mb-2">
              💰 Você Economiza R$ 2.888
            </div>
            <div className="text-gray-800 font-bold text-lg">
              (74% de desconto + Zero mensalidades)
            </div>
          </div>

          {/* O Que Está Incluso - OTIMIZADO */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-6 flex items-center justify-center gap-2">
              <Check className="w-8 h-8 text-green-600" />
              Tudo Que Você Recebe Hoje
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                { item: '165 Assistentes de IA Especializados', value: 'R$ 1.994', icon: Sparkles },
                { item: 'Validação CFM Automática', value: 'R$ 697', icon: Shield },
                { item: 'Comunidade Médica Vitalícia', value: 'R$ 997', icon: Users },
                { item: 'MagicMed Prompts', value: 'R$ 497', icon: Award },
                { item: 'Hotmart Tutor IA 24/7', value: 'R$ 397', icon: Zap },
                { item: 'Atualizações Gratuitas', value: 'R$ 497', icon: TrendingUp }
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-green-50 rounded-xl p-4 border-2 border-green-200 hover:border-green-400 transition-all">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 font-bold text-sm">{benefit.item}</div>
                      <div className="text-green-600 font-black text-xs">{benefit.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stack de Valor Total - OTIMIZADO */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl p-6 md:p-8 text-center shadow-2xl">
              <div className="text-base font-bold mb-2 text-purple-200">Valor Total do Pacote Completo:</div>
              <div className="text-5xl md:text-6xl font-black mb-3">R$ 5.579</div>
              <div className="h-1 bg-white/30 w-full mb-3"></div>
              <div className="text-xl md:text-2xl font-black text-yellow-300">
                Seu Preço Hoje: Apenas R$ 997
              </div>
            </div>
          </div>

          {/* CTA Principal - OTIMIZADO */}
          <button
            onClick={handleCheckout}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl md:text-3xl py-6 md:py-8 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all mb-6 border-4 border-green-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <CreditCard className="w-8 h-8" />
              <span>GARANTIR MINHA VAGA AGORA</span>
              <ArrowRight className="w-8 h-8" />
            </div>
          </button>

          {/* Microcopy abaixo do CTA - NOVO */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-3">
              ✓ Acesso liberado em até 2 minutos • ✓ Sem mensalidades • ✓ Garantia 30 dias
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Pagamento processado pela Hotmart (empresa de confiança)</span>
            </div>
          </div>

          {/* Selos de Confiança - OTIMIZADO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <span className="font-bold text-gray-900 text-sm">100% Validado CFM</span>
              <span className="text-xs text-gray-600">Resolução 2.336/2023</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-bold text-gray-900 text-sm">Pagamento Seguro</span>
              <span className="text-xs text-gray-600">SSL 256-bit</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-bold text-gray-900 text-sm">Acesso Imediato</span>
              <span className="text-xs text-gray-600">Em até 2 minutos</span>
            </div>
          </div>
        </div>

        {/* Garantia - OTIMIZADA */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border-2 border-blue-500 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
              Se por <strong>qualquer motivo</strong> você não estiver satisfeito, 
              devolvemos <strong className="text-green-600">100% do seu dinheiro</strong> em até 30 dias.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Sem perguntas. Sem burocracia. Sem letras miúdas.
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-sm">
              ✓ Risco ZERO para você
            </div>
          </div>
        </div>

        {/* Urgência Final - NOVO */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 text-center text-white">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            ⏰ Não Deixe Para Depois
          </h3>
          <p className="text-lg mb-4">
            Restam apenas <strong className="text-yellow-300 text-2xl">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </strong> para garantir
          </p>
          <p className="text-red-100 text-sm">
            Depois disso, perde R$ 1.891 em bônus e a oferta vitalícia acaba
          </p>
        </div>

      </div>

      {/* Checkout Modal - OTIMIZADO */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header do Modal - OTIMIZADO */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                Falta Pouco! 🎉
              </h3>
              <p className="text-gray-600">
                Preencha seus dados para finalizar na <strong>Hotmart</strong> (pagamento 100% seguro)
              </p>
            </div>

            {/* Resumo da Oferta - NOVO */}
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Seu investimento:</span>
                <span className="text-2xl font-black text-green-600">R$ 997</span>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <div>✓ 165 Assistentes de IA</div>
                <div>✓ R$ 1.891 em bônus grátis</div>
                <div>✓ Acesso vitalício • R$ 0/mês</div>
              </div>
            </div>

            {/* Formulário */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  placeholder="Dr(a). Seu Nome Completo" 
                  value={formData.nome} 
                  onChange={e => handleInputChange('nome', e.target.value)} 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">
                  E-mail *
                </label>
                <input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  value={formData.email} 
                  onChange={e => handleInputChange('email', e.target.value)} 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">
                  CRM *
                </label>
                <input 
                  type="text" 
                  placeholder="Número do seu CRM" 
                  value={formData.crm} 
                  onChange={e => handleInputChange('crm', e.target.value)} 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors" 
                  required 
                />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">
                  Estado *
                </label>
                <select 
                  value={formData.estado} 
                  onChange={e => handleInputChange('estado', e.target.value)} 
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors" 
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
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-4 text-lg rounded-xl transition-all shadow-lg hover:shadow-xl mt-6 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-6 h-6" />
                IR PARA PAGAMENTO SEGURO
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mt-4 bg-gray-50 rounded-lg p-3">
                <Lock className="w-4 h-4 text-green-600" />
                <span>Seus dados estão protegidos • SSL 256-bit • Hotmart</span>
              </div>

              {/* Trust badges - NOVO */}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Seguro</div>
                </div>
                <div className="text-center">
                  <Zap className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Imediato</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-xs text-gray-600">Garantia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
