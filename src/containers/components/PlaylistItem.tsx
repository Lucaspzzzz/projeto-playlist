import {liked, noliked} from "../../assets/images/Buttons"
import {useState} from "react";

type TrackProps = {
    title: string;
    like: boolean;
    albumName: string;
    cover: string;
}


const PlaylistItem = ({title, like, albumName, cover}: TrackProps) => {
    const [isLiked, setIsLiked] = useState(like)

    const handleLiked = () => {
        setIsLiked(!isLiked)
    }
    return (
        <div className="music-container">
            <div className="music-content">
                <img
                    src={cover}
                    alt={title}
                    className="music-cover"
                />
                <div className="music-name">
                    <h4>{title}</h4>&nbsp;-&nbsp;<h6>{albumName}</h6>
                </div>
                <div className= "control-info">
                    <button onClick={ () =>handleLiked()} className="button-like">
                        <img
                            src={isLiked ? liked : noliked}
                            alt="Like/Deslike"
                            className="like"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem;