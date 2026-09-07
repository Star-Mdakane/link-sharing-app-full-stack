import { FaFacebook, FaFreeCodeCamp, FaGithub, FaGitlab, FaLinkedin, FaStackOverflow, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaDev, FaHashnode } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { SiCodewars, SiFrontendmentor } from "react-icons/si";

export const PLATFORMS = [
    {
        name: "Github",
        value: "github",
        icon: FaGithub,
        color: "#1A1A1A"
    },
    {
        name: "Frontend Mentor",
        value: "frontendmentor",
        icon: SiFrontendmentor,
        color: "#fff"
    },
    {
        name: "Twitter",
        value: "twitter",
        icon: FaTwitter,
        color: "#43B7E9"
    },
    {
        name: "LinkedIn",
        value: "linkedin",
        icon: FaLinkedin,
        color: "#2D68FF"
    },
    {
        name: "YouTube",
        value: "youtube",
        icon: FaYoutube,
        color: "#EE3939"
    },
    {
        name: "Facebook",
        value: "facebook",
        icon: FaFacebook,
        color: "#2442AC"
    },
    {
        name: "Twitch",
        value: "twitch",
        icon: FaTwitch,
        color: "#EE3FC8"
    },
    {
        name: "Dev.to",
        value: "devto",
        icon: FaDev,
        color: "#333333"
    },
    {
        name: "Codewars",
        value: "codewars",
        icon: SiCodewars,
        color: "#8A1A50"
    },
    {
        name: "FreeCodeCamp",
        value: "freecodecamp",
        icon: FaFreeCodeCamp,
        color: "#302267"
    },
    {
        name: "GitLab",
        value: "gitlab",
        icon: FaGitlab,
        color: "#EB4925"
    },
    {
        name: "Hashnode",
        value: "hashnode",
        icon: FaHashnode,
        color: "#0330D1"
    },
    {
        name: "Stack Overflow",
        value: "stackoverflow",
        icon: FaStackOverflow,
        color: "#EC7100"
    },
    {
        name: "Other",
        value: "other",
        icon: FiLink,
        color: "#444444"
    },

]