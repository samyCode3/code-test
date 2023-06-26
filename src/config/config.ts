/* eslint-disable prettier/prettier */
import {config}  from 'dotenv'
config()
export class Config {
    public PORT
    constructor() {
    this.PORT = process.env.PORT;
    }
}