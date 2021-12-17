import mongoose, {Document, Model, Schema} from 'mongoose'

export class ProdutoAttributes {
    id?:string;
    preco: number;
    nome: string;
    descricao: string;
    created_at:Date;
    updated_at?:Date;
}

export type ProdutoDocument = Document & ProdutoAttributes;
type ProdutoModel = Model<ProdutoDocument>;

const ProdutoSchema = new Schema({
    preco:{
        type: Number,
        required: true
    },
    nome:{
        type: String, 
        required:true
    },
    descricao:{
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


 