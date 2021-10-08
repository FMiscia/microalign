import React, { useEffect } from "react"
import Modal from "react-modal"

const customStyles = {
    content: {
        top: "55%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
    },
    overlay: {
        zIndex: 200,
    },
}

const BASE_URL = "https://www.microalign.nl/manage/admin"
const TOKEN = "9a304da6039e2f2ecce4f62060d9bd"

const Blog = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [news, setNews] = React.useState([])
    const [currentNews, setCurrentNews] = React.useState(null)

    useEffect(() => {
        fetch(`${BASE_URL}/api/collections/get/News?token=${TOKEN}`)
            .then((res) => res.json())
            .then((res) => setNews(res.entries.filter(it => it.published)))
            .catch((e) => console.log(e))
    }, [])

    function openModal(e) {
        e.preventDefault()
        setIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal(e) {
        e.preventDefault()
        setIsOpen(false)
    }

    return (
        <section id="news" className="info-blog-area ptb-100">
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc
            >
                <a
                    style={{ alignSelf: "flex-end" }}
                    href="/"
                    onClick={closeModal}
                >
                    CLOSE
                </a>
                <img
                    style={{ objectFit: "contain" }}
                    height={200}
                    src={`${BASE_URL}/storage/uploads${currentNews?.image.path}`}
                    alt="blog"
                />
                <h3>{currentNews?.title}</h3>
                <p>{currentNews?.content}</p>
                {!!currentNews?.link && (
                    <a href={currentNews.link} className="read-more-btn">
                        {currentNews.link}
                    </a>
                )}
            </Modal>
            <div className="container">
                <div className="section-title">
                    <span>News</span>
                    <h3>Recent MicroAlign Updates</h3>
                </div>
                <div className="row">
                    {news.length === 0 && <h3>No news yet!</h3>}
                    {news.map((it) => (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-info-blog-post">
                                <div className="blog-image">
                                    <a
                                        href="/"
                                        onClick={(args) => {
                                            openModal(args)
                                            setCurrentNews(it)
                                        }}
                                        className="read-more-btn"
                                    >
                                        <img
                                            height={200}
                                            src={`${BASE_URL}/storage/uploads${it.image.path}?token`}
                                            alt="blog"
                                        />
                                    </a>

                                    <div className="tags">
                                        {it.tags?.map((el) => (
                                            <a
                                                href="/"
                                                onClick={(args) => {
                                                    openModal(args)
                                                    setCurrentNews(it)
                                                }}
                                                className="read-more-btn mb-2"
                                            >
                                                {el}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="blog-content">
                                    <h3>
                                        <a
                                            href="/"
                                            onClick={(args) => {
                                                openModal(args)
                                                setCurrentNews(it)
                                            }}
                                            className="read-more-btn"
                                        >
                                            {it.title}
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            {new Date(it.date).toDateString()}
                                        </li>
                                        {!!it.content && (
                                            <li>
                                                <a
                                                    href="/"
                                                    onClick={(args) => {
                                                        openModal(args)
                                                        setCurrentNews(it)
                                                    }}
                                                    className="read-more-btn"
                                                >
                                                    Read More
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
