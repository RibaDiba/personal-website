import Name from "./components/Name";
import Info from "./components/Info";

const Home = () => {
    return (
        <>
            <div className="h-dvh">
                <Name />
            </div>

            <div className="h-dvh">
                <Info />
            </div>
        </>
    );
};

export default Home;
