import React, { useState, useEffect } from 'react';
import { Shield, X } from "lucide-react";
import { mainImages } from '@/assets/index';

const OfferSection = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  // Estilos para o botão otimizado
  const checkoutButtonStyles = `
    @keyframes breathe {
      0%, 100% { transform: scale(1) translateY(0px); }
      50% { transform: scale(1.01) translateY(-1px); }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes pulse-ring {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(1.3); opacity: 0; }
    }
    
    .button-enhanced {
      animation: breathe 3s ease-in-out infinite;
    }
    
    .shimmer {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shimmer 2s ease-in-out infinite;
      pointer-events: none;
    }
    
    .pulse-ring {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 100%; height: 100%;
      border: 2px solid rgba(234, 179, 8, 0.6);
      border-radius: 0.5rem;
      animation: pulse-ring 2s infinite;
      pointer-events: none;
      z-index: 1;
    }
  `;

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const dateString = tomorrow.toLocaleDateString('pt-BR', options);
    setCurrentDate(dateString);

    // Marcar tempo de carregamento da página para cálculo de sessão
    if (!sessionStorage.getItem('page_load_time')) {
      sessionStorage.setItem('page_load_time', Date.now().toString());
    }
  }, []);

  const stackItems = [{
    title: 'Acesso Vitalício ao ArtigoAI+',
    description: '15 assistentes de IA especializados em produção científica',
    value: 'R$ 997'
  }, {
    title: 'MagicMed Prompts (BÔNUS)',
    description: 'Gerador de prompts médicos otimizados + 200 templates',
    value: 'R$ 497'
  }, {
    title: 'Hotmart Tutor (BÔNUS)',
    description: 'Agente inteligente integrado à área de membros',
    value: 'R$ 397'
  }, {
    title: 'Atualizações Perpétuas',
    description: 'Todas as melhorias e novos assistentes inclusos',
    value: 'R$ 497'
  }];

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
    if (!formData.nome || !formData.email) {
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
    const hotmartBase = 'https://pay.hotmart.com/R99496974D?off=039fw0zp&checkoutMode=10&offDiscount=DESCONTO-ESPECIAL';
    const hotmartURL = `${hotmartBase}&name=${encodeURIComponent(formData.nome)}&email=${encodeURIComponent(formData.email)}`;

    // Preparar dados para o webhook
    const webhookUrl = 'https://n8n.leonardoleffer.top/webhook/artigoai';
    const payload = {
      // Dados básicos do formulário
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      produto: 'ArtigoAI+',
      
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
      offer_price: 297,
      original_price: 2388,
      discount_amount: 2091,
      discount_percentage: 87,
      currency: 'BRL',
      
      // Dados do checkout Hotmart
      hotmart_offer_code: 'R99496974D',
      hotmart_affiliate_code: '039fw0zp',
      discount_coupon: 'DESCONTO-ESPECIAL',
      checkout_url: hotmartURL,
      
      // Metadata adicional
      origin: 'landing_page',
      form_version: 'v1.0',
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="oferta-section" className="bg-white py-20 px-4">
      <style>{checkoutButtonStyles}</style>
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-bold mb-4 uppercase">
            🔥 OFERTA ESPECIAL LIMITADA
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4">
            Acesso <span className="text-blue-600">Vitalício</span> por Apenas<br />
            <span className="text-red-600 text-6xl font-black">R$ 297</span><br />
            <span className="text-gray-500 line-through text-2xl">(de R$ 2.388)</span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-6">
            Economia de <strong className="text-green-600">R$ 2.091</strong> • Desconto de <strong className="text-red-600">87%</strong>
          </p>
        </div>

        {/* Urgência */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-8">
          <div className="text-red-600 font-bold text-xl mb-2 uppercase">
            ⏰ PREÇO PROMOCIONAL TERMINA: {currentDate.toUpperCase()} ÀS 23:59H
          </div>
          <p className="text-red-600 text-sm mt-2">
            Após esse prazo, voltará ao preço normal de R$ 2.388
          </p>
        </div>

        {/* Value Stack */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-black text-center mb-6">
            Tudo que você recebe HOJE:
          </h3>

          <div className="space-y-3 mb-6">
            {stackItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-white rounded border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="text-xl font-bold text-black">Valor Total:</div>
              <div className="text-3xl font-bold text-blue-600">R$ 2.388</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-black">Seu Preço Hoje:</div>
              <div className="text-4xl font-bold text-red-600">R$ 297</div>
            </div>
            <div className="text-center mt-3">
              <div className="bg-green-600 text-white inline-block px-6 py-2 rounded font-bold">
                ECONOMIA DE R$ 2.091 (87% OFF)
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="mb-6">
          <div className="relative">
            <div className="pulse-ring"></div>
            <button 
              onClick={handleCheckout} 
              className="button-enhanced relative bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-xl md:text-2xl px-8 md:px-12 py-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.03] hover:translate-y-[-3px] transition-all duration-300 border-2 border-yellow-300 hover:border-yellow-500 group overflow-hidden w-full mb-4"
            >
              <div className="shimmer"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                QUERO MEU ACESSO VITALÍCIO POR R$ 297
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <div className="font-bold text-black">Garantia de 30 Dias</div>
                <div className="text-sm text-gray-600">100% do seu dinheiro de volta se não estiver satisfeito</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <img 
              src={mainImages.seloHotmart} 
              alt="Hotmart" 
              className="w-16 h-auto"
              loading="lazy"
            />
            <span className="text-black font-semibold">Pagamento 100% Seguro</span>
          </div>
        </div>

        {/* Urgência Final */}
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
          <div className="text-yellow-800 font-bold text-lg mb-2">
            ⚠️ ÚLTIMA CHANCE - OFERTA TERMINA EM POUCAS HORAS
          </div>
          <p className="text-yellow-700">
            Esta é sua única oportunidade de ter acesso vitalício ao ArtigoAI+ com 87% de desconto.<br />
            Não perca esta chance única de revolucionar sua produção científica!
          </p>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
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
};

export default OfferSection;
