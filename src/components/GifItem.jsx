export const GifItem = ({ title, image, id}) => {
    return (
        <div className="card">
            <img src={ image } alt={ title } />
            <p className="title">{title}</p>
        </div>
    )
}