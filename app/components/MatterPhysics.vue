<script setup lang="ts">
import { usePomodoro } from '@/composables/usePomodoro'
import Matter from 'matter-js'

const wrapperRef = useTemplateRef('wrapper')
const { pixelRatio } = useDevicePixelRatio()
const { width, height } = useElementBounding(wrapperRef)
const { completions } = usePomodoro()
const {
  Bodies,
  Composite,
  Engine,
  Render,
  Runner,
  Mouse,
  Events,
  MouseConstraint,
} = Matter

let render: Matter.Render
let engine: Matter.Engine
let runner: Matter.Runner
let mouseConstraint: Matter.MouseConstraint

const isDragging = shallowRef(false)

function addNewBody(options = {}) {
  if (!engine || !render)
    return

  // Default options
  const defaultOptions = {
    x: width.value * Math.random(),
    y: -50,
    size: 20 + Math.random() * 60,
    isCircle: Math.random() > 0.5,
    color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
    restitution: 0.6,
    friction: 0.1,
  }

  const finalOptions = { ...defaultOptions, ...options }

  let newBody
  if (finalOptions.isCircle) {
    newBody = Bodies.circle(
      finalOptions.x,
      finalOptions.y,
      finalOptions.size / 2,
      {
        restitution: finalOptions.restitution,
        friction: finalOptions.friction,
        render: {
          fillStyle: finalOptions.color,
        },
      },
    )
  }
  else {
    newBody = Bodies.rectangle(
      finalOptions.x,
      finalOptions.y,
      finalOptions.size,
      finalOptions.size,
      {
        restitution: finalOptions.restitution,
        friction: finalOptions.friction,
        render: {
          fillStyle: finalOptions.color,
        },
      },
    )
  }
  Composite.add(engine.world, newBody)

  return newBody
}

function addMouseInteraction() {
  if (!engine || !render)
    return

  const mouse = Mouse.create(render.canvas)

  mouse.pixelRatio = pixelRatio.value

  mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  })

  Composite.add(engine.world, mouseConstraint)

  Events.on(mouseConstraint, 'startdrag', () => {
    isDragging.value = true
  })

  Events.on(mouseConstraint, 'enddrag', () => {
    isDragging.value = false
  })

  render.mouse = mouse
}

function start() {
  engine = Engine.create()

  const ground = Bodies.rectangle(
    width.value / 2,
    height.value + 25,
    width.value,
    0,
    { isStatic: true, render: { opacity: 0 } },
  )

  const leftWall = Bodies.rectangle(
    -25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  const rightWall = Bodies.rectangle(
    width.value + 25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  Composite.add(engine.world, [ground, leftWall, rightWall])

  render = Render.create({
    element: wrapperRef.value as HTMLDivElement,
    engine,
    options: {
      pixelRatio: pixelRatio.value,
      width: width.value,
      height: height.value,
      wireframes: false,
      background: 'transparent',
      wireframeBackground: 'transparent',
    },
  })

  Render.run(render)
  runner = Runner.create()
  Runner.run(runner, engine)

  addMouseInteraction()
}

function handleResize() {
  if (!render || !engine)
    return

  render.bounds.max.x = width.value
  render.bounds.max.y = height.value
  render.options.width = width.value
  render.options.height = height.value

  render.canvas.width = width.value * pixelRatio.value
  render.canvas.height = height.value * pixelRatio.value
  render.canvas.style.width = `${width.value}px`
  render.canvas.style.height = `${height.value}px`

  const staticBodies = engine.world.bodies.filter(body => body.isStatic)
  Composite.remove(engine.world, staticBodies)

  const newGround = Bodies.rectangle(
    width.value / 2,
    height.value + 25,
    width.value,
    50,
    { isStatic: true, render: { opacity: 0 } },
  )

  const newLeftWall = Bodies.rectangle(
    -25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  const newRightWall = Bodies.rectangle(
    width.value + 25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  Composite.add(engine.world, [newGround, newLeftWall, newRightWall])

  engine.world.bodies.forEach((body) => {
    if (!body.isStatic) {
      const xPos = Math.random() * width.value
      const yPos = -50 - (Math.random() * 200)

      Matter.Body.setPosition(body, { x: xPos, y: yPos })
      Matter.Body.setVelocity(body, { x: 0, y: 0 })
      Matter.Body.setAngularVelocity(body, 0)
      Matter.Body.setAngle(body, Math.random() * Math.PI * 2)
    }
  })

  Matter.Render.setPixelRatio(render, pixelRatio.value)

  if (mouseConstraint && mouseConstraint.mouse) {
    mouseConstraint.mouse.pixelRatio = pixelRatio.value
  }
}

const debouncedResize = useDebounceFn(() => {
  handleResize()
}, 200)

onMounted(async () => {
  if (!wrapperRef.value)
    return

  start()
  useEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  if (runner)
    Runner.stop(runner)
  if (render)
    Render.stop(render)
  if (engine)
    Engine.clear(engine)
})

watch([width, height], () => {
  debouncedResize()
})

watch(completions, addNewBody)

defineExpose({
  isDragging,
  addNewBody,
  clearBodies: () => {
    if (!engine)
      return
    const nonStaticBodies = engine.world.bodies.filter(body => !body.isStatic)
    Composite.remove(engine.world, nonStaticBodies)
  },
})
</script>

<template>
  <div ref="wrapper" class="wrapper" />
</template>
