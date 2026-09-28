/**
 * Módulo de Roteamento SPA e Resolução de Deep Linking
 * Trata rotas de prefixo (/gem/, /lgpd/, /google/) e atalhos diretos
 */

export const aliases = {
  'iastudio': 'g-ai-studio',
  'aistudio': 'g-ai-studio',
  'ai-studio': 'g-ai-studio',
  'gemini': 'g-gemini',
  'notebook': 'g-notebook',
  'notebooklm': 'g-notebook',
  'stitch': 'g-stitch',
  'colab': 'g-colab',
  'lens': 'g-lens',
  'vids': 'g-vids',
  'jules': 'g-jules',
  'antigravity': 'g-antigravity-2',
  'opal': 'g-opal',
  'pomelli': 'g-pomelli',
  'flowmusic': 'g-flowmusic',
  'copilot': 'ms-copilot',
  'm365': 'ms-copilot',
  'office': 'ms-office-web',
  'sibi': 'agent-sibi',
  'srp': 'agent-srp',
  'silvia': 'agent-srp',
  'dgp': 'agent-dgp',
  'cgd': 'agent-cgd',
  'guardiao': 'guardiao',
  'sezio': 'sezio',
  'lardic': 'lardic',
  'ripd': 'ripd',
  'mapeamento': 'mapeamento',
  'chatbot': 'chatbot',
  'pedemeia': 'pedemeia',
  'siads': 'siads',
  'padronizacao': 'padronizacao',
  'rsctae': 'rsctae',
  'processo': 'processo'
};

export class AppRouter {
  constructor(catalog, ui) {
    this.catalog = catalog;
    this.ui = ui;
  }

  resolveApp(query) {
    if (!query) return null;
    const clean = query.toLowerCase().replace(/[^a-z0-9\-]/g, '');

    // 1. Busca direta no mapa
    if (this.catalog.appMap[clean]) return this.catalog.appMap[clean];

    // 2. Com prefixos conhecidos
    if (this.catalog.appMap['g-' + clean]) return this.catalog.appMap['g-' + clean];
    if (this.catalog.appMap['ms-' + clean]) return this.catalog.appMap['ms-' + clean];
    if (this.catalog.appMap['agent-' + clean]) return this.catalog.appMap['agent-' + clean];

    // 3. Tabela de sinonímias
    if (aliases[clean] && this.catalog.appMap[aliases[clean]]) {
      return this.catalog.appMap[aliases[clean]];
    }

    // 4. Busca parcial
    for (const key in this.catalog.appMap) {
      const app = this.catalog.appMap[key];
      if (key.includes(clean) || (app.name && app.name.toLowerCase().includes(clean))) {
        return app;
      }
    }
    return null;
  }

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    let reqApp = urlParams.get('app') || urlParams.get('gem') || urlParams.get('tool');
    const reqTab = urlParams.get('tab');

    // Se veio direto pelo pathname (ex: /gem/sibi, /lgpd/guardiao, /google/iastudio)
    if (!reqApp) {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart && !['index.html', '404.html', 'termo', 'alpha', 'beta'].includes(lastPart)) {
        reqApp = lastPart;
      }
    }
    if (!reqApp && window.location.hash) {
      reqApp = window.location.hash.substring(1);
    }

    let initialTab = 'tools';
    if (reqTab) {
      const t = reqTab.toLowerCase();
      if (['tools', 'ferramentas', 'apps'].includes(t)) initialTab = 'tools';
      else if (['experts', 'gems', 'agentes', 'especialistas'].includes(t)) initialTab = 'experts';
      else if (['google', 'gsuite', 'workspace'].includes(t)) initialTab = 'google';
      else if (['microsoft', 'ms', 'copilot', 'office'].includes(t)) initialTab = 'microsoft';
    }
    this.ui.switchTab(initialTab);

    if (reqApp) {
      setTimeout(() => {
        const target = this.resolveApp(reqApp);
        if (target) {
          // Alternar automaticamente para a aba correta
          if (this.catalog.allGems.some(g => g.id === target.id)) {
            this.ui.switchTab('experts');
          } else if (this.catalog.allGoogle.some(g => g.id === target.id)) {
            this.ui.switchTab('google');
          } else if (this.catalog.allMicrosoft.some(m => m.id === target.id)) {
            this.ui.switchTab('microsoft');
          } else {
            this.ui.switchTab('tools');
          }

          // Abre a caixa descritiva com instruções de domínio
          this.ui.openAppModal(target.id);
        }
      }, 300);
    }
  }
}
