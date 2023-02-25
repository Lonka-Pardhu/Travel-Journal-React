import globe from '../images/globe.png'
export default function Title() {
    return (
        <div className="title-bar">
            <img src={globe} alt="globe-ong" className='globe-icon' />
            <p className='title-name'>My Travel Journal.</p>
        </div>
    )
}