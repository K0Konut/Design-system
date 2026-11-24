import { computed, getCurrentInstance, type Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface LinkProps {
  /** Page du site (lien du routeur) */
  to?: RouteLocationRaw
  /** Fichier ou site externe */
  href?: string
  /** Télécharger le fichier de `href` */
  download?: boolean
  /** Mention lue après un lien externe, « (nouvel onglet) » par défaut */
  newTabLabel?: string
}

/** Élément et attributs d'un lien ou d'un bouton : lien du routeur, `<a>` ou `<button>` ;
    un site externe s'ouvre dans un nouvel onglet, annoncé aux lecteurs d'écran (design system § TextLink).
    Sans vue-router installé, `to` donne un simple `<a>` : le composant se copie sans le routeur. */
export function useLink(props: LinkProps) {
  const routerLink = getCurrentInstance()?.appContext.components.RouterLink as Component | undefined
  const external = computed(() => !!props.href && /^https?:\/\//.test(props.href))
  const tag = computed(() => {
    if (props.to && routerLink) return routerLink
    return props.to || props.href ? 'a' : 'button'
  })
  // Un lien du routeur ne reçoit que sa destination : un `href` vide écraserait celui qu'il calcule
  const attrs = computed(() => {
    // Sans routeur, seule une adresse en chaîne a un sens : un objet de route ({ name }) ne se résout pas
    if (props.to)
      return routerLink
        ? { to: props.to }
        : { href: typeof props.to === 'string' ? props.to : undefined }
    if (!props.href) return { type: 'button' }
    return {
      href: props.href,
      download: props.download || undefined,
      target: external.value ? '_blank' : undefined,
      rel: external.value ? 'noopener' : undefined,
    }
  })
  const newTab = computed(() => (external.value ? (props.newTabLabel ?? '(nouvel onglet)') : ''))
  return { tag, attrs, external, newTab }
}
