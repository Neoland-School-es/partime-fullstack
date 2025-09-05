import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: { type: String, trim: true, require: true },
        email: { type: String, trim: true, require: true },
        password: { type: String, trim: true, require: true }
    }
)

const userModel = mongoose.model('user', userSchema)

export { userModel }