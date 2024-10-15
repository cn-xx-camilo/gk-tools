import { toolsNodes } from '../toolsWindow.js'
import { gkNodes } from '../gkNodes.js'

import log from '../log.js'

const useBackgroundWatch = instance => {
    const backgroundWatch = {
        listener: e => {
            if (!instance.appStatus.backgroundWatch) {
                log.add(0, '【后台播放】启动中...')

                if (gkNodes.video) {
                    backgroundWatch.start()
                }

                toolsNodes.backgroundWatchStatus.style.backgroundColor = '#00b42a'
                e.target.textContent = '关闭'

                log.add(1, '【后台播放】已启动')
            } else {
                log.add(0, '【后台播放】正在停止...')

                backgroundWatch.stop()

                toolsNodes.backgroundWatchStatus.style.backgroundColor = '#f53f3f'
                e.target.textContent = '开启'

                log.add(1, '【后台播放】已停止')
            }

            instance.appStatus.backgroundWatch = !instance.appStatus.backgroundWatch
        },
        start: () => {
            backgroundWatch.stop()

            instance.videoObserver.start()

            backgroundWatch.playVideo()

            window.addEventListener('blur', backgroundWatch.playVideo)
        },
        stop: () => {
            window.removeEventListener('blur', backgroundWatch.playVideo)
        },
        playVideo: () => {
            if (gkNodes.video.paused) {
                log.add(0, '【视频】开始播放')

                gkNodes.videoPlayButton.click()
            }
        }
    }

    return backgroundWatch
}

export default useBackgroundWatch