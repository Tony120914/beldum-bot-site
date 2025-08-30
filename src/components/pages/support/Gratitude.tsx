
export default function Gratitude({ image }: {image: string}) {
    return (
    <>
        <h1 className='display-5 text-warning mb-3'>Thank you for the support!</h1>
        <div className='d-flex justify-content-center'>
            <i className="bi bi-suit-heart-fill" style={{ 'fontSize':'30px', 'color':"pink" }}></i>
            <i className="bi bi-suit-heart-fill ms-1" style={{ 'fontSize':'15px', 'color':"pink" }}></i>
            <i className="bi bi-suit-heart-fill" style={{ 'fontSize':'50px', 'color':"pink" }}></i>
            <img src={image} className='img-fluid' width='auto'></img>
        </div>
    </>
    );
}
