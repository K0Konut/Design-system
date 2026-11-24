// @vitest-environment happy-dom
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import BaseTimeline from '../../src/components/ui/BaseTimeline.vue'
import CycleSteps from '../../src/components/ui/CycleSteps.vue'
import DefinitionList from '../../src/components/ui/DefinitionList.vue'
import PosterCard from '../../src/components/ui/PosterCard.vue'
import StatBlock from '../../src/components/ui/StatBlock.vue'
import StickyToc from '../../src/components/ui/StickyToc.vue'
import { vReveal } from '../../src/directives/reveal'

const options = { directives: { reveal: vReveal } }

describe('PosterCard', () => {
  it('pose son inclinaison seulement quand on la donne, et ne se soulève pas sans lift', () => {
    const tilted = mount(PosterCard, { props: { tilt: 1.5, as: 'article' } })
    expect(tilted.element.tagName).toBe('ARTICLE')
    expect(tilted.classes()).toEqual(expect.arrayContaining(['fond-nuit', 'poster', 'tilted']))
    expect(tilted.attributes('style')).toContain('--card-tilt: 1.5')
    const still = mount(PosterCard, { props: { fond: 'creme', lift: false } })
    expect(still.classes()).not.toContain('poster')
    expect(still.classes()).not.toContain('tilted')
    expect(still.attributes('style')).toBeUndefined()
  })
})

describe('DefinitionList', () => {
  it('donne une ligne par information, avec sa précision en dessous', () => {
    const items = [
      { label: 'Type', value: 'Stage' },
      { label: 'Code', value: 'Code privé', note: 'Le code appartient au CNAM.' },
    ]
    const w = mount(DefinitionList, { props: { items } })
    expect(w.findAll('dt').map((dt) => dt.text())).toEqual(['Type', 'Code'])
    expect(w.findAll('.note').map((n) => n.text())).toEqual(['Le code appartient au CNAM.'])
  })
})

describe('BaseTimeline', () => {
  it('liste les étapes dans l’ordre, chaque partie seulement si elle est donnée', () => {
    const items = [
      { title: 'ESIEA', date: '2021 – 2026' },
      { title: 'CNAM', link: { to: '/fr/projets/stage-cnam', label: 'Voir' } },
    ]
    const w = mount(BaseTimeline, { props: { items, draw: false }, global: options })
    expect(w.findAll('ol > li b').map((b) => b.text())).toEqual(['ESIEA', 'CNAM'])
    expect(w.findAll('time')).toHaveLength(1)
    expect(w.findAll('a').map((a) => a.attributes('href'))).toEqual(['/fr/projets/stage-cnam'])
  })

  it('laisse le slot item remplacer le contenu d’une étape', () => {
    const w = mount(BaseTimeline, {
      props: { items: [{ title: 'A' }], draw: false },
      slots: { item: '<template #item="{ item, index }">{{ index }}:{{ item.title }}</template>' },
      global: options,
    })
    expect(w.find('li').text()).toBe('0:A')
  })
})

describe('CycleSteps', () => {
  it('répartit les étapes sur l’anneau, et donne à chaque anneau sa propre flèche', () => {
    const steps = ['A', 'B', 'C', 'D'].map((title) => ({ title, text: '' }))
    const w = mount(CycleSteps, {
      props: { steps },
      slots: { center: 'Un nouveau tour.' },
      global: options,
    })
    expect(w.findAll('.line')).toHaveLength(4)
    expect(w.findAll('.back')).toHaveLength(1)
    const id = w.find('marker').attributes('id')
    expect(w.find('.line').attributes('marker-end')).toBe(`url(#${id})`)
    expect(w.find('.loop').text()).toBe('Un nouveau tour.')
  })
})

describe('StatBlock', () => {
  it('nomme ses barres en français par défaut, ou avec les libellés donnés', () => {
    const fr = mount(StatBlock, {
      props: { value: '0,8 s', label: 'Chargement', before: 3, after: 0.8 },
      global: options,
    })
    expect(fr.findAll('.bar > span:first-child').map((s) => s.text())).toEqual(['avant', 'après'])
    const en = mount(StatBlock, {
      props: {
        value: '0.8 s',
        label: 'Load',
        before: 3,
        after: 0.8,
        beforeLabel: 'before',
        afterLabel: 'after',
      },
      global: options,
    })
    expect(en.findAll('.bar > span:first-child').map((s) => s.text())).toEqual(['before', 'after'])
  })
})

describe('StickyToc', () => {
  it('s’appelle « Sommaire » par défaut', () => {
    // IntersectionObserver n'existe pas dans happy-dom : un faux suffit, le test ne lit que le nom
    globalThis.IntersectionObserver ??= class {
      observe() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver
    const w = mount(StickyToc, { props: { items: [{ id: 'a', label: 'A' }] } })
    expect(w.find('nav').attributes('aria-label')).toBe('Sommaire')
  })
})
