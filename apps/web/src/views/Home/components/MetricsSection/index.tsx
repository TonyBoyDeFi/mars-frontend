import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'






  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <img src="https://i.ibb.co/jyK3BH1/logo.png" alt="logo"/>
      <Heading textAlign="center" scale="xl">
        {t('Millions of users globally.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Trusted among the biggest projects.')}
      </Heading>
      <Heading textAlign="center" color="textSubtle" mb="32px">
        {t('Marswap will become one of the biggest DEX + AMM + NFT platforms in the DeFi space.')}
      </Heading>

      <Heading textAlign="center" color="textSubtle" bold mb="32px">
        {t('Join the support of Marswap and thrive with us to grow on global scale!')}
      </Heading>

<div className="table-responsive">
<table className="table">
  <thead>
    <tr>
      <th scope="col">      <div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src="https://i.ibb.co/R6557yf/Bronze.png" alt="NFT Land" />
</div></th>
      <th scope="col">      <div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src="https://i.ibb.co/RY9f3DY/Gold.png" alt="NFT Land" />
</div></th>
      <th scope="col">      <div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src="https://i.ibb.co/kHFVYH3/Sapphire.png" alt="NFT Land" />
</div></th>
      <th scope="col">      <div className="card" style={{width: '18rem'}}>
<img className="card-img-top" src="https://i.ibb.co/dkvPbPf/Diamond.png" alt="NFT Land" />
</div></th>
    </tr>
  </thead>
</table>
</div>
</Flex>

  )
}

export default Stats
