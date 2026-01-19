import { navIcons, navLinks } from "../constants"
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="apple-logo" />
        <p className="text-sm font-semibold">Aaron's Portfolio</p>
        <ul>
          {
            navLinks.map(({ id, name, type }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} />
              </li>
            ))
          }
          <li className="text-sm">{dayjs().format("ddd MMM D h:mm A")}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
