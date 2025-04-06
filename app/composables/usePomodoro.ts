export const usePomodoro = () => {
  const pomodoro = shallowRef(25 * 60)
  const completions = shallowRef(0)

  const { pause, resume: start, isActive } = useIntervalFn(() => {
    pomodoro.value = pomodoro.value - 1
    if (pomodoro.value === 0) {
      pause()
      completions.value = completions.value + 1
      pomodoro.value = 25 * 60
    }
  }, 1000, { immediate: false })

  const timeLeft = computed(() => {
    const minutes = Math.floor(pomodoro.value / 60)
    const seconds = pomodoro.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  })

  function reset() {
    pomodoro.value = 25 * 60
    if (isActive.value) {
      pause()
    }
  }

  return {
    completions,
    isActive,
    pause,
    reset,
    start,
    timeLeft,
  }
}
