import css from "./Profile.module.css";
import PropTypes from 'prop-types';

function firstLetterToUpperCase(word) {
    if (word.length >= 1) {
        if (word.length > 1) {
            return word[0].toUpperCase() + word.slice(1);
        } else {
            return word[0].toUpperCase();
        }
        
    }
    
    return word;
}

const Profile = ({ name, tag, location, image, stats }) => {
    const list = [];
    for (let key in stats) {
        list.push(<li className={css.statElement} key={key}>
            <span className={css.bold}>{firstLetterToUpperCase(key)}</span>
                <span>{stats[key]}</span>
            </li>);
    }


    return <div className={css.profile}>
        <div className={css.profileBlock}>
            <img
                className={css.profileIcon}
                src={image}
                alt={name}
            />
            <p className={css.boldName}>{name}</p>
            <div className={css.userDetails}>
                <p>{tag}</p>
                <p>{location}</p>
            </div>
        </div>
        <ul className={css.stat}>
            {list}
        </ul>
    </div>;
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
};

export default Profile;