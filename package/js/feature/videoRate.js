import { toolsNodes } from '../toolsWindow.js'
import { gkNodes } from '../gkNodes.js'

import log from '../log.js'

const useVideoRate = instance => {
    return {
        change: () => {
            if (gkNodes.video) {
                instance.appStatus.videoRate = Number(toolsNodes.videoRateNumber.value)

                gkNodes.video.playbackRate = instance.appStatus.videoRate

                log.add(1, `【当前倍速】 ${instance.appStatus.videoRate}x`)
            } else {
                log.add(2, '【倍速】未检测到播放器')
            }
        }
    }
}

export default useVideoRate