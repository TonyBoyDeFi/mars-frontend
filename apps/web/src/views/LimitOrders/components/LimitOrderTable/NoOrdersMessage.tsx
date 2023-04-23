import { Flex, Text } from '@pancakeswap/uikit'
import { useMemo } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import { ORDER_CATEGORY } from '../../types'

const NoOrdersMessage: React.FC<React.PropsWithChildren<{ orderCategory: ORDER_CATEGORY }>> = ({ orderCategory }) => {
  const { t } = useTranslation()

  const NoOrdersText = useMemo(() => {
    switch (orderCategory) {
      case ORDER_CATEGORY.Open:
        return t('You Do Not Have Open Orders')
      case ORDER_CATEGORY.History:
        return t('History is empty')
      case ORDER_CATEGORY.Expired:
        return t('You Have No Expired Orders')
      default:
        return ''
    }
  }, [orderCategory, t])

  return (
    <Flex p="24px" justifyContent="center" alignItems="center" flexDirection="column">
      <img width="125px" height="125px" src="https://i.ibb.co/jyK3BH1/logo.png" alt="logo"/>
      <Text color="textDisabled">{NoOrdersText}</Text>
    </Flex>
  )
}

export default NoOrdersMessage
