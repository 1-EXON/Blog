const IndexPage = () => (
    <div>
        <div className="menu">
            <img id="logo" src="./images/logo2.png" height="60em" />
            <a>소개</a>
            <a>프로젝트</a>
            <a>연락</a>
            <button id="changetheme" className="theme" ></button>
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

export default IndexPage
