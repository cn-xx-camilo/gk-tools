import log from '../log.js'
import { toolsNodes } from '../toolsWindow.js'

export const aiSearch = () => {
    try {
        const apiKey = toolsNodes.aiSearchKey.value
        const text = window.getSelection().toString()

        if (!apiKey) {
            alert('请填写API KEY')
            log.add(3, `请填写API KEY`)
            return
        }

        if (!text) {
            alert('请选中需解题文字')
            log.add(3, `内容为空`)
            return
        }
        
        toolsNodes.aiSearch.disabled = true
        toolsNodes.aiSearch.innerText = '思考中'

        requestAPI(apiKey, text)
    } catch (error) {
        log.add(3, `搜索失败. (${error})`)
    }
}

const requestAPI = (apiKey, content) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', apiKey)

    const payload = JSON.stringify({
        'model': 'glm-4-flash',
        'messages': [
            {
                'role': 'system',
                'content': '你只需要回答正确的答案'
            },
            {
                'role': 'user',
                'content': content
            }
        ]
    })

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
    }

    fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if (result?.error) {
                alert(result.error?.message || '请求错误')
            } else {
                alert(result.choices[0]?.message?.content)
            }

            toolsNodes.aiSearch.disabled = false
            toolsNodes.aiSearch.innerText = '解题'
        })
        .catch((error) => {
            console.log(error)

            alert('请求错误')
            toolsNodes.aiSearch.disabled = false
            toolsNodes.aiSearch.text = '解题'
        })
}