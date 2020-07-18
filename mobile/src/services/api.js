import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.0.68:3333'
//    baseURL:'localhost:3333'
})
export default api

/**
 * ios com emulador : localhost
 * ios com dispositivo fisico: ip da maquina(ipconfig)
 * Android com emulador: localhost (adb reverse tpc:porta tpc:porta)
 * Android com emulador: 10.0.2.2(android studio)
 * Android com discpositivo físico: Ip da maquina
 */