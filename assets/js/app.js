/**
 * Aplicação Principal do Portal de IA e Aplicações - IFSC
 * Inicialização e Orquestração Modular
 */

import { loadCatalog } from './data/catalog.js';
import { UIController } from './modules/ui.js';
import { AppRouter } from './modules/router.js';
import { Analytics } from './modules/analytics.js';

async function initApp() {
  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Alternador de Tema Escuro / Claro
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  const updateThemeUI = () => {
    if (document.documentElement.classList.contains('dark')) {
      themeToggleLightIcon.classList.remove('hidden');
      themeToggleDarkIcon.classList.add('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
      themeToggleLightIcon.classList.add('hidden');
    }
  };

  updateThemeUI();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
      updateThemeUI();
    });
  }

  // Carrega catálogo unificado com cache-busting
  const catalog = await loadCatalog();

  // Inicializa Controller de UI
  const ui = new UIController(catalog);

  // Inicializa Roteador SPA
  const router = new AppRouter(catalog, ui);

  // Exporta métodos globais necessários para eventos inline (onclick)
  window.ui = ui;
  window.router = router;
  window.Analytics = Analytics;
  window.openAppModal = (appId, event) => ui.openAppModal(appId, event);
  window.switchTab = (tab) => ui.switchTab(tab);
  window.toggleFavorite = (appId, event) => ui.toggleFavorite(appId, event);
  window.copyPortalAppLink = (appId, event) => ui.copyPortalAppLink(appId, event);
  window.trackOt04Access = () => Analytics.trackOt04Access();

  // Modal Orientação Técnica nº 04/2025
  const ot04Modal = document.getElementById('ot04-modal');
  const ot04ModalContent = document.getElementById('ot04-modal-content');
  const closeOt04ModalBtn = document.getElementById('close-ot04-modal-btn');
  const ot04ModalBackdrop = document.getElementById('ot04-modal-backdrop');

  window.openOt04Modal = () => {
    if (!ot04Modal) return;
    ot04Modal.classList.remove('pointer-events-none');
    ot04Modal.classList.add('opacity-100');
    if (ot04ModalContent) {
      ot04ModalContent.classList.remove('scale-95');
      ot04ModalContent.classList.add('scale-100');
    }
    Analytics.trackOt04Access();
  };

  window.closeOt04Modal = () => {
    if (!ot04Modal) return;
    ot04Modal.classList.remove('opacity-100');
    if (ot04ModalContent) {
      ot04ModalContent.classList.remove('scale-100');
      ot04ModalContent.classList.add('scale-95');
    }
    setTimeout(() => {
      ot04Modal.classList.add('pointer-events-none');
    }, 200);
  };

  if (closeOt04ModalBtn) closeOt04ModalBtn.addEventListener('click', window.closeOt04Modal);
  if (ot04ModalBackdrop) ot04ModalBackdrop.addEventListener('click', window.closeOt04Modal);

  // Modal Office 365 Educação
  const msInfoModal = document.getElementById('ms-info-modal');
  const msInfoModalContent = document.getElementById('ms-info-modal-content');
  const closeMsInfoModalBtn = document.getElementById('close-ms-info-modal-btn');
  const msInfoModalBackdrop = document.getElementById('ms-info-modal-backdrop');

  window.openMsInfoModal = () => {
    if (!msInfoModal) return;
    msInfoModal.classList.remove('pointer-events-none');
    msInfoModal.classList.add('opacity-100');
    if (msInfoModalContent) {
      msInfoModalContent.classList.remove('scale-95');
      msInfoModalContent.classList.add('scale-100');
    }
  };

  const closeMsInfoModal = () => {
    if (!msInfoModal) return;
    msInfoModal.classList.remove('opacity-100');
    if (msInfoModalContent) {
      msInfoModalContent.classList.remove('scale-100');
      msInfoModalContent.classList.add('scale-95');
    }
    setTimeout(() => {
      msInfoModal.classList.add('pointer-events-none');
    }, 200);
  };

  if (closeMsInfoModalBtn) closeMsInfoModalBtn.addEventListener('click', closeMsInfoModal);
  if (msInfoModalBackdrop) msInfoModalBackdrop.addEventListener('click', closeMsInfoModal);

  // Fechamento de modais
  if (ui.closeModalBtn) ui.closeModalBtn.addEventListener('click', () => ui.closeModal());
  if (ui.modalBackdrop) ui.modalBackdrop.addEventListener('click', () => ui.closeModal());

  // Tecla ESC para fechar modais
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ui.closeModal();
      closeMsInfoModal();
      window.closeOt04Modal();
    }
  });

  // Copiar link do modal
  if (ui.modalShareBtn) {
    ui.modalShareBtn.addEventListener('click', () => {
      if (!ui.currentModalApp) return;
      const shareUrl = `${window.location.origin}/?app=${encodeURIComponent(ui.currentModalApp.id)}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        ui.shareBtnText.textContent = 'Copiado!';
        setTimeout(() => { ui.shareBtnText.textContent = 'Copiar Link'; }, 2000);
      });
    });
  }

  // Eventos de abas
  if (ui.tabToolsBtn) ui.tabToolsBtn.addEventListener('click', () => ui.switchTab('tools'));
  if (ui.tabExpertsBtn) ui.tabExpertsBtn.addEventListener('click', () => ui.switchTab('experts'));
  if (ui.tabGoogleBtn) ui.tabGoogleBtn.addEventListener('click', () => ui.switchTab('google'));
  if (ui.tabMicrosoftBtn) ui.tabMicrosoftBtn.addEventListener('click', () => ui.switchTab('microsoft'));

  // Eventos de filtro
  if (ui.filterContainer) {
    ui.filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      ui.currentFilter = btn.dataset.filter;
      ui.renderFilterButtons();
      ui.renderView();
    });
  }

  // Manipulação de busca
  const handleSearch = (val) => {
    ui.searchQuery = val;
    if (ui.searchDesktop) ui.searchDesktop.value = val;
    if (ui.searchMobile) ui.searchMobile.value = val;

    if (val) {
      if (ui.clearSearchDesktop) ui.clearSearchDesktop.classList.remove('hidden');
      if (ui.clearSearchMobile) ui.clearSearchMobile.classList.remove('hidden');
    } else {
      if (ui.clearSearchDesktop) ui.clearSearchDesktop.classList.add('hidden');
      if (ui.clearSearchMobile) ui.clearSearchMobile.classList.add('hidden');
    }

    ui.renderView();
  };

  if (ui.searchDesktop) ui.searchDesktop.addEventListener('input', (e) => handleSearch(e.target.value));
  if (ui.searchMobile) ui.searchMobile.addEventListener('input', (e) => handleSearch(e.target.value));

  if (ui.clearSearchDesktop) {
    ui.clearSearchDesktop.addEventListener('click', () => {
      handleSearch('');
      ui.searchDesktop.focus();
    });
  }
  if (ui.clearSearchMobile) {
    ui.clearSearchMobile.addEventListener('click', () => {
      handleSearch('');
      ui.searchMobile.focus();
    });
  }

  if (ui.clearFiltersBtn) {
    ui.clearFiltersBtn.addEventListener('click', () => {
      handleSearch('');
      ui.currentFilter = 'all';
      ui.renderFilterButtons();
      ui.renderView();
    });
  }

  // Atualiza contadores e renderização inicial
  ui.updateCounters();
  ui.renderFilterButtons();
  ui.renderView();

  // Inicializa resolução de rotas
  router.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
