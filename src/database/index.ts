import mongoose, {Mongoose} from 'mongoose';

export const connect = async (): Promise<Mongoose> => 
    await mongoose.connect('mongodb+srv://leonardo:myappnodecurso@cluster0.6jyhf.mongodb.net/myappnode?retryWrites=true&w=majority', { autoIndex:true, autoCreate:true});
