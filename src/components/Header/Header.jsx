import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center mt-4">
            <h1 className="text-3xl font-bold text-black">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;