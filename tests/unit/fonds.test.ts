import { describe, expect, it } from 'vitest'
import { wavePath } from '../../src/components/fonds/wave'

describe('SectionWave', () => {
  it('dessine la même vague pour la même graine, une autre pour une autre graine', () => {
    expect(wavePath(3, 1440)).toEqual(wavePath(3, 1440))
    expect(wavePath(3, 1440).d).not.toBe(wavePath(4, 1440).d)
  })

  it('réduit la vague sur les écrans étroits', () => {
    expect(wavePath(3, 390).height).toBeLessThan(wavePath(3, 1440).height)
  })
})

describe('wavePath', () => {
  it('finit la vague au bord droit, même quand la largeur ne tombe pas sur un pas', () => {
    // 500 px : pas de 8 px, le dernier pas tombe à 496 ; la courbe doit partir de x = 500
    const { d } = wavePath(3, 500)
    expect(d).toMatch(/^M0,0H500V[\d.]+C/)
    expect(d.split('C')[1]?.split(' ')[0]).toMatch(/^49[6-9]/)
  })
})
