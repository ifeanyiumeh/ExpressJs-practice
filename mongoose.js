/**  */
const User = require("./db/User");
const bycrypt = require("bycrypt");

const { firstname, lastname, email, password } = req.body;
try {
  if (!firstname || !lastname || !email || !password) {
    throw new Error("Invalid input");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ data: "User successfully created", error: undefined });
} catch (err) {
  res.status(500).json({ data: undefined, error: err.message });
}

/**  */
//in terminal npm i mongoosoe      -> to add dependency

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 9090;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopoloogy: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

connectDB();

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("error occurred");
});

db.once("open", () => {
  console.log("Database has been sucessfully connected to");
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});


/** 
 * 
 * Create a database table “users” on the MongoDB database through the mongoose library manually using Models. Columns: first name, last name, email, password, role, created at, and modified at.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};

const UserSchema = new Schema ({
  firstname: reqString,
  lastname: reqString,
  email: {
    ...reqString,
    lowercase: true,
  },
  password:{
    minlength: 12,
    ...reqString
  },
  role: {
    required: true,
    type: String,
    enum: ['admin', 'regular'],
    default: ['regular']
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  ),
});

const User = mongoose.model('User', UserSchema);


async function getList( ){
  return await functionList( );


try {
await (list) => functionDetails;
} catch (err) {
console.error(err)
}
}


async function getList(){
  try {
    const list = await functionList();
    return functionDetails();
  }catch(err){
    console.log(err);
  }
}




