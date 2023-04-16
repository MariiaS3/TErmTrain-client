import TermLine from "./TermLine";
import { useState } from "react";

import history from "./commands/history"
import pwd from "./commands/pwd"
import cd from "./commands/cd"
import ls from "./commands/ls"
import touch from "./commands/touch"
import cp from "./commands/cp"
import mkdir from "./commands/mkdir"
import rmdir from "./commands/rmdir"
import rm from "./commands/rm"
import mv from "./commands/mv"
import cat from "./commands/cat"
import tail from "./commands/tail";
import head from "./commands/head";
import echo from "./commands/echo";
import wc from "./commands/wc";
import nano from "./commands/nano";
import date from "./commands/date";
import whoami from "./commands/whoami";

const Commands = (props) => {
    const [title, setTitle] = useState("");

    const titleChange = (title) => {
        setTitle(title);
    };

    const listenCmd = (inputCmd, root) => {

        var d = props.prompt + root + " " + inputCmd;
        // this.props.addToHistoryLineProps(d)

        if (inputCmd.split(/\s+/)[0] === "ls") {
            props.addToHistoryLineProps(ls(props.prompt, inputCmd, props.path))
        }
        else if (inputCmd.split(/\s+/)[0] === "history") {
            props.addToHistoryLineProps(history(props.prompt, inputCmd, props.history))
        } else if (inputCmd.split(/\s+/)[0] === "pwd") {
            props.addToHistoryLineProps(pwd(props.prompt, root, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "cd") {
            let res = cd(props.prompt, inputCmd, props.prevPath, props.path)
            props.changePathProp(res[0])
            props.addToHistoryLineProps(res[1])
        } else if (inputCmd.split(/\s+/)[0] === "touch") {
            props.addToHistoryLineProps(touch(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "mkdir") {
            props.addToHistoryLineProps(mkdir(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "rmdir") {
            props.addToHistoryLineProps(rmdir(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "mv") {
            props.addToHistoryLineProps(mv(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "rm") {
            props.addToHistoryLineProps(rm(props.prompt, inputCmd, props.path, 0))
        } else if (inputCmd.split(/\s+/)[0] === "cp") {
            props.addToHistoryLineProps(cp(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "cat") {
            props.addToHistoryLineProps(cat(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "clear") {
            props.delCommandProps()
        } else if (inputCmd.split(/\s+/)[0] === "tail") {
            props.addToHistoryLineProps(tail(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "head") {
            props.addToHistoryLineProps(head(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "echo") {
            props.addToHistoryLineProps(echo(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "wc") {
            props.addToHistoryLineProps(wc(props.prompt, inputCmd, props.path))
        } else if (inputCmd.split(/\s+/)[0] === "date") {
            props.addToHistoryLineProps(date(props.prompt, inputCmd))
        } else if (inputCmd.split(/\s+/)[0] === "nano") {
            props.addToHistoryLineProps(nano(props.prompt, inputCmd, props.path))
            if (!inputCmd.includes("--help")) {
                props.addTitlePops(inputCmd.split(/\s+/)[inputCmd.split(/\s+/).length - 1])
                props.showModalProps()
            }
        } else if (inputCmd.split(/\s+/)[0] === "man") {
            props.addManCommandProp(inputCmd.split(/\s+/)[inputCmd.split(/\s+/).length - 1])
            props.showManProps()
        } else if (inputCmd.split(/\s+/)[0] === "whoami") {
            props.addToHistoryLineProps(whoami(props.prompt, inputCmd))
        }
        else {
            d = props.prompt + root + " " + inputCmd + "\n";
            d += inputCmd + ": nie znaleziono polecenia"
            props.addToHistoryLineProps(d)
        }
    }

    return (
        <TermLine addToHistoryLineProps={props.addToHistoryLineProps} prompt={props.prompt} listenCmd={listenCmd} />
    );
}

export default Commands;