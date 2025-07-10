import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add more locations for other post types
    home: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Home', href: '/'}],
      }),
    }),
    global: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Global', href: '/'}],
      }),
    }),
    prompt: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Global', href: '/'}],
      }),
    }),
    service: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Global', href: '/'}],
      }),
    }),
    testimonial: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Global', href: '/'}],
      }),
    }),
    social: defineLocations({
      select: {},
      resolve: () => ({
        locations: [{title: 'Global', href: '/'}],
      }),
    }),
  },
}
