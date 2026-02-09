import { navIcons, navLinks } from "../constants"
import dayjs from "dayjs"
import { useWindowStore } from "../store/store";
import CloseAllButton from "./CloseAllButton";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="text-sm font-semibold">Aaron's Portfolio</p>
        <ul>
          {
            navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => openWindow(type)}>
                <p>{name}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <CloseAllButton />
      <div>
        <ul>
          {
            navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} />
              </li>
            ))
          }
          <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
