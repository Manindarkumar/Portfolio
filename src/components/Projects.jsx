import Pro1 from "/project1.png";
import pro2 from "/Project02.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: Pro1,
      link: "https://github.com/Manindarkumar/Notes-website",
      name: "College Notes-website",
      description:
        "This is a college notes sharing website using HTML, CSS, PHP, MySQL.",
    },
    {
      id: 2,
      logo: pro2,
      link: "https://github.com/Manindarkumar/Social-media-using-html-css-js",
      name: "Social media clone",
      description:
        "This is a front-end design of a social media app. using HTML, CSS, and JS.",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="flex justify-center my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardItem.map(({ id, logo, name, description, link }) => (
              <div
                className="w-[300px] border-2 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[300px] h-[120px] p-1 border-2"
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">{description}</p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-around">
                  <a
                    href={link}
                    target="_blank"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-1 rounded"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
