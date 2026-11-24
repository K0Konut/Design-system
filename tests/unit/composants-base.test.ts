// @vitest-environment happy-dom
import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import BaseButton from '../../src/components/ui/BaseButton.vue'
import CopyButton from '../../src/components/ui/CopyButton.vue'
import NextLink from '../../src/components/ui/NextLink.vue'
import TextLink from '../../src/components/ui/TextLink.vue'

// Avec vue-router : RouterLink déclaré dans l'application (ici un faux)
const options = () => ({ components: { RouterLink: RouterLinkStub } })

describe('BaseButton', () => {
  it('est un bouton quand il agit sur la page', () => {
    const w = mount(BaseButton, { slots: { default: 'Me contacter' }, global: options() })
    expect(w.element.tagName).toBe('BUTTON')
    expect(w.attributes('type')).toBe('button')
  })

  it('est un lien quand il mène à un fichier, avec download pour le CV', () => {
    const w = mount(BaseButton, {
      props: { href: '/cv/cv-fr.pdf', download: true, icon: 'download' },
      slots: { default: 'Télécharger le CV' },
      global: options(),
    })
    expect(w.element.tagName).toBe('A')
    expect(w.attributes('download')).toBeDefined()
    expect(w.classes()).toContain('btn-download')
  })

  it('mène à une page du site par le routeur', () => {
    const w = mount(BaseButton, {
      props: { to: '/fr/projets' },
      slots: { default: 'Projets' },
      global: options(),
    })
    expect(w.findComponent(RouterLinkStub).props('to')).toBe('/fr/projets')
  })

  it('devient un simple lien sans vue-router, pour se copier sans le routeur', () => {
    const w = mount(BaseButton, { props: { to: '/fr/projets' }, slots: { default: 'Projets' } })
    expect(w.element.tagName).toBe('A')
    expect(w.attributes('href')).toBe('/fr/projets')
  })

  it('ouvre un site externe dans un nouvel onglet, comme un lien texte', () => {
    const w = mount(BaseButton, {
      props: { href: 'https://github.com/K0Konut', icon: 'arrow-up-right' },
      slots: { default: 'GitHub' },
      global: options(),
    })
    expect(w.attributes('target')).toBe('_blank')
    expect(w.find('.sr-only').text()).toBe('(nouvel onglet)')
  })
})

describe('TextLink', () => {
  it('ouvre un lien externe dans un nouvel onglet, et le dit aux lecteurs d’écran', () => {
    const w = mount(TextLink, {
      props: { href: 'https://github.com/K0Konut' },
      slots: { default: 'GitHub' },
      global: options(),
    })
    expect(w.attributes('target')).toBe('_blank')
    expect(w.attributes('rel')).toBe('noopener')
    expect(w.find('.sr-only').text()).toBe('(nouvel onglet)')
  })

  it('reste dans l’onglet pour un lien interne', () => {
    const w = mount(TextLink, {
      props: { href: '#projets' },
      slots: { default: 'Projets' },
      global: options(),
    })
    expect(w.attributes('target')).toBeUndefined()
    expect(w.find('.sr-only').exists()).toBe(false)
  })

  it('annonce le nouvel onglet dans la langue donnée', () => {
    const w = mount(TextLink, {
      props: { href: 'https://github.com/K0Konut', newTabLabel: '(new tab)' },
      slots: { default: 'GitHub' },
    })
    expect(w.find('.sr-only').text()).toBe('(new tab)')
  })
})

describe('CopyButton', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('copie l’adresse, l’annonce, puis revient à « Copier »', async () => {
    vi.useFakeTimers()
    const writeText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined)
    const w = mount(CopyButton, { props: { value: 'a@b.fr' }, global: options() })
    await w.find('button').trigger('click')
    await flushPromises()
    expect(writeText).toHaveBeenCalledWith('a@b.fr')
    expect(w.find('button').text()).toBe('Copié')
    expect(w.find('[aria-live]').text()).toBe('Copié')
    vi.advanceTimersByTime(2000)
    await flushPromises()
    expect(w.find('button').text()).toBe('Copier')
  })

  it('sélectionne l’adresse si le presse-papiers est refusé', async () => {
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('refusé'))
    const w = mount(CopyButton, {
      props: { value: 'a@b.fr' },
      global: options(),
      attachTo: document.body,
    })
    await w.find('button').trigger('click')
    await flushPromises()
    expect(w.find('button').text()).toBe('Sélectionné : Ctrl + C')
    expect(getSelection()?.toString()).toBe('a@b.fr')
    w.unmount()
  })

  it('prend les textes donnés, pour une autre langue', async () => {
    vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined)
    const labels = { idle: 'Copy', copied: 'Copied', selected: 'Selected: Ctrl + C' }
    const w = mount(CopyButton, { props: { value: 'a@b.fr', labels } })
    expect(w.find('button').text()).toBe('Copy')
    await w.find('button').trigger('click')
    await flushPromises()
    expect(w.find('button').text()).toBe('Copied')
  })
})

describe('NextLink', () => {
  it('passe par le routeur s’il est là, sinon reste un simple lien', () => {
    const props = { label: 'Suivant', title: 'TextLink', to: '/fr/composants/text-link' }
    const routed = mount(NextLink, { props, global: options() })
    expect(routed.findComponent(RouterLinkStub).props('to')).toBe(props.to)
    const plain = mount(NextLink, { props })
    expect(plain.element.tagName).toBe('A')
    expect(plain.attributes('href')).toBe(props.to)
  })
})
