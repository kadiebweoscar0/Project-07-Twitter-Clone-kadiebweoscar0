
export function TitleProfile() {
    return (
        <div className="title-profile">
            <div className="icon">
                <img src="" alt="icone" />
            </div>
            <div>
                <h4>Hermacle Kihenyegho</h4>
                <p className="small-text">15 posts</p>
            </div>

        </div>
    )
}

export function ImageUser() {
    return (
        <div className="image-user">
            <img src="" alt="Cover Photo" className="cover-photo" />
            <div>
                <img src="" alt="Profile Picture" className="profile-picture" />
            </div>
        </div>
    )
}

export function AboutUser() {
    return (
        <div className="about-user">
            <button>Edit profile</button>
            <h3>Hermacle Kihenyegho</h3>
            <p className="small-text">@Hermacle_kih</p>
            <p className="profile-bio">Passionate web developer. Always seeking new opportunities for learning and professional growth. Founder of my own web development studio. Committed to creating innovative and user-friendly applications. <br /> <span className="small-text">#WebDevelopment #Coder #TechEnthusiast</span></p>
            <ul className="profile-stats">
                <li><span className="stat-count">98</span> Following</li>
                <li><span className="stat-count">42,000</span> Followers</li>
            </ul>
        </div>
    )
}

export function ProfileNavigation() {
    return (

        <nav className="navigation-profile">
            <p className="post">Post</p>
            <p>Replies</p>
            <p>Highlights</p>
            <p>Media</p>
            <p>Likes</p>
        </nav>


    )
}

export default function Profile() {
    return (
        <div>
            <TitleProfile />
            <ImageUser />
            <section className="container">
                <AboutUser />
            </section>
            <ProfileNavigation />

        </div>
    );
}