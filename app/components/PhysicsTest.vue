<script setup lang="ts">
import Matter from 'matter-js'

const wrapperRef = useTemplateRef('wrapper')
const { pixelRatio } = useDevicePixelRatio()
const { width, height } = useElementBounding(wrapperRef)

const {
  Bodies,
  Composite,
  Engine,
  Render,
  Runner,
} = Matter

function start() {
  const engine = Engine.create()
  const boxA = Bodies.rectangle(400, 200, 80, 80)
  const boxB = Bodies.rectangle(450, 50, 80, 80)
  const ground = Bodies.rectangle(0, 610, width.value, 60, { isStatic: true })

  Composite.add(engine.world, [boxA, boxB, ground])
  const render = Render.create({
    element: wrapperRef.value,
    engine,
    options: {
      pixelRatio: pixelRatio.value,
      width: width.value,
      height: height.value,
      wireframeBackground: 'transparent',
    },
  })
  Render.run(render)
  const runner = Runner.create()
  Runner.run(runner, engine)
}

onMounted(async () => {
  if (!wrapperRef.value)
    return
  start()
})
</script>

<template>
  <div ref="wrapper" class="wrapper" />
</template>
