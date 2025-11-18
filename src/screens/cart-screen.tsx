import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartList from '../components/cart/cart-list'

export default function CartScreen() {
  return (
    <SafeAreaView>
        <CartList/>
    </SafeAreaView>
  )
}
