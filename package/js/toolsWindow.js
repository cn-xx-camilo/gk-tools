export const toolsWindow = `
<div style="position: fixed; right: 0; bottom: 0; box-shadow: 0px 0px 5px 0px #aaaaaa; background-color: #ffffff; width: 230px; height: 300px; overflow: hidden auto; box-sizing: border-box; z-index: 9999; transition: 0.1s;"
    id="GKTools">
    <div style="position: relative; display: flex;">
        <div
            style="position: fixed; margin: auto; height: 300px; width: 20px; display: flex; align-items: center; justify-content: center; background-color: #f2e9ff;">
            <span class="gktools-hide"
                style="font-size: 12px; writing-mode: vertical-lr; cursor: pointer; letter-spacing: 2px;">隐藏</span>
        </div>

        <div style="width: 200px; margin-left: 20px; padding: 5px; flex-shrink: 0;">
            <div style="display: flex; align-items: center;justify-content: space-between;">
                <b>国开小助手</b>
                <span style="cursor: pointer;" class="gktools-close">x </span>
            </div>

            <div style="font-size: 14px;">
                <div style="display: flex; align-items: center; gap: 5px; margin: 5px;">
                    <div class="gktools-background-watch-status"
                        style="width: 6px; height: 6px; background-color: #ff0000; border-radius: 100%;"></div>
                    <span>视频后台观看</span>
                    <button style="font-size: 12px; margin-left: auto;" class="gktools-background-watch">开启</button>
                </div>

                <div style="display: flex; align-items: center; gap: 5px; margin: 5px;">
                    <div class="gktools-auto-switch-status"
                        style="width: 6px; height: 6px; background-color: #ff0000; border-radius: 100%;"></div>
                    <span>结束自动切换</span>
                    <button style="font-size: 12px; margin-left: auto;" class="gktools-auto-switch">开启</button>
                </div>

                <div style="display: flex; align-items: center; gap: 5px; margin: 5px; flex-wrap: wrap;">
                    <div class="gktools-auto-switch-menu-status"
                        style="width: 6px; height: 6px; background-color: #ff0000; border-radius: 100%;"></div>
                    <span>目录自动切换</span>
                    <button style="font-size: 12px; margin-left: auto;" class="gktools-auto-switch-menu">开启</button>
                    <div style="width: 100%; font-size: 12px; color: #aaaaaa;">
                        <span>将同时开启结束自动切换，请勿手动点击目录结构，否则切回可能会受到影响</span></div>
                </div>

                <div style="display: flex; align-items: center; gap: 5px; margin: 5px; flex-wrap: wrap;">
                    <span>倍速</span>
                    <input type="number" max="16" min="1" value="1"
                        style="margin-left: auto; width: 50px; height: 20px; margin: 0 0 0 auto;"
                        class="gktools-video-rate-number" />
                    <button style="font-size: 12px;" class="gktools-video-rate">修改</button>
                    <div style="width: 100%; font-size: 12px; color: #aaaaaa;"><span>输入后点击修改，范围1-16倍</span></div>
                </div>

                <div style="display: flex; align-items: center; gap: 5px; margin: 5px; flex-wrap: wrap;">
                    <span>音量</span>
                    <input type="number" max="100" min="0" value="100"
                        style="margin-left: auto; width: 60px; height: 20px; margin: 0 0 0 auto;"
                        class="gktools-video-volume-number" />
                    <button style="font-size: 12px;" class="gktools-video-volume">修改</button>
                    <div style="width: 100%; font-size: 12px; color: #aaaaaa;"><span>输入后点击修改，范围0-100</span></div>
                </div>

                <div style="display: flex; align-items: center; gap: 5px; margin: 5px;">
                    <span>解除粘贴限制</span>
                    <button style="font-size: 12px; margin-left: auto;" class="gktools-allow-paste">解除</button>
                </div>
            </div>

            <div style="font-size: 14px;">
                <b style="margin: 0;">Log</b>
                <div class="gktools-log"
                    style="width: 100%; height: 155px; overflow: auto; box-sizing: border-box; border: 1px solid #aaaaaa; font-size: 12px;">
                </div>
            </div>

            <div style="font-size: 14px; display: none;">
                <p style="margin: 0;">Log</p>
                <textarea class="gktools-log-textarea"
                    style="width: 100%; height: 80px; box-sizing: border-box; resize: none;" readonly></textarea>
            </div>
        </div>
    </div>
</div>
`

export const toolsNodes = {
    get app () {
        return document.getElementById('GKTools')
    },
    get hide () {
        return document.getElementsByClassName('gktools-hide')[0]
    },
    get close () {
        return document.getElementsByClassName('gktools-close')[0]
    },
    get log () {
        return document.getElementsByClassName('gktools-log')[0]
    },
    get backgroundWatch () {
        return document.getElementsByClassName('gktools-background-watch')[0]
    },
    get backgroundWatchStatus () {
        return document.getElementsByClassName('gktools-background-watch-status')[0]
    },
    get autoSwitch () {
        return document.getElementsByClassName('gktools-auto-switch')[0]
    },
    get autoSwitchStatus () {
        return document.getElementsByClassName('gktools-auto-switch-status')[0]
    },
    get autoSwitchMenu () {
        return document.getElementsByClassName('gktools-auto-switch-menu')[0]
    },
    get autoSwitchMenuStatus () {
        return document.getElementsByClassName('gktools-auto-switch-menu-status')[0]
    },
    get allowPaste () {
        return document.getElementsByClassName('gktools-allow-paste')[0]
    },
    get videoRate () {
        return document.getElementsByClassName('gktools-video-rate')[0]
    },
    get videoRateNumber () {
        return document.getElementsByClassName('gktools-video-rate-number')[0]
    },
    get videoVolume () {
        return document.getElementsByClassName('gktools-video-volume')[0]
    },
    get videoVolumeNumber () {
        return document.getElementsByClassName('gktools-video-volume-number')[0]
    }
}