function IndexPage() {
    function changeTheme(): void {
        const logo = document?.getElementById('logo')
        const theme = document?.getElementById('changetheme')
    
        const html = document.documentElement
    
        if (html.classList.contains('dark')) {
            html.classList.remove('dark')
            logo.src = './images/logo2.png'
            theme.style.background = 'url(\"./images/dark.png\")'
            theme.style.backgroundSize = '30px 30px'
            localStorage.setItem('darkTheme', 'false')
        } else {
            html.classList.add('dark')
            logo.src = './images/logo1.png'
            theme.style.background = 'url(\"./images/light.png\")'
            theme.style.backgroundSize = '30px 30px'
            localStorage.setItem('darkTheme', 'true')
        }
    }

    return (
        <div>
            <div className="menu">
                <img id="logo" src="./images/logo2.png" height="60em" />
                <a>소개</a>
                <a>프로젝트</a>
                <a>연락</a>
                <button id="changetheme" className="theme" onClick={}></button>
            </div>

            <div className="side">
                <p className="group">소개</p>
                <p><a href="">머릿말</a></p>
                <p className="group">프로젝트</p>
                <p><a href="">프로젝트</a></p>
                <p><a href="">프로젝트 일지</a></p>
                <p className="group">연락</p>
                <p><a href="">연락처</a></p>
            </div>

            <div className="main">
                <p className="title">머릿말</p>
                <p className="content">내용</p>
                <div className="card">
                    <p className="card-title">제목</p>
                    <p className="card-content">내용</p>
                </div>
                <div className="card">
                    <p className="card-title">제목</p>
                    <p className="card-content">내용</p>
                </div>
                <div className="card">
                    <p className="card-title">제목</p>
                    <p className="card-content">내용</p>
                </div>
                <div className="card">
                    <p className="card-title">제목</p>
                    <p className="card-content">내용</p>
                </div>
                <div className="card">
                    <p className="card-title">제목</p>
                    <p className="card-content">내용</p>
                </div>
            </div>
            
            <footer>
            </footer>
        </div>
    )
}

export default IndexPage
