const initialState = [{name:'baidu',url:"http://www.baidu.com"},{name:'163',url:"http://www.163.com"},{name:'qq',url:"http://www.qq.com"},{name:'baidu',url:"http://www.baidu.com"},{name:'163',url:"http://www.163.com"},{name:'qq',url:"http://www.qq.com"}]

export default function (state = initialState, action) {
    switch (action.type) {
        case 'add':
            if(!action.payload.url.startsWith("http://") && !action.payload.url.startsWith("https://")){
                action.payload.url = 'http://'+ action.payload.url
            }
            if(state.length === 7){
                state.pop()
            }
            return state.concat(action.payload)
        default:
            return state
    }
}