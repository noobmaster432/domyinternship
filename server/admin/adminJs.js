import AdminJS from "adminjs";
// import app from "../index.js";
import AdminJSExpress from "@adminjs/express";
import AdminJSMongoose from "@adminjs/mongoose";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import session from 'express-session';
// import Connect from 'connect-mongo';
import dotenv from "dotenv";
dotenv.config();
import MongoStore from "connect-mongo";
import Job from "../models/jobsModel.js";
import Company from "../models/companyModel.js";
import Blog from "../models/blogModels.js";
import Story from "../models/story.Model.js";

// const authenticate = async (email, password) => {
//   const user = await UserModel.findOne({ email });
//   if (user && (await bcrypt.compare(password, user.password)) && user.isAdmin) {
//     return Promise.resolve(user);
//   }
//   console.log(user);
//   return Promise.reject(user).catch((err) => {
//     console.log(err);
//   });
// };

AdminJS.registerAdapter(AdminJSMongoose);

const admin = new AdminJS({
  databases: [mongoose],
  resources: [
    {
      resource: Job,
      options: {
        parent: {
          // name:'Drivers'
        },
      },
    },
    {
      resource: Company,
      options: {
        parent: {
          // name:'Drivers'
        },
      },
    },
    {
      resource: Blog,
      options: {
        parent: {
          // name:'Drivers'
        },
      },
    },
    {
      resource: Story,
      options: {
        parent: {
          // name:'Drivers'
        },
      },
    },
  ],
  branding: {
    companyName: "Internship Gate",
    logo: false,
  },
  rootPath: "/admin",
});

// const ConnectSession = new Connect(session)
const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_URI,
  ttl: 14 * 24 * 60 * 60,
});

const adminRouter = AdminJSExpress.buildRouter(
  admin,
  // app,
  // {
  //   // authenticate,
  //   cookieName: "adminjs",
  //   cookiePassword: "sessionsecret",
  // },
  null,
  {
    store: sessionStore,
    resave: true,
    httpOnly: false,
    saveUninitialized: true,
    secret: "sessionsecret",
    // cookie: {
    //   httpOnly: process.env.NODE_ENV === "production",
    //   secure: process.env.NODE_ENV === "production",
    // },
  }
  // app

  // preDefinedRouter
);

export { admin };
export { adminRouter };
