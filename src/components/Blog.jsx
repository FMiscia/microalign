import React from "react"
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

const Blog = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)

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
        <section id="news" className="repair-blog-area ptb-100">
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnEsc
            >
                <a style={{alignSelf: 'flex-end'}}href="/" onClick={closeModal}>
                    CLOSE
                </a>
                <img
                    style={{ objectFit: "contain" }}
                    height={200}
                    src={require("../assets/img/fiber-2.jpg")}
                    alt="blog"
                />
                <h3>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet,
                </h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    scelerisque pellentesque ex, vitae porta nisi elementum non.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Donec magna eros, scelerisque ac cursus eu,
                    pulvinar sed tellus. Praesent euismod tincidunt odio nec
                    iaculis. Suspendisse eget elit vitae augue elementum
                    molestie. Aliquam aliquam lacus nec purus ultricies, nec
                    feugiat velit placerat. Morbi venenatis odio vel tempus
                    posuere. Sed quis lacus tortor. Phasellus at mattis erat.
                    Aliquam erat volutpat. Nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Proin non massa felis.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Etiam sed ante eget nisl ullamcorper porttitor.
                    Nullam ornare porttitor nisi, ut laoreet purus consequat id.
                    Fusce id risus ut eros dictum congue quis sit amet sapien.
                    Sed eleifend feugiat augue, eu faucibus metus facilisis sit
                    amet. Vivamus rutrum, nisi eu auctor tincidunt, massa neque
                    venenatis neque, vel iaculis nulla libero vitae dolor.
                </p>
            </Modal>
            <div className="container">
                <div className="section-title">
                    <span>News</span>
                    <h3>Recent MicroAlign Updates</h3>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-blog-post">
                            <div className="blog-image">
                                <a
                                    href="/"
                                    onClick={openModal}
                                    className="read-more-btn"
                                >
                                    <img
                                        height={200}
                                        src={require("../assets/img/fiber-2.jpg")}
                                        alt="blog"
                                    />
                                </a>

                                <div className="tags">
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Technology
                                    </a>
                                </div>
                            </div>

                            <div className="blog-content">
                                <h3>
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Neque porro quisquam est qui dolorem
                                        ipsum quia dolor sit amet,
                                    </a>
                                </h3>

                                <ul>
                                    <li>July 10, 2021</li>
                                    <li>
                                        <a
                                            href="/"
                                            onClick={openModal}
                                            className="read-more-btn"
                                        >
                                            Read More
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-repair-blog-post">
                            <div className="blog-image">
                                <a
                                    href="/"
                                    onClick={openModal}
                                    className="read-more-btn"
                                >
                                    <img
                                        height={200}
                                        src={require("../assets/img/fiber-2.jpg")}
                                        alt="blog"
                                    />
                                </a>

                                <div className="tags">
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Technology
                                    </a>
                                </div>
                            </div>

                            <div className="blog-content">
                                <h3>
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Neque porro quisquam est qui dolorem
                                        ipsum quia dolor sit amet,
                                    </a>
                                </h3>

                                <ul>
                                    <li>July 10, 2021</li>
                                    <li>
                                        <a
                                            href="/"
                                            onClick={openModal}
                                            className="read-more-btn"
                                        >
                                            Read More
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-repair-blog-post">
                            <div className="blog-image">
                                <a
                                    href="/"
                                    onClick={openModal}
                                    className="read-more-btn"
                                >
                                    <img
                                        height={200}
                                        src={require("../assets/img/fiber-3.jpg")}
                                        alt="blog"
                                    />
                                </a>

                                <div className="tags">
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Technology
                                    </a>
                                </div>
                            </div>

                            <div className="blog-content">
                                <h3>
                                    <a
                                        href="/"
                                        onClick={openModal}
                                        className="read-more-btn"
                                    >
                                        Neque porro quisquam est qui dolorem
                                        ipsum quia dolor sit amet,
                                    </a>
                                </h3>

                                <ul>
                                    <li>July 10, 2021</li>
                                    <li>
                                        <a
                                            href="/"
                                            onClick={openModal}
                                            className="read-more-btn"
                                        >
                                            Read More
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
