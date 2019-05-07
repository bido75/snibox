import StoreHelpers from './helpers'

export default {
  setSnippetTitle(state, value) {
    state.labelSnippets.active.title = value
  },

  setSnippetDescription(state, value) {
    state.labelSnippets.active.description = value
  },

  setLabelEditName(state, value) {
    state.labels.edit.name = value
  },

  setLabelSnippetEditTitle(state, {index, value}) {
    state.labelSnippets.active.snippetFiles[index].title = value
  },

  setLabelSnippetEditLanguage(state, {index, value}) {
    state.labelSnippets.active.snippetFiles[index].language = value
  },

  setLabelSnippetEditTabs(state, {index, value}) {
    state.labelSnippets.active.snippetFiles[index].tabs = value
  },

  setLabelSnippetEditLabel(state, value) {
    state.labelSnippets.edit.label = value
  },

  setSnippets(state, snippets) {
    state.snippets = snippets
  },

  setLabels(state, items) {
    state.labels.items = items
  },

  setLabelSnippets(state, items) {
    state.labelSnippets.items = items
  },

  setActiveLabel(state, item) {
    state.labels.active = item
    localStorage.setItem('labels_active', JSON.stringify(item))
    StoreHelpers.active.setLabel(state, item)
  },

  setActiveLabelSnippet(state, item) {
    state.labelSnippets.active = item
    localStorage.setItem('label_snippets_active', JSON.stringify(item))
    StoreHelpers.active.setLabelSnippet(state)
  },

  setSnippetMode(state, mode) {
    state.labelSnippets.mode = mode
  },

  setLanguages(state, languages) {
    state.languages = languages
  },

  setRenderAllSnippetsFlag(state, flag) {
    state.flags.renderAllSnippets = flag
  },

  setReadyFlag(state, flag) {
    state.flags.ready = flag
  },

  addSnippetFile(state, snippetIndex) {
    if (snippetIndex === -1) {
      snippetIndex = state.snippets.length - 1
    }
    state.labelSnippets.active.snippetFiles.push({
      title: '',
      content: '',
      language: 'automatically',
      tabs: 4,
    })
  },

  removeSnippetFile(state, snippetIndex) {
    state.labelSnippets.active.snippetFiles.splice(snippetIndex, 1)
  }
}
