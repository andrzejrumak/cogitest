import { readonly, ref } from 'vue'

export default () => {
  const payload = ref(null)
  const loading = ref(false)

  const makeRequest = async (url) => {
    const res = await fetch(url)
    payload.value = await res.json()
  }

  return {
    payload: readonly(payload),
    loading: readonly(loading),
    makeRequest
  }
}
