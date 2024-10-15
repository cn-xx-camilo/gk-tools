import { toolsNodes } from '../toolsWindow.js'
import { gkNodes } from '../gkNodes.js'

import log from '../log.js'

const useVideoVolume = instance => {
    return {
        change: () => {
            if (gkNodes.video) {
                instance.appStatus.videoVolume = Number(toolsNodes.videoVolumeNumber.value) / 100

                gkNodes.video.volume = instance.appStatus.videoVolume

                log.add(1, `【当前音量】 ${instance.appStatus.videoVolume * 100}%`)
            } else {
                log.add(2, '【音量】未检测到播放器')
            }
        }
    }
}

export default useVideoVolume