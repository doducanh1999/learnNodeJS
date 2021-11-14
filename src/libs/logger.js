import { Console } from 'console';
import moment from 'moment-timezone';
import path from 'path';
import chalk from 'chalk'

class Logger extends Console {
    static DEFAULT_SCOPE = 'App'
    #scope;

    constructor({ file, formatTz }) {
        super({ stdout: process.stdout, stderr: process.stderr });

        this.#scope = Logger.parsePathToScope(file || Logger.DEFAULT_SCOPE)
        this.formatTz = formatTz || 'MMM DD, yyy - HH:mm:ss';
        this.minWidth = 500;
    }

    static parsePathToScope(filepath){
        const pathSep = path.sep;
        const existPathSep = filepath.indexOf(pathSep) !== 1;
        const newFilepath = existPathSep 
        ? filepath
            .replace(process.cwd(), '')//cắt thư mục chính
            .replace(`${pathSep}src${pathSep}`, '')// cắt đầu SRC
            .replace(`.js`|`ts`, '') // cắt đuôi JS,TS
            .replace()
        : filepath;
        return newFilepath;
    }

    info = (msg) => this._formatMsg(msg, 'cyan');

    success = (msg) => this._formatMsg(msg, 'green');

    error = (msg) => this._formatMsg(msg, 'red');

    warn = (msg) => this._formatMsg(msg, 'yellow');

    _formatScope() {
        const scope = chalk.green(`[${this.#scope}]`);
        const tz = chalk.cyan (`[${this.getTimestamp()}]`);
        return `${scope}${tz}`;
    };

    _formatMsg = (msg, color = 'grey') => {
        const fmsg = `${this._formatScope()} - ${chalk[color](msg)}`;
        super.log(fmsg);
    }


    getTimestamp =() => moment().format(this.formatTz);
}

export default Logger;

//stdout la print ra ngoai, stderr la bao loi

// static là cho phép truy cập vào mà không cần phải tạo biến

// replace là cắt các thư mục đầu