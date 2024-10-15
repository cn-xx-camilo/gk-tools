import { toolsWindow, toolsNodes } from './js/toolsWindow.js'
import { gkNodes } from './js/gkNodes.js'
import { useVideoObserver, useMenuObserver } from './js/observer.js'

import log from './js/log.js'

import { allowPaste } from './js/feature/allowPaste.js'
import useVideoRate from './js/feature/videoRate.js'
import useVideoVolume from './js/feature/videoVolume.js'
import useBackgroundWatch from './js/feature/backgroundWatch.js'
import useAutoSwitch from './js/feature/autoSwitch.js'
import autoSwitchMenu from './js/feature/autoSwitchMenu.js'

class GKTools {
    constructor() {
        this.appStatus = {
            backgroundWatch: false,
            autoSwitch: false,
            autoSwitchMenu: false,
            videoRate: 1,
            videoVolume: 1
        }

        this.observerState = {
            video: false,
            menu: false
        }

        // 初始化功能函数
        this.backgroundWatch = useBackgroundWatch(this)
        this.videoRate = useVideoRate(this)
        this.videoVolume = useVideoVolume(this)
        this.autoSwitch = useAutoSwitch(this)
        this.autoSwitchMenu = autoSwitchMenu(this)

        
        this.videoObserver = useVideoObserver(this)
        this.menuObserver = useMenuObserver(this)

        window.document.body.insertAdjacentHTML('beforeend', toolsWindow)

        log.add(0, '【国开小助手】正在启动中...')

        this.stateChange()

    }

    stateChange () {
        if (document.readyState === 'complete') {
            this.startup()
        } else {
            setTimeout(() => this.stateChange(), 1000)
        }
    }

    startup () {
        log.add(1, '【国开小助手】启动成功')

        /**
         * 监听程序基本功能按钮事件
         */
        // 窗口隐藏
        toolsNodes.hide.addEventListener('click', this.windowHide.bind(this))

        // 关闭助手
        toolsNodes.close.addEventListener('click', () => {
            if (window.confirm('关闭后将刷新网页，是否继续继续关闭')) location.reload()
        })

        /**
         * 页面切换监听
         */
        window.addEventListener('popstate', this.popState.bind(this))


        /**
         * 监听功能按钮事件
         */
        // 视频后台观看
        toolsNodes.backgroundWatch.addEventListener('click', this.backgroundWatch.listener)

        // 结束自动切换
        toolsNodes.autoSwitch.addEventListener('click', this.autoSwitch.listener)

        // 目录自动切换
        toolsNodes.autoSwitchMenu.addEventListener('click', this.autoSwitchMenu.listener)

        // 解除粘贴限制
        toolsNodes.allowPaste.addEventListener('click', allowPaste)

        // 调整倍速
        toolsNodes.videoRate.addEventListener('click', this.videoRate.change)

        // 调整音量
        toolsNodes.videoVolume.addEventListener('click', this.videoVolume.change)

        /**
         * 创建观察器
         */
        if (gkNodes.videoWrap) {
            this.videoObserver.start()
        }

        if (gkNodes.menuMain) {
            this.menuObserver.start()
        }
    }

    windowHide(e) {
        if (toolsNodes.app.style.width === '20px') {
            e.target.textContent = '隐藏'
            toolsNodes.app.style.width = '230px'
            toolsNodes.app.style.overflow = 'hidden auto'
        } else {
            e.target.textContent = '显示'
            toolsNodes.app.style.width = '20px'
            toolsNodes.app.style.overflow = 'hidden'
        }
    }

    popState() {
        log.add(0, '【页面】已切换')

        if (this.appStatus.backgroundWatch) {
            this.backgroundWatch.stop()
        }
    }
}

new GKTools()