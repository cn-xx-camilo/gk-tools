import { toolsNodes } from '../toolsWindow.js'
import { gkNodes } from '../gkNodes.js'

import log from '../log.js'

const useAutoSwitchMenu = instance => {
    const autoSwitchMenu = {
        listener: e => {
            if (!instance.appStatus.autoSwitchMenu) {
                log.add(0, '【目录自动切换】启动中...')

                // 需要同时开启【结束自动切换】
                if (!instance.appStatus.autoSwitch) {
                    toolsNodes.autoSwitch.click()
                }

                toolsNodes.autoSwitchMenuStatus.style.backgroundColor = '#00b42a'
                e.target.textContent = '关闭'

                log.add(1, '【目录自动切换】已启动')
            } else {
                log.add(0, '【目录自动切换】正在停止...')

                toolsNodes.autoSwitchMenuStatus.style.backgroundColor = '#f53f3f'
                e.target.textContent = '开启'

                log.add(1, '【目录自动切换】已停止')
            }

            instance.appStatus.autoSwitchMenu = !instance.appStatus.autoSwitchMenu
        },
        change: () => {
            if (gkNodes.secondMenuNext) {
                log.add(0, `【目录切换】获取二级目录`)

                return gkNodes.secondMenuNext.click()
            }

            if (gkNodes.primaryMenuNext) {
                log.add(0, `【目录切换】获取一级目录`)

                return gkNodes.primaryMenuNext.click()
            }

            log.add(0, `【目录切换】目录切换结束`)
        }
    }

    return autoSwitchMenu
}

export default useAutoSwitchMenu