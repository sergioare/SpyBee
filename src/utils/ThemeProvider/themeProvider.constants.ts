const typography = {
  name: 'Open Sans',
  src: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
}

const colors = {
  primary: {
    800: '#EEB702',
    700: '#FEC510',
    600: '#000000',
    500: '#3D3D3D',
    400: '#E2E2E2',
    300: '#F0F0F0',
    200: '#F2F2F2',
    100: '#FFFFFF',
  },

  plans: {
    small: '#C35A00',
    advanced: '#7D7D7D',
    premium: '#EBB400',
  },

  status: {
    success: '#128400',
    warning: '#DDAD00',
    danger: '#EBB400',
  },

}


const mediaQueries = {
  mobile: '320px',
  mobileL: '425px',
  tablet: '768px',
  desktop: '1024px',
  desktop_medium: '1280px',
}

export type Theme = typeof theme
export const theme = { colors, mediaQueries, typography }
