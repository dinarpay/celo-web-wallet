import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/components/Button'
import Bittrex from 'src/components/icons/logos/bittrex.svg'
import Coinbase from 'src/components/icons/logos/coinbase.svg'
import Okcoin from 'src/components/icons/logos/okcoin.svg'
import Mail from 'src/components/icons/mail.svg'
import { Box } from 'src/components/layout/Box'
import { ModalLinkGrid } from 'src/components/modal/ModalLinkGrid'
import { useModal } from 'src/components/modal/useModal'
import { Color } from 'src/styles/Color'
import { Font } from 'src/styles/fonts'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export function HeaderSectionEmpty() {
  const { showModalWithContent } = useModal()
  const onClickBuyCelo = () => {
    showModalWithContent(
      'Where to buy Celo',
      <ExchangesModal />,
      null,
      null,
      'Celo currencies can be earned or purchased from these exchanges.'
    )
  }

  const navigate = useNavigate()
  const onClickSeeWallet = () => {
    navigate('/wallet')
  }

  return (
    <Box direction="column">
      <h1 css={style.header}>Welcome to your Celo wallet!</h1>

      <Box direction="column">
        <Box direction="row" align="end">
          <img src={Mail} css={style.icon} alt="Get Started" />
          <label css={[Font.body, Font.bold]}>Get started</label>
        </Box>
        <p css={style.tip}>All new wallets start empty. Add funds to start using Celo.</p>
        <p css={style.tip}>
          You can{' '}
          <button css={style.tipButton} onClick={onClickBuyCelo}>
            buy currency
          </button>{' '}
          from an exchange or ask a friend on Celo to send a payment to{' '}
          <Link to="/wallet" css={Font.linkLight}>
            your address.
          </Link>
        </p>
        <div>
          <Button size="s" onClick={onClickBuyCelo} margin="2em 2em 0 0">
            Buy Celo
          </Button>
          <Button size="s" onClick={onClickSeeWallet} margin="2em 0 0 0">
            See Your Wallet
          </Button>
        </div>
      </Box>
    </Box>
  )
}

function ExchangesModal() {
  const links = [
    {
      url: 'https://www.coinbase.com/earn/celo',
      imgSrc: Coinbase,
      text: 'Coinbase',
    },
    {
      url: 'https://global.bittrex.com/Market/Index?MarketName=USD-CELO',
      imgSrc: Bittrex,
      text: 'Bittrex',
    },
    {
      url: 'https://www.okcoin.com/spot/trade/celo-usd',
      imgSrc: Okcoin,
      text: 'Okcoin',
    },
  ]
  return <ModalLinkGrid links={links} />
}

const style: Stylesheet = {
  header: {
    ...Font.h1,
    margin: '0.2em 0 1.2em 0',
    color: Color.primaryGreen,
  },
  icon: {
    marginRight: '0.5em',
    height: '2em',
    width: '2em',
  },
  tip: {
    ...Font.body,
    margin: '1em 0 0 0',
  },
  tipButton: {
    ...Font.linkLight,
    fontWeight: 300,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
    background: 'none',
  },
  exchangeLink: {
    marginTop: '1em',
    fontSize: '1.1em',
    color: Color.primaryBlack,
    textAlign: 'center',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  exchangeLinkContent: {
    textDecoration: 'none',
    borderRadius: 3,
    width: '5.6em',
    height: '5.8em',
    margin: '0 0.5em',
    border: `1px solid ${Color.primaryWhite}`,
    ':hover': {
      borderColor: Color.altGrey,
    },
    [mq[768]]: {
      width: '7em',
      height: '7.2em',
    },
  },
  exchangeIcon: {
    height: '2.5em',
    width: '2.5em',
    marginBottom: '0.7em',
    [mq[768]]: {
      width: '3em',
      height: '3em',
    },
  },
}
