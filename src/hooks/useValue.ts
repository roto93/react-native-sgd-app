import { useState } from 'react';
import { RateData } from './useRate';

const useValue = (rate?: RateData) => {
  const [values, setValues] = useState<string[]>();

  const onChange = (value: string, isEnteringSGD: boolean) => {
    if (!rate) return
    if (!value) return clearValues()
    try {
      if (isEnteringSGD) {
        var converted = (Number(value) * rate?.SGD2TWD).toFixed(2).toString()
        var newValues = [value, converted]
      } else {
        var converted = (Number(value) * rate?.TWD2SGD).toFixed(2).toString()
        var newValues = [converted, value]
      }
      if (converted !== 'NaN') setValues(newValues)
    } catch (e) { }
  }

  const clearValues = () => {
    setValues([])
  }

  return {
    rate,
    values,
    clearValues,
    onChange
  }
}

export default useValue