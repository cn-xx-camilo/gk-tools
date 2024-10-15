
export const gkNodes = {
    get videoWrap () {
        return document.getElementsByClassName('activity-content-box')[0]
    },
    get video () {
        return document.getElementsByClassName('vjs-tech')[0]
    },
    get videoPlayButton () {
        return document.getElementsByClassName('mvp-toggle-play mvp-first-btn-margin')[0]
    },
    get menuMain () {
        return document.getElementsByClassName('full-screen-mode-sidebar-menu')[0]
    },
    get menuItemNext () {
        return document.getElementsByClassName('full-screen-mode-sidebar-menu-item active')[0]?.nextElementSibling
    },
    get menuItemNextIcon () {
        return document.getElementsByClassName('full-screen-mode-sidebar-menu-item active')[0]?.nextElementSibling?.getElementsByClassName('full-screen-mode-sidebar-menu-item-title')[0]?.getElementsByClassName('font-syllabus-online-video')[0]
    },
    get primaryMenuNext () {
        return Array.from(document.getElementsByClassName('full-screen-mode-sidebar-sub-menu-inner')).pop()?.parentElement?.parentElement?.parentElement?.nextElementSibling?.getElementsByClassName('full-screen-mode-sidebar-sub-menu-title')[0]
    },
    get secondMenuFirst () {
        return Array.from(document.getElementsByClassName('full-screen-mode-sidebar-sub-menu-inner')).pop()?.getElementsByClassName('full-screen-mode-sidebar-sub-menu-title')[0]
    },
    get secondMenuNext () {
        return Array.from(document.getElementsByClassName('full-screen-mode-sidebar-sub-menu-inner')).pop()?.parentElement?.nextElementSibling?.getElementsByClassName('full-screen-mode-sidebar-sub-menu-title')[0]
    },
    get subMenuFirst () {
        return Array.from(document.getElementsByClassName('full-screen-mode-sidebar-sub-menu-inner')).pop()?.getElementsByClassName('full-screen-mode-sidebar-menu-item')[0]
    }
}