import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Prop {
  SgdToTwdRate?: number
}

const RateDisplay: FC<Prop> = ({ SgdToTwdRate }) => {

  const roundedRate = SgdToTwdRate?.toFixed(3)

  return (
    <TouchableOpacity>
      <Text style={styles.text}>匯率： {roundedRate ?? '......'}</Text>
    </TouchableOpacity>
  )
}

export default RateDisplay

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  }
})