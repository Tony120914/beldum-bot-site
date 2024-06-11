
export default function Footer({ }) {
    return (
        <footer>
            <div className="d-grid justify-content-end p-5">
                <ScrollToTopButton />
            </div>
        </footer>
    );
}

function ScrollToTop({}) {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function ScrollToTopButton({}) {
    return (
        <div type='button' className="btn-sm nostyle" onClick={ScrollToTop}>
            <i className="bi bi-arrow-up-circle fs-1 text-warning"></i>
        </div>
    );
}
