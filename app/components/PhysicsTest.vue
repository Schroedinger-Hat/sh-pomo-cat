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
  Body,
  Common,
} = Matter
let render: Matter.Render
let engine: Matter.Engine
let runner: Matter.Runner

// Function to add a new body when canvas is clicked
function addBodyOnClick(event: MouseEvent) {
  if (!engine || !render)
    return

  // Get click position relative to canvas
  const rect = render.canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Randomize shape and size
  const size = 20 + Math.random() * 60
  const isCircle = Math.random() > 0.5

  // Generate a random color
  const hue = Math.floor(Math.random() * 360)
  const color = `hsl(${hue}, 80%, 60%)`

  // Create the body
  let newBody
  if (isCircle) {
    newBody = Bodies.circle(x, y, size / 2, {
      restitution: 0.6,
      friction: 0.1,
      render: {
        fillStyle: color,
      },
    })
  }
  else {
    newBody = Bodies.rectangle(x, y, size, size, {
      restitution: 0.6,
      friction: 0.1,
      render: {
        fillStyle: color,
      },
    })
  }

  // Add the body to the world
  Composite.add(engine.world, newBody)
}

function start() {
  // Create engine
  engine = Engine.create()

  // Create initial bodies - add more boxes for a more interesting effect
  const bodies = []
  for (let i = 0; i < 10; i++) {
    // Randomize size between 40 and 80
    const size = 40 + Math.random() * 40

    // Create either a rectangle or circle randomly
    let body
    if (Math.random() > 0.5) {
      body = Bodies.rectangle(
        Math.random() * width.value,
        Math.random() * height.value * 0.3, // Top third of the screen
        size,
        size,
        {
          restitution: 0.6, // Make them bouncy
          friction: 0.1,
        },
      )
    }
    else {
      body = Bodies.circle(
        Math.random() * width.value,
        Math.random() * height.value * 0.3, // Top third of the screen
        size / 2,
        {
          restitution: 0.6, // Make them bouncy
          friction: 0.1,
        },
      )
    }

    bodies.push(body)
  }

  // Create ground at bottom of screen
  const ground = Bodies.rectangle(
    width.value / 2, // Center horizontally
    height.value, // Bottom of the screen
    width.value, // Make it wide enough
    50, // Thickness
    { isStatic: true, render: { opacity: 0 } },
  )

  // Create left wall
  const leftWall = Bodies.rectangle(
    -25, // Just outside the visible area
    height.value / 2, // Middle of the screen vertically
    50, // Thickness
    height.value * 2, // Taller than the screen
    { isStatic: true, render: { opacity: 0 } },
  )

  // Create right wall
  const rightWall = Bodies.rectangle(
    width.value + 25, // Just outside the visible area
    height.value / 2, // Middle of the screen vertically
    50, // Thickness
    height.value * 2, // Taller than the screen
    { isStatic: true, render: { opacity: 0 } },
  )

  // Add all bodies to the world
  Composite.add(engine.world, [...bodies, ground, leftWall, rightWall])

  // Create renderer
  render = Render.create({
    element: wrapperRef.value,
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

  // Add click event listener to canvas
  render.canvas.addEventListener('click', addBodyOnClick)

  // Run the renderer and engine
  Render.run(render)
  runner = Runner.create()
  Runner.run(runner, engine)
}

function handleResize() {
  if (!render || !engine)
    return

  // Update the renderer bounds and options
  render.bounds.max.x = width.value
  render.bounds.max.y = height.value
  render.options.width = width.value
  render.options.height = height.value

  // Update the canvas dimensions
  render.canvas.width = width.value * pixelRatio.value
  render.canvas.height = height.value * pixelRatio.value
  render.canvas.style.width = `${width.value}px`
  render.canvas.style.height = `${height.value}px`

  // Find and remove all static bodies (ground and walls)
  const staticBodies = engine.world.bodies.filter(body => body.isStatic)
  Composite.remove(engine.world, staticBodies)

  // Create new ground with updated dimensions
  const newGround = Bodies.rectangle(
    width.value / 2,
    height.value,
    width.value,
    50,
    { isStatic: true, render: { opacity: 0 } },
  )

  // Create new left wall
  const newLeftWall = Bodies.rectangle(
    -25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  // Create new right wall
  const newRightWall = Bodies.rectangle(
    width.value + 25,
    height.value / 2,
    50,
    height.value * 2,
    { isStatic: true, render: { opacity: 0 } },
  )

  // Add the new static bodies
  Composite.add(engine.world, [newGround, newLeftWall, newRightWall])

  // Reset all non-static bodies to make them fall again
  engine.world.bodies.forEach((body) => {
    if (!body.isStatic) {
      // Randomize position at the top of the screen
      const xPos = Math.random() * width.value
      const yPos = -50 - (Math.random() * 200) // Start above the visible area

      // Reset position and velocity
      Matter.Body.setPosition(body, { x: xPos, y: yPos })
      Matter.Body.setVelocity(body, { x: 0, y: 0 })
      Matter.Body.setAngularVelocity(body, 0)
      Matter.Body.setAngle(body, Math.random() * Math.PI * 2)
    }
  })

  // Update event listeners
  if (render.canvas) {
    render.canvas.removeEventListener('click', addBodyOnClick)
    render.canvas.addEventListener('click', addBodyOnClick)
  }

  // Set pixel ratio again to ensure proper scaling
  Matter.Render.setPixelRatio(render, pixelRatio.value)
}

// Watch for changes to width and height with a debounce to improve performance
const debouncedResize = useDebounceFn(() => {
  handleResize()
}, 100)

watch([width, height], () => {
  debouncedResize()
})

onMounted(async () => {
  if (!wrapperRef.value)
    return

  start()

  // Handle window resize events
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  // Remove event listener
  if (render && render.canvas) {
    render.canvas.removeEventListener('click', addBodyOnClick)
  }

  // Clean up event listeners
  window.removeEventListener('resize', debouncedResize)

  // Stop and clean up Matter.js instances
  if (runner)
    Runner.stop(runner)
  if (render)
    Render.stop(render)
  if (engine)
    Engine.clear(engine)
})

// Simple debounce function since we're not sure if useDebounceFn is available
function useDebounceFn(fn: Function, delay: number) {
  let timeout: number | null = null

  return function (...args: any[]) {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(...args)
      timeout = null
    }, delay) as unknown as number
  }
}
</script>

<template>
  <div ref="wrapper" class="wrapper" />
</template>
