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
