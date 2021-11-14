import { config } from "dotenv";

const path = `.env.${process.env.NODE_ENV}`;

config({path});