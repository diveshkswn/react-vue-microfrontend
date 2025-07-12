// VueWrapper.tsx
import React, { useRef, useEffect } from 'react'
import type { Component, App } from 'vue'
import { createApp, } from 'vue'

interface VueWrapperProps {
  component: Component
  props?: Record<string, unknown>
}

export const VueWrapper: React.FC<VueWrapperProps> = ({ component, props = {} }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const vueAppRef = useRef<App | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Create Vue app
      const app = createApp(component, props)
      vueAppRef.current = app
      app.mount(containerRef.current)
    }

    return () => {
      if (vueAppRef.current) {
        vueAppRef.current.unmount()
        vueAppRef.current = null
      }
    }
  }, [component, props])

  return <div ref={containerRef} />
}

export default VueWrapper




// type Props = {
//   component: any
//   props?: Record<string, any>
// }

// export const VueWrapper2: React.FC<Props> = ({ component, props = {} }) => {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const vueInstanceRef = useRef<any>(null)

//   useEffect(() => {
//     if (containerRef.current) {
//       // Create a Vue 2 instance
//       vueInstanceRef.current = new Vue({
//         render: (h) => h(component, { props }),
//       }).$mount()

//       containerRef.current.appendChild(vueInstanceRef.current.$el)
//     }

//     return () => {
//       if (vueInstanceRef.current) {
//         vueInstanceRef.current.$destroy()
//         if (vueInstanceRef.current.$el?.remove) {
//           vueInstanceRef.current.$el.remove()
//         }
//       }
//     }
//   }, [component, props])

//   return <div ref={containerRef} />
// }


