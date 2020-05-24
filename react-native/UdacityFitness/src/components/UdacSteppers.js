import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const UdacSteppers = ({ max, step, unit, value, onIncrement, onDecrement }) => {
    return (
      <View>
        <TouchableOpacity>
          <FontAwesome
            name="minus"
            size={30}
            color={"black"}
            onPress={onDecrement}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome
            name="plus"
            size={30}
            color={"black"}
            onPress={onIncrement}
          />
        </TouchableOpacity>
      </View>
    );
}

export default UdacSteppers
