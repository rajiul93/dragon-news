import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-100 p-2 mt-4">
                <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover="false">
                <p className="cursor-pointer">
                    Lorem, ipsum dolor sit amet consectetur<a className="text-blue-600">adipisicing elit</a> . Labore, modi doloremque! Rem tempore obcaecati blanditiis laudantium provident similique perspiciatis repellendus cupiditate cum, ab aliquid earum delectus debitis. Cupiditate, ratione enim?
                </p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;