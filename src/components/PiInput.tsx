import { Image } from 'expo-image'
import React, { FC } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
interface Prop {
  currency: "SGD" | "TWD",
  value: string,
  setValue: (value: string, isEnteringSGD: boolean) => void
}

const PiInput: FC<Prop> = ({ currency, value, setValue }) => {
  const isEnteringSGD = currency === 'SGD'
  const imageSrc = isEnteringSGD
    ? require('../../assets/sgd.png')
    : require('../../assets/twd.png')

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageSrc}
        transition={1000}
      />
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='0.0'
        value={value}
        onChangeText={text => setValue(text, isEnteringSGD)}
      />
    </View>
  )
}

export default PiInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 16,
    width: '100%'
  },
  image: {
    width: 32,
    height: 32
  },
  input: {
    flex: 1,
    height: 80,
    fontSize: 32,
    fontWeight: '500',
    paddingHorizontal: 16,
  }
})