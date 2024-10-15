import log from '../log.js'

export const allowPaste = () => {
    try {
        $('.simditor-body').unbind('paste')

        log.add(1, '已解除粘贴限制，离开页面后失效')
    } catch (error) {
        log.add(3, `解除粘贴限制失败. (${error})`)
    }
}
