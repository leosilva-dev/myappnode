import mongoose, {Document, Model, Schema} from 'mongoose'

export type ProdutoAttributes = {
    price: number;
    name: string;
    description: string;
    created_at:Date;
    updated_at?:Date;
}

export type ProdutoDocument = Document & ProdutoAttributes;
type ProdutoModel = Model<ProdutoDocument>;

const ProdutoSchema = new Schema({
    price:{
        type: Number,
        required: true
    },
    name:{
        type: String, 
        required:true
    },
    description:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
        required:false
    },
})

export default mongoose.model<ProdutoDocument, ProdutoModel>('Produto', ProdutoSchema)


 