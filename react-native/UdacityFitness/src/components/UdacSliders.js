import React from 'react'
import { View, Text, Slider } from 'react-native'

const UdacSliders = ({max, value, unit, onChange}) => {

    return (
      <View>
        <Slider
          maximumValue={max}
          value={value}
          onValueChange={(value) => onChange(value)}
        />
        <Text>{value}</Text>
      </View>
    );
}

export default UdacSliders
