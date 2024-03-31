export default defineEventHandler(async (event) => {

  // api call with private key
  const { currencyKey } = useRuntimeConfig()

  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`)

  return data
})