import axios from 'axios'
import { useQuery } from 'react-query'

export type RateData = {
  TWD2SGD: number
  SGD2TWD: number
  UTC: string
}

const useRate = () => {

  const { data } = useQuery({
    queryKey: 'get rate',
    queryFn: rateQuery,
    staleTime: 60000,
    select: (data) => ({
      TWD2SGD: data.USDSGD.Exrate / data.USDTWD.Exrate,
      SGD2TWD: data.USDTWD.Exrate / data.USDSGD.Exrate,
      UTC: data.USDTWD.UTC
    }),
  })
  return data ?? {
    TWD2SGD: 0.0424,
    SGD2TWD: 23.61,
    UTC: ""
  }
}

export default useRate


const URL = 'https://tw.rter.info/capi.php'

const rateQuery = async () => {
  return (await axios.get(URL)).data
}