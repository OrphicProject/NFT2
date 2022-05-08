import { MenuEntry, privacyAndPoliceLink, termsOfUseLink } from '@gravis.finance/uikit'

const menuLinks: MenuEntry[] = [
  {
    label: 'mainMenu.home',
    icon: 'HomeIcon',
    href: `${process.env.REACT_APP_HOME_URL}`,
    external: true,
  },
  {
    label: 'mainMenu.trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'swap',
        href: `/swap`,
      },
      {
        label: 'mainMenu.liquidity',
        href: `/pool`,
      },
    ],
  },
  {
    label: 'mainMenu.more',
    icon: 'MoreIcon',
    items: [
      {
        label: 'mainMenu.pitchDeck',
        href: 'https://drive.google.com/file/d/1IDezUTH4W1YY2NqAEo2amxUAk7u3BLhE/view',
        external: true,
      },
      {
        label: 'mainMenu.tokenomics',
        href: 'https://docs.google.com/spreadsheets/d/1avYbOzMg7vDt5Gmw16V8WomZG8RfHtaFGEUeZHOZ8vw/edit#gid=0',
        external: true,
      },
      {
        label: 'Infographics',
        href: `${process.env.REACT_APP_HOME_URL}/info?redirectUrl=${window.location.href}`,
        external: true,
      },
      {
        label: 'mainMenu.NFTFarming',
        href: `${process.env.REACT_APP_NFTFARMING_URL}`,
        external: true,
      },
      {
        label: 'mainMenu.docs',
        href: 'https://docs.gravis.finance/',
        external: true,
      },
      {
        label: 'Terms of Use',
        href: termsOfUseLink,
        external: true,
      },
      {
        label: 'Privacy Policy',
        href: privacyAndPoliceLink,
        external: true,
      },
    ],
  },
]

export default menuLinks
