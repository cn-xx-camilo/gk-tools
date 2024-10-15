
import { toolsNodes } from './toolsWindow.js'

const log = {
    add: (
        type = 0,
        text = '---'
    ) => {
        const color = ['#000000', '#00b42a', '#ff7d00', '#f53f3f']
        const tag = ['[Log]', '[Success]', '[Warning]', '[Error]']

        toolsNodes.log.insertAdjacentHTML(
            'beforeend',
            `<p style="font-size: 12px; margin: 5px; color: ${color[type]};">${tag[type]} ${text}</p>`
        )

        toolsNodes.log.scrollTop = toolsNodes.log.scrollHeight
    }
}

export default log