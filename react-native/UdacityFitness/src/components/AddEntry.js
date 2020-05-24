import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { getMetricMetaInfo, timeToString } from './../utils/helpers'
import UdacSliders from './UdacSliders'
import UdacSteppers from './UdacSteppers'
import DateHeader from './DateHeader';

export default class AddEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
          run: 0,
          eat: 0,
          swim: 0,
          sleep: 0,
          bike: 0,
        };
    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric);

        this.setState((currState) => {
            const count = currState[metric] + step

            return {
                ...currState,
                [metric]: count > max ? max : count
            }
        })
    }

    decrement = (metric) => {
        this.setState((currState) => {
            const count = currState[metric] - getMetricMetaInfo(metric).step

            return {
                ...currState,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString()
        const entry = this.state

        //Update Redux
        // Navigate to home
        //save to db
        //clear local notification
    }

    render() {
        const infos = getMetricMetaInfo()
        return (
            <View>
                <DateHeader date={new Date().toDateString()}/>
                {Object.keys(infos).map((key) => {
                    const { getIcon, type, ...rest } = infos[key]
                    const value = this.state[key]
                    return (
                      <View key={key}>
                        {getIcon()}
                        {type === "slider" ? (
                          <UdacSliders
                            value={value}
                            onChange={(value) => this.slide(key, value)}
                          />
                        ) : (
                          <UdacSteppers
                            value={value}
                            onIncrement={this.increment}
                            onDecrement={this.decrement}
                          />
                        )}
                      </View>
                    );
                })}
            </View>
        )
    }
}

