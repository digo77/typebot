import { User } from 'db'
import { loadStripe } from '@stripe/stripe-js'
import { sendRequest } from 'utils'

export const pay = async (user: User, currency: 'usd' | 'eur') => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is missing in env')
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  const { data, error } = await sendRequest<{ sessionId: string }>({
    method: 'POST',
    url: '/api/stripe/checkout',
    body: { email: user.email, currency },
  })
  if (error || !data) return
  return stripe?.redirectToCheckout({
    sessionId: data?.sessionId,
  })
}
