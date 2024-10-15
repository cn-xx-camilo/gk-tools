import { toolsNodes } from '../toolsWindow.js'
import { gkNodes } from '../gkNodes.js'

import log from '../log.js'

const useAutoSwitch = instance => {
    const autoSwitch = {
        listener: e => {
            if (!instance.appStatus.autoSwitch) {
                log.add(0, '【结束自动切换】启动中...')

                autoSwitch.start()

                toolsNodes.autoSwitchStatus.style.backgroundColor = '#00b42a'
                e.target.textContent = '关闭'

                log.add(1, '【结束自动切换】已启动')
            } else {
                log.add(0, '【结束自动切换】正在停止...')

                autoSwitch.stop()

                toolsNodes.autoSwitchStatus.style.backgroundColor = '#f53f3f'
                e.target.textContent = '开启'

                log.add(1, '【结束自动切换】已停止')
            }

            instance.appStatus.autoSwitch = !instance.appStatus.autoSwitch
        },
        start: () => {
            if (gkNodes.video) {
                autoSwitch.stop()

                instance.videoObserver.start()
                instance.menuObserver.start()

                autoSwitch.playVideo()

                gkNodes.video.addEventListener('ended', autoSwitch.endedSwitch)
            }
        },
        stop: () => {
            if (gkNodes.video) {
                gkNodes.video.removeEventListener('ended', autoSwitch.endedSwitch)
            }
        },
        endedSwitch: () => {
            autoSwitch.stop()

            log.add(0, '【结束自动切换】视频结束即将切换')

            if (gkNodes.menuItemNextIcon) {
                gkNodes.menuItemNextIcon.click()
            } else {
                log.add(2, '【结束自动切换】本章节视频播放完毕')

                if (instance.appStatus.autoSwitchMenu) {
                    instance.autoSwitchMenu.change()
                }
            }
        },
        playVideo: () => {
            if (gkNodes.video && gkNodes.video.paused) {
                log.add(0, '【视频】开始播放')

                gkNodes.videoPlayButton.click()
            }
        }
    }

    return autoSwitch
}

export default useAutoSwitch