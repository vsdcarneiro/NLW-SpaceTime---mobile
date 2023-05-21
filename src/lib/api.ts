import Constants from 'expo-constants'
import axios from 'axios'

const { ipAddress } = Constants.expoConfig.extra

export const api = axios.create({
  baseURL: `http://${ipAddress}:4000`,
})
