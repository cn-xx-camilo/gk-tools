import { gkNodes } from './gkNodes.js'

import log from './log.js'

export const useVideoObserver = instance => {
    return {
        config: {
            childList: true,
            subtree: true
        },
        observer: new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList && node.classList.contains('vjs-tech')) {
                        log.add(0, '【创建节点】视频播放器')
                    }

                    if (node.nodeType === 1 && node.classList && node.classList.contains('mvp-replay-player-all-controls')) {
                        log.add(0, '【创建节点】视频控制器')

                        instance.videoRate.change()
                        instance.videoVolume.change()

                        if (instance.appStatus.backgroundWatch) {
                            instance.backgroundWatch.start()
                        }

                        if (instance.appStatus.autoSwitch) {
                            instance.autoSwitch.start()
                        }
                    }
                })
            })
        }),
        start: function () {
            if (!instance.observerState.video) {
                try {
                    this.observer.observe(gkNodes.videoWrap, this.config)

                    log.add(1, '【视频节点监听】已启动')

                    instance.observerState.video = true
                } catch (error) {
                    log.add(2, '【视频节点监听】根节点暂未创建')
                }
            } else {
                log.add(2, '【视频节点监听】正在运行中')
            }
        }
    }
}

export const useMenuObserver = instance => {
    return {
        config: {
            childList: true,
            subtree: true
        },
        observer: new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList && node.classList.contains('full-screen-mode-sidebar-sub-menu-inner')) {
                        log.add(0, '【创建节点】目录结构')

                        if (instance.appStatus.autoSwitchMenu) {
                            if (node.getElementsByClassName('full-screen-mode-sidebar-sub-menu has-line').length) {
                                log.add(0, '【采集节点】一级目录')

                                setTimeout(() => {
                                    gkNodes.secondMenuFirst.click()
                                }, 1000)
                            }

                            if (node.getElementsByClassName('full-screen-mode-sidebar-menu-item').length) {
                                log.add(0, '【采集节点】二级目录')

                                const videoExist = Array.from(node.getElementsByClassName('full-screen-mode-sidebar-menu-item')).some(element => {
                                    if (element?.getElementsByClassName('font-syllabus-online-video')[0]) {
                                        log.add(0, '【章节节点】存在视频课')

                                        setTimeout(() => {
                                            element.click()
                                        }, 1000)
                                        return true
                                    }
                                })

                                if (!videoExist) {
                                    log.add(2, '【章节节点】未找到视频课，继续获取')

                                    setTimeout(() => {
                                        instance.autoSwitchMenu.change()
                                    }, 1000)
                                }
                            }
                        }
                    }
                })
            })
        }),
        start: function () {
            if (!instance.observerState.menu) {
                try {
                    this.observer.observe(gkNodes.menuMain, this.config)

                    log.add(1, '【目录节点监听】已启动')

                    instance.observerState.menu = true
                } catch (error) {
                    log.add(2, '【目录节点监听】根节点暂未创建')
                }
            } else {
                log.add(2, '【目录节点监听】正在运行中')
            }
        }
    }
}