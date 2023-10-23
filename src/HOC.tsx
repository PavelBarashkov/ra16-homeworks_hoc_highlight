/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { New, Popular } from './App';

export const withConditionalRendering = (Component: React.ComponentType<any>, value: number)  => {
    return class extends React.Component {
        state = {}

        render(): React.ReactNode {
            if (value >= 1000) {
                return <Popular><Component {...this.props}/></Popular>
            }
            if (value <= 100) {
                return <New><Component {...this.props}/></New>
            }
        }

    }
};