import { Document, model, Schema } from "mongoose";

interface ISkills extends Document {
    ref: string; // ref of the user
    skills: ASkills[]; // array of skills (see interface ASkills)
};

interface ASkills {
    name: string; // name of the skill
    percent: number; // percentage of the abilitie
    note: string; // optional note to skill
};

const skillsSchema = new Schema({
    ref: {
        type: String,
        required: true,
        unique: true
    },
    skills: {
        type: Array,
    }
});

export default model<ISkills>("Skills", skillsSchema);
