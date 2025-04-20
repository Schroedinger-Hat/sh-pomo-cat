import { useSound } from '@vueuse/sound'
import wineGlassEffect from '~/assets/sounds/wine-glass.mp3'

export const useSoundEffects = () => {
  const { play } = useSound(wineGlassEffect)

  return {
    play,
  }
}
