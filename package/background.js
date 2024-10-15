chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'startTools',
        title: '启动国开小助手',
        contexts: ['all'],
        documentUrlPatterns: ['https://lms.ouchn.cn/*']
    })
})


chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'startTools') {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: insertScript
        })
    }
})

function insertScript () {
    if (document.getElementById('GKTools')) {
        return alert('国开小助手正在运行中');
    }
    
    const script = document.createElement('script')

    script.type = 'module'
    script.src = chrome.runtime.getURL('main.js')
    
    document.head.appendChild(script)
}