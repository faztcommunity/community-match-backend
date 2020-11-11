import { Document, model, Schema } from "mongoose";

interface IProject extends Document {
    name: string;
    description: string;
    url: {
        image: string;
        githubLink: string;
    };
    stars: number;
    admin: string;
    contributors: string[];
    tecnologies: ASkills[];
};

interface ASkills {
    name: string; // name of the skill
    percent: number; // percentage of the abilitie (0 - 100)
    note: string; // optional note to skill
    imageUrl: string; // url of the skill image
};

const skillsSchema = new Schema({
    name: String,
    description: String,
    url: {
        image: String,
        githubLink: String,
    },
    stars: Number,
    admin: String,
    contributors: [],
    tecnologies: []
});

export default model<IProject>("Skills", skillsSchema);
