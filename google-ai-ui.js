/**
 * Portal IFSC - UI Component Renderer para Ferramentas de IA (Google Education)
 */

import { googleAiToolsData, categoriesList } from './google-ai-tools.js';

export class GoogleAiToolsComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.tools = googleAiToolsData;
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.selectedToolForModal = null;
  }

  init() {
    if (!this.container) return;
    this.render();
    this.bindEvents();
  }

  getFilteredTools() {
    const query = this.searchQuery.trim().toLowerCase();
    return this.tools.filter(tool => {
      const matchCategory = this.currentCategory === 'all' || tool.categoryId === this.currentCategory;
      if (!matchCategory) return false;

      if (!query) return true;

      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.description.toLowerCase().includes(query);
      const catMatch = tool.category.toLowerCase().includes(query);
      const audienceMatch = tool.targetAudience.toLowerCase().includes(query);
      const keywordMatch = tool.keywords.some(k => k.toLowerCase().includes(query));

      return nameMatch || descMatch || catMatch || audienceMatch || keywordMatch;
    });
  }

  render() {
    const filteredTools = this.getFilteredTools();

    this.container.innerHTML = `
      <div class="space-y-8">
        <!-- Educational Banner -->
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-800 to-green-700 dark:from-emerald-950 dark:to-green-900 text-white p-6 sm:p-8 shadow-md border border-emerald-600/30">
          <div class="relative z-10 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold uppercase tracking-wider mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
              Ecossistema Educacional Gratuito (Free Tier)
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Recursos de IA do Google para a Comunidade do IFSC
            </h2>
            <p class="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Descubra ferramentas com Inteligência Artificial acessíveis gratuitamente por discentes, docentes e servidores com suas contas institucionais (<code class="bg-black/20 px-1.5 py-0.5 rounded text-white">@aluno.ifsc.edu.br</code> e <code class="bg-black/20 px-1.5 py-0.5 rounded text-white">@ifsc.edu.br</code>). Otimize estudos, pesquisas acadêmicas e atividades pedagógicas com segurança e privacidade.
            </p>

            <div class="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-emerald-200">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Sem custos de licença
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Proteção de privacidade de dados institucionais
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                Foco no aprendizado e produtividade acadêmica
              </span>
            </div>
          </div>
          <!-- Decorative Background Elements -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute right-8 top-8 opacity-10 hidden md:block">
            <svg class="w-48 h-48" viewBox="0 0 100 100" fill="currentColor">
              <path d="M10 10h20v20H10zM40 10h20v20H40zM70 10h20v20H70zM10 40h20v20H10zM40 40h20v20H40zM70 40h20v20H70zM10 70h20v20H10zM40 70h20v20H40zM70 70h20v20H70z"/>
            </svg>
          </div>
        </div>

        <!-- Controls: Search Bar and Category Filters -->
        <div class="space-y-4">
          <!-- Search Bar -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              type="text"
              id="google-ai-search"
              value="${this.searchQuery}"
              placeholder="Pesquisar ferramentas por nome ou palavra-chave (ex: resumo, código, texto, fala, pdf, ocr)..."
              class="w-full pl-11 pr-24 py-3 bg-white dark:bg-[#161b22] border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 dark:focus:ring-emerald-500 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm text-sm sm:text-base transition-all"
            />
            ${this.searchQuery ? `
              <button id="clear-search-btn" class="absolute inset-y-0 right-12 px-2 flex items-center text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                Limpar
              </button>
            ` : ''}
            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded">
                ${filteredTools.length} ${filteredTools.length === 1 ? 'item' : 'itens'}
              </span>
            </div>
          </div>

          <!-- Suggested Keyword Chips -->
          <div class="flex items-center flex-wrap gap-2 text-xs">
            <span class="text-gray-500 dark:text-gray-400 font-medium">Sugestões de busca:</span>
            ${['resumo', 'código', 'texto', 'transcrição', 'matemática', 'pdf', 'legendas', 'brainstorming'].map(kw => `
              <button 
                type="button" 
                data-keyword="${kw}" 
                class="suggested-chip px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-950 text-gray-700 dark:text-gray-300 hover:text-emerald-800 dark:hover:text-emerald-300 border border-gray-200 dark:border-gray-700 transition-colors"
              >
                #${kw}
              </button>
            `).join('')}
          </div>

          <!-- Category Segmented Buttons -->
          <div class="flex flex-wrap gap-2 pt-2 border-b border-gray-200 dark:border-gray-800 pb-4">
            ${categoriesList.map(cat => {
              const isActive = this.currentCategory === cat.id;
              return `
                <button
                  type="button"
                  data-category="${cat.id}"
                  class="cat-filter-btn px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-emerald-700 text-white shadow-sm dark:bg-emerald-600' 
                      : 'bg-white dark:bg-[#161b22] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }"
                >
                  ${cat.name}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Cards Grid -->
        ${filteredTools.length === 0 ? `
          <div class="text-center py-16 bg-white dark:bg-[#161b22] rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <div class="w-16 h-16 mx-auto mb-4 text-gray-400 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100">Nenhuma ferramenta encontrada</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-md mx-auto">
              Não encontramos resultados para "${this.searchQuery}". Tente pesquisar por termos como "resumo", "código", "texto" ou "pdf".
            </p>
            <button id="reset-filter-btn" class="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors">
              Ver todas as ferramentas
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredTools.map(tool => this.renderToolCard(tool)).join('')}
          </div>
        `}

        <!-- Pedagogical Notice Box -->
        <div class="p-4 sm:p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 flex flex-col sm:flex-row gap-4 items-start">
          <div class="p-2 bg-emerald-600 text-white rounded-lg shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="text-sm">
            <h4 class="font-bold text-emerald-950 dark:text-emerald-200 mb-1">Diretriz Institucional de Uso Ético da IA no IFSC</h4>
            <p class="text-emerald-800 dark:text-emerald-300 leading-relaxed">
              As ferramentas de Inteligência Artificial disponibilizadas no ecossistema educacional do Google são instrumentos de apoio ao ensino, pesquisa e extensão. A autoria acadêmica e o pensamento crítico pertencem ao discente e docente. Conforme regulamentação institucional, todo texto, análise ou código sugerido por IA deve passar por revisão humana crítica antes de qualquer entrega ou publicação oficial.
            </p>
          </div>
        </div>
      </div>

      <!-- Detail Modal -->
      <div id="tool-detail-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div id="modal-content" class="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
          <!-- Injected via JavaScript -->
        </div>
      </div>
    `;
  }

  renderToolCard(tool) {
    return `
      <div class="tool-card flex flex-col bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all">
        <!-- Card Top Bar: Icon, Name and Badge -->
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="p-2.5 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-700 shrink-0">
            ${tool.icon}
          </div>
          <span class="inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
            ${tool.badgeTier}
          </span>
        </div>

        <!-- Tool Identity -->
        <div class="mb-3">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-snug">
            ${tool.name}
          </h3>
          <div class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>${tool.category}</span>
          </div>
        </div>

        <!-- Description (Prompt Focused) -->
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
          ${tool.description}
        </p>

        <!-- Instructions Box -->
        <div class="p-3 rounded-lg bg-gray-50 dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 text-xs text-gray-700 dark:text-gray-300 mb-4">
          <div class="font-semibold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Como acessar e utilizar:
          </div>
          <p class="leading-normal">${tool.instructions}</p>
        </div>

        <!-- Keyword Tags -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${tool.keywords.slice(0, 4).map(kw => `
            <span class="text-[11px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/60 px-2 py-0.5 rounded">
              #${kw}
            </span>
          `).join('')}
        </div>

        <!-- Actions -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 mt-auto">
          <a
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-medium text-xs sm:text-sm shadow-sm transition-colors duration-150"
          >
            <span>Acessar Ferramenta</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
          <button
            type="button"
            data-open-modal="${tool.id}"
            title="Ver Dica de Uso Pedagógico"
            class="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1"
          >
            <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <span class="hidden sm:inline">Dica</span>
          </button>
        </div>
      </div>
    `;
  }

  openModal(toolId) {
    const tool = this.tools.find(t => t.id === toolId);
    if (!tool) return;

    const modal = document.getElementById('tool-detail-modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
      <div class="flex items-start justify-between pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            ${tool.icon}
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">${tool.name}</h3>
            <p class="text-xs text-emerald-700 dark:text-emerald-400 font-medium">${tool.category}</p>
          </div>
        </div>
        <button id="close-modal-btn" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="space-y-6 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1.5">Utilidade Pedagógica e Acadêmica</h4>
          <p class="leading-relaxed bg-gray-50 dark:bg-[#0d1117] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
            ${tool.description}
          </p>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1.5 flex items-center gap-2">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            Dica Prática para o Dia a Dia no IFSC
          </h4>
          <p class="leading-relaxed bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 p-4 rounded-xl text-emerald-900 dark:text-emerald-200">
            ${tool.pedagogicalTip}
          </p>
        </div>

        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-1.5">Passo a Passo de Acesso (Login Institucional)</h4>
          <div class="space-y-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
            <p>1. Utilize o navegador com sua conta Google Institucional vinculada (<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">@ifsc.edu.br</code> para servidores ou <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-gray-800 dark:text-gray-200">@aluno.ifsc.edu.br</code> para discentes).</p>
            <p>2. Ao abrir o serviço, certifique-se de que o avatar no canto superior direito mostra seu e-mail institucional para usufruir da proteção de dados corporativa.</p>
            <p>3. As ferramentas indicadas são gratuitas (Free Tier) e não geram faturamento ou cobranças adicionais.</p>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="text-xs text-gray-500">
            Público: <strong class="text-gray-700 dark:text-gray-300">${tool.targetAudience}</strong>
          </div>
          <a
            href="${tool.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold text-sm shadow transition-colors"
          >
            <span>Acessar ${tool.name.split(' ')[0]}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');

    document.getElementById('close-modal-btn').addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    };
  }

  bindEvents() {
    const searchInput = document.getElementById('google-ai-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
        this.bindEvents();
        const inputAfter = document.getElementById('google-ai-search');
        if (inputAfter) {
          inputAfter.focus();
          inputAfter.setSelectionRange(inputAfter.value.length, inputAfter.value.length);
        }
      });
    }

    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
        this.bindEvents();
      });
    }

    const resetBtn = document.getElementById('reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.currentCategory = 'all';
        this.render();
        this.bindEvents();
      });
    }

    document.querySelectorAll('.suggested-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const kw = e.currentTarget.getAttribute('data-keyword');
        this.searchQuery = kw;
        this.render();
        this.bindEvents();
      });
    });

    document.querySelectorAll('.cat-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.currentTarget.getAttribute('data-category');
        this.render();
        this.bindEvents();
      });
    });

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const toolId = e.currentTarget.getAttribute('data-open-modal');
        this.openModal(toolId);
      });
    });
  }
}
