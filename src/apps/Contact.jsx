import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";
import { socials } from "../constants";

const ContactComponent = () => {
  return (
    <>
      {/* Header */}
      <div className="relative flex h-9 items-center border-b border-gray-300 bg-gray-200 px-4 select-none">
        <WindowControls target="contact" />
        <div className="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-gray-600">
          Contact
        </div>
      </div>

      {/* Body */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-center text-sm font-medium text-gray-500 mb-1">
          Let’s Connect
        </h2>
        <h3 className="text-center text-xl font-semibold mb-6">
          Find me on the internet
        </h3>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          {socials.map(({ id, text, icon, bg, link }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="
                rounded-xl p-4
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 h-12"
              >
                <div className="bg-white/20 p-2 rounded-lg my-auto flex items-center justify-center">
                  <img src={icon} alt={text} className="w-6 h-6" />
                </div>

                <p className="text-white font-semibold text-sm my-auto leading-none">
                  {text}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Contact = WindowWrapper(ContactComponent, "contact");
export default Contact;
