export default defineEventHandler(async (event) => {

  const { code } = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `/latest?currencies=${code}&apikey=${currencyKey}`
  
  // const { data } = await $fetch(uri, { baseURL: 'https://api.currencyapi.com/v3' });
  //
  // return data

  // const { data } = await $fetch(uri, { baseURL: 'https://api.currencyapi.com/v3' });

  return $fetch(uri, { baseURL: 'https://api.currencyapi.com/v3' })
})