const footerText = {
    element: "p",
    textContent: "Made By S.M. Raza Hassan Bilgami",
};
const GithubIcon = {
    element: "img",
    className: ["GithubIcon"],
};
const GithubLink = {
    element: "a",
    className: ["GithubLink"],
    attributes:{
        href:"https://www.github.com/bilgramiraza/todo",
        target: "_blank",
    },
    childNodes: [GithubIcon],
}
const footer = {
    element: "footer",
    childNodes: [footerText, GithubLink],
};

export default footer;