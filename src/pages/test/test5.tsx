// 3. 实现一个计时器组件
//   - 页面展示从开始计时到当下多少秒。从零开始计时，每秒更新一次 0, 1, 2, 3, 4, ……
//   - 添加三个 button 控制计时器的启动，暂停和清空
//   - 添加第四个 button 进行存储，每次点击存储当前计数，最多存储并展示最近的五条记录

import { useState } from "react";
// import { setInterval } from "timers/promises";

const Timer = () => {
    const [num,setNum] = useState(0)
    function timerFn () {
        const now = new Date().getTime()
        console.log('now',now)
        let t=null;
        setInterval(() => {
            
        },1000)
    }
    

    function start() {
        timerFn ()
    }
    
    return (
    <div>
        <div>{num}</div>
        <button onClick={start}>start</button>
        <button>stop</button>
        <button>clear</button>
    </div>)
}

export default Timer