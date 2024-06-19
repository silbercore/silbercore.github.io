function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` } /*#__PURE__*/,
    React.createElement("div", { className: "overlay" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "menu-items" } /*#__PURE__*/,
      React.createElement(
        "ul",
        null /*#__PURE__*/,
        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "ГОЛОВНА"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "./gall/index.html", onClick: props.toggleMenu },
            "ГАЛЕРЕЯ"
          )
        ) /*#__PURE__*/,

        React.createElement(
          "li",
          null /*#__PURE__*/,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "КОНТАКТИ"
          )
        )
      ) /*#__PURE__*/,

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null /*#__PURE__*/,
    React.createElement(
      "nav",
      { id: "navbar" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "nav-wrapper" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "brand" },
          "НАТА" /*#__PURE__*/,

          React.createElement("strong", null, "ЛІЯ")
        ) /*#__PURE__*/,

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          } /*#__PURE__*/,

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return /*#__PURE__*/ React.createElement(
    "header",
    { id: "welcome-section" } /*#__PURE__*/,
    React.createElement("div", { className: "forest" }) /*#__PURE__*/,
    React.createElement("div", { className: "silhouette" }) /*#__PURE__*/,
    React.createElement("div", { className: "moon" }) /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "h1",
        null /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          "ДИТЯЧИЙ "
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          "ОЗДОРОВЧИЙ ТАБІР"
        ) /*#__PURE__*/,
        React.createElement(
          "span",
          { className: "line" },
          "ТАБІР"
        ) /*#__PURE__*/,
        React.createElement("span", { className: "color" }, " НАТАЛІЯ")
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "buttons" } /*#__PURE__*/,
        React.createElement(
          "a",
          { href: "./gall/index.html", className: "cta" },
          "Галерея"
        )
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "about" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement(
        "article",
        null /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement(
            "h3",
            null,
            "ГІРСЬКА РАХІВЩИНА ЗАПРОШУЄ ВАС НА ВІДПОЧИНОК В КАРПАТАХ,ГЕОГРАФІЧНОМУ ЦЕНТРІ ЄВРОПИ."
          ) /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc full" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "ДИТЯЧИЙ ОЗДОРОВЧИЙ ТАБІР „НАТАЛІЯ”"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Дитячий заклад відпочинку та оздоровлення є позаміським закладом оздоровлення та відпочинку стаціонарного типу,який розташований поза межами великого населеного пункту (за 6 км від м.Рахів), у гірському селі Білин, поряд з лісом."
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Відстань від найближчої залізничної станції до місця відпочинку становить 6 км."
          )
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "title" } /*#__PURE__*/,
          React.createElement("h3", null, "ДОЗВІЛЛЯ") /*#__PURE__*/,
          React.createElement("p", { className: "separator" })
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Розпорядок."
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Розпорядок дня складено таким чином, щоб найбільш гармонійно поєднувати розумові та фізичні види діяльності, не виснажуючи дітей, але тримаючи їх весь час в тонусі. З першого і до останнього дня в таборі кипить активність!"
          ) /*#__PURE__*/,

          React.createElement("p", null, "")
        ) /*#__PURE__*/,

        React.createElement(
          "div",
          { className: "desc" } /*#__PURE__*/,
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Дітей чекають:"
          ) /*#__PURE__*/,
          React.createElement(
            "p",
            null,
            "Туристично-екскурсійні та спортивно-оздоровчі заходи"
          ) /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Автобусна екскурсія до форелевого господарства (урочище «Ліщинка»)"
          )
        )
      )
    )
  );
};

/***********************
  Project Component
 ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "project" } /*#__PURE__*/,
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      } /*#__PURE__*/,
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ) /*#__PURE__*/,

    React.createElement(
      "div",
      { className: "project-details" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "project-tile" } /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t /*#__PURE__*/) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children /*#__PURE__*/,

      React.createElement(
        "a",
        { href: repo, target: "_blank", rel: "noopener noreferrer" },
        "" /*#__PURE__*/,

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "" /*#__PURE__*/
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "projects" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "projects-container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading" } /*#__PURE__*/,
        React.createElement(
          "h3",
          { className: "title" },
          "Про Табір"
        ) /*#__PURE__*/,
        React.createElement("p", { className: "separator" }) /*#__PURE__*/,
        React.createElement(
          "p",
          { className: "subtitle" },
          "Тут ми перераховуємо наші " /*#__PURE__*/,
          React.createElement("u", null, "ідеальні"),
          " умови праці дітей",
          " " /*#__PURE__*/,
          React.createElement(
            "a",
            {
              href: "https://www.freecodecamp.org/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "галерею"
          ),
          ", також можете подивитись так є щось цікаве"
        )
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "projects-wrapper" } /*#__PURE__*/,
        React.createElement(
          Project,
          {
            title: "Супровід",
            img: "./imagi/about1.jpg",
            tech: "",
          } /*#__PURE__*/,

          React.createElement("small", null, "") /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Дитячий заклад оздоровлення та відпочинку «Наталія» при необхідності, забезпечує супровід до місця відпочинку та оздоровлення та у зворотньому напрямку: група до 15 дітей забезпечується особою, яка їх супроводжує; на кожну групу від 30 до 45 дітей додатково призначається один медичний працівник."
          )
        ) /*#__PURE__*/,

        React.createElement(
          Project,
          {
            title: "Супровід",
            img: "./imagi/about1.jpg",
            tech: "",
          } /*#__PURE__*/,

          React.createElement("small", null, "") /*#__PURE__*/,

          React.createElement(
            "p",
            null,
            "Дитячий заклад оздоровлення та відпочинку «Наталія» при необхідності, забезпечує супровід до місця відпочинку та оздоровлення та у зворотньому напрямку: група до 15 дітей забезпечується особою, яка їх супроводжує; на кожну групу від 30 до 45 дітей додатково призначається один медичний працівник."
          )
        ) /*#__PURE__*/
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "contact" } /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "container" } /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "heading-wrapper" } /*#__PURE__*/,
        React.createElement(
          "div",
          { className: "heading" } /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "title" },
            "КОНТАКТИ" /*#__PURE__*/
          ),

          React.createElement("p", { className: "separator" }) /*#__PURE__*/,
          React.createElement(
            "p",
            { className: "subtitle" },
            "Працюємо Понеділок - П'ятниця: 08.00 - 18.00 ",
            "" /*#__PURE__*/,
            React.createElement(
              "span",
              { className: "" },
              "" /*#__PURE__*/,

              React.createElement("i", { className: "" }),
              "" /*#__PURE__*/,

              React.createElement("i", { className: "fas fa-circle dot" }),
              ""
            ),
            ""
          )
        ) /*#__PURE__*/,

        React.createElement(SocialLinks, null)
      ) /*#__PURE__*/,

      React.createElement(
        "div",
        { id: "contact-form" } /*#__PURE__*/,
        React.createElement(
          "p",
          null,
          "Адреса с.Білин, Рахівський р-н, Закарпатська обл., Україна"
        ) /*#__PURE__*/,
        React.createElement(
          "p",
          null,
          "Телефон (+38) 067 580 07 02"
        ) /*#__PURE__*/,
        React.createElement("p", null, "Email dot.nataly@gmail.com")
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return /*#__PURE__*/ React.createElement(
    "footer",
    null /*#__PURE__*/,
    React.createElement(
      "div",
      { className: "wrapper" } /*#__PURE__*/,
      React.createElement("h3", null, "THANKS FOR VISITING") /*#__PURE__*/,
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " НА ТА\xE9ЛІЯ."
      ) /*#__PURE__*/,
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "social" } /*#__PURE__*/,
    React.createElement(
      "a",
      {},

      " " /*#__PURE__*/,
      React.createElement("i")
    ) /*#__PURE__*/
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null /*#__PURE__*/,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }) /*#__PURE__*/,
      React.createElement(Header, null) /*#__PURE__*/,
      React.createElement(About, null) /*#__PURE__*/,
      React.createElement(Projects, null) /*#__PURE__*/,
      React.createElement(Contact, null) /*#__PURE__*/,
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("app")
);
