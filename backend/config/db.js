import mongoose from "mongoose";

const connectDb = async () => {

    try{
       const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

       console.log('WE ARE CONNECTED')

    }catch(error) {
         
        console.log('WE ARE NOT CONNECTED ' + error)

        process.exit(1)

    }

}

export default connectDb