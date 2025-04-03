const TestPage = () => {
    const search = (formData:any) => {
        const query = formData.get("query");
        console.log('输入的',query)
    }


    return <div className="test-page to-top">
        {/* 搜索框 */}
        <form action={search} className="mt-[20px]">
            <input name="query" />
            <button type="submit">Search</button>
        </form>

        <label className="mt-[20px]">
            选择一个水果：
            <select name="精选水果">
                <option value="苹果">苹果</option>
                <option value="香蕉">香蕉</option>
                <option value="橘子">橘子</option>
            </select>
        </label>

        {/* 进度条 */}
        <div className="mt-[20px]">
            <progress className="block" value={0} /> 
            <progress className="block" value={0.5} />
            <progress className="block" value={0.7} />
            <progress className="block" value={75} max={100} />
            <progress className="block" value={1} />
            <progress className="block" value={null} />
        </div>
    </div>
}

export default TestPage